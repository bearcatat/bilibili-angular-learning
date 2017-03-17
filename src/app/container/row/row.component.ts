import {Component,Input} from '@angular/core';

import {Tag} from '../../b-service/tag.service';
import {Vbox} from '../../b-service/info.service';


@Component({
  moduleId:module.id,
  selector:"container-row",
  templateUrl:'./row.component.html'
})
export class RowComponent{
  @Input()
  tag:Tag;
  @Input()
  vlist:Vbox[];
}
