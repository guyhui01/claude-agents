# Skill — dbt (data build tool) & SQL Transformations
> Certifications: dbt Developer Certification · Databricks Data Engineer Associate

## Objective
Industrialize SQL transformations with dbt to guarantee the quality, documentation and reproducibility of analytical models.

## Structure of a dbt project
```
my_dbt_project/
├── dbt_project.yml      # Global configuration
├── profiles.yml         # DWH connections
├── models/
│   ├── staging/         # Bronze → silver layer (sources)
│   │   ├── stg_customers.sql
│   │   └── schema.yml
│   ├── intermediate/    # Complex transformations
│   └── marts/           # Gold layer (reporting tables)
│       ├── finance/
│       └── marketing/
├── tests/               # Custom tests
├── macros/              # Reusable SQL functions
├── seeds/               # Reference CSV files
└── snapshots/           # SCD Type 2
```

## dbt models — examples
```sql
-- models/staging/stg_customers.sql
{{ config(materialized='view', schema='staging') }}

WITH source AS (
    SELECT * FROM {{ source('salesforce', 'contacts') }}
),

renamed AS (
    SELECT
        id                          AS customer_id,
        UPPER(TRIM(firstname))      AS first_name,
        UPPER(TRIM(lastname))       AS last_name,
        LOWER(TRIM(email))          AS email,
        created_date::DATE          AS created_date,
        _airbyte_extracted_at       AS ingested_at
    FROM source
    WHERE email IS NOT NULL
)

SELECT * FROM renamed


-- models/marts/marketing/mart_customer_360.sql
{{ config(materialized='table', cluster_by=['segment']) }}

WITH customers AS (
    SELECT * FROM {{ ref('stg_customers') }}
),
sales AS (
    SELECT * FROM {{ ref('stg_sales') }}
),
aggregated AS (
    SELECT
        c.customer_id,
        c.first_name,
        c.last_name,
        c.segment,
        COUNT(s.sale_id)               AS purchase_count,
        SUM(s.amount)                  AS total_revenue,
        AVG(s.amount)                  AS avg_basket,
        MAX(s.sale_date)               AS last_order,
        CURRENT_DATE - MAX(s.sale_date) AS inactive_days
    FROM customers c
    LEFT JOIN sales s USING (customer_id)
    GROUP BY 1, 2, 3, 4
)

SELECT * FROM aggregated
```

## dbt macros — SQL reuse
```sql
-- macros/cents_to_euros.sql
{% macro cents_to_euros(column_name) %}
    ROUND({{ column_name }} / 100.0, 2)
{% endmacro %}

-- Usage in a model:
{{ cents_to_euros('amount_cents') }} AS amount_euros
```

## dbt snapshots — automatic SCD Type 2
```sql
-- snapshots/customers_snapshot.sql
{% snapshot customers_snapshot %}

{{
    config(
        target_schema='snapshots',
        unique_key='customer_id',
        strategy='timestamp',
        updated_at='updated_at'
    )
}}

SELECT * FROM {{ source('crm', 'customers') }}

{% endsnapshot %}
```

## Essential dbt commands
```bash
dbt run                    # Run all models
dbt run --select marts.*   # Run a subset
dbt test                   # Run the tests
dbt docs generate          # Generate the documentation
dbt docs serve             # Start the docs server
dbt source freshness       # Check source freshness
dbt build                  # run + test in a single command
```

## Deliverables
- Structured dbt project (staging / marts)
- Data tests covering 100% of critical columns
- dbt documentation (lineage graph, descriptions)
- CI/CD pipeline (GitHub Actions + dbt Cloud)

## Output format
Specify: target DWH (BigQuery, Snowflake, Databricks) · available sources · layers to build · key business metrics · refresh frequency
