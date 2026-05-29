# Audit qualité — Groupe Data/Tech (5 agents)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8.2 Data/Tech (formalisée 2026-05-29, cf. `audits/audit-grilles-v2.8.md` §3.3)
> **Périmètre** : 54 skills sur 5 agents (DATA-SCIENTIST, DATA-ENGINEER, MLOPS-ENGINEER, SOLUTIONS-ARCHITECT, BI-ANALYST)
> **Méthode** : extraction factuelle déléguée à 5 sous-agents Explore en parallèle (format standard Phase 1.1) + cotation expert Claude principal sur grille v2.8.2
> **Format** : rapport consolidé groupe (cohérent directive qualité > quantité, [[feedback-triptyque-qualite]])

---

## 1. Synthèse exécutive

**Verdict global groupe Data/Tech** : Patrimoine **le plus volumineux du chantier** (54 skills, ~5950L cumulées — soit 12% de plus que Conseil/Direction). Certifications déclarées 100% (54/54 ✅) — meilleur que PO-SAFE/PO-SCRUM. **Mais carence sourcing académique fondateur la plus sévère détectée à ce jour** : Kimball cité sans 2013, Goodfellow absent, Hohpe & Woolf 2003 absent, Minto 1987 absente, DAMA-DMBOK 2017 absent. **28% P1** (15/54) = taux record du chantier.

| Métrique | Data/Tech | Conseil/Direction | Agile/Produit |
|---|---|---|---|
| Agents audités | 5/5 | 6/6 | 9/9 |
| Skills audités | **54** | 44 | 55 |
| Vol. moyen / skill | ~110L | ~117L | ~85L |
| Skills ✓ purs (3 dim) | **1/54 (2%)** ⭐ archimate-modeling | 0/44 | 3/55 (5%) |
| Skills P3 (proche ✓) | ~8/54 (15%) | ~10/44 (23%) | ~12/55 (22%) |
| Skills P2 (enrichissement) | ~30/54 (55%) | ~31/44 (70%) | ~26/55 (47%) |
| Skills P1 (bloquant) | **15/54 (28%)** 🔴 record | 3/44 (7%) | 14/55 (25%) |
| Skills P0 | 0/54 | 0/44 | 0/55 |
| Skills sans certif | 0/54 ✅ | 0/44 ✅ | ~17/55 (31%) |
| Skills avec anti-patterns explicites | ~18/54 (33%) | ~10/44 (23%) | ~20/55 (36%) |
| Skills avec ≥1 source URL/auteur datée | ~5/54 (9%) 🔴 | ~3/44 (7%) | ~5/55 (9%) |
| Cross-links inter-skills | 0/54 (0%) 🔴 | 0/44 (0%) | ~6/55 (11%) |

