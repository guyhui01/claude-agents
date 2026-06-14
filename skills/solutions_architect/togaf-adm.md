# Skill — TOGAF ADM Enterprise Architecture

> Certifications: TOGAF 10 Foundation & Practitioner (The Open Group), CITA-A (IASA)

## Objective

Run a full or partial TOGAF Architecture Development Method (ADM) cycle: from the architecture vision through implementation governance — to define the target architecture of an IS or a business domain.

## The 9 phases of the ADM cycle

```
PHASE          NAME                             KEY DELIVERABLE
─────────────  ──────────────────────────────   ──────────────────────────────────
Preliminary    Framework and principles         Architecture principles, governance framework
A              Architecture Vision               Statement of Architecture Work, Architecture Vision
B              Business Architecture             Business Architecture (current + target)
C              Information Systems (Apps + Data)  Information systems architecture
D              Technology Architecture           Technology architecture
E              Opportunities and solutions       Migration plan, work package list
F              Migration Planning                Architecture roadmap, implementation plan
G              Implementation Governance         Compliance and progress reporting
H              Change Management                 Architecture update
Requirements   Requirements Management          Requirements traceability (cross-cutting)
Management
```

## Architecture Vision (Phase A) — Template

```
STATEMENT OF ARCHITECTURE WORK
──────────────────────────────────────────────────────────────
Architecture project title : [Name]
Scope                       : [Covered domains]
Sponsors                    : [Names and roles]
Time horizon                : [Short / Medium / Long term]

Business problem to solve:
  [3-5 sentence description of the problem or opportunity]

Target architecture vision:
  [Description of the desired state in business terms]

Major constraints:
  - Budget: [amount / budget not defined]
  - Deadline: [target date]
  - Regulation: [GDPR, AI Act, NIS2, sector-specific]
  - Existing to preserve: [legacy systems, contracts, skills]

Stakeholders and concerns:
  | Stakeholder   | Role    | Main concern                  | Viewpoint           |
  |---------------|---------|-------------------------------|---------------------|
  | CIO           | Sponsor | Total cost and timeline       | Executive           |
  | Architects    | Decider | Technical consistency         | Architecture        |
  | Business      | User    | Service continuity            | Business            |
  | CISO          | Stakeholder | Security and compliance   | Security            |
```

## Architecture principles — Examples

```
PRINCIPLE                         TYPICAL STATEMENT
────────────────────────────────  ──────────────────────────────────────────────
Reuse before building             "Prefer existing components over custom development"
API-first                         "Every application capability is exposed via a documented API"
Data as a product                 "Data is treated as a product with an owner"
Security by design                "Security is built in from design, not bolted on"
Cloud-first                       "Public cloud is the default option unless a specific constraint applies"
Evolvability                      "The architecture must evolve without a major rebuild"
Interoperability                  "Components communicate via open standards"
```

## TOGAF deliverables by phase

- Architecture Vision (Phase A): vision document + principles
- Business Architecture (Phase B): As-Is / To-Be process diagram
- IS Architecture (Phase C): application mapping + data flows
- Technology Architecture (Phase D): technology stack + infrastructure
- Architecture roadmap (Phase F): prioritized migration plan
- Architecture Definition Document (ADD): consolidated summary deliverable

## Output format

Specify: **target ADM phase** (A to H), **scope** (business domain, full IS, project), **time horizon**, **specific constraints** (budget, regulation, legacy), **audience** (leadership / Architects / IT teams).
