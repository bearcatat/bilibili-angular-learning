import{NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ZTopComponent} from'./ztop/z-top.component';
import {TopComponent}  from './top.component';
import {NavComponent} from './ztop/nav/nav.component';
import {TagComponent} from './tag/tag.component';

import{NavService} from './nav.service';

@NgModule({
    imports:[
        BrowserModule,
    ],
    declarations:[
        ZTopComponent,
        TopComponent,
        NavComponent,
        TagComponent,
    ],
    exports:[TopComponent],
    providers:[NavService],
})
export class TopModule{}