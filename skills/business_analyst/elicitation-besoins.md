# Skill — Needs Elicitation & Analysis (BABOK Knowledge Area #4)

> Certifications: **IIBA CBAP** (Certified Business Analysis Professional) · **CCBA** (Certification of Capability in Business Analysis) · **PMI-PBA** (Professional in Business Analysis)
> Normative standards: **BABOK v3** (IIBA 2015) · **Volere Requirements** (Robertson & Robertson, 3rd ed 2012) · **Wiegers Software Requirements** (Karl Wiegers, 3rd ed 2013) · **ISO/IEC 25010:2011** (software quality)

## Objective

Collect, structure and validate **business + stakeholder + solution + transition** needs (BABOK taxonomy) by leveraging the **14 elicitation techniques** of BABOK Knowledge Area #4 "Elicitation & Collaboration", across all organization segments (large accounts, mid-caps, scale-ups, SMEs, public sector).

## BABOK v3 framework — Knowledge Area "Elicitation & Collaboration" (Tasks 10.1-10.5)

| Task | Activity | Deliverable |
|---|---|---|
| **10.1** | Prepare for Elicitation | Elicitation plan, identified stakeholders, selected techniques |
| **10.2** | Conduct Elicitation | Raw notes, transcripts, observations |
| **10.3** | Confirm Elicitation Results | Stakeholder validation, divergence resolution |
| **10.4** | Communicate Business Analysis Information | Documented synthesis, stakeholder presentation |
| **10.5** | Manage Stakeholder Collaboration | Engagement plan, conflict management |

## 14 BABOK v3 elicitation techniques — Selection table

| Technique | Preferred context | Duration | Type |
|---|---|---|:---:|
| **Interview** (individual/group) | Business experts, decision-makers, info asymmetry | 45-90 min | Collaborative |
| **Brainstorming** | Ideation, innovative options | 1-2h | Collaborative |
| **Focus Groups** | Opinion convergence, user segments | 1-2h | Collaborative |
| **Document Analysis** | Existing requirements specification, procedures, regs | Variable | Research |
| **Interface Analysis** | IS integration, inter-system flows (API, EDI) | 2-4h | Research |
| **Observation** (passive/active) | Operational processes, business gestures | 1-3h | Experimental |
| **Prototyping** (low-fi/hi-fi) | UI/UX, user journey, fast validation | 1-2 sprints | Experimental |
| **Survey/Questionnaire** | Large populations, quantified confirmation | 1-3 weeks | Research |
| **Workshops** | Co-construction, stakeholder alignment | 2-4h or ½ day | Collaborative |
| **Mind Mapping** | Thematic exploration, hierarchies | 1-2h | Research |
| **Process Modelling** (BPMN) | As-Is/To-Be, activity dependencies | Variable | Research |
| **Concept Modelling** (UML CDM) | Business vocabulary, domain | 2-4h | Research |
| **Reverse Engineering** | Undocumented legacy system | Variable | Research |
| **Lessons Learned** (post-mortem) | Capitalize on past projects | 1-2h | Research |

## Volere Requirements Specification (Robertson 2012) — Atomic Requirement structure

```
Requirement #: <unique ID>
Type:           <Functional / Look & Feel / Usability / Performance / Operational / Maintainability / Security / Cultural / Legal>
Event/BUC/PUC:  <Business trigger or use case>
Description:    <1 clear sentence, no technical jargon>
Rationale:      <Why this need? What value?>
Originator:     <Source stakeholder>
Fit Criterion:  <Objective measure of satisfaction — testable>
Priority:       <MoSCoW: Must / Should / Could / Won't>
Dependencies:   <Other related requirements>
Conflicts:      <Conflicting requirements>
Supporting Materials: <Mockups, diagrams, documents>
History:        <Creation date, changes, validation>
```

The full **Volere Shell** contains 24 sections (Project Drivers, Constraints, Functional/NFR, Project Issues). The **Snow Card** (simplified double-sided format) is used for quick workshops.

## Wiegers (2013) — Critical practices

