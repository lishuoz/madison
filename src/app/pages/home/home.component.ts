import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle(
      'Custom Window Fashion Solutions | Madison Avenue Window Fashions'
    );

    // Add the additional meta tags
    this.metaService.addTag({
      name: 'robots',
      content: 'max-image-preview:large',
    });
    this.metaService.addTag({
      name: 'keywords',
      content:
        'custom drapes,custom window blinds,custom shutters,custom blinds,oakville,burlington,ontario',
    });
    this.metaService.addTag({
      rel: 'canonical',
      href: 'https://www.madisonavenueshutters.com/',
    });
    this.metaService.addTag({
      name: 'generator',
      content: 'All in One SEO (AIOSEO) 4.2.6.1',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'en_US' });
    this.metaService.addTag({
      property: 'og:site_name',
      content:
        'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes &amp; Shades | 窗帘,木百叶窗,斑马帘,布艺,卷帘',
    });
    this.metaService.addTag({ property: 'og:type', content: 'activity' });
    this.metaService.addTag({
      property: 'og:title',
      content:
        'Custom Window Fashion Solutions | Madison Avenue Window Fashions',
    });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://www.madisonavenueshutters.com/',
    });
    this.metaService.addTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.addTag({
      name: 'twitter:title',
      content:
        'Custom Window Fashion Solutions | Madison Avenue Window Fashions',
    });
    this.metaService.addTag({
      name: 'google',
      content: 'nositelinkssearchbox',
    });

    // Additional Open Graph (og) meta tags
    this.metaService.addTag({ property: 'og:title', content: 'Home' });
    this.metaService.addTag({ property: 'og:type', content: 'article' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://www.madisonavenueshutters.com/',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content:
        'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes &amp; Shades',
    });
    this.metaService.addTag({
      property: 'og:description',
      content:
        'Madison Avenue Window Fashion Your complete satisfaction is always guaranteed by our exclusive Enjoy Madison Avenue Window Fashions in your home without concern about damage or repair for as long as you are there. Our lifetime warranty keeps you worry-free for the entire life',
    });
    this.metaService.addTag({
      property: 'og:image',
      content:
        'https://www.madisonavenueshutters.com/assets/images/Madison-Window-Logo-1-1.png',
    });
    this.metaService.addTag({
      name: 'msapplication-TileImage',
      content:
        'https://www.madisonavenueshutters.com/assets/images/favicon.png',
    });
  }
}