**Constats clés** :
- ⭐ **1er ✓ pur du chantier hors Agile/Produit** : `solutions_architect/archimate-modeling.md` (3 dim ✓ : ArchiMate 3 cité, 5 viewpoints, 7 relations, 4 anti-patterns explicites, comparatif outils)
- 🔴 **15 P1 — taux record du chantier (28%)** — pattern dominant : référentiels académiques fondateurs absents pour des domaines matures
- 🔴 **Sourcing académique catastrophique** : Kimball, Goodfellow, Hastie, Hohpe & Woolf, Minto, DAMA-DMBOK, Codd, Inmon — tous absents alors qu'ils sont les piliers des domaines couverts
- 🔴 **Erreurs techniques détectées** : `RateLimitError` n'existe pas dans `requests` (api-data-integration), Delta `optimize().executeCompaction()` n'existe pas (spark-big-data), Great Expectations API deprecated (pipeline-ingestion) — risque crédibilité technique
- 🟡 **Pattern sécurité préoccupant** : OWASP LLM Top 10 ABSENT dans `monitoring-llm.md` (alors que c'est LE domaine de la sécurité IA générative)
- 🟡 **0 cross-link inter-skills** (cohérent avec Conseil/Direction)

---

## 2. Méthodologie

Application stricte de la **grille v2.8.2 Data/Tech** (cf. `audits/audit-grilles-v2.8.md` §3.3, formalisée 2026-05-29 et commitée `56860b6`).

**Référentiels attendus** (par sous-domaine, cf. grille v2.8.2) :
- **Data Science / ML** : CRISP-DM (1999), CRISP-ML(Q) (Studer 2020), Hastie/Tibshirani/Friedman (2009), Goodfellow/Bengio/Courville (2016), Bishop (2006), Murphy (2022), Kuhn & Johnson (2013), Scikit-learn (Pedregosa et al. 2011), MLflow, NIST AI RMF 1.0, Model Cards (Mitchell 2019), Datasheets (Gebru 2021)
- **Data Engineering** : DAMA-DMBOK 2 (2017), Data Mesh (Dehghani 2022), Data Vault 2.0 (Linstedt 2015), Kimball *DW Toolkit* 3rd ed (2013), Inmon CIF, Lakehouse (Armbrust et al. CIDR 2021), Apache Airflow ≥ 2.x, Spark 3.5+, Kafka, dbt
- **MLOps** : Google MLOps Maturity (2021), Burkov (2020), CD4ML (ThoughtWorks 2019), DORA Accelerate (Forsgren/Humble/Kim 2018), MLflow, Feature Store patterns, Docker/K8s, OWASP LLM Top 10, NIST AI RMF, ISO/IEC 5338:2023, Google SRE Book
- **Architecture SI** : TOGAF 10 (2022) + 8 phases ADM, ArchiMate 3.2 (2023), C4 Model (Simon Brown), Zachman (1987), ISO/IEC 42010:2022, Conway's Law (1968), Enterprise Integration Patterns (Hohpe & Woolf 2003), Cloud Adoption Framework, AWS 6R, DDD (Evans 2003)
- **BI / Analytics** : Kimball *DW Toolkit* 3rd ed (2013), Inmon (1992-2005), Codd OLAP "12 Rules" (1993), Power BI / Tableau / Looker / LookML / Microsoft Fabric, DAMA-DMBOK 2 (2017), Barbara Minto *Pyramid Principle* (1987), Self-Service BI Gartner MQ, AARRR (McClure 2007), DAX, ANSI SQL 2003+

**Spécificité Data/Tech** : ajout d'un axe d'analyse **« exactitude technique du code »** (versions, API correctes) en plus des 3 dimensions standards — détecté 3 erreurs techniques sur le groupe.

---

## 3. Tableau récapitulatif consolidé (54 skills, 5 agents)

### 3.1 — DATA-SCIENTIST (13 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 1 | **analyse-exploratoire.md** | 74 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 2 | **deep-learning.md** | 95 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 3 | ethique-ia-biais.md | 75 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 4 | evaluation-modeles.md | 155 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 5 | experimentation-ab-ds.md | 141 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 6 | **feature-engineering.md** | 102 | ✓ | ✗ | ✓ | ✗ | **P1** 🔴 |
| 7 | mlflow-experimentation.md | 104 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 8 | **modelisation-ml.md** | 89 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 9 | **nlp-classique.md** | 109 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 10 | rapport-data-science.md | 161 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 11 | statistiques-tests.md | 94 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 12 | **time-series.md** | 89 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 13 | visualisation-data.md | 81 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

### 3.2 — DATA-ENGINEER (11 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 14 | **api-data-integration.md** | 118 | ✓ | ✗ | ⚠ | ✗ | **P1** 🔴 |
| 15 | cloud-data-platforms.md | 98 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 16 | data-quality.md | 130 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 17 | **data-warehouse.md** | 120 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 18 | dbt-transformation.md | 127 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 19 | **gouvernance-data.md** | 90 | ✓ | ✗ | ✓ | ✗ | **P1** 🔴 |
| 20 | orchestration-airflow.md | 124 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 21 | pipeline-ingestion.md | 115 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 22 | spark-big-data.md | 115 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 23 | sql-avance.md | 160 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 24 | streaming-kafka.md | 158 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |

### 3.3 — MLOPS-ENGINEER (10 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 25 | **cicd-ia.md** | 97 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 26 | cloud-deployment-ia.md | 96 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 27 | docker-ia.md | 85 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 28 | feature-store-pipelines.md | 95 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 29 | kubernetes-ia.md | 104 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 30 | mlflow-tracking.md | 88 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 31 | model-serving.md | 76 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 32 | **monitoring-llm.md** | 77 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (sécurité IA) |
| 33 | optimisation-inference.md | 81 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 34 | terraform-ia.md | 106 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |

### 3.4 — SOLUTIONS-ARCHITECT (8 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 35 | togaf-adm.md | 84 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 36 | **archimate-modeling.md** | 105 | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐ |
| 37 | architecture-bdat.md | 109 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 38 | **integration-patterns.md** | 86 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 39 | migration-cloud.md | 115 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 40 | gouvernance-architecturale.md | 97 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 41 | urbanisme-si.md | 79 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 42 | roadmap-transformation-si.md | 112 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

### 3.5 — BI-ANALYST (12 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 43 | bi-augmentee-ia.md | 162 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 44 | catalogue-kpis.md | 128 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 45 | **gouvernance-bi.md** | 131 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 46 | looker-lookml.md | 163 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 47 | microsoft-fabric.md | 155 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 48 | **modelisation-dimensionnelle.md** | 134 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 49 | monitoring-alertes-bi.md | 140 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 50 | power-bi-reporting.md | 152 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 51 | **reporting-codir.md** | 108 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 52 | self-service-bi.md | 123 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 53 | sql-analytique.md | 152 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 54 | tableau-dashboard.md | 130 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

---

## 4. Findings P1 — Bugs bloquants (15 skills, 28% du groupe — taux record du chantier)

### 🔴 P1.1 — DATA-SCIENTIST × 6 P1 (46% — pire ratio agent du chantier)

**Pattern dominant** : référentiels académiques fondateurs ML/DL totalement absents alors qu'ils sont les piliers du domaine.

| Skill | Symptôme | Référentiels manquants critiques |
|---|---|---|
| `analyse-exploratoire.md` (74L) | CRISP-DM jamais nommée, seuils non sourcés | CRISP-DM (1999), Pedregosa et al. (sklearn 2011) |
| `deep-learning.md` (95L) | Goodfellow absent, ResNet sans He, ViT sans Dosovitskiy, Transformers sans Vaswani | Goodfellow/Bengio/Courville (2016), Vaswani et al. *Attention is All You Need* (NIPS 2017) |
| `feature-engineering.md` (102L) | **Train/test leakage non alerté** (anti-pattern critique), aucun papier feature engineering | Kuhn & Johnson (2013), Train/Test Leakage anti-pattern |
| `modelisation-ml.md` (89L) | SHAP sans Lundberg & Lee (2017), algorithmes sans papiers, aucune référence ML académique | Hastie/Tibshirani/Friedman (ESL 2009), Lundberg & Lee SHAP (NIPS 2017) |
| `nlp-classique.md` (109L) | BERT sans Devlin (2018), RAG sans Lewis et al. (2020), Transformers sans Vaswani | Devlin et al. BERT (NAACL 2019), Lewis et al. RAG (NeurIPS 2020) |
| `time-series.md` (89L) | Prophet sans Taylor & Letham (2017), Box-Jenkins absent, N-BEATS/TFT "SOTA 2026" sans papiers | Box & Jenkins (1970), Taylor & Letham Prophet (Am. Stat. 2017), Oreshkin et al. N-BEATS (ICLR 2020) |

**Corrections (V2 priorité haute)** :
- Ajouter section `## Sources` à chaque skill avec papiers fondateurs datés
- Citer Pedregosa et al. (JMLR 2011) systématiquement pour sklearn (omniprésent dans les 13 skills)
- Anti-pattern Train/Test Leakage à expliciter dans `feature-engineering.md` (risque production majeur)

### 🔴 P1.2 — DATA-ENGINEER × 3 P1

| Skill | Symptôme |
|---|---|
| `api-data-integration.md` (118L) | **Erreur technique** : `RateLimitError` n'existe pas dans `requests` (devrait être `requests.exceptions.Timeout`), 0 anti-pattern, CDC absent, schema validation absente |
| `data-warehouse.md` (120L) | **Kimball NON ATTRIBUÉ** alors que tout le contenu vient de lui (star schema, SCD), Inmon CIF absent, Data Vault 2.0 absent (Linstedt) |
| `gouvernance-data.md` (90L) | **DAMA-DMBOK 2 (2017) JAMAIS nommé** (6 piliers = subset DAMA non attribué), Data Mesh Dehghani 2022 absent, AI Act déclaré agent mais absent du skill, Privacy by Design / k-anonymity / differential privacy absents |

### 🔴 P1.3 — MLOPS-ENGINEER × 2 P1

| Skill | Symptôme |
|---|---|
| `cicd-ia.md` (97L) | DORA Accelerate (4 keys) absent, CD4ML ThoughtWorks (2019) absent, Burkov absent, RAGAS non sourcé |
| **`monitoring-llm.md`** (77L) | 🚨 **OWASP LLM Top 10 ABSENT** dans le skill dédié à l'observability LLM — **bug critique sécurité IA**. NIST AI RMF absent, hallucination détection non implémentée, SLOs non formels |

### 🔴 P1.4 — SOLUTIONS-ARCHITECT × 1 P1

| Skill | Symptôme |
|---|---|
| `integration-patterns.md` (86L) | **Enterprise Integration Patterns (Hohpe & Woolf 2003) ABSENT** alors que TOUS les patterns du skill viennent de ce livre (Strangler Fig, Anti-corruption Layer, SAGA, Circuit Breaker). Affront méthodologique. |

### 🔴 P1.5 — BI-ANALYST × 3 P1

| Skill | Symptôme |
|---|---|
| `gouvernance-bi.md` (131L) | **DAMA-DMBOK 2 (2017) totalement absent** dans le skill dédié à la gouvernance BI — bug critique |
| `modelisation-dimensionnelle.md` (134L) | **Kimball non attribué** (livre + 2013 absent), **Data Vault 2.0 sans Linstedt**, OBT sans Databricks, Inmon CIF absent |
| `reporting-codir.md` (108L) | **Minto *The Pyramid Principle* (Pearson 1987) ABSENT** alors que TOUS les principes du skill viennent d'elle (1 message/page, contexte avant détail, situation-complication-resolution) |

---

## 5. Findings P2 — Enrichissements (~30 skills)

Approche commune (bundles thématiques pour Phase 3) :
- Section `## Sources` datée systématique
- Section `## Anti-patterns` (3-5 bullets, particulièrement BI et MLOps)
- Section `## Voir aussi` cross-links internes (0/54 actuellement)
- Versions précises pour les frameworks (Airflow 2.x, Spark 3.5+, dbt 1.8, K8s 1.30, etc.)

### Cas notables P2

#### P2.A — Bundle DATA-ENGINEER (7 P2 sur 11) — Versionnage frameworks
`dbt-transformation.md`, `orchestration-airflow.md`, `spark-big-data.md`, `streaming-kafka.md` : versions JAMAIS spécifiées alors que les exemples code dépendent de versions précises (Airflow 2.3+ pour TaskGroup, Spark 3.0+ pour AQE, dbt 1.2+ pour `dbt build`).
**Action** : ajouter `> Versions testées : Airflow 2.x · Spark 3.5+ · dbt 1.8 · confluent_kafka 2.x` en frontmatter.

#### P2.B — Bundle MLOPS-ENGINEER (7 P2 sur 10) — Sécurité absente
`kubernetes-ia.md` : PodDisruptionBudget absent, NetworkPolicy absent, RBAC absent, secrets en CLI plaintext. `terraform-ia.md` : AMI ID hardcoded (region-specific, non portable). `model-serving.md` : claims "3-5x plus rapide" non sourcés.
**Action V3 bundle** : "Security hardening MLOps" (OWASP LLM Top 10, secrets management sealed-secrets/Vault, RBAC, network policies).

#### P2.C — Bundle BI-ANALYST (7 P2 sur 12) — Outils sans théorie
`looker-lookml.md`, `microsoft-fabric.md`, `tableau-dashboard.md`, `power-bi-reporting.md` : approche pure produit (LookML, DAX, Fabric, Tableau), aucune référence à Kimball / Inmon / Codd qui sous-tendent ces outils.
**Action** : créer skill transversal `referentiels-bi.md` ou ajouter section "Fondements théoriques" pointant Kimball 2013 dans chaque skill outil.

#### P2.D — Bundle SOLUTIONS-ARCHITECT (5 P2) — Frameworks sans auteurs
`urbanisme-si.md` : Zachman (1987) absent alors que la structure 3 vues vient directement de Zachman. `gouvernance-architecturale.md` : Thoughtworks Tech Radar (2010+) utilisé sans citation. `migration-cloud.md` : AWS CAF/Azure CAF/GCAF déclarés en certif mais absents du contenu.
**Action** : sourcing systématique.

---

## 6. Findings P3 — Cosmétique (~8 skills)

Skills solides nécessitant compléments sources et anti-patterns.

| Skill | Action |
|---|---|
| `experimentation-ab-ds.md` | Citer Fisher (1935), Neyman-Pearson (1933), Benjamini-Hochberg (1995) |
| `rapport-data-science.md` | Préciser Tufte *Visual Display of Quantitative Information* (2nd ed Graphics Press 2001) |
| `statistiques-tests.md` | Citer Simpson (Royal Stat. Soc. 1951), Fisher *Statistical Methods* (1925) |
| `data-quality.md` | Préciser DAMA-DMBOK 2 (2017) 6 dimensions qualité + Data Contracts spec.datacontract.dev |
| `docker-ia.md` | Ajouter health check, non-root user, image digest |
| `togaf-adm.md` | Préciser TOGAF 10 (2022) URL theopen.group, ajouter 3-5 anti-patterns architecture |
| `bi-augmentee-ia.md` | Préciser Anthropic Claude API docs URL, ajouter cas d'usage sectoriel chiffré |
| `power-bi-reporting.md` | Ajouter URLs docs Microsoft, mentions DAX Studio (Marco Russo) |

---

## 7. Skill exemplaire : `solutions_architect/archimate-modeling.md` ⭐

**2ème skill du catalogue à atteindre le verdict ✓ pur** (après `story-mapping.md`, `planning-poker.md`, `po-ai-product.md` v2.9.0).

**Pourquoi il sort du lot** :
- ArchiMate 3 cité explicitement (The Open Group)
- 3 couches détaillées (Business / Application / Technology)
- 5 viewpoints standard + 7 relations principales documentées
- **4 anti-patterns explicites** (création sans connexion, mélange niveaux, "Association" lazy, duplication)
- Comparatif outils complet (5 outils : Archi, EA, Sparx, draw.io, LeanIX)
- Bonnes pratiques codifiées (✅ À FAIRE / ❌ À ÉVITER)
- Template "Application Cooperation Viewpoint" exécutable

**Reste à parfaire** (P3 cosmétique léger) : préciser ArchiMate **3.2** (The Open Group 2023) explicitement vs "3" générique.

**À dupliquer** : modèle de référence pour les skills d'architecture du catalogue.

---

## 8. Findings transversaux (patterns globaux groupe)

### 🔴 T1 — Référentiels académiques fondateurs absents (pattern P1 dominant)
Domaines matures (data science, BI, architecture, data engineering) où les ouvrages/papiers fondateurs sont **incontournables** — et tous absents :
- ML/DL : Hastie/Tibshirani/Friedman (2009), Goodfellow et al. (2016), Bishop (2006), Murphy (2022), Kuhn & Johnson (2013), Vaswani Attention (2017), Devlin BERT (2019), Lundberg SHAP (2017)
- Data Engineering : Kimball *DW Toolkit* (2013), Inmon CIF, Data Vault 2.0 Linstedt, DAMA-DMBOK 2 (2017), Data Mesh Dehghani (2022), Conway's Law (1968)
- Architecture : Hohpe & Woolf *Enterprise Integration Patterns* (2003), Zachman (1987), DDD Evans (2003), ISO/IEC 42010:2022
- BI : Kimball (2013), Inmon (1992-2005), Codd OLAP (1993), Minto *Pyramid Principle* (1987), DAMA-DMBOK 2 (2017), AARRR McClure (2007)
- MLOps : Burkov *ML Engineering* (2020), CD4ML (2019), DORA *Accelerate* (2018)
**Action V3 bundle prioritaire** : "Sources Frameworks Data/Tech" — propagation sur 40+ skills.

### 🔴 T2 — Erreurs techniques détectées (exactitude code)
- `api-data-integration.md` : `requests.RateLimitError` **n'existe pas** dans la lib `requests` (devrait être `requests.exceptions.Timeout` ou handler générique HTTP 429)
- `spark-big-data.md` : Delta Lake `optimize().executeCompaction()` **n'existe pas** (méthode fictive — utiliser `.optimize()` directement)
- `pipeline-ingestion.md` : Great Expectations API `ge.dataset.PandasDataset` **deprecated** (0.13.x — remplacée par `gx.get_context()` + fluent API depuis 0.16+)
**Action V1 urgente** : corriger les 3 erreurs pour préserver crédibilité technique.

### 🔴 T3 — 0 cross-link inter-skills sur 54 skills (cohérent avec Conseil/Direction)
Frontières évidentes non documentées :
- `feature-engineering.md` ↔ `data-quality.md` (data leakage prévention)
- `modelisation-ml.md` ↔ `mlflow-experimentation.md` ↔ `cicd-ia.md` (pipeline ML)
- `data-warehouse.md` ↔ `modelisation-dimensionnelle.md` ↔ `sql-analytique.md` (Kimball stack)
- `gouvernance-data.md` ↔ `gouvernance-bi.md` (DAMA partagée)
- `nlp-classique.md` ↔ `monitoring-llm.md` ↔ `optimisation-inference.md` (LLM stack)
- `architecture-bdat.md` ↔ `togaf-adm.md` ↔ `archimate-modeling.md` (TOGAF stack)
**Action V3 bundle** : Cross-links cross-agents (54 skills × ~3 voir aussi = ~160 liens).

### 🔴 T4 — Sécurité IA générative — pattern dominant absent
- `monitoring-llm.md` : **OWASP LLM Top 10 ABSENT** (LE référentiel sécurité LLM) — bug critique
- `gouvernance-data.md` : Privacy by Design, k-anonymity, differential privacy absents
- `kubernetes-ia.md` : RBAC, NetworkPolicy, sealed-secrets absents
- `terraform-ia.md` : Secrets Manager OK mais AMI ID hardcoded
- 0 mention NIST AI RMF dans tout le groupe MLOPS
**Action V2 priorité haute** : refonte `monitoring-llm.md` avec OWASP LLM Top 10 (2024 v2) + NIST AI RMF.

### 🟡 T5 — Versioning frameworks absent
Stack Data/Tech évolue vite (Airflow 2.x, Spark 3.5+, dbt 1.8, K8s 1.30, Spark Connect, Photon, Liquid clustering, AQE). Aucun skill ne déclare ses versions testées.
**Action V1 mass** : ajouter frontmatter `> Versions testées : <stack + versions>` (~25 skills concernés).

### 🟡 T6 — Patrimoine "outils" sans patrimoine "théorie"
BI-ANALYST en particulier : 4 skills outils (Power BI, Tableau, Looker, Fabric) très détaillés mais 0 référence Kimball/Inmon/Codd qui sous-tendent ces outils. Risque : praticien outil sans compréhension fondations.
**Action V3 bundle** : créer `skills/bi_analyst/referentiels-bi.md` transversal OU ajouter section "Fondements" à chaque skill outil.

### 🟡 T7 — Multi-cloud déclaré, AWS-réalisé (SOLUTIONS-ARCHITECT, MLOPS)
Certifications 3 clouds déclarées (AWS SAP-C02 + GCP PCA + AZ-305) mais skills `migration-cloud.md`, `cloud-deployment-ia.md`, `terraform-ia.md` majoritairement AWS-centriques. GCP CAF / Azure CAF non détaillés.
**Action** : équilibrer exemples 3 clouds OU déclarer explicitement le focus AWS.

### 🟡 T8 — Anti-patterns absents (33% skills avec, 67% sans)
Particulièrement DATA-ENGINEER (0/11 explicites) et BI-ANALYST (5/12).
**Anti-patterns attendus à propager** :
- DE : "Big ball of mud lakehouse", "Schema-on-read partout", "No SLA on data freshness", "Pipeline sans observability"
- BI : "Spaghetti report", "KPI sans target", "Self-service sans formation = chaos", "Dashboards de dashboards"
- MLOps : "Model decay non monitoré", "Secrets en clair", "Pas de canary deployment"

---

## 9. Plan d'action recommandé (4 vagues)

### V1 — Mass cosmétique transverse Data/Tech (~1h)
1. **T2 (urgent)** : corriger 3 erreurs techniques (`RateLimitError`, `optimize().executeCompaction()`, GX deprecated API) — risque crédibilité immédiat
2. **T5** : ajouter frontmatter `> Versions testées` (~25 skills) — correction mécanique
- **Impact V1** : aucun P1 ne régresse en P2 (tous les P1 sont profonds, pas cosmétiques)
- **État après V1** : 1 ✓ / ~8 P3 / ~30 P2 / **15 P1** (identique sauf 3 erreurs techniques corrigées)

### V2 — Bugs bloquants P1 (~10-15h, à différer en Phase 2 transversale)
15 P1 identifiés — selon garde-fou Phase 1 (max 1-2 V2 d'exception par groupe), **différer en Phase 2 transversale** avec priorisation par ROI compétitif :
- 🔴 **Top priorité Phase 2** : `monitoring-llm.md` (sécurité IA OWASP LLM Top 10) + `gouvernance-bi.md` (DAMA) + `modelisation-dimensionnelle.md` (Kimball/Inmon/Data Vault) + `reporting-codir.md` (Minto)
- 🟡 **Priorité moyenne Phase 2** : 6 P1 DATA-SCIENTIST (refontes par bundle "Sources ML/DL fondatrices")
- 🟡 **Priorité moyenne Phase 2** : `integration-patterns.md` (Hohpe & Woolf), `data-warehouse.md` (Kimball/Inmon), `gouvernance-data.md` (DAMA)

### V3 — Bundles thématiques cross-agents (Phase 3, ~10-12h)
- **Bundle "Sources Frameworks Data/Tech"** — propager sources datées sur ~40 skills (action T1)
- **Bundle "Anti-patterns Data/Tech"** — ajouter sur ~30 skills sans (T8)
- **Bundle "Cross-links Voir aussi"** — ~160 liens cross-agents (T3)
- **Bundle "Sécurité IA générative"** — OWASP LLM Top 10 propagé sur 4 skills MLOPS (T4)
- **Bundle "Versions stack"** — frontmatter versions sur ~25 skills (T5)

### V4 — Cosmétique P3 (~3-4h, optionnel)
~8 skills P3 proches ✓ : ajout sources + 1-2 anti-patterns chacun.

---

## 10. Bilan groupe Data/Tech & méta-observations méthode v2.8.2

### Comparaison inter-groupes (3/5 groupes audités)

| Métrique | Agile/Produit | Conseil/Direction | Data/Tech |
|---|---|---|---|
| Agents | 9 | 6 | 5 |
| Skills | 55 | 44 | **54** |
| Vol. cumulé | ~4700L | ~5141L | **~5950L** |
| % ✓ purs | 5% (3) | 0% | 2% (1) ⭐ |
| % P3 | 22% | 23% | 15% |
| % P2 | 47% | 70% | 55% |
| % P1 | 25% | 7% | **28% (record)** |
| % sans certif | 31% | 0% | 0% |
| % anti-patterns | 36% | 23% | 33% |
| % cross-links | 11% | 0% | 0% |

**Méta-observations méthode v2.8.2** :
- ✅ Grille v2.8.2 Data/Tech **applicable sans ajustement** depuis formalisation (validation pilote sur 1ère application — méthode rodée après 3 groupes)
- ✅ Délégation extraction Explore × 5 en parallèle (méthode standard intacte cf. [[feedback-no-degradation-qualite]]) = ~15-20 min wall-time pour 54 skills
- ⚠️ **Nouveau pattern P1 dominant détecté** : "skill long, certif déclarée, code dense, MAIS référentiels académiques fondateurs absents" — différent du pattern P1 cosmétique d'Agile/Produit
- ⚠️ **Profil Data/Tech distinct** : exactitude technique du code à vérifier (3 erreurs détectées) — ajouter cet axe dans grilles futures
- ⚠️ **Sécurité IA générative** : `monitoring-llm.md` sans OWASP LLM Top 10 = bug critique à traiter en priorité Phase 2

### Spécificités groupe Data/Tech
- Patrimoine **techniquement riche** (code complet, frameworks modernes, certifications 3 clouds) mais **académiquement fragile** (papiers fondateurs absents)
- Le seul ✓ pur du groupe (`archimate-modeling.md`) confirme la grille v2.8 atteignable
- Volume cumulé record (5950L) → ajuster fourchette temps audit Phase 1.X dans NEXT_STEPS

---

## Annexes

### A. Sources attendues complémentaires (Data/Tech)

**ML / Data Science** :
- Hastie, Tibshirani, Friedman *The Elements of Statistical Learning* 2nd ed (Springer 2009)
- Goodfellow, Bengio, Courville *Deep Learning* (MIT Press 2016)
- Bishop C. *Pattern Recognition and Machine Learning* (Springer 2006)
- Murphy K. *Probabilistic Machine Learning: An Introduction* (MIT Press 2022)
- Kuhn M. & Johnson K. *Applied Predictive Modeling* (Springer 2013)
- Pedregosa et al. "Scikit-learn: Machine Learning in Python" (JMLR 2011)
- Vaswani et al. "Attention is All You Need" (NIPS 2017)
- Devlin et al. "BERT" (NAACL 2019)
- Lewis et al. "RAG" (NeurIPS 2020)
- Lundberg & Lee "SHAP" (NIPS 2017)
- Taylor & Letham "Prophet" (Am. Statistician 2017)
- Box & Jenkins *Time Series Analysis* (Holden-Day 1970)

**Data Engineering / BI** :
- Kimball R. & Ross M. *The Data Warehouse Toolkit* 3rd ed (Wiley 2013)
- Inmon W. *Building the Data Warehouse* 4th ed (Wiley 2005)
- Linstedt D. & Olschimke M. *Building a Scalable Data Warehouse with Data Vault 2.0* (Morgan Kaufmann 2015)
- Dehghani Z. *Data Mesh* (O'Reilly 2022)
- Armbrust et al. "Lakehouse" (CIDR 2021)
- DAMA International *DAMA-DMBOK 2* (Technics Publications 2017)
- Codd E.F. "OLAP 12 Rules" (Computerworld 1993)
- Minto B. *The Pyramid Principle* (Pearson 1987)
- McClure D. "AARRR Pirate Metrics" (500 Startups 2007)

**MLOps** :
- Burkov A. *Machine Learning Engineering* (True Positive 2020)
- Sato/Wider/Windheuser "CD4ML" (ThoughtWorks 2019)
- Forsgren/Humble/Kim *Accelerate* (IT Revolution 2018)
- Google Cloud "MLOps Maturity" (cloud.google.com 2021)
- OWASP "Top 10 for LLM Applications" v2 (OWASP 2024)
- NIST "AI Risk Management Framework 1.0" (NIST jan. 2023)
- Beyer et al. *Site Reliability Engineering* (Google/O'Reilly 2016)

**Architecture SI** :
- The Open Group *TOGAF Standard 10th Edition* (2022)
- The Open Group *ArchiMate 3.2 Specification* (2023)
- Brown S. *The C4 Model for Visualising Software Architecture* (c4model.com)
- Zachman J. "A Framework for Information Systems Architecture" (IBM Sys. J. 1987)
- ISO/IEC/IEEE 42010:2022 (Architecture description)
- Conway M. "How Do Committees Invent?" (Datamation 1968)
- Hohpe G. & Woolf B. *Enterprise Integration Patterns* (Addison-Wesley 2003)
- Evans E. *Domain-Driven Design* (Addison-Wesley 2003)

### B. Prochaines étapes

- [ ] Validation Guy : verdicts (1 ✓ / ~8 P3 / ~30 P2 / 15 P1)
- [ ] Arbitrage V1 cosmétique (T2 erreurs techniques urgentes + T5 versionnage)
- [ ] Arbitrage 15 P1 (différés Phase 2 transversale — confirmation strategy hybride)
- [ ] Décision : passer à Phase 1.3 (Dev/CMS) ou consolider V1 maintenant ?

### C. Volume groupe consolidé
- 54 skills audités · ~5950 lignes cumulées (+ ~400L AGENT-*.md)
- Skill le plus court : `analyse-exploratoire.md` (74L)
- Skill le plus long : `looker-lookml.md` (163L) / `rapport-data-science.md` (161L)
- Moyenne : ~110L / skill
- **Couverture référentiels académiques fondateurs** : ~9% (5/54 skills citent ≥1 source datée) — taux le plus bas du chantier
- 1 ✓ pur sur 54 (1.9%) — `archimate-modeling.md`