- **Stakeholder Matrix**: Power × Interest axes (Mendelow 1991) — segment into Manage Closely / Keep Satisfied / Keep Informed / Monitor
- **Requirements Prioritization Quadrant**: Business Value × Implementation Cost axes — High-Low (Quick Wins), High-High (Strategic), etc.
- **Volatility Index**: rate each requirement from 1 (stable) to 5 (highly volatile) to manage change risk
- **Requirements Specification Reviews**: Wiegers checklist (clarity, completeness, consistency, testability)

## Functional vs Non-Functional requirements (NFR)

| Type | Standard | Examples |
|---|---|---|
| **Functional** | BABOK v3 § 9.5 | "The system lets you filter transactions by date, amount, status" |
| **Non-Functional** | **ISO/IEC 25010:2011** (8 characteristics) | Functional Suitability · Performance Efficiency · Compatibility · Usability · Reliability · Security · Maintainability · Portability |
| **Alternative NFR** | **FURPS+** (Grady HP 1992) | Functionality · Usability · Reliability · Performance · Supportability · (+ Design/Implementation/Interface/Physical) |

**Critical anti-pattern**: forgetting NFRs = a project delivered "functional" but slow / insecure / inaccessible / unmaintainable.

## Expression formats: User Stories vs Use Cases vs Job Stories

| Format | Source | When to use |
|---|---|---|
| **Connextra User Story** (2001) — *"As a [role], I want [action], so that [benefit]"* — **INVEST** criteria (Wake 2003) | Connextra Ltd 2001 | Agile/Scrum backlog, atomic functional requirements |
| **Cockburn Use Cases** (2001) — Actor · Precondition · Main scenario · Alternative scenarios · Postcondition | Cockburn *Writing Effective Use Cases* (Addison-Wesley 2001) | Detailed MOA functional spec (V-model), requirements with complex branches |
| **Klement Job Stories** (2013) — *"When [situation], I want [motivation], so I can [outcome]"* — context focus, not persona | Alan Klement (Intercom blog 2013) | Discovery, Job-To-Be-Done oriented requirements (Christensen) |

## Prioritization — MoSCoW + Kano

- **MoSCoW** (Dai Clegg, DSDM 1994): **M**ust have (blocking deliverable) · **S**hould have (important non-blocking) · **C**ould have (nice-to-have) · **W**on't have this time (explicitly out of scope)
- **Kano model** (Noriaki Kano, Tokyo Univ. of Science 1984): **Must-be** (basics) · **Performance** (linear satisfaction) · **Attractive** (unexpected delighters) · **Indifferent** · **Reverse**

## Sector-specific worked example — KYC/AML portal overhaul (CIB bank)

**Context**: overhaul of the KYC/AML portal of a CIB bank (regulated segment — GDPR + DORA + AML-CFT + Sapin 2). 12 stakeholders, 320 requirements identified.

**Elicitation plan**:
- **6 interviews**: Compliance Officer, RCS, MLRO, DPO, CISO, MOE (Tasks 10.1-10.2)
- **2 workshops** As-Is/To-Be (BPMN) — 12 participants × 4h
- **Document Analysis**: KYC policy, AML-CFT procedure, Regulation (EU) 2015/849 5AMLD
- **Observation**: 2 onboarding units (5h) — average institutional-client onboarding time: 11 days
- **Survey** RCO: 47 respondents out of 60 (78% participation)

**Volere Atomic Requirement example** (Functional Suitability):
```
Requirement #: REQ-KYC-014
Type:           Functional · Performance Efficiency (NFR)
Description:    The system performs sanctions screening (OFAC, EU, UN) in < 3 seconds for 95% of requests (p95)
Rationale:      Reduce onboarding from 11 days → 3 days (Compliance leadership SLA target)
Fit Criterion:  p95 latency ≤ 3000ms measured over 10000 PreProd test requests
Priority:       Must (regulator-blocking — 5AMLD art. 8)
Dependencies:   REQ-KYC-013 (World-Check API integration), REQ-NFR-AVAIL-01 (99.95% uptime)
```

