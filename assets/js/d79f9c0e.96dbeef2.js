"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7272],{579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const o={sidebar_position:2},r="MongoDB",a={id:"data_integrations/mongodb",title:"MongoDB",description:"In general the MongoDB query API works exactly as per pymongo, with the exception that:",source:"@site/content/data_integrations/mongodb.md",sourceDirName:"data_integrations",slug:"/data_integrations/mongodb",permalink:"/docs/data_integrations/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/data_integrations/mongodb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data integrations",permalink:"/docs/data_integrations/intro"},next:{title:"SQL",permalink:"/docs/data_integrations/sql"}},c={},d=[{value:"Inserts",id:"inserts",level:2},{value:"Updates",id:"updates",level:2},{value:"Selects",id:"selects",level:2},{value:"Vector-search",id:"vector-search",level:2},{value:"Deletes",id:"deletes",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,s.jsxs)(n.p,{children:["In general the MongoDB query API works exactly as per ",(0,s.jsx)(n.code,{children:"pymongo"}),", with the exception that:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["inputs are wrapped in ",(0,s.jsx)(n.code,{children:"Document"})]}),"\n",(0,s.jsx)(n.li,{children:"additional support for vector-search is provided"}),"\n",(0,s.jsx)(n.li,{children:"queries are executed lazily"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"inserts",children:"Inserts"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-collection'].insert_many([{'my-field': ..., ...}\n    for _ in range(20)\n]).execute()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-collection'].update_many(\n    {'<my>': '<filter>'},\n    {'$set': ...},\n).execute()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"selects",children:"Selects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-collection'].find({}, {'_id': 1}).limit(10).execute()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vector-search",children:"Vector-search"}),"\n",(0,s.jsxs)(n.p,{children:["Vector-searches may be integrated with ",(0,s.jsx)(n.code,{children:".find"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-collection'].like({'img': <my_image>}, vector_index='my-index-name').find({}, {'img': 1}).execute()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Read more about vector-search ",(0,s.jsx)(n.a,{href:"/docs/fundamentals/vector_search_algorithm",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"deletes",children:"Deletes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-collection'].delete_many({}).execute()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);