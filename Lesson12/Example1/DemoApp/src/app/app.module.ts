import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ToggleswitchComponent } from './toggleswitch/toggleswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ToggleswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
