import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

/**
 * Canonical phone numbers the site is allowed to display. The `text` is the
 * visible form (preserving the punctuation used in the templates) and the
 * `href` is the matching `tel:` URI. The first entry is treated as the
 * default fallback when nothing else can be matched, so make sure it stays
 * the safest / most-correct number.
 *
 * The allowlist is intentionally hardcoded inside the bundle so that scripts
 * which try to register their own "canonical" number through tampered DOM
 * (e.g. injecting a `data-lock-phone` element with attacker-controlled data
 * attributes before the guard runs) cannot poison the guard's state.
 */
const CANONICAL_PHONES: ReadonlyArray<{ text: string; href: string }> = [
  { text: '647-333-0303', href: 'tel:+16473330303' },
  { text: '647.333.0303', href: 'tel:+16473330303' },
];

interface LockedPhone {
  readonly text: string;
  readonly href: string;
}

const LOCK_SELECTOR = '[data-lock-phone="true"]';

/** Strict match for a canonical phone text (used by auto-discovery). */
const PHONE_TEXT_PATTERN = /(647-333-0303|647\.333\.0303)/g;

/**
 * Permissive match for "anything that looks like a North American phone
 * number". Used by the surgical re-write step in `enforce()` so that an
 * attacker who swapped the displayed digits to a *different* number still
 * gets reverted to the canonical, even when the substitute does not match
 * {@link PHONE_TEXT_PATTERN}.
 *
 * Note: this regex deliberately runs over text content that we already
 * know belongs to a locked phone element, so a slightly permissive shape
 * (which could in theory match unrelated digit clusters) is safe here.
 */
const PHONE_SHAPE_PATTERN =
  /(?:\+?1[\s.\-]?)?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}/g;

/** Tags whose text nodes must NOT be touched by auto-discovery. */
const AUTO_DISCOVER_SKIP_TAGS: ReadonlySet<string> = new Set([
  'SCRIPT',
  'STYLE',
  'TEXTAREA',
  'INPUT',
  'TITLE',
  'NOSCRIPT',
]);

/**
 * Hardens every `[data-lock-phone="true"]` element in the page against
 * runtime tampering of its phone number. Common attack vectors include
 * malicious browser extensions, third-party scripts, and DOM-based XSS
 * payloads that swap the dialed number to redirect calls elsewhere.
 *
 * Defenses in order:
 *  1. A hardcoded allowlist of canonical phones — unknown numbers cannot
 *     be registered, and a partially tampered lock falls back to the
 *     canonical that matches `href` (or, last resort, the default).
 *  2. A private `WeakMap` snapshot of every locked element's canonical
 *     pair, captured the first time the guard sees the element. After
 *     that, the data-* attributes are never trusted again.
 *  3. A `MutationObserver` on the body subtree that re-enforces the
 *     snapshot whenever a locked element (or any of its descendants) is
 *     modified.
 *  4. Capture-phase `mousedown` / `click` / `auxclick` / `contextmenu` /
 *     `touchstart` / `focusin` handlers that re-enforce synchronously,
 *     so a tamper-then-immediately-click race cannot beat the (async)
 *     observer.
 *  5. An auto-discovery pass that wraps any orphan canonical-phone text
 *     in a locked span — and, when that text is already inside a
 *     `tel:` anchor, promotes the lock to the anchor itself so its
 *     `href` is also protected.
 */
@Injectable({ providedIn: 'root' })
export class PhoneGuardService implements OnDestroy {
  private observer: MutationObserver | null = null;
  private readonly locked = new WeakMap<Element, LockedPhone>();
  private started = false;

