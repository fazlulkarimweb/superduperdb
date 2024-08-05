"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5996],{1920:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=r(4848),a=r(8453),s=r(9489),o=r(7227),l=r(94);const i={sidebar_label:"Transfer learning",filename:"transfer_learning.md"},c="Transfer learning",d={id:"use_cases/transfer_learning",title:"transfer_learning",description:"Configure your production system",source:"@site/content/use_cases/transfer_learning.md",sourceDirName:"use_cases",slug:"/use_cases/transfer_learning",permalink:"/docs/use_cases/transfer_learning",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/blob/main/docs/hr/content/use_cases/transfer_learning.md",tags:[],version:"current",frontMatter:{sidebar_label:"Transfer learning",filename:"transfer_learning.md"},sidebar:"tutorialSidebar",previous:{title:"Text Vector Search",permalink:"/docs/use_cases/text_vector_search"}},u={},p=[{value:"Configure your production system",id:"configure-your-production-system",level:2},{value:"Start your cluster",id:"start-your-cluster",level:2},{value:"Connect to superduper",id:"connect-to-superduper",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Compute features",id:"compute-features",level:2},{value:"Choose features key from feature listener",id:"choose-features-key-from-feature-listener",level:2},{value:"Build and train classifier",id:"build-and-train-classifier",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transfer-learning",children:"Transfer learning"}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'If you would like to use the production features\nof superduper, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with superduper quickly.'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduper', exist_ok=True)\nos.environ['SUPERDUPER_CONFIG'] = '.superduper/config.yaml'\n"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"with open(os.environ['SUPERDUPER_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Starting a superduper cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,t.jsx)(n.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!python -m superduper local-cluster up        \n"})})}),(0,t.jsx)(o.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!make build_sandbox\n!make testenv_init        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-superduper",children:"Connect to superduper"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'Note that this is only relevant if you are running superduper in development mode.\nOtherwise refer to "Configuring your production system".'})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongodb://localhost:27017/documents')        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\ndb = superduper('sqlite://my_db.db')        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'superduper'\npassword = 'superduper'\nport = 3306\nhost = 'localhost'\ndatabase = 'test_db'\n\ndb = superduper(f\"mysql://{user}:{password}@{host}:{port}/{database}\")        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'sa'\npassword = 'Superduper#1'\nport = 1433\nhost = 'localhost'\n\ndb = superduper(f\"mssql://{user}:{password}@{host}:{port}\")        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install psycopg2\nfrom superduper import superduper\n\nuser = 'postgres'\npassword = 'postgres'\nport = 5432\nhost = 'localhost'\ndatabase = 'test_db'\ndb_uri = f\"postgres://{user}:{password}@{host}:{port}/{database}\"\n\ndb = superduper(db_uri, metadata_store=db_uri.replace('postgres://', 'postgresql://'))        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper import superduper\n\nuser = "superduperuser"\npassword = "superduperpassword"\naccount = "XXXX-XXXX"  # ORGANIZATIONID-USERID\ndatabase = "FREE_COMPANY_DATASET/PUBLIC"\n\nsnowflake_uri = f"snowflake://{user}:{password}@{account}/{database}"\n\ndb = superduper(\n    snowflake_uri, \n    metadata_store=\'sqlite:///your_database_name.db\',\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\nuser = 'default'\npassword = ''\nport = 8123\nhost = 'localhost'\n\ndb = superduper(f\"clickhouse://{user}:{password}@{host}:{port}\", metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"DuckDB",label:"DuckDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('duckdb://mydb.duckdb')        \n"})})}),(0,t.jsx)(o.A,{value:"Pandas",label:"Pandas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper(['my.csv'], metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"MongoMock",label:"MongoMock",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock:///test_db')        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Text-Classification",label:"Text-Classification",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!curl -O https://superduper-public-demo.s3.amazonaws.com/text_classification.json\nimport json\n\nwith open("text_classification.json", "r") as f:\n    data = json.load(f)\nnum_classes = 2        \n'})})}),(0,t.jsx)(o.A,{value:"Image-Classification",label:"Image-Classification",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/images_classification.zip && unzip images_classification.zip\nimport json\nfrom PIL import Image\n\nwith open('images/images.json', 'r') as f:\n    data = json.load(f)\n\ndata = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]\nnum_classes = 2        \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"After obtaining the data, we insert it into the database."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Text-Classification",label:"Text-Classification",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"datas = [{'txt': d['x'], 'label': d['y']} for d in data]        \n"})})}),(0,t.jsx)(o.A,{value:"Image-Classification",label:"Image-Classification",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"datas = [{'image': d['x'], 'label': d['y']} for d in data]        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,t.jsx)(n.p,{children:"After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Document\n\ntable_or_collection = db['documents']\n\nids = db.execute(table_or_collection.insert([Document(data) for data in datas]))\nselect = table_or_collection.select()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compute-features",children:"Compute features"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'key = \'txt\'\nimport sentence_transformers\nfrom superduper import vector, Listener\nfrom superduper.ext.sentence_transformers import SentenceTransformer\n\nsuperdupermodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2"),\n    postprocess=lambda x: x.tolist(),\n)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier="features"\n    )\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Image",label:"Image",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"key = 'image'\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduper.ext.torch import TorchModel\nfrom superduper import Listener\nfrom PIL import Image\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image):\n        # Preprocess the image\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nmodel = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess, postprocess=lambda x: x.numpy().tolist())\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier=\"features\"\n    )\n)        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"choose-features-key-from-feature-listener",children:"Choose features key from feature listener"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"input_key = listener.outputs\ntraining_select = select        \n"})})}),(0,t.jsx)(o.A,{value:"SQL",label:"SQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"input_key = listener.outputs\ntraining_select = select.outputs(listener.predict_id)        \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"We can find the calculated feature data from the database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"feature = list(training_select.limit(1).execute())[0][input_key]\nfeature_size = len(feature)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Scikit-Learn",label:"Scikit-Learn",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper.ext.sklearn import Estimator, SklearnTrainer\nfrom sklearn.svm import SVC\n\nmodel = Estimator(\n    identifier="my-model",\n    object=SVC(),\n    trainer=SklearnTrainer(\n        "my-trainer",\n        key=(input_key, "label"),\n        select=training_select,\n    ),\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Torch",label:"Torch",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torch\nfrom torch import nn\nfrom superduper.ext.torch.model import TorchModel\nfrom superduper.ext.torch.training import TorchTrainer\nfrom torch.nn.functional import cross_entropy\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=3):\n        super(SimpleModel, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\npreprocess = lambda x: torch.tensor(x)\n\n# Postprocess function for the model output    \ndef postprocess(x):\n    return int(x.topk(1)[1].item())\n\ndef data_transform(features, label):\n    return torch.tensor(features), label\n\n# Create a Logistic Regression model\n# feature_length is the input feature size\nmodel = SimpleModel(feature_size, num_classes=num_classes)\nmodel = TorchModel(\n    identifier='my-model',\n    object=model,         \n    preprocess=preprocess,\n    postprocess=postprocess,\n    trainer=TorchTrainer(\n        key=(input_key, 'label'),\n        identifier='my_trainer',\n        objective=cross_entropy,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=1000,\n        validation_interval=100,\n        select=select,\n        transform=data_transform,\n    ),\n)        \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Define a validation for evaluating the effect after training."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper import Dataset, Metric, Validation\n\ndef acc(x, y):\n    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)\n\n\naccuracy = Metric(identifier="acc", object=acc)\nvalidation = Validation(\n    "transfer_learning_performance",\n    key=(input_key, "label"),\n    datasets=[\n        Dataset(identifier="my-valid", select=training_select.add_fold(\'valid\'))\n    ],\n    metrics=[accuracy],\n)\nmodel.validation = validation\n'})}),"\n",(0,t.jsx)(n.p,{children:"If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training tasks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.apply(model)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the training metrics"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Scikit-Learn",label:"Scikit-Learn",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Load the model from the database\nmodel = db.load('model', model.identifier)\nmodel.metric_values        \n"})})}),(0,t.jsx)(o.A,{value:"Torch",label:"Torch",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip -q install matplotlib\nfrom matplotlib import pyplot as plt\n\n# Load the model from the database\nmodel = db.load('model', model.identifier)\n\n# Plot the accuracy values\nplt.plot(model.trainer.metric_values['my-valid/acc'])\nplt.show()        \n"})})})]}),"\n",(0,t.jsx)(l.A,{filename:"transfer_learning.md"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(6540);const a=e=>{const n=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",n);const r=`_${e.replace(/\.md$/,".ipynb")}`,t=encodeURIComponent(r);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${t}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((e=>e.blob())).then((e=>{const n=window.URL.createObjectURL(e),t=document.createElement("a");t.style.display="none",t.href=n,t.download=r,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(n),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(n))};var s=r(4848);const o=e=>{let{filename:n}=e;if(!n)return console.error("Filename is not provided or invalid."),null;const[r,o]=(0,t.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,s.jsx)("button",{style:r?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>a(n),children:"Generate notebook from all selected tabs"})}},7227:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(870);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>_});var t=r(6540),a=r(870),s=r(4245),o=r(6347),l=r(6494),i=r(2814),c=r(5167),d=r(1269);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=r(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function _(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);