# Counter-Expert Skill — Reasoning Challenge

> **Reference:** CTAL-TM (critical review) · PMI-ACP (informed decision) · ISO 9001 §9.3 (peer review) · Cognitive psychology (Kahneman, Tversky)

---

## Objective

Challenge the reasoning contained in an AI deliverable in a structured way: identify cognitive biases, formulate a solid counter-thesis, and run a red-team session to uncover blind spots before going to production.

---

## Module 1 — Cognitive-bias detection

### Most frequent biases in AI deliverables

| Bias | Description | Warning sign in a deliverable |
|---|---|---|
| **Confirmation** | Seeks only the evidence that confirms | All examples favorable, counter-examples absent |
| **Anchoring** | Overweights the first information received | Solution = a copy of the first example mentioned |
| **Halo** | Generalizes a partial success to the whole deliverable | "It worked on X, so it'll work everywhere" |
| **Dunning-Kruger** | Excessive confidence on a poorly-mastered scope | Definitive assertions on a thinly-documented domain |
| **Availability** | Overweights recent or memorable cases | "The last project failed, so this pattern is bad" |
| **Sunk cost** | Persists in a wrong direction out of inertia | "We've already invested X, we can't change" |
| **AI overconfidence** | Presents a probable answer as certain | Absence of nuance, conditions, limits |
| **Complacency** | Validates to avoid friction | Validation with no real check (→ false positive) |

### Bias report format

```
BIAS DETECTION
==================
Identified bias: [bias name]
Location       : [section / paragraph / deliverable item]
Evidence       : [exact quote of the passage concerned]
Potential impact: [consequence if not corrected]
Recommendation : [neutral rewording or complement to add]
```

---

## Module 2 — Adversarial argumentation (Devil's Advocate)

### 4-step protocol

**Step 1 — Main thesis**
Restate the deliverable's central thesis in 1 sentence.

**Step 2 — Counter-thesis**
Formulate the strongest possible opposing thesis, with the best available evidence.

**Step 3 — Dialectical synthesis**
Identify what is valid in each position. Formulate an enriched position that integrates both.

**Step 4 — Reasoned verdict**
Conclude by stating:
- What withstands the challenge
- What must be amended
- What must be rejected

### Adversarial report format

```
ADVERSARIAL ARGUMENTATION
=============================
Main thesis        : [restatement in 1 sentence]
Counter-thesis     : [opposing thesis + best evidence]

Arguments FOR      :
  1. [argument · source]
  2. [argument · source]

Arguments AGAINST  :
  1. [argument · source]
  2. [argument · source]

Synthesis          : [what withstands / what gives way]
Verdict            : ☐ Thesis validated  ☐ Thesis amended  ☐ Thesis rejected
Required amendment : [corrected wording if verdict = amended]
```

---

## Module 3 — Red Team

### What is red teaming?
Red teaming means deliberately adopting an adversarial stance to try to **break** the deliverable, argument or decision — before a third party or reality does.

### AI red-team protocol (3 attacks minimum)

| Attack axis | Adversarial question | What it reveals |
|---|---|---|
| **Edge case** | In which precise case does this solution fail? | Fragility of the assumptions |
| **Hostile actor** | How would a malicious user exploit this? | Unanticipated vulnerabilities |
| **Hidden assumption** | Which implicit assumption becomes false in a real context? | Undeclared dependencies |
| **Worst case** | If we deploy this to production tomorrow, what happens on failure? | Impact and reversibility |
| **Obsolescence** | In 6 months, which part of this deliverable will be outdated? | Lifespan and maintenance |

### Red-team report format

```
RED TEAM SESSION
================
Target       : [deliverable / decision / argument]
Date         : [DD/MM/YYYY]
Attacker     : AGENT-AUDIT-METHODO-IA

ATTACK #1 — [attack axis]
  Vector     : [attack description]
  Result     : ☐ Withstands  ☐ Partially vulnerable  ☐ Fails
  Evidence   : [why it withstands or fails]
  Recommendation : [hardening if vulnerable]

[Repeat for each attack]

RED TEAM SUMMARY:
  Total attacks     : [N]
  Withstood         : [N]
  Vulnerabilities   : [N]
  Failures          : [N]
  Verdict           : ☐ Robust  ☐ To harden  ☐ To reject
```

---

## Note on the model's blind spots

On the same LLM model, the biases of the producing agent and of this one are **correlated** (same architecture, same training). For high-stakes deliverables, propose a cross-validation on a different model (e.g.: if produced on Claude Sonnet, have it validated on GPT-4o or Gemini Advanced).
