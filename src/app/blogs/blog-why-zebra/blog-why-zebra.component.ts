import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-why-zebra',
  templateUrl: './blog-why-zebra.component.html',
  styleUrls: ['./blog-why-zebra.component.scss'],
})
export class BlogWhyZebraComponent implements OnInit {
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
      'Dual Shades Zebra |斑马帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Dual shades allow you to transition between sheer and privacy. 斑马帘的条纹操作时对齐或错开斑纹，可以在光控或黑暗之间调整，让您在视野和隐私之间进行自由转换。',
      },
      {
        name: 'keywords',
        content:
          'dual shades,zebra,zebra shades,斑马帘,窗帘,斑马帘多伦多,窗帘奥克维尔,窗帘密西沙加,斑马帘奥克维尔,斑马帘mississauga,斑马帘burlington,斑马帘hamilton,斑马帘richmond hill,斑马帘markham,斑马帘north york,斑马帘toronto,oakville,shades,奥克维尔',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e6%96%91%e9%a9%ac%e5%b8%98-%e9%ba%a6%e8%bf%aa%e6%a3%ae%e7%aa%97%e5%b8%98oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Dual Shades Zebra |斑马帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'Dual shades allow you to transition between sheer and privacy. 斑马帘的条纹操作时对齐或错开斑纹，可以在光控或黑暗之间调整，让您在视野和隐私之间进行自由转换。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e6%96%91%e9%a9%ac%e5%b8%98-%e9%ba%a6%e8%bf%aa%e6%a3%ae%e7%aa%97%e5%b8%98oakville/',
      },

      {
        name: 'twitter:title',
        content:
          'Dual Shades Zebra |斑马帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'Dual shades allow you to transition between sheer and privacy. 斑马帘的条纹操作时对齐或错开斑纹，可以在光控或黑暗之间调整，让您在视野和隐私之间进行自由转换。',
      },

      { property: 'og:title', content: '为什么选择麦迪森窗帘的斑马帘？' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e6%96%91%e9%a9%ac%e5%b8%98-%e9%ba%a6%e8%bf%aa%e6%a3%ae%e7%aa%97%e5%b8%98oakville/',
      },

      {
        property: 'og:description',
        content:
          '斑马帘是一种由纺织物制作的木百叶窗的替代品，目前在市场上非常流行。\n斑马帘由滚轴式设计，可以使用手动拉链或电动操作窗帘。斑马帘的拉链，底部栏杆和盒式帷幔可以自由搭配设计。\n斑马帘的条纹有2英寸和3 英寸供您选择，操作时对齐或错开斑纹，可以在光控或黑暗之间调整，让您在视野和隐私之间进行自由转换。\n斑马帘加上遮光层能够阻隔光亮，使房间变得黑暗，它们通常是卧室或起居室的绝佳选择。\n\n\nDual Shades is a very modern alternative to horizontal blind. Dual Shades is operated by a side chain that allows you to control the shade.\nThe side chains will be matching.as well as the bottom railing. An added upgrade that comes with all of our Dual',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2019/10/C85EFCB5-C89D-4541-94C1-ED429446FC28-2034-0000035A8762BFA4_tmp.jpg',
      },
    ]);
  }
}
