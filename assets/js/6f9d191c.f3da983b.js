"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5462],{5331:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=n(4848),t=n(8453);const c={},d=void 0,i={id:"api/vector_search/base",title:"base",description:"superduper.vector_search.base",source:"@site/content/api/vector_search/base.md",sourceDirName:"api/vector_search",slug:"/api/vector_search/base",permalink:"/docs/api/vector_search/base",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/api/vector_search/base.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"atlas",permalink:"/docs/api/vector_search/atlas"},next:{title:"in_memory",permalink:"/docs/api/vector_search/in_memory"}},l={},o=[{value:"<code>cosine</code>",id:"cosine",level:2},{value:"<code>dot</code>",id:"dot",level:2},{value:"<code>l2</code>",id:"l2",level:2},{value:"<code>BaseVectorSearcher</code>",id:"basevectorsearcher",level:2},{value:"<code>VectorItem</code>",id:"vectoritem",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"superduper.vector_search.base"})})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/vector_search/base.py",children:"Source code"})}),"\n",(0,s.jsx)(r.h2,{id:"cosine",children:(0,s.jsx)(r.code,{children:"cosine"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"cosine(x,\n     y)\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"x"}),(0,s.jsx)(r.td,{children:"numpy.ndarray"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"y"}),(0,s.jsx)(r.td,{children:"numpy.ndarray, y should be normalized!"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Cosine similarity function for vector search."}),"\n",(0,s.jsx)(r.h2,{id:"dot",children:(0,s.jsx)(r.code,{children:"dot"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"dot(x,\n     y)\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"x"}),(0,s.jsx)(r.td,{children:"numpy.ndarray"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"y"}),(0,s.jsx)(r.td,{children:"numpy.ndarray"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Dot function for vector similarity search."}),"\n",(0,s.jsx)(r.h2,{id:"l2",children:(0,s.jsx)(r.code,{children:"l2"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"l2(x,\n     y)\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"x"}),(0,s.jsx)(r.td,{children:"numpy.ndarray"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"y"}),(0,s.jsx)(r.td,{children:"numpy.ndarray"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"L2 function for vector similarity search."}),"\n",(0,s.jsx)(r.h2,{id:"basevectorsearcher",children:(0,s.jsx)(r.code,{children:"BaseVectorSearcher"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"BaseVectorSearcher(self,\n     identifier: 'str',\n     dimensions: 'int',\n     h: 't.Optional[numpy.ndarray]' = None,\n     index: 't.Optional[t.List[str]]' = None,\n     measure: 't.Optional[str]' = None)\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"identifier"}),(0,s.jsx)(r.td,{children:"Unique string identifier of index"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dimensions"}),(0,s.jsx)(r.td,{children:"Dimension of the vector embeddings"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"h"}),(0,s.jsxs)(r.td,{children:["Seed vectors ",(0,s.jsx)(r.code,{children:"numpy.ndarray"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"index"}),(0,s.jsx)(r.td,{children:"list of IDs"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"measure"}),(0,s.jsx)(r.td,{children:"measure to assess similarity"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Base class for vector searchers."}),"\n",(0,s.jsx)(r.h2,{id:"vectoritem",children:(0,s.jsx)(r.code,{children:"VectorItem"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"VectorItem(self,\n     id: 'str',\n     vector: 'numpy.ndarray') -> None\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"id"}),(0,s.jsx)(r.td,{children:"ID of the vector"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"vector"}),(0,s.jsx)(r.td,{children:"Vector of the item"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Class for representing a vector in vector search with id and vector."})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var s=n(6540);const t={},c=s.createContext(t);function d(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);