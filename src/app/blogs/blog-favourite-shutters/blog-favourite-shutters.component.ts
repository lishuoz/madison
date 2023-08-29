import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-favourite-shutters',
  templateUrl: './blog-favourite-shutters.component.html',
  styleUrls: ['./blog-favourite-shutters.component.scss'],
})
export class BlogFavouriteShuttersComponent implements OnInit {
  blog: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      // Extract the first segment
      if (segments.length > 0) {
        const path = '/' + segments[0].path;
        this.blog = this.blogService.blogs.find((b) => b?.path === path);
      }
    });
  }
}