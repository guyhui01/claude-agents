# Skill — Process Modeling (BPMN, UML, DMN, CMMN)

> Certifications: **IIBA CBAP** · **BCS International Diploma BA** · **OCEB 2** (OMG Certified Expert in BPM)
> Normative standards: **BPMN 2.0.2** (OMG 2014, ISO/IEC 19510:2013) · **UML 2.5.1** (OMG 2017, ISO/IEC 19505-1/2:2012) · **DMN 1.4** (OMG 2023) · **CMMN 1.1** (OMG 2016) · Cockburn (2001) · Jacobson Use Cases 2.0 (2011) · Van der Aalst Process Mining (2016)

## Objective

Model **business processes**, **use cases**, **decisions** and **unstructured cases** to document the existing state (As-Is), design the target (To-Be), specify functional requirements and orchestrate automations (BPMS, RPA, AI). Covers the **5 normative OMG notations**: BPMN · UML · DMN · CMMN · SBVR.

## BABOK v3 framework — Knowledge Areas leveraged

| BABOK KA | Task | Main notation |
|---|---|---|
| **#7 Requirements Analysis & Design Definition** | 8.1 Specify and Model Requirements | BPMN · UML · DMN |
| **#9 Strategy Analysis** | 7.2 Define Future State (To-Be) | BPMN · CMMN |
| **#10 Elicitation** | 10.2 Concept/Process Modelling | UML CDM · BPMN |
| **Business Process Management perspective** | — | BPMN · DMN · CMMN |

## BPMN 2.0.2 — Complete elements (OMG 2014)

### Events (15 main types)
- **Categories**: Start (thin circle) · Intermediate Throw (thin double-line circle) · Intermediate Catch (thin double-line circle, barred) · End (thick circle) · Boundary (on a task, interrupting/non-interrupting)
- **Triggers**: None · **Message** · **Timer** · **Error** · **Escalation** · **Cancel** · **Compensation** · **Conditional** · **Link** · **Signal** · **Multiple** · **Parallel Multiple** · **Terminate**
- **Silver rule**: Error/Escalation/Cancel/Compensation/Terminate only on End or Boundary (interrupting)

### Activities (7 Task types + sub-processes)
- **Typed Tasks**: **User Task** (human via UI) · **Service Task** (auto via service) · **Send Task** · **Receive Task** · **Manual Task** (outside the IS) · **Business Rule Task** (→ DMN delegation) · **Script Task**
- **Sub-Process**: Embedded · Call Activity (reusable) · **Event Sub-Process** (triggered by an internal event) · **Transaction** (ACID, compensation possible) · **Ad-Hoc** (non-sequenced activities)
- **Markers**: Loop · Multi-Instance Parallel/Sequential · Compensation

### Gateways
- **Exclusive (XOR ✕)**: a single path per condition
- **Parallel (AND +)**: all paths in parallel, sync at the join
- **Inclusive (OR O)**: one or more paths per conditions (sync waits for the activated paths)
- **Event-Based**: choice on the received event (Message / Timer first wins)
- **Complex**: custom join rules (rare, to avoid)
- **Silver anti-pattern**: never use a Gateway for a simple split without a condition (prefer an implicit split via several outgoing flows from the task, or stay explicit with an XOR gateway + conditions)

### Flows & participants
- **Sequence Flow** (solid arrow) — internal to the pool · **Message Flow** (dashed arrow) — between pools · **Data Association** (thin dashed)
- **Pools** = participants (organization, external system — black boxes possible) · **Lanes** = roles internal to the pool
- **Data Objects · Data Stores · Annotations · Groups**

## 3 BPMN modeling levels (Silver & Bridgeland 2009 — *BPMN Method and Style*)

| Level | Detail | Target use | Switching criterion |
|---|---|---|---|
| **Descriptive** | High-level steps, 1 pool, few gateways | Business communication, workshops | Beyond 12-15 tasks → switch to Analytical |
| **Analytical** | All events/gateways/sub-processes, multi-pool | Full analysis, MOE spec | If executable BPMS targeted → switch to Executable |
| **Executable** | Parameterized Service Tasks, BPMN-XML expressions | Camunda / Activiti / Flowable | Validation via BPMN-XML import test |

## UML 2.5.1 — 14 official OMG diagrams (2017)

| Category | Diagram | When to use |
|---|---|---|
| **Structural (7)** | Class | Conceptual/logical data model |
| | Object | Instance snapshot of a Class diagram |
| | Component | Modular software architecture |
| | Composite Structure | Internal structure of a component |
| | Package | Package organization/dependencies |
| | Deployment | Infrastructure and deployment |
| | Profile | UML extensions (stereotypes, tags) |
| **Behavioral (7)** | Use Case | Functional scope per actor |
| | Activity | Activity flow (lightweight BPMN alternative) |
| | State Machine | Lifecycle of an object |
| | Sequence | Temporal interactions between components |
| | Communication | Topological view of interactions |
| | Interaction Overview | Overview of interactions |
| | Timing | Precise temporal constraints |

