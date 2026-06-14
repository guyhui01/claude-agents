# Skill — Data Warehouse & Data Modeling
> Certifications: Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objective
Design and implement performant data warehouses with modeling suited to analytical needs.

## Data Warehouse architectures 2026

### Lakehouse (dominant standard)
```
Bronze Layer (Raw)    → Raw, immutable data
Silver Layer (Clean)  → Cleaned, typed data
Gold Layer (Business) → Aggregates, KPIs, reporting tables
```

### Cloud platforms
| Platform | Cloud | Advantages | Ideal for |
|---|---|---|---|
| **BigQuery** | Google | Serverless, powerful SQL | Ad hoc analysis, built-in ML |
| **Snowflake** | Multi-cloud | Compute/storage isolation | Data sharing |
| **Databricks** | Multi-cloud | Lakehouse, Spark + ML | Unified data + AI |
| **Redshift** | AWS | AWS integration | AWS ecosystem |
| **Synapse** | Azure | Microsoft integration | Azure ecosystem |

## Dimensional modeling (Ralph Kimball)

### Star schema
```sql
-- Fact table (measures)
CREATE TABLE fact_sales (
    sale_id         BIGINT PRIMARY KEY,
    date_id         INT REFERENCES dim_date(date_id),
    customer_id     INT REFERENCES dim_customer(customer_id),
    product_id      INT REFERENCES dim_product(product_id),
    amount          DECIMAL(10,2),
    quantity        INT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dimension table (context)
CREATE TABLE dim_customer (
    customer_id     INT PRIMARY KEY,
    name            VARCHAR(100),
    segment         VARCHAR(50),
    city            VARCHAR(100),
    created_date    DATE,
    is_active       BOOLEAN
);
```

### Slowly Changing Dimensions (SCD)
```sql
-- SCD Type 2: historize the changes
CREATE TABLE dim_customer_scd2 (
    customer_sk     BIGINT PRIMARY KEY,  -- Surrogate key
    customer_id     INT,                 -- Natural key
    name            VARCHAR(100),
    segment         VARCHAR(50),
    valid_from      DATE,
    valid_to        DATE,
    is_current      BOOLEAN
);
-- When a customer changes segment: close the old row,
-- create a new one with the new values
```

## dbt — modern SQL transformation
```sql
-- models/silver/stg_customers.sql
{{ config(materialized='view') }}

SELECT
    customer_id,
    UPPER(TRIM(name))             AS name,
    LOWER(TRIM(email))            AS email,
    COALESCE(segment, 'Unknown')  AS segment,
    created_at::DATE              AS created_date
FROM {{ source('raw', 'customers') }}
WHERE email IS NOT NULL

-- models/gold/mart_churn.sql
{{ config(materialized='table', cluster_by=['segment']) }}

SELECT
    c.customer_id,
    c.segment,
    COUNT(s.sale_id)          AS purchase_count,
    SUM(s.amount)             AS total_revenue,
    MAX(s.created_at)         AS last_purchase,
    CURRENT_DATE - MAX(s.created_at)::DATE AS inactive_days
FROM {{ ref('stg_customers') }} c
LEFT JOIN {{ ref('stg_sales') }} s USING (customer_id)
GROUP BY 1, 2
```

## dbt tests
```yaml
# schema.yml
models:
  - name: mart_churn
    columns:
      - name: customer_id
        tests:
          - not_null
          - unique
      - name: segment
        tests:
          - accepted_values:
              values: ['Gold', 'Silver', 'Bronze', 'Unknown']
```

## Deliverables
- Documented data schema (ERD)
- dbt models with tests and documentation
- Data dictionary (metrics glossary)
- Query performance report

## Output format
Specify: cloud platform · data sources · granularity (atomic fact) · required history · freshness SLA · target team (analytics, ML, BI)
