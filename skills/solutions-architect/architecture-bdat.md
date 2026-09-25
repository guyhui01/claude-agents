# Skill — BDAT Architecture (Business / Data / Application / Technology)

> Certifications: TOGAF 10 Foundation & Practitioner, ArchiMate 3 Practitioner, CITA-A (IASA)

## Objective

Design the 4 layers of enterprise architecture per the TOGAF framework: Business, Data, Application and Technology — ensuring vertical consistency between business needs and technology choices.

## BDAT overview

```
LAYER         KEY QUESTIONS                          DELIVERABLES
────────────  ─────────────────────────────────────  ──────────────────────────────────
Business (B)  Which processes? Which actors?         Process map, business org chart
Data (D)      Which data? Who owns it?               Conceptual model, data catalog
Application   Which systems? Which functions?        Application mapping, flows
(A)
Technology    Which infra? Which platforms?          Technology architecture, stack
(T)
```

## B layer — Business Architecture

```
COMPONENTS
  Business processes (BPMN: As-Is → To-Be)
  Functional domains (Finance, HR, Sales, Ops...)
  Actors and roles (humans and systems)
  Business capabilities (Business Capability Map)
  Trigger events

DELIVERABLES
  → Business Capability Map
  → Target BPMN process diagram
  → RACI matrix per capability
```

## D layer — Data Architecture

```
COMPONENTS
  Data entities (customers, products, contracts...)
  Data ownership (owner per domain)
  Data flows (lineage)
  Data quality and governance
  Classification (sensitivity: public, internal, confidential, secret)

DELIVERABLES
  → Conceptual data model (entities + relationships)
  → Data catalog (name, description, owner, quality)
  → Inter-system data flow diagram (DFD)
  → Retention and archiving policy
```

## A layer — Application Architecture

```
COMPONENTS
  Applications and modules
  Interfaces and APIs
  Integration flows
  Implemented business rules

DELIVERABLES
  → Application mapping (per functional domain)
  → Context diagram (C4 Level 1)
  → Integration matrix (which app talks to which app)
  → Inventory of exposed / consumed APIs
```

## T layer — Technology Architecture

```
COMPONENTS
  Infrastructure (compute, storage, network)
  Platforms (cloud, on-prem, hybrid)
  Middleware (ESB, API GW, message broker)
  Security (IAM, firewalls, encryption)
  Observability (logs, metrics, traces)

DELIVERABLES
  → Technical architecture diagram (network + components)
  → Infrastructure as Code (Terraform / Bicep)
  → Network flow matrix (ports, protocols, direction)
  → Security architecture (zones, DMZ, Zero Trust)
```

## BDAT consistency — Traceability check

```
CHECK                               COMPLIANCE QUESTION
──────────────────────────────────  ──────────────────────────────────────────────────
B → A: each capability is covered   "Is each business capability supported by ≥ 1 app?"
D → A: each data has an owner        "Does each data entity have a master application?"
A → T: each app has infra            "Is each application hosted somewhere?"
T → A: no orphan infra               "Is all infra attached to an application?"
```

## Deliverables

- Complete BDAT architecture (1 diagram per layer)
- Consolidated Architecture Definition Document (ADD)
- BDAT traceability matrix (cross-layer compliance)
- As-Is vs To-Be gap analysis per layer

## Output format

Specify: **layer(s) to cover** (B / D / A / T or all), **scope** (domain or full IS), available **modeling tool** (ArchiMate / PowerPoint / draw.io), **level of detail** (strategic / detailed / operational view).
