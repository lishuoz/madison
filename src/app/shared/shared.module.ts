import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleReviewsComponent } from './google-reviews/google-reviews.component';
import { LogobarComponent } from './logobar/logobar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeBannerComponent } from '../pages/home/home-banner/home-banner.component';
import { ContactMapContainerComponent } from './contact-map-container/contact-map-container.component';
import { IconComponent } from './icon/icon.component';
import { ShadowComponent } from './shadow/shadow.component';
import { MaxxRequestQuoteComponent } from './maxx-request-quote/maxx-request-quote.component';
import { MaxxReviewsComponent } from './maxx-reviews/maxx-reviews.component';
import { MaxxSliderTextComponent } from './maxx-slider-text/maxx-slider-text.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TopbarComponent,
    LogobarComponent,
    FooterComponent,
    CopyrightComponent,
    PageTitleComponent,
    BreadcrumbComponent,
    ContactFormComponent,
    GoogleMapComponent,
    GoogleReviewsComponent,
    HomeBannerComponent,
    IconComponent,
    ContactMapContainerComponent,
    ShadowComponent,
    SliderComponent,
    MaxxSliderTextComponent,
    MaxxRequestQuoteComponent,
    MaxxReviewsComponent,
    BackToTopComponent,
    SocialMediaIconsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    TopbarComponent,
    LogobarComponent,
    FooterComponent,
    CopyrightComponent,
    PageTitleComponent,
    BreadcrumbComponent,
    ContactFormComponent,
    GoogleMapComponent,
    GoogleReviewsComponent,
    HomeBannerComponent,
    IconComponent,
    ContactMapContainerComponent,
    ShadowComponent,
    SliderComponent,
    MaxxSliderTextComponent,
    MaxxRequestQuoteComponent,
    MaxxReviewsComponent,
    BackToTopComponent,
    SocialMediaIconsComponent,
  ],
})
export class SharedModule {}
