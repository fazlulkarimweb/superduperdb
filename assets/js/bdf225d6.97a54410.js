"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[808],{2617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(4848),a=n(8453),s=n(9489),o=n(7227),l=n(94);const c={sidebar_label:"Multimodal vector search - Video",filename:"multimodal_vector_search_video.md"},d="Multimodal vector search - Video",i={id:"use_cases/multimodal_vector_search_video",title:"multimodal_vector_search_video",description:"Configure your production system",source:"@site/content/use_cases/multimodal_vector_search_video.md",sourceDirName:"use_cases",slug:"/use_cases/multimodal_vector_search_video",permalink:"/docs/use_cases/multimodal_vector_search_video",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/use_cases/multimodal_vector_search_video.md",tags:[],version:"current",frontMatter:{sidebar_label:"Multimodal vector search - Video",filename:"multimodal_vector_search_video.md"},sidebar:"tutorialSidebar",previous:{title:"Multimodal vector search - Image",permalink:"/docs/use_cases/multimodal_vector_search_image"},next:{title:"Retrieval augmented generation",permalink:"/docs/use_cases/retrieval_augmented_generation"}},u={},p=[{value:"Configure your production system",id:"configure-your-production-system",level:2},{value:"Start your cluster",id:"start-your-cluster",level:2},{value:"Connect to superduper",id:"connect-to-superduper",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Create datatype",id:"create-datatype",level:2},{value:"Setup tables or collections",id:"setup-tables-or-collections",level:2},{value:"Apply a chunker for search",id:"apply-a-chunker-for-search",level:2},{value:"Build multimodal embedding models",id:"build-multimodal-embedding-models",level:2},{value:"Create vector-index",id:"create-vector-index",level:2},{value:"Perform a vector search",id:"perform-a-vector-search",level:2},{value:"Visualize Results",id:"visualize-results",level:2},{value:"Check the system stays updated",id:"check-the-system-stays-updated",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"multimodal-vector-search---video",children:"Multimodal vector search - Video"}),"\n",(0,r.jsx)(t.h2,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:'If you would like to use the production features\nof superduper, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with superduper quickly.'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduper', exist_ok=True)\nos.environ['SUPERDUPER_CONFIG'] = '.superduper/config.yaml'\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,r.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"with open(os.environ['SUPERDUPER_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"Starting a superduper cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,r.jsx)(t.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!python -m superduper local-cluster up        \n"})})}),(0,r.jsx)(o.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!make build_sandbox\n!make testenv_init        \n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"connect-to-superduper",children:"Connect to superduper"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:'Note that this is only relevant if you are running superduper in development mode.\nOtherwise refer to "Configuring your production system".'})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongodb://localhost:27017/documents')        \n"})})}),(0,r.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\ndb = superduper('sqlite://my_db.db')        \n"})})}),(0,r.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'superduper'\npassword = 'superduper'\nport = 3306\nhost = 'localhost'\ndatabase = 'test_db'\n\ndb = superduper(f\"mysql://{user}:{password}@{host}:{port}/{database}\")        \n"})})}),(0,r.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'sa'\npassword = 'Superduper#1'\nport = 1433\nhost = 'localhost'\n\ndb = superduper(f\"mssql://{user}:{password}@{host}:{port}\")        \n"})})}),(0,r.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!pip install psycopg2\nfrom superduper import superduper\n\nuser = 'postgres'\npassword = 'postgres'\nport = 5432\nhost = 'localhost'\ndatabase = 'test_db'\ndb_uri = f\"postgres://{user}:{password}@{host}:{port}/{database}\"\n\ndb = superduper(db_uri, metadata_store=db_uri.replace('postgres://', 'postgresql://'))        \n"})})}),(0,r.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper import superduper\n\nuser = "superduperuser"\npassword = "superduperpassword"\naccount = "XXXX-XXXX"  # ORGANIZATIONID-USERID\ndatabase = "FREE_COMPANY_DATASET/PUBLIC"\n\nsnowflake_uri = f"snowflake://{user}:{password}@{account}/{database}"\n\ndb = superduper(\n    snowflake_uri, \n    metadata_store=\'sqlite:///your_database_name.db\',\n)        \n'})})}),(0,r.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'default'\npassword = ''\nport = 8123\nhost = 'localhost'\n\ndb = superduper(f\"clickhouse://{user}:{password}@{host}:{port}\", metadata_store=f'mongomock://meta')        \n"})})}),(0,r.jsx)(o.A,{value:"DuckDB",label:"DuckDB",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('duckdb://mydb.duckdb')        \n"})})}),(0,r.jsx)(o.A,{value:"Pandas",label:"Pandas",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper(['my.csv'], metadata_store=f'mongomock://meta')        \n"})})}),(0,r.jsx)(o.A,{value:"MongoMock",label:"MongoMock",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock:///test_db')        \n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"Video",label:"Video",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/videos.zip && unzip videos.zip\nimport os\n\ndata = [f'videos/{x}' for x in os.listdir('./videos')]\nsample_datapoint = data[-1]\n\nfrom superduper.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"datas = [{'x': d} for d in data[:3]]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-datatype",children:"Create datatype"}),"\n",(0,r.jsxs)(t.p,{children:["SuperduperDB supports automatic data conversion, so users don\u2019t need to worry about the compatibility of different data formats (",(0,r.jsx)(t.code,{children:"PIL.Image"}),", ",(0,r.jsx)(t.code,{children:"numpy.array"}),", ",(0,r.jsx)(t.code,{children:"pandas.DataFrame"}),", etc.) with the database."]}),"\n",(0,r.jsx)(t.p,{children:"It also supports custom data conversion methods for transforming data, such as defining the following Datatype."}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"Video",label:"Video",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import DataType\n\n# Create an instance of the Encoder with the identifier 'video_on_file' and load_hybrid set to False\ndatatype = DataType(\n    identifier='video_on_file',\n    encodable='file',\n)        \n"})})})}),"\n",(0,r.jsx)(t.h2,{id:"setup-tables-or-collections",children:"Setup tables or collections"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper.components.table import Table\nfrom superduper import Schema\n\nschema = Schema(identifier="schema", fields={"x": datatype})\ntable_or_collection = Table("documents", schema=schema)\ndb.apply(table_or_collection)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Inserting data, all fields will be matched with the schema for data conversion."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"db['documents'].insert(datas).execute()\nselect = db['documents'].select()\n"})}),"\n",(0,r.jsx)(t.h2,{id:"apply-a-chunker-for-search",children:"Apply a chunker for search"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Note that applying a chunker is ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"not"})})," mandatory for search.\nIf your data is already chunked (e.g. short text snippets or audio) or if you\nare searching through something like images, which can't be chunked, then this\nwon't be necessary."]})}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"Video",label:"Video",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!pip install opencv-python\nimport cv2\nimport tqdm\nfrom PIL import Image\nfrom superduper.ext.pillow import pil_image\nfrom superduper import model, Schema\n\n\n@model(\n    flatten=True,\n    model_update_kwargs={'document_embedded': False},\n)\ndef chunker(video_file):\n    # Set the sampling frequency for frames\n    sample_freq = 10\n    \n    # Open the video file using OpenCV\n    cap = cv2.VideoCapture(video_file)\n    \n    # Initialize variables\n    frame_count = 0\n    fps = cap.get(cv2.CAP_PROP_FPS)\n    extracted_frames = []\n    progress = tqdm.tqdm()\n\n    # Iterate through video frames\n    while True:\n        ret, frame = cap.read()\n        if not ret:\n            break\n        \n        # Get the current timestamp based on frame count and FPS\n        current_timestamp = frame_count // fps\n        \n        # Sample frames based on the specified frequency\n        if frame_count % sample_freq == 0:\n            extracted_frames.append({\n                'image': Image.fromarray(frame[:,:,::-1]),  # Convert BGR to RGB\n                'current_timestamp': current_timestamp,\n            })\n        frame_count += 1\n        progress.update(1)\n    \n    # Release resources\n    cap.release()\n    cv2.destroyAllWindows()\n    \n    # Return the list of extracted frames\n    return extracted_frames        \n"})})})}),"\n",(0,r.jsxs)(t.p,{children:["Now we apply this chunker to the data by wrapping the chunker in ",(0,r.jsx)(t.code,{children:"Listener"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import Listener\n\nupstream_listener = Listener(\n    model=chunker,\n    select=select,\n    key='x',\n    uuid=\"chunk\",\n)\n\ndb.apply(upstream_listener)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"build-multimodal-embedding-models",children:"Build multimodal embedding models"}),"\n",(0,r.jsx)(t.p,{children:"We define the output data type of a model as a vector for vector transformation."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper.components.vector_index import vector\noutput_datatpye = vector(shape=(1024,))        \n"})})}),(0,r.jsx)(o.A,{value:"SQL",label:"SQL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper.components.vector_index import sqlvector\noutput_datatpye = sqlvector(shape=(1024,))        \n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Then define two models, one for text embedding and one for image embedding."}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"Text-Image",label:"Text-Image",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!pip install git+https://github.com/openai/CLIP.git\nimport clip\nfrom superduper import vector\nfrom superduper.ext.torch import TorchModel\n\n# Load the CLIP model and obtain the preprocessing function\nmodel, preprocess = clip.load(\"ViT-B/32\", device='cpu')\n\n# Create a TorchModel for text encoding\ncompatible_model = TorchModel(\n    identifier='clip_text', # Unique identifier for the model\n    object=model, # CLIP model\n    preprocess=lambda x: clip.tokenize(x)[0],  # Model input preprocessing using CLIP \n    postprocess=lambda x: x.tolist(), # Convert the model output to a list\n    datatype=output_datatpye,  # Vector encoder with shape (1024,)\n    forward_method='encode_text', # Use the 'encode_text' method for forward pass \n)\n\n# Create a TorchModel for visual encoding\nmodel = TorchModel(\n    identifier='clip_image',  # Unique identifier for the model\n    object=model.visual,  # Visual part of the CLIP model    \n    preprocess=preprocess, # Visual preprocessing using CLIP\n    postprocess=lambda x: x.tolist(), # Convert the output to a list \n    datatype=output_datatpye, # Vector encoder with shape (1024,)\n)        \n"})})})}),"\n",(0,r.jsx)(t.p,{children:"Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"compatible_key = 'text' # we use text key for text embedding\nindexing_key = upstream_listener.outputs_key + '.image' # we use indexing_key for image embedding, use the image field of the result\nselect = upstream_listener.outputs_select\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-vector-index",children:"Create vector-index"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"vector_index_name = 'my-vector-index'\n"})}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"2-Modalities",label:"2-Modalities",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduper import VectorIndex, Listener\n\njobs, _ = db.add(\n    VectorIndex(\n        vector_index_name,\n        indexing_listener=Listener(\n            key=indexing_key,      # the `Document` key `model` should ingest to create embedding\n            select=select,       # a `Select` query telling which data to search over\n            model=embedding_model,         # a `_Predictor` how to convert data to embeddings\n        ),\n        compatible_listener=Listener(\n            key=compatible_key,      # the `Document` key `model` should ingest to create embedding\n            model=compatible_model,         # a `_Predictor` how to convert data to embeddings\n            active=False,\n            select=None,\n        )\n    )\n)        \n"})})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"query_table_or_collection = select.table_or_collection\n"})}),"\n",(0,r.jsx)(t.h2,{id:"perform-a-vector-search",children:"Perform a vector search"}),"\n",(0,r.jsx)(t.p,{children:"We can perform the vector searches using text description:"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper import Document\nitem = Document({compatible_key: "The moment of a soccer shot"})        \n'})})})}),"\n",(0,r.jsx)(t.p,{children:"Once we have this search target, we can execute a search as follows."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"select = query_table_or_collection.like(item, vector_index=vector_index_name, n=5).select()\nresults = list(db.execute(select))\n"})}),"\n",(0,r.jsx)(t.h2,{id:"visualize-results",children:"Visualize Results"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from IPython.display import display\nfor result in results:\n    display(Document(result.unpack())[indexing_key])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"check-the-system-stays-updated",children:"Check the system stays updated"}),"\n",(0,r.jsx)(t.p,{children:"You can add new data; once the data is added, all related models will perform calculations according to the underlying constructed model and listener, simultaneously updating the vector index to ensure that each query uses the latest data."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"new_datas = [{'x': data[-1]}]\nids = db['documents'].insert(new_datas).execute()\n"})}),"\n",(0,r.jsx)(l.A,{filename:"multimodal_vector_search_-_video.md"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);const a=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=t,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var s=n(4848);const o=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,o]=(0,r.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,s.jsx)("button",{style:n?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>a(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(870);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),a=n(870),s=n(4245),o=n(6347),l=n(6494),c=n(2814),d=n(5167),i=n(1269);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),i=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==r&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:i,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,x.jsx)(_,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);