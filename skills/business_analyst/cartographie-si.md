# Skill — IS Mapping (Urbanization & Enterprise Architecture)

> Certifications: **TOGAF 10** (The Open Group 2022) · **ArchiMate 3** (OpenCA) · **IIBA CBAP** · ISO/IEC/IEEE 42010:2022
> Agent: AGENT-BUSINESS-ANALYST.md

## Objective

Document, analyze and evolve the existing information system via standardized **Enterprise Architecture** frameworks (TOGAF 10 ADM, ArchiMate 3.2, C4 Model) in order to **urbanize** the IS sustainably: identify project impacts, rationalize the application portfolio, feed the IS master plan, and secure build/buy/migrate decisions.

## BABOK v3 framework (IIBA 2015) — Knowledge Areas leveraged

| BABOK v3 KA | Typical IS-mapping tasks |
|---|---|
| **#2 Business Analysis Planning & Monitoring** | T2.1 Plan BA Approach · T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach |
| **#9 Strategy Analysis** | T9.1 Analyze Current State · T9.2 Define Future State · T9.3 Assess Risks · T9.4 Define Change Strategy |
| **Information Technology perspective** | Application mapping · EA frameworks · Integration patterns · APM |

## TOGAF 10 ADM — 8 phases of the architecture cycle (The Open Group 2022)

| Phase | Goal | Mapping deliverable |
|:---:|---|---|
| **Prelim.** | Establish architecture capability + framework tailoring | EA charter, Architecture Capability |
| **A — Vision** | Define business vision + scope + stakeholders | Statement of Architecture Work, Vision Diagram |
| **B — Business** | Map processes, organizations, functions, business services | Business Architecture (cf. [modelisation-processus.md](modelisation-processus.md)) |
| **C — IS Architecture** | Data Architecture + Application Architecture | **AS-IS + TO-BE application map**, data↔apps CRUD matrix |
| **D — Technology** | Platforms, infrastructure, hosting | Technology Architecture (network, cloud, servers) |
| **E — Opportunities & Solutions** | Identify work packages, constraints, gaps | Gap Analysis, candidate Migration Plan |
| **F — Migration Planning** | Prioritized transition roadmap | Implementation & Migration Plan, Transition Architectures |
| **G — Implementation Gov.** | Architectural steering project by project | Architecture Contract, Compliance Reviews |
| **H — Change Management** | Manage post-implementation EA changes | Requests for Architecture Change |

**Architecture Content Framework**: 21 deliverable types + 4 Architecture Domains (Business/Data/Application/Technology = BDAT) + 4 Reference Models (TRM Technical Reference Model · III-RM Integrated Information Infrastructure RM).

## ArchiMate 3.2 (The Open Group 2023, ISO/IEC 19770) — 7 official layers

| Layer | Scope | Key elements |
|---|---|---|
| **Strategy** | Strategic capabilities | Capability · Resource · Course of Action · Value Stream |
| **Business** | Actors, processes, services, contracts | Business Actor/Role · Process · Service · Object · Contract |
| **Application** | Applications, components, application services | Application Component/Service · Data Object · Interface · Function |
| **Technology** | Platforms, nodes, logical infrastructure | Node · Device · System Software · Network · Communication Path |
| **Physical** | Physical equipment, hardware | Equipment · Facility · Distribution Network · Material |
| **Motivation** | Drivers, goals, requirements, constraints | Stakeholder · Driver · Goal · Outcome · Principle · Requirement · Constraint |
| **Implementation & Migration** | Programs, gaps, plateaus | Work Package · Deliverable · Plateau · Gap |

**Standardized relationships**: Composition · Aggregation · Assignment · Realization · Used By · Serving · Triggering · Flow · Association · Influence (cf. ArchiMate 3.2 spec §5).

## C4 Model (Simon Brown 2018) — complementary application zoom

| Level | Target | When to use |
|:---:|---|---|
| **C1 — System Context** | System + users + external systems | Entry view for non-technical stakeholders |
| **C2 — Container** | Containers (apps, DB, microservices, file system) | Solution architecture, tech choices |
| **C3 — Component** | Internal components of a container | Detailed design, team ownership |
| **C4 — Code** | Classes, functions (usually auto-generated diagrams) | Rarely useful at this granularity |

Complementarity: **ArchiMate** = broad multi-domain EA view · **C4** = zoom on a single application. Don't mix the two in the same diagram.

