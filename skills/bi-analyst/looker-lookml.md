# Skill — Looker & LookML (Dashboards, Explores, Data Models)
> Certifications: Looker Business Intelligence & Data Analytics (Google 2024)

## Objective
Model data with LookML and build Looker explores: dimensions, measures, explores, views — for governed self-service BI and analytical dashboards.

## Looker architecture

```
┌────────────────────────────────────────────────────────────────┐
│                    LOOKER PLATFORM                             │
│                                                                 │
│  ┌─────────────────┐    ┌──────────────┐    ┌───────────────┐ │
│  │   LookML Models │    │   Explores   │    │  Dashboards   │ │
│  │  (governed      │    │  (self-serv. │    │  (shared      │ │
│  │   semantic layer│    │   interface) │    │   visuals)    │ │
│  └────────┬────────┘    └──────┬───────┘    └───────┬───────┘ │
│           │                    │                    │          │
│           └────────────────────┴────────────────────┘          │
│                                 │                               │
│                          Generated SQL                          │
└─────────────────────────────────┼───────────────────────────────┘
                                  ↓
                    Data Warehouse (BigQuery, Snowflake,
                    Redshift, Databricks…)
```

## LookML — Project structure

```
models/
├── ecommerce.model.lkml         # Defines the Explores and their joins
views/
├── orders.view.lkml             # Dimensions and measures of the orders table
├── customers.view.lkml          # Customers view
├── products.view.lkml           # Products view
└── order_items.view.lkml        # Items fact table
```

## LookML view — Full example

```lookml
# views/orders.view.lkml
view: orders {
  sql_table_name: `analytics.fact_orders` ;;

  # Primary key (required)
  dimension: order_id {
    primary_key: yes
    type: string
    sql: ${TABLE}.order_id ;;
  }

  # Date dimension (with timeframes)
  dimension_group: created {
    type: time
    timeframes: [raw, date, week, month, quarter, year]
    sql: ${TABLE}.created_at ;;
    datatype: timestamp
  }

  # Calculated dimension
  dimension: order_status_label {
    type: string
    sql: CASE ${TABLE}.status
      WHEN 'pending'   THEN '⏳ Pending'
      WHEN 'confirmed' THEN '✅ Confirmed'
      WHEN 'shipped'   THEN '🚚 Shipped'
      WHEN 'cancelled' THEN '❌ Cancelled'
      ELSE ${TABLE}.status
    END ;;
  }

  # Measures
  measure: count {
    type: count
    label: "Order count"
    drill_fields: [order_id, created_date, order_status_label]
  }

  measure: total_revenue {
    type: sum
    sql: ${TABLE}.net_revenue ;;
    label: "Net revenue (€)"
    value_format_name: eur
  }

  measure: average_order_value {
    type: average
    sql: ${TABLE}.net_revenue ;;
    label: "Average order value (€)"
    value_format_name: eur
  }

  measure: revenue_ytd {
    type: sum
    sql: ${TABLE}.net_revenue ;;
    filters: [created_date: "this year"]
    label: "Revenue YTD (€)"
  }
}
```

## LookML model — Explores and Joins

```lookml
# models/ecommerce.model.lkml
connection: "bigquery_prod"

include: "/views/*.view.lkml"

explore: orders {
  label: "Orders & Revenue"
  description: "Analysis of orders, revenue, customers and products"

  join: customers {
    type: left_outer
    sql_on: ${orders.customer_id} = ${customers.customer_id} ;;
    relationship: many_to_one
  }

  join: order_items {
    type: left_outer
    sql_on: ${orders.order_id} = ${order_items.order_id} ;;
    relationship: one_to_many
  }

  join: products {
    type: left_outer
    sql_on: ${order_items.product_id} = ${products.product_id} ;;
    relationship: many_to_one
  }
}
```

## Looker access control

```lookml
# Row-level filtering via access_filter
explore: orders {
  access_filter: {
    field: customers.region
    user_attribute: region   # Looker user attribute
  }
}

# Column-level with required_access_grants
dimension: salary {
  type: number
  sql: ${TABLE}.salary ;;
  required_access_grants: [can_view_salaries]  # Hidden without this grant
}
```

## Deliverables
- Complete LookML model (views + model + explores)
- Published Looker dashboards
- LookML documentation (descriptions in the code)
- LookML tests (lookml_test for data assertions)
- User self-service guide (how to create a Look)

## Output format
Specify: **data warehouse** (BigQuery, Snowflake, Redshift…), **business domain** (e-commerce, finance, SaaS…), **source tables**, **audience** (technical analyst vs business user), **constraints** (row-level security, multi-tenant, embedding API).
