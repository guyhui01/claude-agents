# Skill — Tableau Desktop & Cloud (Dashboards, Prep, Server)
> Certifications: Tableau Certified Data Analyst (Salesforce 2024)

## Objective
Design and build Tableau visualizations and dashboards: data connections, calculations, LOD expressions, interactive actions — for exploratory analysis and operational reporting.

## Tableau connections — Main types

```
TYPE              DESCRIPTION                       WHEN TO USE
────────────────  ────────────────────────────────  ──────────────────────────────────
Live Connection   Real-time queries                 Very fresh data, fast warehouse
                  No local copy                     (Snowflake, Databricks, BigQuery)

Extract (.hyper)  Compressed local copy             Slow source, offline analysis
                  Very fast to query                Scheduled refresh possible

Published DS      Dataset shared on Tableau Server  Governance, team reuse
                  Centralized source of truth       1 change = everyone up to date
```

## Calculated Fields — Common expressions

```
// Basic calculation
[Gross Revenue] - [Discount] → Net Revenue

// IF / CASE
IF [Churn Days] > 90 THEN "Churned"
ELSEIF [Churn Days] > 60 THEN "At Risk"
ELSE "Active"
END

// Date
DATEDIFF('month', [Order Date], TODAY())   → Age in months
DATETRUNC('month', [Order Date])           → Truncate to the month

// String
LEFT([Email], FIND([Email], '@') - 1)      → Extract before @
CONTAINS(UPPER([Product Name]), 'AI')       → Case-insensitive filter

// NULL handling
IFNULL([Revenue], 0)
ZN([Revenue])   // ZN = Zero if Null (shortcut)
```

## LOD Expressions (Level of Detail)

```
FIXED   — Compute at a fixed granularity level (ignores context filters)
          { FIXED [Customer ID] : MAX([Order Date]) }  → Last purchase per customer

INCLUDE — Compute at a level finer than the view
          { INCLUDE [Product ID] : AVG([Revenue]) }  → Average per product within a customer view

EXCLUDE — Compute at a level more aggregated than the view
          { EXCLUDE [Month] : SUM([Revenue]) }  → Annual total within a monthly view

// Classic use case: % of total
SUM([Revenue]) / { FIXED : SUM([Revenue]) }  → Each product's share of the global total

// Customers with > 1 order (segment)
{ FIXED [Customer ID] : COUNT([Order ID]) } > 1  → Filterable True/False
```

## Effective dashboard structure

```
OPERATIONAL DASHBOARD (1920×1080)
┌───────────────────────────────────────────────────────────────────────┐
│  TITLE + Global filters (Period, Region, Segment)          [Logo]     │
├────────────────────┬──────────────────────────────────────────────────┤
│  KPI CARDS (top)   │  Net Rev. │  # Orders   │  Avg Basket   │  NPS  │
├────────────────────┴──────────────────────────────────────────────────┤
│                                                                         │
│  MAIN CHART (60% width)               │  SECONDARY CHART (40%)        │
│  Revenue trend over 12 months         │  Top 10 products (H bars)     │
│  (line chart with target)             │                                │
│                                                                         │
├───────────────────────────────────────┴───────────────────────────────┤
│  DETAIL TABLE (drill-through available)                                │
│  Recent orders with status + filter by country                         │
└───────────────────────────────────────────────────────────────────────┘
```

## Tableau actions — Interactivity

```
ACTION TYPE          CONFIGURATION                      EFFECT
───────────────────  ─────────────────────────────────  ──────────────────────────────────
Filter Action        Click on a region                   Filters all the other charts
                     Source: Map → Target: All           on the page to that region

Highlight Action     Hover over a table row              Highlights the same value
                     Source: Table → Target: Chart       in the adjacent chart

URL Action           Click on an order ID                Opens the CRM on the customer record
                     Source: Table → URL: CRM/$[ID]

Set Action           Select some points                  Compares selection vs the rest
                     Source: Scatter → Target: Set       (IN/OUT analysis)

Parameter Action     Click to change the parameter       Toggle between "Revenue" and "Quantity"
```

## Tableau Prep — Data pipeline

```
TYPICAL FLOW:
Source CSV/DB → Cleaning → Joins → Aggregations → Output .hyper / Tableau Server

COMMON STEPS:
  □ Filter: remove rows with a null primary key
  □ Clean: standardize casing (Title Case, UPPER, lower)
  □ Pivot: turn date columns into rows (long format)
  □ Join: enrich with a dimension table
  □ Aggregate: pre-aggregate if the source is too large
  □ Union: consolidate several monthly CSV files
```

## Deliverables
- .twbx file (workbook packaged with extract)
- Dashboards published on Tableau Server / Cloud
- Documented Tableau Prep Flow (.tfl)
- Usage guide (filters, drill-through, exports)
- Validation tests (source vs dashboard comparison)

## Output format
Specify: **data source** (SQL, Snowflake, Google Sheets, CSV…), **viz type** (operational dashboard, exploratory analysis, embedded analytics), **audience** (analyst vs manager vs end client), **constraints** (real-time vs extract, PDF export, mobile, embedding).
