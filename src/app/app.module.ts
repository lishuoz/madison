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
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
