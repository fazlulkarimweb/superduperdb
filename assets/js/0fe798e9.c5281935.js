"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7200],{6991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var r=t(4848),a=t(8453),s=t(9489),o=t(7227);const u={sidebar_label:"Apply a chunker for search"},l="Apply a chunker for search",i={id:"docs/reusable_snippets/apply_a_chunker_for_search",title:"apply_a_chunker_for_search",description:"Note that applying a chunker is not mandatory for search.",source:"@site/content/docs/reusable_snippets/apply_a_chunker_for_search.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/apply_a_chunker_for_search",permalink:"/docs/docs/reusable_snippets/apply_a_chunker_for_search",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/apply_a_chunker_for_search.md",tags:[],version:"current",frontMatter:{sidebar_label:"Apply a chunker for search"}},c={},d=[];function p(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"apply-a-chunker-for-search",children:"Apply a chunker for search"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Note that applying a chunker is ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"not"})})," mandatory for search.\nIf your data is already chunked (e.g. short text snippets or audio) or if you\nare searching through something like images, which can't be chunked, then this\nwon't be necessary."]})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import objectmodel\n\nCHUNK_SIZE = 200\n\n@objectmodel(flatten=True, model_update_kwargs={'document_embedded': False}, datatype=chunked_model_datatype)\ndef chunker(text):\n    text = text.split()\n    chunks = [' '.join(text[i:i + CHUNK_SIZE]) for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})}),(0,r.jsx)(o.A,{value:"PDF",label:"PDF",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!pip install -q \"unstructured[pdf]\"\nfrom superduperdb import objectmodel\nfrom unstructured.partition.pdf import partition_pdf\nimport PyPDF2\n\nCHUNK_SIZE = 500\n\n@objectmodel(flatten=True, model_update_kwargs={'document_embedded': False}, datatype=chunked_model_datatype)\ndef chunker(pdf_file):\n    elements = partition_pdf(pdf_file)\n    text = '\\n'.join([e.text for e in elements])\n    chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})}),(0,r.jsx)(o.A,{value:"Video",label:"Video",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!pip install opencv-python\nimport cv2\nimport tqdm\nfrom PIL import Image\nfrom superduperdb.ext.pillow import pil_image\nfrom superduperdb import objectmodel, Schema\n\n\n@objectmodel(\n    flatten=True,\n    model_update_kwargs={'document_embedded': False},\n    output_schema=Schema(identifier='output-schema', fields={'image': pil_image}),\n)\ndef chunker(video_file):\n    # Set the sampling frequency for frames\n    sample_freq = 10\n    \n    # Open the video file using OpenCV\n    cap = cv2.VideoCapture(video_file)\n    \n    # Initialize variables\n    frame_count = 0\n    fps = cap.get(cv2.CAP_PROP_FPS)\n    extracted_frames = []\n    progress = tqdm.tqdm()\n\n    # Iterate through video frames\n    while True:\n        ret, frame = cap.read()\n        if not ret:\n            break\n        \n        # Get the current timestamp based on frame count and FPS\n        current_timestamp = frame_count // fps\n        \n        # Sample frames based on the specified frequency\n        if frame_count % sample_freq == 0:\n            extracted_frames.append({\n                'image': Image.fromarray(frame[:,:,::-1]),  # Convert BGR to RGB\n                'current_timestamp': current_timestamp,\n            })\n        frame_count += 1\n        progress.update(1)\n    \n    # Release resources\n    cap.release()\n    cv2.destroyAllWindows()\n    \n    # Return the list of extracted frames\n    return extracted_frames        \n"})})}),(0,r.jsx)(o.A,{value:"Audio",label:"Audio",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import objectmodel, Schema\n\nCHUNK_SIZE = 10  # in seconds\n\n@objectmodel(\n    flatten=True,\n    model_update_kwargs={'document_embedded': False},\n    output_schema=Schema(identifier='output-schema', fields={'audio': datatype}),\n)\ndef chunker(audio):\n    chunks = []\n    for i in range(0, len(audio), CHUNK_SIZE):\n        chunks.append(audio[1][i: i + CHUNK_SIZE])\n    return [(audio[0], chunk) for chunk in chunks]        \n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Now we apply this chunker to the data by wrapping the chunker in ",(0,r.jsx)(n.code,{children:"Listener"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener\n\nupstream_listener = Listener(\n    model=chunker,\n    select=select,\n    key='x',\n)\n\ndb.apply(upstream_listener)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(870);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(870),s=t(4245),o=t(6347),u=t(6494),l=t(2814),i=t(5167),c=t(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[i,d]=h({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),_=(()=>{const e=i??f;return m({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{_&&l(_)}),[_]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(1062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=u[t].value;a!==r&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",_.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function k(e){const n=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);