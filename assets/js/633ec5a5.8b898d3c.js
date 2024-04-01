"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4344],{5250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),r=t(8453);const s={sidebar_position:1,tags:["quickstart"]},i="Configure",a={id:"docs/setup/configuration",title:"Configure",description:"SuperDuperDB provides a range of configurable options for setting",source:"@site/content/docs/setup/configuration.md",sourceDirName:"docs/setup",slug:"/docs/setup/configuration",permalink:"/docs/docs/setup/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/setup/configuration.md",tags:[{label:"quickstart",permalink:"/docs/tags/quickstart"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/category/setup"},next:{title:"Sandbox",permalink:"/docs/docs/setup/sandbox"}},c={},d=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure",children:"Configure"}),"\n",(0,o.jsx)(n.p,{children:"SuperDuperDB provides a range of configurable options for setting\nup your environment:"}),"\n",(0,o.jsx)(n.p,{children:"Configurations can either be injected:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["in a YAML file: ",(0,o.jsx)(n.code,{children:".superduperdb/config.yaml"})," or"]}),"\n",(0,o.jsxs)(n.li,{children:["through environment variables starting with ",(0,o.jsx)(n.code,{children:"SUPERDUPERDB_"}),":"]}),"\n",(0,o.jsxs)(n.li,{children:["as ",(0,o.jsx)(n.code,{children:"**kwargs"})," when calling the ",(0,o.jsx)(n.a,{href:"/docs/docs/setup/connecting",children:(0,o.jsx)(n.code,{children:"superduperdb.superduper"})})," function."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Here are the configurable settings and their project defaults\n(remaining configurations can be viewed in ",(0,o.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/base/config.py",children:(0,o.jsx)(n.code,{children:"superduperdb.base.config"})}),"). Note that as much or as little of this configuration can be specified. The remaining\nconfigurations will then take on their default values."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'\n# URI of your database/ datastore (here the name of the db is `test_db`)\ndata_backend: mongodb://superduper:superduper@localhost:27017/test_db\n\n# URI of your artifact store (defaults to `data_backend`)\nartifact_store: null\n\n# URI of your metadata store (defaults to `data_backend`)\nmetadata_store: null\n\n# options for setting up a distributed cluster setup\ncluster:\n  \n  # Size of chunks syncing data-base with vector-search\n  backfill_batch_size: 100\n\n  # URI of CDC service (default - no CDC)\n  cdc: null\n  \n  # URI of compute resource (defaults to in-process)\n  compute: local://\n\n  # URI of vector-search service (defaults to numpy in-process)\n  vector_search: in_memory://\n\n  # Location of local search indices for lance\n  lance_home: .superduperdb/vector_indices\n\n# Location of hybrid data (if `null` then no hybrid storage)\ndownloads_folder: null\n\n# Probability of new data assigned to "valid"\nfold_probability: 0.05\n\n# Log-level DEBUG/ INFO\nlog_level: DEBUG\n\n# Logging-type\nlogging_type: SYSTEM\n\n# Parameters for retrying connections\nretries:\n  stop_after_attempt: 2\n  wait_max: 10.0\n  wait_min: 4.0\n  wait_multiplier: 1.0\n'})}),"\n",(0,o.jsx)(n.p,{children:"As an example, to reconfigure the URI of the data_backend we have two options:"}),"\n",(0,o.jsxs)(n.p,{children:["A configuration file ",(0,o.jsx)(n.code,{children:".superduperdb/config.yaml"})," with this content only:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"data_backend: mongodb://localhost:27018/documents\n"})}),"\n",(0,o.jsx)(n.p,{children:"... or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ export SUPERDUPERDB_DATA_BACKEND='mongodb://localhost:27018/documents'\n"})}),"\n",(0,o.jsx)(n.p,{children:"You may view the configuration used by the system with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python -m superduperdb config\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);