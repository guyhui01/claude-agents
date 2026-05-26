# Skill — Looker & LookML (Dashboards, Explores, Data Models)
> Certifications : Looker Business Intelligence & Data Analytics (Google 2024)

## Objectif
Modéliser des données avec LookML et construire des explorations Looker : dimensions, mesures, explores, vues — pour un self-service BI gouverné et des dashboards analytiques.

## Architecture Looker

```
┌────────────────────────────────────────────────────────────────┐
│                    LOOKER PLATFORM                             │
│                                                                 │
│  ┌─────────────────┐    ┌──────────────┐    ┌───────────────┐ │
│  │   LookML Models │    │   Explores   │    │  Dashboards   │ │
│  │  (Semantic layer│    │  (interface  │    │  (visuels     │ │
│  │   gouvernée)    │    │   self-serv.)│    │   partagés)   │ │
│  └────────┬────────┘    └──────┬───────┘    └───────┬───────┘ │
│           │                    │                    │          │
│           └────────────────────┴────────────────────┘          │
│                                 │                               │
│                          SQL généré                             │
└─────────────────────────────────┼───────────────────────────────┘
                                  ↓
                    Data Warehouse (BigQuery, Snowflake,
                    Redshift, Databricks…)
```

## LookML — Structure de projet

```
models/
├── ecommerce.model.lkml         # Définit les Explores et leurs joins
views/
├── orders.view.lkml             # Dimensions et mesures de la table orders
├── customers.view.lkml          # Vue clients
├── products.view.lkml           # Vue produits
└── order_items.view.lkml        # Table de faits items
```

## Vue LookML — Exemple complet

```lookml
# views/orders.view.lkml
view: orders {
  sql_table_name: `analytics.fact_orders` ;;

  # Clé primaire (obligatoire)
  dimension: order_id {
    primary_key: yes
    type: string
    sql: ${TABLE}.order_id ;;
  }

  # Dimension date (avec timeframes)
  dimension_group: created {
    type: time
    timeframes: [raw, date, week, month, quarter, year]
    sql: ${TABLE}.created_at ;;
    datatype: timestamp
  }

  # Dimension calculée
  dimension: order_status_label {
    type: string
    sql: CASE ${TABLE}.status
      WHEN 'pending'   THEN '⏳ En attente'
      WHEN 'confirmed' THEN '✅ Confirmée'
      WHEN 'shipped'   THEN '🚚 Expédiée'
      WHEN 'cancelled' THEN '❌ Annulée'
      ELSE ${TABLE}.status
    END ;;
  }

  # Mesures
  measure: count {
    type: count
    label: "Nombre de commandes"
    drill_fields: [order_id, created_date, order_status_label]
  }

  measure: total_revenue {
    type: sum
    sql: ${TABLE}.net_revenue ;;
    label: "CA Net (€)"
    value_format_name: eur
  }

  measure: average_order_value {
    type: average
    sql: ${TABLE}.net_revenue ;;
    label: "Panier moyen (€)"
    value_format_name: eur
  }

  measure: revenue_ytd {
    type: sum
    sql: ${TABLE}.net_revenue ;;
    filters: [created_date: "this year"]
    label: "CA YTD (€)"
  }
}
```

## Model LookML — Explores et Joins

```lookml
# models/ecommerce.model.lkml
connection: "bigquery_prod"

include: "/views/*.view.lkml"

explore: orders {
  label: "Commandes & Revenus"
  description: "Analyse des commandes, revenus, clients et produits"

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

## Access Control Looker

```lookml
# Row-level filtering via access_filter
explore: orders {
  access_filter: {
    field: customers.region
    user_attribute: region   # Attribut utilisateur Looker
  }
}

# Column-level avec required_access_grants
dimension: salary {
  type: number
  sql: ${TABLE}.salary ;;
  required_access_grants: [can_view_salaries]  # Masqué si pas ce grant
}
```

## Livrables
- Modèle LookML complet (views + model + explores)
- Dashboards Looker publiés
- Documentation LookML (descriptions dans le code)
- Tests LookML (lookml_test pour les assertions de données)
- Guide self-service utilisateurs (comment créer un Look)

## Format de sortie
Précise : **data warehouse** (BigQuery, Snowflake, Redshift…), **domaine métier** (e-commerce, finance, SaaS…), **tables sources**, **audience** (analyste technique vs business user), **contraintes** (row-level security, multi-tenant, embedding API).
