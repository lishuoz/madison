import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
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
}
