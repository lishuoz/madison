import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-oakville-shutters',
  templateUrl: './blog-oakville-shutters.component.html',
  styleUrls: ['./blog-oakville-shutters.component.scss'],
})
export class BlogOakvilleShuttersComponent implements OnInit {
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
      '2020年，为了你的家园，麦迪森窗帘与你一起砥砺前行 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          '我们与你共同在多伦多这片热土上拼搏,我们致力于高端窗帘的私人订制以中端价格作为市场切入点,聚集了如你一般的高端优质客户群.',
      },
      {
        name: 'keywords',
        content:
          'blinds oakville,shutters oakville,curtains oakville,shades oakville,blinds,california shutters,curtains,drapes,oakville窗帘,多伦多窗帘,奥克维尔窗帘,密西沙加窗帘,窗帘oakville',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/oakville%e7%aa%97%e5%b8%98/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '2020年，为了你的家园，麦迪森窗帘与你一起砥砺前行 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '我们与你共同在多伦多这片热土上拼搏,我们致力于高端窗帘的私人订制以中端价格作为市场切入点,聚集了如你一般的高端优质客户群.',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/oakville%e7%aa%97%e5%b8%98/',
      },

      {
        name: 'twitter:title',
        content:
          '2020年，为了你的家园，麦迪森窗帘与你一起砥砺前行 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '我们与你共同在多伦多这片热土上拼搏,我们致力于高端窗帘的私人订制以中端价格作为市场切入点,聚集了如你一般的高端优质客户群.',
      },

      {
        property: 'og:title',
        content: '新的一年，为了你的家园，我们一起砥砺前行',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/oakville%e7%aa%97%e5%b8%98/',
      },

      {
        property: 'og:description',
        content:
          '​尊敬的麦迪森窗帘客户：\n\n时光荏苒，岁月如梭\n我们怀揣感恩和希望\n踏入新的征程\n回首2019\n无论风雨或是晴好\n无论你身在中国或是加国\n通过手机，通过微信\n通过公众号，通过网站\n我们都与你相连\n我们都相伴度过\n\n你的需求，我们都用情服务\n你的家园，我们都用心呵护\n正是你的信任和肯定\n支持着我们从未停止前进的脚步\n我们与你\n共同在多伦多这片热土上拼搏\n我们致力于高端窗帘的私人订制\n以中端价格作为市场切入点\n聚集了\n如你一般的高端优质客户群\n\n每一位客户的微笑\n每一次满意的背后\n都有许多汗水与故事\n而这，正是你我\n谱写麦迪森窗帘的重要颜色\n\n我们始终牢记你的托付\n在这座梦想的城市\n续写梦想\n谱写希望\n今天既是过去一年的终点\n也是新的一年的起点\n是结束，亦是最好的开始\n流走的是岁月\n留下的是回忆\n我们无愧于2019年不留遗憾\n让我们期待2020年砥砺前行',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/12/IMG_0122.jpg',
      },
    ]);
  }
}
