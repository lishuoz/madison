import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-favourite-shutters',
  templateUrl: './blog-favourite-shutters.component.html',
  styleUrls: ['./blog-favourite-shutters.component.scss'],
})
export class BlogFavouriteShuttersComponent implements OnInit {
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
      '多伦多最好的窗帘top 10 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );
    this.metaService.addTags([
      {
        name: 'description',
        content:
          '多伦多窗帘| 2020爱你爱你！投票选出你最爱的窗帘。票数最高的三位老客户，现金奖励如下：一等奖$150， 现金二等奖$100 现金，三等奖$50 现金。',
      },
      {
        name: 'keywords',
        content:
          '多伦多窗帘,窗帘mississauga,奥克维尔窗帘,密西沙加窗帘,布艺,斑马帘,木百叶窗,奥克维尔百叶窗,窗帘oakville,窗帘奥克维尔,窗帘密西沙加,blinds,oakville窗帘',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/%e5%a4%9a%e4%bc%a6%e5%a4%9a%e7%aa%97%e5%b8%98%e6%9c%80%e7%88%b1/',
      },

      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          '多伦多最好的窗帘top 10 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          '多伦多窗帘| 2020爱你爱你！投票选出你最爱的窗帘。票数最高的三位老客户，现金奖励如下：一等奖$150， 现金二等奖$100 现金，三等奖$50 现金。',
      },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%9a%e4%bc%a6%e5%a4%9a%e7%aa%97%e5%b8%98%e6%9c%80%e7%88%b1/',
      },

      {
        name: 'twitter:title',
        content:
          '多伦多最好的窗帘top 10 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          '多伦多窗帘| 2020爱你爱你！投票选出你最爱的窗帘。票数最高的三位老客户，现金奖励如下：一等奖$150， 现金二等奖$100 现金，三等奖$50 现金。',
      },

      { property: 'og:title', content: '投票选出你最爱的窗帘（参与投票有奖）' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://www.madisonavenueshutters.com/%e5%a4%9a%e4%bc%a6%e5%a4%9a%e7%aa%97%e5%b8%98%e6%9c%80%e7%88%b1/',
      },

      {
        property: 'og:description',
        content:
          '​2020 爱你爱你 投票选出你最爱的窗帘 票数最高的三位老客户，现金奖励如下： 一等奖：$150 现金 二等奖：$100 现金 三等奖：$50   现金 如果您选中的最爱窗帘获奖，关注公众号的投票者奖励如下： 一等奖的投票者： $150 coupon 二等奖的投票者： $100 coupon 三等奖的投票者： $50   coupon 投票链接： 点击此处文字进入窗帘投票通道 投票截止日期： 2020年 2月8日 23点55分 兑奖请联系： 手机/微信 647-333-0303',
      },
    ]);
  }
}
