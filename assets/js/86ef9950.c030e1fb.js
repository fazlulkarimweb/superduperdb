"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9437],{8909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(4848),s=t(8453);const i={},r="Automatic data-types",c={id:"execute_api/auto_data_types",title:"Automatic data-types",description:"A major challenge in uniting classical databases with AI,",source:"@site/content/execute_api/auto_data_types.md",sourceDirName:"execute_api",slug:"/execute_api/auto_data_types",permalink:"/docs/execute_api/auto_data_types",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/execute_api/auto_data_types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic insertion",permalink:"/docs/execute_api/basic_insertion"},next:{title:"(Optional) Setting up tables and encodings",permalink:"/docs/execute_api/data_encodings_and_schemas"}},o={},d=[{value:"Basic usage",id:"basic-usage",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"automatic-data-types",children:"Automatic data-types"}),"\n",(0,a.jsx)(n.p,{children:"A major challenge in uniting classical databases with AI,\nis that the types of data used in AI are often not supported by your database."}),"\n",(0,a.jsxs)(n.p,{children:["To solve this problem, ",(0,a.jsx)(n.code,{children:"superduper"})," has the abstractions ",(0,a.jsx)(n.a,{href:"/docs/apply_api/datatype",children:(0,a.jsx)(n.code,{children:"DataType"})})," and ",(0,a.jsx)(n.a,{href:"/docs/apply_api/schema",children:(0,a.jsx)(n.code,{children:"Schema"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To save developers time, by default, ",(0,a.jsx)(n.code,{children:"superduper"})," recognizes the type of data and constructs a ",(0,a.jsx)(n.code,{children:"Schema"})," based on this inference.\nTo learn more about setting these up manually read ",(0,a.jsx)(n.a,{href:"/docs/execute_api/data_encodings_and_schemas",children:"the following page"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,a.jsx)(n.p,{children:"To learn about this feature, try these lines of code, based on sample image data we've prepared."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -O https://superduper-public-demo.s3.amazonaws.com/images.zip && unzip images.zip\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import os\nimport PIL.Image\n\nfrom superduper import superduper\n\ndb = superduper('mongomock://test')\n\nimages = [PIL.Image.open(f'images/{x}') for x in os.listdir('images') if x.endswith('.png')]\n\n# inserts the images into `db` recognizing datatypes automatically\ndb['images'].insert_many([{'img': img} for img in images]).execute()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now if you inspect which components are available, you will see that 2 components have been added to\nthe system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"db.show()\n"})}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Outputs"}),(0,a.jsx)("pre",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[{'identifier': 'pil_image', 'type_id': 'datatype'},\n {'identifier': 'AUTO:img=pil_image', 'type_id': 'schema'}]\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["To verify that the data types were correctly inferred, we can retrieve a single record.\nThe record is a ",(0,a.jsx)(n.code,{children:"Document"})," which wraps a dictionary with important information:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"r = db['images'].find_one().execute()\nr\n"})}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Outputs"}),(0,a.jsx)("pre",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Document({'img': <PIL.PngImagePlugin.PngImageFile image mode=RGB size=500x338 at 0x128394190>, '_fold': 'train', '_schema': 'AUTO:img=pil_image', '_id': ObjectId('6658610912e50a99219ba587')})\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["By calling the ",(0,a.jsx)(n.code,{children:".unpack()"})," method, the original data is decoded and unwrapped from the ",(0,a.jsx)(n.code,{children:"Document"}),".\nThe result in this case is a Python ",(0,a.jsx)(n.code,{children:"pillow"})," image, which may be used as direct input\nto functions from, for instance, ",(0,a.jsx)(n.code,{children:"torchvision"})," or ",(0,a.jsx)(n.code,{children:"transformers"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"r.unpack()['img']\n"})}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Outputs"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(4752).A+"",width:"500",height:"375"})})})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4752:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/31_0-102a1b880ac9993e4394d3ffd510aa8c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);