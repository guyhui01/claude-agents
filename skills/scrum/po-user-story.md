# Scrum Skill — Writing a User Story

> Certification: PSPO I · PSPO II
> Agent: AGENT-PO-SCRUM.md

## Standard format
```
As a [persona/role],
I want [action / feature],
So that [benefit / business value].
```

## DOR — Definition of Ready
- [ ] US written in the standard INVEST format
- [ ] Acceptance criteria defined (min. 3)
- [ ] Estimated in story points (Planning Poker)
- [ ] Dependencies identified
- [ ] Mockup available if applicable
- [ ] Validated by the PO

## DOD — Definition of Done
- [ ] Development finished and reviewed
- [ ] Unit tests passing
- [ ] Acceptance tests validated
- [ ] Confluence documentation up to date
- [ ] Deployed to UAT
- [ ] Validated by the PO

## Acceptance criteria — Given/When/Then
```
GIVEN [context / precondition]
WHEN [user action]
THEN [expected result]
```

## INVEST rules
- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall (1 sprint max)
- **T**estable

## Slicing levels
Epic → Feature → User Story → Technical task

## Jira template
```
Title: [US-XXX] As a [persona], I want [action]

Description:
As a [persona], I want [action], so that [benefit].

Acceptance criteria:
- GIVEN... WHEN... THEN...
- GIVEN... WHEN... THEN...
- GIVEN... WHEN... THEN...

Story Points: [1/2/3/5/8/13]
Epic link: [Epic-XXX]
Sprint: [Sprint N]
```
