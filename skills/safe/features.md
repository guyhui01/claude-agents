# SAFe Skill — Writing Features

> Certification: SAFe POPM 6
> Agents: AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## SAFe Feature format
```
Title: [Verb] + [Capability] + [Context]

Statement (Feature Statement):
[Action] — [Measurable result] — [Success criterion]

Benefit Hypothesis:
If we deliver [this feature],
Then [expected user / business benefit],
Which we will measure by [KPI / metric].

Acceptance Criteria:
1. [Observable and verifiable criterion]
2. [Observable and verifiable criterion]
3. [Observable and verifiable criterion]
```

## Example
```
Title: Set up the B2B order-tracking dashboard

Statement:
Let B2B customers view their orders in real time
— reduce support calls by 30%
— accessible in under 2 clicks.

Benefit Hypothesis:
If we deliver this dashboard,
Then B2B customers will have full autonomy over tracking,
Which we will measure by: support-call rate (target: -30%).

Acceptance Criteria:
1. Filters by status, date and reference available
2. Status updated in real time (< 5 min)
3. CSV export available on all views
```

## Feature → User Stories breakdown
```
Feature: [Title]
├── US-01: [...]
├── US-02: [...]
├── US-03: [...]
└── US-04: [...]
```

## T-Shirt Sizing
| Size | Story Points | Duration |
|---|---|---|
| XS | 1-2 | < 1 sprint |
| S | 3-5 | 1 sprint |
| M | 8-13 | 1-2 sprints |
| L | 20-30 | 2-3 sprints |
| XL | 40+ | Must be split |

## SAFe Feature DOR
- [ ] Statement in the Action/Result/Criterion format
- [ ] Benefit Hypothesis with a measurable KPI
- [ ] Minimum 3 Acceptance Criteria
- [ ] Broken down into User Stories (max 8)
- [ ] Estimated in T-Shirt Sizing
- [ ] Dependencies identified
- [ ] Prioritized by WSJF
- [ ] Validated by the Business Owner
