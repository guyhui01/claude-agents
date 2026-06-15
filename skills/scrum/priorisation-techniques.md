# Skill — Product Backlog prioritization techniques

> Certification: PSPO II · PSPO III · ICAgile ICP-APO
> Agent: AGENT-PO-SCRUM.md

## Objective

Choose and apply the right prioritization technique for the context (early stage, mature, multi-stakeholder, budget constraint, AI product…) to maximize the value delivered each sprint, relying on objective criteria that are defensible to stakeholders.

## Quick selection grid

| Context | Recommended technique | Why |
|---|---|---|
| Scope-constrained release (fixed deadline) | **MoSCoW** | Communicable, negotiable, traceable |
| Data-driven comparison between features | **RICE** | Quantified, implicit ROI |
| Customer satisfaction (perceived quality) | **Kano** | Distinguishes basic / performance / delighter |
| Exploded backlog, fast arbitration | **Value vs Effort** | Visual 2×2, 30-min workshop |
| Workshop with divergent stakeholders | **Buy a Feature** | Engaging, reveals the real priorities |
| Budgeted collective vote | **$100 test** | Forces trade-offs |
| Identifying underserved opportunities | **Opportunity Scoring** | Importance × Dissatisfaction |
| SAFe context (Program, ART) | **WSJF** → AGENT-PO-SAFE.md | Out of team-Scrum scope |

---

## 1. MoSCoW — Must / Should / Could / Won't

### Operational definition of the 4 levels

| Level | Objective criterion | Action |
|---|---|---|
| **Must Have** | Without it, the release is a failure (compliance, contract, core value) | Current sprint / locked |
| **Should Have** | Important, but workable around (acceptable workaround) | Next sprint |
| **Could Have** | Adds value if capacity is available | Medium-term backlog |
| **Won't Have (this time)** | Acknowledged useful, but explicitly excluded from current scope | Future roadmap / declined |

### Golden rule for Must Haves

> **Must** items must not exceed **60% of the release capacity**.
> Otherwise: prioritization didn't happen — everything is "critical" = nothing is critical.

### MoSCoW decision template (1 line per feature)

```
[Feature]: [level]
Rationale: [why this level, in 1 sentence]
Consequence if not delivered: [business or user impact]
Acceptable workaround: [yes / no + which one]
```

### Pitfalls to avoid

- ❌ Putting everything in Must → it's a wish list, not a prioritization
- ❌ Putting in Won't what will "never" be done → use a "Rejected" status
- ❌ MoSCoW frozen for 6 months → re-evaluate at each refinement

---

## 2. RICE — Reach × Impact × Confidence / Effort

### Formula

```
RICE Score = (Reach × Impact × Confidence) / Effort
```

### Standard scales

| Criterion | Scale | Definition |
|---|---|---|
| **Reach** | Number of users / quarter | How many people affected over a period? |
| **Impact** | 0.25 / 0.5 / 1 / 2 / 3 | Minimal / Low / Medium / High / Massive per affected user |
| **Confidence** | 50% / 80% / 100% | Confidence in the Reach + Impact estimates |
| **Effort** | Person-months | Estimated team cost |

### Worked example

```
Feature A — Onboarding redesign
Reach = 2000 users/quarter · Impact = 2 · Confidence = 80% · Effort = 3 PM
Score = (2000 × 2 × 0.8) / 3 = 1067

Feature B — PDF export
Reach = 500 users/quarter · Impact = 1 · Confidence = 100% · Effort = 1 PM
Score = (500 × 1 × 1) / 1 = 500

→ Prioritize A (1067 > 500)
```

### When to use it
- Backlog > 20 items with usage data available
- Stakeholders asking for quantified justification
- Comparison between heterogeneous features

---

## 3. Kano Model — Perceived quality

### 5 categories of user satisfaction

| Category | Description | B2B SaaS example |
|---|---|---|
| **Must-Be (basic)** | Absence = strong dissatisfaction, presence = neutral | Working SSO, CSV export |
| **Performance (linear)** | The better it is, the higher satisfaction rises | Load speed |
| **Excitement (attractive)** | Absence = neutral, presence = strong satisfaction ("wow" effect) | Contextual AI assistant |
| **Indifferent** | No impact on satisfaction | Changeable color skin |
| **Reverse** | Presence = dissatisfaction (e.g. too many options) | Notifications on by default |

