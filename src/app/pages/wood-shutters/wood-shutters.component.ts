import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wood-shutters',
  templateUrl: './wood-shutters.component.html',
  styleUrls: ['./wood-shutters.component.scss'],
})
export class WoodShuttersComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Wood Shutters',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
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
          'Madison Avenue Window Fashion has been supplying & installing the best Wood shutters and California shutters in a variety of stains in Oakville and Burlington.',
      },
      {
        name: 'keywords',
        content:
          'shutters,california shutters,wood shutters,oakville,burlington,shutters oakville,shutters burlington,the best shutters',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/window-shutters-oakville-burlington/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Wood & California Shutters | Oakville & Burlington Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Madison Avenue Window Fashion has been supplying & installing the best Wood shutters and California shutters in a variety of stains in Oakville and Burlington.',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/window-shutters-oakville-burlington/',
      },

      {
        name: 'twitter:title',
        content:
          'Wood & California Shutters | Oakville & Burlington Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Madison Avenue Window Fashion has been supplying & installing the best Wood shutters and California shutters in a variety of stains in Oakville and Burlington.',
      },

      { property: 'og:title', content: 'Wood Shutters' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/window-shutters-oakville-burlington/',
      },

      {
        property: 'og:description',
        content:
          'At Madison Avenue Window Fashion we’ve been supplying and installing custom wood shutters to our customers for over 30 years. Whether it be the classic California Shutter style or a customized style and design of shutters, all our installations are performed by factory trained installers with years of experience working respectfully within customer',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);

    this.titleService.setTitle(
      'Wood & California Shutters | Oakville & Burlington Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );
  }
}
