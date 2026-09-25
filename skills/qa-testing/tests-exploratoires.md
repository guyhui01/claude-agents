# QA Agile Skill — Exploratory Testing

> Certification: CTFL-AT · CTAL-TA
> Agents: AGENT-QA-AGILE.md · AGENT-QA-CYCLEV.md
> Methodology: Agile

## ISTQB definition
Exploratory testing combines learning, design and execution simultaneously. The tester freely explores the system while documenting their approach.

## Session-Based Test Management (SBTM)

```
EXPLORATORY TEST SESSION

Session ID: SE-[XXX]
Date: [DD/MM/YYYY]  |  Duration: [60-90 min]
Tester: [Guy HUI-BON-HOA]
Charter (mission): [What I want to explore and why]

Area explored: [module / feature / flow]
Targeted risks: [what could go wrong]

EXPLORATION NOTES:
[Free-form notes during the session — observations, questions, defects]

DEFECTS DETECTED:
| ID | Description | Severity | Reproducible |
|---|---|---|---|
| BUG-XXX | [...] | Major | ☐ Yes ☐ No |

QUESTIONS / AREAS TO DIG INTO:
- [question 1]
- [question 2]

ESTIMATED COVERAGE: [X]%
ACTUAL DURATION: [X min]
VERDICT: ☐ Healthy area  ☐ Risks identified  ☐ Investigation required
```

## Exploration techniques

| Technique | Description |
|---|---|
| **Antisocial tour** | Enter aberrant data everywhere |
| **Landmark tour** | Follow links / buttons with no specific goal |
| **Back-alley tour** | Test old defects that have regressed |
| **Collector tour** | Gather all the system's outputs |
| **Saboteur tour** | Interrupt processes in progress |
| **Boundary tour** | Min, max, empty, null values |

## When to use exploratory testing?
- A new module to discover quickly
- Complement to scripted tests
- After a complex fix
- When time is constrained
- For poorly specified features
