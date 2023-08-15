import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  links = [
    {
      name: 'Home',
      url: '',
    },
    {
      name: 'About Us',
      url: 'about-us',
    },
    {
      name: 'Testimonials',
      url: 'testimonials',
    },
    {
      name: 'Blog',
      url: 'blog',
    },
    {
      name: 'Contact',
      url: 'contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
