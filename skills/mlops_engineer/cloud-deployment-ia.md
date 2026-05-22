# Skill — Déploiement Cloud IA (SageMaker · Vertex · Azure ML)
> Certifications : AWS DevOps Engineer Professional · Google Professional DevOps Engineer

## Objectif
Déployer des modèles IA sur les plateformes cloud managées pour la production.

## AWS SageMaker
```python
import boto3
import sagemaker
from sagemaker.huggingface import HuggingFaceModel

# Déployer un modèle HuggingFace sur SageMaker
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

# Inférence
response = predictor.predict({"inputs": "Bonjour, je suis...", "parameters": {"max_new_tokens": 200}})
```

## GCP Vertex AI
```python
from google.cloud import aiplatform

aiplatform.init(project="mon-projet", location="europe-west1")

# Déployer depuis Model Garden
model = aiplatform.Model(model_name="publishers/meta/models/llama-3-1-8b-instruct-maas")
endpoint = model.deploy(
    machine_type="g2-standard-4",
    accelerator_type="NVIDIA_L4",
    accelerator_count=1,
    min_replica_count=1,
    max_replica_count=4  # Autoscaling
)

response = endpoint.predict(instances=[{"prompt": "Explique le RAG"}])
```

## Azure ML
```python
from azure.ai.ml import MLClient
from azure.ai.ml.entities import ManagedOnlineEndpoint, ManagedOnlineDeployment

ml_client = MLClient(credential, subscription_id, resource_group, workspace_name)

# Créer l'endpoint
endpoint = ManagedOnlineEndpoint(name="llm-endpoint", auth_mode="key")
ml_client.online_endpoints.begin_create_or_update(endpoint).result()

# Déploiement
deployment = ManagedOnlineDeployment(
    name="production",
    endpoint_name="llm-endpoint",
    model="azureml://registries/HuggingFace/models/Llama-3-1-8B-Instruct",
    instance_type="Standard_NC6s_v3",
    instance_count=1
)
ml_client.online_deployments.begin_create_or_update(deployment).result()
```

## Comparatif MLOps cloud
| Critère | SageMaker | Vertex AI | Azure ML |
|---|---|---|---|
| MLflow natif | ✓ (via MLflow) | ✓ | ✓✓ |
| Model Registry | ✓✓ | ✓✓ | ✓✓ |
| Autoscaling GPU | ✓✓ | ✓✓✓ | ✓✓ |
| Prix | Élevé | Moyen | Moyen |
| EU RGPD | ✓ | ✓ | ✓✓✓ |

## Livrables
- Endpoint de serving déployé et testé
- Autoscaling configuré
- Monitoring intégré (CloudWatch/Cloud Monitoring/Azure Monitor)
- Estimation du coût mensuel

## Format de sortie
Précise : cloud provider · modèle à déployer · GPU requis · volume de requêtes · région EU requise
