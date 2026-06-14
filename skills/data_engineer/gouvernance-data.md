# Skill — Data Governance & Data Catalog
> Certifications: Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objective
Set up data governance that guarantees quality, security, traceability and regulatory compliance (GDPR, AI Act).

## Pillars of data governance
```
1. Organization    → Roles, responsibilities, data council
2. Quality         → Standards, measurement, continuous improvement
3. Security        → Access, classification, encryption
4. Catalog         → Discovery, documentation, lineage
5. Compliance      → GDPR, AI Act, retention, anonymization
6. Mastery         → Master Data Management (MDM)
```

## Governance roles
| Role | Responsibilities |
|---|---|
| **Chief Data Officer (CDO)** | Data strategy, executive sponsor |
| **Data Owner** | Business owner of a data domain |
| **Data Steward** | Operational quality, definitions, rules |
| **Data Engineer** | Pipelines, technical quality, infrastructure |
| **Data Analyst / Scientist** | Consumers, issue reporting |

## Data Catalog — 2026 tools
| Tool | Type | Strength |
|---|---|---|
| **DataHub (LinkedIn)** | Open source | Auto lineage, API |
| **Apache Atlas** | Open source | Hadoop ecosystem |
| **Alation** | Commercial | UX, collaboration |
| **Collibra** | Commercial | Enterprise governance |
| **dbt Docs** | dbt-integrated | Automatic SQL lineage |
| **Unity Catalog** | Databricks | Lakehouse governance |

## Data classification (GDPR)
```python
# Classification tags in Unity Catalog (Databricks)
spark.sql("""
    ALTER TABLE customers
    ALTER COLUMN email
    SET TAGS ('sensitivity' = 'PII', 'gdpr_category' = 'personal_data')
""")

# Anonymization of sensitive data
from pyspark.sql import functions as F

df_anonymized = df \
    .withColumn("email_hash", F.sha2(F.col("email"), 256)) \
    .withColumn("email", F.lit("***@anonymized.com")) \
    .withColumn("name", F.lit("ANONYMIZED")) \
    .withColumn("age_bucket",
                F.when(F.col("age") < 25, "18-24")
                 .when(F.col("age") < 35, "25-34")
                 .otherwise("35+"))
```

## Row-Level Security (granular access control)
```sql
-- BigQuery: Row Access Policies
CREATE ROW ACCESS POLICY team_france
ON dataset.customers
GRANT TO ('user:analyst-fr@company.com', 'group:team-france@company.com')
FILTER USING (country = 'FR');

-- Databricks: Row Filters
CREATE FUNCTION row_filter(customer_country STRING)
RETURN customer_country = current_user_country();

ALTER TABLE customers SET ROW FILTER row_filter ON (country);
```

## GDPR response plan
| Right | Deadline | Technical action |
|---|---|---|
| **Right of access** | 1 month | Query all tables by user_id |
| **Right to erasure** | 1 month | DELETE + anonymization of backups |
| **Portability** | 1 month | JSON/CSV export of all data |
| **Rectification** | 1 month | UPDATE + propagation into the DWH |

## Deliverables
- Data governance policy (document)
- Data catalog with documented lineage
- Data classification matrix (PII, confidential, public)
- GDPR procedures (access, erasure, portability)
- Governance audit report

## Output format
Specify: current governance maturity · most sensitive data · applicable regulations · target catalog tool · team involved
