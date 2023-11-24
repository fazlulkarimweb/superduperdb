"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3554],{12353:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(85893),t=r(11151);const s={sidebar_position:1},i="Text",c={id:"use_cases/vector_search/plain_vector_search",title:"Text",description:"Vector-search with SuperDuperDB",source:"@site/content/use_cases/vector_search/plain_vector_search.md",sourceDirName:"use_cases/vector_search",slug:"/use_cases/vector_search/plain_vector_search",permalink:"/docs/use_cases/vector_search/plain_vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/vector_search/plain_vector_search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vector Search",permalink:"/docs/category/vector-search-1"},next:{title:"Image",permalink:"/docs/use_cases/vector_search/multimodal_image_search_clip"}},a={},d=[{value:"Vector-search with SuperDuperDB",id:"vector-search-with-superduperdb",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connect to datastore",id:"connect-to-datastore",level:2},{value:"Load Dataset",id:"load-dataset",level:2},{value:"Create Vectors",id:"create-vectors",level:2},{value:"Index Vectors",id:"index-vectors",level:2},{value:"Perform Vector Search",id:"perform-vector-search",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"text",children:"Text"}),"\n",(0,o.jsx)(n.h2,{id:"vector-search-with-superduperdb",children:"Vector-search with SuperDuperDB"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"This notebook provides a detailed guide on performing vector search using SuperDuperDB. Vector search is a powerful technique for searching and retrieving documents based on their similarity to a query vector. In this guide, we will demonstrate how to set up SuperDuperDB for vector search and use it to search a dataset of documents."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Before diving into the implementation, ensure that you have the necessary libraries installed by running the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"!pip install superduperdb\n!pip install ipython\n"})}),"\n",(0,o.jsx)(n.p,{children:"Additionally, ensure that you have set your openai API key as an environment variable. You can uncomment the following code and add your API key:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import os\n\n#os.environ['OPENAI_API_KEY'] = 'sk-...'\n\nif 'OPENAI_API_KEY' not in os.environ:\n    raise Exception('You need to set an OpenAI key as environment variable: \"export OPEN_API_KEY=sk-...\"')\n"})}),"\n",(0,o.jsx)(n.h2,{id:"connect-to-datastore",children:"Connect to datastore"}),"\n",(0,o.jsxs)(n.p,{children:["First, we need to establish a connection to a MongoDB datastore via SuperDuperDB. You can configure the ",(0,o.jsx)(n.code,{children:"MongoDB_URI"})," based on your specific setup.\nHere are some examples of MongoDB URIs:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For testing (default connection): ",(0,o.jsx)(n.code,{children:"mongomock://test"})]}),"\n",(0,o.jsxs)(n.li,{children:["Local MongoDB instance: ",(0,o.jsx)(n.code,{children:"mongodb://localhost:27017"})]}),"\n",(0,o.jsxs)(n.li,{children:["MongoDB with authentication: ",(0,o.jsx)(n.code,{children:"mongodb://superduper:superduper@mongodb:27017/documents"})]}),"\n",(0,o.jsxs)(n.li,{children:["MongoDB Atlas: ",(0,o.jsx)(n.code,{children:"mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\nfrom superduperdb.backends.mongodb import Collection\nimport os\n\nmongodb_uri = os.getenv(\"MONGODB_URI\",\"mongomock://test\")\ndb = superduper(mongodb_uri, artifact_store='filesystem://./data/')\n\ndoc_collection = Collection('documents')\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.metadata\n"})}),"\n",(0,o.jsx)(n.h2,{id:"load-dataset",children:"Load Dataset"}),"\n",(0,o.jsx)(n.p,{children:"We have prepared a dataset, which is the inline documentation of the pymongo API. Let's load this dataset:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/pymongo.json\n\nimport json\n\nwith open('pymongo.json') as f:\n    data = json.load(f)\n"})}),"\n",(0,o.jsx)(n.p,{children:"As usual, we insert the data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ndb.execute(doc_collection.insert_many([Document(r) for r in data]))\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(Collection('documents').find_one())\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-vectors",children:"Create Vectors"}),"\n",(0,o.jsxs)(n.p,{children:["In the remainder of the notebook, you can choose between using the ",(0,o.jsx)(n.code,{children:"openai"})," or ",(0,o.jsx)(n.code,{children:"sentence_transformers"})," libraries to perform vector search. After instantiating the model wrappers, the rest of the notebook remains identical."]}),"\n",(0,o.jsx)(n.p,{children:"For OpenAI vectors:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.openai.model import OpenAIEmbedding\n\nmodel = OpenAIEmbedding(model='text-embedding-ada-002')\n"})}),"\n",(0,o.jsx)(n.p,{children:"For Sentence-Transformers vectors, uncomment the following section:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"#import sentence_transformers\n#from superduperdb import Model, vector\n\n#model = Model(\n#    identifier='all-MiniLM-L6-v2', \n#    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n#    encoder=vector(shape=(384,)),\n#    predict_method='encode', # Specify the prediction method\n#    postprocess=lambda x: x.tolist(),  # Define postprocessing function\n#    batch_predict=True, # Generate predictions for a set of observations all at once \n#)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"index-vectors",children:"Index Vectors"}),"\n",(0,o.jsxs)(n.p,{children:["Now we can configure the Atlas vector-search index. This command saves and sets up a model to ",(0,o.jsx)(n.code,{children:"listen"})," to a particular subfield (or the whole document) for new text, converts it on the fly to vectors, and then indexes these vectors using Atlas vector-search."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener, VectorIndex\n\ndb.add(\n    VectorIndex(\n        identifier=f'pymongo-docs-{model.identifier}',\n        indexing_listener=Listener(\n            select=doc_collection.find(),\n            key='value',\n            model=model,\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n    )\n)\n\ndb.show('vector_index')\n"})}),"\n",(0,o.jsx)(n.h2,{id:"perform-vector-search",children:"Perform Vector Search"}),"\n",(0,o.jsxs)(n.p,{children:["Now that the index is set up, we can use it in a query. SuperDuperDB provides some syntactic sugar for the ",(0,o.jsx)(n.code,{children:"aggregate"})," search pipelines, which can be helpful. It also handles all the conversion of inputs to vectors under the hood."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\nfrom IPython.display import *\n\n# Define the search parameters\nsearch_term = 'Query the database'\nnum_results = 5\n\n# Execute the query\nresult = db.execute(doc_collection\n        .like(Document({'value': search_term}), vector_index=f'pymongo-docs-{model.identifier}', n=num_results)\n        .find()\n)\n\n# Display a horizontal line\ndisplay(Markdown('---'))\n\n# Iterate through the query results and display them\nfor r in result:\n    display(Markdown(f'### `{r[\"parent\"] + \".\" if r[\"parent\"] else \"\"}{r[\"res\"]}`'))\n    display(Markdown(r['value']))\n    display(Markdown('---'))\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var o=r(67294);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);