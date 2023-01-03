import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexiTitlecasePipe } from './flexi-titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlexiTitlecasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
