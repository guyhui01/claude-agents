# Skill — Cloud Data Platforms (AWS, GCP, Azure)
> Certifications: Google PDE · AWS DEA-C01 · Azure DP-203

## Objective
Design and operate cloud data platforms to build modern, scalable and cost-effective architectures.

## Cloud data platform comparison 2026

### Google Cloud Platform (GCP)
| Service | Role | Advantage |
|---|---|---|
| **BigQuery** | Serverless DWH | Petabyte queries, built-in ML |
| **Cloud Storage** | Data Lake (GCS) | Cheap, durable |
| **Dataflow** | Batch + Streaming (Apache Beam) | Serverless, managed |
| **Dataproc** | Managed Spark/Hadoop | Ephemeral, cost-effective |
| **Pub/Sub** | Streaming messaging | Managed Kafka |
| **Vertex AI** | ML Platform | End-to-end, AutoML |
| **Looker** | BI & Dashboarding | Native SQL, governance |

### Amazon Web Services (AWS)
| Service | Role | Advantage |
|---|---|---|
| **S3** | Data Lake | Industry standard |
| **Redshift** | DWH | AWS integration |
| **Glue** | Serverless ETL | Catalog + Spark jobs |
| **EMR** | Managed Spark | Flexible, cost-effective |
| **Kinesis** | Streaming | Low latency |
| **Athena** | SQL on S3 | Serverless, pay-per-query |
| **SageMaker** | ML Platform | Training + deployment |

### Microsoft Azure
| Service | Role | Advantage |
|---|---|---|
| **ADLS Gen2** | Data Lake | Hierarchical |
| **Synapse Analytics** | DWH + Spark | M365 integration |
| **Data Factory** | ETL/ELT | Low-code, 100+ connectors |
| **Event Hubs** | Streaming (Kafka-compatible) | Enterprise |
| **Azure ML** | ML Platform | AutoML, MLOps |
| **Power BI** | BI | Microsoft ecosystem |

## Reference Lakehouse architecture (multi-cloud)
```
Sources → Ingestion → Storage → Processing → Serving
  API      Airbyte    S3/GCS    Spark/dbt   DWH/API
  DB       Kafka      ADLS      Flink       BI Tool
  Files    ADF        Delta     Airflow     ML Model
```

## Cloud cost optimization
```python
# BigQuery: partitioning + clustering
CREATE TABLE dataset.events
PARTITION BY DATE(created_at)
CLUSTER BY user_id, event_type
AS SELECT * FROM ...

# Queries on partitions only (10x cheaper)
SELECT * FROM dataset.events
WHERE DATE(created_at) = '2026-05-01'
AND user_id = 'usr_123'
```

## Infrastructure as Code (Terraform)
```hcl
# GCS bucket for the Data Lake
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

# BigQuery dataset
resource "google_bigquery_dataset" "gold" {
  dataset_id  = "gold"
  location    = "EU"
  description = "Gold layer — business metrics"
}
```

## Deliverables
- Documented cloud data architecture (diagram)
- Terraform / IaC for the infrastructure
- Cost analysis (FinOps) with recommendations
- Deployment and operations runbook

## Output format
Specify: cloud provider · existing services · data volume · cloud budget · availability SLA · compliance (GDPR, HDS...)
