import{Component,OnInit} from '@angular/core';

import{Tag,NavService} from '../nav.service';

@Component({
    moduleId:module.id,
    selector:'top-tag',
    templateUrl:'./tag.component.html',
})

export class TagComponent implements OnInit{
    tags:Tag[];
    constructor(private navService:NavService){}
    getTags():void{
        this.navService.getTags().then(tags=>this.tags=tags);
    }
    ngOnInit():void{
        this.getTags();
    }
}