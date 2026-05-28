# Skills — Data Engineer

> Dossier rattaché à `AGENT-DATA-ENGINEER.md`
> Référentiels : Google PDE · AWS DEA-C01 · Azure DP-203 · Databricks Data Engineer Pro · Confluent CCDAK · dbt Analytics Engineering · Apache Spark

---

## Index des skills (11)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`pipeline-ingestion.md`](pipeline-ingestion.md) | Construire un pipeline ETL / ELT | Google PDE · AWS DEA-C01 |
| 2 | [`spark-big-data.md`](spark-big-data.md) | Traitement distribué avec Apache Spark (PySpark, DataFrames) | Databricks · Spark |
| 3 | [`streaming-kafka.md`](streaming-kafka.md) | Streaming temps réel Kafka (topics, producers, Kafka Connect) | Confluent CCDAK |
| 4 | [`dbt-transformation.md`](dbt-transformation.md) | Transformations et tests avec dbt (models, macros, snapshots) | dbt Analytics Engineering |
| 5 | [`data-quality.md`](data-quality.md) | Qualité des données (Great Expectations, validation, alertes) | Google PDE · Databricks |
| 6 | [`orchestration-airflow.md`](orchestration-airflow.md) | Orchestrer pipelines avec Airflow (DAGs, scheduling) | Google PDE · AWS DEA-C01 |
| 7 | [`data-warehouse.md`](data-warehouse.md) | Architecturer Data Lake / Lakehouse (Delta Lake, Iceberg, Unity Catalog) | Databricks · Azure DP-203 |
| 8 | [`sql-avance.md`](sql-avance.md) | SQL avancé (window functions, CTEs, optimisation requêtes) | Google PDE · AWS DEA-C01 |
| 9 | [`cloud-data-platforms.md`](cloud-data-platforms.md) | Cloud Data Platforms (BigQuery, Redshift, Synapse, Snowflake) | Google PDE · AWS DEA · Azure DP-203 |
| 10 | [`gouvernance-data.md`](gouvernance-data.md) | Data Governance (catalogue, lineage, RGPD, data contracts) | Databricks · Google PDE |
| 11 | [`api-data-integration.md`](api-data-integration.md) | Intégrer APIs et flux de données (REST, GraphQL, CDC) | AWS DEA-C01 · Azure DP-203 · Confluent CCDAK |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONSTRUIRE UN PIPELINE BATCH ?
    → pipeline-ingestion.md (ETL/ELT)
    → dbt-transformation.md (transformations modulaires)
    → orchestration-airflow.md (planification + monitoring)

  ... TRAITER DU TEMPS RÉEL ?
    → streaming-kafka.md (Kafka complet)
    → api-data-integration.md (CDC, webhooks)

  ... TRAITER DU BIG DATA ?
    → spark-big-data.md (PySpark + DataFrames)
    → data-warehouse.md (Lakehouse architecture)

  ... ASSURER LA QUALITÉ & GOUVERNANCE ?
    → data-quality.md (Great Expectations, monitoring)
    → gouvernance-data.md (catalogue, lineage, RGPD)

  ... CHOISIR LE CLOUD ?
    → cloud-data-platforms.md (BigQuery / Redshift / Synapse / Snowflake)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Modélisation ML, statistiques, modèles | `AGENT-DATA-SCIENTIST.md` | DATA-ENG = data prep ; DATA-SCI = modélisation |
| Déploiement modèles, MLflow, serving | `AGENT-MLOPS-ENGINEER.md` | DATA-ENG = data ; MLOPS = modèles |
| LLM, agents IA, RAG | `AGENT-DEV-PYTHON-IA.md` | DATA-ENG = alimente le RAG ; DEV-PYTHON = construit le RAG |
| Infrastructure cloud (Kubernetes, Terraform) | `AGENT-DEVOPS-CLOUD.md` | DATA-ENG = pipelines ; DEVOPS = infra |
| BI / reporting analytique | `AGENT-BI-ANALYST.md` | DATA-ENG = production des données ; BI = consommation analytique |

---

## Référentiels et standards utilisés

- **Apache Spark** : https://spark.apache.org/docs/latest/
- **Apache Kafka** : https://kafka.apache.org/documentation/
- **Apache Airflow** : https://airflow.apache.org/docs/
- **dbt** : https://docs.getdbt.com/
- **Delta Lake** : https://docs.delta.io/
- **Apache Iceberg** : https://iceberg.apache.org/docs/
- **Great Expectations** : https://docs.greatexpectations.io/
- **DAMA DMBOK** : pour gouvernance data
