# Skill — Cloud Migration Strategy

> Certifications: AWS Solutions Architect Professional (SAP-C02), Google Professional Cloud Architect, AZ-305, TOGAF 10

## Objective

Define and drive an IS's cloud migration strategy: workload assessment, strategy selection (6R), wave planning, risk management and FinOps financial steering.

## The 6Rs of cloud migration (AWS framework)

```
STRATEGY      NAME             DESCRIPTION                            EFFORT   ROI
────────────  ───────────────  ─────────────────────────────────────  ───────  ─────
Retire        Decommission     Decommission unused apps                Low      High
Retain        Keep             Keep on-prem (legacy, regulatory)       None     None
Rehost        Lift & Shift     Migrate unchanged (VM → VM)             Low      Medium
Replatform    Lift & Tinker    Minor optimizations (DB → RDS)          Medium   Good
Repurchase    SaaS             Replace with a SaaS (CRM → Salesforce)  Medium   Good
Refactor      Re-architect     Rewrite for cloud-native (microsvcs)    High     Very high
```

## 4-phase migration process

### Phase 1 — Discovery & Assessment (4-8 weeks)

```yaml
activities:
  - Full IS inventory (applications, servers, DBs, dependencies)
  - Inter-application dependency mapping
  - Workload-by-workload qualification (criticality, complexity, sensitive data)
  - Migration readiness scoring (Migration Readiness Assessment — MRA)
  - On-prem vs cloud TCO estimate (3-5 years)

deliverables:
  - Application portfolio with 6R scoring
  - Dependency map
  - Migration business case
```

### Phase 2 — Design & Pilot (4-6 weeks)

```yaml
activities:
  - Cloud model choice (public / private / hybrid / multi-cloud)
  - Landing Zone design (network, security, governance, IAM)
  - POC on 1-2 representative workloads
  - Wave Planning
  - Definition of the target operating model (Cloud Operating Model)

deliverables:
  - Landing Zone architecture (Terraform IaC)
  - Validated wave 1 migration plan
  - POC results
```

### Phase 3 — Migration by waves

```
WAVE 1 — QUICK WINS (Months 1-3)
  → Non-critical, low-complexity applications
  → Strategy: Rehost (Lift & Shift)
  → Goal: 20-30% of workloads, team skill ramp-up

WAVE 2 — CORE BUSINESS (Months 4-8)
  → Important business applications, validated connectivity
  → Strategy: Rehost + Replatform (managed DBs, containers)
  → Goal: 50% more, FinOps optimizations

WAVE 3 — TRANSFORMATION (Months 9-18)
  → Critical applications, gradual modernization
  → Strategy: Refactor / Re-architect (cloud-native)
  → Goal: Last 30%, maximum performance
```

### Phase 4 — Optimization & Run

```yaml
activities:
  - On-prem data center decommissioning
  - FinOps optimization (Reserved Instances, Spot, rightsizing)
  - Cloud-native observability setup
  - Cloud operations team training
  - Continuous architecture review (Well-Architected Review)

deliverables:
  - Monthly FinOps report
  - Validated Well-Architected architecture
  - Cloud operations runbook
```

## Cloud vs on-prem TCO grid

```
COST              ON-PREM          CLOUD
──────────────    ─────────────    ────────────────────
Infrastructure    High capex       Opex (pay-as-you-go)
Maintenance       High (team)      Included in the service
Scalability       Limited, slow    Instant, elastic
Resilience        Costly           Native (multi-AZ)
Physical security On you           Provider (certified)
Obsolescence      3-5 year cycle   Continuous, invisible
```

## Deliverables

- Migration business case (3-5 year TCO: on-prem vs cloud)
- Application portfolio with a 6R strategy per workload
- Landing Zone architecture (Terraform IaC)
- Wave migration plan (Wave Plan)
- FinOps dashboard (costs per service / team / project)

## Output format

Specify: **IS size** (# applications, servers), **target cloud provider** (AWS / GCP / Azure / multi-cloud), **constraints** (sovereignty, HDS, SecNumCloud, GDPR), **migration timeline and budget**, **team cloud maturity level** (1-5).
