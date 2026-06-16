# Skill — Trigger and Condition Management
> Certifications: BPMN 2.0 OCM (OMG), AWS Certified Solutions Architect (Amazon), ITIL 4 Foundation (Axelos)

## Objective
Define and manage the events that trigger a workflow or a step — entry conditions, intermediate events, exit conditions, and transition rules — for reliable and predictable execution.

## Trigger types

```
TYPE 1 — MANUAL TRIGGER
  The user explicitly starts the workflow
  Example : "Run WF-001 with this client brief"
  Usage   : All on-demand workflows

TYPE 2 — EVENT TRIGGER
  An external event triggers the workflow
  Example : New Jira ticket created → WF-002 starts
  Usage   : Jira, Slack, GitHub integration

TYPE 3 — CONDITIONAL TRIGGER (GATEWAY)
  A logical condition decides the path
  Example : If UX needed = YES → UX-DESIGNER, otherwise → QA-AGILE
  Usage   : All decision gateways in workflows

TYPE 4 — TIME TRIGGER
  A schedule or delay triggers the workflow
  Example : Every Monday → Intelligence & Growth workflow
  Usage   : Recurring workflows (intelligence, reporting)

TYPE 5 — CHAINED TRIGGER
  A workflow's output triggers another workflow
  Example : WF-001 completed → WF-002 starts automatically
  Usage   : Complex workflow chains
```

---

## Template — Trigger definition

```yaml
trigger:
  id: "TRG-WF001-START"
  workflow_id: "WF-001"
  type: "manual"
  
  entry_condition:
    description: "Client brief available and validated"
    criteria:
      - "Business goal defined in 1-2 sentences"
      - "Client industry identified"
      - "Main constraints known (deadline, budget)"
    if_not_met: "Ask for the missing information before starting"
  
  required_parameters:
    - "client_context"
    - "workflow_goal"
    - "methodology"
    - "constraints"
  
  activation_message: |
    Workflow WF-001 — AI Product Scoping
    Context received : [BRIEF SUMMARY]
    Starting in 3... 2... 1...
    First step : AGENT BUSINESS-ANALYST
```

---

## Decision gateways — Template

```yaml
gateway:
  id: "GW-WF001-UX"
  previous_step: "STEP-02 — PO-SCRUM"
  question: "Does the workflow require a UX phase?"
  
  conditions:
    - condition: "Consumer product (B2C) OR complex user interface"
      action: "Trigger STEP-2b — UX-DESIGNER in parallel"
      
    - condition: "Technical B2B product OR simple admin interface"
      action: "Bypass UX-DESIGNER → Go directly to STEP-03 QA-AGILE"
  
  decision_inputs:
    - "Product type (B2C / B2B / internal)"
    - "Interface complexity (simple / moderate / complex)"
    - "Budget and time available for UX"
  
  default_decision: "Include UX-DESIGNER if in doubt"
```

---

## Exit conditions per step

```yaml
exit_conditions:
  - step: "STEP-01 — BUSINESS-ANALYST"
    exit_ok:
      - "Needs map produced"
      - "Stakeholders identified"
      - "In/out scope defined"
    exit_ko:
      - "Brief too vague to analyze"
      - "Contradictions in the requirements"
    action_if_ko: "Ask the user 3 clarifying questions"
  
  - step: "STEP-02 — PO-SCRUM"
    exit_ok:
      - "≥ 8 User Stories written in INVEST format"
      - "Gherkin acceptance criteria on all US"
      - "Priority defined (MoSCoW)"
    exit_ko:
      - "< 5 User Stories"
      - "No acceptance criteria"
    action_if_ko: "Re-run with enriched STEP-01 context"
```

---

## Inter-workflow transition rules

```yaml
workflow_chain:
  - id: "CHAIN-001"
    description: "From scoping to SAFe delivery"
    
    step_1:
      workflow: "WF-001 — AI Product Scoping"
      end_condition: "Backlog ≥ 20 validated US"
      
    transition:
      type: "automatic"
      condition: "WF-001 status = completed AND user validates the move"
      passed_context:
        - "Prioritized backlog (all US)"
        - "Acceptance criteria"
        - "Client constraints"
      
    step_2:
      workflow: "WF-002 — Agile SAFe Delivery"
      entry_agent: "PO-SAFE"
      instruction: |
        WF-001 produced the attached backlog.
        Start the PI Planning based on this backlog.
```

---

## Interruption events

```
PAUSE    : The user temporarily interrupts the workflow
           → Save the full state (context packet + outputs)
           → Resume at the current step

CANCELLATION : The user cancels the workflow
           → List the outputs already produced
           → Offer to save the partial deliverables

SCOPE CHANGE : The scope changes mid-workflow
           → Assess the impact on the following steps
           → Invalidate the affected outputs
           → Propose a recovery plan
```

## Deliverables
- Formalized trigger definitions (YAML)
- Documented decision gateways
- Exit conditions per step
- Inter-workflow transition rules

## Output format
Specify: the workflow at hand, the trigger type, available entry conditions, transition constraints.

## Anti-patterns
- ❌ **Trigger with no exit condition**: a workflow that never ends → explicit end conditions
- ❌ **Unverified webhook** (no signature): fraudulent trigger → validate the webhook signature
- ❌ **No idempotency** on a replayed event: double execution → idempotency key
- ❌ **Time trigger with no catch-up**: a missed run is lost (skipped cron) → catch-up strategy
- ❌ **Workflow chaining with no anti-loop guard**: infinite recursion → depth counter / guard

## Sources
- **BPMN 2.0.2** — OMG (2013): start/intermediate/end events, triggers (message/timer/signal)
- **event-driven / webhook / cron** patterns · webhook security (HMAC signature)

## See also
- [`workflow-design.md`](workflow-design.md) — workflow trigger event
- [`dependency-mapping.md`](dependency-mapping.md) — pass conditions between steps
- [`error-recovery.md`](error-recovery.md) — interruption/error events
- [`workflow-automation.md`](workflow-automation.md) — production triggers (GitHub Actions, n8n)