  private readonly enforcePointer = (event: Event): void => {
    const node = event.target as Node | null;
    if (!node) return;
    const start: Element | null =
      node.nodeType === Node.ELEMENT_NODE
        ? (node as Element)
        : node.parentElement;
    const locked = start?.closest(LOCK_SELECTOR) ?? null;
    if (!locked) return;
    this.enforce(locked);
  };

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly zone: NgZone,
  ) {}

  /** Activates the guard. Safe to call more than once. */
  init(): void {
    if (this.started) return;
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof MutationObserver === 'undefined') return;
    this.started = true;

    this.zone.runOutsideAngular(() => {
      const body = this.doc.body;
      this.scanAndLock(body);

      this.observer = new MutationObserver((mutations) =>
        this.handleMutations(mutations),
      );
      this.observer.observe(body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: [
          'href',
          'data-lock-phone',
          'data-phone-text',
          'data-phone-href',
        ],
      });

      const opts: AddEventListenerOptions = { capture: true, passive: false };
      this.doc.addEventListener('mousedown', this.enforcePointer, opts);
      this.doc.addEventListener('click', this.enforcePointer, opts);
      this.doc.addEventListener('auxclick', this.enforcePointer, opts);
      this.doc.addEventListener('contextmenu', this.enforcePointer, opts);
      this.doc.addEventListener('touchstart', this.enforcePointer, opts);
      this.doc.addEventListener('focusin', this.enforcePointer, opts);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    const opts: EventListenerOptions = { capture: true };
    this.doc.removeEventListener('mousedown', this.enforcePointer, opts);
    this.doc.removeEventListener('click', this.enforcePointer, opts);
    this.doc.removeEventListener('auxclick', this.enforcePointer, opts);
    this.doc.removeEventListener('contextmenu', this.enforcePointer, opts);
    this.doc.removeEventListener('touchstart', this.enforcePointer, opts);
    this.doc.removeEventListener('focusin', this.enforcePointer, opts);
  }

  private scanAndLock(root: Node): void {
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const el = root as Element;
    if (el.matches?.(LOCK_SELECTOR)) {
      this.lockElement(el);
    }
    const matches = el.querySelectorAll?.(LOCK_SELECTOR);
    matches?.forEach((node) => this.lockElement(node));
    this.autoDiscover(el);
  }

  /**
   * Finds canonical phone numbers in text nodes that were NOT authored with
   * explicit `data-lock-phone` markers (typical when phones live in
   * `[innerHTML]`-rendered HTML, whose `data-*` attributes are stripped by
   * Angular's sanitizer) and brings them under guard:
   *
   *  - When the discovered text sits inside a `tel:` anchor, the anchor
   *    itself is promoted to a locked element so its `href` is protected.
   *  - Otherwise, only the phone substring is wrapped in a locked `<span>`,
   *    leaving surrounding sentence text intact.
   */
  private autoDiscover(root: Element): void {
    if (!this.doc.createTreeWalker) return;
    const walker = this.doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node: Node): number => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (AUTO_DISCOVER_SKIP_TAGS.has(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest(LOCK_SELECTOR)) {
          return NodeFilter.FILTER_REJECT;
        }
        const value = node.nodeValue ?? '';
        PHONE_TEXT_PATTERN.lastIndex = 0;
        return PHONE_TEXT_PATTERN.test(value)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    const pending: Text[] = [];
    let current = walker.nextNode();
    while (current) {
      pending.push(current as Text);
      current = walker.nextNode();
    }
    pending.forEach((textNode) => this.handleDiscoveredText(textNode));
  }

  private handleDiscoveredText(textNode: Text): void {
    const parent = textNode.parentElement;
    if (!parent) return;

    // If the phone sits inside a tel: anchor, lock the anchor itself so
    // both its href AND its visible text are protected together.
    const telAnchor = parent.closest('a[href^="tel:"]') as Element | null;
    if (telAnchor && !this.locked.has(telAnchor)) {
      const value = textNode.nodeValue ?? '';
      PHONE_TEXT_PATTERN.lastIndex = 0;
      const m = PHONE_TEXT_PATTERN.exec(value);
      if (m) {
        if (!telAnchor.getAttribute('data-phone-text')) {
          telAnchor.setAttribute('data-phone-text', m[0]);
        }
      }
      telAnchor.setAttribute('data-lock-phone', 'true');
      this.lockElement(telAnchor);
      return;
    }

    // Otherwise the text lives in a plain element — wrap only the phone
    // substring(s) so surrounding sentence text is not touched.
    this.wrapPhoneText(textNode);
  }

  private wrapPhoneText(textNode: Text): void {
    const parent = textNode.parentNode;
    const original = textNode.nodeValue ?? '';
    if (!parent || !original) return;
    PHONE_TEXT_PATTERN.lastIndex = 0;
    if (!PHONE_TEXT_PATTERN.test(original)) return;

    const fragment = this.doc.createDocumentFragment();
    PHONE_TEXT_PATTERN.lastIndex = 0;
    let cursor = 0;
    let match: RegExpExecArray | null;
    const spansToLock: Element[] = [];
    while ((match = PHONE_TEXT_PATTERN.exec(original)) !== null) {
      if (match.index > cursor) {
        fragment.appendChild(
          this.doc.createTextNode(original.slice(cursor, match.index)),
        );
      }
      const span = this.doc.createElement('span');
      span.setAttribute('data-lock-phone', 'true');
      span.setAttribute('data-phone-text', match[0]);
      span.textContent = match[0];
      fragment.appendChild(span);
      spansToLock.push(span);
      cursor = match.index + match[0].length;
    }
    if (cursor < original.length) {
      fragment.appendChild(this.doc.createTextNode(original.slice(cursor)));
    }
    parent.replaceChild(fragment, textNode);
    spansToLock.forEach((span) => this.lockElement(span));
  }

  /**
   * Resolves a locked element to its canonical pair using a chain of
   * progressively more lenient sources:
   *   1. `data-phone-text` (the template-author's declared canonical).
   *   2. `href` (when the element is a tel: anchor, useful if the visible
   *      text was tampered before the guard saw the element).
   *   3. The trimmed visible text (last resort, only matters when neither
   *      a data attribute nor an href was set).
   * If nothing matches, we still lock against the default canonical (the
   * first entry in {@link CANONICAL_PHONES}) and log a warning — this is
   * safer than removing the marker and leaving the element unprotected,
   * because every locked element on this site IS meant to be a Madison
   * phone number.
   */
  private resolveCanonical(el: Element): LockedPhone {
    const dataText = (el.getAttribute('data-phone-text') ?? '').trim();
    let match = CANONICAL_PHONES.find((p) => p.text === dataText);
    if (match) return { text: match.text, href: match.href };

    if (el.tagName === 'A') {
      const declaredHref =
        el.getAttribute('data-phone-href') ??
        (el as HTMLAnchorElement).getAttribute('href') ??
        '';
      match = CANONICAL_PHONES.find((p) => p.href === declaredHref);
      if (match) return { text: match.text, href: match.href };
    }

    const renderedText = (el.textContent ?? '').trim();
    match = CANONICAL_PHONES.find((p) => p.text === renderedText);
    if (match) return { text: match.text, href: match.href };

    if (typeof console !== 'undefined') {
      console.warn(
        '[PhoneGuard] No matching canonical for locked element; falling back to default.',
        { dataText, renderedText, tag: el.tagName },
      );
    }
    const fallback = CANONICAL_PHONES[0]!;
    return { text: fallback.text, href: fallback.href };
  }

  private lockElement(el: Element): void {
    if (this.locked.has(el)) {
      this.enforce(el);
      return;
    }
    const canonical = this.resolveCanonical(el);
    this.locked.set(el, canonical);
    this.enforce(el);
  }

  /**
   * Restores the canonical href / data-* markers and surgically rewrites
   * any phone-shaped substring inside the element back to canonical. This
   * deliberately leaves non-text children (icons, etc.) and unrelated
   * sentence text untouched — only digit clusters that match
   * {@link PHONE_SHAPE_PATTERN} are touched.
   */
  private enforce(el: Element): void {
    const c = this.locked.get(el);
    if (!c) return;

    this.restorePhoneText(el, c.text);

    if (el.tagName === 'A') {
      const anchor = el as HTMLAnchorElement;
      if (anchor.getAttribute('href') !== c.href) {
        anchor.setAttribute('href', c.href);
      }
    }

    if (el.getAttribute('data-phone-text') !== c.text) {
      el.setAttribute('data-phone-text', c.text);
    }
    if (
      el.hasAttribute('data-phone-href') &&
      el.getAttribute('data-phone-href') !== c.href
    ) {
      el.setAttribute('data-phone-href', c.href);
    }
    if (el.getAttribute('data-lock-phone') !== 'true') {
      el.setAttribute('data-lock-phone', 'true');
    }
  }

  private restorePhoneText(el: Element, canonical: string): void {
    const textNodes = this.collectTextNodes(el);
    const concatenated = textNodes
      .map((t) => t.nodeValue ?? '')
      .join('');

    // Early-exit when the visible text already contains the canonical
    // substring and every detected phone-shaped run equals the canonical.
    PHONE_SHAPE_PATTERN.lastIndex = 0;
    const allMatches = concatenated.match(PHONE_SHAPE_PATTERN) ?? [];
    const onlyCanonical =
      concatenated.includes(canonical) &&
      allMatches.every((m) => m === canonical);
    if (onlyCanonical) return;

    let inserted = false;
    for (const textNode of textNodes) {
      const original = textNode.nodeValue ?? '';
      PHONE_SHAPE_PATTERN.lastIndex = 0;
      if (!PHONE_SHAPE_PATTERN.test(original)) continue;
      PHONE_SHAPE_PATTERN.lastIndex = 0;
      const replaced = original.replace(PHONE_SHAPE_PATTERN, () => {
        if (!inserted) {
          inserted = true;
          return canonical;
        }
        return '';
      });
      if (replaced !== original) {
        textNode.nodeValue = replaced;
      }
    }

    if (inserted) return;

    // Attacker erased every digit cluster — re-insert canonical without
    // destroying any non-text children. Prefer the first existing text
    // node so trailing icons / siblings stay in place; otherwise append
    // a fresh text node.
    if (textNodes.length > 0) {
      const first = textNodes[0]!;
      first.nodeValue = (first.nodeValue ?? '') + canonical;
    } else if (!el.firstElementChild) {
      el.textContent = canonical;
    } else {
      el.appendChild(this.doc.createTextNode(canonical));
    }
  }

  private collectTextNodes(el: Element): Text[] {
    if (!this.doc.createTreeWalker) {
      const out: Text[] = [];
      el.childNodes.forEach((n) => {
        if (n.nodeType === Node.TEXT_NODE) out.push(n as Text);
      });
      return out;
    }
    const walker = this.doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const out: Text[] = [];
    let n = walker.nextNode();
    while (n) {
      out.push(n as Text);
      n = walker.nextNode();
    }
    return out;
  }

  private handleMutations(mutations: MutationRecord[]): void {
    for (const m of mutations) {
      if (m.type === 'childList') {
        m.addedNodes.forEach((node) => this.scanAndLock(node));
      }

      const node: Node = m.target;
      const start: Element | null =
        node.nodeType === Node.ELEMENT_NODE
          ? (node as Element)
          : node.parentElement;
      let walker: Element | null = start;
      while (walker) {
        if (this.locked.has(walker)) {
          this.enforce(walker);
          break;
        }
        walker = walker.parentElement;
      }
    }
  }
}
