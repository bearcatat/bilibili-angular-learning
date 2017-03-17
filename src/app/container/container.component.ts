import {Component,OnInit} from '@angular/core';

import {TagService,Tag} from '../b-service/tag.service';

@Component({
  moduleId:module.id,
  selector:'app-container',
  templateUrl:'./container.component.html',
})
export class ContainerComponent implements OnInit{
  constructor(private tagservice:TagService){}
  tags:Tag[];
  private getTagDetails():void{
    this.tagservice.getTagDetails().then(tags=>this.tags=tags);
  }
  ngOnInit():void{
    this.getTagDetails();
  }
}
