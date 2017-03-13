import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ContainerComponent} from './container.component';
import {ContainerTopComponnet} from './top/container-top.component';
import {TopRightComponent} from './top/right/top-right.component';

@NgModule({
  imports:[
    BrowserModule,
  ],
  declarations:[
    ContainerComponent,
    ContainerTopComponnet,
    TopRightComponent,
  ],
  exports:[ContainerComponent],
  providers:[],
})
export class ContainerModule{}
