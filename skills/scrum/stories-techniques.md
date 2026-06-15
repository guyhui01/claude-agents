# Skill — Technical User Stories (tech debt, spikes, infrastructure)

> Certification: PSPO I · PSPO II · ICAgile ICP-APO
> Agent: AGENT-PO-SCRUM.md

## Objective

Recognize, frame and prioritize **technical User Stories** in the Scrum Product Backlog — those that don't deliver direct business value to the end user but are **essential to product health** (technical debt, exploration, infrastructure). Decide when a technical story is legitimate, how to write it and what ratio to maintain against functional US.

> 🔗 **In a SAFe context** → these stories become an **official "Enabler Stories" category** with 4 formalized types. See `skills/safe/feature-to-story-splitting.md`, section "Enabler Stories — Official SAFe category".

## The 3 types of technical stories in Scrum

### Type 1 — Tech Debt Story (debt repayment)

Refactoring, modernization, dead-code removal, updating obsolete dependencies.

**Examples:**
- Migrate the DB MySQL 5.7 → MySQL 8 (security + perf)
- Refactor the `checkout` module to reduce coupling with `inventory`
- Remove the legacy code branch `v1_pricing` (dead for 6 months)
- Upgrade Spring Boot 2.7 → 3.2

**When it's legitimate:**
- Measurable operational risk (incident, security, performance)
- Blocker for delivering a planned feature
- Maintenance cost rising sprint after sprint

### Type 2 — Spike Story (timeboxed exploration)

Research, prototyping or evaluation to remove an uncertainty **before** committing to implementation.

**Examples:**
- Evaluate 3 PDF-generation libs (2-day timebox)
- Measure the expected performance of a call to an external vs local LLM
- Understand the new banking partner's API before committing a US

**Golden rules of the Spike:**
- **Always timeboxed** (2-5 days max)
- **Output = decision note** (1 page), not production code
- **Code = throwaway** (POC, not shipped)
- **Explicit question to answer** in the statement

### Type 3 — Infrastructure / Tooling Story

CI/CD, observability, quality, security — anything that improves the team's **delivery capability**.

**Examples:**
- Set up the GitHub Actions pipeline for the `notifications` service
- Add Prometheus metrics on the critical endpoints
- Configure SonarQube with a blocking threshold at 80% coverage
- Provision a dedicated staging environment

---

## Recommended writing format

### Adapted template (no "As a user…")

The classic Connextra template (*"As an X, I want Y, so that Z"*) **does not fit** technical stories — there's no direct business user. Use an adapted format:

```
TITLE         : [precise technical verb]
TYPE          : Tech Debt / Spike / Infra

CONTEXT       : [why now — risk, blocker, opportunity]

OBJECTIVE     : [expected technical result in 1 sentence]

BENEFIT       : [consequence for the end user, the team or the product
                — always tie it to value, even indirectly]

ACCEPTANCE CRITERIA:
  □ AC1 — [verifiable, testable]
  □ AC2 — [verifiable, testable]
  □ AC3 — [verifiable, testable]

ESTIMATE      : [story points]
LABEL         : tech-debt / spike / infra (for backlog filtering)
```

### Tech Debt Story example

```
TITLE     : Migrate the checkout module to Spring Boot 3.2
TYPE      : Tech Debt

CONTEXT   : Spring Boot 2.7 end of support June 2026, an unpatched CVE
            vulnerability on the current lib.

OBJECTIVE : Checkout module on Spring Boot 3.2, tests passing, perf maintained.

BENEFIT   : Removes a security risk blocking the Q3 audit + unlocks the use of
            new Spring features (reduced future dev time).

AC:
  □ AC1 — Checkout module buildable and deployable on Spring Boot 3.2
  □ AC2 — Test coverage ≥ 80% maintained after migration
  □ AC3 — No perf regression detected on the reference scenario
          (P95 < 200ms on /api/checkout/validate)
  □ AC4 — README documentation updated with the new version

ESTIMATE  : 8 SP
LABEL     : tech-debt
```

### Spike Story example

```
TITLE     : Evaluate 3 PDF-generation libraries for invoices
TYPE      : Spike

CONTEXT   : "Custom invoice" feature planned for PI+1, stack choice to make.

OBJECTIVE : Decision note recommending 1 library among iText, PDFBox, Puppeteer.

BENEFIT   : Secures the estimate of the "custom invoice" Feature
            and avoids a poor stack choice (later migration cost).

TIMEBOX   : 2 days
OUTPUT    : 1-page note (Confluence) with criteria + recommendation + throwaway POC

AC:
  □ AC1 — Note published with a comparison matrix (perf, license, complexity, docs)
  □ AC2 — Throwaway POC validated on the "5-page invoice with logo + table" scenario
  □ AC3 — Recommendation discussed with the team and the tech lead

ESTIMATE  : 3 SP
LABEL     : spike
```

---

## INVEST adapted to technical stories

| Criterion | Tech Debt | Spike | Infra |
|---|---|---|---|
| **I**ndependent | ⚠️ Often dependent on a functional US | ✅ Yes by nature | ✅ Yes most of the time |
| **N**egotiable | ⚠️ Often constrained (CVE, end of support) | ✅ Yes (timebox + scope) | ✅ Yes |
| **V**aluable | ✅ Indirect but real (risk avoided, future velocity) | ✅ Informed decision | ✅ Delivery capability |
| **E**stimable | ✅ Yes | ✅ Timeboxed | ✅ Yes |
| **S**mall | ✅ Otherwise split | ✅ Always (2-5 days max) | ✅ Yes |
| **T**estable | ✅ Measurable technical AC | ⚠️ "Decision made" is the AC | ✅ Yes |

