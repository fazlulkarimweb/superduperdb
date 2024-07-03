"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8471],{3656:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=i(4848),s=i(8453);const t={},r="Execute API",c={id:"execute_api/overview",title:"Execute API",description:"SuperDuperDB implements 2 main classes of db.databackend:",source:"@site/content/execute_api/overview.md",sourceDirName:"execute_api",slug:"/execute_api/overview",permalink:"/docs/execute_api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/execute_api/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cron Job",permalink:"/docs/apply_api/cron_job"},next:{title:"Data inserts",permalink:"/docs/execute_api/inserting_data"}},a={},d=[{value:"Base",id:"base",level:2},{value:"PyMongo",id:"pymongo",level:2},{value:"Ibis",id:"ibis",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"execute-api",children:"Execute API"}),"\n",(0,o.jsxs)(n.p,{children:["SuperDuperDB implements 2 main classes of ",(0,o.jsx)(n.code,{children:"db.databackend"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../data_integrations/mongodb",children:"MongoDB"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../data_integrations/sql",children:"SQL backends"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Correspondingly, SuperDuperDB currently has 2 flavours of query API:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://pymongo.readthedocs.io/en/stable/",children:(0,o.jsx)(n.code,{children:"pymongo"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://ibis-project.org/",children:(0,o.jsx)(n.code,{children:"ibis"})})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"base",children:"Base"}),"\n",(0,o.jsx)(n.p,{children:"A few commands are shared in common by all supported databackends:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'db["table_name"].insert(data)'})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'db["table_name"].select()'})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For more specific commands, one should use one of the two following APIs."}),"\n",(0,o.jsx)(n.h2,{id:"pymongo",children:"PyMongo"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pymongo"})," is the official MongoDB client for Python. It supports\ncompositional queries, leveraging the BSON format for encoding\nand retrieving data."]}),"\n",(0,o.jsx)(n.h2,{id:"ibis",children:"Ibis"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ibis"})," is a Python library with a uniform compositional approach to building\nSQL queries."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(6540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);