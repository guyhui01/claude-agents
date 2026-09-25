# Skill — BI Governance (Semantic Layer, RLS, Certification, Lineage)
> Certifications: PL-300 Microsoft · DP-600 Microsoft Fabric · Databricks Certified Data Analyst Associate

## Objective
Set up the governance of a BI platform: shared semantic layer, row-level security, dataset certification, data lineage — to guarantee trust, security and consistency of analyses.

## Pillars of BI governance

```
PILLAR                  OBJECTIVE                           TOOLS
──────────────────────  ──────────────────────────────────  ────────────────────────────
Semantic Layer          1 shared definition per metric      Certified Power BI Datasets
                        Eliminates figure discrepancies      Looker (LookML), dbt metrics

Row Level Security      Each user sees their own data       Power BI RLS / OLS
(RLS)                   without a per-person report         Fabric row filter policies

Certification           Distinguish trusted data            Power BI Endorsed datasets
                        from unvalidated explorations       (Promoted / Certified)

Lineage                 Trace each data point's origin      Power BI Impact Analysis
                        and the impact of changes           dbt lineage, Fabric lineage

Glossary / Catalog      Official definitions                Microsoft Purview
                        of business terms                   dbt docs, Power BI descriptions
```

## Semantic Layer — Power BI strategy

```
WITHOUT A SEMANTIC LAYER:
  Report A ── [Revenue measure defined locally]
  Report B ── [Revenue measure defined differently]
  → 2 different figures at the leadership meeting 🔴

WITH A SEMANTIC LAYER (shared certified Dataset):
  Dataset "Official Finance" (certified ✅)
     ↓              ↓              ↓
  Report A       Report B       Report C
  (all use the same Revenue measure)
  → a single figure everywhere 🟢
```

## Row Level Security — Power BI implementation

```dax
// Hierarchical security model
// Table: security_mapping (manager_email, subordinate_email)

// "Manager" role — sees their team + their own data
[employee_email] IN
CALCULATETABLE(
    UNION(
        -- Their own data
        ROW("email", USERPRINCIPALNAME()),
        -- Their direct and indirect subordinates' data
        SELECTCOLUMNS(
            FILTER(security_mapping, security_mapping[manager_email] = USERPRINCIPALNAME()),
            "email", security_mapping[subordinate_email]
        )
    )
)

// "Region" role — simplified
dim_geography[region_manager] = USERPRINCIPALNAME()
```

## Object Level Security (OLS) — Fabric / Power BI Premium

```json
// Hide a column based on role (e.g. salaries visible only to HR)
{
  "name": "Salary",
  "objectLevelSecurity": {
    "table": "dim_employee",
    "column": "salary",
    "permission": "none"  // hidden for everyone except the "HR" role
  }
}
```

## Dataset certification process

```
STEP 1 — PROMOTION (validated self-service)
  • Dataset used by > 10 people
  • Owner identified and active
  • Refresh scheduled and operational
  → Status: "Promoted" ⭐

STEP 2 — CERTIFICATION (official data)
  Criteria to validate:
  □ Metric definitions documented (catalog)
  □ Quality tests passing (dbt tests or manual validation)
  □ Validated by the Business Owner (CEO, CFO, CHRO…)
  □ Refresh SLA defined and met
  □ RLS configured and tested
  □ Impact analysis performed (number of dependent reports)
  → Status: "Certified" ✅
  → Flagged to users as the source of truth
```

## Data Lineage — Impact analysis

```
TYPICAL USE:
"I'm going to change the `stg_orders` table in dbt — which reports will be impacted?"

POWER BI SERVICE:
  Workspace → Dataset → Lineage view
  → Visually shows: Source → Dataset → Reports → Dashboards

DBT:
  $ dbt docs generate && dbt docs serve
  → Interactive DAG: sources → models → exposures (BI reports)

MICROSOFT PURVIEW:
  → End-to-end lineage: Azure Data Factory → Synapse → Power BI
```

## Deliverables
- Semantic layer architecture (shared datasets diagram)
- RLS + OLS configuration (scripts + documentation)
- Certification process (criteria + approval workflow)
- Lineage map (from source to final report)
- BI governance policy (reference document)
- Power BI / Fabric administrator training (guide)

## Output format
Specify: **platform** (Power BI Pro / Premium / Fabric, Tableau, Looker…), **size** (number of users, datasets, reports), **main problem** (contradictory figures? uncontrolled access? no traceability?), **constraints** (SOX, ISO 27001, GDPR compliance…).
