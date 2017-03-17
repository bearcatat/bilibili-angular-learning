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
export class InfoService{
  private topRightUrl='http://localhost:4000/index/ranking-3day.json';
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