**MoSCoW-prioritized backlog**: 142 Must · 89 Should · 67 Could · 22 Won't (scope explicitly deferred to Phase 2).

## Elicitation anti-patterns (8 explicit)

- ❌ **Solution before problem** — elicitation pre-wired by a predefined solution (e.g. "we want Salesforce") instead of eliciting the need → major framing bias
- ❌ **No end-user validation** — requirements gathered only via PM/Sponsors without confronting operational users → massive As-Is/To-Be gap
- ❌ **One-shot elicitation** — a single workshop then a frozen deliverable → volatile requirements not captured
- ❌ **Forgotten NFRs** — 100% functional focus, ISO 25010 NFRs (security, perf, accessibility, compliance) missing → a project delivered "functional" but unusable in prod
- ❌ **No traceability** — no Requirement → Test → Release → Stakeholder link → regulator audit impossible
- ❌ **Requirements in technical jargon** — phrasings the business can't understand → stakeholder/dev misalignment
- ❌ **Brainstorming without facilitation** — HiPPO (Highest Paid Person's Opinion) dominates, cognitive biases (anchoring, group conformity) → biased requirements
- ❌ **Job Stories confused with User Stories** — mixing formats breaks backlog consistency (cf. [[stories-techniques]] and [[po-user-story]])

## Deliverables

- **Volere requirements document** (24-section Shell or Snow Cards for agile formats)
- **Traceability matrix**: Requirement ↔ Test ↔ Release ↔ Stakeholder (regulator audit)
- **Business glossary** (terms, definitions, synonyms, translations)
- **Elicitation plan** (selected BABOK techniques, schedule, involved stakeholders)
- **MoSCoW-prioritized backlog** + Kano heatmap (basics / performance / attractive)
- **Elicitation report**: insights, arbitrated divergences, open points, Volatility Index per requirement

## Output format

Specify: **project context** · **organization segment** (large account / mid-cap / scale-up / SME / public sector) · **available stakeholders** (roles, availability) · **preferred BABOK techniques** (among the 14) · **regulatory constraints** (GDPR, AI Act, sector-specific: DORA banking, MDR healthcare, NIS2, etc.) · **workshop timeline and budget**.

## Sources

- IIBA — *A Guide to the Business Analysis Body of Knowledge (BABOK Guide) v3* (IIBA 2015) — official standard for CBAP/CCBA certification
- Robertson S. & Robertson J. — *Mastering the Requirements Process: Getting Requirements Right* 3rd ed (Addison-Wesley 2012) — Volere reference
- Wiegers K. & Beatty J. — *Software Requirements* 3rd ed (Microsoft Press 2013) — #1 software requirements reference
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001)
- Klement A. — *Replacing The User Story With The Job Story* (Intercom blog 2013, jobstoriesoftware.com)
- Wake B. — *INVEST in Good Stories, and SMART Tasks* (xp123.com 2003)
- Clegg D. & Barker R. — *Case Method Fast-Track: A RAD Approach* (Addison-Wesley 1994) — origin of MoSCoW
- Kano N. et al. — *Attractive Quality and Must-be Quality* (Hinshitsu, J. of the Japanese Society for Quality Control 1984)
- Grady R. — *Practical Software Metrics for Project Management and Process Improvement* (HP/Prentice-Hall 1992) — FURPS
- ISO/IEC 25010:2011 — Systems and software Quality Requirements and Evaluation (SQuaRE)

## See also

- [[modelisation-processus]] — BPMN 2.0 + UML 2.5 for Process/Concept Modelling (BABOK 10.2)
- [[cartographie-si]] — TOGAF 10 + ArchiMate for Interface Analysis (BABOK 10.2)
- [[analyse-impact]] — Kotter + BABOK Strategy Analysis for Change Impact post-elicitation
- [[gestion-exigences]] — life-cycle management + traceability matrix
- [[recette-moa]] — Fit Criterion validation in MOA UAT
- [[../scrum/po-user-story]] — Connextra User Stories + INVEST in a Scrum context
