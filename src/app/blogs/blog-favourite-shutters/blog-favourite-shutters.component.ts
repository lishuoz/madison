import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-favourite-shutters',
  templateUrl: './blog-favourite-shutters.component.html',
  styleUrls: ['./blog-favourite-shutters.component.scss'],
})
export class BlogFavouriteShuttersComponent implements OnInit {
  tags = [
    'Blinds',
    'Curtains',
    'Drapes',
    'Shades',
    'Sheers',
    'Shutters',
    'Window Coverings',
  ];

  constructor() {}

  ngOnInit(): void {}
}
