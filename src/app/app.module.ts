import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { LogobarComponent } from './shared/logobar/logobar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { GoogleReviewsComponent } from './shared/google-reviews/google-reviews.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { IconComponent } from './shared/icon/icon.component';
import { ContactMapContainerComponent } from './shared/contact-map-container/contact-map-container.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ShadowComponent } from './shared/shadow/shadow.component';
import { DrapesComponent } from './pages/drapes/drapes.component';
import { SliderComponent } from './shared/slider/slider.component';
import { WoodShuttersComponent } from './pages/wood-shutters/wood-shutters.component';
import { MaxxmarComponent } from './pages/maxxmar/maxxmar.component';
import { ShadesComponent } from './pages/maxxmar/shades/shades.component';
import { BlindsComponent } from './pages/maxxmar/blinds/blinds.component';
import { MaxxSliderTextComponent } from './shared/maxx-slider-text/maxx-slider-text.component';
import { MaxxRequestQuoteComponent } from './shared/maxx-request-quote/maxx-request-quote.component';
import { MaxxReviewsComponent } from './shared/maxx-reviews/maxx-reviews.component';
import { ShuttersComponent } from './pages/maxxmar/shutters/shutters.component';
import { WindowPanelsComponent } from './pages/maxxmar/window-panels/window-panels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopbarComponent,
    LogobarComponent,
    FooterComponent,
    CopyrightComponent,
    GetAQuoteComponent,
    PageTitleComponent,
    BreadcrumbComponent,
    ContactFormComponent,
    GoogleMapComponent,
    GoogleReviewsComponent,
    ContactUsComponent,
    TestimonialsComponent,
    HomeBannerComponent,
    IconComponent,
    ContactMapContainerComponent,
    AboutUsComponent,
    ShadowComponent,
    DrapesComponent,
    SliderComponent,
    WoodShuttersComponent,
    MaxxmarComponent,
    ShadesComponent,
    BlindsComponent,
    MaxxSliderTextComponent,
    MaxxRequestQuoteComponent,
    MaxxReviewsComponent,
    ShuttersComponent,
    WindowPanelsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
