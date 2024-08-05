"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[648],{4407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var d=n(4848),r=n(8453);const s={},i=void 0,a={id:"api/ext/llamacpp/model",title:"model",description:"superduper.ext.llamacpp.model",source:"@site/content/api/ext/llamacpp/model.md",sourceDirName:"api/ext/llamacpp",slug:"/api/ext/llamacpp/model",permalink:"/docs/api/ext/llamacpp/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/api/ext/llamacpp/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/ext/jina/model"},next:{title:"encoder",permalink:"/docs/api/ext/numpy/encoder"}},c={},l=[{value:"<code>download_uri</code>",id:"download_uri",level:2},{value:"<code>LlamaCpp</code>",id:"llamacpp",level:2},{value:"<code>LlamaCppEmbedding</code>",id:"llamacppembedding",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:"superduper.ext.llamacpp.model"})})}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/llamacpp/model.py",children:"Source code"})}),"\n",(0,d.jsx)(t.h2,{id:"download_uri",children:(0,d.jsx)(t.code,{children:"download_uri"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"download_uri(uri,\n     save_path)\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uri"}),(0,d.jsx)(t.td,{children:"URI to download"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"save_path"}),(0,d.jsx)(t.td,{children:"place to save"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Download file."}),"\n",(0,d.jsx)(t.h2,{id:"llamacpp",children:(0,d.jsx)(t.code,{children:"LlamaCpp"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"LlamaCpp(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     prompt: str = '{input}',\n     prompt_func: Optional[Callable] = None,\n     max_batch_size: Optional[int] = 4,\n     model_name_or_path: str = 'facebook/opt-125m',\n     model_kwargs: Dict = None,\n     download_dir: str = '.llama_cpp') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prompt"}),(0,d.jsx)(t.td,{children:"The template to use for the prompt."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prompt_func"}),(0,d.jsx)(t.td,{children:"The function to use for the prompt."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"The maximum batch size to use for batch generation."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_name_or_path"}),(0,d.jsx)(t.td,{children:"path or name of model"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_kwargs"}),(0,d.jsx)(t.td,{children:"dictionary of init-kwargs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"download_dir"}),(0,d.jsx)(t.td,{children:"local caching directory"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Llama.cpp connector."}),"\n",(0,d.jsx)(t.h2,{id:"llamacppembedding",children:(0,d.jsx)(t.code,{children:"LlamaCppEmbedding"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"LlamaCppEmbedding(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     prompt: str = '{input}',\n     prompt_func: Optional[Callable] = None,\n     max_batch_size: Optional[int] = 4,\n     model_name_or_path: str = 'facebook/opt-125m',\n     model_kwargs: Dict = None,\n     download_dir: str = '.llama_cpp') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prompt"}),(0,d.jsx)(t.td,{children:"The template to use for the prompt."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prompt_func"}),(0,d.jsx)(t.td,{children:"The function to use for the prompt."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"The maximum batch size to use for batch generation."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_name_or_path"}),(0,d.jsx)(t.td,{children:"path or name of model"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_kwargs"}),(0,d.jsx)(t.td,{children:"dictionary of init-kwargs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"download_dir"}),(0,d.jsx)(t.td,{children:"local caching directory"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Llama.cpp connector for embeddings."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var d=n(6540);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);