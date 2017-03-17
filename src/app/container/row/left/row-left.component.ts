import {Component,Input} from '@angular/core';

import {Tag} from '../../../b-service/tag.service';
import {Vbox} from '../../../b-service/info.service';

@Component({
  moduleId:module.id,
  selector:'row-left',
  templateUrl:'./row-left.component.html',
})

export class RowLeftComponent{
  @Input()
  tag:Tag;
  @Input()
  vlist:Vbox[];
}
