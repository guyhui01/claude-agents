# Skill — SQL Avancé pour la Data Engineering
> Certifications : Google PDE · AWS DEA-C01 · Databricks Data Engineer Associate

## Objectif
Maîtriser les fonctionnalités SQL avancées pour construire des requêtes performantes sur les entrepôts de données cloud (BigQuery, Snowflake, Redshift, Databricks).

## Window Functions (fonctions de fenêtrage)
```sql
-- ROW_NUMBER : numérotation par groupe
SELECT
    client_id,
    order_date,
    amount,
    ROW_NUMBER() OVER (PARTITION BY client_id ORDER BY order_date DESC) AS rn
FROM orders;

-- RANK vs DENSE_RANK
SELECT product_id, sales,
    RANK()       OVER (ORDER BY sales DESC) AS rank_with_gaps,
    DENSE_RANK() OVER (ORDER BY sales DESC) AS rank_no_gaps
FROM product_sales;

-- LAG / LEAD : comparer avec la ligne précédente/suivante
SELECT
    date,
    revenue,
    LAG(revenue, 1)  OVER (ORDER BY date) AS prev_revenue,
    LEAD(revenue, 1) OVER (ORDER BY date) AS next_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY date) AS delta
FROM daily_revenue;

-- SUM cumulatif (running total)
SELECT
    date,
    daily_sales,
    SUM(daily_sales) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_sales
FROM sales;

-- Moyenne mobile (7 jours)
SELECT
    date,
    sales,
    AVG(sales) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS ma7
FROM daily_sales;
```

## CTEs (Common Table Expressions)
```sql
-- CTE simple
WITH monthly_revenue AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(amount) AS revenue
    FROM orders
    GROUP BY 1
),
growth AS (
    SELECT
        month,
        revenue,
        LAG(revenue) OVER (ORDER BY month) AS prev_revenue,
        ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month) * 100, 2) AS growth_pct
    FROM monthly_revenue
)
SELECT * FROM growth ORDER BY month;

-- CTE récursive (hiérarchies, arborescences)
WITH RECURSIVE org_hierarchy AS (
    -- Cas de base : racine
    SELECT employee_id, manager_id, name, 0 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Cas récursif : enfants
    SELECT e.employee_id, e.manager_id, e.name, h.level + 1
    FROM employees e
    INNER JOIN org_hierarchy h ON e.manager_id = h.employee_id
)
SELECT * FROM org_hierarchy ORDER BY level, employee_id;
```

## Optimisation des requêtes

### Plan d'exécution
```sql
-- BigQuery
EXPLAIN SELECT * FROM dataset.large_table WHERE date = '2026-01-01';

-- PostgreSQL / Redshift
EXPLAIN ANALYZE SELECT ...;

-- Databricks / Spark SQL
EXPLAIN EXTENDED SELECT ...;
```

### Bonnes pratiques d'optimisation
| Technique | Description | Impact |
|---|---|---|
| **Partitionnement** | Filtrer sur la colonne de partition | Réduction scan × 100 |
| **Clustering / Z-ORDER** | Organiser les données physiquement | Réduction I/O |
| **Projection** | SELECT colonnes précises, pas `*` | Réduction bande passante |
| **Predicate pushdown** | Filtres le plus tôt possible | Réduction lignes traitées |
| **Broadcast join** | Petite table → mémoire des workers | Évite shuffle costly |
| **Éviter les DISTINCT inutiles** | GROUP BY souvent plus rapide | Performance |
| **Matérialiser les CTE coûteux** | `CREATE TABLE AS` si réutilisé | Évite recalcul |

## Patterns SQL avancés

### Pivot / Unpivot
```sql
-- Pivot (lignes → colonnes) — BigQuery / Snowflake
SELECT * FROM sales
PIVOT (SUM(amount) FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4'));

-- Conditional aggregation (équivalent universel)
SELECT
    product_id,
    SUM(CASE WHEN quarter = 'Q1' THEN amount END) AS q1,
    SUM(CASE WHEN quarter = 'Q2' THEN amount END) AS q2
FROM sales
GROUP BY product_id;
```

### Déduplication avancée
```sql
-- Garder la dernière version de chaque entité (SCD)
WITH ranked AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY entity_id ORDER BY updated_at DESC) AS rn
    FROM raw_entities
)
SELECT * EXCEPT(rn) FROM ranked WHERE rn = 1;
```

### Gap and Islands (séquences consécutives)
```sql
-- Identifier les périodes continues d'activité
WITH islands AS (
    SELECT
        user_id,
        date,
        date - INTERVAL (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY date)) DAY AS island_key
    FROM daily_logins
)
SELECT user_id, MIN(date) AS start_date, MAX(date) AS end_date, COUNT(*) AS days
FROM islands
GROUP BY user_id, island_key
ORDER BY user_id, start_date;
```

## Livrables
- Bibliothèque de requêtes SQL réutilisables (par pattern)
- Rapport d'optimisation des requêtes critiques
- Guide de bonnes pratiques SQL par plateforme
- Review de code SQL avec recommandations

## Format de sortie
Précise : plateforme SQL (BigQuery, Snowflake, Redshift, Databricks) · taille des tables · problème à résoudre · niveau de performance requis (latence, coût)
