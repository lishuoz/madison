import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-one-world',
  templateUrl: './blog-one-world.component.html',
  styleUrls: ['./blog-one-world.component.scss'],
})
export class BlogOneWorldComponent implements OnInit {
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
      'Custom curtains and drapery | 传统布艺窗帘，一帘一世界，有爱更有情 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Decorating your home with custom curtains and drapery will add an elegant, stylish and cleaner look to the space they embody. 布艺窗帘可以灵活搭配几乎任何形状的窗户，既能间隔空间，又能保护隐私。',
      },
      {
        name: 'keywords',
        content:
          'curtains,drapery,custom curtains,布艺,布艺窗帘,窗帘,窗帘奥克维尔,窗帘多伦多,curtain,drapes,oakville,奥克维尔',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e4%bc%a0%e7%bb%9f%e5%b8%83%e8%89%ba%e7%aa%97%e5%b8%98-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Custom curtains and drapery | 传统布艺窗帘，一帘一世界，有爱更有情 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Decorating your home with custom curtains and drapery will add an elegant, stylish and cleaner look to the space they embody. 布艺窗帘可以灵活搭配几乎任何形状的窗户，既能间隔空间，又能保护隐私。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e4%bc%a0%e7%bb%9f%e5%b8%83%e8%89%ba%e7%aa%97%e5%b8%98-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          'Custom curtains and drapery | 传统布艺窗帘，一帘一世界，有爱更有情 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Decorating your home with custom curtains and drapery will add an elegant, stylish and cleaner look to the space they embody. 布艺窗帘可以灵活搭配几乎任何形状的窗户，既能间隔空间，又能保护隐私。',
      },

      { property: 'og:title', content: '传统布艺窗帘，一帘一世界，有爱更有情' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e4%bc%a0%e7%bb%9f%e5%b8%83%e8%89%ba%e7%aa%97%e5%b8%98-oakville/',
      },

      {
        property: 'og:description',
        content:
          '选择定制窗帘来装饰您的爱巢，将为您的房间增添优雅，柔和及整洁的外观。布艺窗帘可以灵活搭配几乎任何形状的窗户，既能间隔空间，又能保护隐私。\n很多时候，布艺窗帘是增强窗户美观的装饰。通常来说，布艺，帷幔，床罩，被套，枕头是家居装饰中的五个黄金搭配，其中窗帘是首要配件。\n\n在麦迪森窗帘，我们经验丰富的设计顾问将帮助您选择最适合您家居装饰的窗帘款式，面料和独特设计。我们定制的窗帘是当今市场上性价比最高的产品之一。\n\n麦迪森提供数百种不同的窗帘款式，面料，颜色和设计供您选择。无论您钟情现代或传统，素雅或富丽堂皇，麦迪森窗帘的私人订制适应各种不同风格。\n\n当您致电时，我们经验丰富的设计师将向您展示所有最新窗帘款式和面料，并将您的需求变为现实。所有的布艺窗帘都是由才华横溢的，拥有多年布艺制作经验的专业裁缝手工制作。\n\n最后，安装工作由经过工厂专业培训的安装人员完成，安装人员将在安装后对您的布艺进行最后润色，确保您满意。\n\nWhy choose stylish custom curtains and drapery?\n\nDecorating your home with custom curtains and drapery will add an elegant, stylish and cleaner look to the space they embody. Drapery provides the flexibility to cover almost any window and can be used to block the elements and',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2019/10/drape-51.jpg',
      },
    ]);
  }
}
