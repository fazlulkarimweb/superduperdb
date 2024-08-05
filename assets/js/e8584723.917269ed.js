"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3177],{3663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var n=r(4848),s=r(8453);const d={},c=void 0,i={id:"api/base/config",title:"config",description:"superduper.base.config",source:"@site/content/api/base/config.md",sourceDirName:"api/base",slug:"/api/base/config",permalink:"/docs/api/base/config",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/api/base/config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"code",permalink:"/docs/api/base/code"},next:{title:"config_dicts",permalink:"/docs/api/base/config_dicts"}},l={},o=[{value:"<code>BaseConfig</code>",id:"baseconfig",level:2},{value:"<code>CDCConfig</code>",id:"cdcconfig",level:2},{value:"<code>CDCStrategy</code>",id:"cdcstrategy",level:2},{value:"<code>Cluster</code>",id:"cluster",level:2},{value:"<code>Compute</code>",id:"compute",level:2},{value:"<code>Config</code>",id:"config",level:2},{value:"<code>Downloads</code>",id:"downloads",level:2},{value:"<code>LogBasedStrategy</code>",id:"logbasedstrategy",level:2},{value:"<code>PollingStrategy</code>",id:"pollingstrategy",level:2},{value:"<code>Rest</code>",id:"rest",level:2},{value:"<code>Retry</code>",id:"retry",level:2},{value:"<code>VectorSearch</code>",id:"vectorsearch",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"superduper.base.config"})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/base/config.py",children:"Source code"})}),"\n",(0,n.jsx)(t.h2,{id:"baseconfig",children:(0,n.jsx)(t.code,{children:"BaseConfig"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"BaseConfig(self) -> None\n"})}),"\n",(0,n.jsx)(t.p,{children:"A base class for configuration dataclasses."}),"\n",(0,n.jsx)(t.p,{children:"This class allows for easy updating of configuration dataclasses\nwith a dictionary of parameters."}),"\n",(0,n.jsx)(t.h2,{id:"cdcconfig",children:(0,n.jsx)(t.code,{children:"CDCConfig"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CDCConfig(self,\n     uri: Optional[str] = None,\n     strategy: Union[superduper.base.config.PollingStrategy,\n     superduper.base.config.LogBasedStrategy,\n     NoneType] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uri"}),(0,n.jsx)(t.td,{children:"The URI for the CDC service"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"strategy"}),(0,n.jsx)(t.td,{children:"The strategy to use for CDC"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes the configuration for change data capture."}),"\n",(0,n.jsx)(t.h2,{id:"cdcstrategy",children:(0,n.jsx)(t.code,{children:"CDCStrategy"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CDCStrategy(self,\n     type: str) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"The type of CDC strategy"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Base CDC strategy dataclass."}),"\n",(0,n.jsx)(t.h2,{id:"cluster",children:(0,n.jsx)(t.code,{children:"Cluster"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Cluster(self,\n     compute: superduper.base.config.Compute = None,\n     vector_search: superduper.base.config.VectorSearch = None,\n     rest: superduper.base.config.Rest = None,\n     cdc: superduper.base.config.CDCConfig = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute"}),(0,n.jsxs)(t.td,{children:['The URI for compute - None: run all jobs in local mode i.e. simple function call - "ray://host',":port",'": Run all jobs on a remote ray cluster']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vector_search"}),(0,n.jsxs)(t.td,{children:["The URI for the vector search service - None: Run vector search on local - ",(0,n.jsx)(t.code,{children:'f"http://{host}:{port}"'}),": Connect a remote vector search service"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rest"}),(0,n.jsxs)(t.td,{children:["The URI for the REST service - ",(0,n.jsx)(t.code,{children:'f"http://{host}:{port}"'}),": Connect a remote vector search service"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cdc"}),(0,n.jsxs)(t.td,{children:['The URI for the change data capture service (if "None" then no cdc assumed) None: Run cdc on local as a thread. - ',(0,n.jsx)(t.code,{children:'f"{http://{host}:{port}"'}),": Connect a remote cdc service"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes a connection to distributed work via Ray."}),"\n",(0,n.jsx)(t.h2,{id:"compute",children:(0,n.jsx)(t.code,{children:"Compute"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Compute(self,\n     uri: Optional[str] = None,\n     compute_kwargs: Dict = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uri"}),(0,n.jsx)(t.td,{children:"The URI for the compute service"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute_kwargs"}),(0,n.jsx)(t.td,{children:"The keyword arguments to pass to the compute service"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes the configuration for distributed computing."}),"\n",(0,n.jsx)(t.h2,{id:"config",children:(0,n.jsx)(t.code,{children:"Config"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Config(self,\n     envs: dataclasses.InitVar[typing.Optional[typing.Dict[str,\n     str]]] = None,\n     data_backend: str = 'mongodb://localhost:27017/test_db',\n     lance_home: str = '.superduper/vector_indices',\n     artifact_store: Optional[str] = None,\n     metadata_store: Optional[str] = None,\n     cluster: superduper.base.config.Cluster = None,\n     retries: superduper.base.config.Retry = None,\n     downloads: superduper.base.config.Downloads = None,\n     fold_probability: float = 0.05,\n     log_level: superduper.base.config.LogLevel = <LogLevel.INFO: 'INFO'>,\n     logging_type: superduper.base.config.LogType = <LogType.SYSTEM: 'SYSTEM'>,\n     bytes_encoding: superduper.base.config.BytesEncoding = <BytesEncoding.BYTES: 'Bytes'>,\n     auto_schema: bool = True) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"envs"}),(0,n.jsx)(t.td,{children:"The envs datas"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data_backend"}),(0,n.jsx)(t.td,{children:"The URI for the data backend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lance_home"}),(0,n.jsx)(t.td,{children:"The home directory for the Lance vector indices, Default: .superduper/vector_indices"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"artifact_store"}),(0,n.jsx)(t.td,{children:"The URI for the artifact store"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata_store"}),(0,n.jsx)(t.td,{children:"The URI for the metadata store"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cluster"}),(0,n.jsx)(t.td,{children:"Settings distributed computing and change data capture"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"retries"}),(0,n.jsx)(t.td,{children:"Settings for retrying failed operations"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"downloads"}),(0,n.jsx)(t.td,{children:"Settings for downloading files"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fold_probability"}),(0,n.jsx)(t.td,{children:"The probability of validation fold"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_level"}),(0,n.jsx)(t.td,{children:"The severity level of the logs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"logging_type"}),(0,n.jsx)(t.td,{children:"The type of logging to use"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bytes_encoding"}),(0,n.jsx)(t.td,{children:"The encoding of bytes in the data backend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auto_schema"}),(0,n.jsx)(t.td,{children:"Whether to automatically create the schema. If True, the schema will be created if it does not exist."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The data class containing all configurable superduper values."}),"\n",(0,n.jsx)(t.h2,{id:"downloads",children:(0,n.jsx)(t.code,{children:"Downloads"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Downloads(self,\n     folder: Optional[str] = None,\n     n_workers: int = 0,\n     headers: Dict = None,\n     timeout: Optional[int] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"folder"}),(0,n.jsx)(t.td,{children:"The folder to download files to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_workers"}),(0,n.jsx)(t.td,{children:"The number of workers to use for downloading"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headers"}),(0,n.jsx)(t.td,{children:"The headers to use for downloading"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timeout"}),(0,n.jsx)(t.td,{children:"The timeout for downloading"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes the configuration for downloading files."}),"\n",(0,n.jsx)(t.h2,{id:"logbasedstrategy",children:(0,n.jsx)(t.code,{children:"LogBasedStrategy"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"LogBasedStrategy(self,\n     type: str = 'logbased',\n     resume_token: Optional[Dict[str,\n     str]] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"resume_token"}),(0,n.jsx)(t.td,{children:"The resume token to use for log-based CDC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"The type of CDC strategy"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes a log-based strategy for change data capture."}),"\n",(0,n.jsx)(t.h2,{id:"pollingstrategy",children:(0,n.jsx)(t.code,{children:"PollingStrategy"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"PollingStrategy(self,\n     type: 'str' = 'incremental',\n     auto_increment_field: Optional[str] = None,\n     frequency: float = 3600) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auto_increment_field"}),(0,n.jsx)(t.td,{children:"The field to use for auto-incrementing"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"The frequency to poll for changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"The type of CDC strategy"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes a polling strategy for change data capture."}),"\n",(0,n.jsx)(t.h2,{id:"rest",children:(0,n.jsx)(t.code,{children:"Rest"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Rest(self,\n     uri: Optional[str] = None,\n     config: Optional[str] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uri"}),(0,n.jsx)(t.td,{children:"The URI for the REST service"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:"The path to the config yaml file for the REST service"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes the configuration for the REST service."}),"\n",(0,n.jsx)(t.h2,{id:"retry",children:(0,n.jsx)(t.code,{children:"Retry"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Retry(self,\n     stop_after_attempt: int = 2,\n     wait_max: float = 10.0,\n     wait_min: float = 4.0,\n     wait_multiplier: float = 1.0) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stop_after_attempt"}),(0,n.jsx)(t.td,{children:"The number of attempts to make"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wait_max"}),(0,n.jsx)(t.td,{children:"The maximum time to wait between attempts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wait_min"}),(0,n.jsx)(t.td,{children:"The minimum time to wait between attempts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wait_multiplier"}),(0,n.jsx)(t.td,{children:"The multiplier for the wait time between attempts"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Describes how to retry using the ",(0,n.jsx)(t.code,{children:"tenacity"})," library."]}),"\n",(0,n.jsx)(t.h2,{id:"vectorsearch",children:(0,n.jsx)(t.code,{children:"VectorSearch"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"VectorSearch(self,\n     uri: Optional[str] = None,\n     type: str = 'in_memory',\n     backfill_batch_size: int = 100) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uri"}),(0,n.jsx)(t.td,{children:"The URI for the vector search service"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"The type of vector search service"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"backfill_batch_size"}),(0,n.jsx)(t.td,{children:"The size of the backfill batch"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Describes the configuration for vector search."})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(6540);const s={},d=n.createContext(s);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);