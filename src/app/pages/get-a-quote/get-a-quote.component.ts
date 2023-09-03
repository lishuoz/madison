import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Get a Free Quote',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Get a Free Quote Madison Avenue Window Fashion - Shutters, Blinds, Curtains & Shades Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
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
          'Custom Window Blinds, Shades, Shutters, made to your specifications. We are a Hunter Douglas Dealer Serving Toronto The GTA for over 30 years. We sell a variety of blinds and shades, such as roman blinds, pirouette blinds, horizontal and vertical blinds, duette blinds and woven wood shades.',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'keywords',
        content:
          'shades oakville,shades burlington,shades milton,shades mississauga,shades hamilton,shades brampton',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/get-a-quote/',
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
          'Get a Free Quote Madison Avenue Window Fashion - Shutters, Blinds, Curtains & Shades Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Custom Window Blinds, Shades, Shutters, made to your specifications. We are a Hunter Douglas Dealer Serving Toronto The GTA for over 30 years. We sell a variety of blinds and shades, such as roman blinds, pirouette blinds, horizontal and vertical blinds, duette blinds and woven wood shades.',
      },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/get-a-quote/',
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content:
          'Get a Free Quote Madison Avenue Window Fashion - Shutters, Blinds, Curtains & Shades Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Custom Window Blinds, Shades, Shutters, made to your specifications. We are a Hunter Douglas Dealer Serving Toronto The GTA for over 30 years. We sell a variety of blinds and shades, such as roman blinds, pirouette blinds, horizontal and vertical blinds, duette blinds and woven wood shades.',
      },
      { name: 'google', content: 'nositelinkssearchbox' },
      { property: 'og:title', content: 'Get a Free Quote' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/get-a-quote/',
      },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Madison Avenue Window Fashions will give your home the beautiful finishing touch you’ve been waiting for. Get your free quote today! You can reach us by phone, email, or by filling out our form below. We’ll give you a free customized quote or in-home consultation. Get started today!',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
