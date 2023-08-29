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
