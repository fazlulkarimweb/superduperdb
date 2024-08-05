"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8092],{6566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453),i=n(3935);const o={},c="Tutorials",a={id:"tutorials/intro",title:"Tutorials",description:"In this section we guide newcomers through the most",source:"@site/content/tutorials/intro.md",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/tutorials/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/tutorials/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure",permalink:"/docs/get_started/configuration"},next:{title:"Vector search",permalink:"/docs/tutorials/vector_search"}},l={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsxs)(t.p,{children:["In this section we guide newcomers through the most\nbasic usage pattersn in ",(0,r.jsx)(t.code,{children:"superduper"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed, flexible and realistic use-cases,\nrefer to the ",(0,r.jsx)(t.a,{href:"/use_cases",children:"use-cases section"}),"."]}),"\n","\n","\n",(0,r.jsx)(i.A,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(870),s=n(5215),i=n(5358),o=n(877),c=n(3230),a=n(5225);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const n=(0,s.Nr)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);