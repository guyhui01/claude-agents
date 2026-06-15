# Skill — Impediment and Dependency Management at ART Scale
> Certifications: SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), PMP (PMI)

## Objective
Identify, qualify, escalate and resolve the impediments and dependencies blocking the ART's delivery — distinguishing what belongs at team level vs ART level vs management.

## ART impediment taxonomy

```
LEVEL 1 — TEAM (Scrum Master resolves)
  E.g.: Broken build tool, absent member
  Resolution time: < 1 sprint

LEVEL 2 — ART (RTE resolves)
  E.g.: Blocking cross-team dependency, shared architecture
  Resolution time: < 2 sprints

LEVEL 3 — MANAGEMENT (RTE escalates)
  E.g.: Missing budget, blocked external resource, exec decision
  Resolution time: Steering Committee
```

## ROAM register of risks and impediments

```yaml
roam_log:
  pi: "PI-12"

  impediments:
    - id: "IMP-07"
      description: "Partner API unavailable in the UAT environment"
      team: "Team Alpha"
      level: "ART"
      owner: "RTE + Tech Lead"
      identified_date: "2026-05-15"
      status: "in_progress"
      actions:
        - "Contact partner D+1 — [First name]"
        - "Mock-API workaround if unresolved by D+5"
      due: "2026-05-22"

  dependencies:
    - id: "DEP-03"
      description: "Team Beta depends on Team Alpha's Feature F2 (Sprint 4)"
      producer_team: "Team Alpha"
      consumer_team: "Team Beta"
      status: "at_risk"
      feature: "F2"
      due: "Sprint 4"
      mitigation: "Alpha+Beta technical meeting D+2"

  roam_risks:
    - id: "R-05"
      description: "Cloud infra delivery delay (Sprint 3)"
      categorization: "Mitigated"  # Resolved / Accepted / Mitigated / Avoided
      owner: "DevOps Lead"
      action: "On-premise infra plan B in parallel"
```

## RTE escalation process

```
IMPEDIMENT DETECTION
        │
        ▼
SCRUM MASTER assesses → Team level?
    ├── YES → SM resolves in < 1 sprint
    └── NO  → Escalate to the RTE via SoS
                    │
                    ▼
             RTE assesses → ART level?
                 ├── YES → RTE coordinates the resolution
                 │          (ART Sync, parties involved)
                 └── NO  → Escalate to Management
                             (Sponsor, exec committee, Budget)
```

## Deliverables
- Updated ROAM register (YAML / Jira)
- Escalation notes
- Resolution plan per impediment
- Impediments report for the I&A

## Output format
Specify: identified impediments, teams concerned, level (team / ART / management), desired resolution time.
