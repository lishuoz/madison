import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DrapesComponent } from './pages/drapes/drapes.component';

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
