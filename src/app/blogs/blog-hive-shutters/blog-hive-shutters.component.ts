import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-hive-shutters',
  templateUrl: './blog-hive-shutters.component.html',
  styleUrls: ['./blog-hive-shutters.component.scss'],
})
export class BlogHiveShuttersComponent implements OnInit {
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
      '蜂巢帘Pleated Shades| Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          '简约现代却不失高级的蜂巢帘Pleated Shades是当今非常受欢迎的一种窗户饰品，适用于不同的窗户形状和各种空间，尤其是用于餐厅、浴室、卧室的窗户上。',
      },
      {
        name: 'keywords',
        content:
          '蜂巢帘,pleated shades,窗帘奥克维尔,奥克维尔窗帘,oakville窗帘,窗帘oakville,blinds,curtain,shades,多伦多窗帘,密西沙加窗帘',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e8%9c%82%e5%b7%a2%e5%b8%98-blinds-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '蜂巢帘Pleated Shades| Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '简约现代却不失高级的蜂巢帘Pleated Shades是当今非常受欢迎的一种窗户饰品，适用于不同的窗户形状和各种空间，尤其是用于餐厅、浴室、卧室的窗户上。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e8%9c%82%e5%b7%a2%e5%b8%98-blinds-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          '蜂巢帘Pleated Shades| Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '简约现代却不失高级的蜂巢帘Pleated Shades是当今非常受欢迎的一种窗户饰品，适用于不同的窗户形状和各种空间，尤其是用于餐厅、浴室、卧室的窗户上。',
      },

      {
        property: 'og:title',
        content: '蜂巢帘那么好看，为什么只有少数人用它？',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e8%9c%82%e5%b7%a2%e5%b8%98-blinds-oakville/',
      },
      {
        property: 'og:description',
        content:
          'Top 10私人定制窗帘Oakville 蜂巢帘（Pleated Shades），又叫风琴帘，因为侧面形似蜂巢，故得名而来。它的灵感源于蜂巢的设计。因为蜂窝结构使空气存储于中空层，让室内保持恒温。\n\n简约现代却不失高级的蜂巢帘是当今非常受欢迎的一种窗户饰品，适用于不同的窗户形状和各种空间，尤其是用于餐厅、浴室、卧室的窗户上。\n\n蜂巢帘 Pleated Shades 是一层简洁的单层面料，可以减少较高的窗户堆叠。\n\n虽然蜂巢帘看上去很简单，技术含量却很高。它具有隔热、保暖、防紫外线以及隔音的功能，能有效保持室内温度和保持空间清静。\n\n根据打开的方式，蜂巢帘可以自上而下打开，或者自下而上打开，拉绳隐藏在中空层，简单实用。\n\n根据遮光的不同，可以分为全遮光蜂巢帘和半遮光蜂巢帘，帮助您有效保护隐私，或允许柔和的自然光过滤。\n\n蜂巢帘采用防污剂和防静电处理，清洗非常容易。为了保持蜂巢帘的优质外观，偶尔用真空吸尘器清理表面，或者轻轻用湿海绵擦拭。\n\n麦迪森窗帘公司提供数百种面料、颜色、纹理、和遮光设计组合的蜂巢帘供您自由选择。从单色调到渐变色彩，从柔和的中性色调到鲜艳的色彩……\n\n在麦迪森窗帘公司会为您量身定做适合您的家居的优质蜂巢帘，兼具现代感和高雅感。它独特的色泽、设计和纹理一定会增添您家中空间的无限魅力。',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/Mira-Vista-Pleated-Shades.jpg',
      },
    ]);
  }
}
