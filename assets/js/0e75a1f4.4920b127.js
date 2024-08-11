"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6134],{6856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=n(4848),o=n(8453),a=(n(9489),n(7227),n(94));const l={sidebar_label:"Setup tables or collections",filename:"setup_tables_or_collections.md"},s="Setup tables or collections",u={id:"reusable_snippets/setup_tables_or_collections",title:"setup_tables_or_collections",description:"",source:"@site/content/reusable_snippets/setup_tables_or_collections.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/setup_tables_or_collections",permalink:"/docs/reusable_snippets/setup_tables_or_collections",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/reusable_snippets/setup_tables_or_collections.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup tables or collections",filename:"setup_tables_or_collections.md"}},c={},i=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"setup-tables-or-collections",children:"Setup tables or collections"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper.components.table import Table\nfrom superduper import Schema\n\nschema = Schema(identifier="schema", fields={"x": datatype})\ntable_or_collection = Table("documents", schema=schema)\ndb.apply(table_or_collection)\n'})}),"\n",(0,r.jsx)(a.A,{filename:"setup_tables_or_collections.md"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},94:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540);const o=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=t,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var a=n(4848);const l=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,l]=(0,r.useState)(!1),s={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,a.jsx)("button",{style:n?{...s,backgroundColor:"#B0E000"}:s,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>o(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(870);const o={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(6540),o=n(870),a=n(4245),l=n(6347),s=n(6494),u=n(2814),c=n(5167),i=n(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:o}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,i.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),v=(()=>{const e=c??f;return b({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var h=n(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),o=s[n].value;o!==r&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:i,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=f(e);return(0,_.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,_.jsx)(g,{...e,...t}),(0,_.jsx)(y,{...e,...t})]})}function x(e){const t=(0,h.A)();return(0,_.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(6540);const o={},a=r.createContext(o);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);