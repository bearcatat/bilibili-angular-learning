import {Component,OnInit} from '@angular/core';

import {TopRightService,VItem} from './top-right.service';

@Component({
  moduleId:module.id,
  selector:'container-top-right',
  templateUrl:'./top-right.component.html'
})

export class TopRightComponent implements OnInit{
  constructor(private topRightService:TopRightService){}
  vItems:VItem[];
  getRanking3Day():void{
    this.topRightService.getRanking3Day()
    .then(vItems=>this.vItems=vItems);
  }
  ngOnInit():void{
    this.getRanking3Day();
  }
}
