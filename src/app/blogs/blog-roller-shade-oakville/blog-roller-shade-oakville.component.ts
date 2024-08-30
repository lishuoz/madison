import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-roller-shade-oakville',
  templateUrl: './blog-roller-shade-oakville.component.html',
  styleUrls: ['./blog-roller-shade-oakville.component.scss']
})
export class BlogRollerShadeOakvilleComponent implements OnInit {
  blog: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      // Extract the first segment
      if (segments.length > 0) {
        const path = '/' + segments[0].path;
        this.blog = this.blogService.blogs.find((b) => b?.path === path);
      }
    });

    this.titleService.setTitle(
      'Elevate Your Space with Roller Shade: The Perfect Blend of Style and Functionality!'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Elevate Your Space with Roller Shade: The Perfect Blend of Style and Functionality!',
      },
      {
        name: 'keywords',
        content:
          'Roller Blind, Roller Shade, Window Treatments, Home Decor, Custom Blinds, Blackout Roller Blind, Light Filtering Roller Shade, Stylish Window Coverings, Blinds Oakville, Interior Design'
      },
    ]);

  }


}
