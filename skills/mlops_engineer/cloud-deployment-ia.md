# Skill — AI Cloud Deployment (SageMaker · Vertex · Azure ML)
> Certifications: AWS DevOps Engineer Professional · Google Professional DevOps Engineer

## Objective
Deploy AI models on managed cloud platforms for production.

## AWS SageMaker
```python
import boto3
import sagemaker
from sagemaker.huggingface import HuggingFaceModel

# Deploy a HuggingFace model on SageMaker
hub = {
    "HF_MODEL_ID": "meta-llama/Llama-3.1-8B-Instruct",
    "HF_TASK": "text-generation",
    "SM_NUM_GPUS": "1"
}

huggingface_model = HuggingFaceModel(
    transformers_version="4.37",
    pytorch_version="2.1",
    py_version="py310",
    env=hub,
    role=sagemaker.get_execution_role()
)

predictor = huggingface_model.deploy(
    initial_instance_count=1,
    instance_type="ml.g5.xlarge",
    endpoint_name="llama-3-production"
)

# Inference
response = predictor.predict({"inputs": "Hello, I am...", "parameters": {"max_new_tokens": 200}})
```

## GCP Vertex AI
```python
from google.cloud import aiplatform

aiplatform.init(project="my-project", location="europe-west1")

# Deploy from Model Garden
model = aiplatform.Model(model_name="publishers/meta/models/llama-3-1-8b-instruct-maas")
endpoint = model.deploy(
    machine_type="g2-standard-4",
    accelerator_type="NVIDIA_L4",
    accelerator_count=1,
    min_replica_count=1,
    max_replica_count=4  # Autoscaling
)

response = endpoint.predict(instances=[{"prompt": "Explain RAG"}])
```

## Azure ML
```python
from azure.ai.ml import MLClient
from azure.ai.ml.entities import ManagedOnlineEndpoint, ManagedOnlineDeployment

ml_client = MLClient(credential, subscription_id, resource_group, workspace_name)

# Create the endpoint
endpoint = ManagedOnlineEndpoint(name="llm-endpoint", auth_mode="key")
ml_client.online_endpoints.begin_create_or_update(endpoint).result()

# Deployment
deployment = ManagedOnlineDeployment(
    name="production",
    endpoint_name="llm-endpoint",
    model="azureml://registries/HuggingFace/models/Llama-3-1-8B-Instruct",
    instance_type="Standard_NC6s_v3",
    instance_count=1
)
ml_client.online_deployments.begin_create_or_update(deployment).result()
```

## Cloud MLOps comparison
| Criterion | SageMaker | Vertex AI | Azure ML |
|---|---|---|---|
| Native MLflow | ✓ (via MLflow) | ✓ | ✓✓ |
| Model Registry | ✓✓ | ✓✓ | ✓✓ |
| GPU autoscaling | ✓✓ | ✓✓✓ | ✓✓ |
| Price | High | Medium | Medium |
| EU GDPR | ✓ | ✓ | ✓✓✓ |

## Deliverables
- Serving endpoint deployed and tested
- Autoscaling configured
- Integrated monitoring (CloudWatch/Cloud Monitoring/Azure Monitor)
- Monthly cost estimate

## Output format
Specify: cloud provider · model to deploy · GPU required · request volume · EU region required
