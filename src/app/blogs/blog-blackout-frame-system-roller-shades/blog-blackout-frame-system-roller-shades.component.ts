import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-blackout-frame-system-roller-shades',
  templateUrl: './blog-blackout-frame-system-roller-shades.component.html',
  styleUrls: ['./blog-blackout-frame-system-roller-shades.component.scss']
})
export class BlogBlackoutFrameSystemRollerShadesComponent implements OnInit {
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
      'Blackout Frame System - Roller Shades: A Modern Solution for Ultimate Light Control'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Blackout Frame System - Roller Shades: A Modern Solution for Ultimate Light Control',
      },
      {
        name: 'keywords',
        content:
          'Blackout Frame System, Roller Shades, Light Control, Privacy Window Treatments, Modern Window Solutions, Blackout Roller Blinds, Bedroom Blackout Shades, Home Theater Window Coverings, Blackout Blinds, Home Decor',
      },
    ]);

  }

}
