import {Component,OnInit} from '@angular/core';

import {Nav,NavService} from '../../nav.service';

@Component({
    moduleId:module.id,
    selector:'ztop-nav',
    templateUrl:'./nav.component.html',
})

export class NavComponent implements OnInit {
    navs:Nav[];
    constructor(private navService:NavService){}
    getNavs():void{
        this.navService.getNavs().then(navs=>this.navs=navs);
    }
    ngOnInit():void{
        this.getNavs();
    }
}