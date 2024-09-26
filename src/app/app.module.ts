import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DrapesComponent } from './pages/drapes/drapes.component';
import { WoodShuttersComponent } from './pages/wood-shutters/wood-shutters.component';
import { MaxxmarComponent } from './pages/maxxmar/maxxmar.component';
import { ShadesComponent } from './pages/maxxmar/shades/shades.component';
import { BlindsComponent } from './pages/maxxmar/blinds/blinds.component';
import { ShuttersComponent } from './pages/maxxmar/shutters/shutters.component';
import { WindowPanelsComponent } from './pages/maxxmar/window-panels/window-panels.component';
import { SharedModule } from './shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogFavouriteShuttersComponent } from './blogs/blog-favourite-shutters/blog-favourite-shutters.component';
import { BlogTitleComponent } from './blogs/blog-title/blog-title.component';
import { RecentPostsComponent } from './blogs/recent-posts/recent-posts.component';
import { BlogOakvilleShuttersComponent } from './blogs/blog-oakville-shutters/blog-oakville-shutters.component';
import { BlogMajorBenefitsComponent } from './blogs/blog-major-benefits/blog-major-benefits.component';
import { BlogWhyZebraComponent } from './blogs/blog-why-zebra/blog-why-zebra.component';
import { BlogRollerShadesComponent } from './blogs/blog-roller-shades/blog-roller-shades.component';
import { BlogHiveShuttersComponent } from './blogs/blog-hive-shutters/blog-hive-shutters.component';
import { BlogNaturalWoodComponent } from './blogs/blog-natural-wood/blog-natural-wood.component';
import { BlogOneWorldComponent } from './blogs/blog-one-world/blog-one-world.component';
import { BlogOriginBlindsShuttersComponent } from './blogs/blog-origin-blinds-shutters/blog-origin-blinds-shutters.component';
import { BlogCaliforniaShuttersComponent } from './blogs/blog-california-shutters/blog-california-shutters.component';
import { CategoryComponent } from './pages/category/category.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { BlogBlackoutFrameSystemRollerShadesComponent } from './blogs/blog-blackout-frame-system-roller-shades/blog-blackout-frame-system-roller-shades.component';
import { BlogRollerShadeOakvilleComponent } from './blogs/blog-roller-shade-oakville/blog-roller-shade-oakville.component';
import { BlogDualShadeTorontoComponent } from './blogs/blog-dual-shade-toronto/blog-dual-shade-toronto.component';
import { BlogCustomWoodShuttersComponent } from './blogs/blog-custom-wood-shutters/blog-custom-wood-shutters.component';
import { BlogCellularShadeTorontoComponent } from './blogs/blog-cellular-shade-toronto/blog-cellular-shade-toronto.component';
import { BlogSunsetShadeTorontoComponent } from './blogs/blog-sunset-shade-toronto/blog-sunset-shade-toronto.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DrapesComponent,
    GetAQuoteComponent,
    HomeComponent,
    MaxxmarComponent,
    TestimonialsComponent,
    WoodShuttersComponent,
    ShadesComponent,
    BlindsComponent,
    ShuttersComponent,
    WindowPanelsComponent,
    BlogsComponent,
    BlogFavouriteShuttersComponent,
    BlogTitleComponent,
    RecentPostsComponent,
    BlogOakvilleShuttersComponent,
    BlogMajorBenefitsComponent,
    BlogWhyZebraComponent,
    BlogRollerShadesComponent,
    BlogHiveShuttersComponent,
    BlogNaturalWoodComponent,
    BlogOneWorldComponent,
    BlogOriginBlindsShuttersComponent,
    BlogCaliforniaShuttersComponent,
    CategoryComponent,
    ThankYouComponent,
    BlogBlackoutFrameSystemRollerShadesComponent,
    BlogRollerShadeOakvilleComponent,
    BlogDualShadeTorontoComponent,
    BlogCustomWoodShuttersComponent,
    BlogCellularShadeTorontoComponent,
    BlogSunsetShadeTorontoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
