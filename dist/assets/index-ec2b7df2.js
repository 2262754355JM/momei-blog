import{_ as k}from"./ValaxyMain.vue_vue_type_style_index_0_lang-290cf015.js";import{j as h,u as g,o as l,a as m,e as a,F as y,k as v,n as $,l as p,t as f,_ as b,c as w,w as e,g as j,r as n,p as E}from"./app-ba31bb11.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-9ed78dc5.js";import"./YunCard.vue_vue_type_style_index_0_lang-45113ca0.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-d9ed3d62.js";const D="https://cdn.yunyoujun.cn/img/avatar/none.jpg",B=(t,r=D)=>{const o=t.target;o.setAttribute("data-src",o.src),o.src=r},S={class:"links"},N={class:"link-items"},x=["href","title"],L={class:"link-left"},V=["src","alt","onError"],z={class:"link-info",m:"l-2"},C={class:"link-blog",font:"serif black"},F={class:"link-desc"},I=h({__name:"YunLinks",props:{links:null,random:{type:Boolean}},setup(t){const r=t,{data:o}=g(r.links,r.random);return(u,i)=>(l(),m("div",S,[a("ul",N,[(l(!0),m(y,null,v(p(o),(s,d)=>(l(),m("li",{key:d,class:"link-item",style:$(`--primary-color: ${s.color}`)},[a("a",{class:"link-url",p:"x-4 y-2",href:s.url,title:s.name,alt:"portrait",rel:"friend"},[a("div",L,[a("img",{class:"link-avatar",w:"16",h:"16",loading:"lazy",src:s.avatar,alt:s.name,onError:p(B)},null,40,V)]),a("div",z,[a("div",C,f(s.blog),1),a("div",F,f(s.desc),1)])],8,x)],4))),128))])]))}});const R=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"D:\\\\文件\\\\code\\\\my_projectEes\\\\blog\\\\valaxy-blog\\\\pages\\\\links\\\\index.md","lastUpdated":1680323190000}'),c=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"D:\\\\文件\\\\code\\\\my_projectEes\\\\blog\\\\valaxy-blog\\\\pages\\\\links\\\\index.md","lastUpdated":1680323190000}'),J={name:"pages/links/index.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){E("pageData",c)}};function O(t,r,o,u,i,s){const d=I,_=k;return l(),w(_,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":e(()=>[j(d,{links:i.frontmatter.links,random:i.frontmatter.random},null,8,["links","random"])]),"main-header":e(()=>[n(t.$slots,"main-header")]),"main-header-after":e(()=>[n(t.$slots,"main-header-after")]),"main-nav":e(()=>[n(t.$slots,"main-nav")]),"main-content":e(()=>[n(t.$slots,"main-content")]),"main-content-after":e(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(t.$slots,"main-nav-after")]),comment:e(()=>[n(t.$slots,"comment")]),footer:e(()=>[n(t.$slots,"footer")]),aside:e(()=>[n(t.$slots,"aside")]),"aside-custom":e(()=>[n(t.$slots,"aside-custom")]),default:e(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const q=b(J,[["render",O]]);export{R as __pageData,q as default};
