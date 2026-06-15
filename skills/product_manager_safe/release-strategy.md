# Skill — Release Strategy and Go-to-Market
> Certifications: SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), SAFe SPC (Scaled Agile)

## Objective
Define the release strategy at the SAFe Program level — release cadence, release train vs release on demand, go-to-market plan — to maximize the value delivered to customers and the business impact of the increments.

## Release Strategy — Template

```yaml
release_strategy:
  product: "HR AI Solution"
  pi: "PI-12"

  release_type: "release_on_demand"
  # Options: release_train (cadenced) / release_on_demand (value-driven)

  planned_releases:
    - id: "R2.0"
      name: "Launch — Scoring Module"
      pi: "PI-12"
      sprint: 4
      target_date: "2026-06-15"
      included_features: ["F-01", "F-02"]
      audiences:
        - "Pilot 3 CAC40 clients (telecom, finance, hospitality)"
      go_live_criteria:
        - "Scoring performance: precision > 85%"
        - "GDPR / DPIA validated by the DPO"
        - "User tests: CSAT > 3.5/5"
        - "0 critical bug in production"
      rollout: "Feature flags — gradual activation 20% → 50% → 100%"

    - id: "R2.1"
      name: "Extension — Interview transcription"
      pi: "PI-13"
      sprint: 4
      target_date: "2026-09-14"
      included_features: ["F-05", "F-06"]
```

## Go-to-Market Plan — Template

```
GTM PLAN — Release R2.0 — AI Scoring Module
══════════════════════════════════════════════════════════

TARGET SEGMENT
─────────────────────────────────────────────────────────
Pilot clients      : 3 large CAC40 groups (telecom, finance, hospitality)
Selection criterion: > 500 hires / year, approved budget

VALUE PROPOSITION
─────────────────────────────────────────────────────────
"Cut your candidate-screening time by 40% from the very first month"

CHANNELS
─────────────────────────────────────────────────────────
Before go-live : Tailored demo, pilot workshop, benchmark
Go-live        : Launch session (leadership + HR), team training
After go-live  : Monthly NPS, success stories, customer cases

GTM METRICS
─────────────────────────────────────────────────────────
Pilot → contract conversion: > 80%
Time-to-value: < 30 days after activation
Customer NPS: > 45 at 90 days
```

## Feature Flags — Gradual release

```typescript
// Gradual rollout strategy
const releaseConfig = {
  featureFlags: {
    "scoring-ia-v2": {
      enabled: true,
      rollout: {
        percentage: 20,        // 20% of users first
        targetGroups: ["pilot_clients"],
        schedule: [
          { date: "2026-06-15", percentage: 20 },
          { date: "2026-06-22", percentage: 50, condition: "CSAT > 3.5" },
          { date: "2026-06-29", percentage: 100, condition: "0 critical bug" }
        ]
      }
    }
  }
};
```

## Deliverables
- Documented release strategy (YAML)
- Complete Go-to-Market plan
- Go/no-go criteria per release
- Gradual rollout plan (feature flags)

## Output format
Specify: features to release, customer segments, go-live date, regulatory constraints, distribution channels.
