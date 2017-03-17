import {Component,OnInit} from '@angular/core';

import {TagService,Tag} from '../b-service/tag.service';
import {InfoService,Index} from '../b-service/info.service';

@Component({
  moduleId:module.id,
  selector:'app-container',
  templateUrl:'./container.component.html',
})
export class ContainerComponent implements OnInit{
  constructor(private tagservice:TagService,private infoService:InfoService){}
  tags:Tag[];
  index:Index;
  ngOnInit():void{
    this.tagservice.getTagDetails().then(tags=>{
      this.infoService.getIndex().then(index=>{
        this.tags=tags
        this.index=index
      })
    })
  }
}
