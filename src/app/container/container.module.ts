import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ContainerComponent} from './container.component';

@NgModule({
  imports:[
    BrowserModule,
  ],
  declarations:[
    ContainerComponent,
  ],
  exports:[ContainerComponent],
  providers:[],
})
export class ContainerModule{}
