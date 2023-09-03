import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-natural-wood',
  templateUrl: './blog-natural-wood.component.html',
  styleUrls: ['./blog-natural-wood.component.scss'],
})
export class BlogNaturalWoodComponent implements OnInit {
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
      'California shutters 天然木百叶窗: 来自大自然的气息 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'No matter what the latest fashion trend may be, when it comes to window fashions, wood shutters are always be in demand. 木百叶窗天然，简单，耐用，并能根据设计涂染各种颜色的外观。',
      },
      {
        name: 'keywords',
        content:
          'california shutters,wood shutters,shutters oakville,shutters mississauga,shutters toronto,shutters burlington,shutters milton,shutters hamilton,shutters north york,shutters scarborough,shutters markham,窗帘奥克维尔,窗帘多伦多,窗帘密西沙加,木百叶窗,oakville,奥克维尔,百叶窗,窗帘',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97-shutters-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'California shutters 天然木百叶窗: 来自大自然的气息 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'No matter what the latest fashion trend may be, when it comes to window fashions, wood shutters are always be in demand. 木百叶窗天然，简单，耐用，并能根据设计涂染各种颜色的外观。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97-shutters-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          'California shutters 天然木百叶窗: 来自大自然的气息 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'No matter what the latest fashion trend may be, when it comes to window fashions, wood shutters are always be in demand. 木百叶窗天然，简单，耐用，并能根据设计涂染各种颜色的外观。',
      },

      { property: 'og:title', content: '天然木百叶窗: 来自大自然的气息' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97-shutters-oakville/',
      },

      {
        property: 'og:description',
        content:
          '无论当今的时尚潮流是什么，在窗户装饰方面，木制百叶窗在市场中总是需求旺盛。\n加利福尼亚百叶窗天然，简单，耐用，并能根据设计涂染各种颜色的外观。\n\n自1985年以来，麦迪森窗帘一直在加拿大大多伦多地区提供百叶窗的私人订制。\n\n所有的百叶窗均采用计算机化设备精确制造，然后手工精加工，来实现我们对高端木制品的高品质要求。\n\n窗帘的安装均由经过工厂多年培训的专业安装人员上门服务，确保用户满意。\n\nNo matter what the latest fashion trend may be, when it comes to window fashions, wood shutters are always be in demand.\n\nCalifornia shutters are simple, durable and have a timeless look available in painted or stained finishes.\n\nMadison Avenue Window Fashions has been supplying shutters across Canada for',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2019/10/D1FDB46E-005D-44C7-960C-1797F14EBD51-2034-0000035AA899984B_tmp.jpg',
      },
    ]);
  }
}
