# Skill — Azure Architecture: AI, Data & MLOps
> Certifications: Azure Solutions Architect Expert (AZ-305 2026), Azure AI Engineer Associate (AI-102), Azure DevOps Expert (AZ-400)

## Objective
Design Azure architectures for AI and data projects — managed AKS, Azure OpenAI Service, Azure ML with MLflow, Synapse Analytics and Databricks for data-intensive workloads.

## Key services & patterns

### AI/Data architecture on Azure

```
┌──────────────────────────────────────────────────────────────┐
│                       INGESTION                              │
│  Azure Data Factory (ADF) ──► ADLS Gen2 (raw)               │
│  Event Hubs (Kafka compatible) ──► Stream Analytics          │
│  IoT Hub ──► Event Hubs ──► ADLS Gen2                        │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│         STORAGE — Azure Data Lake Storage Gen2 (ADLS)        │
│  abfss://raw@datalakeprod.dfs.core.windows.net/              │
│  abfss://curated@datalakeprod.dfs.core.windows.net/          │
│  abfss://serving@datalakeprod.dfs.core.windows.net/          │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              TRANSFORM (Databricks + Synapse)                │
│  Databricks (Delta Lake) ──► Unity Catalog                   │
│  Synapse Analytics ──► Dedicated SQL Pool (DWH)              │
│  Synapse Spark ──► Large-scale transformations               │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              ML & AI (Azure ML + Azure OpenAI)               │
│  Azure ML Workspaces ──► MLflow tracking ──► Model Registry  │
│  Azure OpenAI Service ──► GPT-4o, o3 ──► API Management     │
│  AI Search (vector + hybrid) ──► RAG patterns               │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              SERVING (AKS + App Service + APIM)              │
│  AKS ──► ML/API services ──► Azure API Management (APIM)     │
│  Azure Container Apps ──► serverless microservices           │
│  Power BI ──► business dashboards                            │
└──────────────────────────────────────────────────────────────┘
```

### AKS — Terraform configuration

```hcl
# aks.tf
resource "azurerm_kubernetes_cluster" "ai_platform" {
  name                = "ai-platform-prod"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  dns_prefix          = "ai-platform-prod"
  kubernetes_version  = "1.30"

  sku_tier = "Standard"    # Uptime SLA 99.95%

  default_node_pool {
    name                = "system"
    node_count          = 3
    vm_size             = "Standard_D4s_v5"
    vnet_subnet_id      = azurerm_subnet.aks.id
    enable_auto_scaling = true
    min_count           = 3
    max_count           = 10
    os_disk_size_gb     = 128
    type                = "VirtualMachineScaleSets"
    zones               = ["1", "2", "3"]    # Multi-AZ

    upgrade_settings {
      max_surge = "33%"
    }
  }

  identity {
    type = "SystemAssigned"
  }

  azure_active_directory_role_based_access_control {
    managed                = true
    azure_rbac_enabled     = true
    admin_group_object_ids = [var.aks_admin_group_id]
  }

  network_profile {
    network_plugin    = "azure"
    network_policy    = "calico"
    load_balancer_sku = "standard"
    outbound_type     = "userDefinedRouting"   # Egress via Firewall
  }

  monitor_metrics {}

  oms_agent {
    log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id
  }

  key_vault_secrets_provider {
    secret_rotation_enabled = true
  }

  workload_identity_enabled         = true
  oidc_issuer_enabled               = true

  tags = var.common_tags
}

# GPU node pool for ML inference
resource "azurerm_kubernetes_cluster_node_pool" "gpu" {
  name                  = "gpupool"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.ai_platform.id
  vm_size               = "Standard_NC4as_T4_v3"   # GPU T4
  enable_auto_scaling   = true
  min_count             = 0
  max_count             = 4
  node_taints           = ["sku=gpu:NoSchedule"]
  node_labels           = { workload = "ml-inference" }
}
```

### Azure OpenAI Service — Python client

