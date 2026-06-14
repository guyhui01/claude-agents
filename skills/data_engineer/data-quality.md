# Skill — Data Quality & Data Contracts
> Certifications: Databricks Data Engineer Associate · dbt Developer · Google PDE

## Objective
Guarantee data reliability and quality across the pipeline with automated tests, alerts and data contracts.

## Data quality dimensions
| Dimension | Description | How to measure |
|---|---|---|
| **Completeness** | No missing values | % of nulls per column |
| **Accuracy** | Data correct vs. reality | Reference data, business rules |
| **Consistency** | Cross-source consistency | Joins, reconciliations |
| **Freshness** | Up-to-date data | Lag vs. source, timestamps |
| **Uniqueness** | No duplicates | Deduplication, unique keys |
| **Validity** | Compliance with business rules | Ranges, formats, enumerations |

## Great Expectations — DQ test framework
```python
import great_expectations as gx

context = gx.get_context()

# Define the expectations
validator = context.sources.pandas_default.read_dataframe(df)

validator.expect_column_values_to_not_be_null("customer_id")
validator.expect_column_values_to_be_unique("transaction_id")
validator.expect_column_values_to_be_between("amount", 0, 100000)
validator.expect_column_values_to_match_regex(
    "email", r'^[\w\.-]+@[\w\.-]+\.\w+$'
)
validator.expect_column_pair_values_A_to_be_greater_than_B(
    "end_date", "start_date"
)

# Save and document
validator.save_expectation_suite(discard_failed_expectations=False)

# Validate a new dataset
results = validator.validate()
print(f"Success: {results.success}")
print(f"Tests passed: {results.statistics['successful_expectations']}")
```

## dbt Tests — tests in the transformation pipeline
```yaml
# schema.yml
version: 2
models:
  - name: fact_sales
    tests:
      - dbt_utils.recency:
          datepart: hour
          field: created_at
          interval: 25
    columns:
      - name: sale_id
        tests: [not_null, unique]
      - name: amount
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 0
              max_value: 999999
      - name: status
        tests:
          - accepted_values:
              values: ['completed', 'pending', 'cancelled']
```

## Data Contracts (2026 pattern)
```yaml
# data_contract.yaml
id: urn:datacontract:sales:transactions
version: "1.2.0"
name: Sales Transactions

models:
  fact_sales:
    fields:
      sale_id:
        type: string
        required: true
        unique: true
      amount:
        type: float
        required: true
        minimum: 0
      created_at:
        type: timestamp
        required: true

quality:
  completeness: 99.5%
  freshness: 1h

sla:
  latency: < 2 hours
  availability: 99.9%
```

## Continuous monitoring (Anomaly Detection)
```python
# Anomaly detection on DQ metrics
import pandas as pd
from scipy import stats

def detect_anomaly(series, threshold=3.0):
    z_scores = stats.zscore(series.dropna())
    return abs(z_scores) > threshold

# Slack / PagerDuty alerts if DQ score < threshold
def send_dq_alert(table, score, threshold=0.95):
    if score < threshold:
        send_slack_message(
            channel="#data-alerts",
            text=f"⚠️ DQ Alert: {table} score={score:.2%} < {threshold:.2%}"
        )
```

## Deliverables
- Great Expectations test suite per source
- dbt tests integrated into the CI/CD pipeline
- Data quality dashboard (score per table)
- Documented and versioned data contracts
- DQ incident resolution runbook

## Output format
Specify: critical tables · business quality rules · freshness SLA · alert recipients · preferred DQ tool
