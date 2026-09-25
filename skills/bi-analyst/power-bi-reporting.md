# Skill — Power BI (Desktop, Service, Fabric)
> Certifications: Microsoft Power BI Data Analyst Associate (PL-300) · Microsoft Fabric Analytics Engineer Associate (DP-600)

## Objective
Design and build production-grade Power BI reports and dashboards: optimized data model, advanced DAX, effective visuals, RLS governance — deployed on Power BI Service or Microsoft Fabric.

## Power BI architecture — Connection modes

```
MODE              DESCRIPTION                     PROS                   LIMITS
────────────────  ─────────────────────────────── ─────────────────────  ────────────────────────────
Import            Data copied into memory          Fast, offline          Refresh needed, 1 GB max
                  (xVelocity columnar engine)      All DAX available      No real-time

DirectQuery       Real-time queries to the source  Fresh data             Slow if source is slow, limited DAX
                  No data copy                     No size limit          Limited transformations

Composite         Mix of Import + DirectQuery      Maximum flexibility    Complex to optimize
Model             per table

Streaming         Real-time data (push)            Latency < 1s           No DAX, limited visuals
Dataset           Power Automate / Push API        Live dashboards        No history > 1h
```

## DAX — Essential measures

```dax
// Base measures
Total Revenue = SUM(fact_orders[net_revenue])

Revenue YTD =
CALCULATE(
    [Total Revenue],
    DATESYTD(dim_date[full_date])
)

Revenue LY =
CALCULATE(
    [Total Revenue],
    SAMEPERIODLASTYEAR(dim_date[full_date])
)

YoY Growth % =
DIVIDE(
    [Total Revenue] - [Revenue LY],
    [Revenue LY],
    BLANK()  // Avoids division by zero
)

// Running total
Running Total =
CALCULATE(
    [Total Revenue],
    FILTER(
        ALL(dim_date),
        dim_date[date_key] <= MAX(dim_date[date_key])
    )
)

// Rank
Product Rank =
RANKX(
    ALL(dim_product[product_name]),
    [Total Revenue],
    ,
    DESC,
    DENSE  // No rank skipping on ties
)

// 3-month moving average
Revenue MA3 =
AVERAGEX(
    DATESINPERIOD(dim_date[full_date], LASTDATE(dim_date[full_date]), -3, MONTH),
    [Total Revenue]
)
```

## Row Level Security (RLS)

```dax
// "Region" role — each manager sees only their region
// Filter on dim_geography
[region_manager_email] = USERPRINCIPALNAME()

// "Hierarchical" role — manager sees their teams
// Filter via a hierarchy relationships table
dim_employee[email] IN
    CALCULATETABLE(
        VALUES(hierarchy[subordinate_email]),
        hierarchy[manager_email] = USERPRINCIPALNAME()
    )
```

## Power BI report structure — Best Practices

```
PAGE 1 — Executive Summary (1 page = 1 key message)
  □ 3-5 KPI cards (with prior-period comparison)
  □ 1 trend chart (time evolution)
  □ 1 geographic view (if relevant)
  □ 1 top 10 table (products, customers, markets)

PAGE 2 — Detailed Analysis
  □ Contextual filters (slicers: period, region, segment)
  □ Drill-through to detail
  □ Comparative charts (categories, mix)

PAGE 3 — Raw Data (export)
  □ Full table with all fields
  □ Excel export enabled

CONVENTIONS:
  - Palette: 2-3 colors max (client visual identity)
  - Font: same family across the whole report
  - Custom tooltips on all visuals
  - Bookmarks for alternative views
  - Mobile layout for the KPI cards
```

## Performance optimization

```
COMMON PROBLEM            SOLUTION
───────────────────────   ──────────────────────────────────────────────
Report slow to load       Reduce the number of visuals per page (< 20)
                          Use Aggregations for large tables
                          Disable Auto Date/Time (global options)

Slow DAX                  Use CALCULATE + filters instead of FILTER
                          Avoid iterators (SUMX) on large tables
                          Create calculated columns rather than measures
                          when the result is static

Slow DirectQuery          Create indexes on filtered columns
                          Use materialized views on the source side
                          Enable Query Reduction (no query on hover)

Long refresh              Incremental refresh (reloads only the delta)
                          Partition by date
```

## Deliverables
- .pbix file with model + reports
- DAX measures documentation (catalog)
- RLS configuration (roles + rules)
- Refresh scheduling (Power BI Service)
- Dashboard reading guide (for users)
- Validation tests (source vs report comparison)

## Output format
Specify: **data source** (SQL Server, Fabric, SharePoint, API…), **connection mode** (Import, DirectQuery, Composite), **audience** (leadership, operational, self-service), **priority KPIs**, **constraints** (RLS, mobile, export, real-time refresh).
