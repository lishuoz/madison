import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-dual-shade-toronto',
  templateUrl: './blog-dual-shade-toronto.component.html',
  styleUrls: ['./blog-dual-shade-toronto.component.scss'],
})
export class BlogDualShadeTorontoComponent implements OnInit {
  blog: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      // Extract the first segment
      if (segments.length > 0) {
        const path = '/' + segments[0].path;
        this.blog = this.blogService.blogs.find(b => b?.path === path);
      }
    });

    this.titleService.setTitle(
      'Unlock Versatility and Elegance with Dual Shades',
    );

    this.metaService.addTags([
      {
        name: 'description',
        content: 'Unlock Versatility and Elegance with Dual Shades',
      },
      {
        name: 'keywords',
        content:
          ' Dual Shade, Dual Blinds, Zebra Shade, Zebra Blinds, Window Coverings Toronto, Home Decor, Custom Blinds, Blinds Oakville',
      },
    ]);
  }
}
