# Skill — SQL Analytique Avancé (Window Functions, CTEs, dbt)
> Certifications : dbt Certified Analytics Engineer (dbt Labs 2024) · Databricks Certified Data Analyst Associate · Google Data Analytics

## Objectif
Écrire du SQL analytique performant et maintenable : window functions, CTEs, subqueries, optimisation — et modéliser les transformations avec dbt (Data Build Tool) selon les bonnes pratiques.

## Window Functions — Référence

```sql
-- Syntaxe générale
fonction() OVER (
    [PARTITION BY colonnes]  -- Groupe de calcul
    [ORDER BY colonnes]       -- Ordre dans la fenêtre
    [ROWS/RANGE frame]        -- Étendue de la fenêtre
)

-- RANKING
ROW_NUMBER()   OVER (PARTITION BY customer_id ORDER BY order_date DESC)  -- 1,2,3 sans égalité
RANK()         OVER (PARTITION BY region ORDER BY revenue DESC)          -- 1,1,3 avec saut
DENSE_RANK()   OVER (PARTITION BY region ORDER BY revenue DESC)          -- 1,1,2 sans saut
NTILE(4)       OVER (ORDER BY revenue DESC)                              -- Quartiles 1-4
PERCENT_RANK() OVER (ORDER BY score)                                     -- Percentile 0.0-1.0

-- AGRÉGATS
SUM(revenue)    OVER (PARTITION BY year ORDER BY month ROWS UNBOUNDED PRECEDING)  -- Cumulatif
AVG(revenue)    OVER (PARTITION BY customer_id ORDER BY order_date ROWS 2 PRECEDING)  -- MA3
COUNT(*)        OVER (PARTITION BY segment)                               -- Taille du groupe

-- NAVIGATION
LAG(revenue, 1, 0)  OVER (PARTITION BY product ORDER BY date)  -- Valeur N-1
LEAD(revenue, 1, 0) OVER (PARTITION BY product ORDER BY date)  -- Valeur N+1
FIRST_VALUE(revenue) OVER (PARTITION BY customer ORDER BY date)  -- 1ère valeur du groupe
LAST_VALUE(revenue)  OVER (PARTITION BY customer ORDER BY date ROWS UNBOUNDED FOLLOWING)
```

## Cas d'usage analytiques

```sql
-- 1. Top N produits par catégorie
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

-- 2. Churn : clients sans achat depuis 90 jours
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

-- 3. Croissance MoM
SELECT
    DATE_TRUNC('month', order_date)                  AS month,
    SUM(net_revenue)                                  AS revenue,
    LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)) AS prev_month,
    ROUND(100.0 * (SUM(net_revenue) - LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)))
          / NULLIF(LAG(SUM(net_revenue)) OVER (ORDER BY DATE_TRUNC('month', order_date)), 0), 1) AS growth_pct
FROM fact_orders
GROUP BY 1 ORDER BY 1;
```

## dbt — Structure de projet

```
models/
├── staging/              # Nettoyage et typage des sources (1:1 avec tables sources)
│   ├── stg_orders.sql    → Renommage colonnes, cast types, filtres de base
│   └── stg_customers.sql
├── intermediate/         # Logique métier, joins, calculs intermédiaires
│   └── int_order_items.sql
├── marts/                # Modèles finaux exposés aux outils BI
│   ├── finance/
│   │   └── fct_revenue.sql
│   └── product/
│       └── dim_products.sql
└── sources.yml           # Déclaration des sources + tests de fraîcheur
```

## dbt — Modèle et tests

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
    description: "Table de faits des revenus — grain : 1 ligne par commande"
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

## Livrables
- Modèles dbt organisés (staging / intermediate / marts)
- Tests de qualité (unique, not_null, accepted_values, relationships)
- Documentation dbt (descriptions colonnes + lineage)
- Requêtes SQL analytiques optimisées (EXPLAIN analysé)
- Guide de conventions SQL (style, nommage, formatage)

## Format de sortie
Précise : **entrepôt de données** (Snowflake, BigQuery, Redshift, Databricks, Fabric…), **type d'analyse** (ranking, cohort, funnel, tendances, churn…), **volume** (lignes, partitionnement), **outil BI final** (Power BI, Tableau, Looker), **contraintes** (performance, dbt ou SQL pur).
