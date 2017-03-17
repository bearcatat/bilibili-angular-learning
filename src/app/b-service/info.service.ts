import{Injectable} from '@angular/core';
import{Http,Headers,Jsonp,URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

var expando="jQuery" + ("1.7.2" + Math.random()).replace(/\D/g, "");
var cc = (new Date).getTime();

export class VItem{
  aid:string;
  author:string;
  badgepay:boolean;
  coins:number;
  create:string;
  description:string;
  duration:string;
  favorites:number;
  mid:number;
  pic:string;
  play:number;
  review:number;
  subtitle:string;
  title:string;
  typename:string;
  video_review:number;
}

export class Vbox_b{
  aid:string;
  author:string;
  coins:number;
  create:string;
  credit:number;
  description:string;
  duration:string;
  favorites:number;
  mid:number;
  pic:string;
  play:number;
  pubdate:string;
  review:number;
  subtitle:string;
  title:string;
  typeid:number;
  video_review:number;
}

export class Owner{
  face:string;
  mid:number;
  name:string;
}

export class Rights{
  bp:number;
  download:number;
  elec:number;
  hd5:number;
  movie:number;
  pay:number;
}

export class Stat{
  coin:number;
  danmaku:number;
  favorite:number;
  his_rank:number;
  now_rank:number;
  reply:number;
  share:number;
  view:number;
}

export class Vbox{
  aid:number;
  attribute:number;
  copyright:number;
  ctime:number;
  desc:string;
  duration:number;
  owner:Owner;
  pic:string;
  pubdate:number;
  rights:Rights;
  stat:Stat;
  state:number;
  tags:string[];
  tid:number;
  title:string;
  tname:string;
}

export class Index{
  ad:Vbox[];
  bangumi:Vbox_b[];
  dance:Vbox[];
  douga:Vbox[];
  ent:Vbox[];
  fashion:Vbox[];
  game:Vbox[];
  kichiku:Vbox[];
  life:Vbox[];
  movie:Vbox[];
  music:Vbox[];
  technology:Vbox[];
  teleplay:Vbox[];
}

@Injectable()
export class InfoService{
  constructor(private http:Http,private jsonp:Jsonp){}
  private handleError(error:any):Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getRanking3Day():Promise<VItem[]>{
    var topRightUrl='http://localhost:4000/index/ranking-3day.json';
    return this.http
      .get(topRightUrl)
      .toPromise()
      .then(response=>{
        let list = response.json().recommend.list;
        let vItems:VItem[]=[];
        for(var i in list){
          vItems.push(list[i]);
        }
        return vItems;
      })
      .catch(this.handleError);
  }
  getIndex():Promise<Index>{
    var x=(new Date).getTime();
    var jsonpCallback=expando + "_" + cc++;
    var url='http://localhost:4000/typedynamic/index?type=json&callback='+jsonpCallback+'&_='+x;
    return this.http
      .get(url)
      .toPromise()
      .then(res=>{
        return res.json().data as Index;
      })
  }
}
