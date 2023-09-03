import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-roller-shades',
  templateUrl: './blog-roller-shades.component.html',
  styleUrls: ['./blog-roller-shades.component.scss'],
})
export class BlogRollerShadesComponent implements OnInit {
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
      'Roller Shades | 卷帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          '卷帘（Roller Shades）适用于多种场所，尤其是家居。卷帘操作简单方便，具有外表美观简洁，结构牢固耐用等诸多优点。使得窗框显得干净利落，让整个房间看上去宽敞优雅。',
      },
      {
        name: 'keywords',
        content:
          'roller shades,卷帘,窗帘,窗帘奥克维尔,窗帘oakville,奥克维尔窗帘,多伦多窗帘,密西沙加窗帘,curtain,blinds,drapes,奥克维尔',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e5%8d%b7%e5%b8%98roller-shades-%e7%aa%97%e5%b8%98-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Roller Shades | 卷帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '卷帘（Roller Shades）适用于多种场所，尤其是家居。卷帘操作简单方便，具有外表美观简洁，结构牢固耐用等诸多优点。使得窗框显得干净利落，让整个房间看上去宽敞优雅。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%8d%b7%e5%b8%98roller-shades-%e7%aa%97%e5%b8%98-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          'Roller Shades | 卷帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '卷帘（Roller Shades）适用于多种场所，尤其是家居。卷帘操作简单方便，具有外表美观简洁，结构牢固耐用等诸多优点。使得窗框显得干净利落，让整个房间看上去宽敞优雅。',
      },

      { property: 'og:title', content: '为什么卷帘Roller Shades这么流行？' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%8d%b7%e5%b8%98roller-shades-%e7%aa%97%e5%b8%98-oakville/',
      },

      {
        property: 'og:description',
        content:
          '卷帘（Roller Shades）是窗饰产品中的一种经典窗帘，是将窗帘材料经树脂加工，卷成滚筒状，采用拉绳进行上升下降的方式。\n根据控制方式的不同，卷帘可以分为电动卷帘和手动卷帘。根据面料不同，卷帘可分为半遮光卷帘、半透光卷帘和全遮光卷帘。\n\n卷帘（Roller Shades）适用于多种场所，尤其是家居。卷帘操作简单方便，具有外表美观简洁，结构牢固耐用等诸多优点。使得窗框显得干净利落，让整个房间看上去宽敞优雅。\n\n当卷帘放下时，能让室内光线柔和，免受直射阳光的困扰，达到很好遮阳效果，保护隐私。\n\n当卷帘升起时，它的体积又非常小，让房间充分沐浴在阳光中，光线明亮。\n\n在过去，卷帘多使用于办公室和公寓。随着材质、图案和设计的不断更新，卷帘也越来越多地被用于别墅。\n\n麦迪森窗帘公司提供数百种面料、颜色、纹理、和遮光设计组合的卷帘，供您自由选择。在这里，您可以轻松找到适合您家居的量身定做的优质家居饰品。\n\n您可以选择经典的色调，为您的房间散发优雅的气息。或者您可以选择柔和的设计，为您的窗户增添温柔的触感。\n\n在麦迪森窗帘Madison Avenue Window Fashion 的倾力打造下，简约现代或知性优雅的家，触手可及。',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2019/11/roller-shades-designer-roller-category.jpg',
      },
    ]);
  }
}
