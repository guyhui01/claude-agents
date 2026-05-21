# Skill — Gouvernance des Données & Data Catalog
> Certifications : Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objectif
Mettre en place une gouvernance des données qui garantit la qualité, la sécurité, la traçabilité et la conformité réglementaire (RGPD, AI Act).

## Piliers de la gouvernance des données
```
1. Organisation    → Rôles, responsabilités, comité data
2. Qualité         → Standards, mesure, amélioration continue
3. Sécurité        → Accès, classification, chiffrement
4. Catalogue       → Découverte, documentation, lineage
5. Conformité      → RGPD, AI Act, rétention, anonymisation
6. Maîtrise        → Master Data Management (MDM)
```

## Rôles de gouvernance
| Rôle | Responsabilités |
|---|---|
| **Chief Data Officer (CDO)** | Stratégie data, sponsor exécutif |
| **Data Owner** | Responsable métier d'un domaine de données |
| **Data Steward** | Qualité opérationnelle, définitions, règles |
| **Data Engineer** | Pipelines, qualité technique, infrastructure |
| **Data Analyst / Scientist** | Consommateurs, remontée de problèmes |

## Data Catalog — outils 2026
| Outil | Type | Force |
|---|---|---|
| **DataHub (LinkedIn)** | Open source | Lineage auto, API |
| **Apache Atlas** | Open source | Hadoop ecosystem |
| **Alation** | Commercial | UX, collaboration |
| **Collibra** | Commercial | Gouvernance enterprise |
| **dbt Docs** | Intégré dbt | SQL lineage automatique |
| **Unity Catalog** | Databricks | Lakehouse governance |

## Classification des données (RGPD)
```python
# Tags de classification dans Unity Catalog (Databricks)
spark.sql("""
    ALTER TABLE clients
    ALTER COLUMN email
    SET TAGS ('sensitivity' = 'PII', 'gdpr_category' = 'personal_data')
""")

# Anonymisation des données sensibles
from pyspark.sql import functions as F

df_anonymized = df \
    .withColumn("email_hash", F.sha2(F.col("email"), 256)) \
    .withColumn("email", F.lit("***@anonymized.fr")) \
    .withColumn("nom", F.lit("ANONYMIZED")) \
    .withColumn("age_bucket",
                F.when(F.col("age") < 25, "18-24")
                 .when(F.col("age") < 35, "25-34")
                 .otherwise("35+"))
```

## Row-Level Security (contrôle d'accès granulaire)
```sql
-- BigQuery : Row Access Policies
CREATE ROW ACCESS POLICY team_france
ON dataset.clients
GRANT TO ('user:analyst-fr@company.com', 'group:team-france@company.com')
FILTER USING (pays = 'FR');

-- Databricks : Row Filters
CREATE FUNCTION row_filter(client_country STRING)
RETURN client_country = current_user_country();

ALTER TABLE clients SET ROW FILTER row_filter ON (pays);
```

## Plan de réponse RGPD
| Droit | Délai | Action technique |
|---|---|---|
| **Droit d'accès** | 1 mois | Requête sur toutes les tables par user_id |
| **Droit à l'oubli** | 1 mois | DELETE + anonymisation des backups |
| **Portabilité** | 1 mois | Export JSON/CSV de toutes les données |
| **Rectification** | 1 mois | UPDATE + propagation dans le DWH |

## Livrables
- Politique de gouvernance des données (document)
- Data catalog avec lineage documenté
- Matrice de classification des données (PII, confidentielles, publiques)
- Procédures RGPD (accès, oubli, portabilité)
- Rapport d'audit de gouvernance

## Format de sortie
Précise : maturité actuelle de la gouvernance · données les plus sensibles · réglementations applicables · outil de catalog ciblé · équipe impliquée
