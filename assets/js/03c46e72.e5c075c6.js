"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6817],{4655:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=r(4848),o=r(8453),a=r(9489),s=r(7227);const i={sidebar_label:"Build image embedding model"},l="Build image embedding model",d={id:"docs/reusable_snippets/build_image_embedding_model",title:"build_image_embedding_model",description:"Construct a neural network architecture to project high-dimensional image data into a lower-dimensional, dense vector representation",source:"@site/content/docs/reusable_snippets/build_image_embedding_model.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/build_image_embedding_model",permalink:"/docs/docs/reusable_snippets/build_image_embedding_model",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/build_image_embedding_model.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build image embedding model"},sidebar:"tutorialSidebar",previous:{title:"Build text embedding model",permalink:"/docs/docs/reusable_snippets/build_text_embedding_model"},next:{title:"Build multimodal embedding models",permalink:"/docs/docs/reusable_snippets/build_multimodal_embedding_models"}},c={},u=[];function m(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"build-image-embedding-model",children:"Build image embedding model"}),"\n",(0,t.jsx)(n.p,{children:"Construct a neural network architecture to project high-dimensional image data into a lower-dimensional, dense vector representation\n(embedding) that preserves relevant semantic and visual information within a learned latent space."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!wget https://raw.githubusercontent.com/openai/CLIP/main/CLIP.png\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'image_path = "CLIP.png"\n'})}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(s.A,{value:"TorchVision",label:"TorchVision",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\nimport torch\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduperdb.ext.torch import TorchModel\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image):\n        # Preprocess the image\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nmodel = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess)        \n"})})}),(0,t.jsx)(s.A,{value:"CLIP-multimodal",label:"CLIP-multimodal",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import torch\nimport clip\nfrom torchvision import transforms\nfrom superduperdb.ext.torch import TorchModel\n\nclass CLIPVisionEmbedding:\n    def __init__(self):\n        # Load the CLIP model\n        self.device = "cuda" if torch.cuda.is_available() else "cpu"\n        self.model, self.preprocess = clip.load("RN50", device=self.device)\n        \n    def preprocess(self, image):\n        # Load and preprocess the image\n        image = self.preprocess(image).unsqueeze(0).to(self.device)\n        return image\n        \nmodel = CLIPVisionEmbedding()\nsuperdupermodel = TorchModel(identifier=\'my-vision-model-clip\', object=model.model, preprocess=model.preprocess, forward_method=\'encode_image\')        \n'})})}),(0,t.jsx)(s.A,{value:"HuggingFace (ViT)",label:"HuggingFace (ViT)",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import torch\nfrom transformers import AutoImageProcessor, AutoModel, AutoFeatureExtractor\nimport torchvision.transforms as T\nfrom superduperdb.ext.torch import TorchModel\n\n\nclass HuggingFaceEmbeddings(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n        model_ckpt = "nateraw/vit-base-beans"\n        processor = AutoImageProcessor.from_pretrained(model_ckpt)\n        self.extractor = AutoFeatureExtractor.from_pretrained(model_ckpt)\n        self.model = AutoModel.from_pretrained(model_ckpt)\n\n    def forward(self, x):\n        return self.model(pixel_values=x).last_hidden_state[:, 0].cpu()\n        \n        \nclass Preprocessor:\n    def __init__(self, extractor):\n        self.device = \'cpu\'\n        # Data transformation chain.\n        self.transformation_chain = T.Compose(\n            [\n                # We first resize the input image to 256x256 and then we take center crop.\n                T.Resize(int((256 / 224) * extractor.size["height"])),\n                T.CenterCrop(extractor.size["height"]),\n                T.ToTensor(),\n                T.Normalize(mean=extractor.image_mean, std=extractor.image_std),\n            ]\n        )\n    def __call__(self, image):\n        return self.transformation_chain(image).to(self.device)\n\n    \nmodel = HuggingFaceEmbeddings()\nsuperdupermodel = TorchModel(identifier=\'my-vision-model-huggingface\', object=model, preprocess=Preprocessor(model.extractor))        \n'})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model.predict_one(Image.open(image_path))\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(870);const o={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),o=r(870),a=r(4245),s=r(6347),i=r(6494),l=r(2814),d=r(5167),c=r(1269);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,a=m(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,u]=h({queryString:r,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),g=(()=>{const e=d??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),o=i[r].value;o!==t&&(d(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function T(e){const n=f(e);return(0,_.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,_.jsx)(v,{...e,...n}),(0,_.jsx)(x,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,_.jsx)(T,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);