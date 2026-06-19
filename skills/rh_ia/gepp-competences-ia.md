# Skill — Strategic Workforce Planning (GEPP) & IT/AI Skills Mapping
> Certifications: CIPD Level 5 (CIPD) · SHRM-CP (SHRM) · PHR (HRCI)

## Objective
Build a map of an organization's IT/AI skills, identify gaps against strategic needs, and produce an actionable strategic workforce planning plan (GEPP — France's statutory jobs-and-career-paths planning).

## IT/AI skills framework

```
IT/AI SKILL DOMAINS
──────────────────────────────────────────────────────
D1 — DATA & AI
  · Data engineering (ETL, pipelines, SQL/NoSQL)
  · Machine Learning & MLOps
  · Generative AI & LLM (prompting, RAG, agents)
  · Data Analysis & Visualization

D2 — SOFTWARE DEVELOPMENT
  · Backend (Python, Java, Node.js)
  · Frontend (React, Vue.js, TypeScript)
  · DevOps & Cloud (Docker, K8s, AWS/GCP/Azure, CI/CD)
  · Architecture (microservices, API design, security)

D3 — PRODUCT & METHODS
  · Product Management (backlog, roadmap, metrics)
  · Agility (Scrum, SAFe, Kanban)
  · UX/Design (wireframing, user testing)
  · QA & Testing (BDD, automation)

D4 — CONSULTING & TRANSFORMATION
  · AI consulting (diagnosis, ROI, roadmap)
  · Change Management (ADKAR, adoption)
  · Enterprise architecture (TOGAF)
  · Cybersecurity (OWASP, ISO 27001)
```

## Proficiency levels (1-4 scale)

```
1 — AWARENESS    : Theoretical knowledge, no professional practice
2 — PRACTICE     : Use in a guided context, with supervision
3 — PROFICIENT   : Full autonomy, solves complex problems
4 — EXPERTISE    : Internal reference, can train others, innovates in the field
```

## Template — Team skills map

```
TEAM: [Team name] — [N] people — Date: [DD/MM/YYYY]
──────────────────────────────────────────────────────────────────────────────
Skill                  Required  Alice  Bob  Carole  David  Team gap
──────────────────────────────────────────────────────────────────────────────
Python / LangChain         3       3     2     4       1     Bob -1 · David -2
RAG & Vector DB            3       2     1     3       1     Alice -1 · Bob -2 · David -2
Prompting & LLM            3       3     3     4       2     David -1
MLOps (prod)               2       1     2     3       1     Alice -1 · David -1
Agile / Scrum              2       3     2     2       2     OK
Cloud architecture         2       2     1     2       3     Bob -1
──────────────────────────────────────────────────────────────────────────────
TRAINING PRIORITY   →      RAG/Vector DB (3 gaps) · MLOps (2 gaps)
```

## Gap analysis — Importance / Urgency matrix

| Skill gap | Business impact | Urgency | Recommended action |
|---|---|---|---|
| RAG & Vector DB | High | Short term | Intensive 2-day training + coaching |
| MLOps production | High | Mid term | Certification + internal POC |
| Cloud architecture | Medium | Mid term | AWS/GCP certification training |
| AI security | High | Short term | OWASP LLM Top 10 workshop |

## GEPP plan — 12-month structure

```
GEPP PLAN — [Team / Department] — [Year]
──────────────────────────────────────────────────────
PHASE 1 — DIAGNOSIS (M1-M2)
  · Individual skills interviews (30 min/person)
  · Self-assessment against the framework
  · Manager validation
  · Consolidated map

PHASE 2 — ACTION PLAN (M2-M3)
  · Gap prioritization (impact × urgency)
  · Identification of training paths
  · Training budget allocated per employee
  · Executive committee / CHRO validation

PHASE 3 — DEPLOYMENT (M3-M12)
  · Training planned and delivered
  · Internal coaching/mentoring
  · Application projects (learning by doing)
  · Quarterly progress tracking

PHASE 4 — MEASUREMENT (M12)
  · Re-assessment of skills against the framework
  · Average gain per skill computed
  · Annual GEPP report to the CHRO
```

## Typical paths by IT/AI profile

| Current profile | Target evolution | Duration | Key training |
|---|---|---|---|
| Python Developer | ML Engineer | 12 months | MLOps Zoomcamp · Hugging Face Course · AWS ML |
| Data Analyst | Data Scientist | 18 months | Fast.ai · Kaggle · Google ML certification |
| Backend Developer | AI Engineer | 12 months | LangChain · Anthropic API · Vector DB |
| Classic PO | AI PO | 6 months | AI Product Management · Claude Code 101 · Anthropic |
| Consultant | AI Consultant | 6 months | CAP IABAC · Claude in Action · Google GCDL |

## Deliverables
- IT/AI skills framework tailored to the client context
- Team skills map (Excel/Notion file)
- Prioritized gap analysis (Impact/Urgency matrix)
- 12-month GEPP plan with budget and milestones
- Quarterly tracking report

## Output format
Specify: team size, main tech domain, strategic IT/AI goals over 12 months, available training budget, existing HR tools (HRIS, LMS).

## Anti-patterns
- ❌ Confuse GEPP (a forward-looking jobs/skills approach) with a simple annual training plan.
- ❌ Map skills without involving managers or employees (self-assessment alone = biased).
- ❌ A frozen framework, never re-assessed → obsolete given the fast evolution of AI skills.
- ❌ Ignore the GEPP negotiation obligation in the companies concerned (French Labor Code L2242-20).
- ❌ A plan with no budget, milestones, or progress indicators → not steerable.

## Sources
- French Labor Code — L2242-20 (GEPP negotiation, companies ≥ 300 employees) — legifrance.gouv.fr
- France Compétences — professional certification frameworks — francecompetences.fr
- CIPD — Workforce planning (Level 5) — cipd.org
- ANACT / Edgar Schein — *Organizational Culture and Leadership* (1985, 5th ed. 2016) for the cultural anchoring of career paths

## See also
- `skills/rh_ia/people-analytics.md` — skills and retention indicators
- `skills/rh_ia/benchmark-remuneration-it.md` — valuing career-progression paths
- `skills/formateur_ia/` — designing upskilling paths
- `skills/consultant_ia/` — maturity diagnosis and skills roadmap
