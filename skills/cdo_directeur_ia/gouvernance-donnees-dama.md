# Skill — Data Governance (DAMA DMBOK v2)

> Certifications: CDMP Associate/Practitioner (DAMA International) 2026, Data Governance Professional (DGSP), ISO/IEC 38505 Data Governance

## Objective

Design and roll out a data governance program aligned with the DAMA DMBOK v2 framework, covering the 11 disciplines, the stewardship model, and maturity assessment.

## The 11 DAMA DMBOK v2 disciplines

### DAMA wheel — Overview

```
                    [Data Governance]
                        (Center)
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
[Data Architecture]  [Data Modeling]  [Data Storage & Ops]
[Data Security]      [Data Integration]  [Document & Content]
[Reference & Master Data]  [Data Warehousing & BI]
[Metadata Management]  [Data Quality]
```

### Disciplines table by deployment priority

| Priority | Discipline | Key deliverables | 2026 tools |
|----------|-----------|----------------|-------------|
| 1 | Data Governance | Charter, RACI, policies | Collibra, Atlan |
| 2 | Data Quality | DQ Rules, scorecards | Great Expectations, Soda |
| 3 | Metadata Management | Data Catalog | DataHub, Alation |
| 4 | Reference & Master Data | MDM Hub, Golden Record | Informatica MDM, Reltio |
| 5 | Data Security | Classification, masking | Privacera, Immuta |
| 6 | Data Architecture | Blueprints, logical models | dbt, Erwin |

## Governance operating model

### Stewardship structure

```yaml
Governance_levels:
  Strategic:
    body: "Data Governance Council (DGC)"
    members: ["CDO", "CIO", "CEO", "DPO", "Business Heads"]
    frequency: "Quarterly"
    missions: ["Global policy", "Trade-offs", "Budget"]

  Tactical:
    body: "Data Stewardship Committee"
    members: ["Data Stewards by domain", "Data Architects", "Data Quality Manager"]
    frequency: "Monthly"
    missions: ["Standards", "Conflict resolution", "Quality KPIs"]

  Operational:
    body: "Data Stewards network"
    members: ["1 Data Steward per business domain"]
    frequency: "Continuous"
    missions: ["Data validation", "Business definition", "Quality incidents"]
```

### Typical RACI for data governance

| Activity | CDO | Data Steward | Data Owner | Data Engineer | DPO |
|----------|-----|-------------|------------|---------------|-----|
| Define data policy | A | C | C | I | C |
| Validate business definitions | I | R | A | I | I |
| Manage quality incidents | I | R | A | R | I |
| Classify sensitive data | C | R | I | I | A |
| Publish to the catalog | I | R | C | R | I |

**R=Responsible, A=Accountable, C=Consulted, I=Informed**

### DMM maturity model (CMMI for Data Management)

| Level | Score | Description | Indicators |
|--------|-------|-------------|-------------|
| 1 — Initial | 0-1 | Ad hoc, reactive | No formal policies |
| 2 — Managed | 1-2 | Local practices | A few stewards appointed |
| 3 — Defined | 2-3 | Standardized processes | Catalog populated, DQ measured |
| 4 — Measured | 3-4 | Metrics-driven | Data SLAs, dashboard |
| 5 — Optimized | 4-5 | Continuous improvement | AI serving governance |

## Implementation: 12-month deployment plan

```
Months 1-3   : DMM diagnostic + organizational design
Months 4-6   : Appoint Data Owners/Stewards + governance charter
Months 7-9   : Deploy data catalog + first DQ rules
Months 10-12 : Pilot MDM (customer domain) + governance dashboard
```

### Data quality policy — example

```python
# Great Expectations — example DQ rule suite
import great_expectations as gx

context = gx.get_context()
suite = context.add_expectation_suite("customers_golden_record")

# Completeness
suite.add_expectation(gx.expectations.ExpectColumnValuesToNotBeNull(
    column="customer_id", meta={"criticality": "BLOCKING"}))

# Uniqueness
suite.add_expectation(gx.expectations.ExpectColumnValuesToBeUnique(
    column="siret", meta={"criticality": "BLOCKING"}))

# Format
suite.add_expectation(gx.expectations.ExpectColumnValuesToMatchRegex(
    column="email", regex=r"^[\w.-]+@[\w.-]+\.\w{2,}$"))

# Freshness
suite.add_expectation(gx.expectations.ExpectColumnValuesToBeBetween(
    column="last_update", min_value="2024-01-01",
    meta={"criticality": "MAJOR"}))
```

## Deliverables

- Data governance charter (policy + principles)
- Governance org chart with Data Owner / Steward role sheets
- Data-domain mapping with owners
- Business glossary (populated data catalog — 100 terms minimum)
- Data quality framework (dimensions, rules, SLAs)
- Governance dashboard (DAMA metrics per discipline)
- 12-month deployment plan with milestones and resources

## Output format

Specify: **organizational scope** (all domains or a pilot domain), **sector** (applicable regulations: GDPR, financial sector, health), **existing data tools** (catalog, MDM, quality), **number of business domains**, **current maturity level** (1-5 DMM), **budget allocated to governance**.
