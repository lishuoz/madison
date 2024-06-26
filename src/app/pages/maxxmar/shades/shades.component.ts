import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss'],
})
export class ShadesComponent implements OnInit {
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
      name: 'Shades',
      link: null,
    },
  ];

  bannerSlider = {
    id: 'bannerSlider',
    images: [
      'assets/images/shades-slide-1.jpg',
      'assets/images/shades-slide-2.jpg',
      'assets/images/shades-slide-3.jpg',
    ],
  };

  dueShadesSlider = {
    id: 'dueShadesSlider',
    images: ['assets/images/IMG_0139.jpg', 'assets/images/IMG_0075.jpg'],
    interval: 3000,
  };

  operaShadesSlider = {
    id: 'operaShadesSlider',
    images: [
      'assets/images/IMG_0077.jpg',
      'assets/images/dual-shade-opera.jpg',
    ],
    interval: 3000,
  };

  opearShadeCtrlSlider = {
    id: 'opearShadeCtrlSlider',
    images: ['assets/images/IMG_0122.jpg'],
    interval: 3000,
  };

  miraSlider = {
    id: 'miraSlider',
    images: ['assets/images/IMG_0096.jpg'],
    interval: 3000,
  };

  sunsetSlider = {
    id: 'sunsetSlider',
    images: [
      'assets/images/Sunset-Shades.jpg',
      'assets/images/Sunset-shade2.jpg',
    ],
    interval: 3000,
  };

  romanSlider = {
    id: 'romanSlider',
    images: [
      'assets/images/Roman-shade-1.jpg',
      'assets/images/Roman-shade2.jpg',
      'assets/images/roman-shades-3.jpg',
    ],
    interval: 3000,
  };

  vistaSlider = {
    id: 'vistaSlider',
    images: ['assets/images/Mira-Vista-Pleated-Shades.jpg'],
    interval: 3000,
  };

  cellularSlider = {
    id: 'cellularSlider',
    images: ['assets/images/Cellular-Shades.jpg'],
    interval: 3000,
  };

  verticalSlider = {
    id: 'verticalSlider',
    images: ['assets/images/vertical-shading.jpg'],
    interval: 3000,
  };

  motorSlider = {
    id: 'motorSlider',
    images: ['assets/images/Motorization.jpg'],
    interval: 3000,
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Collection of Shades | 窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
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
          'Madison Avenue Window Fashions offers a variety of shades: dual shades, roller shades, sunset shades, roman shades, pleated shades, cellular shades, vertical shades,',
      },
      {
        name: 'keywords',
        content:
          'dual shades,roller shades,sunset shades,roman shades,pleated shades,cellular shades,vertical shades,',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/the-maxxmar-collection/shades/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Collection of Shades | 窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Madison Avenue Window Fashions offers a variety of shades: dual shades, roller shades, sunset shades, roman shades, pleated shades, cellular shades, vertical shades,',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/shades/',
      },

      {
        name: 'twitter:title',
        content:
          'Collection of Shades | 窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Madison Avenue Window Fashions offers a variety of shades: dual shades, roller shades, sunset shades, roman shades, pleated shades, cellular shades, vertical shades,',
      },

      { property: 'og:title', content: 'Shades' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/shades/',
      },

      {
        property: 'og:description',
        content:
          'At Madison Avenue Window Fashions, we offer an extensive selection of shades in a wide variety of colors. View some of Madison Avenue Window Fashions Showroom Shades.',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
