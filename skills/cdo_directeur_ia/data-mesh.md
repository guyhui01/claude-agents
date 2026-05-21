# Skill — Architecture Data Mesh

> Certifications : Google Cloud Professional Data Engineer 2026, AWS Data Analytics Specialty, Databricks Certified Data Engineer Associate, Thoughtworks Data Mesh Practitioner

## Objectif

Concevoir et mettre en oeuvre une architecture Data Mesh en définissant les domaines data, les data products, la self-serve data platform et la gouvernance fédérée, selon les 4 principes fondateurs de Zhamak Dehghani.

## Les 4 principes du Data Mesh

### Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                   DATA MESH PRINCIPLES                  │
├──────────────────┬──────────────────┬───────────────────┤
│ 1. Domain-owned  │ 2. Data as a     │ 3. Self-serve     │
│    Data          │    Product       │    Platform       │
├──────────────────┴──────────────────┴───────────────────┤
│            4. Federated Computational Governance        │
└─────────────────────────────────────────────────────────┘
```

## Principe 1 — Ownership par domaine

### Découpage en domaines data

| Type de domaine | Description | Exemples |
|-----------------|-------------|---------|
| **Source-aligned** | Produit les données à la source | Domaine CRM, Domaine ERP |
| **Aggregate** | Agrège des données multi-domaines | Domaine Customer 360 |
| **Consumer-aligned** | Consomme et expose pour un cas d'usage | Domaine Reporting Finance |

### Modèle de responsabilité par domaine

```yaml
Domaine_Client:
  Domain_Owner: "Directeur Commercial"
  Data_Product_Owner: "Data Steward Senior"
  Domain_Data_Team:
    - Data_Engineer: 1 FTE
    - Data_Analyst: 0.5 FTE (partagé)
  Data_Products:
    - "client_360_profile"
    - "churn_risk_score"
    - "customer_lifetime_value"
  SLA:
    disponibilite: "99.5%"
    fraicheur: "< 4h"
    qualite_score: "> 95%"
```

## Principe 2 — Data as a Product

### Caractéristiques d'un Data Product (8 attributs)

| Attribut | Description | Exemple |
|----------|-------------|---------|
| **Discoverable** | Trouvable dans le catalogue | Référencé dans DataHub avec tags |
| **Addressable** | URL/endpoint stable | `mesh://domaine-client/client_360/v2` |
| **Trustworthy** | SLA qualité défini et mesuré | DQ score > 95%, uptime 99.5% |
| **Self-describing** | Documentation embarquée | Schema + data contract + lineage |
| **Interoperable** | Standards ouverts | Delta format, Arrow, OpenAPI |
| **Natively accessible** | APIs pour tous consommateurs | REST, SQL endpoint, Kafka topic |
| **Valuable** | ROI mesuré | Nb consommateurs, valeur générée |
| **Secure** | RBAC + masquage sensible | Privacera, Column-level security |

### Data Contract — exemple

```yaml
# data_contract_client_360.yaml
dataContractSpecification: "0.9.3"
id: "urn:mesh:domaine-client:client_360:v2"
info:
  title: "Client 360 Profile"
  version: "2.1.0"
  owner: "Domaine Client — data-team@client.corp"
  description: "Vue unifiée du client consolidant CRM, ERP et web analytics"

servers:
  production:
    type: "databricks"
    catalog: "gold"
    schema: "domaine_client"
    table: "client_360_v2"

models:
  client_360:
    fields:
      client_id:
        type: string
        required: true
        unique: true
        pii: false
      email:
        type: string
        pii: true
        classification: "C3-Confidentiel"
      churn_score:
        type: float
        minimum: 0.0
        maximum: 1.0
        description: "Score de risque de churn (modèle ML v3.2)"

quality:
  type: SodaCL
  specification:
    checks for client_360:
      - row_count > 100000
      - missing_count(client_id) = 0
      - duplicate_count(client_id) = 0
      - freshness(updated_at) < 4h

serviceLevel:
  availability: "99.5%"
  retention: "3 years"
  latency:
    description: "Refresh toutes les 4 heures"
```

## Principe 3 — Self-Serve Data Platform

### Architecture de la plateforme

```
┌─────────────────────────────────────────────┐
│         SELF-SERVE DATA PLATFORM            │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Ingestion │  │ Storage  │  │ Compute  │  │
│  │ Airbyte  │  │ Delta    │  │Databricks│  │
│  │ Fivetran │  │ Lake     │  │ Spark    │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │Transform │  │ Catalog  │  │ Govern   │  │
│  │  dbt     │  │ DataHub  │  │ Immuta   │  │
│  │ + tests  │  │ Alation  │  │ Privacera│  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Observ.  │  │ Mesh API │  │  IDP     │  │
│  │Monte     │  │ GraphQL  │  │ Portail  │  │
│  │ Carlo    │  │ Gateway  │  │ Self-svc │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
```

## Principe 4 — Gouvernance fédérée

### Matrice de responsabilités Centrale vs Domaine

| Décision | Central | Domaine |
|----------|---------|---------|
| Standards de format (Delta, Parquet) | DECIDE | APPLIQUE |
| Nommage des Data Products | DECIDE | APPLIQUE |
| SLA minimaux qualité | DECIDE | DEPASSE |
| Schéma interne du produit | CONSULTE | DECIDE |
| Technologies d'implémentation | GUIDE | DECIDE |
| Classification sécurité | DECIDE | APPLIQUE |

## Livrables

- Cartographie des domaines data avec ownership
- Spécification des Data Products prioritaires (Data Contracts)
- Architecture technique de la Self-Serve Platform
- Charte de gouvernance fédérée (règles centrales vs autonomie)
- Plan de migration vers Data Mesh (assessment + roadmap 18 mois)
- Template Data Contract (YAML) réutilisable
- Guide du Data Product Owner (rôles, responsabilités, rituels)

## Format de sortie

Précise : **architecture data actuelle** (monolithique, lakehouse, etc.), **nombre de domaines métier**, **stack technique** (cloud provider, outils data existants), **niveau de maturité data engineering** (1-5), **contraintes réglementaires**, **objectif prioritaire** (réduire couplage / accélérer time-to-value / scalabilité).
