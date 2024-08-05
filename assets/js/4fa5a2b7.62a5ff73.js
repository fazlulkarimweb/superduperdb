"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8463],{2522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(4848),o=t(8453);const a={sidebar_position:4},i="Setting up superduper as a change-data-capture daemon",s={id:"production/change_data_capture",title:"Setting up superduper as a change-data-capture daemon",description:"This functionality is currently for MongoDB only",source:"@site/content/production/change_data_capture.md",sourceDirName:"production",slug:"/production/change_data_capture",permalink:"/docs/production/change_data_capture",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/production/change_data_capture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Command line interface",permalink:"/docs/production/command_line_interface"},next:{title:"SuperDuper Protocol",permalink:"/docs/production/superduper_protocol"}},c={},d=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setting-up-superduper-as-a-change-data-capture-daemon",children:"Setting up superduper as a change-data-capture daemon"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This functionality is currently for MongoDB only"})}),"\n",(0,r.jsx)(n.p,{children:"Setting-up superduper as a change-data-capture daemon, is a simple call:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.cdc.listen()\n"})}),"\n",(0,r.jsx)(n.p,{children:"... or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"superduper cdc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"superduper"})," is configured in this way, this daemon handles all inserts to\nsuperduper, therefore, if ",(0,r.jsx)(n.code,{children:"superduper"})," is run in another process or service,\nit's important to configure the existence of the daemon:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import CFG\n\nCFG.cluster.cdc = True\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now that the daemon is running, even when data is inserted using a different client, such as\nthe native ",(0,r.jsx)(n.code,{children:"pymongo.MongoClient"})," client, then ",(0,r.jsx)(n.code,{children:"Listener"})," outputs are still created on those inputs."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);