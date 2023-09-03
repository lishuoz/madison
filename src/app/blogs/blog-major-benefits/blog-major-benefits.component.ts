import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-major-benefits',
  templateUrl: './blog-major-benefits.component.html',
  styleUrls: ['./blog-major-benefits.component.scss'],
})
export class BlogMajorBenefitsComponent implements OnInit {
  blog: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      // Extract the first segment
      if (segments.length > 0) {
        const path = '/' + segments[0].path;
        this.blog = this.blogService.blogs.find((b) => b?.path === path);
      }
    });

    this.titleService.setTitle(
      '5 Major Benefits of Solid Wood Shutters|木百叶窗的五大优点 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Solid wood shutters, natural materials, ecological safety, environmental friendly,Easy to clean, Durable,Good sound insulation & thermal insulation',
      },
      {
        name: 'keywords',
        content:
          'california shutters,wood shutters,shutters oakville,shutters mississauga,shutters toronto,shutters burlington,shutters milton,shutters hamilton,shutters north york,shutters scarborough,shutters markham,窗帘奥克维尔,窗帘多伦多,窗帘密西沙加,多伦多窗帘,奥克维尔窗帘,密西沙加窗帘,木百叶窗,百叶窗,窗帘oakville',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/5-major-benefits-of-solid-wood-shutters-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '5 Major Benefits of Solid Wood Shutters|木百叶窗的五大优点 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Solid wood shutters, natural materials, ecological safety, environmental friendly,Easy to clean, Durable,Good sound insulation & thermal insulation',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/5-major-benefits-of-solid-wood-shutters-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          '5 Major Benefits of Solid Wood Shutters|木百叶窗的五大优点 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Solid wood shutters, natural materials, ecological safety, environmental friendly,Easy to clean, Durable,Good sound insulation & thermal insulation',
      },

      {
        property: 'og:title',
        content: '5 Major Benefits of Solid Wood Shutters 木百叶窗的优点',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/5-major-benefits-of-solid-wood-shutters-oakville/',
      },

      {
        property: 'og:description',
        content:
          '1. Solid wood shutters, natural materials, ecological safety, environmental friendly\n\nCalifornia Shutters (Wood Shutters) are made from natural solid wood, it provides environmental protection and reduces pollution. Wood shutters is an important decoration to your lovely home.\n\n2. Easy to clean & Durable\n\nThe wood shutters only need to be wiped with a piece of cotton cloth, without',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/03/shutter-1.jpg',
      },
    ]);
  }
}
