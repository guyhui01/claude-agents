# Skill — Architecture Governance (ARB)

> Certifications: TOGAF 10 Foundation & Practitioner, CITA-A (IASA), PMP

## Objective

Set up and run architecture governance: Architecture Review Board (ARB), architecture principles, compliance process, architecture portfolio management and standards evolution.

## Architecture governance setup

```
BODY             FREQUENCY    PARTICIPANTS                    DECISIONS
───────────────  ───────────  ──────────────────────────────  ──────────────────────────
ARB              Monthly      Chief Architect, CIO, Business  Architecture validation
Architecture     Weekly       Solution architects            Review of work in progress
Working Group
Tech Radar       Quarterly    Architects + CTOs              Adopt / Assess / Hold
Exception Board  Ad hoc       ARB + Sponsor                   Deviations from standards
```

## Architecture Review Board (ARB) — Review template

```
ARB REVIEW DOSSIER
──────────────────────────────────────────────────────────────
Submitted project : [Name + project code]
Owner             : [Responsible architect + business sponsor]
Review date       : [ISO 8601]
Project phase     : [Study / PoC / Build / Migration]

SUMMARY (5 lines max)
  [Description of the proposed architecture and its business value]

COMPLIANCE WITH ARCHITECTURE PRINCIPLES
  | Principle          | Compliant? | Comment / Deviation requested     |
  |--------------------|------------|-----------------------------------|
  | API-first          | ✅ Yes     |                                   |
  | Cloud-first        | ⚠ Partial  | On-prem kept for the DB           |
  | Security by design | ✅ Yes     |                                   |
  | Reuse              | ❌ No      | Deviation requested: see §3       |

RISKS AND MITIGATIONS
  - Risk 1: [Description] → Mitigation: [Action]
  - Risk 2: [Description] → Mitigation: [Action]

ARB DECISION
  ☐ Approved without conditions
  ☐ Approved with conditions: [conditions]
  ☐ Rejected: [reason]
  ☐ Returned for additional information
```

## Tech Radar — Quadrants

```
ADOPT ✅         ASSESS 🔍         HOLD ⚠          AVOID ❌
────────────     ──────────────    ─────────────   ─────────────────
Kubernetes       LangGraph         Spring Boot 2   Monolithic ESBs
Terraform        AI Act compliance Java 8          jQuery (front)
Kafka            Wasm              Redis 6         XML SOAP (new proj)
Claude SDK       HTMX              Angular 14      FTP/SFTP (API first)
OpenTelemetry    Deno              Vue 2           Oracle Forms
```

## Governance metrics

```yaml
governance_metrics:
  architecture_compliance:
    formula: "(compliant projects / total projects) × 100"
    target: "> 85%"

  technical_debt:
    formula: "Average SonarQube score of the portfolio"
    target: "< 5% technical debt ratio"

  arb_coverage:
    formula: "(projects reviewed in ARB / significant projects) × 100"
    target: "> 90%"

  average_application_age:
    formula: "Average age of the application portfolio in years"
    target: "< 7 years"
```

## Deliverables

- Architecture governance charter (roles, processes, bodies)
- Architecture principles repository (15-20 principles)
- ARB dossier template (Confluence-importable)
- Tech Radar tailored to the client context
- Governance dashboard (compliance, debt, ARB coverage)

## Output format

Specify: **current governance maturity** (1-5), **IT organization size** (# teams, budget), **sector** (specific regulation), **documentation tools** used (Confluence, SharePoint, EA tools).
