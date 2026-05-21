# Skill — Architecture GCP : IA & Data
> Certifications : Google Cloud Professional Data Engineer (2026), Google Cloud Professional ML Engineer, Google Cloud Professional DevOps Engineer

## Objectif
Concevoir des architectures GCP orientées IA/Data — GKE autopilot, Vertex AI pipelines, BigQuery ML et patterns event-driven avec Pub/Sub et Cloud Composer pour l'orchestration.

## Services Clés & Patterns

### Architecture Data-IA sur GCP

```
┌──────────────────────────────────────────────────────────────┐
│                        INGESTION                             │
│  Cloud SQL / AlloyDB ──► Datastream ──► BigQuery             │
│  IoT / Apps ──► Pub/Sub ──► Dataflow ──► BigQuery            │
│  GCS (raw bucket) ──► Cloud Storage Triggers                 │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              STORAGE & PROCESSING                            │
│  BigQuery (data warehouse) — tables partitionnées + clustered│
│  GCS (data lake) — format Parquet/Avro/ORC                   │
│  Dataflow (Apache Beam) — streaming + batch                  │
│  Dataproc (Spark) — workloads Spark existants                │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│              MACHINE LEARNING (Vertex AI)                    │
│  Vertex AI Pipelines (Kubeflow) ──► Model Registry           │
│  Vertex AI Training ──► Vertex AI Prediction (endpoints)     │
│  Gemini API (Vertex) ──► RAG via Vertex AI Search            │
│  BigQuery ML ──► Modèles SQL directement dans BQ             │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│                SERVING & ORCHESTRATION                       │
│  GKE Autopilot ──► Cloud Run ──► API Gateway                 │
│  Cloud Composer (Airflow) ──► orchestration des pipelines    │
│  Looker / Looker Studio ──► BI & dashboards                  │
└──────────────────────────────────────────────────────────────┘
```

### GKE Autopilot — Configuration Terraform

```hcl
# gke-autopilot.tf
resource "google_container_cluster" "ai_platform" {
  name     = "ai-platform-prod"
  location = "europe-west1"           # Région bas carbone

  enable_autopilot = true             # Autopilot — pas de gestion de noeuds

  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.private.name

  ip_allocation_policy {
    cluster_secondary_range_name  = "pods"
    services_secondary_range_name = "services"
  }

  private_cluster_config {
    enable_private_nodes    = true
    enable_private_endpoint = false
    master_ipv4_cidr_block  = "172.16.0.32/28"
  }

  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"   # Workload Identity
  }

  release_channel {
    channel = "REGULAR"
  }

  vertical_pod_autoscaling {
    enabled = true
  }
}

# Workload Identity pour un ServiceAccount K8s
resource "google_service_account_iam_binding" "workload_identity" {
  service_account_id = google_service_account.app_sa.name
  role               = "roles/iam.workloadIdentityUser"
  members = [
    "serviceAccount:${var.project_id}.svc.id.goog[production/api-service-sa]"
  ]
}
```

### Vertex AI Pipeline (Kubeflow Pipelines)

```python
# vertex_pipeline.py
from kfp import dsl, compiler
from kfp.google.cloud import aiplatform
from google.cloud import aiplatform as vertex_ai

@dsl.component(
    base_image="python:3.12-slim",
    packages_to_install=["pandas", "scikit-learn", "google-cloud-bigquery"],
)
def prepare_data(
    project_id: str,
    dataset_id: str,
    output_dataset: dsl.Output[dsl.Dataset],
):
    from google.cloud import bigquery
    import pandas as pd

    client = bigquery.Client(project=project_id)
    query = f"""
        SELECT features, label
        FROM `{project_id}.{dataset_id}.training_table`
        WHERE DATE(created_at) >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
    """
    df = client.query(query).to_dataframe()
    df.to_parquet(output_dataset.path, index=False)


@dsl.component(
    base_image="python:3.12-slim",
    packages_to_install=["scikit-learn", "pandas", "joblib"],
)
def train_model(
    input_dataset: dsl.Input[dsl.Dataset],
    n_estimators: int,
    output_model: dsl.Output[dsl.Model],
    output_metrics: dsl.Output[dsl.Metrics],
):
    import pandas as pd
    import joblib
    from sklearn.ensemble import RandomForestClassifier
    from sklearn.model_selection import cross_val_score

    df = pd.read_parquet(input_dataset.path)
    X, y = df.drop("label", axis=1), df["label"]

    model = RandomForestClassifier(n_estimators=n_estimators, random_state=42)
    scores = cross_val_score(model, X, y, cv=5, scoring="roc_auc")
    model.fit(X, y)

    joblib.dump(model, output_model.path)
    output_metrics.log_metric("auc_cv_mean", float(scores.mean()))
    output_metrics.log_metric("auc_cv_std", float(scores.std()))


@dsl.pipeline(
    name="ml-training-pipeline",
    description="Pipeline d'entraînement avec BQ + Vertex AI",
)
def training_pipeline(
    project_id: str = "my-project",
    dataset_id: str = "ml_features",
    n_estimators: int = 100,
):
    data_task = prepare_data(project_id=project_id, dataset_id=dataset_id)
    train_task = train_model(
        input_dataset=data_task.outputs["output_dataset"],
        n_estimators=n_estimators,
    )


# Compiler et soumettre
compiler.Compiler().compile(training_pipeline, "pipeline.json")

vertex_ai.init(project="my-project", location="europe-west1")
job = vertex_ai.PipelineJob(
    display_name="ml-training-prod",
    template_path="pipeline.json",
    pipeline_root="gs://ml-pipelines-prod/runs",
    parameter_values={"n_estimators": 200},
)
job.submit(service_account="ml-pipeline-sa@my-project.iam.gserviceaccount.com")
```

