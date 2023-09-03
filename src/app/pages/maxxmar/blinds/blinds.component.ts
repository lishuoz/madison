import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blinds',
  templateUrl: './blinds.component.html',
  styleUrls: ['./blinds.component.scss'],
})
export class BlindsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'The Maxxmar Collection',
      link: '/the-maxxmar-collection',
    },
    {
      name: 'Blinds',
      link: null,
    },
  ];

  bannerSlider = {
    id: 'bannerSlider',
    images: ['assets/images/Fauxwood-blinds.jpeg'],
  };

  zurich = {
    id: 'zurich',
    images: ['assets/images/zurich.jpg'],
  };

  moritz = {
    id: 'moritz',
    images: ['assets/images/stmoritz.jpg'],
  };

  faux = {
    id: 'faux',
    images: ['assets/images/IMG_0140.jpg'],
  };

  pvc = {
    id: 'faux',
    images: ['assets/images/maxxvaluepvc.jpg'],
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Collection of Blinds Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );
    this.metaService.addTags([
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
          'We offer a variety of blinds to choose from for any room in your home. View our Showroom to choose your Blinds today.',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'keywords',
        content:
          'shutters oakville,blinds oakville,curtains oakville,shades oakville,zebra oakville,窗帘',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/the-maxxmar-collection/blinds/',
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
          'Collection of Blinds Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'We offer a variety of blinds to choose from for any room in your home. View our Showroom to choose your Blinds today.',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/blinds/',
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content:
          'Collection of Blinds Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'We offer a variety of blinds to choose from for any room in your home. View our Showroom to choose your Blinds today.',
      },
      { name: 'google', content: 'nositelinkssearchbox' },
      { property: 'og:title', content: 'Blinds' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/blinds/',
      },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'At Madison Avenue Window Fashion, we offer an extensive selection of vertical and horizontal blinds in a wide variety of colours. View Madison Avenue Showroom Blinds.\n\nZurich Faux wood Blinds\n\nZurich Faux Wood Blinds is a unique blend of resin and wood fused together to',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
