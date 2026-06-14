# Skill — ArchiMate 3 Modeling

> Certifications: ArchiMate 3 Foundation & Practitioner (The Open Group), TOGAF 10 Practitioner

## Objective

Create readable, usable ArchiMate 3 models: correct element notation, audience-appropriate viewpoints, cross-layer consistency and export to standard tools.

## The 3 ArchiMate layers (simplified)

```
LAYER          KEY ELEMENTS                     STANDARD COLOR
─────────────  ──────────────────────────────   ─────────────────
Business       Role, Actor, Process, Function    Yellow
Application    Component, Service, Interface      Light blue
Technology     Node, Artifact, Network, Device    Green
```

## Viewpoints by audience

```
AUDIENCE         RECOMMENDED VIEWPOINT          INCLUDED ELEMENTS
───────────────  ────────────────────────────   ──────────────────────────────────────
Leadership/Sponsor Organization viewpoint        Actors, Roles, Collaborations
Business/BA      Business Process viewpoint      Processes, Events, Business services
Architects       Application viewpoint           Components, Interfaces, Flows
DevOps / Infra   Infrastructure viewpoint        Nodes, Devices, Artifacts, Networks
Full architecture Layered viewpoint              All layers + relationships
```

## Essential ArchiMate relationships

```
RELATIONSHIP     NOTATION          MEANING
──────────────   ───────────────   ──────────────────────────────────────
Serving          ──(→               "A provides a service to B"
Realization      ───◁               "A implements B"
Assignment       ──●                "A is assigned to B (role → actor)"
Composition      ──◆                "A is composed of B"
Aggregation      ──◇                "A aggregates B"
Triggering       ──►                "A triggers B"
Association       ───                "Generic relationship between A and B"
Access           ─ ─►               "A accesses B (data)"
```

## ArchiMate template — Integration diagram

```
[ArchiMate 3 — Application Cooperation Viewpoint]

Business Layer:
  [Order Process] ──serving──▶ [Order Management Service]

Application Layer:
  [OMS (Order Management)] ──serving──▶ [REST API /orders]
  [REST API /orders] ──serving──▶ [Salesforce CRM]
  [OMS] ──access──▶ [Orders DB (PostgreSQL)]

Technology Layer:
  [AWS ECS] ──assignment──▶ [OMS]
  [AWS RDS] ──assignment──▶ [Orders DB (PostgreSQL)]
  [AWS API Gateway] ──assignment──▶ [REST API /orders]
```

## ArchiMate modeling tools

```
TOOL            TYPE          PROS                        CONS
─────────────   ───────────   ─────────────────────────   ────────────────────────
Archi (EA)      Free desktop  Complete ArchiMate standard No collaboration
Enterprise      Enterprise    Collaboration, reporting     Very expensive
Architect
Sparx EA        Enterprise    Complete, UML + ArchiMate   Learning curve
draw.io         Free          Simple, Confluence-integrated No model validation
LeanIX          SaaS          Collaboration, auto-disco    Pricey license
```

## ArchiMate best practices

```
✅ DO
  → Name elements with business names, not technical ones
  → Limit to 15-20 elements per diagram (readability)
  → Use standard viewpoints before creating custom views
  → Document each element (description, owner, version)
  → Ensure consistency across views (one element = one ID)

❌ AVOID
  → Creating elements without connecting them
  → Mixing abstraction levels in a single diagram
  → Using "Association" for everything (notation laziness)
  → Duplicating elements across models (loss of consistency)
```

## Deliverables

- Complete ArchiMate model (.archimate / XML export)
- Viewpoints by audience (Business, Application, Infrastructure, Layered)
- Element dictionary (IS ArchiMate glossary)
- Reading guide for non-experts (1 page)

## Output format

Specify: **desired viewpoint** (Business / Application / Infrastructure / Layered), **available tool** (Archi / draw.io / Enterprise Architect / other), **scope** (domain / IS), **target audience** (leadership / Architects / DevOps).
