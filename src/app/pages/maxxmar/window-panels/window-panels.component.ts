import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
