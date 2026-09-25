# Skill — Few-Shot and In-Context Learning
> Certifications: DeepLearning.AI Prompt Engineering for Developers (Andrew Ng), Anthropic Claude Code in Action (2026)

## Objective
Design effective few-shot examples to guide the LLM toward the exact output format and quality expected — example selection, diversity, ordering, and optimal dosage.

## Few-shot learning principles

```
GOLDEN RULES
────────────────────────────────────────────────────────────
1. The examples must COVER the diversity of the expected cases
2. Example order influences the answer (put the closest ones last)
3. 2-5 examples are usually enough (beyond that → diminishing returns)
4. Example format IDENTICAL to the expected output format
5. Negative examples (what NOT to do) are useful too
```

## Standard few-shot template

```
Here are examples of the expected output format.

---EXAMPLE 1---
Input  : [Input example 1 — simple case]
Output : [Exact expected output — simple case]

---EXAMPLE 2---
Input  : [Input example 2 — moderate case]
Output : [Exact expected output — moderate case]

---EXAMPLE 3---
Input  : [Input example 3 — close to the real case]
Output : [Exact expected output — close case]

---YOUR TURN---
Input  : [REAL CASE TO HANDLE]
Output : 
```

## Examples applied to the agent catalog

### Few-shot for User Stories (PO-SCRUM)
```
---EXAMPLE 1---
Need : "Filter the products of an e-commerce catalog"
US   : As a customer, I want to filter products by category and price so that I can quickly find what fits my budget. | AC: Given the catalog is displayed, When I select a filter, Then the list updates < 1s | 3pts | Must Have

---EXAMPLE 2---
Need : "Export the sales data"
US   : As a sales admin, I want to export the sales report as CSV so that I can analyze performance in Excel. | AC: Given the report is displayed, When I click "Export CSV", Then the download starts < 3s | 2pts | Should Have

---YOUR TURN---
Need : "[CLIENT NEED]"
US   :
```

### Few-shot for WSJF (PO-SAFE)
```
---EXAMPLE 1---
Feature : "Prospect scoring module"
BV=8, TC=5, RR=3, Job Size=5 → CoD=16, WSJF=3.2 → MEDIUM priority

---EXAMPLE 2---
Feature : "CSV reporting export"
BV=3, TC=2, RR=1, Job Size=1 → CoD=6, WSJF=6.0 → HIGH priority (small size)

---YOUR TURN---
Feature : "[FEATURE]"
BV=[?], TC=[?], RR=[?], Job Size=[?] → CoD=[?], WSJF=[?] →
(relative estimation, smallest = 1 per column, Fibonacci — see skills/safe/wsjf.md)
```

## Example selection — Strategy

```
SELECTION CRITERIA
────────────────────────────────────────────────────────────
✓ Representative: cover edge cases and standard cases
✓ Correct: examples validated by domain experts
✓ Diverse: not all of the same type
✓ Calibrated in difficulty: from simplest to most complex
✓ Recent: if the domain evolves quickly (AI Act, SAFe versions)

PITFALLS TO AVOID
────────────────────────────────────────────────────────────
❌ Examples contradicting each other
❌ Example format ≠ expected output format
❌ Too many examples (> 5 in general)
❌ All examples from the same sector (bias)
```

## Deliverables
- Few-shot example library per domain (US, WSJF, analyses, reports)
- Few-shot template tailored to the use case
- Example selection guide

## Output format
Specify: task type, expected output format, 2-3 examples representative of the domain.

## Sources
- **Few-shot / In-context learning** — Brown et al., *Language Models are Few-Shot Learners*, *NeurIPS 2020* (arXiv 2005.14165, GPT-3 paper)
- **Anthropic — Prompt Engineering Guide** (docs.anthropic.com) — multishot prompting, example selection

## See also
- [`chain-of-thought.md`](chain-of-thought.md) — CoT few-shot (reasoning examples)
- [`system-prompt-design.md`](system-prompt-design.md) — examples embedded in the system prompt
- [`prompt-evaluation.md`](prompt-evaluation.md) — evaluate the effect of examples
- [`../safe/wsjf.md`](../safe/wsjf.md) — WSJF business example used in few-shot
