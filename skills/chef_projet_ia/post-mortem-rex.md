# Skill — Post-Mortem & Lessons Learned (REX)
> Certifications: PMP (PMI 2026), SRE Foundation (Google), Certified Agile Retrospective Facilitator, Blameless Post-Mortem Practitioner
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **Google SRE** (Beyer et al. 2016 — postmortem culture, error budget) · **Blameless Post-Mortem** (Allspaw/Etsy 2012) · **5 Whys** (Toyota / Ohno) · PMBOK 7 (closeout / lessons learned)

## Objective
Run constructive, blameless post-mortems after an incident or at project end — identify root causes with the 5 Whys, produce actionable improvement plans, and capitalize on the learnings.

## Blameless Post-Mortem — Principles & Process

### Core principles

```
BLAMELESS POST-MORTEM — GOLDEN RULES
─────────────────────────────────────────────────────────────
1. Blame systems and processes, NOT individuals
   "The validation process did not catch the bug"
   (not "John didn't check the code")

2. People always do their best with the
   information they had at the time

3. The goal is to LEARN, not to punish

4. Every incident is an opportunity to improve the system

5. Full transparency drives future prevention
```

### Full Post-Mortem Template

```yaml
# post_mortem_template.yaml
metadata:
  title: "Incident #42 — Scoring API unavailable 4h"
  incident_date: "2026-05-15T14:30:00+02:00"
  resolution_date: "2026-05-15T18:45:00+02:00"
  incident_duration: "4h15"
  severity: "P1"           # P1 (critical) / P2 / P3 / P4
  impacted_services: ["API scoring", "CRM Salesforce integration"]
  author: "PM + SRE Lead"
  status: "DRAFT"          # DRAFT / IN_REVIEW / FINAL
  publication_date: "2026-05-19"

impact:
  affected_users: "~850 sales reps — scoring access unavailable"
  revenue_impact: "Estimate: 12,000 euros (leads not processed)"
  slo_breach: true
  error_budget_consumed_pct: 45
  external_communication: false

timeline:
  - time: "14:28"
    who: "Prometheus alerting"
    what: "SLO breach alert — error rate > 5% on api-scoring"
    type: "DETECTION"
  - time: "14:35"
    who: "On-call SRE (Bob)"
    what: "Acknowledge alert, start investigation"
    type: "RESPONSE"
  - time: "14:52"
    who: "Bob (SRE)"
    what: "Identifies OOM on scoring pods — ML model loaded 3x in memory"
    type: "DIAGNOSIS"
  - time: "15:10"
    who: "Alice (ML Engineer)"
    what: "Root cause confirmed: model update v2.1 without load testing"
    type: "ROOT_CAUSE"
  - time: "15:30"
    who: "Alice + Bob"
    what: "Rollback to model v2.0 — service partially restored"
    type: "MITIGATION"
  - time: "18:45"
    who: "Alice"
    what: "Memory fix deployed — service fully restored"
    type: "RESOLUTION"

root_cause_analysis:
  method: "5 Whys"
  immediate_cause: "OOM on scoring pods — crash loop"
  five_whys:
    - why: "The scoring pods crash with OOM"
      because: "Model v2.1 uses 3x more RAM than v2.0 (350MB vs 95MB)"
    - why: "The model uses 3x more RAM"
      because: "The new feature store loads 3 model versions simultaneously"
    - why: "3 versions loaded simultaneously"
      because: "Bug in the ModelRegistry lazy-loading introduced in v2.1"
    - why: "The bug was not caught before prod"
      because: "Load tests do not measure memory consumption"
    - why: "Load tests do not measure memory"
      because: "No memory regression test in the CI/CD pipeline"

  primary_root_cause: "No memory-consumption regression test in CI/CD"
  contributing_factors:
    - "No alerting on memory pressure before OOM"
    - "K8s limits not adjusted after the architecture change"
    - "Rollback runbook poorly documented (30 min lost)"

action_plan:
  - id: AP-01
    action: "Add a memory regression test to the CI pipeline"
    owner: "Alice (ML Engineer)"
    deadline: "2026-05-26"
    priority: "P0"
    type: "PREVENTION"
  - id: AP-02
    action: "Configure a Prometheus alert on memory_usage > 80% (before OOM)"
    owner: "Bob (SRE)"
    deadline: "2026-05-22"
    priority: "P0"
    type: "DETECTION"
  - id: AP-03
    action: "Update the ML model rollback runbook (under 15 min)"
    owner: "Bob + Alice"
    deadline: "2026-05-23"
    priority: "P1"
    type: "RESPONSE"
  - id: AP-04
    action: "Add K8s limits to the Definition of Done criteria"
    owner: "PM (Guy)"
    deadline: "2026-05-20"
    priority: "P1"
    type: "PROCESS"

lessons_learned:
  positive:
    - "Prometheus alerting caught the incident in 2 min (target < 5 min)"
    - "Smooth internal communication between SRE and ML team"
    - "Rollback executed with no additional downtime"
  to_improve:
    - "Insufficient load tests (memory not measured)"
    - "Incomplete runbook — 30 min lost finding the procedure"
    - "K8s limits not revised during the model change"
  share_with_team: true
```

