import{d as g,v as x,o as a,c as p,z as m,L as C,b as v,e as s,C as P,N as V,x as $,O as E,g as f,a4 as G,s as A,E as D,a3 as O,af as R,ag as S,a as B,J as N,ak as T,w,q as o,t as Y,ad as z,al as I}from"./app-e9b7d701.js";import{_ as K}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-f1b26f89.js";const L=g({__name:"YunGallery",props:{photos:{}},setup(d){return(r,n)=>{const e=x("VAGallery");return a(),p(e,{photos:r.photos},null,8,["photos"])}}}),j={key:0,"w-full":"","pt-14":"","pb-10":""},J={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},M=["onKeyup"],q={key:1},F=g({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(d){const r=d,n=m(""),e=m(""),l=m(!1),{decrypt:c}=C();async function _(){const i=r.encryptedPhotos;if(i)try{const t=await c(n.value,i);e.value=t||""}catch{l.value=!0}}function y(){e.value="",n.value=""}return(i,t)=>{const h=L;return a(),v("div",null,[e.value?(a(),v("div",q,[f(h,{photos:JSON.parse(e.value)},null,8,["photos"]),s("div",{"w-full":"","text-center":"","mt-8":""},[s("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(a(),v("div",j,[s("div",J,[P(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:$(l.value&&"border-red"),onInput:t[1]||(t[1]=u=>l.value=!1),onKeyup:E(_,["enter"])},null,42,M),[[V,n.value]]),s("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:_})])]))])}}}),H={text:"center",class:"yun-text-light",p:"2"},U={class:"page-action",text:"center"},W=["title"],Q=s("div",{"i-ri-arrow-go-back-line":""},null,-1),X=[Q],Z=g({__name:"gallery",setup(d){const r=G(),{t:n}=A(),e=D(),l=O(e);R([S({"@type":"CollectionPage"})]);const c=B(()=>e.value.photos||[]),y=N().value.addons["valaxy-addon-lightgallery"]?T(()=>I(()=>import("./YunGallery-b4c01750.js"),["assets/YunGallery-b4c01750.js","assets/app-e9b7d701.js","assets/index-60a3b8c0.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-f1b26f89.js"])):()=>null;return(i,t)=>{const h=K,u=F,b=x("RouterView"),k=z;return a(),p(k,null,{"main-header":w(()=>[f(h,{title:o(l)||o(n)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":w(()=>[s("div",H,Y(o(n)("counter.photos",c.value.length)),1),s("div",U,[s("a",{class:"yun-icon-btn",title:o(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(r).back())},X,8,W)]),o(e).encryptedPhotos?(a(),p(u,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(a(),p(o(y),{key:1,photos:c.value},null,8,["photos"])),f(b)]),_:1})}}}),oe=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{L as _,oe as g};
