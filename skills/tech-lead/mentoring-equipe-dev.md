# Skill — Dev Team Mentoring and Onboarding
> Certifications: ISTQB FL v4.0 · GitHub Certifications

## Objective
Onboard developers effectively, grow the team's skills, instill a culture of quality and knowledge sharing — to reduce time-to-productivity and retain talent.

## Developer onboarding plan — 30/60/90 days

```
WEEK 1 — Environment and context
  Day 1  □ Workstation setup (onboarding README < 30 min)
         □ GitHub, Jira, Slack, VPN access
         □ Team and roles introduction
  Day 2  □ Architecture overview (C4 L1/L2 diagram)
         □ Business domain: product walkthrough by the PO
  Day 3  □ Run the application locally
         □ Code conventions + Git workflow
  Day 4-5 □ First L1-level ticket (simple bug)
          □ Guided code review

MONTH 1 — Autonomy on L2 tickets
  □ Autonomous tickets with systematic review
  □ Pairing (2h/week with a senior dev)
  □ Contribution to 1 ADR or 1 runbook
  □ Active participation in code reviews

MONTH 2 — Full feature contribution
  □ First end-to-end feature (design → tests → deployment)
  □ Show & tell presentation (10 min)
  □ 360° feedback check-in (strengths + areas to improve)

MONTH 3 — Full autonomy
  □ Ownership of a component or service
  □ Mentoring a junior developer (if applicable)
  □ Contribution to process improvement (retro)
```

## Onboarding README — Template

```markdown
# Getting Started — [Project name]

## Prerequisites
- Node.js 22+, Docker Desktop 4.x, Git 2.x
- Access: request from @tech-lead (Slack #access-requests)

## Installation (< 15 min)
```bash
git clone git@github.com:org/project.git
cd project
cp .env.example .env.local
docker compose up -d          # Starts PostgreSQL + Redis
npm install
npm run db:migrate
npm run dev
```

## Verification
- App: http://localhost:3000 ✅
- API: http://localhost:3001/health → { status: 'ok' } ✅

## Git workflow
1. Create a branch: `git checkout -b feat/PROJ-123-description`
2. Commit: `git commit -m "feat(orders): add bulk cancel endpoint"`
3. Push + Pull Request (template auto-filled)
4. Code review (1 approver minimum)

## Resources
- [Architecture](docs/architecture.md) — C4 diagrams
- [ADRs](docs/adr/) — Architecture decisions
- [API Docs](http://localhost:3001/docs) — Swagger UI
- [Runbooks](docs/runbooks/) — Operational procedures
```

## Tech Lead 1:1 — Structure

```
FREQUENCY: Every two weeks, 30 min
TYPICAL AGENDA:
  1. Check-in (5 min) — How are you? Blockers?
  2. Work in progress (10 min) — Progress, technical difficulties
  3. Development (10 min) — Skills, learning, goals
  4. Two-way feedback (5 min) — Honestly, from both sides

TOPICS TO COVER REGULARLY:
  □ Satisfaction and engagement (flight risk?)
  □ Skill growth (training wanted?)
  □ Tensions or frustrations (process, team, debt?)
  □ Recognition and visibility (contributions valued?)
  □ 6-month outlook (career goals?)
```

## Knowledge-sharing formats

```
FORMAT              FREQUENCY     DURATION   GOAL
──────────────────  ────────────  ─────────  ────────────────────────────────────────
Tech Talk           Monthly       30-45 min  Go deep on a technical topic (1 person)
Show & Tell         Bi-weekly     10-15 min  Share what we did / learned
Pair Programming    Ad hoc        2-4h       Transfer a skill on a concrete task
Code Review Club    Weekly        30 min     Review a PR together, discuss patterns
Post-mortem         Post incident 60 min     Learn from incidents without finger-pointing
Kata / Dojo         Monthly       90 min     Practice TDD, refactoring on a shared exercise
```

## Team skills matrix

```
NAME         FRONTEND  BACKEND  DB/SQL  INFRA/K8S  TESTS  SECURITY
───────────  ────────  ───────  ──────  ─────────  ─────  ────────
Alice        ⭐⭐⭐⭐     ⭐⭐      ⭐⭐     ⭐         ⭐⭐⭐   ⭐
Bob          ⭐         ⭐⭐⭐⭐   ⭐⭐⭐    ⭐⭐        ⭐⭐    ⭐⭐
Carol        ⭐⭐        ⭐⭐⭐    ⭐⭐     ⭐⭐⭐⭐      ⭐⭐⭐   ⭐⭐⭐
(to be built by the Tech Lead with the team)
```

## Deliverables
- Onboarding README (setup < 15 min guaranteed)
- 30/60/90-day onboarding plan
- Team skills matrix
- Tech Talks / Show & Tell schedule (calendar)
- 1:1 template (agenda + recurring topics)
- Individual skills review (quarterly)

## Output format
Specify: **developer profile** (junior, mid, senior), **stack and domain**, **urgency** (day-1 onboarding or 3-month plan), **team size**, **constraints** (remote, agency, multi-timezone), **goal** (fast autonomy vs long-term skill growth).
