# Skill — Apache Spark & Traitement Big Data
> Certifications : Databricks Data Engineer Associate · Google PDE · AWS DEA-C01

## Objectif
Traiter des volumes massifs de données avec Apache Spark (PySpark) pour les transformations, agrégations et préparation de données ML.

## Architecture Spark
```
Driver Program
  └── SparkContext
        ├── Executor (Worker 1) → Tasks
        ├── Executor (Worker 2) → Tasks
        └── Executor (Worker 3) → Tasks

RDD → DataFrame → Dataset (API évoluée)
Transformation (lazy) : filter, map, join, groupBy
Action (trigger) : show, count, collect, write
```

## PySpark — opérations fondamentales
```python
from pyspark.sql import SparkSession
from pyspark.sql import functions as F
from pyspark.sql.types import *

spark = SparkSession.builder \
    .appName("data-pipeline") \
    .config("spark.sql.adaptive.enabled", "true") \
    .getOrCreate()

# Lecture multi-format
df = spark.read.parquet("s3://bucket/data/")
df = spark.read.json("s3://bucket/events/")
df = spark.read.format("delta").load("/data/table")

# Transformations
df_clean = df \
    .filter(F.col("montant") > 0) \
    .withColumn("mois", F.date_trunc("month", F.col("date"))) \
    .withColumn("montant_eur", F.col("montant") / 100) \
    .dropDuplicates(["transaction_id"])

# Agrégations
df_agg = df_clean \
    .groupBy("client_id", "mois") \
    .agg(
        F.sum("montant_eur").alias("ca_mensuel"),
        F.count("*").alias("nb_transactions"),
        F.avg("montant_eur").alias("panier_moyen")
    )

# Jointures
df_enriched = df_agg \
    .join(df_clients, on="client_id", how="left") \
    .join(df_segments, on="segment_id", how="inner")
```

## Delta Lake — ACID sur le Data Lake
```python
from delta.tables import DeltaTable

# Écriture avec partitionnement
df.write \
  .format("delta") \
  .mode("overwrite") \
  .partitionBy("annee", "mois") \
  .save("/data/delta/ventes")

# Merge (upsert)
deltaTable = DeltaTable.forPath(spark, "/data/delta/clients")
deltaTable.alias("target").merge(
    df_updates.alias("source"),
    "target.client_id = source.client_id"
).whenMatchedUpdateAll() \
 .whenNotMatchedInsertAll() \
 .execute()

# Time travel
df_historique = spark.read \
    .format("delta") \
    .option("timestampAsOf", "2026-01-01") \
    .load("/data/delta/ventes")

# Compaction et nettoyage
deltaTable.optimize().executeCompaction()
deltaTable.vacuum(retentionHours=168)
```

## Optimisations Spark
```python
# Broadcast join (petite table < 10MB)
from pyspark.sql.functions import broadcast
df_result = df_large.join(broadcast(df_small), "key")

# Repartitionner avant les joins / agrégations
df = df.repartition(200, "client_id")

# Cache les DataFrames réutilisés
df_base.cache()
df_base.count()  # Trigger le cache

# Configuration Spark
spark.conf.set("spark.sql.shuffle.partitions", "200")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
```

## Livrables
- Pipeline PySpark production-ready
- Script d'optimisation (partitionnement, cache, broadcast)
- Tests unitaires (pytest + pyspark)
- Documentation technique du job

## Format de sortie
Précise : volume de données (Go/To) · fréquence (batch/streaming) · cluster Spark (local, Databricks, EMR, Dataproc) · format source/destination · SLA de performance
