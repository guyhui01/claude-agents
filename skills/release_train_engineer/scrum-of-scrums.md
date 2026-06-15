# Skill — Scrum of Scrums and ART Synchronization
> Certifications: SAFe RTE (Scaled Agile), PSM I (Scrum.org), SAFe 6 Agilist (Scaled Agile)

## Objective
Facilitate the Scrum of Scrums and the ART's cross-team synchronization mechanisms — to quickly identify and resolve blocking dependencies and keep the delivery flow going.

## Scrum of Scrums — Format and agenda

```
SCRUM OF SCRUMS (SoS)
Participants: 1 representative per team (SM or Tech Lead) + RTE
Frequency  : Daily or 3x/week depending on the ART size
Duration   : 15 min (strictly timeboxed)

KEY QUESTIONS (rotating per team)
────────────────────────────────────────────────────────────
1. "What did we accomplish yesterday that impacts the other teams?"
2. "What are we planning today that could impact others?"
3. "Are there any blocking impediments or dependencies?"
4. "Do we need a coordination meeting with another team?"

SoS RULES
────────────────────────────────────────────────────────────
✓ A strict 15 min — we don't get into technical details
✓ Complex problems → separate meeting after the SoS
✓ A single representative per team (not the whole team)
✓ The RTE captures the dependencies on the Program Board
```

## ART Sync — Extended format (weekly)

```
ART SYNC (45-60 min)
Participants: RTE + all the SMs + POs (if needed)

TYPICAL AGENDA
────────────────────────────────────────────────────────────
1. Round of the teams (15 min)
   For each team: sprint progress, dependencies, impediments

2. Program Board update (15 min)
   Update of dependencies, risks, milestones

3. ART points of attention (10 min)
   Decisions to make, escalations

4. Actions (5 min)
   Owners, deadlines
```

## Cross-team dependency tracker

| ID | Provider | Consumer | Deliverable | Planned sprint | Status | Action |
|---|---|---|---|---|---|---|
| DEP-01 | Team Alpha | Team Beta | Auth Module API | Sprint 2 | ✅ Delivered | — |
| DEP-02 | Team Beta | Team Gamma | DB Schema V2 | Sprint 3 | ⚠ At risk | Meeting D+1 |
| DEP-03 | Team Delta | Team Alpha | UI Library | Sprint 4 | ✅ OK | — |

## Deliverables
- Daily SoS notes
- Up-to-date Program Board
- Cross-team dependency tracker
- Documented escalations

## Output format
Specify: the ART's teams, current dependencies, ongoing impediments, current sprint.
