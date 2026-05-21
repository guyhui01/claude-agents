# Skill — Data Warehouse & Modélisation des Données
> Certifications : Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objectif
Concevoir et implémenter des entrepôts de données performants avec une modélisation adaptée aux besoins analytiques.

## Architectures Data Warehouse 2026

### Lakehouse (standard dominant)
```
Bronze Layer (Raw)    → Données brutes, immuables
Silver Layer (Clean)  → Données nettoyées, typées
Gold Layer (Business) → Agrégats, KPIs, tables de rapport
```

### Plateformes cloud
| Plateforme | Cloud | Avantages | Idéal pour |
|---|---|---|---|
| **BigQuery** | Google | Serverless, SQL puissant | Analyses ad hoc, ML intégré |
| **Snowflake** | Multi-cloud | Isolation compute/storage | Partage de données |
| **Databricks** | Multi-cloud | Lakehouse, Spark + ML | Data + IA unifié |
| **Redshift** | AWS | Intégration AWS | Ecosystème AWS |
| **Synapse** | Azure | Intégration Microsoft | Ecosystème Azure |

## Modélisation dimensionnelle (Ralph Kimball)

### Schéma en étoile
```sql
-- Table de faits (mesures)
CREATE TABLE fact_ventes (
    vente_id        BIGINT PRIMARY KEY,
    date_id         INT REFERENCES dim_date(date_id),
    client_id       INT REFERENCES dim_client(client_id),
    produit_id      INT REFERENCES dim_produit(produit_id),
    montant         DECIMAL(10,2),
    quantite        INT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table de dimension (contexte)
CREATE TABLE dim_client (
    client_id       INT PRIMARY KEY,
    nom             VARCHAR(100),
    segment         VARCHAR(50),
    ville           VARCHAR(100),
    date_creation   DATE,
    is_active       BOOLEAN
);
```

### Slowly Changing Dimensions (SCD)
```sql
-- SCD Type 2 : historiser les changements
CREATE TABLE dim_client_scd2 (
    client_sk       BIGINT PRIMARY KEY,  -- Surrogate key
    client_id       INT,                 -- Natural key
    nom             VARCHAR(100),
    segment         VARCHAR(50),
    valid_from      DATE,
    valid_to        DATE,
    is_current      BOOLEAN
);
-- Quand un client change de segment : fermer l'ancienne ligne,
-- créer une nouvelle avec les nouvelles valeurs
```

## dbt — transformation SQL moderne
```sql
-- models/silver/stg_clients.sql
{{ config(materialized='view') }}

SELECT
    client_id,
    UPPER(TRIM(nom))              AS nom,
    LOWER(TRIM(email))            AS email,
    COALESCE(segment, 'Unknown')  AS segment,
    created_at::DATE              AS date_creation
FROM {{ source('raw', 'clients') }}
WHERE email IS NOT NULL

-- models/gold/mart_churn.sql
{{ config(materialized='table', cluster_by=['segment']) }}

SELECT
    c.client_id,
    c.segment,
    COUNT(v.vente_id)          AS nb_achats,
    SUM(v.montant)             AS ca_total,
    MAX(v.created_at)          AS dernier_achat,
    CURRENT_DATE - MAX(v.created_at)::DATE AS jours_inactif
FROM {{ ref('stg_clients') }} c
LEFT JOIN {{ ref('stg_ventes') }} v USING (client_id)
GROUP BY 1, 2
```

## Tests dbt
```yaml
# schema.yml
models:
  - name: mart_churn
    columns:
      - name: client_id
        tests:
          - not_null
          - unique
      - name: segment
        tests:
          - accepted_values:
              values: ['Gold', 'Silver', 'Bronze', 'Unknown']
```

## Livrables
- Schéma de données documenté (ERD)
- Modèles dbt avec tests et documentation
- Data dictionary (glossaire des métriques)
- Rapport de performance des requêtes

## Format de sortie
Précise : plateforme cloud · sources de données · granularité (fait élémentaire) · historique requis · SLA de fraîcheur · équipe cible (analytics, ML, BI)
