"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3087],{2430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const o={},i="Custom serialization",a={id:"tutorials/custom_serialization",title:"Custom serialization",description:"In this tutorial, we demonstrate how developers can flexibily and portably define",source:"@site/content/tutorials/custom_serialization.md",sourceDirName:"tutorials",slug:"/tutorials/custom_serialization",permalink:"/docs/tutorials/custom_serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/tutorials/custom_serialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Training and Managing MNIST Predictions with superduper",permalink:"/docs/tutorials/training"},next:{title:"Eager Mode (Aplpa)",permalink:"/docs/tutorials/eager_mode"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-serialization",children:"Custom serialization"}),"\n",(0,s.jsxs)(n.p,{children:["In this tutorial, we demonstrate how developers can flexibily and portably define\ntheir own classes in ",(0,s.jsx)(n.code,{children:"superduper"}),". These may be exported with ",(0,s.jsx)(n.code,{children:"Component.export"}),"\nand transported to other ",(0,s.jsx)(n.code,{children:"superduper"})," deployments with ",(0,s.jsx)(n.code,{children:"db.apply"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To make our lives difficult, we'll include a data blob in the model, which should be serialized with the\nexported class:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json') as f:\n    data = json.load(f)\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("summary",{children:"Outputs"})}),"\n",(0,s.jsxs)(n.p,{children:["We'll define our own ",(0,s.jsx)(n.code,{children:"Model"})," descendant, with a custom ",(0,s.jsx)(n.code,{children:".predict"})," method.\nWe are free to define any of our own parameters to this class with a simple annotation in the header, since ",(0,s.jsx)(n.code,{children:"Model"}),"\nis a ",(0,s.jsx)(n.code,{children:"dataclasses.dataclass"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import *\n\n\nrequires_packages(['openai', None, None])\n\n\nclass NewModel(Model):\n    a: int = 2\n    b: list\n\n    def predict(self, x):\n        return x * self.a\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("summary",{children:"Outputs"})}),"\n",(0,s.jsxs)(n.p,{children:["If we want ",(0,s.jsx)(n.code,{children:"b"})," to be saved as a blob in the ",(0,s.jsx)(n.code,{children:"db.artifact_store"})," we can simply\nannotate this in the ",(0,s.jsx)(n.code,{children:"artifacts=..."})," parameter, supplying the serializer we would like to use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"m = NewModel('test-hg', a=2, b=data, artifacts={'b': pickle_serializer})\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("summary",{children:"Outputs"})}),"\n",(0,s.jsx)(n.p,{children:"Now we can export the model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"m.export('test-hg')\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("summary",{children:"Outputs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!cat test-hg/component.json\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Outputs"}),(0,s.jsx)("pre",{children:(0,s.jsxs)(n.p,{children:['{\n"_base": "?test-hg",\n"_builds": {\n"dill": {\n"_path": "superduper.components.datatype.get_serializer",\n"method": "dill",\n"encodable": "artifact"\n},\n"d0cd766789b72ffd8cb3d56484b02d8262dcc9b4": {\n"_path": "superduper.components.datatype.Artifact",\n"datatype": "?dill",\n"blob": "&:blob',":d0cd766789b72ffd8cb3d56484b02d8262dcc9b4",'"\n},\n"pickle": {\n"_path": "superduper.components.datatype.get_serializer",\n"method": "pickle",\n"encodable": "artifact"\n},\n"e149b30249df8e7e2785fbbb58054cbe898a3cfd": {\n"_path": "superduper.components.datatype.Artifact",\n"datatype": "?pickle",\n"blob": "&:blob',":e149b30249df8e7e2785fbbb58054cbe898a3cfd",'"\n},\n"test-hg": {\n"_object": "?d0cd766789b72ffd8cb3d56484b02d8262dcc9b4",\n"b": "?e149b30249df8e7e2785fbbb58054cbe898a3cfd"\n}\n},\n"_files": {}\n}']})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!ls test-hg/blobs/\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Outputs"}),(0,s.jsx)("pre",{children:(0,s.jsx)(n.p,{children:"748ab67dbe58e1c269f83d72a77ad91cbc313c24\nd0cd766789b72ffd8cb3d56484b02d8262dcc9b4\ne149b30249df8e7e2785fbbb58054cbe898a3cfd"})})]}),"\n",(0,s.jsx)(n.p,{children:"The following cell works even after restarting the kernel.\nThat means the exported component is now completely portable!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import *\n\nc = Component.read('test-hg')\n\nc.predict(2)\n"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Outputs"}),(0,s.jsx)("pre",{children:(0,s.jsx)(n.p,{children:"4"})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);