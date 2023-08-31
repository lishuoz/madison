import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/blogs/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
  ];

  tag: string;

  blogs: any[];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tag = params['tag'];
      this.breadcrumbs[1] = {
        name: this.tag,
        link: '',
      };
      this.blogs = this.blogService.blogs.filter((blog) =>
        blog.tags.includes(this.tag)
      );
      if (!this.blogs.length) this.router.navigate(['/']);
    });
  }
}
