# Skill — Feature Store & AI Data Pipelines
> Certifications: Databricks Certified ML Professional

## Objective
Build robust data pipelines to feed AI models with quality features.

## AI Data Pipeline architecture
```
Sources → Ingestion → Transformation → Feature Store → Model
(S3, DB)   (Kafka)      (Spark/dbt)     (Feast)        (LLM/ML)
```

## dbt — Transformation and feature engineering
```sql
-- models/features/user_context.sql
WITH recent_interactions AS (
    SELECT
        user_id,
        COUNT(*) AS interaction_count_7d,
        AVG(session_duration_seconds) AS avg_session_duration,
        MAX(last_interaction_at) AS last_seen_at,
        ARRAY_AGG(DISTINCT product_category ORDER BY interaction_at DESC LIMIT 5) AS top_categories
    FROM {{ ref('stg_interactions') }}
    WHERE interaction_at >= CURRENT_DATE - INTERVAL 7 DAY
    GROUP BY 1
)
SELECT * FROM recent_interactions
```

## Feast — Feature Store
```python
from feast import FeatureStore, FeatureService

store = FeatureStore(repo_path="./feast_repo")

# Retrieve features for inference (online)
feature_vector = store.get_online_features(
    features=["user_stats:interaction_count_7d", "user_stats:top_categories"],
    entity_rows=[{"user_id": user_id}]
).to_dict()

# Retrieve features for training (offline)
training_df = store.get_historical_features(
    entity_df=entity_df,
    features=["user_stats:interaction_count_7d", "user_stats:churn_probability"]
).to_df()
```

## RAG pipeline — Incremental ingestion
```python
from apscheduler.schedulers.asyncio import AsyncIOScheduler

async def incremental_ingestion():
    """Ingest the new documents since the last run."""
    last_run = await db.get_last_ingestion_timestamp()
    new_docs = await fetch_documents_since(last_run)

    if not new_docs:
        return

    chunks = splitter.split_documents(new_docs)
    await vectorstore.aadd_documents(chunks)
    await db.update_ingestion_timestamp()

scheduler = AsyncIOScheduler()
scheduler.add_job(incremental_ingestion, "interval", hours=1)
scheduler.start()
```

## Polars — Fast data processing
```python
import polars as pl

df = pl.scan_parquet("s3://bucket/data/*.parquet")
features = (
    df.filter(pl.col("created_at") >= "2024-01-01")
    .group_by("user_id")
    .agg([
        pl.col("amount").sum().alias("total_spend"),
        pl.col("event_type").n_unique().alias("event_diversity"),
        pl.col("created_at").max().alias("last_activity")
    ])
    .collect()
)
```

## Deliverables
- Incremental ingestion pipeline (documents or events)
- Configured Feature Store (Feast or Databricks Feature Store)
- Documented and tested dbt transformations
- Data quality monitoring (Great Expectations)

## Output format
Specify: data sources · ingestion frequency · volume · required features · existing data stack
