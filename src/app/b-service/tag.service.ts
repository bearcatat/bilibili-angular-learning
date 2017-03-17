import {Injectable} from '@angular/core';

export class Tag{
  name:string;
  tid:number;
  id:string;
}

const tags:Tag[]=[
  {name:'动画',tid:1,id:'b_douga'},
  {name:'番剧',tid:13,id:'b_bangumi'},
  {name:'音乐',tid:3,id:'b_music'},
  {name:'舞蹈',tid:129,id:'b_dance'},
  {name:'游戏',tid:4,id:'b_game'},
  {name:'科技',tid:36,id:'b_technology'},
  {name:'生活',tid:160,id:'b_life'},
  {name:'鬼畜',tid:119,id:'b_kichiku'},
  {name:'时尚',tid:155,id:'b_fashion'},
  {name:'广告',tid:165,id:'b_ad'},
  {name:'娱乐',tid:5,id:'b_ent'},
  {name:'影视',tid:23,id:''},
]

const tagsDetails:Tag[]=[
  {name:'动画',tid:1,id:'b_douga'},
  {name:'番剧',tid:13,id:'b_bangumi'},
  {name:'音乐',tid:3,id:'b_music'},
  {name:'舞蹈',tid:129,id:'b_dance'},
  {name:'游戏',tid:4,id:'b_game'},
  {name:'科技',tid:36,id:'b_technology'},
  {name:'生活',tid:160,id:'b_life'},
  {name:'鬼畜',tid:119,id:'b_kichiku'},
  {name:'时尚',tid:155,id:'b_fashion'},
  {name:'广告',tid:165,id:'b_ad'},
  {name:'娱乐',tid:5,id:'b_ent'},
  {name:'电影',tid:23,id:'b_movie'},
  {name:'电视剧',tid:11,id:'b_teleplay'},
]

@Injectable()
export class TagService{
  getTags():Promise<Tag[]>{
    return Promise.resolve(tags);
  }
  getTagDetails():Promise<Tag[]>{
    return Promise.resolve(tagsDetails);
  }
}
