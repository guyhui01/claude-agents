# Skill — SAFe DevOps & Continuous Delivery Pipeline
> Certifications: SAFe POPM 6 · SAFe DevOps Practitioner (SDP)

## Objective
Understand and contribute to defining the Continuous Delivery Pipeline to accelerate Time-to-Market.

## Continuous Delivery Pipeline (SAFe)
```
Continuous Exploration → Continuous Integration → Continuous Deployment → Release on Demand
```

### Continuous Exploration
- Product hypotheses and discovery
- Customer interviews, A/B tests, MVPs
- Feed the Program Backlog with validated Features

### Continuous Integration
- Code integration several times a day
- Automated tests (unit, integration, regression)
- Build pipelines: Jenkins, GitHub Actions, GitLab CI

### Continuous Deployment
- Automated deployment to staging / pre-prod
- Feature Flags: decouple deployment and release
- Automatic rollback if metrics degrade

### Release on Demand
- Release at the optimal moment (business decision, not technical)
- Canary releases, blue/green deployments
- Feature Toggles to activate progressively

## The PO/PM role in the DevOps Pipeline
- Define the release criteria (when a Feature can be activated)
- Manage Feature Flags (activation by segment, geography, profile)
- Monitor post-release metrics (DORA metrics)
- Decide on rollbacks if NPS or business metrics degrade

## DORA Metrics (DevOps reference)
| Metric | Elite | High | Medium | Low |
|---|---|---|---|---|
| Deployment Frequency | Multiple/day | Week | Month | Half-year |
| Lead Time for Changes | < 1 hour | < 1 day | < 1 week | < 6 months |
| Change Failure Rate | < 5% | < 10% | < 15% | > 15% |
| MTTR | < 1 hour | < 1 day | < 1 week | > 1 week |

## Deliverables
- Documented Feature Flag Strategy
- Release Plan (Features + activation conditions)
- DORA Metrics dashboard
- Release Notes per deployment

## Output format
Specify: current release frequency · tech stack · available feature flags · DORA objective
