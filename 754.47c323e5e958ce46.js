(()=>{"use strict";var t,O={4754:(t,a,e)=>{var m=e(7788);e(3184),e(3596);const A=[];for(let i=1;i<19;i++)A.push([`t_g${i}`,`t_g${i}`,`t_g${i}`,`t_g${i}`]);for(let i=1;i<10;i++)A.push([`t_e${i}`,`t_e${i}`,`t_e${i}`,`t_e${i}`]);addEventListener("message",({data:i})=>{i&&function L(i,o){const d=new m.M;o({result:d.solveLayout(i),order:d.writeGame()})}(i.stones,o=>{postMessage({result:o})})})}},T={};function _(t){var a=T[t];if(void 0!==a)return a.exports;var e=T[t]={exports:{}};return O[t](e,e.exports,_),e.exports}_.m=O,_.x=()=>{var t=_.O(void 0,[852],()=>_(4754));return _.O(t)},t=[],_.O=(a,e,m,r)=>{if(!e){var u=1/0;for(s=0;s<t.length;s++){for(var[e,m,r]=t[s],g=!0,c=0;c<e.length;c++)(!1&r||u>=r)&&Object.keys(_.O).every(w=>_.O[w](e[c]))?e.splice(c--,1):(g=!1,r<u&&(u=r));if(g){t.splice(s--,1);var f=m();void 0!==f&&(a=f)}}return a}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[e,m,r]},_.d=(t,a)=>{for(var e in a)_.o(a,e)&&!_.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})},_.f={},_.e=t=>Promise.all(Object.keys(_.f).reduce((a,e)=>(_.f[e](t,a),a),[])),_.u=t=>t+".087e90beff0b35b9.js",_.miniCssF=t=>{},_.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),(()=>{var t;_.tt=()=>(void 0===t&&(t={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("angular#bundler",t))),t)})(),_.tu=t=>_.tt().createScriptURL(t),_.p="",(()=>{var t={754:1};_.f.i=(r,s)=>{t[r]||importScripts(_.tu(_.p+_.u(r)))};var e=self.webpackChunkmah=self.webpackChunkmah||[],m=e.push.bind(e);e.push=r=>{var[s,u,g]=r;for(var c in u)_.o(u,c)&&(_.m[c]=u[c]);for(g&&g(_);s.length;)t[s.pop()]=1;m(r)}})(),(()=>{var t=_.x;_.x=()=>_.e(852).then(t)})(),_.x()})();