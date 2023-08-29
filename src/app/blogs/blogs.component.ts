import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
  ];

  blogs = this.blogService.blogs;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
}
