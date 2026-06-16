# Skill — Validation and Quality Control of Inter-Agent Outputs
> Certifications: PMP (PMI), PMI-ACP (PMI), ITIL 4 Foundation (Axelos), SAFe 6 Agilist (Scaled Agile)

## Objective
Assess the quality and compliance of each output produced by an agent before passing it to the next step — to prevent error propagation in the workflow and ensure usable final deliverables.

## Universal validation grid

```
OUTPUT VALIDATION — [AGENT] — [STEP]
─────────────────────────────────────────────────────────
DIMENSION 1 — COMPLETENESS
  ☐ All expected elements are present
  ☐ The volume matches the criteria (e.g. 8 US, 5 risks)
  ☐ No missing section

DIMENSION 2 — FORMAT
  ☐ The requested format is respected (Markdown / YAML / Table)
  ☐ The structure complies with the template
  ☐ The correct business vocabulary is used

DIMENSION 3 — CONTENT QUALITY
  ☐ The output meets the mission defined for the step
  ☐ No contradiction with the workflow's overall context
  ☐ The output is directly usable (ready to copy-paste)

DIMENSION 4 — CROSS-STEP CONSISTENCY
  ☐ The output is consistent with the outputs of previous steps
  ☐ Cross-references are correct (e.g. IDs, names, scope)
  ☐ No regression against decisions already made

SCORE : [X/12 criteria met]
STATUS : ✅ Validated / ⚠ To rework / ❌ Rejected
```

---

## Validation criteria per agent

### PO-SCRUM — User Stories
```yaml
us_validation_criteria:
  - "INVEST format respected (Independent, Negotiable, Valuable, Estimable, Small, Testable)"
  - "Each US has a title, a 'As a...' description, an acceptance criterion"
  - "Acceptance criteria in Gherkin format (Given / When / Then)"
  - "Estimate in points or T-shirt sizing present"
  - "Priority defined (MoSCoW or WSJF)"
  - "US < 1 sprint (no disguised epic)"
```

### PO-SAFE — Features
```yaml
features_validation_criteria:
  - "SAFe format: Title + Benefit Hypothesis + Acceptance Criteria"
  - "Measurable Benefit Hypothesis (target KPI)"
  - "Size estimated in story points (8-13 US max per feature)"
  - "ART level specified (Team / Program)"
  - "Cross-team dependencies identified"
  - "WSJF calculated"
```

### AI-ARCHITECT — Architecture
```yaml
architecture_validation_criteria:
  - "Architecture diagram present (components, flows, APIs)"
  - "Technology choices justified"
  - "Security by design mentioned (authentication, encryption)"
  - "Scalability and performance addressed"
  - "GDPR / AI Act constraints taken into account"
  - "Estimated infrastructure cost"
```

### QA-AGILE — Test plan
```yaml
qa_validation_criteria:
  - "Test cases cover all acceptance criteria"
  - "Regression tests identified"
  - "Test environments defined"
  - "Test levels specified (unit / integration / E2E)"
  - "DoD defined and validated with the team"
  - "Go/no-go criteria for go-live"
```

### CHEF-PROJET-IA — Reporting
```yaml
reporting_validation_criteria:
  - "1-page format respected"
  - "RAG status (Red / Amber / Green) for each axis"
  - "EVM calculated (if applicable)"
  - "Top 3 risks with mitigation"
  - "Next decisions to make identified"
  - "Date of the next review specified"
```

---

## Formal Validation Template

```yaml
validation:
  id: "VAL-WF001-STEP02"
  workflow_id: "WF-001"
  step: "STEP-02 — PO-SCRUM"
  agent: "PO-SCRUM"
  timestamp: "2026-05-22T10:30:00"
  
  results:
    completeness:
      score: 3/4
      details: "7 US out of 8 expected — 1 missing"
      
    format:
      score: 4/4
      details: "INVEST format respected, Gherkin present"
      
    content_quality:
      score: 3/4
      details: "Estimates missing on 2 US"
      
    consistency:
      score: 4/4
      details: "Consistent with the BUSINESS-ANALYST scoping"
  
  overall_score: "14/16"
  status: "to_rework"
  
  required_actions:
    - "Complete the missing 8th User Story"
    - "Add estimates on US-04 and US-07"
  
  validated_by: "Orchestrator"
  user_validation_required: false
```

---

## Decision thresholds

```
SCORE   STATUS          ACTION
─────────────────────────────────────────────────────
100%    ✅ Validated     Move to the next step
87-99%  ⚠ Minor         Fix in place, don't re-run
75-86%  ⚠ Major         Re-run the agent with precise instructions
< 75%   ❌ Rejected      Re-run + enrich the context (max 2 times)
2 failures → Escalate to the user
```

## Deliverables
- Validation grid filled in for each output
- Documented score and status
- Documented corrective actions if needed
- History of the workflow's validations

## Output format
Specify: the agent assessed, the workflow step, the output to validate (paste the content), the expected acceptance criteria.

## Anti-patterns
- ❌ **Subjective validation** ("looks good") with no objective criteria: not reproducible → grid + explicit thresholds
- ❌ **No blocking gate**: an invalid output flows downstream → block until the threshold is reached
- ❌ **Validating format without substance**: valid JSON but wrong content → semantic check (see business rules)
- ❌ **Uncalibrated LLM-as-judge**: lenient judge → precise criteria + reference cases (golden set)
- ❌ **No correction loop**: rejecting without re-injecting → evaluator-optimizer (see `error-recovery.md`)

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — **evaluator-optimizer** pattern
- **INVEST** (Bill Wake, 2003) / **Gherkin** (Cucumber) — criteria for PO/QA outputs · **DoD** (Scrum Guide 2020)

## See also
- [`error-recovery.md`](error-recovery.md) — recovery on invalid output
- [`workflow-monitoring.md`](workflow-monitoring.md) — rejection rate as a metric
- [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) — structured validation prompt
- [`../critique_conformite/gate-validation-livrable.md`](../critique_conformite/gate-validation-livrable.md) — DoD gate before promotion
