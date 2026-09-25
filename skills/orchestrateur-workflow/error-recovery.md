# Skill — Error Handling, Fallbacks, and Workflow Recovery
> Certifications: ITIL 4 Foundation (Axelos), PMP (PMI), AWS Certified Solutions Architect (Amazon), PRINCE2 Practitioner (Axelos)

## Objective
Detect, qualify, and handle errors that occur in an agentic workflow — insufficient output, blocked agent, missing context — and resume execution without losing the work already done.

## Error taxonomy

```
TYPE 1 — OUTPUT ERROR
  The agent produced an incomplete, off-format, or non-compliant result
  → Action: rephrase the prompt and re-run the step

TYPE 2 — CONTEXT ERROR
  The agent lacks information to complete its task
  → Action: enrich the context packet and re-run

TYPE 3 — ROUTING ERROR
  The wrong agent was selected for the task
  → Action: route to the correct agent without losing the context

TYPE 4 — DEPENDENCY ERROR
  The previous step is not completed or validated
  → Action: block the current step and resolve the dependency

TYPE 5 — BUSINESS ERROR
  The output is technically correct but doesn't match the real need
  → Action: clarify the need with the user and restart from the step concerned
```

---

## Error handling matrix

| Type | Detection | Priority | Immediate action | Fallback |
|---|---|---|---|---|
| Incomplete output | Validation criteria not met | High | Re-run with enriched prompt | Alternative agent |
| Missing context | Agent reports missing info | High | Enrich context packet | Ask the user 1 question |
| Wrong routing | Output outside agent's scope | Medium | Route to the correct agent | Requalify the request |
| Missing dependency | Previous step not validated | Critical | Block and resolve | Forced sequential workflow |
| Business error | User invalidates the deliverable | High | Clarify the need | Restart from the step concerned |

---

## Template — Error report

```yaml
error:
  id: "ERR-WF001-STEP02-001"
  workflow_id: "WF-001"
  step: "STEP-02 — PO-SCRUM"
  type: "incomplete_output"
  timestamp: "2026-05-22T10:15:00"
  
  description: |
    The PO-SCRUM agent produced 3 User Stories instead of the 8 expected.
    Acceptance criteria are missing on 2 US.
  
  unmet_criteria:
    - "Number of US < 8"
    - "Acceptance criteria missing on US-02 and US-03"
  
  corrective_action:
    type: "rerun_with_enriched_prompt"
    instructions: |
      Complete the 5 missing US following the INVEST format.
      Add acceptance criteria in Gherkin format on all US.
    agent: "PO-SCRUM"
    
  fallback:
    condition: "If the agent fails again after 2 attempts"
    action: "Escalate to the user for arbitration"
```

---

## Recovery strategies

### Partial recovery (resume at the failed step)
```
WF : [STEP-01 ✓] → [STEP-02 ✗] → [STEP-03 ⏸] → [STEP-04 ⏸]
                         │
                    RESUME HERE
                    (context kept from previous steps)
```

### Full recovery (if context is corrupted)
```
WF : [STEP-01 ✓] → [STEP-02 ✗] → FULL RESET
                         │
              Keep only:
              - Overall client context
              - Non-negotiable constraints
              - Validated outputs of steps before STEP-02
```

### Recovery with an alternative agent
```
STEP-02 : PO-SCRUM → ✗ (2 failed attempts)
        ↓
STEP-02 : BUSINESS-ANALYST → reframe the need
        ↓
STEP-02 : PO-SCRUM → re-run with better context
```

---

## Output validation checklist

```
OUTPUT VALIDATION — [AGENT NAME] — [STEP]
─────────────────────────────────────────────────
☐ The requested format is respected (YAML / Markdown / Table)
☐ The expected volume is reached (e.g. 8 US / 5 risks / 3 wireframes)
☐ All mandatory fields are filled in
☐ The correct business vocabulary is used (SAFe / Scrum / PMI)
☐ The output is directly usable (ready to paste into Jira / Confluence)
☐ No contradiction with the workflow's overall context
☐ The user has validated (if critical step)
```

---

## Escalation to the user

Always escalate if:
- 2 failed correction attempts on the same step
- Ambiguity about the real business need (not resolvable by the agent)
- A decision impacting the scope or budget of the workflow
- An output contradicting validated previous steps

```
ESCALATION MESSAGE
──────────────────────────────────────────────────────
⚠ Blocker on [STEP] — [AGENT NAME]

Problem: [description in 1 sentence]
Attempts: 2 re-runs performed without success
Need: [precise question to the user]

Proposed options:
  A. [Option 1 with consequences]
  B. [Option 2 with consequences]
  C. Change the workflow scope
```

## Deliverables
- Structured error report (YAML)
- Documented recovery plan
- History of correction attempts
- Escalation decision if applicable

## Output format
Specify: the failed step, error type, partial outputs already produced, recovery constraints.

## Anti-patterns
- ❌ **Infinite retry with no backoff or cap**: "thundering herd," costs → exponential backoff + jitter + bounded attempt count
- ❌ **No error taxonomy**: unsuitable uniform handling → distinguish transient / content / system / business
- ❌ **Silent failure** (swallowed error): inconsistent workflow → log + explicit `error` status
- ❌ **No checkpoint**: replay everything from the start → recovery from persisted state (see `context-handoff.md`)
- ❌ **No human escalation** on critical error: stuck loop → defined escalation threshold

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — evaluator-optimizer pattern (correction loop)
- **ITIL 4** (Axelos) — incident management and recovery · **retry / circuit breaker / dead-letter queue** patterns

## See also
- [`context-handoff.md`](context-handoff.md) — recovery from persisted workflow state
- [`output-validation.md`](output-validation.md) — invalid-output detection triggering recovery
- [`workflow-monitoring.md`](workflow-monitoring.md) — alerting on errors
- [`trigger-management.md`](trigger-management.md) — interruption events
