# Skill — Test environment management

> **Methodology:** Mixed (Agile + V-model)
> Certification: ISTQB® CTAL-TM · ISTQB® CTAL-TTA
> Agent: AGENT-QA-CYCLEV.md

## Objective
Design, manage and maintain test environments to guarantee the reliability of test campaigns — from the integration environment through to pre-production.

## Test environment types

```
DEVELOPMENT    →  INTEGRATION  →  QUALIFICATION  →  PRE-PROD  →  PRODUCTION
    (DEV)            (INT)            (QUA/REC)        (PPR)         (PROD)

Goal:            Unit tests        E2E tests         UAT           Prod clone   Live
Data:            Fictitious        Fictitious/masked Masked        Anonymized   Real
Access:          Dev               Dev + QA          QA + Business Restricted   Controlled
Deployment:      Continuous        CI/CD             Manual/CI     Controlled   Release
```

## Requirements of a test environment

### Sizing
| Parameter | INT | QUA | PPR |
|---|---|---|---|
| CPU/RAM resources | 50% prod | 75% prod | 100% prod |
| Data | Dedicated test set | Masked data | Anonymized copy |
| Third-party services | Mock / Sandbox | Sandbox | Prod-like sandbox |
| Network access | Restricted | Restricted | Controlled |

### Environment stability criteria
- [ ] Same code version as the current sprint/release
- [ ] Database reset or restored between campaigns
- [ ] Third-party services (API, payment, email) in sandbox mode
- [ ] No deployments in progress during testing
- [ ] Active monitoring (logs, alerts)

## Environment management process

### 1. Request and provisioning
```
Request (Test Manager) → Approval (DevOps) → Provisioning → Environment acceptance
     |                                              |
  JIRA ticket                              Infrastructure as Code
  (type: Env Request)                      (Terraform / Ansible)
```

### 2. Environment management plan

```
ENVIRONMENT     APP VERSION   DATABASE             OWNER          STATUS
INT-01          sprint-42     db_int_s42           Dev Lead       Available
QUA-01          release-3.2   db_qua_r32_masked    QA Manager     Testing
PPR-01          release-3.1   db_ppr_anonymized    DevOps         Maintenance
```

### 3. Test data reset

```bash
# Environment reset script (pseudocode)
restore_database(snapshot="baseline_sprint_42")
seed_data(dataset="test_fixtures_v2")
reset_mock_services(config="sandbox")
notify_team(env="QUA-01", status="ready")
```

## Test data — Strategies

### Test data types
| Type | Description | Usage |
|---|---|---|
| Static data | Fixed reusable sets | Stable functional tests |
| Dynamic data | Generated on the fly | Load, stress tests |
| Masked data | Real anonymized data | GDPR compliance tests |
| Boundary data | Edge cases, nulls, extremes | Negative tests |

### Test data management tools
- **Generation**: Faker (Python/JS), Mockaroo, TestContainers
- **Masking**: Anonymizer, DataVeil, Delphix
- **Versioning**: Liquibase, Flyway (DB schema)
- **Snapshots**: AWS RDS Snapshot, pg_dump, mysqldump

## Environment conflict management

### Frequent problems and solutions

| Problem | Impact | Solution |
|---|---|---|
| Unstable environment | Unreliable tests | Lock the env during testing |
| Corrupted data | False negatives | Automated reset procedure |
| Third-party service unavailable | Campaign blocked | Switch to a mock |
| Wrongly deployed version | Incorrect results | CI/CD pipeline with auto smoke test |
| Access conflict (2 teams) | Tests polluted | Environment booking calendar |

### Responsibility matrix (RACI)
| Activity | Test Manager | QA Engineer | DevOps | Dev |
|---|---|---|---|---|
| Define env. needs | R/A | C | I | I |
| Provision the env. | I | I | R/A | C |
| Maintain the data | A | R | C | I |
| Monitor stability | I | R | R | I |
| Resolve incidents | A | C | R | C |

## Monitoring and alerts

### Metrics to monitor
| Dimension | Metric | Target |
|---|---|---|
| Availability | Environment uptime | > 99% |
| Performance | Response time vs prod | < 3× prod |
| Data | Freshness of the test set | Reset < 24h |
| Deployment | Version verified before testing | Versioned git tag |

### Environment status report template
```
ENVIRONMENT REPORT — [Date]
Environment    : QUA-01
App version    : release-3.2.1
DB snapshot    : 2026-05-20 08:00
Availability   : 99.2% (last 7 days)
Incidents      : 1 (resolved — Auth service restart)
Next update    : 2026-05-22 (sprint 43)
Status         : Available for testing
```

## Checklist — Environment qualification

Before launching a test campaign:
- [ ] Application version verified (git tag / build number)
- [ ] Database reset to the reference state
- [ ] Third-party services (external APIs, payment, email) in sandbox
- [ ] Smoke tests executed and passing (> 95%)
- [ ] QA team access verified (login, permissions)
- [ ] Active monitoring (Grafana, Datadog, ELK)
- [ ] Communication sent to the teams (env available)
