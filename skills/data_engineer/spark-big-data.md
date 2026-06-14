# Skill — Apache Spark & Big Data Processing
> Certifications: Databricks Data Engineer Associate · Google PDE · AWS DEA-C01

## Objective
Process massive data volumes with Apache Spark (PySpark) for transformations, aggregations and ML data preparation.

## Spark architecture
```
Driver Program
  └── SparkContext
        ├── Executor (Worker 1) → Tasks
        ├── Executor (Worker 2) → Tasks
        └── Executor (Worker 3) → Tasks

RDD → DataFrame → Dataset (higher-level API)
Transformation (lazy): filter, map, join, groupBy
Action (trigger): show, count, collect, write
```

## PySpark — fundamental operations
```python
from pyspark.sql import SparkSession
from pyspark.sql import functions as F
from pyspark.sql.types import *

spark = SparkSession.builder \
    .appName("data-pipeline") \
    .config("spark.sql.adaptive.enabled", "true") \
    .getOrCreate()

# Multi-format read
df = spark.read.parquet("s3://bucket/data/")
df = spark.read.json("s3://bucket/events/")
df = spark.read.format("delta").load("/data/table")

# Transformations
df_clean = df \
    .filter(F.col("amount") > 0) \
    .withColumn("month", F.date_trunc("month", F.col("date"))) \
    .withColumn("amount_eur", F.col("amount") / 100) \
    .dropDuplicates(["transaction_id"])

# Aggregations
df_agg = df_clean \
    .groupBy("customer_id", "month") \
    .agg(
        F.sum("amount_eur").alias("monthly_revenue"),
        F.count("*").alias("transaction_count"),
        F.avg("amount_eur").alias("avg_basket")
    )

# Joins
df_enriched = df_agg \
    .join(df_customers, on="customer_id", how="left") \
    .join(df_segments, on="segment_id", how="inner")
```

## Delta Lake — ACID on the Data Lake
```python
from delta.tables import DeltaTable

# Write with partitioning
df.write \
  .format("delta") \
  .mode("overwrite") \
  .partitionBy("year", "month") \
  .save("/data/delta/sales")

# Merge (upsert)
deltaTable = DeltaTable.forPath(spark, "/data/delta/customers")
deltaTable.alias("target").merge(
    df_updates.alias("source"),
    "target.customer_id = source.customer_id"
).whenMatchedUpdateAll() \
 .whenNotMatchedInsertAll() \
 .execute()

# Time travel
df_history = spark.read \
    .format("delta") \
    .option("timestampAsOf", "2026-01-01") \
    .load("/data/delta/sales")

# Compaction and cleanup
deltaTable.optimize().executeCompaction()
deltaTable.vacuum(retentionHours=168)
```

## Spark optimizations
```python
# Broadcast join (small table < 10MB)
from pyspark.sql.functions import broadcast
df_result = df_large.join(broadcast(df_small), "key")

# Repartition before joins / aggregations
df = df.repartition(200, "customer_id")

# Cache reused DataFrames
df_base.cache()
df_base.count()  # Trigger the cache

# Spark configuration
spark.conf.set("spark.sql.shuffle.partitions", "200")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
```

## Deliverables
- Production-ready PySpark pipeline
- Optimization script (partitioning, cache, broadcast)
- Unit tests (pytest + pyspark)
- Technical job documentation

## Output format
Specify: data volume (GB/TB) · frequency (batch/streaming) · Spark cluster (local, Databricks, EMR, Dataproc) · source/destination format · performance SLA
