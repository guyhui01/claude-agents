# Skill — Advanced Analytical SQL (Window Functions, CTEs, dbt)
> Certifications: dbt Certified Analytics Engineer (dbt Labs 2024) · Databricks Certified Data Analyst Associate · Google Data Analytics

## Objective
Write performant, maintainable analytical SQL: window functions, CTEs, subqueries, optimization — and model transformations with dbt (Data Build Tool) following best practices.

## Window Functions — Reference

```sql
-- General syntax
function() OVER (
    [PARTITION BY columns]   -- Calculation group
    [ORDER BY columns]        -- Order within the window
    [ROWS/RANGE frame]        -- Window extent
)

-- RANKING
ROW_NUMBER()   OVER (PARTITION BY customer_id ORDER BY order_date DESC)  -- 1,2,3 no ties
RANK()         OVER (PARTITION BY region ORDER BY revenue DESC)          -- 1,1,3 with skip
DENSE_RANK()   OVER (PARTITION BY region ORDER BY revenue DESC)          -- 1,1,2 no skip
NTILE(4)       OVER (ORDER BY revenue DESC)                              -- Quartiles 1-4
PERCENT_RANK() OVER (ORDER BY score)                                     -- Percentile 0.0-1.0

-- AGGREGATES
SUM(revenue)    OVER (PARTITION BY year ORDER BY month ROWS UNBOUNDED PRECEDING)  -- Cumulative
AVG(revenue)    OVER (PARTITION BY customer_id ORDER BY order_date ROWS 2 PRECEDING)  -- MA3
COUNT(*)        OVER (PARTITION BY segment)                               -- Group size

-- NAVIGATION
LAG(revenue, 1, 0)  OVER (PARTITION BY product ORDER BY date)  -- Previous value (N-1)
LEAD(revenue, 1, 0) OVER (PARTITION BY product ORDER BY date)  -- Next value (N+1)
FIRST_VALUE(revenue) OVER (PARTITION BY customer ORDER BY date)  -- First value of the group
LAST_VALUE(revenue)  OVER (PARTITION BY customer ORDER BY date ROWS UNBOUNDED FOLLOWING)
```

## Analytical use cases

```sql
-- 1. Top N products per category
WITH ranked_products AS (
    SELECT
        category,
        product_name,
        SUM(revenue) AS total_revenue,
        DENSE_RANK() OVER (PARTITION BY category ORDER BY SUM(revenue) DESC) AS rnk
    FROM fact_orders fo
    JOIN dim_product dp ON fo.product_key = dp.product_key
    GROUP BY category, product_name
)
SELECT * FROM ranked_products WHERE rnk <= 3;

-- 2. Churn: customers with no purchase in 90 days
WITH last_purchase AS (
    SELECT
        customer_id,
        MAX(order_date) AS last_order_date,
        CURRENT_DATE - MAX(order_date) AS days_since_last_order
    FROM fact_orders fo
    JOIN dim_customer dc ON fo.customer_key = dc.customer_key
    GROUP BY customer_id
)
SELECT *, CASE WHEN days_since_last_order > 90 THEN 'Churned' ELSE 'Active' END AS status
FROM last_purchase;

-- 3. MoM growth
SELECT
    DATE_TRUNC('month', order_date)                  AS month,
    SUM(net_revenue)                                  AS revenue,
    LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)) AS prev_month,
    ROUND(100.0 * (SUM(net_revenue) - LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)))
          / NULLIF(LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)), 0), 1) AS growth_pct
FROM fact_orders
GROUP BY 1 ORDER BY 1;
```

## dbt — Project structure

```
models/
├── staging/              # Source cleaning and typing (1:1 with source tables)
│   ├── stg_orders.sql    → Column renaming, type casts, basic filters
│   └── stg_customers.sql
├── intermediate/         # Business logic, joins, intermediate calculations
│   └── int_order_items.sql
├── marts/                # Final models exposed to BI tools
│   ├── finance/
│   │   └── fct_revenue.sql
│   └── product/
│       └── dim_products.sql
└── sources.yml           # Source declaration + freshness tests
```

## dbt — Model and tests

```sql
-- models/marts/finance/fct_revenue.sql
{{ config(
    materialized='incremental',
    unique_key='order_id',
    on_schema_change='append_new_columns'
) }}

WITH orders AS (
    SELECT * FROM {{ ref('stg_orders') }}
    {% if is_incremental() %}
    WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
    {% endif %}
),

customers AS (SELECT * FROM {{ ref('stg_customers') }}),

final AS (
    SELECT
        o.order_id,
        o.order_date,
        c.customer_segment,
        o.gross_revenue,
        o.discount_amount,
        o.gross_revenue - o.discount_amount AS net_revenue
    FROM orders o
    LEFT JOIN customers c USING (customer_id)
)

SELECT * FROM final
```

```yaml
# models/marts/finance/schema.yml
models:
  - name: fct_revenue
    description: "Revenue fact table — grain: 1 row per order"
    columns:
      - name: order_id
        tests: [unique, not_null]
      - name: order_date
        tests: [not_null]
      - name: net_revenue
        tests:
          - not_null
          - dbt_utils.expression_is_true:
              expression: ">= 0"
```

## Deliverables
- Organized dbt models (staging / intermediate / marts)
- Quality tests (unique, not_null, accepted_values, relationships)
- dbt documentation (column descriptions + lineage)
- Optimized analytical SQL queries (EXPLAIN analyzed)
- SQL conventions guide (style, naming, formatting)

## Output format
Specify: **data warehouse** (Snowflake, BigQuery, Redshift, Databricks, Fabric…), **analysis type** (ranking, cohort, funnel, trends, churn…), **volume** (rows, partitioning), **final BI tool** (Power BI, Tableau, Looker), **constraints** (performance, dbt or pure SQL).
