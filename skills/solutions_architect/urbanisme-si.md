# Skill — IS Urbanization and Application Mapping

> Certifications: TOGAF 10 Foundation & Practitioner, CITA-A (IASA), ArchiMate 3 Practitioner

## Objective

Map the existing IS, identify redundancies and gaps, define the target urbanization plan and produce the architecture views needed for investment decisions.

## Urbanization model — The 3 views

```
BUSINESS VIEW (What?)        FUNCTIONAL VIEW (How?)            TECHNICAL VIEW (With what?)
────────────────────         ──────────────────────────────    ──────────────────────────────
Business processes           Applications and modules          Infrastructure and platforms
Functional domains           Data flows and exchanges          Networks and security
Actors and roles             Interfaces and APIs               Cloud and data centers
Business events              Business rules                    DevOps and monitoring tools
```

## Application mapping — Template

```
APPLICATION REPOSITORY
──────────────────────────────────────────────────────────────────────
| Application | Domain   | Criticality | Tech      | Obsolescence | Strat.  |
|-------------|----------|-------------|-----------|--------------|---------|
| SAP ERP     | Finance  | Critical    | ABAP/Java | 2028         | Retain  |
| Salesf. CRM | Sales    | Major       | SaaS      | N/A          | Retain  |
| Legacy app  | HR       | Secondary   | .NET 4.0  | Immediate    | Retire  |
| API Gateway | Cross    | Critical    | Kong      | 2027         | Retain  |
| DWH         | Data     | Major       | Oracle    | 2026         | Refactor|
```

## Urbanization maturity levels (scoring 1-5)

```
LEVEL    DESCRIPTION
───────  ───────────────────────────────────────────────────────────────────
1        No formal mapping — opaque IS, empirical decisions
2        Basic application inventory (Excel) — no architecture views
3        Formalized mapping (ArchiMate/BPMN) — views available but not maintained
4        Actively managed urbanization — annual review, principles respected
5        Urbanization integrated into IT decisions — active ARB, measured compliance
```

## IS urbanization plan — Structure

```
1. AS-IS DIAGNOSTIC
   → Application inventory (name, domain, tech, age, cost)
   → Mapping of flows and integrations
   → Identification of functional redundancies
   → Fragility zones and estimated technical debt

2. TO-BE VISION
   → Target functional domains (aligned with the business model)
   → Target applications and platforms
   → Target integrations (API-first, EDA)
   → IS master plan (3-5 year horizon)

3. TRANSFORMATION ROADMAP
   → Rationalization (applications to decommission)
   → Modernization (applications to refactor)
   → Innovation (new capabilities to build)
   → Prioritization by ROI × risk × business value
```

## Deliverables

- Application repository (full mapping with scoring)
- As-Is view of the IS (ArchiMate or structured diagram)
- To-Be view of the target IS
- IS master plan (3-5 year roadmap)
- Summary note for leadership (1 page)

## Output format

Specify: **scope** (business domain or full IS), **estimated number of applications**, **desired depth** (inventory / full mapping / master plan), **audience** (CIO / leadership / IT teams).
