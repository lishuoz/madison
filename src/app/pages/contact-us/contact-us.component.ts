import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  breadcrumbs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Contact Us',
      link: null,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Contact Us 联系我们 | Madison Avenue Window Fashion 麦迪森窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades'
    );
    this.metaService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        rel: 'shortcut icon',
        href: 'https://www.madisonavenueshutters.com/wp-content/themes/Avada%20Theme/Avada/images/fav.png',
        type: 'image/x-icon',
      },
      {
        name: 'description',
        content:
          'You can reach us by phone, email, or by filling out our form below. We’ll give you a free customized quote or in-home consultation. 您可以打电话，写电子邮件或填写网站下面的表格与我们联系。我们将为您提供免费的测量和报价。',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'keywords',
        content:
          'free estimate, shutters, blinds, shades, toronto, oakville, burlington, mississauga, milton, 免费测量, 免费报价, 百叶窗, 斑马帘, 传统布艺, 卷帘, 多伦多, 奥克维尔, 伯灵顿, 密西沙加, 米尔顿',
      },
      {
        rel: 'canonical',
        href: 'https://www.madisonavenueshutters.com/contact-us/',
      },
      { name: 'generator', content: 'All in One SEO (AIOSEO) 4.2.6.1' },
      { property: 'og:locale', content: 'en_US' },
      {
        property: 'og:site_name',
        content:
          'Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades | 窗帘, 木百叶窗, 斑马帘, 布艺, 卷帘',
      },
      { property: 'og:type', content: 'activity' },
      {
        property: 'og:title',
        content:
          'Contact Us 联系我们 | Madison Avenue Window Fashion 麦迪森窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        property: 'og:description',
        content:
          'You can reach us by phone, email, or by filling out our form below. We’ll give you a free customized quote or in-home consultation. 您可以打电话，写电子邮件或填写网站下面的表格与我们联系。我们将为您提供免费的测量和报价。',
      },
      {
        property: 'og:url',
        content: 'https://www.madisonavenueshutters.com/contact-us/',
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content:
          'Contact Us 联系我们 | Madison Avenue Window Fashion 麦迪森窗帘 Madison Avenue Window Fashions - Shutters, Blinds, Curtains, Drapes & Shades',
      },
      {
        name: 'twitter:description',
        content:
          'You can reach us by phone, email, or by filling out our form below. We’ll give you a free customized quote or in-home consultation. 您可以打电话，写电子邮件或填写网站下面的表格与我们联系。我们将为您提供免费的测量和报价。',
      },
      { name: 'google', content: 'nositelinkssearchbox' },
    ]);
  }
}
