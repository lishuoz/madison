import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-window-panels',
  templateUrl: './window-panels.component.html',
  styleUrls: ['./window-panels.component.scss'],
})
export class WindowPanelsComponent implements OnInit {
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
      name: 'Window Panels',
      link: null,
    },
  ];

  bannerSlider = {
    id: 'bannerSlider',
    images: [
      'assets/images/window-panels-1.jpg',
      'assets/images/window-panels-2.jpg',
    ],
  };

  vista = {
    id: 'vista',
    images: [
      'assets/images/skyline-window-panels-1.jpg',
      'assets/images/skyline-window-panels-2.jpg',
      'assets/images/skyline-window-panels-3.jpg',
    ],
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Window Panels Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Panel Tracks provide a refined accent to your décor. 窗帘滚筒轨道以及底部为您的窗饰提供雅致的重量。',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'keywords',
        content:
          'window panel,oakville,mississauga,toronto,burlington,milton,hamilton,north york,窗帘滚筒,窗帘奥克维尔,窗帘多伦多,窗帘密西沙加',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/the-maxxmar-collection/window-panels/',
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
          'Window Panels Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Panel Tracks provide a refined accent to your décor. 窗帘滚筒轨道以及底部为您的窗饰提供雅致的重量。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/window-panels/',
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content:
          'Window Panels Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Panel Tracks provide a refined accent to your décor. 窗帘滚筒轨道以及底部为您的窗饰提供雅致的重量。',
      },
      { name: 'google', content: 'nositelinkssearchbox' },
      { property: 'og:title', content: 'Window Panels' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/window-panels/',
      },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Mira Vista Sliding Panels offer the perfect solution, we have large and small window panels. The window panels can also be used as a stylish room divider system to dress any window in style. Book an appointment and view our Showroom.\n\nMira Vista Sliding Panels',
      },
    ]);
  }
}
