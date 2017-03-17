import{Injectable} from '@angular/core';
import{Http,Headers,Jsonp,URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

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

@Injectable()
export class TopRightService{
  private topRightUrl='http://localhost:4000/index/ranking-3day.json';
  // private headers=new Headers({
  //   'Accept':'Accept:application/json, text/javascript, */*; q=0.01',
  //   // 'Accept-Encoding':'gzip, deflate, sdch',
  //   'Accept-Language':'zh-CN,zh;q=0.8',
  //   // 'Connection':'keep-alive',
  //   // 'Host':'www.bilibili.com',
  //   // 'Referer':'http://www.bilibili.com/'
  // });

  constructor(private http:Http,private jsonp:Jsonp){}
  private handleError(error:any):Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getRanking3Day():Promise<VItem[]>{
    return this.http
      .get(this.topRightUrl)
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
}
