import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maxxmar',
  templateUrl: './maxxmar.component.html',
  styleUrls: ['./maxxmar.component.scss'],
})
export class MaxxmarComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'The Maxxmar Collection',
      link: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
