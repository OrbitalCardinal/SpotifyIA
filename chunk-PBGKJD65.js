import{a as y}from"./chunk-ZBEIONUX.js";import{a as v}from"./chunk-B2VFL6EB.js";import{Ea as C,Ha as c,M as d,S as i,U as a,Wa as b,c as r,ma as f,q as m,ta as u,ua as h,xa as g,ya as x,za as s}from"./chunk-UFFJIHOZ.js";var S=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-spinner"]],standalone:!0,features:[c],decls:1,vars:0,consts:[[1,"loader","bg-primary","text-primary"]],template:function(n,l){n&1&&s(0,"span",0)},styles:['.loader[_ngcontent-%COMP%]{width:8px;height:40px;border-radius:4px;display:block;margin:20px auto;position:relative;box-sizing:border-box;animation:_ngcontent-%COMP%_animloader .3s .3s linear infinite alternate}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{content:"";width:8px;height:40px;border-radius:4px;background:currentColor;position:absolute;top:50%;transform:translateY(-50%);left:20px;box-sizing:border-box;animation:_ngcontent-%COMP%_animloader .3s .45s linear infinite alternate}.loader[_ngcontent-%COMP%]:before{left:-20px;animation-delay:0s}@keyframes _ngcontent-%COMP%_animloader{0%{height:48px}to{height:4px}}']});let t=e;return t})();var p=(()=>{let e=class e{constructor(){this.httpClient=i(v)}getData(){return r(this,null,function*(){return m(this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1"))})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function k(t,e){t&1&&s(0,"app-spinner")}var H=(()=>{let e=class e{constructor(){this.authCallbackService=i(p),this.spinnerService=i(y)}ngOnInit(){this.getData()}getData(){return r(this,null,function*(){let o=yield this.authCallbackService.getData();console.log(o)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-auth-callback"]],standalone:!0,features:[C([p]),c],decls:2,vars:1,consts:[[1,"flex","items-center","justify-center","w-screen","h-screen"]],template:function(n,l){n&1&&(g(0,"div",0),u(1,k,1,0,"app-spinner"),x()),n&2&&(f(1),h(1,l.spinnerService.getRequests()!==0?1:-1))},dependencies:[b,S]});let t=e;return t})();export{H as AuthCallbackComponent};
