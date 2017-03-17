import {Component,Input} from '@angular/core';

@Component({
  moduleId:module.id,
  selector:'v-box',
  templateUrl:'./v-box.component.html',
})

export class VBoxComponent{
  @Input()
  vbox:any;
  getTime(t:number):string{
    return Math.floor(t/60)+':'+(t-Math.floor(t/60)*60);
  }
  getNumber(t:number):string{
    return t>10000?(t/10000).toFixed(1)+'万':t.toString()
  }
}
