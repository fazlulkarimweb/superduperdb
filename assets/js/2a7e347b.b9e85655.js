"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2806],{1370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(4848),s=n(8453),o=n(9489),a=n(7227),l=n(94);const i={sidebar_label:"Compute features",filename:"compute_features.md"},u="Compute features",c={id:"reusable_snippets/compute_features",title:"compute_features",description:"",source:"@site/content/reusable_snippets/compute_features.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/compute_features",permalink:"/docs/reusable_snippets/compute_features",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/reusable_snippets/compute_features.md",tags:[],version:"current",frontMatter:{sidebar_label:"Compute features",filename:"compute_features.md"},sidebar:"tutorialSidebar",previous:{title:"Insert data",permalink:"/docs/reusable_snippets/insert_data"},next:{title:"Build text embedding model",permalink:"/docs/reusable_snippets/build_text_embedding_model"}},d={},p=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"compute-features",children:"Compute features"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'key = \'txt\'\nimport sentence_transformers\nfrom superduper import vector, Listener\nfrom superduper.ext.sentence_transformers import SentenceTransformer\n\nsuperdupermodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2"),\n    postprocess=lambda x: x.tolist(),\n)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier="features"\n    )\n)        \n'})})}),(0,r.jsx)(a.A,{value:"Image",label:"Image",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"key = 'image'\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduper.ext.torch import TorchModel\nfrom superduper import Listener\nfrom PIL import Image\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image):\n        # Preprocess the image\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nmodel = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess, postprocess=lambda x: x.numpy().tolist())\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier=\"features\"\n    )\n)        \n"})})}),(0,r.jsx)(a.A,{value:"Text-And-Image",label:"Text-And-Image",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import torch\nimport clip\nfrom torchvision import transforms\nfrom superduper import ObjectModel\nfrom superduper import Listener\n\nimport torch\nimport clip\nfrom PIL import Image\n\nkey={\'txt\': \'txt\', \'image\': \'image\'}\n\nclass CLIPModel:\n    def __init__(self):\n        # Load the CLIP model\n        self.device = "cuda" if torch.cuda.is_available() else "cpu"\n        self.model, self.preprocess = clip.load("RN50", device=self.device)\n\n    def __call__(self, text, image):\n        with torch.no_grad():\n            text = clip.tokenize([text]).to(self.device)\n            image = self.preprocess(Image.fromarray(image.astype(np.uint8))).unsqueeze(0).to(self.device)\n            image_features = self.model.encode_image(image)[0].numpy().tolist()\n            text_features = self.model.encode_text(text)[0].numpy().tolist()\n        return [image_features, text_features]\n        \nmodel = CLIPModel()\n\nsuperdupermodel = ObjectModel(identifier="clip", object=model, signature="**kwargs", flatten=True, model_update_kwargs={"document_embedded": False})\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key\n        identifier="features"\n    )\n)\n\n'})})}),(0,r.jsx)(a.A,{value:"Random",label:"Random",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'\nkey = \'random\'\n\nimport numpy as np\nfrom superduper import superduper, ObjectModel, Listener\n\ndef random(*args, **kwargs):\n    return np.random.random(1024).tolist()\n\nsuperdupermodel = ObjectModel(identifier="random", object=random)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier="features"\n    )\n)        \n'})})}),(0,r.jsx)(a.A,{value:"Custom",label:"Custom",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import numpy as np\nfrom superduper import superduper, ObjectModel, Listener\n\nkey = \'custom\'\n\n# Define any feature calculation function\ndef calc_fake_feature(input_data):\n    fake_feature = list(range(10))\n    return fake_feature\n\nsuperdupermodel = ObjectModel(identifier="fake_feature", object=calc_fake_feature)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        # key of input_data\n        key=key,\n        identifier="features"\n    )\n)        \n'})})})]}),"\n",(0,r.jsx)(l.A,{filename:"compute_features.md"})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);const s=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=t,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var o=n(4848);const a=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,a]=(0,r.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,o.jsx)("button",{style:n?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>s(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(870);const s={tabItem:"tabItem_Ymn6"};var o=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),s=n(870),o=n(4245),a=n(6347),l=n(6494),i=n(2814),u=n(5167),c=n(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:n,groupId:s}),[b,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=u??b;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(_,{...e,...t})]})}function j(e){const t=(0,h.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);