**Common anti-pattern**: a Sequence Diagram at too low a level (Java methods) — reserve Sequence for inter-component/service interactions, not intra-class.

## Use Cases — Cockburn (2001) vs Jacobson 2.0 (2011)

### Cockburn template (Fully Dressed)
```
Use Case # : UC-XXX
Name       : <verb + object, primary actor's point of view>
Goal       : <observable goal, business value>
Scope      : <system / sub-system / business>
Level      : Summary / User Goal / Subfunction
Primary Actor : <triggering role>
Stakeholders & Interests : <list>
Preconditions  : <state before triggering>
Success Postconditions : <state after success>
Main Success Scenario  : <numbered steps 1, 2, 3...>
Extensions     : <alternative flows 1a, 1b, 2a... with handling>
Technology & Data Variations : <channel/format variations>
```

### Jacobson Use Cases 2.0 (2011) — *The Guide*
- **Use Case Slice** = an executable vertical cut of a UC (independently testable scenario)
- **Backlog**: prioritized Slices replace User Stories for complex systems
- **Use Case 2.0 = Cockburn Use Case + Slices + Tests**

### UML relationship rules
- **«include»**: reusable sub-case, **always** executed (factoring)
- **«extend»**: **conditional** extension (extension point + condition)
- **Generalization**: inheritance between UCs (rare, prefer composition)
- **Anti-pattern**: decomposing a UC into N small CRUD «include» UCs — loss of business value

## DMN 1.4 — Decision Model and Notation (OMG 2023)

