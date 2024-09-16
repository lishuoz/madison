import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-custom-wood-shutters',
  templateUrl: './blog-custom-wood-shutters.component.html',
  styleUrls: ['./blog-custom-wood-shutters.component.scss'],
})
export class BlogCustomWoodShuttersComponent implements OnInit {
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
      'Why Wood Shutters Are the Perfect Choice for Classy and Safe Living Spaces',
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          "When it comes to enhancing your home's decor and functionality, custom wood shutters offer a superior solution. ",
      },
      {
        name: 'keywords',
        content:
          'Shutters, Wood Shutters, Custom Shutters, Made in Canada, Window Coverings Oakville, Home Decor, Window Treatments, Sunlight Control',
      },
    ]);
  }
}
