import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-hive-shutters',
  templateUrl: './blog-hive-shutters.component.html',
  styleUrls: ['./blog-hive-shutters.component.scss'],
})
export class BlogHiveShuttersComponent implements OnInit {
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
