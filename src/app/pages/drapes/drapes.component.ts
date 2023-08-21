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

  constructor() {}

  ngOnInit(): void {}
}
