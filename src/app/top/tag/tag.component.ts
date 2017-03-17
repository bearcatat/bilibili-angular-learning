import{Component,OnInit} from '@angular/core';

import{Tag,TagService} from '../../b-service/tag.service';

@Component({
    moduleId:module.id,
    selector:'top-tag',
    templateUrl:'./tag.component.html',
})

export class TagComponent implements OnInit{
    tags:Tag[];
    constructor(private tagService:TagService){}
    getTags():void{
        this.tagService.getTags().then(tags=>this.tags=tags);
    }
    ngOnInit():void{
        this.getTags();
    }
}