## 5 IS urbanization levels (Longépé 2009)

```
Level 1 — Business        → Processes, actors, events, business objects
Level 2 — Functional      → Functional blocks, business services (PAS — Strategic Architecture Plan)
Level 3 — Application     → Applications, modules, application flows
Level 4 — Technical       → Servers, middleware, DB, containers
Level 5 — Infrastructure  → Network, datacenter, cloud, physical security
```

**Urbanization golden rule** (Longépé): **one functional block = a single main application**. Any functional redundancy is an urbanization case to investigate (rationalization candidate).

## Application inventory & Gartner APM (Application Portfolio Management)

### Critical attributes per application (CMDB / APM repository)

| Attribute | Example |
|---|---|
| Unique identifier | `APP-CRM-001` |
| Functional + technical name | "B2B Sales CRM" / Salesforce Sales Cloud |
| Vendor / version | Salesforce / Spring '24 |
| Business criticality | Vital · Important · Standard · Low |
| Business / IT owner | Sales Department / Front-Office IT |
| Lifecycle | Build / Run / Sunset / Decommissioned |
| Annual cost (TCO) | Licenses + RUN + enhancements |
| Technology | SaaS · COTS · Custom · Legacy |
| Compliance (GDPR, AI Act, sector-specific) | Status + DPIA if applicable |

### Gartner TIME APM method — for each application, 4 strategic decisions

| Category | Criterion | Action |
|:---:|---|---|
| **T**olerate | Stable, neutral ROI, no risk | Maintain minimal RUN |
| **I**nvest | Strong business value, expected growth | Enrich, evolve |
| **M**igrate | Technical obsolescence, an alternative exists | Migration plan |
| **E**liminate | Redundant, obsolete, no value | Decommissioning |

## Exchange (flow) matrix — integration patterns

| Source | Destination | Data | Protocol | Frequency | Criticality | Pattern |
|---|---|---|---|---|---|---|
| CRM | ERP | Customer orders | REST API | Real time | Vital | API Gateway |
| ERP | BI | Sales data | Nightly CSV batch | D+1 | Standard | ETL / Data Pipeline |
| Customer Portal | OSS | Activation requests | Event (Kafka) | Real time | Vital | Event Streaming |
| Billing | DWH | Detailed invoices | CDC (Change Data Capture) | 15 min | Important | CDC / Streaming |
| HR | AD directory | User accounts | LDAP / SCIM | Real time | Vital | Identity Provisioning |

**5 integration patterns** (Hohpe & Woolf 2003, *Enterprise Integration Patterns*):
- **Point-to-point**: ≤ 5 systems, otherwise combinatorial explosion (N(N-1)/2)
- **Hub & Spoke / ESB** (Enterprise Service Bus): Mule ESB, Tibco, Software AG webMethods
- **iPaaS** (Integration Platform as a Service): MuleSoft Anypoint, Boomi, Talend, Workato, Zapier
- **API Gateway**: Kong, Apigee, AWS API Gateway, Azure APIM — microservices orchestration
- **Event Streaming**: Apache Kafka, Confluent, AWS Kinesis, Azure Event Hubs — Event-Driven Architecture

## IS impact analysis (BABOK Strategy Analysis method)

1. **Project scope**: applications directly modified (feature addition/change/removal)
2. **Circle 1 — Direct impact**: applications whose code/config/schema changes
3. **Circle 2 — Indirect impact**: consumer applications (inbound flow) or producer applications (outbound flow) impacted by an interface-contract change
4. **Circle 3 — Cross-cutting impact**: foundation (auth, logging, monitoring, search), data lake, consolidated BI
5. **Impact rating**: Major (code overhaul) · Minor (config + regression tests) · Watch (reinforced monitoring without intervention)
6. **Project RACI** per impacted application: Responsible · Accountable · Consulted · Informed
7. **Integration tests** to plan: scenarios × applications × volume matrix + non-regression

## IS master plan 3-5 years

| Section | Content |
|---|---|
| **Target vision** | TO-BE architecture aligned with business strategy + future capabilities |
| **Evolution roadmap** | Multi-year programs (build, integration, migration) |
| **Rationalization** | Prioritized decommissioning (TIME-Eliminate), redundancy merging |
| **Build / Buy / SaaS** | Decision criteria (sovereignty, TCO, time-to-market, criticality) |
| **Cloud migration** | AWS 6R (Retire, Retain, Repurchase, Rehost, Replatform, Refactor) |
| **Sovereignty & compliance** | SecNumCloud (ANSSI), CSPN, DORA banking, NIS2, AI Act, GDPR |
| **EA governance** | Architecture committee, decision RACI, Architecture Review Board |

