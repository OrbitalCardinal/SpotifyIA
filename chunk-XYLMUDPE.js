import{c as S}from"./chunk-NNQQA277.js";import{Aa as r,Ba as g,Ea as _,Fa as v,Ga as C,Ka as I,Q as a,S as p,Za as M,ha as l,la as c,pa as m,sa as d,ua as f,va as u,wa as h,xa as x,ya as y,za as s}from"./chunk-WQG4OH5T.js";function w(e,t){if(e&1&&(g(0,"img",1),s(1,"p"),v(2),r()),e&2){let o=_().$implicit;m("src",o.images[0].url,l),c(2),C(o.name)}}function F(e,t){e&1&&(s(0,"div",0),d(1,w,3,2),x(2,1),y(),r())}var z=(()=>{let t=class t{constructor(){this.http=a(S),this.creds=JSON.parse(localStorage.getItem("spotifai-creds")??""),console.log(this.creds)}ngOnInit(){let n=`https://api.spotify.com/v1/users/${this.creds.id_user}/playlists?limit=50`;this.http.get(n,{headers:{Authorization:`${this.creds.token_type} ${this.creds.access_token}`}}).subscribe(i=>{this.playlists=i.items})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["app-main"]],standalone:!0,features:[I],decls:2,vars:0,consts:[[1,"flex","flex-row","items-center","gap-4","mb-[20px]"],[1,"w-[100px]","h-[100px]",3,"src"],["class","flex flex-row items-center gap-4 mb-[20px]"]],template:function(i,b){i&1&&u(0,F,4,0,"div",2,f),i&2&&h(b.playlists)},dependencies:[M]});let e=t;return e})();export{z as MainComponent};
