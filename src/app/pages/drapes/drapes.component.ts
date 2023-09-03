import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-drapes',
  templateUrl: './drapes.component.html',
  styleUrls: ['./drapes.component.scss'],
})
export class DrapesComponent implements OnInit {
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

  drapesSlider = {
    id: 'drapes',
    images: ['assets/images/drapery-slide-1.jpg', 'assets/images/drapes-2.jpg'],
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Drapes | 布艺窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
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
          'There’s a perfect choice for every room with custom-made drapes, a cost-effective window covering solutions. 定制布艺窗帘对每个房间而言都是完美的选择，这是当今市场最具成本效益的窗帘解决方案。',
      },
      {
        name: 'keywords',
        content:
          'custom drapes,drapes,drapes oakville,drapes mississauga,toronto,burlington,milton,hamilton,north york,scarborough,markham,布艺,布艺窗帘,窗帘奥克维尔,窗帘多伦多,窗帘密西沙加',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/drapes/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Drapes | 布艺窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'There’s a perfect choice for every room with custom-made drapes, a cost-effective window covering solutions. 定制布艺窗帘对每个房间而言都是完美的选择，这是当今市场最具成本效益的窗帘解决方案。',
      },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/drapes/',
      },

      {
        name: 'twitter:title',
        content:
          'Drapes | 布艺窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'There’s a perfect choice for every room with custom-made drapes, a cost-effective window covering solutions. 定制布艺窗帘对每个房间而言都是完美的选择，这是当今市场最具成本效益的窗帘解决方案。',
      },

      { property: 'og:title', content: 'Drapes' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/drapes/',
      },

      {
        property: 'og:description',
        content:
          'There’s a Perfect Choice for Every Room\nOur bespoke drapes represent one of the most cost-effective window covering solutions currently on the market. The choices are limitless! Mix-and-Match based on your taste, we carry hundreds of different styles, fabrics colours, and designs. Modern or traditional, plain or printed, at Madison Avenue Window',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
