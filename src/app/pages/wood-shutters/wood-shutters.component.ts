import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wood-shutters',
  templateUrl: './wood-shutters.component.html',
  styleUrls: ['./wood-shutters.component.scss'],
})
export class WoodShuttersComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Wood Shutters',
      link: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
