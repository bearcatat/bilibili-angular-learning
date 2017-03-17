import {Component,OnInit} from '@angular/core';

import {InfoService,VItem} from '../../../b-service/info.service';

@Component({
  moduleId:module.id,
  selector:'container-top-right',
  templateUrl:'./top-right.component.html'
})

export class TopRightComponent implements OnInit{
  constructor(private infoService:InfoService){}
  vItems:VItem[];
  getRanking3Day():void{
    this.infoService.getRanking3Day()
    .then(vItems=>this.vItems=vItems);
  }
  ngOnInit():void{
    this.getRanking3Day();
  }
}
