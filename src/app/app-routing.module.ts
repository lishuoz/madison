import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { BlogsComponent } from './blogs/blogs.component';
import { BlogFavouriteShuttersComponent } from './blogs/blog-favourite-shutters/blog-favourite-shutters.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'get-a-quote',
    component: GetAQuoteComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'drapes',
    component: DrapesComponent,
  },
  {
    path: 'window-shutters-oakville-burlington',
    component: WoodShuttersComponent,
  },
  {
    path: 'the-maxxmar-collection',
    component: MaxxmarComponent,
  },
  {
    path: 'the-maxxmar-collection/shades',
    component: ShadesComponent,
  },
  {
    path: 'the-maxxmar-collection/blinds',
    component: BlindsComponent,
  },
  {
    path: 'the-maxxmar-collection/shutters',
    component: ShuttersComponent,
  },
  {
    path: 'the-maxxmar-collection/window-panels',
    component: WindowPanelsComponent,
  },
  {
    path: 'blog',
    component: BlogsComponent,
  },
  {
    path: '多伦多窗帘最爱',
    component: BlogFavouriteShuttersComponent,
  },
  {
    path: 'oakville窗帘',
    component: BlogOakvilleShuttersComponent,
  },
  {
    path: '5-major-benefits-of-solid-wood-shutters-oakville',
    component: BlogMajorBenefitsComponent,
  },
  {
    path: '斑马帘-麦迪森窗帘oakville',
    component: BlogWhyZebraComponent,
  },
  {
    path: '卷帘roller-shades-窗帘-oakville',
    component: BlogRollerShadesComponent,
  },
  {
    path: '蜂巢帘-blinds-oakville',
    component: BlogHiveShuttersComponent,
  },
  {
    path: '天然木百叶窗-shutters-oakville',
    component: BlogNaturalWoodComponent,
  },
  {
    path: '传统布艺窗帘-oakville',
    component: BlogOneWorldComponent,
  },
  {
    path: '窗帘的起源说blinds-oakville',
    component: BlogOriginBlindsShuttersComponent,
  },
  {
    path: '天然木百叶窗california-shutters-oakville',
    component: BlogCaliforniaShuttersComponent,
  },
  {
    path: 'Blackout-Frame-System-Roller-Shades',
    component: BlogBlackoutFrameSystemRollerShadesComponent,
  },
  {
    path: 'Roller-Shade-Oakville',
    component: BlogRollerShadeOakvilleComponent,
  },
  {
    path: 'category/:tag',
    component: CategoryComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
