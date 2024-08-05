"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9804],{9335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=r(4848),n=r(8453);const o={sidebar_position:7},i="Vector-search",a={id:"fundamentals/vector_search_algorithm",title:"Vector-search",description:"superduper allows users to implement vector-search in their database by either",source:"@site/content/fundamentals/vector_search_algorithm.md",sourceDirName:"fundamentals",slug:"/fundamentals/vector_search_algorithm",permalink:"/docs/fundamentals/vector_search_algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/fundamentals/vector_search_algorithm.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Encoding data",permalink:"/docs/fundamentals/data_transmision"},next:{title:"Production features in superduper",permalink:"/docs/production/overview"}},c={},h=[{value:"Philosophy",id:"philosophy",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Explanation",id:"explanation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vector-search",children:"Vector-search"}),"\n",(0,s.jsxs)(t.p,{children:["superduper allows users to implement vector-search in their database by either\nusing in-database functionality, or via a sidecar implementation with ",(0,s.jsx)(t.code,{children:"lance"})," and ",(0,s.jsx)(t.code,{children:"FastAPI"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"philosophy",children:"Philosophy"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"superduper"}),", from a user point-of-view vector-search isn't a completely different beast than other ways of\nusing the system:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The vector-preparation is exactly the same as preparing outputs with any model,\nwith the special difference that the outputs are vectors, arrays or tensors."}),"\n",(0,s.jsx)(t.li,{children:"Vector-searches are just another type of database query which happen to use\nthe stored vectors."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,s.jsx)(t.p,{children:"Here is a schematic of how vector-search works:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(2293).A+"",width:"5120",height:"2925"})}),"\n",(0,s.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsx)(t.p,{children:"A vector-search query has the schematic form:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"table_or_collection\n    .like(Document(<dict-to-search-with>))      # the operand is vectorized using registered models\n    .filter_results(*args, **kwargs)            # the results of vector-search are filtered\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"table_or_collection\n    .filter_results(*args, **kwargs)            # the results of vector-search are filtered\n    .like(Document(<dict-to-search-with>))      # the operand is vectorized using registered models\n"})}),"\n",(0,s.jsx)(t.p,{children:"...or"}),"\n",(0,s.jsxs)(t.p,{children:["The type of such a query is a ",(0,s.jsx)(t.code,{children:"CompoundSelect"}),". It's 2 parts are the vector-search part (",(0,s.jsx)(t.code,{children:"like"}),") and the\nfiltering part (",(0,s.jsx)(t.code,{children:"select"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["In the first case, the operand of ",(0,s.jsx)(t.code,{children:"like"})," is dispatched to a ",(0,s.jsx)(t.strong,{children:"model"}),", which converts this into a ",(0,s.jsx)(t.strong,{children:"vector"}),".\nThe ",(0,s.jsx)(t.strong,{children:"vector"})," is compared to previously saved outputs of the same or a paired ",(0,s.jsx)(t.strong,{children:"model"})," (multi-modal).\nThe most similar ",(0,s.jsx)(t.code,{children:"ids"})," are retrieved. The ",(0,s.jsx)(t.code,{children:"select"})," part of the query is then transformed to\na similar query which searches within the retrieved ",(0,s.jsx)(t.code,{children:"ids"}),". The full set of results are returned\nto the client."]}),"\n",(0,s.jsxs)(t.p,{children:["Read ",(0,s.jsx)(t.a,{href:"../walkthrough/vector_search.md",children:"here"})," about setting up and detailed usage of vector-search."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2293:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/vector-search-a463432ac5cf55fd4d696a794473e3c2.png"},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);