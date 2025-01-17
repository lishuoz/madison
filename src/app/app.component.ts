import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'madison';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is "/thank-you"
        if (event.urlAfterRedirects === '/thank-you') {
          console.log('in thank you page');
          this.addConversionScript();
        } else {
          this.removeScriptFromBody();
        }
      }
    });
  }

  addConversionScript(): void {
    console.log('addConversionScript called');
    // Remove existing script if present (to avoid duplicates)
    const existingScript = document.querySelector('#conversion-script');
    console.log('existingScript ', existingScript);

    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script element
    const script = this.renderer.createElement('script');
    script.id = 'conversion-script';
    script.type = 'text/javascript';
    script.text = `
      gtag("event", "conversion", {
        send_to: "AW-11087804042/Mx6cCJXsnYsaEIrtiacp",
      });
    `;

    // Append the script to the footer
    const body = document.querySelector('body');
    if (body) {
      this.renderer.appendChild(body, script);
    } else {
      console.warn('body element not found.');
    }
  }

  removeScriptFromBody(): void {
    // 移除现有的脚本
    const existingScript = document.querySelector('#conversion-script');
    if (existingScript) {
      existingScript.remove();
    }
  }
}