## Sector-specific worked example — European multi-country telecom operator

**Anonymized context**: European telecom operator present in 25+ B2C/B2B countries (~250M customers), IS inherited from 20 years of successive mergers/acquisitions, an 18-month mapping engagement covering France + 4 pilot countries.

**Mapped scope**:
- **412 applications** identified (target: completeness ≥ 95%) across 5 **TM Forum eTOM** domains: Customer Domain (78) · Product Domain (61) · Service Domain (94 — OSS) · Resource Domain (112 — network/infra) · Enterprise Domain (67 — HR/Finance/Procurement)
- **TM Forum Frameworx** standard applied: eTOM (Business Process Framework) + SID (Shared Information Data) + TAM (Telecom Application Map) — a mature, standard industry framework for telecoms, continuously evolving toward Open Digital Architecture (ODA)
- **3,250 application flows** inventoried (Source → Target × pattern × criticality)

**ArchiMate 3.2 modeling**:
- Business layer: 47 eTOM Level 3 processes modeled
- Application layer: 412 Application Components + 184 Application Services (published APIs)
- Technology layer: 89 Nodes (datacenters + AWS/Azure cloud + edge)
- Motivation layer: 12 strategic Drivers (5G rollout, cloudification, copper switch-off, DORA compliance)

**TIME APM diagnosis**:

| Category | App count | % of portfolio | Action |
|:---:|:---:|:---:|---|
| Tolerate | 162 | 39% | Maintain RUN, frozen budget |
| Invest | 98 | 24% | Modernization, digital enrichment |
| Migrate | 96 | 23% | Cloud / SaaS migration plan / gradual decommissioning |
| Eliminate | 56 | 14% | Immediate decommissioning (12 months) |

**Redundancy identification**: **64 functional duplicates** detected (e.g. 4 different ticketing tools inherited from mergers, 3 customer self-care portals per country, 5 network inventory systems) — the Longépé golden rule was historically not respected.

**5-year rationalization plan**:
- Decommission 56 Eliminate apps (T+12 months) — OPEX savings **€8.2M/year**
- Migrate 96 Migrate apps to SaaS/cloud (T+24-48 months) — TCO reduction **~30%**
- Merge 22 functional duplicates (T+36 months) — data security + flow simplification
- Invest in 98 Invest apps (T+12-60 months) — digital acceleration + observability

**Measured gains after an 18-month POC** (5-country pilot scope):
- Project time-to-market: 9 months → 5 months (impact analysis automated via the ArchiMate repository)
- Observability coverage: 45% → 88% of critical flows instrumented
- Inter-application incident reduction: -42% (flow mapping + proactive APM)
- DORA compliance: 100% of critical applications identified and documented (January 2025 deadline met)
- Mapping ROI: **18 months** (rationalization OPEX savings > EA program cost)

## 8 IS-mapping anti-patterns

- ❌ **Single-level mapping**: modeling only the application layer without linking to business/technical → loss of strategic alignment, disconnected master plan
- ❌ **Premature zoom**: starting with detailed diagrams (C4 level 3) before scoping the Context (C1) → wasted effort, stakeholders lost
- ❌ **Closed proprietary format**: choosing a tool without BPMN-XML / ArchiMate-XMI / Open Group Exchange Format support → vendor lock-in, no external audit possible
- ❌ **Ungoverned obsolescence**: mapping frozen after the project, no update process (TOGAF Phase H Change Management absent) → a dead model in 6 months
- ❌ **ArchiMate without a legend or layers**: diagrams readable only by the author → zero business-stakeholder adoption
- ❌ **Real-time flows ignored**: matrix limited to nightly batches, no Event Streaming / CDC representation → the real IS poorly understood (45% of modern flows invisible)
- ❌ **Master plan disconnected from business**: technical roadmap without a strategy-aligned capability map → IT seen as a cost-center, not a partner
- ❌ **Cloud not modeled**: ArchiMate Technology Layer frozen "on-prem" while 40% of workloads are SaaS/IaaS → invisibility of real TCO and sovereignty risks

## Tools