---

## DoR specific to technical stories

- [ ] **Explicit "why now" justification** (not "it would be better")
- [ ] **Benefit traced to the user or the product** (never "it's just technical")
- [ ] **Technically measurable AC** (perf, coverage, version, metric)
- [ ] **Spike: explicit question + timebox + expected output**
- [ ] **Tech Debt: quantified risk** if not done (probability × impact)
- [ ] **"tech-debt / spike / infra" label** set in the tool for filtering

---

## Debt / value ratio — The 15-20% rule

### Lean-Agile principle

> **15 to 20% of each sprint's capacity** should go to technical stories (all categories combined).

| Context | Recommended ratio |
|---|---|
| Young product (< 1 year), little debt | 10-15% |
| Mature product in normal run | **15-20%** (baseline) |
| Product with identified critical debt | 25-30% (for 2-3 PIs) |
| Heavy rebuild / modernization | 30-40% (Spike + Enabler dominant) |

### How to maintain the ratio

1. **Explicit per-sprint allocation**: "5 SP reserved for debt" in Sprint Planning
2. **Thematic rotation**: 1 "quality"-focused sprint every N sprints
3. **Visible quota**: "Technical vs functional capacity" dashboard in the sprint
4. **Retrospective discussion**: if debt ↑ and incidents ↑ → increase the ratio

### Warning signs

- 🚨 0% technical stories over 3 consecutive sprints → accumulating debt
- 🚨 Velocity dropping for no apparent reason → debt slowing things down
- 🚨 Recurring bugs on the same module → need for a refactoring Tech Debt Story
- 🚨 Estimates blowing up mid-sprint → need for an upfront Spike

---

## When a technical story is NOT the right answer

| Case | Why not a story | Alternative |
|---|---|---|
| Production bug | Not a story (not new) | **Incident / Bug ticket** separate from the backlog |
| Task < 1 day included in a functional US | Too granular | **Sub-task** of the parent US |
| Recurring maintenance (monthly dep updates) | Ongoing activity, not a deliverable | **BAU / running cost**, outside the product backlog |
| Pure IT request (server provisioning) | No product value | **ITSM ticket**, not the Scrum backlog |
| "Legacy code to remove someday" with no immediate risk | No "now" justification | **Note in the improvement backlog**, not a ready US |

---

## Anti-patterns to avoid

- ❌ **Technical stories as a "wishlist"** with no traced risk or benefit → they'll never be prioritized
- ❌ **Turning everything into a technical story** ("refactor" as an excuse not to deliver) → loss of stakeholder trust
- ❌ **Spike with no timebox** → a POC that becomes an unmaintainable product
- ❌ **Spike whose output is production code** → that's no longer a Spike, it's a US in disguise
- ❌ **Vague AC** ("the code is clean", "the architecture is better") → impossible to validate, never done
- ❌ **0% capacity allocated to debt** → time bomb, velocity collapsing in 6 months
- ❌ **A PO who systematically refuses technical stories** → the team does them "in secret", loss of visibility
- ❌ **Hiding the technical story inside a functional US** → distorted estimate + no prioritization debate

---

## Cross-link with other skills

| If the goal is… | Go see |
|---|---|
| Write a functional US (Connextra) | `skills/scrum/po-user-story.md` |
| Manage the backlog (structure, refinement) | `skills/scrum/po-backlog.md` |
| Prioritize against functional US | `skills/scrum/priorisation-techniques.md` |
| Estimate in Planning Poker | `skills/scrum_master/planning-poker.md` |
| **In a SAFe context → official Enabler Stories** | `skills/safe/feature-to-story-splitting.md` |

---

## 📌 Callout — In a SAFe context: "Enabler Stories"

In SAFe, these technical stories become an **official category** called **Enabler Stories**, with 4 formalized types:

| SAFe type | Scrum equivalent (this skill) |
|---|---|
| **Architectural** | Tech Debt Story (architectural rework) |
| **Infrastructure** | Infrastructure / Tooling Story |
| **Exploration (Spike)** | Spike Story |
| **Compliance** | Tech Debt Story (compliance work) |

Additional SAFe specifics:
- Linked to an **Enabler Feature** or a parent Feature
- Capacity reserved **12-20%** at the ART level
- **System Architect** validation for the Architectural / Infrastructure types
- Visible in the **Program Backlog** and the **Solution Backlog**

→ Full details, ART rules, PI Planning integration: `skills/safe/feature-to-story-splitting.md`

---

## Deliverables

- Technical stories written in the adapted format (by type)
- Labeled backlog (tech-debt / spike / infra) for filtering
- Sprint dashboard with a "technical vs functional capacity" ratio
- Decision note for each Spike (1 page, archived in Confluence)
- Technical-debt repayment plan (over 2-3 PIs)

## Output format

Specify: **technical story type** (Tech Debt / Spike / Infra / all 3), **product context** (young / mature / being rebuilt), **current debt ratio** (if known), **target tool** (Jira / Linear / Notion), **expected deliverable** (writing a story / debt plan / team template).
