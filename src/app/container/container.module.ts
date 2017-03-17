import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule,JsonpModule} from '@angular/http';

import {ContainerComponent} from './container.component';
import {ContainerTopComponnet} from './top/container-top.component';
import {TopRightComponent} from './top/right/top-right.component';
import {RowComponent} from './row/row.component';
import {RowLeftComponent} from './row/left/row-left.component';
import {LeftHeadComponent} from './row/left/left-head/left-head.cpmponent';
import {VBoxComponent} from './row/left/vbox/v-box.component';

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
    RowLeftComponent,
    LeftHeadComponent,
    VBoxComponent,
  ],
  exports:[ContainerComponent],
  providers:[InfoService,TagService],
})
export class ContainerModule{}
