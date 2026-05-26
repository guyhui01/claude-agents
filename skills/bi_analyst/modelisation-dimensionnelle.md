# Skill — Modélisation Dimensionnelle (Étoile, Flocon, Data Vault)
> Certifications : PL-300 Microsoft · DP-600 Microsoft Fabric · Databricks Certified Data Analyst Associate

## Objectif
Concevoir le modèle de données d'un datawarehouse ou lakehouse : schéma en étoile, flocon de neige ou Data Vault 2.0 — pour optimiser les performances analytiques et la maintenabilité.

## Comparatif des modèles

```
MODÈLE          STRUCTURE                      AVANTAGES                   INCONVÉNIENTS        IDÉAL POUR
──────────────  ─────────────────────────────  ──────────────────────────  ───────────────────  ────────────────────────
Étoile          1 table de faits               Requêtes rapides, simple    Redondance données   Reporting opérationnel
(Star Schema)   N tables de dimensions         Facile à comprendre         Stockage supérieur   Power BI, Tableau
                Relations directes             Optimisé BI tools

Flocon          Dimensions normalisées         Moins de redondance         Requêtes + complexes Data Warehouse classique
(Snowflake)     Hiérarchies décomposées        Intégrité données           Joins nombreux       Contraintes stockage

Data Vault 2.0  Hub + Link + Satellite         Historisation complète      Complexe à requêter  Auditabilité, compliance
                Flexibilité maximale           Evolutivité                 Couche reporting req.  Finance, banque, santé

One Big Table   Dénormalisation totale         Requêtes ultra-rapides      Maintenance difficile  ML features, analyses
(OBT)           1 seule table large            Pas de joins                Taille colossale     ad hoc en lakehouse
```

## Schéma en étoile — Exemple E-Commerce

```sql
-- TABLE DE FAITS : Commandes
CREATE TABLE fact_orders (
    order_key           BIGINT        PRIMARY KEY,  -- Surrogate key
    order_date_key      INT           NOT NULL,     -- FK → dim_date
    customer_key        INT           NOT NULL,     -- FK → dim_customer
    product_key         INT           NOT NULL,     -- FK → dim_product
    geography_key       INT           NOT NULL,     -- FK → dim_geography
    channel_key         INT           NOT NULL,     -- FK → dim_channel

    -- Mesures
    quantity            INT           NOT NULL,
    unit_price          DECIMAL(10,2) NOT NULL,
    discount_amount     DECIMAL(10,2) DEFAULT 0,
    gross_revenue       DECIMAL(12,2) NOT NULL,     -- quantity × unit_price
    net_revenue         DECIMAL(12,2) NOT NULL,     -- gross - discount
    cost_of_goods       DECIMAL(12,2),
    gross_margin        DECIMAL(12,2),

    -- Métadonnées ETL
    etl_created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    source_system       VARCHAR(50)
);

-- DIMENSION : Date (dimension la plus utilisée)
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

-- DIMENSION : Client (SCD Type 2)
CREATE TABLE dim_customer (
    customer_key        INT           PRIMARY KEY,  -- Surrogate key
    customer_id         VARCHAR(50)   NOT NULL,     -- Business key
    customer_name       VARCHAR(200),
    email               VARCHAR(200),
    segment             VARCHAR(50),
    country             VARCHAR(50),
    city                VARCHAR(100),

    -- SCD Type 2 : historisation des changements
    effective_date      DATE          NOT NULL,
    expiry_date         DATE,
    is_current          BOOLEAN       DEFAULT TRUE
);
```

## Slowly Changing Dimensions (SCD)

```
TYPE    COMPORTEMENT              EXEMPLE              QUAND L'UTILISER
──────  ────────────────────────  ───────────────────  ─────────────────────────────────
SCD 0   Pas de changement        Code produit          Attributs jamais modifiés

SCD 1   Écrasement (overwrite)   Correction adresse   Pas besoin d'historique
                                 email                 Correction d'erreur

SCD 2   Nouvelle ligne           Changement de         Historique requis (ex: client
        (est_courant + dates)    segment client        qui monte en VIP)

SCD 3   Colonne "précédente"     Region ancienne /     Changement simple, 1 version
                                 Region actuelle       historique max

SCD 4   Table historique         Table produit +       Gros volume, SCD2 trop lourd
        séparée                  table_produit_hist

SCD 6   Combo 1+2+3              Complet               Besoin de tout
```

## Grain de la table de faits

```
PRINCIPE : Définir le grain AVANT de créer la table
Le grain = 1 ligne = 1 [quoi] par [qui] par [quand]

EXEMPLES DE GRAINS :
  "1 ligne = 1 article commandé"           → fact_order_lines
  "1 ligne = 1 session web"               → fact_web_sessions
  "1 ligne = 1 transaction bancaire"      → fact_transactions
  "1 ligne = 1 appel téléphonique"        → fact_calls
  "1 ligne = 1 vente par magasin par jour" → fact_daily_store_sales

⚠️ Grain trop agrégé → perd de la flexibilité analytique
⚠️ Grain trop fin → performances dégradées, stockage excessif
```

## Livrables
- Modèle dimensionnel (schéma ERD annoté)
- DDL SQL (tables de faits + dimensions)
- Dictionnaire de données (définitions, types, règles)
- Documentation du grain (par table de faits)
- Stratégie SCD par dimension
- Plan de chargement (ordre, fréquence, delta/full)

## Format de sortie
Précise : **domaine métier** (e-commerce, finance, RH, marketing…), **système source** (ERP, CRM, app web…), **outil BI cible** (Power BI, Tableau, Looker…), **volume estimé** (lignes/jour), **contraintes** (historisation, compliance, temps réel ou batch).
