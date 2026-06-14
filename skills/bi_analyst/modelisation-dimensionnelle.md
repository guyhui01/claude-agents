# Skill — Dimensional Modeling (Star, Snowflake, Data Vault)
> Certifications: PL-300 Microsoft · DP-600 Microsoft Fabric · Databricks Certified Data Analyst Associate

## Objective
Design the data model of a data warehouse or lakehouse: star schema, snowflake or Data Vault 2.0 — to optimize analytical performance and maintainability.

## Model comparison

```
MODEL           STRUCTURE                      PROS                        CONS                 BEST FOR
──────────────  ─────────────────────────────  ──────────────────────────  ───────────────────  ────────────────────────
Star Schema     1 fact table                   Fast queries, simple        Data redundancy      Operational reporting
                N dimension tables             Easy to understand          Higher storage       Power BI, Tableau
                Direct relationships           Optimized for BI tools

Snowflake       Normalized dimensions          Less redundancy             More complex queries Classic data warehouse
                Decomposed hierarchies         Data integrity              Many joins           Storage constraints

Data Vault 2.0  Hub + Link + Satellite         Full historization          Complex to query     Auditability, compliance
                Maximum flexibility            Extensibility               Reporting layer req. Finance, banking, health

One Big Table   Total denormalization          Ultra-fast queries          Hard to maintain     ML features, ad hoc
(OBT)           1 single wide table            No joins                    Colossal size        analysis in lakehouse
```

## Star schema — E-Commerce example

```sql
-- FACT TABLE: Orders
CREATE TABLE fact_orders (
    order_key           BIGINT        PRIMARY KEY,  -- Surrogate key
    order_date_key      INT           NOT NULL,     -- FK → dim_date
    customer_key        INT           NOT NULL,     -- FK → dim_customer
    product_key         INT           NOT NULL,     -- FK → dim_product
    geography_key       INT           NOT NULL,     -- FK → dim_geography
    channel_key         INT           NOT NULL,     -- FK → dim_channel

    -- Measures
    quantity            INT           NOT NULL,
    unit_price          DECIMAL(10,2) NOT NULL,
    discount_amount     DECIMAL(10,2) DEFAULT 0,
    gross_revenue       DECIMAL(12,2) NOT NULL,     -- quantity × unit_price
    net_revenue         DECIMAL(12,2) NOT NULL,     -- gross - discount
    cost_of_goods       DECIMAL(12,2),
    gross_margin        DECIMAL(12,2),

    -- ETL metadata
    etl_created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    source_system       VARCHAR(50)
);

-- DIMENSION: Date (most-used dimension)
CREATE TABLE dim_date (
    date_key            INT           PRIMARY KEY,  -- YYYYMMDD
    full_date           DATE          NOT NULL,
    year                SMALLINT,
    quarter             SMALLINT,
    month               SMALLINT,
    month_name          VARCHAR(10),
    week_of_year        SMALLINT,
    day_of_week         SMALLINT,
    day_name            VARCHAR(10),
    is_weekend          BOOLEAN,
    is_holiday          BOOLEAN,
    fiscal_year         SMALLINT,
    fiscal_quarter      SMALLINT
);

-- DIMENSION: Customer (SCD Type 2)
CREATE TABLE dim_customer (
    customer_key        INT           PRIMARY KEY,  -- Surrogate key
    customer_id         VARCHAR(50)   NOT NULL,     -- Business key
    customer_name       VARCHAR(200),
    email               VARCHAR(200),
    segment             VARCHAR(50),
    country             VARCHAR(50),
    city                VARCHAR(100),

    -- SCD Type 2: change historization
    effective_date      DATE          NOT NULL,
    expiry_date         DATE,
    is_current          BOOLEAN       DEFAULT TRUE
);
```

## Slowly Changing Dimensions (SCD)

```
TYPE    BEHAVIOR                  EXAMPLE              WHEN TO USE
──────  ────────────────────────  ───────────────────  ─────────────────────────────────
SCD 0   No change                Product code          Attributes never modified

SCD 1   Overwrite                Email address         No history needed
                                 correction            Error correction

SCD 2   New row                  Customer segment      History required (e.g. customer
        (is_current + dates)     change                upgrading to VIP)

SCD 3   "Previous" column        Former region /       Simple change, 1 version of
                                 current region        history max

SCD 4   Separate history         product table +       Large volume, SCD2 too heavy
        table                    product_hist table

SCD 6   Combo 1+2+3              Complete              When you need everything
```

## Fact table grain

```
PRINCIPLE: Define the grain BEFORE creating the table
The grain = 1 row = 1 [what] per [who] per [when]

GRAIN EXAMPLES:
  "1 row = 1 ordered item"               → fact_order_lines
  "1 row = 1 web session"                → fact_web_sessions
  "1 row = 1 bank transaction"           → fact_transactions
  "1 row = 1 phone call"                 → fact_calls
  "1 row = 1 sale per store per day"     → fact_daily_store_sales

⚠️ Grain too aggregated → loses analytical flexibility
⚠️ Grain too fine → degraded performance, excessive storage
```

## Deliverables
- Dimensional model (annotated ERD)
- SQL DDL (fact + dimension tables)
- Data dictionary (definitions, types, rules)
- Grain documentation (per fact table)
- SCD strategy per dimension
- Load plan (order, frequency, delta/full)

## Output format
Specify: **business domain** (e-commerce, finance, HR, marketing…), **source system** (ERP, CRM, web app…), **target BI tool** (Power BI, Tableau, Looker…), **estimated volume** (rows/day), **constraints** (historization, compliance, real-time or batch).
