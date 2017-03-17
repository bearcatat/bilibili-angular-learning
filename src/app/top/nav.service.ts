import {Injectable} from '@angular/core';

export class Nav{
    name:string;
    className:string;
    url:string;
}

const navs:Nav[]=[
    {name:'主站',className:'home',url:'//www.bilibili.com/'},
    {name:'画友',className:'hbili',url:'http://h.bilibili.com/'},
    {name:'游戏中心',className:'b-gc',url:'//game.bilibili.com/'},
    {name:'直播',className:'live',url:'//live.bilibili.com'},
    {name:'周边',className:'b-zb',url:'//bmall.bilibili.com/#!/'},
    {name:'移动端',className:'shouji',url:'//app.bilibili.com'},
]

@Injectable()
export class NavService{
    getNavs():Promise<Nav[]>{
        return Promise.resolve(navs);
    }
}
