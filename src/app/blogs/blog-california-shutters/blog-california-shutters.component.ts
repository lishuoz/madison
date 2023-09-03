import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-california-shutters',
  templateUrl: './blog-california-shutters.component.html',
  styleUrls: ['./blog-california-shutters.component.scss'],
})
export class BlogCaliforniaShuttersComponent implements OnInit {
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
      '无人能敌的天然木百叶窗Wood Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          '木百叶窗California Shutters 的五大优点：安全环保，遮阳又通风，隔音隔热，容易清洁且经久耐用，防紫外线能保护家具。优质的木百叶窗wood Shutters 会提升房间的舒适度，提升家居生活的品位。',
      },
      {
        name: 'keywords',
        content:
          'california shutters,wood shutters,shutters oakville,shutters mississauga,shutters toronto,shutters burlington,shutters milton,shutters hamilton,shutters north york,shutters scarborough,shutters markham,窗帘奥克维尔,窗帘多伦多,窗帘密西沙加,奥克维尔窗帘,密西沙加窗帘,木百叶窗,百叶窗,窗帘,窗帘oakville',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97california-shutters-oakville/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '无人能敌的天然木百叶窗Wood Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '木百叶窗California Shutters 的五大优点：安全环保，遮阳又通风，隔音隔热，容易清洁且经久耐用，防紫外线能保护家具。优质的木百叶窗wood Shutters 会提升房间的舒适度，提升家居生活的品位。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97california-shutters-oakville/',
      },

      {
        name: 'twitter:title',
        content:
          '无人能敌的天然木百叶窗Wood Shutters Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '木百叶窗California Shutters 的五大优点：安全环保，遮阳又通风，隔音隔热，容易清洁且经久耐用，防紫外线能保护家具。优质的木百叶窗wood Shutters 会提升房间的舒适度，提升家居生活的品位。',
      },

      { property: 'og:title', content: '无人能敌的天然木百叶窗Wood Shutters' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%a9%e7%84%b6%e6%9c%a8%e7%99%be%e5%8f%b6%e7%aa%97california-shutters-oakville/',
      },
      {
        property: 'og:description',
        content:
          '木百叶窗California Shutters 的五大优点\n\n1、实木材质，生态安全，天然环保\n\n木百叶窗由天然实木制造，环保材料，有效减少污染。木百叶窗是家居中的重要装饰，美观高档。\n\n&nbsp;\n\n2、容易清洁，经久耐用\n\n实木百叶窗只需要用棉布轻拭清，无需花费力气拆卸清洗，省时省力。\n\n&nbsp;\n\n木百叶窗材质高档，使用年限也很长。\n\n&nbsp;\n\n3、隔音和隔热效果俱佳\n\n夏季，木百叶窗像天然空调一样，能起到自动隔热降温的作用。\n\n冬天，木百叶窗能有效降低室内热量散发的速度，起到保暖保温的作用。\n\n\n4、既遮阳又通风\n\n实木百叶窗，通过自由调节木百叶片的角度，既遮阳，又通风，还可以有效保持室内空气流通。\n\n&nbsp;\n\n5、防紫外线，保护家具\n\n防虫挡雨，阻挡紫外线效率高达95%以上。白色或浅色叶片的防紫外线效果更好，在加拿大以及整个北美地区都很受欢迎。\n\n&nbsp;\n\n专注打造您的良好家居品质的麦迪森窗帘公司Madison Avenue Window Fashion认为，优质的木百叶窗California Shutters 会提升房间的舒适度，提升家居生活的品位。',
      },
      {
        property: 'og:image',
        content:
          'https://www.madisonavenueshutters.com/wp-content/uploads/2019/11/1012372436.jpg',
      },
    ]);
  }
}
