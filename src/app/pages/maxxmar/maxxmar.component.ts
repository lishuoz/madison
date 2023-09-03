import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-maxxmar',
  templateUrl: './maxxmar.component.html',
  styleUrls: ['./maxxmar.component.scss'],
})
export class MaxxmarComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'The Maxxmar Collection',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Madison Avenue Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        rel: 'shortcut icon',
        href: 'https://www.madisonavenueshutters.com/wp-content/themes/Avada%20Theme/Avada/images/fav.png',
        type: 'image/x-icon',
      },
      {
        name: 'description',
        content:
          'We have designed our showroom around the latest innovations in window covering design. the best window covering in oakville and burlington',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'keywords',
        content:
          'madison avenue shutters,shades,blinds,curtain,the best,window covering,oakville,burlington',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/the-maxxmar-collection/',
      },
      { name: 'generator', content: 'All in One SEO (AIOSEO) 4.2.6.1' },
      { property: 'og:locale', content: 'en_US' },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades | 窗帘,木百叶窗,斑马帘,布艺,卷帘',
      },
      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Madison Avenue Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'We have designed our showroom around the latest innovations in window covering design. the best window covering in oakville and burlington',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/',
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content:
          'Madison Avenue Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'We have designed our showroom around the latest innovations in window covering design. the best window covering in oakville and burlington',
      },
      { name: 'google', content: 'nositelinkssearchbox' },
      { property: 'og:title', content: 'The Maxxmar Collection' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/',
      },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Offering the largest and most diverse collection of innovative, stylish, and energy-efficient window fashions, Madison Avenue is continually innovating window fashion operating systems with ease of use and child safety in mind. Our exclusive Lifetime Limited Warranty is only possible because our branded window fashions are designed, and custom-assembled in Canada. When you’re looking for',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
