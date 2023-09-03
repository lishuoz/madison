import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About Us',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle(
      'About 关于| Madison Avenue Window Fashions麦迪森窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    // Add the additional meta tags
    this.metaService.addTag({
      httpEquiv: 'Content-Type',
      content: 'text/html; charset=utf-8',
    });

    // Conditional IE 8 HTML5 Shiv script
    this.metaService.addTag(
      { name: 'if lt IE 8', content: 'IE compatibility mode' },
      true
    );
    this.metaService.addTag(
      { name: 'if lt IE 8', content: 'IE compatibility mode' },
      true
    );
    this.metaService.addTag(
      { name: 'if lt IE 8', content: 'IE compatibility mode' },
      true
    );

    this.metaService.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.metaService.addTag({
      rel: 'shortcut icon',
      href: 'https://www.madisonavenueshutters.com/wp-content/themes/Avada%20Theme/Avada/images/fav.png',
      type: 'image/x-icon',
    });

    // Additional Open Graph (og) meta tags for "About Us" page
    this.metaService.addTag({ property: 'og:title', content: 'About Us' });
    this.metaService.addTag({ property: 'og:type', content: 'article' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://www.madisonavenueshutters.com/about-us/',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content:
        'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
    });
    this.metaService.addTag({
      property: 'og:description',
      content:
        'Madison Avenue’s past experience in graphic, interior and furniture design provides us with the skills to transform your windows into the centre piece of your home. Madison Avenue will ensure your expectations are exceeded from the initial consultation through the final installation. Our 30 years of experience and extensive background with colour and',
    });
    this.metaService.addTag({
      property: 'og:image',
      content:
        'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
    });
  }
}
