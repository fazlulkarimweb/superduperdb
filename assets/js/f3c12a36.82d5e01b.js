"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[54],{2331:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var s=a(4848),t=a(8453);const d={},r="(Optional) Setting up tables and encodings",o={id:"execute_api/data_encodings_and_schemas",title:"(Optional) Setting up tables and encodings",description:"superduper has flexible support for data-types. In both MongoDB and SQL databases,",source:"@site/content/execute_api/data_encodings_and_schemas.md",sourceDirName:"execute_api",slug:"/execute_api/data_encodings_and_schemas",permalink:"/docs/execute_api/data_encodings_and_schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/execute_api/data_encodings_and_schemas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automatic data-types",permalink:"/docs/execute_api/auto_data_types"},next:{title:"Working with and inserting large pieces of data",permalink:"/docs/execute_api/using_hybrid_storage_to_handle_large_data_blobs"}},c={},i=[{value:"<code>DataType</code> abstraction",id:"datatype-abstraction",level:2},{value:"Create a <code>Schema</code>",id:"create-a-schema",level:2},{value:"Create a table with a <code>Schema</code>",id:"create-a-table-with-a-schema",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"optional-setting-up-tables-and-encodings",children:"(Optional) Setting up tables and encodings"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"superduper"})," has flexible support for data-types. In both MongoDB and SQL databases,\none can uses ",(0,s.jsx)(n.code,{children:"superduper.DataType"})," to define one's own data-types."]}),"\n",(0,s.jsxs)(n.p,{children:["If no-datatypes are provided, ",(0,s.jsx)(n.code,{children:"superduper"})," ",(0,s.jsx)(n.a,{href:"/docs/execute_api/auto_data_types",children:"uses fallbacks"})," to encode and decode data.\nTo gain more-control, developers may use the ",(0,s.jsx)(n.code,{children:"DataType"})," and ",(0,s.jsx)(n.code,{children:"Schema"})," components."]}),"\n",(0,s.jsxs)(n.h2,{id:"datatype-abstraction",children:[(0,s.jsx)(n.code,{children:"DataType"})," abstraction"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DataType"})," class requires two functions which allow the user to go to-and-from ",(0,s.jsx)(n.code,{children:"bytes"}),".\nHere is an ",(0,s.jsx)(n.code,{children:"DataType"})," which encodes ",(0,s.jsx)(n.code,{children:"numpy.ndarray"})," instances to ",(0,s.jsx)(n.code,{children:"bytes"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import numpy\nfrom superduper import DataType\n\nmy_array = DataType(\n    'my-array',\n    encoder=lambda x: memoryview(x).tobytes(),\n    decode=lambda x: numpy.frombuffer(x),\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here's a more interesting ",(0,s.jsx)(n.code,{children:"DataType"})," which encoders audio from ",(0,s.jsx)(n.code,{children:"numpy.array"})," format to ",(0,s.jsx)(n.code,{children:".wav"})," file ",(0,s.jsx)(n.code,{children:"bytes"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import librosa\nimport io\nimport soundfile\n\ndef decoder(x):\n    buffer = io.BytesIO(x)\n    return librosa.load(buffer)\n\ndef encoder(x):\n    buffer = io.BytesIO()\n    soundfile.write(buffer)\n    return buffer.getvalue()\n\naudio = DataType('audio', encoder=encoder, decoder=decoder)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It's completely open to the user how exactly the ",(0,s.jsx)(n.code,{children:"encoder"})," and ",(0,s.jsx)(n.code,{children:"decoder"})," arguments are set."]}),"\n",(0,s.jsxs)(n.p,{children:["You may include these ",(0,s.jsx)(n.code,{children:"DataType"})," instances in models, data-inserts and more. You can also directly\nregister the ",(0,s.jsx)(n.code,{children:"DataType"})," instances in the system, using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.apply(my_array)\ndb.apply(audio)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To reload (for instance in another session) do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"my_array_reloaded = db.load('datatype', 'my_array')\naudio_reloaded = db.load('datatype', 'audio')\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Many of the ",(0,s.jsx)(n.code,{children:"superduper"})," extensions come with their own pre-built ",(0,s.jsx)(n.code,{children:"DataType"})," instances.\nFor example:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduper.ext.pillow.pil_image"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduper.ext.numpy.array"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduper.ext.torch.tensor"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Read more about ",(0,s.jsx)(n.code,{children:"DataType"})," ",(0,s.jsx)(n.a,{href:"../apply_api/datatype",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"create-a-schema",children:["Create a ",(0,s.jsx)(n.code,{children:"Schema"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Schema"})," component wraps several columns of standard data or ",(0,s.jsx)(n.code,{children:"DataType"})," encoded data; it\nmay be used with MongoDB and SQL databases, but is only necessary for SQL."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is a ",(0,s.jsx)(n.code,{children:"Schema"}),' with three columns, one of the columns is a standard data-type "str".\nThe other 2 are given by the ',(0,s.jsx)(n.code,{children:"DataType"})," instances defined above."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import Schema\nfrom superduper.ext.pillow import pil_image\n\nmy_schema = Schema(\n    'my-schema',\n    fields={'txt': 'str', 'audio': audio, 'img': pil_image}\n)\n\n# save this for later use\ndb.apply(my_schema)\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"create-a-table-with-a-schema",children:["Create a table with a ",(0,s.jsx)(n.code,{children:"Schema"})]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"Table"})," is created with a ",(0,s.jsx)(n.code,{children:"Schema"}),", all data inserted to this\ntable will use that ",(0,s.jsx)(n.code,{children:"Schema"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import Table\n\ndb.apply(Table('my-table', schema=my_schema))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In MongoDB this ",(0,s.jsx)(n.code,{children:"Table"})," refers to a MongoDB collection, otherwise\nto an SQL table."]}),"\n",(0,s.jsxs)(n.p,{children:["Then when data is inserted, it will use this ",(0,s.jsx)(n.code,{children:"my_schema"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['my-table'].insert[_many](data).execute()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(6540);const t={},d=s.createContext(t);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);