import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Task7ParentComponent } from './app.component';
import { Task7Child1Component } from './component1/component1.component';
import { Task7Child2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    Task7ParentComponent,
    Task7Child1Component,
    Task7Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Task7ParentComponent]
})
export class AppModule { }
