# QA V-Model Skill — Test Strategy

> Certification: CTAL-TM · CTFL
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## ISTQB definition
The test strategy defines the overall approach: test levels, test types, entry/exit criteria, tools and responsibilities.

## Test levels (V-model)

```
Business needs       ←→   Acceptance tests (UAT)
Specifications       ←→   System tests
Architecture         ←→   Integration tests
Detailed design      ←→   Unit tests
              CODE
```

## Test types to cover

| Type | Goal |
|---|---|
| Functional | Verify the expected behaviors |
| Non-functional | Performance, security, compatibility |
| Structural (white box) | Code coverage |
| Regression | No degradation of the existing system |
| Confirmation (re-test) | Verify a defect fix |

## Test Strategy template

```
TEST STRATEGY — [Project] — v[X.X] — [Date]
Author: [Guy HUI-BON-HOA]  |  Validated by: [name]

1. CONTEXT
   Project: [description]
   Scope tested: [in scope]
   Out of scope: [out of scope]

2. QUALITY OBJECTIVES
   - [objective 1 — e.g. 0 blocking defect in UAT]
   - [objective 2 — e.g. functional coverage > 90%]

3. TEST LEVELS
   ☐ Unit tests — Owner: [DEV]
   ☐ Integration tests — Owner: [QA / DEV]
   ☐ System tests — Owner: [QA]
   ☐ UAT — Owner: [MOA / Business]

4. TEST TYPES
   ☐ Functional    ☐ Regression    ☐ Performance
   ☐ Security      ☐ Compatibility ☐ Accessibility

5. ENTRY CRITERIA (test start)
   - Functional specifications validated
   - Stable test environment
   - Test data prepared
   - Build delivered and deployed

6. EXIT CRITERIA (test end)
   - 0 blocking defect open
   - < [X] major defects
   - Test case coverage > [X]%
   - Test report validated by the project manager

7. TOOLS
   - Test management: [HP ALM / Jira+Xray / TestRail]
   - Automation: [tool]
   - Defect management: [Jira / Mantis]

8. QA DELIVERABLES
   - Test plan
   - Test cases
   - Execution report
   - Final UAT report
```
