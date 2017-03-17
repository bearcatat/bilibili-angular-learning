import {Component,Input} from '@angular/core';

import {Tag} from '../../../../b-service/tag.service';

@Component({
  moduleId:module.id,
  selector:'row-left-head',
  templateUrl:'./left-head.component.html',
})

export class LeftHeadComponent{
  @Input()
  tag:Tag;
}
