# Skills — Data Engineer

> Folder attached to `AGENT-DATA-ENGINEER.md`
> Frameworks: Google PDE · AWS DEA-C01 · Azure DP-203 · Databricks Data Engineer Pro · Confluent CCDAK · dbt Analytics Engineering · Apache Spark

---

## Skill index (11)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`pipeline-ingestion.md`](pipeline-ingestion.md) | Build an ETL / ELT pipeline | Google PDE · AWS DEA-C01 |
| 2 | [`spark-big-data.md`](spark-big-data.md) | Distributed processing with Apache Spark (PySpark, DataFrames) | Databricks · Spark |
| 3 | [`streaming-kafka.md`](streaming-kafka.md) | Real-time Kafka streaming (topics, producers, Kafka Connect) | Confluent CCDAK |
| 4 | [`dbt-transformation.md`](dbt-transformation.md) | Transformations and tests with dbt (models, macros, snapshots) | dbt Analytics Engineering |
| 5 | [`data-quality.md`](data-quality.md) | Data quality (Great Expectations, validation, alerts) | Google PDE · Databricks |
| 6 | [`orchestration-airflow.md`](orchestration-airflow.md) | Orchestrate pipelines with Airflow (DAGs, scheduling) | Google PDE · AWS DEA-C01 |
| 7 | [`data-warehouse.md`](data-warehouse.md) | Architect a Data Lake / Lakehouse (Delta Lake, Iceberg, Unity Catalog) | Databricks · Azure DP-203 |
| 8 | [`sql-avance.md`](sql-avance.md) | Advanced SQL (window functions, CTEs, query optimization) | Google PDE · AWS DEA-C01 |
| 9 | [`cloud-data-platforms.md`](cloud-data-platforms.md) | Cloud Data Platforms (BigQuery, Redshift, Synapse, Snowflake) | Google PDE · AWS DEA · Azure DP-203 |
| 10 | [`gouvernance-data.md`](gouvernance-data.md) | Data Governance (catalog, lineage, GDPR, data contracts) | Databricks · Google PDE |
| 11 | [`api-data-integration.md`](api-data-integration.md) | Integrate APIs and data flows (REST, GraphQL, CDC) | AWS DEA-C01 · Azure DP-203 · Confluent CCDAK |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... BUILD A BATCH PIPELINE?
    → pipeline-ingestion.md (ETL/ELT)
    → dbt-transformation.md (modular transformations)
    → orchestration-airflow.md (scheduling + monitoring)

  ... PROCESS REAL-TIME?
    → streaming-kafka.md (full Kafka)
    → api-data-integration.md (CDC, webhooks)

  ... PROCESS BIG DATA?
    → spark-big-data.md (PySpark + DataFrames)
    → data-warehouse.md (Lakehouse architecture)

  ... ENSURE QUALITY & GOVERNANCE?
    → data-quality.md (Great Expectations, monitoring)
    → gouvernance-data.md (catalog, lineage, GDPR)

  ... CHOOSE THE CLOUD?
    → cloud-data-platforms.md (BigQuery / Redshift / Synapse / Snowflake)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| ML modeling, statistics, models | `AGENT-DATA-SCIENTIST.md` | DATA-ENG = data prep; DATA-SCI = modeling |
| Model deployment, MLflow, serving | `AGENT-MLOPS-ENGINEER.md` | DATA-ENG = data; MLOPS = models |
| LLM, AI agents, RAG | `AGENT-DEV-PYTHON-IA.md` | DATA-ENG = feeds the RAG; DEV-PYTHON = builds the RAG |
| Cloud infrastructure (Kubernetes, Terraform) | `AGENT-DEVOPS-CLOUD.md` | DATA-ENG = pipelines; DEVOPS = infra |
| BI / analytical reporting | `AGENT-BI-ANALYST.md` | DATA-ENG = data production; BI = analytical consumption |

---

## Frameworks and standards used

- **Apache Spark**: https://spark.apache.org/docs/latest/
- **Apache Kafka**: https://kafka.apache.org/documentation/
- **Apache Airflow**: https://airflow.apache.org/docs/
- **dbt**: https://docs.getdbt.com/
- **Delta Lake**: https://docs.delta.io/
- **Apache Iceberg**: https://iceberg.apache.org/docs/
- **Great Expectations**: https://docs.greatexpectations.io/
- **DAMA DMBOK**: for data governance
