import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
  ];

  blogs = this.blogService.blogs;

  constructor(
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the title
    this.titleService.setTitle(
      'Window Covering Blog | 麦迪森窗帘博客 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    // Add meta tags
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'How do we choose from shutters, drapes, blinds & shades in Toronto, Oakville, Mississauga, Burlington? 窗帘是家居装修中不可缺少的重要装饰品，百叶窗,斑马帘,传统布艺,卷帘......那么多种类，我们如何选购窗帘呢？',
      },
      {
        name: 'keywords',
        content:
          'shutters,drapes,blinds,dual shade,oakville,mississauga,burlington,toronto,百叶窗,斑马帘,传统布艺,卷帘,多伦多,奥克维尔,伯灵顿,密西沙加,米尔顿,多伦多窗帘,窗帘mississauga,奥克维尔窗帘,密西沙加窗帘,布艺,木百叶窗,奥克维尔百叶窗,窗帘oakville,窗帘奥克维尔,窗帘密西沙加,blinds oakville,shutters oakville,curtains oakville,shades oakville,curtain,蜂巢帘,pleated shades,oakville窗帘,curtains,drapery,custom curtains,布艺窗帘,oakville curtains,oakville blinds,oakville shutters,oakville shades,oakville drapes',
      },
      {
        name: 'canonical',
        content: 'https://www.madisonavenueshutters.com/blog/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Window Covering Blog | 麦迪森窗帘博客 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'How do we choose from shutters, drapes, blinds & shades in Toronto, Oakville, Mississauga, Burlington? 窗帘是家居装修中不可缺少的重要装饰品，百叶窗,斑马帘,传统布艺,卷帘......那么多种类，我们如何选购窗帘呢？',
      },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/blog/',
      },

      {
        name: 'twitter:title',
        content:
          'Window Covering Blog | 麦迪森窗帘博客 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'How do we choose from shutters, drapes, blinds & shades in Toronto, Oakville, Mississauga, Burlington? 窗帘是家居装修中不可缺少的重要装饰品，百叶窗,斑马帘,传统布艺,卷帘......那么多种类，我们如何选购窗帘呢？',
      },
    ]);
  }
}
