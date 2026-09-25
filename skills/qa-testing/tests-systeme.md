# QA V-Model Skill — System Testing

> Certification: CTAL-TA · CTFL
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## ISTQB goal
Validate the behavior of the complete system against the specified requirements (functional and non-functional).

## System test sub-types

| Type | Goal |
|---|---|
| **Functional** | Verify the end-to-end features |
| **Performance** | Response time, load, stress |
| **Security** | Access, authentication, injections |
| **Compatibility** | Browsers, OS, devices |
| **Usability** | Ergonomics, accessibility |
| **Reliability** | Stability over time |
| **Recovery** | Behavior after an incident |

## System test case template (end-to-end)

```
ID: TS-[XXX]
Title: [user role] journey — [full scenario]
Scope: End-to-end [module A → module B → module C]
Environment: [staging / pre-prod]

PRECONDITIONS:
- Stable environment and initialized data
- Test user accounts created
- IS integrations active

SCENARIO:
| # | Step | Action | Data | Expected |
|---|------|--------|------|----------|
| 1 | [context] | [action] | [data] | [result] |
| 2 | [...] | [...] | [...] | [...] |

POST-EXECUTION CHECKS:
- [ ] Data correctly stored in the DB
- [ ] IS flows triggered (logs checked)
- [ ] Email / notification sent if applicable
- [ ] No error in the server logs

Status: ☐ Pass  ☐ Fail  ☐ Blocked
```
