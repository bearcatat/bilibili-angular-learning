import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule,JsonpModule} from '@angular/http';

import {ContainerComponent} from './container.component';
import {ContainerTopComponnet} from './top/container-top.component';
import {TopRightComponent} from './top/right/top-right.component';
import {RowComponent} from './row/row.component';

import {InfoService} from  '../b-service/info.service';
import {TagService} from '../b-service/tag.service';


@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations:[
    ContainerComponent,
    ContainerTopComponnet,
    TopRightComponent,
    RowComponent,
  ],
  exports:[ContainerComponent],
  providers:[InfoService,TagService],
})
export class ContainerModule{}
