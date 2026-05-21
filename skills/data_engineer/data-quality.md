# Skill — Qualité des Données & Data Contracts
> Certifications : Databricks Data Engineer Associate · dbt Developer · Google PDE

## Objectif
Garantir la fiabilité et la qualité des données tout au long du pipeline avec des tests automatisés, des alertes et des contrats de données.

## Dimensions de la qualité des données
| Dimension | Description | Comment mesurer |
|---|---|---|
| **Complétude** | Absence de valeurs manquantes | % de nulls par colonne |
| **Exactitude** | Données correctes vs. la réalité | Référentiels, règles métier |
| **Cohérence** | Cohérence inter-sources | Jointures, réconciliations |
| **Fraîcheur** | Données à jour | Lag vs. source, timestamps |
| **Unicité** | Absence de doublons | Dédoublonnage, clés uniques |
| **Validité** | Conformité aux règles métier | Plages, formats, énumérations |

## Great Expectations — framework de tests DQ
```python
import great_expectations as gx

context = gx.get_context()

# Définir les expectations
validator = context.sources.pandas_default.read_dataframe(df)

validator.expect_column_values_to_not_be_null("client_id")
validator.expect_column_values_to_be_unique("transaction_id")
validator.expect_column_values_to_be_between("montant", 0, 100000)
validator.expect_column_values_to_match_regex(
    "email", r'^[\w\.-]+@[\w\.-]+\.\w+$'
)
validator.expect_column_pair_values_A_to_be_greater_than_B(
    "date_fin", "date_debut"
)

# Sauvegarder et documenter
validator.save_expectation_suite(discard_failed_expectations=False)

# Valider un nouveau dataset
results = validator.validate()
print(f"Succès: {results.success}")
print(f"Tests passés: {results.statistics['successful_expectations']}")
```

## dbt Tests — tests dans le pipeline de transformation
```yaml
# schema.yml
version: 2
models:
  - name: fact_ventes
    tests:
      - dbt_utils.recency:
          datepart: hour
          field: created_at
          interval: 25
    columns:
      - name: vente_id
        tests: [not_null, unique]
      - name: montant
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 0
              max_value: 999999
      - name: statut
        tests:
          - accepted_values:
              values: ['completed', 'pending', 'cancelled']
```

## Data Contracts (pattern 2026)
```yaml
# data_contract.yaml
id: urn:datacontract:ventes:transactions
version: "1.2.0"
name: Transactions de Ventes

models:
  fact_ventes:
    fields:
      vente_id:
        type: string
        required: true
        unique: true
      montant:
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
  latency: < 2 heures
  availability: 99.9%
```

## Monitoring continu (Anomaly Detection)
```python
# Détection d'anomalies sur les métriques DQ
import pandas as pd
from scipy import stats

def detect_anomaly(series, threshold=3.0):
    z_scores = stats.zscore(series.dropna())
    return abs(z_scores) > threshold

# Alertes Slack / PagerDuty si DQ score < seuil
def send_dq_alert(table, score, threshold=0.95):
    if score < threshold:
        send_slack_message(
            channel="#data-alerts",
            text=f"⚠️ DQ Alert: {table} score={score:.2%} < {threshold:.2%}"
        )
```

## Livrables
- Suite de tests Great Expectations par source
- Tests dbt intégrés dans le pipeline CI/CD
- Tableau de bord qualité données (score par table)
- Data contracts documentés et versionnés
- Runbook de résolution des incidents DQ

## Format de sortie
Précise : tables critiques · règles métier de qualité · SLA de fraîcheur · destinataires des alertes · outil de DQ préféré
