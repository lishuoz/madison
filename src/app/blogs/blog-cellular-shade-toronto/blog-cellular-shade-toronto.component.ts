import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-cellular-shade-toronto',
  templateUrl: './blog-cellular-shade-toronto.component.html',
  styleUrls: ['./blog-cellular-shade-toronto.component.scss'],
})
export class BlogCellularShadeTorontoComponent implements OnInit {
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
      'Transform Your Home with Stylish Cellular Shades: Perfect Window Coverings in Toronto',
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Transform Your Home with Stylish Cellular Shades: Perfect Window Coverings in Toronto',
      },
      {
        name: 'keywords',
        content:
          'Cellular Shade, Custom Blinds, Window Coverings Toronto, Window Treatments, Honeycomb Shades',
      },
    ]);
  }
}
