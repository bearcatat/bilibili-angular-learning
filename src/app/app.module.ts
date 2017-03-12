import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TopModule} from './top/top.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    TopModule
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 