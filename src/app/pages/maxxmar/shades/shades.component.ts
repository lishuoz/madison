import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