### Post-Mortem Facilitation — Guide

```
POST-MORTEM MEETING FLOW (90 minutes)
─────────────────────────────────────────────────────────────
[00-05 min]  Ground rules
             → Reminder: blameless, respect, system focus
             → Designated facilitator (ideally external to the incident)

[05-25 min]  Building the timeline
             → Everyone shares their perspective
             → Shared chronology on whiteboard / Miro
             → Questions: "What did you know at the time?", "What did you decide and why?"

[25-50 min]  Root cause analysis — 5 Whys
             → Start from the visible symptom
             → Question down to the system cause
             → Identify contributing factors

[50-70 min]  Action plan
             → Each root cause = at least 1 action
             → Explicit owner + deadline
             → No more than 5-7 actions (otherwise too diluted)

[70-85 min]  Lessons learned & what went well
             → Acknowledge what worked well
             → Capitalize for sharing with other teams

[85-90 min]  Publication & follow-up
             → Draft available within 48h
             → Review in 2 weeks
```

## Project REX — AI Project Closeout

```python
# rex_project_template.py
from dataclasses import dataclass, field

@dataclass
class ProjectREX:
    project_name: str
    duration_weeks: int
    budget_initial: float
    budget_final: float
    team_size: int

    successes: list[str] = field(default_factory=list)
    challenges: list[str] = field(default_factory=list)
    what_to_replicate: list[str] = field(default_factory=list)
    what_to_avoid: list[str] = field(default_factory=list)
    key_metrics: dict = field(default_factory=dict)
    recommendations_next_project: list[str] = field(default_factory=list)

    @property
    def budget_variance_pct(self) -> float:
        return ((self.budget_final - self.budget_initial) / self.budget_initial) * 100

    def to_markdown(self) -> str:
        lines = [
            f"# REX — {self.project_name}",
            f"**Duration:** {self.duration_weeks} weeks | "
            f"**Budget:** €{self.budget_initial/1000:.0f}k → €{self.budget_final/1000:.0f}k "
            f"({'+'if self.budget_variance_pct>0 else ''}{self.budget_variance_pct:.1f}%)",
            "",
            "## Successes",
            *[f"- {s}" for s in self.successes],
            "",
            "## Challenges encountered",
            *[f"- {c}" for c in self.challenges],
            "",
            "## To replicate on the next projects",
            *[f"- {r}" for r in self.what_to_replicate],
            "",
            "## To absolutely avoid",
            *[f"- {a}" for a in self.what_to_avoid],
            "",
            "## Recommendations for the next AI project",
            *[f"- {r}" for r in self.recommendations_next_project],
        ]
        return "\n".join(lines)
```

## Deliverables
- Full post-mortem document (timeline, 5 whys, action plan)
- End-of-project REX (successes, challenges, recommendations)
- Post-mortem action tracking (Jira/Linear board)
- Knowledge sharing (wiki, lunch & learn)
- SRE/project team maturity report

## Output format
Specify: event type (production incident / project closeout / sprint end), severity, impact duration, available attendees, documentation tool (Confluence/Notion/Google Docs), deadline for post-mortem publication.

## Anti-patterns
- ❌ **Blaming individuals** instead of systems/processes (kills transparency — blameless rule)
- ❌ **5 Whys stopped too early**: stopping at the technical cause without reaching the process cause
- ❌ **Action plan with no owner or deadline**: a post-mortem with no follow-up is an empty ritual
- ❌ **Too many actions (> 5-7)**: dilution, nothing gets done
- ❌ **Post-mortem never shared**: the learning stays in the team, the incident recurs elsewhere
- ❌ **Hindsight bias**: judging past decisions with today's information

## Sources
- **Beyer B. et al.** — *Site Reliability Engineering* (Google, O'Reilly 2016) — postmortem culture, error budget
- **Allspaw J.** — *Blameless PostMortems and a Just Culture* (Etsy, 2012)
- **Ohno T.** — the **5 Whys** method (Toyota Production System)
- **PMBOK 7** (PMI 2021) — project closeout and lessons learned

## See also
- [`gestion-risques-projet.md`](gestion-risques-projet.md) — realized risks → incidents (loop)
- [`reporting-codir.md`](reporting-codir.md) — incident escalation and communication
- [`../scrum_master/`](../scrum_master/) — Agile retrospectives (complement to the project REX)
- [`../mlops_engineer/`](../mlops_engineer/) — ML technical incidents (drift, OOM, model rollback)
