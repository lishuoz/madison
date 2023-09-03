import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shutters',
  templateUrl: './shutters.component.html',
  styleUrls: ['./shutters.component.scss'],
})
export class ShuttersComponent implements OnInit {
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
      name: 'Shutters',
      link: null,
    },
  ];

  summerview = {
    id: 'summerview',
    images: ['assets/images/summerview.jpg'],
  };

  somerset = {
    id: 'somerset',
    images: ['assets/images/somerset.jpg'],
  };

  cashmere = {
    id: 'cashmere',
    images: ['assets/images/cashmere.jpg'],
  };

  marco = {
    id: 'marco',
    images: ['assets/images/dark-shutters.jpg'],
  };

  shapes = {
    id: 'shapes',
    images: ['assets/images/speciality-shapes.jpg'],
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Shutters | Toronto Oakville GTA Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
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
          'We offers high quality wood & California shutters for over 30 years. We service Oakville, Burlington, Toronto, Mississauga, Brampton, Markham, Scarborough, GTA.',
      },
      {
        name: 'keywords',
        content:
          'shutters toronto,shutters oakville,shutters burlington,wood shutters,california shutters,百叶窗奥克维尔',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/the-maxxmar-collection/shutters/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Shutters | Toronto Oakville GTA Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'We offers high quality wood & California shutters for over 30 years. We service Oakville, Burlington, Toronto, Mississauga, Brampton, Markham, Scarborough, GTA.',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/shutters/',
      },

      {
        name: 'twitter:title',
        content:
          'Shutters | Toronto Oakville GTA Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'We offers high quality wood & California shutters for over 30 years. We service Oakville, Burlington, Toronto, Mississauga, Brampton, Markham, Scarborough, GTA.',
      },

      { property: 'og:title', content: 'Shutters' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/the-maxxmar-collection/shutters/',
      },

      {
        property: 'og:description',
        content:
          'Summerview Shutters\n\nThe clean lines of Summerview PolySilk Shutters give them both an elegant and yet modern look. Available in popular colour choices from cool whites to rich mocha, these shutters come in three louver sizes: 2 ½”, 3 ½” and 4 ½”. Finely crafted with premium materials',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Madison-Window-Logo-1-1.png',
      },
    ]);
  }
}