### Kano questionnaire method

For each feature, ask 2 questions to 5+ users:
- **Functional**: "How would you feel if this feature were present?"
- **Dysfunctional**: "How would you feel if it were absent?"

→ Answers (I like it / Must be / Neutral / Tolerate / Dislike) → categorization matrix.

### Kano prioritization rules

1. All **Must-Be** must be implemented (hygiene)
2. Maximize **Performance** within the resource limit
3. Select 1-2 **Excitement** per release (differentiation)
4. Ignore or remove the **Indifferent** and **Reverse**

---

## 4. Value vs Effort Matrix (2×2)

### Construction

```
       ▲ High value
       │
   QUICK WINS    │   BIG BETS
   (Do quickly)  │   (Plan)
   ──────────────┼──────────────────▶ High effort
   FILL-INS      │   MONEY PITS
   (If capacity) │   (Avoid)
       │
       ▼ Low value
```

### 30-min workshop

1. List 15-30 backlog items on sticky notes (5 min)
2. Collective placement: perceived value × estimated effort (15 min)
3. Decision, quadrant by quadrant (10 min):
   - Quick Wins → top of the backlog
   - Big Bets → analyze ROI first
   - Fill-Ins → opportunity reservoir
   - Money Pits → close or remove

---

## 5. Buy a Feature — Collaborative workshop

### Principle

Give stakeholders a fictitious "budget" so they can "buy" the features they want.

### Preparation

- 15-20 features with a proposed price (proportional to effort)
- Budget per participant = ~40-60% of the total budget needed
- Force collaboration (some features must be bought jointly)

### Run (60-90 min)

1. Quick pitch of each feature by the PO (2 min/feature)
2. Individual buying phase (15 min)
3. Negotiation and pooling phase (30 min)
4. Summary: what gets bought = priority

### Value

Reveals the **real stakeholder priorities** (not "everything is important") + builds alignment through direct negotiation.

---

## 6. $100 Test — Budgeted vote

Hand out $100 (fictitious) to each stakeholder to spread across N features.

### Variants
- **Standard**: $100 per stakeholder, read the totals
- **Weighted**: different budgets by stakeholder weight (CEO=$200, business=$100, support=$50)
- **Anti-spam**: maximum $30 per feature (forces diversification)

### Advantages
- Fast (15 min)
- Forces trade-offs (limited budget)
- Quantitative data per stakeholder

---

## 7. Opportunity Scoring (Outcome-Driven Innovation)

### Formula

```
Opportunity Score = Importance + max(Importance - Satisfaction, 0)
```

### Method

1. Identify the "outcomes" (results the user seeks, not the features)
2. For each outcome, measure:
   - **Importance** (1-10): how important is it?
   - **Satisfaction** (1-10): how satisfied are you today?
3. Compute the score → opportunities = high importance + low satisfaction

### Interpretation

| Score | Reading |
|---|---|
| > 15 | Major opportunity (underserved) |
| 12-15 | Significant opportunity |
| 10-12 | To watch |
| < 10 | Saturated (over-served) or low importance |

---

## Cross-cutting anti-patterns

- ❌ Choosing a single technique forever → adapt to the context
- ❌ Prioritization with no explicit criteria → indefensible "PO feeling"
- ❌ Prioritization with no user data → HiPPO bias (Highest Paid Person's Opinion)
- ❌ Ignoring technical debt in prioritization → time bomb
- ❌ Re-prioritizing on every stakeholder request → team instability

## Typical deliverables

- Prioritized backlog with score / category per technique used
- Workshop notes (Buy a Feature, $100 test) with photos / Miro screenshots
- Method scoping note + criteria (for stakeholder defense)
- Roadmap derived from the prioritization (Now / Next / Later)

## Output format

Specify: **desired technique** (MoSCoW / RICE / Kano / Value-Effort / Buy a Feature / $100 / Opportunity Scoring), **list of items to prioritize**, **stakeholders involved**, **constraints** (deadline, budget, team), **available data** (usage, NPS, interviews).
