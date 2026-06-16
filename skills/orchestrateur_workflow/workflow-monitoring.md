# Skill — Monitoring, Metrics, and Execution Reporting
> Certifications: ITIL 4 Foundation (Axelos), PMP (PMI), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objective
Track the execution of an agentic workflow in real time — step status, output quality, agent performance — and produce concise reporting to enable fast decision-making.

## Monitoring dashboard — Template

```
WORKFLOW : [NAME] — ID : [WF-00X]
DATE     : [DATE] — DURATION : [X min]
STATUS   : 🟢 In progress / 🟡 Waiting / 🔴 Error / ✅ Completed
─────────────────────────────────────────────────────────────────

PROGRESS
───────────────────────────────────────────────
STEP-01 [BUSINESS-ANALYST]   ✅ Completed    8 min
STEP-02 [PO-SCRUM]           ✅ Completed   12 min
STEP-03 [UX-DESIGNER]        🔄 In progress -- min  (ETA: 15 min)
STEP-04 [QA-AGILE]           ⏸ Waiting      -- min
STEP-05 [CHEF-PROJET-IA]     ⏸ Waiting      -- min

OVERALL PROGRESS : 2/5 steps completed (40%)

OUTPUT QUALITY
───────────────────────────────────────────────
STEP-01 : 16/16 ✅  STEP-02 : 14/16 ⚠ (missing estimates)

ALERTS
───────────────────────────────────────────────
⚠ STEP-02 : 2 US without estimate — correction in progress
```

---

## Performance metrics

```yaml
workflow_metrics:
  id: "WF-001"
  start_date: "2026-05-22T09:30:00"
  end_date: "2026-05-22T10:45:00"
  
  overall_performance:
    total_duration_min: 75
    estimated_duration_min: 90
    schedule_variance: "-20%"
    completion_rate: "100%"
    overall_quality_score: "91%"
  
  performance_per_step:
    - step: "STEP-01 — BUSINESS-ANALYST"
      duration_min: 8
      quality_score: "100%"
      attempts: 1
      status: "completed"
      
    - step: "STEP-02 — PO-SCRUM"
      duration_min: 18
      quality_score: "88%"
      attempts: 2
      status: "completed"
      note: "Re-run needed to add estimates"
      
    - step: "STEP-03 — UX-DESIGNER"
      duration_min: 22
      quality_score: "100%"
      attempts: 1
      status: "completed"
      
  errors:
    total: 1
    resolved: 1
    escalated: 0
    
  deliverables_produced:
    - "Business needs map (8 items)"
    - "10 User Stories in INVEST format"
    - "Wireframes for 3 key screens"
    - "Test plan (15 cases)"
    - "1-page executive-committee reporting"
```

---

## Execution report — 1-page format

```
EXECUTION REPORT — WORKFLOW [NAME]
Date : [DATE] | Duration : [X min] | Model : Claude Sonnet 4.6
══════════════════════════════════════════════════════════════

RESULT    : ✅ Completed successfully
QUALITY   : 91% (overall score)
SCHEDULE  : -15 min vs. estimate (better performance)

DELIVERABLES PRODUCED
─────────────────────────────────────
✅ Business needs map
✅ 10 User Stories (INVEST format)
✅ Acceptance criteria (Gherkin)
✅ Wireframes for 3 key screens
✅ Test plan (15 cases)
✅ 1-page executive-committee reporting

AGENTS USED
─────────────────────────────────────
BUSINESS-ANALYST  : 1 attempt — 100% quality
PO-SCRUM          : 2 attempts — 88% quality
UX-DESIGNER       : 1 attempt — 100% quality
QA-AGILE          : 1 attempt — 96% quality
CHEF-PROJET-IA    : 1 attempt — 100% quality

INCIDENTS
─────────────────────────────────────
⚠ 1 minor incident : PO-SCRUM — missing estimates
  Resolution : re-run with precise instructions (2 min)

RECOMMENDATIONS
─────────────────────────────────────
→ Add to the PO-SCRUM template : reminder that estimates are mandatory
→ Next execution estimated : 60 min (learned pattern)
```

---

## Workflow catalog tracking KPIs

```yaml
catalog_kpis:
  period: "2026-05 (monthly)"
  
  workflows_executed:
    WF-001: 8 executions
    WF-002: 3 executions
    WF-003: 2 executions
    WF-004: 5 executions
    WF-005: 12 executions
  
  average_quality:
    WF-001: "93%"
    WF-002: "89%"
    WF-003: "95%"
    WF-004: "91%"
    WF-005: "97%"
  
  most_used_agents:
    1: "REDACTEUR-IA (18 calls)"
    2: "BUSINESS-ANALYST (15 calls)"
    3: "PO-SCRUM (13 calls)"
    4: "CHEF-PROJET-IA (11 calls)"
    5: "QA-AGILE (9 calls)"
  
  error_rate_per_agent:
    PO-SCRUM: "15%"
    DEV-PYTHON-IA: "8%"
    CONSULTANT-IA: "5%"
    REDACTEUR-IA: "2%"
  
  identified_improvements:
    - "PO-SCRUM : add an estimates reminder in the template"
    - "DEV-PYTHON-IA : enrich the architecture context upstream"
```

---

## Alerts and notifications

```
ALERT LEVELS
──────────────────────────────────────────────────────────────
🟢 INFO    : Step completed successfully
🟡 WARNING : Output to rework (score 75-99%)
🔴 ERROR   : Output rejected or agent blocked (score < 75%)
🚨 CRITICAL: Workflow blocked, user escalation required
```

## Deliverables
- Real-time monitoring dashboard
- Post-workflow execution report (1 page)
- YAML performance metrics
- Monthly catalog KPIs
- Improvement recommendations

## Output format
Specify: the workflow at hand, the steps to monitor, the priority metrics, the desired reporting format.

## Anti-patterns
- ❌ **Monitoring with no alert thresholds**: a contemplative dashboard → threshold + alert + recipient per metric
- ❌ **Vanity metrics** (execution count alone) with no cost/tokens or failure rate → track cost, latency, error rate, quality
- ❌ **No per-execution traceability** (trace_id): debugging impossible → end-to-end tracing
- ❌ **No defined SLO**: no target → latency/cost/quality SLO
- ❌ **Dashboard with no action**: metrics not tied to a decision → each KPI → action

## Sources
- **LLM observability**: Langfuse · LangSmith · Helicone (tracing, cost, evals) — langfuse.com / smith.langchain.com
- **OpenTelemetry** (traces/metrics/logs) — opentelemetry.io · SRE principles (SLO/SLI)

## See also
- [`error-recovery.md`](error-recovery.md) — alerting on errors
- [`output-validation.md`](output-validation.md) — rejection rate as a quality metric
- [`workflow-automation.md`](workflow-automation.md) — monitoring in production
- [`../prompt_engineer/evals-llm-observability.md`](../prompt_engineer/evals-llm-observability.md) — evals + LLM observability
