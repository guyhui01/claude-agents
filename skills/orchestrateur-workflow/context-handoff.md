# Skill — Context Management and Inter-Agent Handoffs
> Certifications: Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objective
Ensure that each agent in the workflow receives the exact context it needs — no more, no less — to produce a quality output, with no information loss between steps.

## Principle — Context Handoff

Each handoff between agents follows this pattern:

```
AGENT A (producer)
    │
    │  [OUTPUT A] = structured result
    │  [CONTEXT PACKET] = context to pass on
    ▼
AGENT B (consumer)
    │
    │  Receives: [CONTEXT PACKET] + [OUTPUT A]
    │  Produces: [OUTPUT B]
    ▼
AGENT C ...
```

---

## Template — Standard Context Packet

```yaml
context_packet:
  workflow_id: "WF-001-AI-PRODUCT-SCOPING"
  current_step: "STEP-02 — PO-SCRUM"
  previous_step: "STEP-01 — BUSINESS-ANALYST"

  global_context:
    client: "[Name / industry / size]"
    workflow_goal: "[Expected final result]"
    methodology: "[Scrum / SAFe / Hybrid]"
    constraints: "[GDPR, deadline, budget]"
    deliverable_language: "[FR / EN]"

  previous_outputs:
    - step: "STEP-01"
      agent: "BUSINESS-ANALYST"
      deliverable: |
        [Paste the result of the previous step here]
      status: "validated"  # validated / to rework / partial

  current_agent_instructions:
    role: "[Specific role expected from the agent at this step]"
    expected_input: "[What the agent should use as a basis]"
    expected_output: "[What the agent should produce precisely]"
    output_format: "[Jira table / YAML / Markdown / JSON]"
    specific_constraint: "[e.g. max 10 US / SAFe format / INVEST]"
```

---

## Context handoff rules

### What must ALWAYS be passed
- Overall goal of the workflow
- Client identity and industry
- Non-negotiable constraints (GDPR, critical deadline, budget)
- Validated outputs of previous steps
- Expected output format

### What must be FILTERED (don't overload)
- Intermediate exchanges and draft versions
- Technical context not relevant to the next agent
- The orchestrator's internal comments

### Validation rule before handoff
```
CHECKLIST BEFORE HANDOFF
──────────────────────────────────────────
☐ Is the previous step's output complete?
☐ Has the output been validated (by the user or an automatic criterion)?
☐ Is the context packet filled in?
☐ Are the next agent's specific constraints specified?
☐ Is the expected output format defined?
```

---

## Handoff prompt — Ready-to-use template

```
You are [AGENT NAME].
Read the context below carefully before acting.

## OVERALL WORKFLOW CONTEXT
- Workflow: [WORKFLOW NAME]
- Client: [INDUSTRY / SIZE]
- Final goal: [EXPECTED RESULT]
- Methodology: [SCRUM / SAFE / HYBRID]
- Constraints: [GDPR / DEADLINE / BUDGET]

## COMPLETED PREVIOUS STEPS
[AGENT X] produced:
---
[OUTPUT OF THE PREVIOUS STEP]
---

## YOUR MISSION FOR THIS STEP
- Input: [WHAT YOU MUST USE]
- Expected output: [WHAT YOU MUST PRODUCE]
- Format: [MARKDOWN / YAML / JIRA TABLE]
- Specific constraint: [e.g. MAX 8 US / INVEST FORMAT]

Confirm that you understood the context, then produce the requested output.
```

---

## Workflow state management

```yaml
workflow_state:
  id: "WF-001"
  status: "in_progress"  # started / in_progress / waiting / completed / error
  current_step: 2
  total_steps: 5
  
  steps:
    - id: 1
      agent: "BUSINESS-ANALYST"
      status: "completed"
      output_valid: true
      timestamp: "2026-05-22T09:30:00"
    
    - id: 2
      agent: "PO-SCRUM"
      status: "in_progress"
      output_valid: false
      timestamp: "2026-05-22T09:45:00"
    
    - id: 3
      agent: "UX-DESIGNER"
      status: "waiting"
      output_valid: null
      timestamp: null
```

## Deliverables
- Context Packet filled in for each handoff
- Workflow state updated at each step
- History of validated outputs
- Handoff prompts ready to copy-paste

## Output format
Specify: the current step, producer agent, consumer agent, outputs to pass on, expected output format.

## Anti-patterns
- ❌ **Passing everything** with no filtering: context overload, cost, and loss of focus → pass only what's useful (see filtering rules)
- ❌ **Passing unvalidated drafts**: downstream error propagation → validation checklist before handoff
- ❌ **No persisted state management**: recovery impossible after an error → saved workflow state
- ❌ **PII passed without filtering** to the next agent: GDPR risk → filter personal data
- ❌ **Unstructured context** (accumulated free text): the next agent doesn't know what to prioritize → formatted context packet

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — context passing between steps
- **Model Context Protocol** — modelcontextprotocol.io (transport and sharing of structured context)

## See also
- [`workflow-design.md`](workflow-design.md) — sequencing of the steps feeding the handoff
- [`error-recovery.md`](error-recovery.md) — recovery from persisted state
- [`workflow-monitoring.md`](workflow-monitoring.md) — workflow state tracking
- [`mcp-orchestration.md`](mcp-orchestration.md) — context sharing via MCP
