# Skill — Microsoft Fabric (OneLake, Lakehouse, Semantic Models)
> Certifications: Microsoft Fabric Analytics Engineer Associate (DP-600) · PL-300 Power BI

## Objective
Design and implement an analytics platform on Microsoft Fabric: OneLake, Lakehouse, Dataflow Gen2, Semantic Model, Notebooks — to unify data and reporting in a single cloud environment.

## Microsoft Fabric architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MICROSOFT FABRIC                                 │
│                                                                       │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────────┐ │
│  │   OneLake   │  │  Data Factory  │  │    Power BI Service      │ │
│  │ (unified    │  │ (Pipelines +   │  │  (Reports + Dashboards)  │ │
│  │  storage)   │  │ Dataflow Gen2) │  │                           │ │
│  └──────┬──────┘  └───────┬────────┘  └──────────────────────────┘ │
│         │                  │                         ▲               │
│         ▼                  ▼                         │               │
│  ┌─────────────┐  ┌────────────────┐  ┌────────────────────────┐   │
│  │  Lakehouse  │  │   Warehouse    │  │    Semantic Model      │   │
│  │ (Delta Lake │  │  (SQL T-SQL    │  │  (DAX, measures,       │   │
│  │  Parquet)   │  │   endpoint)    │  │   relationships, RLS)  │   │
│  └─────────────┘  └────────────────┘  └────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Real-Time Intelligence  │  Data Science  │  Data Activator    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Lakehouse — Medallion layers

```
BRONZE (Raw)    → Raw data as it arrives
                  Never modified, full audit trail
                  Format: JSON, CSV, raw Parquet

SILVER (Cleaned) → Cleaned, typed, deduplicated data
                  Basic reference joins
                  Format: Delta Lake (Parquet + transaction log)

GOLD (Business)  → Dimensional models, business aggregations
                  Ready for BI consumption
                  Format: optimized Delta Lake (OPTIMIZE + ZORDER)
```

## Dataflow Gen2 — Power Query transformations

```m
// Sample Dataflow Gen2 transformation (Power Query M)
let
    // Source
    Source = Lakehouse.Tables("bronze_lakehouse", "raw_orders"),

    // Filter out null rows
    FilteredRows = Table.SelectRows(Source, each [order_id] <> null),

    // Cast types
    ChangedTypes = Table.TransformColumnTypes(FilteredRows, {
        {"order_id",    type text},
        {"amount",      type number},
        {"created_at",  type datetimezone}
    }),

    // Clean the status
    CleanedStatus = Table.TransformColumns(ChangedTypes, {
        {"status", Text.Lower, type text}
    }),

    // Add a calculated column
    AddedNetRevenue = Table.AddColumn(CleanedStatus, "net_revenue",
        each [gross_amount] - [discount_amount], type number)
in
    AddedNetRevenue
```

## Fabric Semantic Model — Configuration

```dax
// Measure with format and description
Net Revenue =
VAR _revenue = SUMX(fact_orders, fact_orders[gross_amount] - fact_orders[discount_amount])
RETURN _revenue
// Description: revenue after deducting discounts and credit notes, excl. VAT

// Dynamic Time Intelligence measure
Revenue Selected Period =
CALCULATE(
    [Net Revenue],
    DATESINPERIOD(dim_date[date], LASTDATE(dim_date[date]), -[Selected Months], MONTH)
)

// Numeric parameter (Field Parameter)
Selected Months = GENERATESERIES(1, 12, 1)
```

## Shortcut — Access external data without copying

```
OneLake Shortcut → points to:
  • Azure Data Lake Storage Gen2 (ADLS)
  • Amazon S3
  • Google Cloud Storage
  • Dataverse
  → The data stays at the source, Fabric accesses it via metadata
  → Avoids duplication and storage costs
```

## Spark Notebook — Silver to Gold transformation

```python
# Fabric Notebook (PySpark)
from pyspark.sql import functions as F
from delta.tables import DeltaTable

# Read Silver
orders_silver = spark.read.format("delta").load("abfss://silver@onelake.dfs.fabric.microsoft.com/orders/")

# Gold transformation: monthly aggregation by region
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

# Write Gold with MERGE (upsert)
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

## Deliverables
- Fabric architecture (diagram with all components)
- Configured Lakehouse (Bronze/Silver/Gold)
- Dataflows Gen2 (documented transformations)
- Fabric Semantic Model (DAX measures + RLS)
- Spark Notebooks (Bronze → Gold pipeline)
- Power BI dashboard connected to the Fabric Semantic Model

## Output format
Specify: **data sources** (ADLS, S3, SQL database, API…), **volume** (GB/TB of data), **refresh frequency** (real-time, hourly, nightly), **final BI use case** (dashboards, ML features, exports…), **constraints** (Fabric SKU budget, GDPR, compliance).
