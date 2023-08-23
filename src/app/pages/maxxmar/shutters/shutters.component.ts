import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shutters',
  templateUrl: './shutters.component.html',
  styleUrls: ['./shutters.component.scss'],
})
export class ShuttersComponent implements OnInit {
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
      name: 'Shutters',
      link: null,
    },
  ];

  summerview = {
    id: 'summerview',
    images: ['assets/images/summerview.jpg'],
  };

  somerset = {
    id: 'somerset',
    images: ['assets/images/somerset.jpg'],
  };

  cashmere = {
    id: 'cashmere',
    images: ['assets/images/cashmere.jpg'],
  };

  marco = {
    id: 'marco',
    images: ['assets/images/dark-shutters.jpg'],
  };

  shapes = {
    id: 'shapes',
    images: ['assets/images/speciality-shapes.jpg'],
  };

  constructor() {}

  ngOnInit(): void {}
}
