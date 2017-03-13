import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TopModule} from './top/top.module';
import {ContainerModule} from './container/container.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    TopModule,
    ContainerModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
