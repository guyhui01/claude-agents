# Skill — Functional Specifications
> Certifications: IIBA CBAP · PMI-PBA · BCS Diploma BA
> Normative standards: **ISO/IEC/IEEE 29148:2018** (Requirements engineering — replaces IEEE 830-1998) · **Cockburn** *Writing Effective Use Cases* (2001) · **BABOK v3** (IIBA 2015)

## Objective
Write complete, traceable and validatable functional specifications to guide development and serve as the basis for MOA UAT.

## Document types
| Document | Context | Detail | Associated skill |
|---|---|---|---|
| **FRS** (General Functional Specifications) | Macro vision, V-model | High-level requirements | this skill |
| **FRD** (Detailed Functional Specifications) | Technical detail, V-model | Business rules, UI | this skill |
| **Functional requirements specification (CDCF)** | RFP, MOA→MOE | Needs + constraints + selection criteria | this skill |
| **User Stories + Acceptance Criteria** | Agile / Scrum / SAFe | PO format, Connextra + Gherkin | [`../scrum/po-user-story.md`](../scrum/po-user-story.md) + [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) |

**Role/methodology routing rule**:
- V-model context → MOA / BA → this skill (FRS, FRD, CDCF) + [`recette-moa.md`](recette-moa.md)
- Agile/Scrum context → PO Scrum → [`../scrum/po-user-story.md`](../scrum/po-user-story.md) + [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) + [`../scrum/po-backlog.md`](../scrum/po-backlog.md)
- SAFe Program context → Product Manager SAFe → [`../safe/`](../safe/)

## FRS ≠ FRD — boundary (aligned with ISO/IEC/IEEE 29148 levels)
| | **FRS** | **FRD** |
|---|---|---|
| 29148 level | StRS / SyRS (stakeholder / system needs) | SRS (software requirements) |
| Question | **What** and **why** (business intent) | **How functionally** (rules, UI, data) |
| Content | Scope, actors, macro processes, high-level requirements, constraints | Detailed use cases, business rules, screens, formats, error codes |
| Reader | Sponsor, business, MOE for scoping | Developer, tester, UAT tester |
| Validation | Scoping committee / sponsor | MOA + MOE review, basis for the UAT cases |

> Principle: the **FRS does not go down to a business-rule level**; the **FRD does not reinvent the scope** — it breaks it down. An FRS requirement (high level) traces to one or more FRD requirements.

## Structure of a typical FRD
```
1. Purpose and scope
2. Reference documents
3. Glossary
4. Description of actors
5. Use cases / Functional scenarios
   5.1 Main flow
   5.2 Alternative flows
   5.3 Exception flows
6. Business rules
7. Non-functional requirements (performance, security, accessibility)
8. UI mockups (if available)
9. Traceability matrix (needs → requirements → test cases)
10. Open points / assumptions
```

## Use case method — Cockburn (2001)
The **"user goal" (sea-level) use case** is the reference grain of an FRD: an actor reaches a business goal in one session.

**Cockburn template — example (insurance)**
```
Use case: Subscribe to an auto policy
Primary actor: Sales advisor
Scope: Subscription system   ·   Level: User goal (sea-level)
Stakeholders & interests: Policyholder (fair quote) · Insurer (controlled risk) · Compliance (IDD respected)
Preconditions: Advisor authenticated, prospect identified
Minimal guarantee: No prospect data lost on failure
Success guarantee: Policy created in "issued" status, premium calculated, documents generated
Trigger: The prospect requests an auto quote

Main scenario:
  1. The advisor enters the profile and the vehicle
  2. The system checks eligibility (rules RG-012..RG-015)
  3. The system calculates the premium
  4. The advisor validates the quote
  5. The system issues the policy and generates the documents

Extensions (alternative flows / exceptions):
  2a. Ineligible profile → the system notifies the reason and proposes a redirection
  3a. Missing pricing data → the system blocks and lists the required fields
  5a. Document generation failure → the policy stays "pending", operations alert
```

## Characteristics of a good requirement (ISO/IEC/IEEE 29148)
> Replaces the improper use of "SMART" (a goals framework, Doran 1981) with the requirements-engineering standard.

- **Necessary**: remove it and a capability is missing → otherwise, delete it.
- **Appropriate**: at the right level (no design detail in the FRS).
- **Unambiguous**: only one possible interpretation.
- **Complete**: self-sufficient, no required information missing.
- **Singular**: one requirement = one thing (no "and" hiding two requirements).
- **Feasible**: technically and budget-wise.
- **Verifiable**: it can be objectively proven satisfied (→ test case).
- **Correct**: faithfully reflects the real need.
- **Conforming**: respects the project's template and glossary.

## Business rules — standard format
```
RG-001: [Rule label]
Trigger: [Event that activates the rule]
Condition: [If...]
Action: [Then...]
Priority: [Mandatory / Desirable / Optional]
```

## Traceability & FRD acceptance criteria
- Each FRD requirement carries a **verifiable acceptance criterion** (a measurable satisfaction condition), reused as-is as the expected result in UAT.
- **Traceability matrix**: need (FRS/StRS) → requirement (FRD/SRS) → test case (cf. [`recette-moa.md`](recette-moa.md) and [`gestion-exigences.md`](gestion-exigences.md)).

## Deliverables
- FRS or FRD depending on the context
- Needs → requirements → test cases traceability matrix
- List of numbered business rules
- Cockburn use cases (main + extensions)
- Documented open points and assumptions

## Output format
Specify: document type · context (V-model, Agile) · functional domain · expected level of detail.

## Sources
- ISO/IEC/IEEE 29148:2018 — *Systems and software engineering — Life cycle processes — Requirements engineering* (requirement characteristics, StRS/SyRS/SRS levels; replaces IEEE 830-1998)
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001) — goal levels, main scenario, extensions
- IIBA — *BABOK Guide v3* (IIBA 2015) — Requirements Analysis & Design Definition
- Doran G. T. — *There's a S.M.A.R.T. way to write management's goals and objectives* (Management Review 1981) — goals framework (to distinguish from requirements)

## Anti-patterns
- ❌ **Mixed levels** — business rules in the FRS, or scope re-described in the FRD → redundant and inconsistent documents.
- ❌ **Non-singular requirement** — "the system calculates the premium **and** issues the policy" = two hidden requirements, untestable separately.
- ❌ **Non-verifiable requirement** — "the interface must be user-friendly" → no possible acceptance criterion.
- ❌ **Use case without extensions** — only the main flow specified → exceptions (the bulk of the code) emerge during UAT.
- ❌ **SMART applied to requirements** — confusing the goals framework with requirements engineering; prefer the ISO 29148 characteristics.
- ❌ **No need → requirement → test traceability** — impossible to prove coverage or assess the impact of a change.

## See also

- [elicitation-besoins.md](elicitation-besoins.md) — upstream needs gathering (BABOK KA #10, 14 techniques, Volere)
- [gestion-exigences.md](gestion-exigences.md) — requirements life cycle, bidirectional traceability (BABOK KA #5)
- [modelisation-processus.md](modelisation-processus.md) — BPMN 2.0 / UML 2.5 for business processes modeled in the FRS
- [recette-moa.md](recette-moa.md) — MOA UAT, test book, sign-off (downstream V-model deliverable, consumes the FRD acceptance criteria)
- [`../scrum/po-user-story.md`](../scrum/po-user-story.md) — Agile bridge: User Story (Connextra), FRD equivalent on the PO Scrum side
- [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) — Acceptance Criteria (Gherkin), equivalent to verifiable business rules on the PO side
