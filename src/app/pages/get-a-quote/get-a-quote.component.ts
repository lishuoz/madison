import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Get a Free Quote',
      link: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
