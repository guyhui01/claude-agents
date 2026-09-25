# Skill — Data Mesh Architecture

> Certifications: Google Cloud Professional Data Engineer 2026, AWS Data Analytics Specialty, Databricks Certified Data Engineer Associate, Thoughtworks Data Mesh Practitioner

## Objective

Design and implement a Data Mesh architecture by defining the data domains, the data products, the self-serve data platform, and the federated governance, following Zhamak Dehghani's 4 founding principles.

## The 4 Data Mesh principles

### Overview

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

## Principle 1 — Domain ownership

### Splitting into data domains

| Domain type | Description | Examples |
|-----------------|-------------|---------|
| **Source-aligned** | Produces data at the source | CRM Domain, ERP Domain |
| **Aggregate** | Aggregates multi-domain data | Customer 360 Domain |
| **Consumer-aligned** | Consumes and exposes for a use case | Finance Reporting Domain |

### Responsibility model per domain

```yaml
Customer_Domain:
  Domain_Owner: "Sales Director"
  Data_Product_Owner: "Senior Data Steward"
  Domain_Data_Team:
    - Data_Engineer: 1 FTE
    - Data_Analyst: 0.5 FTE (shared)
  Data_Products:
    - "customer_360_profile"
    - "churn_risk_score"
    - "customer_lifetime_value"
  SLA:
    availability: "99.5%"
    freshness: "< 4h"
    quality_score: "> 95%"
```

## Principle 2 — Data as a Product

### Characteristics of a Data Product (8 attributes)

| Attribute | Description | Example |
|----------|-------------|---------|
| **Discoverable** | Findable in the catalog | Referenced in DataHub with tags |
| **Addressable** | Stable URL/endpoint | `mesh://customer-domain/customer_360/v2` |
| **Trustworthy** | Defined and measured quality SLA | DQ score > 95%, uptime 99.5% |
| **Self-describing** | Embedded documentation | Schema + data contract + lineage |
| **Interoperable** | Open standards | Delta format, Arrow, OpenAPI |
| **Natively accessible** | APIs for all consumers | REST, SQL endpoint, Kafka topic |
| **Valuable** | Measured ROI | # consumers, value generated |
| **Secure** | RBAC + sensitive masking | Privacera, Column-level security |

### Data Contract — example

```yaml
# data_contract_customer_360.yaml
dataContractSpecification: "0.9.3"
id: "urn:mesh:customer-domain:customer_360:v2"
info:
  title: "Customer 360 Profile"
  version: "2.1.0"
  owner: "Customer Domain — data-team@client.corp"
  description: "Unified customer view consolidating CRM, ERP, and web analytics"

servers:
  production:
    type: "databricks"
    catalog: "gold"
    schema: "customer_domain"
    table: "customer_360_v2"

models:
  customer_360:
    fields:
      customer_id:
        type: string
        required: true
        unique: true
        pii: false
      email:
        type: string
        pii: true
        classification: "C3-Confidential"
      churn_score:
        type: float
        minimum: 0.0
        maximum: 1.0
        description: "Churn risk score (ML model v3.2)"

quality:
  type: SodaCL
  specification:
    checks for customer_360:
      - row_count > 100000
      - missing_count(customer_id) = 0
      - duplicate_count(customer_id) = 0
      - freshness(updated_at) < 4h

serviceLevel:
  availability: "99.5%"
  retention: "3 years"
  latency:
    description: "Refresh every 4 hours"
```

## Principle 3 — Self-Serve Data Platform

### Platform architecture

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
│  │Monte     │  │ GraphQL  │  │ Portal   │  │
│  │ Carlo    │  │ Gateway  │  │ Self-svc │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
```

## Principle 4 — Federated governance

### Central vs Domain responsibility matrix

| Decision | Central | Domain |
|----------|---------|---------|
| Format standards (Delta, Parquet) | DECIDES | APPLIES |
| Data Product naming | DECIDES | APPLIES |
| Minimum quality SLAs | DECIDES | EXCEEDS |
| Product internal schema | CONSULTED | DECIDES |
| Implementation technologies | GUIDES | DECIDES |
| Security classification | DECIDES | APPLIES |

## Deliverables

- Data-domain mapping with ownership
- Specification of priority Data Products (Data Contracts)
- Technical architecture of the Self-Serve Platform
- Federated governance charter (central rules vs autonomy)
- Migration plan to Data Mesh (assessment + 18-month roadmap)
- Reusable Data Contract template (YAML)
- Data Product Owner guide (roles, responsibilities, rituals)

## Output format

Specify: **current data architecture** (monolithic, lakehouse, etc.), **number of business domains**, **technical stack** (cloud provider, existing data tools), **data-engineering maturity level** (1-5), **regulatory constraints**, **priority objective** (reduce coupling / accelerate time-to-value / scalability).
