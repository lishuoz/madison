import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-origin-blinds-shutters',
  templateUrl: './blog-origin-blinds-shutters.component.html',
  styleUrls: ['./blog-origin-blinds-shutters.component.scss'],
})
export class BlogOriginBlindsShuttersComponent implements OnInit {
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
      '窗帘的起源|Origin of curtains, blinds, shutters, shades, and drapes Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          '美观精致的窗帘不仅赏心悦目，更是灵魂家居中画龙点睛的一部分。窗帘(Oakville blinds, curtains, shutters, shades, drapes etc.)，体现着主人的品位，也赋予家特殊的涵义。',
      },
      {
        name: 'keywords',
        content:
          'oakville curtains,oakville blinds,oakville shutters,oakville shades,oakville drapes,oakville窗帘,窗帘oakville,窗帘奥克维尔,奥克维尔窗帘,blinds,curtains,drapes,shutters,zebra shades',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e7%aa%97%e5%b8%98%e7%9a%84%e8%b5%b7%e6%ba%90%e8%af%b4blinds-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '窗帘的起源|Origin of curtains, blinds, shutters, shades, and drapes Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '美观精致的窗帘不仅赏心悦目，更是灵魂家居中画龙点睛的一部分。窗帘(Oakville blinds, curtains, shutters, shades, drapes etc.)，体现着主人的品位，也赋予家特殊的涵义。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e7%aa%97%e5%b8%98%e7%9a%84%e8%b5%b7%e6%ba%90%e8%af%b4blinds-oakville/',
      },
      {
        name: 'twitter:title',
        content:
          '窗帘的起源|Origin of curtains, blinds, shutters, shades, and drapes Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '美观精致的窗帘不仅赏心悦目，更是灵魂家居中画龙点睛的一部分。窗帘(Oakville blinds, curtains, shutters, shades, drapes etc.)，体现着主人的品位，也赋予家特殊的涵义。',
      },
      {
        property: 'og:title',
        content: '窗帘的起源说Origin of Blinds & Shutters',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e7%aa%97%e5%b8%98%e7%9a%84%e8%b5%b7%e6%ba%90%e8%af%b4blinds-oakville/',
      },

      {
        property: 'og:description',
        content:
          'The Origin of Curtains, Blinds, Shutters, Shades, and Drapes\n美观精致的窗帘不仅赏心悦目，更是灵魂家居中画龙点睛的一部分。\n窗帘(blinds, curtains, shutters, shades, drapes etc.)，体现着主人的品位，也赋予家特殊的涵义。\n\n门帘\n早期人类的住所并没有成型的窗户，窗不过是为了通风和采光而在墙上凿出的空洞。\n\n我们今天看到的窗帘，最初是以“门帘”的面貌出现的。\n\n大块的兽皮，细密的藤须，宽大的树叶、竹片或芦苇，成为人类最早所使用的“帘”。\n\n麻毛丝棉\n据记载，古埃及时代，人们陆续纺出了亚麻、棉、羊毛、丝等织物。\n而在古老的东方，古中国、古波斯和古印度，各种精美的丝织品被心灵手巧的人们生产出来，点缀着房门。\n\n纸\n汉代，蔡伦改进了造纸术，人们把白色的粱纸贴到窗户上做成窗户的遮掩物。\n\n人们发现，相比兽皮和树叶，纸做的“窗帘”具有一定的厚度和韧性，并且更加便利干净。\n\n慢慢地，随着民间剪纸艺术的盛行，人们将纸裁剪成好看的图案，贴在窗户上，给房间增添了别样的味道。\n\n布艺',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2018/10/asset-13.jpg',
      },
    ]);
  }
}
