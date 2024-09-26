import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-sunset-shade-toronto',
  templateUrl: './blog-sunset-shade-toronto.component.html',
  styleUrls: ['./blog-sunset-shade-toronto.component.scss'],
})
export class BlogSunsetShadeTorontoComponent implements OnInit {
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
      'Premium Custom Window Coverings in Toronto: Experience the Sophistication of Sunset Shades',
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Looking to enhance your modern home with both style and functionality? Sunset Shades are the ideal custom window coverings for homeowners in the Greater Toronto Area.',
      },
      {
        name: 'keywords',
        content:
          'Sunset  Shade, Custom Window Coverings, Light Control, Blinds Toronto, Modern Home',
      },
    ]);
  }
}
