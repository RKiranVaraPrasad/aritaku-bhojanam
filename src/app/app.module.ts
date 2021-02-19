import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './featured/home/home.module';
import { CoreModule } from './core/core.module';
import { MenuModule } from './featured/menu/menu.module';
import { AboutModule } from './featured/about/about.module';
import { ServiceModule } from './featured/service/service.module';
import { ContactModule } from './featured/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AboutModule,
    MenuModule,
    ServiceModule,
    ContactModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
