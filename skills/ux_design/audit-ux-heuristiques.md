# Skill — UX Audit & Nielsen Heuristics
> Certifications: NN/g UX-C

## Objective
Evaluate an existing interface without users, based on the 10 Nielsen Norman Group heuristics.

## Nielsen's 10 heuristics
1. Visibility of system status
2. Match between the system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation

## Audit method
1. Define the scope (targeted journeys or screens)
2. Evaluate each screen against the 10 heuristics
3. Rate the severity of each problem (0 to 4)
4. Consolidate and prioritize the recommendations

## Severity scale
| Score | Level | Action |
|---|---|---|
| 0 | Not a problem | — |
| 1 | Cosmetic | If time allows |
| 2 | Minor | Low priority |
| 3 | Major | High priority |
| 4 | Catastrophic | Fix immediately |

## Deliverables
- Audit grid per screen × heuristic
- Prioritized report with annotated captures
- Recommendation backlog (Jira-ready format)

## Output format
Specify: URL or Figma file to audit · scope (the whole product or one journey) · business context

## Sources
- **Jakob Nielsen & Rolf Molich** — *Heuristic Evaluation of User Interfaces* (CHI 1990) — origin of the method
- **Jakob Nielsen** — *10 Usability Heuristics for User Interface Design* (NN/g, 1994; article revised in 2020, principles unchanged)
- **Jakob Nielsen** — *Severity Ratings for Usability Problems* (NN/g, 1995) — 0-4 severity scale
- **Rolf Molich** — *CUE (Comparative Usability Evaluation)* studies — on between-evaluator variability

## Anti-patterns
- Audit by a single evaluator: Nielsen recommends 3 to 5 experts (a single one detects only ~35% of the problems)
- Confusing heuristic evaluation (by experts) with a user test (with real users)
- Listing problems without severity or actionable recommendation
- Expertise bias: judging "beautiful" instead of evaluating against the 10 heuristics
- Auditing outside the real business/journey context → false positives

## See also
- [tests-utilisateurs.md](tests-utilisateurs.md) — complement the expert audit with user observation
- [metriques-ux.md](metriques-ux.md) — quantify the detected problems (SUS, success rate)
- [ab-testing.md](ab-testing.md) — turn recommendations into testable hypotheses
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — fix the microcopy problems found
