# Skill — Impediment Management & Team Protection
> Certifications: PSM I/II · CSM · A-CSM · SAFe SSM

## Objective
Identify, prioritize and resolve the obstacles blocking the team, protecting its ability to reach the Sprint Goal.

## Impediment categories
| Category | Examples | Who resolves |
|---|---|---|
| **Technical** | Blocking bug, technical debt, denied access | Dev + SM facilitates |
| **Process** | Overly long admin process, approval cycle | SM escalates |
| **Organizational** | Silo between teams, decision waiting on management | SM + management |
| **People** | Interpersonal conflict, skill gap | SM + HR |
| **External** | Dependency on a vendor, API unavailable | SM + PO |

## Impediment-management process

### Identification
- Daily Scrum: "What obstacles are blocking your progress?"
- Retro: recurring items = systemic impediments
- 1:1 with team members
- Direct observation of interactions

### Prioritization (impact × urgency matrix)
```
                Urgent       Not urgent
Important   | HANDLE        | SCHEDULE
            | now           | (SM backlog)
Not import. | DELEGATE      | IGNORE /
            |               | DROP
```

### Structured escalation
```
Level 1: SM resolves alone (resources, access, tools)
  → Target time: < 1 day

Level 2: SM + PO or Tech Lead
  → Target time: < 3 days

Level 3: SM + Management (Scrum of Scrums, exec committee)
  → Target time: < 1 week

Level 4: Program / Portfolio (RTE, PMO, leadership)
  → Target time: < 2 weeks
```

## Impediment Backlog (template)
```
| ID | Date | Description | Impact | Escalation | Owner | Status | Resolution date |
|----|------|-------------|--------|------------|-------|--------|-----------------|
| I1 | ... | Prod DB access blocked | Blocks 3 devs | Tech Lead | SM | In progress | - |
```

## Team protection — common cases

### Unplanned interruptions
```
Rule: any new request mid-sprint → the PO decides
If a true emergency → sprint cancellation (rare) or item swap
SM role: say no to stakeholders, redirect to the PO
```

### Scope creep
```
Symptom: a PBI grows in complexity during the sprint
SM action:
  1. Identify it with the team (daily / abnormal burndown)
  2. Challenge with the PO: reduce the scope or split
  3. If impossible: inform the stakeholders (sprint review)
```

### Team under management pressure
```
Symptom: management asks the team to "do more"
SM action:
  1. Protect the Scrum space (events, focus time)
  2. Show the velocity data (pressure doesn't speed things up)
  3. Escalate if needed to the sponsoring management
```

## Deliverables
- Impediment Backlog kept up to date (weekly)
- Escalation tracking report
- Impediment resolution report (monthly)
- Transparent communication to stakeholders

## Output format
Specify: impediment type · urgency · impact on the sprint · required escalation level · stakeholders involved
