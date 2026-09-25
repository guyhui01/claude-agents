# Skill — Advanced SQL for Data Engineering
> Certifications: Google PDE · AWS DEA-C01 · Databricks Data Engineer Associate

## Objective
Master advanced SQL features to build performant queries on cloud data warehouses (BigQuery, Snowflake, Redshift, Databricks).

## Window Functions
```sql
-- ROW_NUMBER: numbering per group
SELECT
    customer_id,
    order_date,
    amount,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
FROM orders;

-- RANK vs DENSE_RANK
SELECT product_id, sales,
    RANK()       OVER (ORDER BY sales DESC) AS rank_with_gaps,
    DENSE_RANK() OVER (ORDER BY sales DESC) AS rank_no_gaps
FROM product_sales;

-- LAG / LEAD: compare with the previous/next row
SELECT
    date,
    revenue,
    LAG(revenue, 1)  OVER (ORDER BY date) AS prev_revenue,
    LEAD(revenue, 1) OVER (ORDER BY date) AS next_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY date) AS delta
FROM daily_revenue;

-- Cumulative SUM (running total)
SELECT
    date,
    daily_sales,
    SUM(daily_sales) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_sales
FROM sales;

-- Moving average (7 days)
SELECT
    date,
    sales,
    AVG(sales) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS ma7
FROM daily_sales;
```

## CTEs (Common Table Expressions)
```sql
-- Simple CTE
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

-- Recursive CTE (hierarchies, trees)
WITH RECURSIVE org_hierarchy AS (
    -- Base case: root
    SELECT employee_id, manager_id, name, 0 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: children
    SELECT e.employee_id, e.manager_id, e.name, h.level + 1
    FROM employees e
    INNER JOIN org_hierarchy h ON e.manager_id = h.employee_id
)
SELECT * FROM org_hierarchy ORDER BY level, employee_id;
```

## Query optimization

### Execution plan
```sql
-- BigQuery
EXPLAIN SELECT * FROM dataset.large_table WHERE date = '2026-01-01';

-- PostgreSQL / Redshift
EXPLAIN ANALYZE SELECT ...;

-- Databricks / Spark SQL
EXPLAIN EXTENDED SELECT ...;
```

### Optimization best practices
| Technique | Description | Impact |
|---|---|---|
| **Partitioning** | Filter on the partition column | Scan reduction × 100 |
| **Clustering / Z-ORDER** | Organize data physically | I/O reduction |
| **Projection** | SELECT specific columns, not `*` | Bandwidth reduction |
| **Predicate pushdown** | Filters as early as possible | Fewer rows processed |
| **Broadcast join** | Small table → worker memory | Avoids costly shuffle |
| **Avoid useless DISTINCT** | GROUP BY is often faster | Performance |
| **Materialize costly CTEs** | `CREATE TABLE AS` if reused | Avoids recomputation |

## Advanced SQL patterns

### Pivot / Unpivot
```sql
-- Pivot (rows → columns) — BigQuery / Snowflake
SELECT * FROM sales
PIVOT (SUM(amount) FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4'));

-- Conditional aggregation (universal equivalent)
SELECT
    product_id,
    SUM(CASE WHEN quarter = 'Q1' THEN amount END) AS q1,
    SUM(CASE WHEN quarter = 'Q2' THEN amount END) AS q2
FROM sales
GROUP BY product_id;
```

### Advanced deduplication
```sql
-- Keep the latest version of each entity (SCD)
WITH ranked AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY entity_id ORDER BY updated_at DESC) AS rn
    FROM raw_entities
)
SELECT * EXCEPT(rn) FROM ranked WHERE rn = 1;
```

### Gap and Islands (consecutive sequences)
```sql
-- Identify continuous activity periods
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

## Deliverables
- Library of reusable SQL queries (per pattern)
- Critical-query optimization report
- SQL best-practices guide per platform
- SQL code review with recommendations

## Output format
Specify: SQL platform (BigQuery, Snowflake, Redshift, Databricks) · table sizes · problem to solve · required performance level (latency, cost)
