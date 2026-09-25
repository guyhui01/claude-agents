# QA Agile Skill — Quality-Oriented Definition of Done

> Certification: CTFL-AT · CTAL-TM
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## Principle
The DoD is a collective commitment by the team on what "done" means. It includes the non-negotiable quality criteria.

## DoD by level

### User Story DoD
```
☐ Code developed and peer-reviewed (code review)
☐ Unit tests written and passing (coverage > [X]%)
☐ Acceptance tests executed and validated (PO)
☐ BDD scenarios passing (if applicable)
☐ No blocking or major defect open
☐ Technical documentation updated
☐ Deployed to the staging environment
☐ Validated by the PO on the staging environment
```

### Sprint DoD
```
☐ Every US in the sprint meets the User Story DoD
☐ Regression tests executed on the impacted areas
☐ No regression introduced
☐ Sprint technical debt documented in the backlog
☐ Sprint test report available
☐ Staging environment stable for the demo
☐ Sprint Review possible on a stable environment
```

### Release / Go-live DoD
```
☐ Every US in the release meets the Sprint DoD
☐ Full regression tests executed
☐ Performance tests validated (if applicable)
☐ Security tests validated (if applicable)
☐ Zero blocking defect open
☐ Rollback plan validated
☐ User documentation up to date
☐ Go-live GO given by PO + QA Lead
```

## Shared DoD Confluence template
```
DOD — [Team] — [Project] — v[X.X] — [Date]
Validated by: [team + PO + QA]

[Copy the 3 levels above]

Planned revision: [next retrospective]
```
