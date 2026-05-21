# Skill — dbt (data build tool) & Transformations SQL
> Certifications : dbt Developer Certification · Databricks Data Engineer Associate

## Objectif
Industrialiser les transformations SQL avec dbt pour garantir la qualité, la documentation et la reproductibilité des modèles analytiques.

## Structure d'un projet dbt
```
my_dbt_project/
├── dbt_project.yml      # Configuration globale
├── profiles.yml         # Connexions aux DWH
├── models/
│   ├── staging/         # Couche bronze → silver (sources)
│   │   ├── stg_clients.sql
│   │   └── schema.yml
│   ├── intermediate/    # Transformations complexes
│   └── marts/           # Couche gold (tables de rapport)
│       ├── finance/
│       └── marketing/
├── tests/               # Tests custom
├── macros/              # Fonctions SQL réutilisables
├── seeds/               # Fichiers CSV de référence
└── snapshots/           # SCD Type 2
```

## Modèles dbt — exemples
```sql
-- models/staging/stg_clients.sql
{{ config(materialized='view', schema='staging') }}

WITH source AS (
    SELECT * FROM {{ source('salesforce', 'contacts') }}
),

renamed AS (
    SELECT
        id                          AS client_id,
        UPPER(TRIM(firstname))      AS prenom,
        UPPER(TRIM(lastname))       AS nom,
        LOWER(TRIM(email))          AS email,
        created_date::DATE          AS date_creation,
        _airbyte_extracted_at       AS ingested_at
    FROM source
    WHERE email IS NOT NULL
)

SELECT * FROM renamed


-- models/marts/marketing/mart_client_360.sql
{{ config(materialized='table', cluster_by=['segment']) }}

WITH clients AS (
    SELECT * FROM {{ ref('stg_clients') }}
),
ventes AS (
    SELECT * FROM {{ ref('stg_ventes') }}
),
aggregated AS (
    SELECT
        c.client_id,
        c.prenom,
        c.nom,
        c.segment,
        COUNT(v.vente_id)               AS nb_achats,
        SUM(v.montant)                  AS ca_total,
        AVG(v.montant)                  AS panier_moyen,
        MAX(v.date_vente)               AS derniere_commande,
        CURRENT_DATE - MAX(v.date_vente) AS jours_inactif
    FROM clients c
    LEFT JOIN ventes v USING (client_id)
    GROUP BY 1, 2, 3, 4
)

SELECT * FROM aggregated
```

## Macros dbt — réutilisation SQL
```sql
-- macros/cents_to_euros.sql
{% macro cents_to_euros(column_name) %}
    ROUND({{ column_name }} / 100.0, 2)
{% endmacro %}

-- Usage dans un modèle :
{{ cents_to_euros('amount_cents') }} AS montant_euros
```

## Snapshots dbt — SCD Type 2 automatique
```sql
-- snapshots/clients_snapshot.sql
{% snapshot clients_snapshot %}

{{
    config(
        target_schema='snapshots',
        unique_key='client_id',
        strategy='timestamp',
        updated_at='updated_at'
    )
}}

SELECT * FROM {{ source('crm', 'clients') }}

{% endsnapshot %}
```

## Commandes dbt essentielles
```bash
dbt run                    # Exécuter tous les modèles
dbt run --select marts.*   # Exécuter un sous-ensemble
dbt test                   # Lancer les tests
dbt docs generate          # Générer la documentation
dbt docs serve             # Lancer le serveur de doc
dbt source freshness       # Vérifier la fraîcheur des sources
dbt build                  # run + test en une commande
```

## Livrables
- Projet dbt structuré (staging / marts)
- Tests de données couvrant 100% des colonnes critiques
- Documentation dbt (lineage graph, descriptions)
- CI/CD pipeline (GitHub Actions + dbt Cloud)

## Format de sortie
Précise : DWH cible (BigQuery, Snowflake, Databricks) · sources disponibles · couches à construire · métriques business clés · fréquence de refresh
