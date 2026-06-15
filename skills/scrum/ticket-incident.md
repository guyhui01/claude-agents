# Scrum Skill — Incident Ticket

> Certification: PSPO I
> Agent: AGENT-PO-SCRUM.md

## Jira template
```
Title: [PROD/UAT] [Component] — [Short description]

Type: ☐ Bug  ☐ Prod Incident  ☐ UAT Defect
Severity: ☐ Blocker  ☐ Major  ☐ Minor  ☐ Cosmetic
Environment: ☐ Production  ☐ UAT  ☐ Integration
Linked US: [US-XXX]

DESCRIPTION
[Precise, factual description]

STEPS TO REPRODUCE
1. Log in as [role]
2. Navigate to [page]
3. Click [element]
4. Observe [behavior]

EXPECTED BEHAVIOR
[What should happen]

OBSERVED BEHAVIOR
[What actually happens]

BUSINESS IMPACT
[Affected users, blocked process]

WORKAROUND: ☐ Yes: [description]  ☐ No
SCREENSHOTS / LOGS: [link or attachment]
```

## Severity levels
| Level | Definition | Deadline |
|---|---|---|
| Blocker | Unusable, no workaround | Immediate |
| Major | Degraded, workaround possible | Current sprint |
| Minor | Annoyance with no functional impact | Next sprint |
| Cosmetic | Visual / spelling | Backlog |
