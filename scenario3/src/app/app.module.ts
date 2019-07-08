import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagComponent } from './tag/tag.component';
import { Tag1Component } from './tag1/tag1.component';

@NgModule({
  declarations: [
    AppComponent,
 
    TagComponent,
    Tag1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