**Free / open-source EA modelers**: Archi (Open Group, free, native ArchiMate) · draw.io / diagrams.net (generic) · PlantUML (scriptable C4 + UML)

**Enterprise EA modelers**: Sparx Enterprise Architect · Visual Paradigm · BiZZdesign Enterprise Studio (native ArchiMate) · MEGA HOPEX · Avolution ABACUS

**Cloud APM / EA platforms**: LeanIX (SAP) · Ardoq · Mega HOPEX · Software AG ARIS · ServiceNow APM (CMDB-integrated)

**iPaaS / EAI / API Management**: MuleSoft Anypoint · Boomi · Talend · Workato · Kong · Apigee · AWS API Gateway · Azure APIM

**Event Streaming**: Apache Kafka · Confluent Cloud · AWS Kinesis · Azure Event Hubs · RabbitMQ (messaging)

## Deliverables

- **AS-IS application map** (ArchiMate 3.2 + XMI/CSV export format)
- **TO-BE target map** (3-5 years) with intermediate Plateaus
- **APM application inventory** (CMDB enriched with 9-15 attributes + TIME rating)
- **Flow matrix** (3 columns minimum: Source / Target / Data + integration pattern)
- **Gap Analysis** AS-IS / TO-BE (TOGAF Phase E)
- **IS master plan** 3-5 years with rationalization roadmap + OPEX/CAPEX budget
- **Project impact analysis** (3 circles + application RACI + integration test plan)
- **Architecture Decision Records (ADR)** dated and traced (cf. Nygard 2011)

## Output format

For each mapping engagement, specify:
- **Scope**: business domains (Customer/Product/Service/Resource/Enterprise — eTOM if telecom) · countries/BUs concerned · lifecycles (in scope / out of scope)
- **Target depth**: macro (~Level 2 functional) · detailed (~Level 3 application) · in-depth (~Level 4 technical)
- **Goal**: project impact analysis (3-6 months) · master plan (12-18 months) · portfolio rationalization (24-36 months) · regulatory compliance (DORA, NIS2, AI Act)
- **Frameworks leveraged**: TOGAF 10 ADM phases (which ones) · ArchiMate 3.2 layers (which ones) · C4 Model (levels) · sector-specific (TM Forum eTOM telecom · BIAN banking · ACORD insurance · HL7 healthcare)

## Sources

- **TOGAF Standard, 10th Edition** — The Open Group (2022) — https://www.opengroup.org/togaf
- **ArchiMate 3.2 Specification** — The Open Group (2023, OpenCA) — https://www.opengroup.org/archimate
- **ISO/IEC/IEEE 42010:2022** — Software, systems and enterprise — Architecture description
- **Zachman Framework 3.0** — John Zachman (2011) — *The Concise Definition of The Zachman Framework*
- **C4 Model** — Simon Brown (2018) — *The C4 model for visualising software architecture* — https://c4model.com
- **Longépé Christophe** — *Le projet d'urbanisation du SI* (Dunod, 4th ed. 2009)
- **Hohpe G., Woolf B.** — *Enterprise Integration Patterns* (Addison-Wesley 2003)
- **Nygard Michael T.** — *Documenting Architecture Decisions* (ADR pattern, 2011)
- **BABOK Guide v3** — IIBA (2015), KA #2 Planning + KA #9 Strategy Analysis + IT Perspective
- **TM Forum Frameworx** — eTOM (Process Framework) + SID (Shared Information Data) + TAM (Application Framework) + Open Digital Architecture evolution (ODA, cloud-native re-packaging) — https://www.tmforum.org/oda
- **Gartner APM** — *IT Application Portfolio Management* (Gartner Research, TIME method 2010+)

## See also

- [modelisation-processus.md](modelisation-processus.md) — BPMN/UML to zoom on business processes modeled in the ArchiMate Business layer
- [elicitation-besoins.md](elicitation-besoins.md) — needs gathering upstream of Strategy Analysis (TOGAF Phase A)
- [analyse-impact.md](analyse-impact.md) — project impact analysis, articulating TOGAF Phase E + BABOK Strategy Analysis
- [gestion-exigences.md](gestion-exigences.md) — requirements ↔ ArchiMate Application Components traceability
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — feeding the project backlog from the EA Gap Analysis
- [`../change_manager/strategie-adoption.md`](../change_manager/strategie-adoption.md) — steering the post-mapping transformation (Kotter, PROSCI, ADKAR)
