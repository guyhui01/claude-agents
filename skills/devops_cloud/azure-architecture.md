# Skill — Architecture Azure : IA, Data & MLOps
> Certifications : Azure Solutions Architect Expert (AZ-305 2026), Azure AI Engineer Associate (AI-102), Azure DevOps Expert (AZ-400)

## Objectif
Concevoir des architectures Azure pour les projets IA et data — AKS managé, Azure OpenAI Service, Azure ML avec MLflow, Synapse Analytics et Databricks pour les workloads data intensive.

## Services Clés & Patterns

### Architecture IA/Data sur Azure

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
│  Synapse Spark ──► Transformations à grande échelle          │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              ML & IA (Azure ML + Azure OpenAI)               │
│  Azure ML Workspaces ──► MLflow tracking ──► Model Registry  │
│  Azure OpenAI Service ──► GPT-4o, o3 ──► API Management     │
│  AI Search (vector + hybrid) ──► RAG patterns               │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              SERVING (AKS + App Service + APIM)              │
│  AKS ──► services ML/API ──► Azure API Management (APIM)     │
│  Azure Container Apps ──► microservices serverless           │
│  Power BI ──► dashboards métier                              │
└──────────────────────────────────────────────────────────────┘
```

### AKS — Configuration Terraform

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
    outbound_type     = "userDefinedRouting"   # Sortie via Firewall
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

# Node pool GPU pour inférence ML
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

### Azure OpenAI Service — Client Python

```python
# azure_openai_client.py
from openai import AzureOpenAI
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
import os

# Authentification via Managed Identity (pas de clé API)
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
    """Appel Azure OpenAI avec streaming et gestion d'erreurs."""
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
    """Génération d'embeddings pour RAG."""
    response = client.embeddings.create(
        model=deployment,
        input=texts,
        dimensions=1536,
    )
    return [item.embedding for item in response.data]
```

### Azure ML avec MLflow

```python
# azure_ml_training.py
import mlflow
import mlflow.sklearn
from azure.ai.ml import MLClient
from azure.ai.ml.entities import Job, CommandComponent
from azure.identity import DefaultAzureCredential

# Connexion au workspace Azure ML
ml_client = MLClient(
    credential=DefaultAzureCredential(),
    subscription_id=os.environ["AZURE_SUBSCRIPTION_ID"],
    resource_group_name="ai-platform-prod",
    workspace_name="ml-workspace-prod",
)

# Tracking MLflow vers Azure ML
mlflow.set_tracking_uri(ml_client.workspaces.get("ml-workspace-prod").mlflow_tracking_uri)
mlflow.set_experiment("churn-prediction-v2")

def train_and_log():
    with mlflow.start_run(run_name="xgboost-baseline"):
        mlflow.log_params({"n_estimators": 200, "max_depth": 6, "learning_rate": 0.05})

        # ... entraînement ...
        mlflow.log_metric("auc", 0.892)
        mlflow.log_metric("f1_score", 0.784)

        mlflow.sklearn.log_model(
            model,
            artifact_path="model",
            registered_model_name="churn-predictor-prod",
            signature=mlflow.models.infer_signature(X_train, predictions),
        )
```

### Databricks Delta Lake — Pipeline Python

```python
# databricks_pipeline.py (exécuté sur Databricks)
from pyspark.sql import SparkSession
from delta.tables import DeltaTable
from pyspark.sql.functions import col, current_timestamp, lit

spark = SparkSession.builder.appName("DataPipeline").getOrCreate()

# Lecture incrémentale depuis ADLS Gen2 (Auto Loader)
raw_df = (
    spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "json")
    .option("cloudFiles.schemaLocation", "/mnt/checkpoints/schema/events")
    .load("abfss://raw@datalakeprod.dfs.core.windows.net/events/")
)

# Transformation + écriture en streaming sur Delta
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

# MERGE (upsert) pour les mises à jour
events_delta = DeltaTable.forPath(spark, "abfss://curated@datalakeprod/events/")
events_delta.alias("target").merge(
    updates_df.alias("source"),
    "target.event_id = source.event_id"
).whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()
```

## Bonnes Pratiques Azure

| Domaine | Recommandation |
|---------|---------------|
| Identité | Managed Identity partout, pas de clés dans le code |
| Réseau | Private Endpoints pour tous les services PaaS |
| Secrets | Azure Key Vault + Key Vault references dans App Service/AKS |
| Monitoring | Azure Monitor + Log Analytics + Application Insights |
| Coûts | Azure Reservations (1/3 ans), Spot pour Databricks/AKS training |
| RGPD | Résidence des données West Europe, Customer-managed Keys (CMK) |

## Livrables
- Architecture diagram Azure (Azure Architecture Center patterns)
- Terraform modules AKS + Azure OpenAI + Databricks + ADLS
- Pipeline Databricks Delta Lake bout en bout
- Azure ML experiment + model registry avec MLflow
- APIM policies pour gouvernance des APIs OpenAI
- Estimation de coûts Azure (Azure Pricing Calculator)

## Format de sortie
Précise : cas d'usage IA (GPT-4o, fine-tuning, RAG), volume de données, région Azure (West Europe recommandée RGPD), services existants (AD, Azure DevOps), accord Microsoft Data Privacy, budget mensuel, conformité requise.