```python
# azure_openai_client.py
from openai import AzureOpenAI
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
import os

# Authentication via Managed Identity (no API key)
credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential, "https://cognitiveservices.azure.com/.default"
)

client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],  # https://<resource>.openai.azure.com
    azure_ad_token_provider=token_provider,
    api_version="2025-01-01-preview",
)

def chat_with_streaming(messages: list[dict], deployment: str = "gpt-4o") -> str:
    """Azure OpenAI call with streaming and error handling."""
    full_response = ""
    with client.chat.completions.stream(
        model=deployment,
        messages=messages,
        max_tokens=4096,
        temperature=0.1,
    ) as stream:
        for chunk in stream:
            if chunk.choices and chunk.choices[0].delta.content:
                full_response += chunk.choices[0].delta.content
                print(chunk.choices[0].delta.content, end="", flush=True)
    return full_response


def generate_embeddings(texts: list[str], deployment: str = "text-embedding-3-large") -> list[list[float]]:
    """Embedding generation for RAG."""
    response = client.embeddings.create(
        model=deployment,
        input=texts,
        dimensions=1536,
    )
    return [item.embedding for item in response.data]
```

### Azure ML with MLflow

```python
# azure_ml_training.py
import mlflow
import mlflow.sklearn
from azure.ai.ml import MLClient
from azure.ai.ml.entities import Job, CommandComponent
from azure.identity import DefaultAzureCredential

# Connect to the Azure ML workspace
ml_client = MLClient(
    credential=DefaultAzureCredential(),
    subscription_id=os.environ["AZURE_SUBSCRIPTION_ID"],
    resource_group_name="ai-platform-prod",
    workspace_name="ml-workspace-prod",
)

# MLflow tracking to Azure ML
mlflow.set_tracking_uri(ml_client.workspaces.get("ml-workspace-prod").mlflow_tracking_uri)
mlflow.set_experiment("churn-prediction-v2")

def train_and_log():
    with mlflow.start_run(run_name="xgboost-baseline"):
        mlflow.log_params({"n_estimators": 200, "max_depth": 6, "learning_rate": 0.05})

        # ... training ...
        mlflow.log_metric("auc", 0.892)
        mlflow.log_metric("f1_score", 0.784)

        mlflow.sklearn.log_model(
            model,
            artifact_path="model",
            registered_model_name="churn-predictor-prod",
            signature=mlflow.models.infer_signature(X_train, predictions),
        )
```

### Databricks Delta Lake — Python pipeline

```python
# databricks_pipeline.py (run on Databricks)
from pyspark.sql import SparkSession
from delta.tables import DeltaTable
from pyspark.sql.functions import col, current_timestamp, lit

spark = SparkSession.builder.appName("DataPipeline").getOrCreate()

# Incremental read from ADLS Gen2 (Auto Loader)
raw_df = (
    spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "json")
    .option("cloudFiles.schemaLocation", "/mnt/checkpoints/schema/events")
    .load("abfss://raw@datalakeprod.dfs.core.windows.net/events/")
)

# Transformation + streaming write to Delta
(
    raw_df
    .withColumn("ingested_at", current_timestamp())
    .writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/mnt/checkpoints/events")
    .option("mergeSchema", "true")
    .partitionBy("event_date")
    .start("abfss://curated@datalakeprod.dfs.core.windows.net/events/")
)

# MERGE (upsert) for updates
events_delta = DeltaTable.forPath(spark, "abfss://curated@datalakeprod/events/")
events_delta.alias("target").merge(
    updates_df.alias("source"),
    "target.event_id = source.event_id"
).whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()
```

## Azure best practices

| Area | Recommendation |
|---------|---------------|
| Identity | Managed Identity everywhere, no keys in the code |
| Network | Private Endpoints for all PaaS services |
| Secrets | Azure Key Vault + Key Vault references in App Service/AKS |
| Monitoring | Azure Monitor + Log Analytics + Application Insights |
| Cost | Azure Reservations (1/3 years), Spot for Databricks/AKS training |
| GDPR | Data residency in West Europe, Customer-managed Keys (CMK) |

## Deliverables
- Azure architecture diagram (Azure Architecture Center patterns)
- Terraform modules AKS + Azure OpenAI + Databricks + ADLS
- End-to-end Databricks Delta Lake pipeline
- Azure ML experiment + model registry with MLflow
- APIM policies for OpenAI API governance
- Azure cost estimate (Azure Pricing Calculator)

## Output format
Specify: AI use case (GPT-4o, fine-tuning, RAG), data volume, Azure region (West Europe recommended for GDPR), existing services (AD, Azure DevOps), Microsoft Data Privacy agreement, monthly budget, required compliance.