- **Decision Requirements Diagram (DRD)**: Decisions (rectangles) · Input Data (ovals) · Knowledge Sources · Business Knowledge Models
- **Decision Tables**: tabular condition/conclusion rules
- **Hit Policy**:
  - **Unique** (U) — only one rule matches (else error)
  - **First** (F) — first matching rule in order
  - **Priority** (P) — priority rule per the order of output values
  - **Any** (A) — several matches, same outputs
  - **Collect** (C+/C#/C</>) — aggregation (sum/count/min/max)
- **FEEL** (Friendly Enough Expression Language) — DMN expression language
- **Usage**: delegate the decision logic from a BPMN Business Rule Task → a separate DMN model (independently versionable)

## CMMN 1.1 — Case Management Model and Notation (OMG 2016)

For **non-deterministic cases** where BPMN doesn't fit: medical records, insurance claims, legal proceedings, complex HR cases, multi-level complaint handling.

- **Plan Items**: Tasks · Stages · Milestones · Event Listeners
- **Sentries**: activation/exit conditions (entry/exit criteria)
- **Discretionary**: optional elements activated by the worker per context
- **BPMN vs CMMN choice criterion**: BPMN if a predictable sequence dominates · CMMN if > 30% unpredictability in the flow

## Process Mining (Van der Aalst 2016)

- **Discovery**: reconstruct the real process from logs (Alpha algorithm · Inductive Miner · Heuristics Miner)
- **Conformance**: gap between the modeled and executed process (token-replay, alignment-based)
- **Enhancement**: enrich the model with performance, predictions, recommendations
- **XES standard** (IEEE 1849-2016) — Event Log XML format
- **Tools**: Celonis · Disco (Fluxicon) · ProM · UiPath Process Mining · Apromore

## Anonymized sector-specific worked example — Check-in/check-out process overhaul (international hotel group)

**Context**: international hotel group (luxury/midscale/economy segments), 350 hotels, 50 countries, 12M room-nights/year. Legacy PMS, channel manager + CRM + payment integration.

**As-Is diagnosis** (Analytical BPMN): 12 sequential manual tasks · 1 client pool + 1 hotel pool + 3 lanes (front desk, concierge, housekeeping) · 4 external message flows (PMS, CRM, channel manager, payment PSP) · 8 min/check-in average · 35% mobile abandonment rate · NPS 6/10 · 25% digital.

**To-Be target** (BPMN + DMN + CMMN):
- **Event Sub-Process**: mobile pre-check-in D-2 (Timer Start) → identity verification (Service Task → KYC API) → room selection (User Task) → pre-authorized payment (Service Task PSP)
- **DMN Decision Table — Automatic upgrade** (Hit Policy: First):

| # | Loyalty Tier | Room Availability | Stay Length | → Upgrade Level |
|---|---|---|---|---|
| 1 | Platinum | > 5 higher rooms available | ≥ 3 nights | +2 categories |
| 2 | Gold | > 3 higher rooms available | ≥ 2 nights | +1 category |
| 3 | Silver | > 5 higher rooms available | ≥ 4 nights | +1 category |
| 4 | * | * | * | No upgrade |

- **Cockburn Use Case UC-014 "Complete mobile pre-check-in"**: Primary Actor = Client · Preconditions = Confirmed reservation + mobile app installed · Main Success Scenario = 6 steps · Extensions = 4a (identity KO → front-desk fallback) · 5a (payment KO → 24h follow-up)
- **CMMN**: post-stay dispute handling (sentry "Complaint received" → "Investigation" Stage, discretionary tasks per nature)

**Measured gains (12-month POC, 35 pilot hotels)**:
- Check-in: 8 min → 2.5 min (-69%)
- NPS: 6 → 8.5
- Digital rate: 25% → 65%
- Savings: 4 FTE/100 hotels (reassigned to premium concierge)
- ROI: 14 months

## Modeling anti-patterns (8 explicit)

- ❌ **BPMN spaghetti** — a diagram > 30 tasks on a single level, zero readability → decompose into Call Activities (max 12-15 tasks/diagram — Silver rule)
- ❌ **Gateway diamond pile-up** — stacking consecutive XORs instead of a single DMN Decision Table → externalize to DMN
- ❌ **CRUD use cases** — one UC per Create/Read/Update/Delete operation → group by business goal
- ❌ **UML Sequence too low-level** — intra-class call details → reserve Sequence for inter-component/service interactions
- ❌ **Mixing BPMN/UML Activity** — an unowned choice between the two notations → BPMN for business processes, UML Activity for algorithmic flows
- ❌ **Business vs IS pools mixed** — no distinction between human actor and system → 1 pool per participant, lanes for roles
- ❌ **DMN inside the BPMN flow** — decision rules coded as a cascade of gateways → delegate to a Business Rule Task + DMN
- ❌ **Model without versioning** — no SemVer management or BPMN-XML / XPDL export → version it in the IS (Camunda registry, Signavio, draw.io + Git)

## Tools & formats

- **Free modelers**: draw.io · Camunda Modeler · Bizagi Modeler · BPMN.io
- **Enterprise platforms**: Signavio (SAP) · ARIS (Software AG) · Visual Paradigm · Sparx EA
- **Executable BPMS**: Camunda 8 · Flowable · Activiti · IBM BAW
- **Interchange formats**: BPMN-XML (OMG standard) · XPDL (WfMC) · UML-XMI · DMN-XML · CMMN-XML

## Deliverables

- **As-Is BPMN diagram** (Analytical) — current process
- **To-Be BPMN diagram** (Analytical or Executable) — target process
- **DMN diagram(s)** — decisions extracted into a separate versioned model
- **CMMN diagram(s)** — complementary non-deterministic cases
- **UML Use Cases** + Cockburn Fully Dressed descriptions
- **Traceability matrix**: Process ↔ Requirements ↔ Tests ↔ business KPIs
- **RACI matrix** per step or per sub-process
- **Silver/Bridgeland style notes**: naming conventions, levels, visual conventions

## Output format

Specify: **process to model** · **target BPMN level** (Descriptive/Analytical/Executable) · **target tool** (Camunda/Bizagi/Signavio/draw.io/Visio) · **As-Is / To-Be / Both** · **notation complementarity** (BPMN alone / BPMN+DMN / BPMN+CMMN / +UML Use Cases) · **constraints** (target BPMS, ISO 19510 compliance).

## Sources

- OMG — *Business Process Model and Notation (BPMN) Version 2.0.2* (OMG 2014, ISO/IEC 19510:2013)
- OMG — *Unified Modeling Language (UML) Version 2.5.1* (OMG 2017, ISO/IEC 19505-1/2:2012)
- OMG — *Decision Model and Notation (DMN) Version 1.4* (OMG 2023)
- OMG — *Case Management Model and Notation (CMMN) Version 1.1* (OMG 2016)
- Silver B. & Bridgeland B. — *BPMN Method and Style* 2nd ed (Cody-Cassidy Press 2011) — #1 BPMN style reference
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001)
- Jacobson I., Spence I., Bittner K. — *Use-Case 2.0: The Guide to Succeeding with Use Cases* (Ivar Jacobson International 2011)
- Van der Aalst W. — *Process Mining: Data Science in Action* 2nd ed (Springer 2016)
- IIBA — *BABOK Guide v3* (IIBA 2015) — KA #7, #9, #10 + BPM Perspective
- IEEE 1849-2016 — *Standard for eXtensible Event Stream (XES) for Achieving Interoperability in Event Logs and Event Streams*

## See also

- [[elicitation-besoins]] — BABOK Process/Concept Modelling techniques (KA #4)
- [[cartographie-si]] — TOGAF + ArchiMate for urbanization view and inter-IS flows
- [[analyse-impact]] — Kotter + BABOK Strategy Analysis for To-Be change impact
- [[gestion-exigences]] — Process ↔ Requirement ↔ Test traceability
- [[../scrum/po-user-story]] — moving from Jacobson 2.0 Use Case Slice → Connextra User Story
- [[../change_manager/conduite-changement]] — supporting the As-Is → To-Be transition
