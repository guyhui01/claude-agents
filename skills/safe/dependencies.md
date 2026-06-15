# SAFe Skill — Cross-Team Dependencies

> Certification: SAFe POPM 6
> Agent: AGENT-PO-SAFE.md

## Program Board
```
           | Iter 1 | Iter 2 | Iter 3 | Iter 4 | IP |
Team A     | F-01   | F-02   |        | F-05   |    |
           |        |   ←────────────────┘            |
Team B     |        | F-03   | F-04   |        |    |
```
← = dependency (red thread on the physical board)

## Dependency tracking template
```
| ID  | Source feature | Source team  | Target feature | Target team  | Sprint needed | Status |
|-----|---------------|--------------|----------------|--------------|---------------|--------|
| D01 | API Auth v2   | Infra team   | SSO Login      | Front team   | Sprint 2      | 🟡     |
```
🟢 Resolved | 🟡 In progress | 🔴 Blocked | ⚪ To confirm

## Management rules
- Identify all dependencies as early as PI Planning
- Materialize them with red threads on the Program Board
- Weekly PO Sync to track progress
- Escalate to the RTE any blocker unresolved within 48h
- Document in Jira (link type: "is blocked by")
