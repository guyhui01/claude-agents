# Skill — Technical Debt Management
> Certifications: ISTQB FL v4.0 · GitHub Certifications · AWS DVA-C02

## Objective
Identify, prioritize and pay down technical debt: code audit, classification (intentional vs accidental), progressive refactoring plan — to keep the team's velocity sustainable over time.

## Technical debt taxonomy

```
TYPE                   DESCRIPTION                                EXAMPLES
─────────────────────  ─────────────────────────────────────────  ────────────────────────────────
Intentional            Deliberate trade-off to ship fast         "We'll revisit the tests later"
deliberate             (documented decision)                      → OK if tracked + deadline set

Intentional            Deliberate trade-off but forgotten         "Temporary" code from 2022 still there
inadvertent            (undocumented decision)                    → Dangerous: nobody dares touch it

Accidental             Good-faith mistake or knowledge gap        Massive copy/paste, outdated pattern
prudent                                                           → Train the team, fix as you go

Accidental             Negligence or permanent rush               Code with no tests, no reviews
reckless               with no awareness of the problem           → Critical alert, will slow the team down
```

## Debt audit — Warning signals

```
SIGNAL                              TOOL                     ALERT THRESHOLD
──────────────────────────────────  ─────────────────────    ──────────────────────────────
High cyclomatic complexity          SonarQube, Complexity    > 10 per function = refactoring required
Methods too long                    SonarQube, ESLint        > 30 lines per method
Duplicated code                     SonarQube (Duplication)  > 3% duplication
Outdated dependencies               npm audit, Dependabot    Critical CVE or > 2 years without update
Low test coverage                   Jest, JaCoCo             < 60% = at-risk area
Unresolved TODO/FIXME               grep TODO | wc -l        > 50 = hidden backlog
Growing build time                  CI/CD metrics            > 15% monthly growth
```

## Technical Radar — Prioritization

```
PRIORITY  CATEGORY            CRITERIA                          ACTION
────────  ──────────────────  ────────────────────────────────  ─────────────────────────────
P1        Critical            Known CVE, functional blocker     Fix in the current sprint
          (red)               High security risk

P2        Important           Slows the team down > 20%         Schedule a dedicated sprint (Refactoring Sprint)
          (orange)            Complexity > 15, 0 tests          1 sprint per quarter

P3        To watch            Duplication, confusing naming     Fix when passing through (Boy Scout Rule)
          (yellow)            Tracked TODOs                     Each PR improves it a little

P4        Cosmetic            Style, minor conventions          Automate (lint, formatter)
          (green)             Inconsistent formatting           Set the config, never touch again
```

## Boy Scout Rule

> "Leave the code a little better than you found it."

```typescript
// Before (code as found) — High complexity, vague naming
function p(d: any[], f: any) {
  let r = []
  for(let i=0;i<d.length;i++){
    if(d[i].s === 1 && f(d[i])) r.push(d[i])
  }
  return r
}

// After (code as left) — Readable, typed, functional
function filterActiveItems<T extends { status: number }>(
  items: T[],
  predicate: (item: T) => boolean
): T[] {
  return items.filter(item => item.status === 1 && predicate(item))
}
```

## Refactoring plan — Template

```markdown
## Technical debt — Refactoring Sprint Q3 2026

### Objective
Reduce the cyclomatic complexity of the Orders module from 18 to < 10
and raise test coverage from 45% to 75%.

### Prioritized items
| # | File | Problem | Effort | Impact |
|---|------|---------|--------|--------|
| 1 | order.service.ts | CC = 22, 120-line method | 3 days | High |
| 2 | payment.controller.ts | 0 tests, 3 dependency CVEs | 2 days | Critical |
| 3 | utils/helpers.ts | 40% duplication with cart/helpers | 1 day | Medium |

### Success criteria
- [ ] Module average CC < 10 (SonarQube)
- [ ] Coverage > 75% (Jest)
- [ ] 0 critical CVE (npm audit)
- [ ] Stable build time (± 5%)
```

## Deliverables
- Debt audit report (SonarQube export + analysis)
- Prioritized Technical Radar (P1→P4)
- Refactoring plan (sprints, effort, criteria)
- Debt dashboard (trends: complexity, coverage, deps)
- Boy Scout Rule guide for the team

## Output format
Specify: **stack and codebase size** (LOC, age), **observed symptoms** (declining velocity, frequent bugs, slow onboarding), **constraints** (refactoring time-box, feature freeze possible?), **goal** (quick wins vs long-term plan).
