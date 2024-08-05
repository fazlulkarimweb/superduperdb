"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3994],{1936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=r(4848),s=r(8453);const d={},i=void 0,l={id:"api/ext/vllm/model",title:"model",description:"superduper.ext.vllm.model",source:"@site/content/api/ext/vllm/model.md",sourceDirName:"api/ext/vllm",slug:"/api/ext/vllm/model",permalink:"/docs/api/ext/vllm/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/api/ext/vllm/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"utils",permalink:"/docs/api/ext/utils"},next:{title:"job",permalink:"/docs/api/jobs/job"}},c={},a=[{value:"<code>VllmAPI</code>",id:"vllmapi",level:2},{value:"<code>VllmModel</code>",id:"vllmmodel",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"superduper.ext.vllm.model"})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/vllm/model.py",children:"Source code"})}),"\n",(0,n.jsx)(t.h2,{id:"vllmapi",children:(0,n.jsx)(t.code,{children:"VllmAPI"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"VllmAPI(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     api_url: str = '',\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     prompt: str = '{input}',\n     prompt_func: Optional[Callable] = None,\n     max_batch_size: Optional[int] = 4) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identifier"}),(0,n.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db"}),(0,n.jsx)(t.td,{children:"Datalayer instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uuid"}),(0,n.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"artifacts"}),(0,n.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,n.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"signature"}),(0,n.jsx)(t.td,{children:"Model signature."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"datatype"}),(0,n.jsx)(t.td,{children:"DataType instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_schema"}),(0,n.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"flatten"}),(0,n.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_update_kwargs"}),(0,n.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"predict_kwargs"}),(0,n.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute_kwargs"}),(0,n.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"validation"}),(0,n.jsxs)(t.td,{children:["The validation ",(0,n.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metric_values"}),(0,n.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prompt"}),(0,n.jsx)(t.td,{children:"The template to use for the prompt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prompt_func"}),(0,n.jsx)(t.td,{children:"The function to use for the prompt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_batch_size"}),(0,n.jsx)(t.td,{children:"The maximum batch size to use for batch generation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"api_url"}),(0,n.jsx)(t.td,{children:"The URL for the API."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Wrapper for requesting the vLLM API service."}),"\n",(0,n.jsxs)(t.p,{children:["API Server format, started by ",(0,n.jsx)(t.code,{children:"vllm.entrypoints.api_server"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"vllmmodel",children:(0,n.jsx)(t.code,{children:"VllmModel"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"VllmModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     prompt: str = '{input}',\n     prompt_func: Optional[Callable] = None,\n     max_batch_size: Optional[int] = 4,\n     model_name: str = '',\n     tensor_parallel_size: int = 1,\n     trust_remote_code: bool = True,\n     vllm_kwargs: dict = None,\n     on_ray: bool = False,\n     ray_address: Optional[str] = None,\n     ray_config: dict = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identifier"}),(0,n.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db"}),(0,n.jsx)(t.td,{children:"Datalayer instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uuid"}),(0,n.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"artifacts"}),(0,n.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,n.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"signature"}),(0,n.jsx)(t.td,{children:"Model signature."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"datatype"}),(0,n.jsx)(t.td,{children:"DataType instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_schema"}),(0,n.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"flatten"}),(0,n.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_update_kwargs"}),(0,n.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"predict_kwargs"}),(0,n.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute_kwargs"}),(0,n.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"validation"}),(0,n.jsxs)(t.td,{children:["The validation ",(0,n.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metric_values"}),(0,n.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prompt"}),(0,n.jsx)(t.td,{children:"The template to use for the prompt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prompt_func"}),(0,n.jsx)(t.td,{children:"The function to use for the prompt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_batch_size"}),(0,n.jsx)(t.td,{children:"The maximum batch size to use for batch generation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_name"}),(0,n.jsx)(t.td,{children:"The name of the model to use."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tensor_parallel_size"}),(0,n.jsx)(t.td,{children:"The number of tensor parallelism."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trust_remote_code"}),(0,n.jsx)(t.td,{children:"Whether to trust remote code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vllm_kwargs"}),(0,n.jsx)(t.td,{children:"Additional arguments to pass to the VLLM"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"on_ray"}),(0,n.jsx)(t.td,{children:"Whether to use Ray for parallelism."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ray_address"}),(0,n.jsx)(t.td,{children:"The address of the Ray cluster."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ray_config"}),(0,n.jsx)(t.td,{children:"The configuration for Ray."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Load a large language model from VLLM."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);