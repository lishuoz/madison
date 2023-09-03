import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Testimonials',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle(
      'Customer Testimonials on custom shutters, blinds, curtains and shades Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    // Add the additional meta tags
    this.metaService.addTag({
      httpEquiv: 'Content-Type',
      content: 'text/html; charset=utf-8',
    });
    this.metaService.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });

    // Additional Open Graph (og) meta tags for "Testimonials" page
    this.metaService.addTag({ property: 'og:title', content: 'Testimonials' });
    this.metaService.addTag({ property: 'og:type', content: 'article' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://www.madisonavenueshutters.com/testimonials/',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content:
        'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
    });
    this.metaService.addTag({
      property: 'og:description',
      content:
        'Madison Avenue Window Fashion offers an expansive collection of vertical and horizontal blinds and shades in a wide variety of colours. Our consultants are experienced, specially trained, experts ready to help you choose and install the blinds or shades best suited to your individual needs, styles and tastes. Our goal is for our',
    });
    this.metaService.addTag({
      property: 'og:image',
      content:
        'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
    });

    // Add the remaining meta tags
    this.metaService.addTag({
      name: 'description',
      content:
        'Customer Testimonials on custom shutters, blinds, curtains and shades - We put customer satisfaction above everything else!',
    });
    this.metaService.addTag({
      name: 'robots',
      content: 'max-image-preview:large',
    });
    this.metaService.addTag({
      name: 'keywords',
      content:
        'testimonials,shutters oakville,blinds oakville,shades oakville,curtains oakville,窗帘奥克维尔,奥克维尔窗帘,窗帘密西沙加,密西沙加窗帘',
    });
    this.metaService.addTag({
      rel: 'canonical',
      href: 'https://www.madisonavenueshutters.com/testimonials/',
    });
    this.metaService.addTag({
      name: 'generator',
      content: 'All in One SEO (AIOSEO) 4.2.6.1',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'en_US' });
    this.metaService.addTag({
      property: 'og:site_name',
      content:
        'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades | 窗帘,木百叶窗,斑马帘,布艺,卷帘',
    });
    this.metaService.addTag({ property: 'og:type', content: 'activity' });
    this.metaService.addTag({
      property: 'og:description',
      content:
        'Customer Testimonials on custom shutters, blinds, curtains and shades - We put customer satisfaction above everything else!',
    });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://www.madisonavenueshutters.com/testimonials/',
    });
    this.metaService.addTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.addTag({
      name: 'twitter:title',
      content:
        'Customer Testimonials on custom shutters, blinds, curtains and shades Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
    });
    this.metaService.addTag({
      name: 'twitter:description',
      content:
        'Customer Testimonials on custom shutters, blinds, curtains and shades - We put customer satisfaction above everything else!',
    });
    this.metaService.addTag({
      name: 'google',
      content: 'nositelinkssearchbox',
    });
  }
}
