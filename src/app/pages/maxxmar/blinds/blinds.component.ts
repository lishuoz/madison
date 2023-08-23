import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
