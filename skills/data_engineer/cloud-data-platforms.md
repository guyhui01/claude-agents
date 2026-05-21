# Skill — Plateformes Cloud Data (AWS, GCP, Azure)
> Certifications : Google PDE · AWS DEA-C01 · Azure DP-203

## Objectif
Concevoir et exploiter les plateformes data cloud pour construire des architectures modernes, scalables et économiques.

## Comparatif plateformes cloud data 2026

### Google Cloud Platform (GCP)
| Service | Rôle | Avantage |
|---|---|---|
| **BigQuery** | DWH serverless | Requêtes pétabyte, ML intégré |
| **Cloud Storage** | Data Lake (GCS) | Pas cher, durable |
| **Dataflow** | Batch + Streaming (Apache Beam) | Serverless, managé |
| **Dataproc** | Spark/Hadoop managé | Éphémère, économique |
| **Pub/Sub** | Messaging streaming | Kafka managé |
| **Vertex AI** | ML Platform | Bout en bout, AutoML |
| **Looker** | BI & Dashboarding | SQL natif, gouvernance |

### Amazon Web Services (AWS)
| Service | Rôle | Avantage |
|---|---|---|
| **S3** | Data Lake | Standard industrie |
| **Redshift** | DWH | Intégration AWS |
| **Glue** | ETL serverless | Catalogue + jobs Spark |
| **EMR** | Spark managé | Flexible, économique |
| **Kinesis** | Streaming | Low latency |
| **Athena** | SQL sur S3 | Serverless, pay-per-query |
| **SageMaker** | ML Platform | Formation + déploiement |

### Microsoft Azure
| Service | Rôle | Avantage |
|---|---|---|
| **ADLS Gen2** | Data Lake | Hiérarchique |
| **Synapse Analytics** | DWH + Spark | Intégration M365 |
| **Data Factory** | ETL/ELT | Low-code, 100+ connecteurs |
| **Event Hubs** | Streaming (Kafka-compatible) | Enterprise |
| **Azure ML** | ML Platform | AutoML, MLOps |
| **Power BI** | BI | Microsoft ecosystem |

## Architecture de référence Lakehouse (multi-cloud)
```
Sources → Ingestion → Storage → Processing → Serving
  API      Airbyte    S3/GCS    Spark/dbt   DWH/API
  DB       Kafka      ADLS      Flink       BI Tool
  Files    ADF        Delta     Airflow     ML Model
```

## Optimisation des coûts cloud
```python
# BigQuery : partitionnement + clustering
CREATE TABLE dataset.events
PARTITION BY DATE(created_at)
CLUSTER BY user_id, event_type
AS SELECT * FROM ...

# Requêtes sur partitions seulement (10x moins cher)
SELECT * FROM dataset.events
WHERE DATE(created_at) = '2026-05-01'
AND user_id = 'usr_123'
```

## Infrastructure as Code (Terraform)
```hcl
# Bucket GCS pour Data Lake
resource "google_storage_bucket" "data_lake" {
  name          = "data-lake-prod"
  location      = "EU"
  storage_class = "STANDARD"
  
  lifecycle_rule {
    condition { age = 90 }
    action { type = "SetStorageClass"; storage_class = "NEARLINE" }
  }
  
  lifecycle_rule {
    condition { age = 365 }
    action { type = "SetStorageClass"; storage_class = "COLDLINE" }
  }
}

# Dataset BigQuery
resource "google_bigquery_dataset" "gold" {
  dataset_id  = "gold"
  location    = "EU"
  description = "Gold layer — business metrics"
}
```

## Livrables
- Architecture data cloud documentée (diagramme)
- Terraform / IaC pour l'infrastructure
- Analyse des coûts (FinOps) avec recommandations
- Runbook de déploiement et d'exploitation

## Format de sortie
Précise : cloud provider · services existants · volume de données · budget cloud · SLA de disponibilité · conformité (RGPD, HDS...)