### BigQuery ML — Modèles directement en SQL

```sql
-- Créer un modèle de propension à la conversion
CREATE OR REPLACE MODEL `my-project.ml_models.conversion_propensity`
OPTIONS(
  model_type = 'BOOSTED_TREE_CLASSIFIER',
  data_split_method = 'AUTO_SPLIT',
  num_parallel_tree = 1,
  max_iterations = 100,
  learn_rate = 0.1,
  subsample = 0.8,
  input_label_cols = ['converted'],
  auto_class_weights = TRUE
) AS
SELECT
  days_since_signup,
  sessions_last_30d,
  pages_viewed_last_7d,
  has_used_feature_x,
  plan_type,
  source_channel,
  converted
FROM `my-project.analytics.user_features`
WHERE DATE(event_date) BETWEEN '2025-01-01' AND '2026-03-31';

-- Évaluer le modèle
SELECT * FROM ML.EVALUATE(MODEL `my-project.ml_models.conversion_propensity`);

-- Prédictions en batch
SELECT
  user_id,
  predicted_converted,
  predicted_converted_probs[SAFE_OFFSET(1)].prob AS conversion_proba
FROM ML.PREDICT(
  MODEL `my-project.ml_models.conversion_propensity`,
  (SELECT * FROM `my-project.analytics.user_features` WHERE event_date = CURRENT_DATE())
)
ORDER BY conversion_proba DESC
LIMIT 10000;
```

### Cloud Composer (Airflow) — DAG orchestration

```python
# dags/daily_ml_pipeline.py
from airflow import DAG
from airflow.providers.google.cloud.operators.vertex_ai.pipeline_job import (
    RunPipelineJobOperator,
)
from airflow.providers.google.cloud.sensors.gcs import GCSObjectExistenceSensor
from airflow.utils.dates import days_ago
from datetime import timedelta

default_args = {
    "owner": "data-team",
    "depends_on_past": False,
    "email_on_failure": True,
    "email": ["data-alerts@company.com"],
    "retries": 2,
    "retry_delay": timedelta(minutes=5),
}

with DAG(
    dag_id="daily_ml_training",
    default_args=default_args,
    schedule_interval="0 3 * * *",   # Chaque jour à 3h
    start_date=days_ago(1),
    catchup=False,
    tags=["ml", "daily"],
) as dag:

    wait_for_data = GCSObjectExistenceSensor(
        task_id="wait_for_daily_export",
        bucket="data-exports-prod",
        object="daily/{{ ds }}/features.parquet",
        timeout=3600,
        mode="reschedule",
    )

    run_training = RunPipelineJobOperator(
        task_id="run_vertex_pipeline",
        project_id="my-project",
        location="europe-west1",
        template_path="gs://ml-pipelines-prod/templates/training_pipeline.json",
        parameter_values={
            "project_id": "my-project",
            "dataset_id": "ml_features",
            "run_date": "{{ ds }}",
        },
        gcp_conn_id="google_cloud_default",
    )

    wait_for_data >> run_training
```

## Livrables
- Architecture diagram GCP (Whitepapers Google / diagrams.net)
- Terraform modules GKE Autopilot + IAM + VPC
- Vertex AI Pipeline compilé + DAG Cloud Composer
- BigQuery ML modèle + monitoring avec Looker Studio
- IAM + Workload Identity configuration
- Estimation coûts GCP (Google Cloud Pricing Calculator)

## Format de sortie
Précise : cas d'usage IA/data (LLM Gemini, MLOps, analytics), région GCP (europe-west1/4 recommandée RGPD), volume de données (Go/To/Po), services existants GCP, contraintes de conformité, budget mensuel cible.
