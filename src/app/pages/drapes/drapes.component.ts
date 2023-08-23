import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
