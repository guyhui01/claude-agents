# QA Agile Skill — Automation Pyramid

> Certification: CT-TAE · CTAL-ATT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## The test pyramid (Mike Cohn)

```
           ╱─────────────╲
          ╱   E2E / UI    ╲   ← Few, slow, costly
         ╱─────────────────╲    (Selenium, Playwright, Cypress)
        ╱   Integration     ╲  ← Moderately many
       ╱─────────────────────╲   (Postman, RestAssured, API tests)
      ╱   Unit tests (TDD)    ╲ ← Many, fast, cheap
     ╱─────────────────────────╲  (JUnit, Jest, pytest...)
```

## Pyramid rules
- **Unit**: 70% of automated tests — fast, isolated, maintainable
- **Integration**: 20% — verify the contracts between components
- **E2E / UI**: 10% — critical journeys only (don't automate everything)

## Automation strategy by type

| Type | What to automate | Suggested tool |
|---|---|---|
| Unit | Business logic, calculations, rules | JUnit / Jest / pytest |
| API / Integration | REST contracts, data flows | Postman / RestAssured |
| UI E2E | Critical journeys (login, checkout) | Playwright / Cypress |
| Regression | All stable and repetitive cases | CI/CD pipeline |
| Performance | Recurring load scenarios | k6 / Gatling |

## Selection criteria for automation
```
Automate if:
☐ The test runs > 3 times per sprint
☐ The test is stable (no frequent change)
☐ The test is deterministic (predictable result)
☐ The ROI is positive (time saved > creation cost)

Do not automate if:
☐ The feature changes often
☐ The test is exploratory by nature
☐ The test concerns ergonomics / UX
☐ It is a one-shot test
```

## CI/CD pipeline and tests

```
DEV commit
  → Unit tests (< 5 min) ──────── ❌ Fail = immediate block
  → Integration tests (< 15 min) ─ ❌ Fail = build blocked
  → E2E smoke tests (< 10 min) ─── ❌ Fail = staging deploy blocked
  → Full regression tests (night) ← result available the next day
```
