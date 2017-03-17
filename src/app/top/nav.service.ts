import {Injectable} from '@angular/core';

export class Nav{
    name:string;
    className:string;
    url:string;
}

export class Tag{
    name:string;
    tid:number;
}


const navs:Nav[]=[
    {name:'主站',className:'home',url:'//www.bilibili.com/'},
    {name:'画友',className:'hbili',url:'http://h.bilibili.com/'},
    {name:'游戏中心',className:'b-gc',url:'//game.bilibili.com/'},
    {name:'直播',className:'live',url:'//live.bilibili.com'},
    {name:'周边',className:'b-zb',url:'//bmall.bilibili.com/#!/'},
    {name:'移动端',className:'shouji',url:'//app.bilibili.com'},
]

const tags:Tag[]=[
    {name:'动画',tid:1},
    {name:'番剧',tid:13},
    {name:'音乐',tid:3},
    {name:'舞蹈',tid:129},
    {name:'游戏',tid:4},
    {name:'科技',tid:36},
    {name:'生活',tid:160},
    {name:'鬼畜',tid:119},
    {name:'时尚',tid:155},
    {name:'广告',tid:165},
    {name:'娱乐',tid:5},
    {name:'影视',tid:23},
]

@Injectable()
export class NavService{
    getNavs():Promise<Nav[]>{
        console.log(navs);
        return Promise.resolve(navs);
    }
    getTags():Promise<Tag[]>{
        return Promise.resolve(tags);
    }
}
