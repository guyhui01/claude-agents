# Skill — Microsoft Fabric (OneLake, Lakehouse, Semantic Models)
> Certifications : Microsoft Fabric Analytics Engineer Associate (DP-600) · PL-300 Power BI

## Objectif
Concevoir et implémenter une plateforme analytique sur Microsoft Fabric : OneLake, Lakehouse, Dataflow Gen2, Semantic Model, Notebooks — pour unifier la donnée et le reporting dans un seul environnement cloud.

## Architecture Microsoft Fabric

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MICROSOFT FABRIC                                 │
│                                                                       │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────────┐ │
│  │   OneLake   │  │  Data Factory  │  │    Power BI Service      │ │
│  │ (stockage   │  │ (Pipelines +   │  │  (Rapports + Dashboards) │ │
│  │  unifié)    │  │ Dataflow Gen2) │  │                           │ │
│  └──────┬──────┘  └───────┬────────┘  └──────────────────────────┘ │
│         │                  │                         ▲               │
│         ▼                  ▼                         │               │
│  ┌─────────────┐  ┌────────────────┐  ┌────────────────────────┐   │
│  │  Lakehouse  │  │   Warehouse    │  │    Semantic Model      │   │
│  │ (Delta Lake │  │  (SQL T-SQL    │  │  (DAX, mesures,        │   │
│  │  Parquet)   │  │   endpoint)    │  │   relations, RLS)      │   │
│  └─────────────┘  └────────────────┘  └────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Real-Time Intelligence  │  Data Science  │  Data Activator    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Lakehouse — Couches Medallion

```
BRONZE (Raw)    → Données brutes telles qu'elles arrivent
                  Jamais modifiées, audit trail complet
                  Format : JSON, CSV, Parquet brut

SILVER (Cleaned) → Données nettoyées, typées, dédupliquées
                  Jointures de référence basiques
                  Format : Delta Lake (Parquet + transaction log)

GOLD (Business)  → Modèles dimensionnels, agrégations métier
                  Prêts pour la consommation BI
                  Format : Delta Lake optimisé (OPTIMIZE + ZORDER)
```

## Dataflow Gen2 — Transformations Power Query

```m
// Exemple de transformation Dataflow Gen2 (Power Query M)
let
    // Source
    Source = Lakehouse.Tables("bronze_lakehouse", "raw_orders"),

    // Filtrer les lignes nulles
    FilteredRows = Table.SelectRows(Source, each [order_id] <> null),

    // Cast des types
    ChangedTypes = Table.TransformColumnTypes(FilteredRows, {
        {"order_id",    type text},
        {"amount",      type number},
        {"created_at",  type datetimezone}
    }),

    // Nettoyage du statut
    CleanedStatus = Table.TransformColumns(ChangedTypes, {
        {"status", Text.Lower, type text}
    }),

    // Ajout colonne calculée
    AddedNetRevenue = Table.AddColumn(CleanedStatus, "net_revenue",
        each [gross_amount] - [discount_amount], type number)
in
    AddedNetRevenue
```

## Semantic Model Fabric — Configuration

```dax
// Mesure avec format et description
Net Revenue =
VAR _revenue = SUMX(fact_orders, fact_orders[gross_amount] - fact_orders[discount_amount])
RETURN _revenue
// Description : CA après déduction remises et avoirs, hors TVA

// Mesure dynamique Time Intelligence
Revenue Selected Period =
CALCULATE(
    [Net Revenue],
    DATESINPERIOD(dim_date[date], LASTDATE(dim_date[date]), -[Selected Months], MONTH)
)

// Paramètre numérique (Field Parameter)
Selected Months = GENERATESERIES(1, 12, 1)
```

## Shortcut — Accès aux données externes sans copie

```
OneLake Shortcut → pointe vers :
  • Azure Data Lake Storage Gen2 (ADLS)
  • Amazon S3
  • Google Cloud Storage
  • Dataverse
  → Les données restent à la source, Fabric y accède via metadata
  → Évite la duplication et les coûts de stockage
```

## Notebook Spark — Transformation Silver vers Gold

```python
# Notebook Fabric (PySpark)
from pyspark.sql import functions as F
from delta.tables import DeltaTable

# Lecture Silver
orders_silver = spark.read.format("delta").load("abfss://silver@onelake.dfs.fabric.microsoft.com/orders/")

# Transformation Gold : agrégation mensuelle par région
orders_gold = (
    orders_silver
    .filter(F.col("status").isin(["confirmed", "shipped", "delivered"]))
    .withColumn("order_month", F.date_trunc("month", F.col("order_date")))
    .groupBy("order_month", "region", "segment")
    .agg(
        F.sum("net_revenue").alias("total_revenue"),
        F.count("order_id").alias("order_count"),
        F.avg("net_revenue").alias("avg_order_value")
    )
)

# Écriture Gold avec MERGE (upsert)
gold_table_path = "abfss://gold@onelake.dfs.fabric.microsoft.com/fct_monthly_revenue/"

if DeltaTable.isDeltaTable(spark, gold_table_path):
    delta_table = DeltaTable.forPath(spark, gold_table_path)
    delta_table.alias("gold").merge(
        orders_gold.alias("new"),
        "gold.order_month = new.order_month AND gold.region = new.region AND gold.segment = new.segment"
    ).whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()
else:
    orders_gold.write.format("delta").mode("overwrite").save(gold_table_path)
```

## Livrables
- Architecture Fabric (schéma avec tous les composants)
- Lakehouse configuré (Bronze/Silver/Gold)
- Dataflows Gen2 (transformations documentées)
- Semantic Model Fabric (mesures DAX + RLS)
- Notebooks Spark (pipeline Bronze → Gold)
- Dashboard Power BI connecté au Semantic Model Fabric

## Format de sortie
Précise : **sources de données** (ADLS, S3, base SQL, API…), **volume** (Go/To de données), **fréquence de refresh** (temps réel, horaire, nocturne), **cas d'usage BI final** (dashboards, ML features, exports…), **contraintes** (budget Fabric SKU, RGPD, compliance).
