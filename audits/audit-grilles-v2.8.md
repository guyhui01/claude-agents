# Grilles d'audit qualité v2.8 — Catalogue claude-agents

> **Date de formalisation** : 2026-05-28
> **Modèle** : Claude Opus 4.7
> **Origine** : Pilote AGENT-PO-SAFE (cf. `audits/audit-po-safe-2026-05-28.md`)
> **Statut** : v2.8 — Squelette commun figé + 1 déclinaison validée (Agile/Produit) · 4 déclinaisons restantes à formaliser au fil des audits

---

## 1. Pourquoi cette grille

L'audit v2.7.1 a calibré une grille (Conformité × Actionabilité × Profondeur) sur les 5 agents DEV core. Cette grille fonctionne pour du code, mais ses **critères opérationnels** ne sont pas adaptés aux agents Agile/Produit, Conseil/Direction, UX, Juridique, etc. — où l'actionabilité ne veut pas dire "code prêt-à-copier" mais "template Jira", "one-pager CODIR", "wireframe Figma".

v2.8 conserve les **3 dimensions universelles** et formalise **5 déclinaisons** par nature d'agent.

---

## 2. Squelette commun (toutes déclinaisons)

### 2.1 — Trois dimensions universelles

| # | Dimension | Question structurante |
|---|---|---|
| **D1** | **Conformité référentielle** | Le skill respecte-t-il scrupuleusement le référentiel officiel revendiqué par l'agent ? |
| **D2** | **Actionabilité** | Le contenu est-il directement utilisable (copier-coller, ou suivi étape par étape) sans retravail ? |
| **D3** | **Profondeur** | Le skill mobilise-t-il sources et retours d'expérience récents qui légitiment l'expertise certifiante ? |

### 2.2 — Échelle de cotation par dimension

| Cotation | Sens |
|---|---|
| **✓** | Conforme — répond aux 3 critères opérationnels du niveau attendu |
| **⚠** | À corriger — répond partiellement (1-2 manques sur 3 critères) |
| **✗** | À refondre — manque structurel sur la dimension (0-1 critère sur 3) |
| **N/A** | Dimension non applicable (rare — à justifier explicitement) |

### 2.3 — Règles de verdict global par skill

| Verdict | Critère | Action attendue |
|---|---|---|
| **✓** | 3 dimensions ✓ | Aucune action |
| **P3** | 1 dimension ⚠ sur formatting/structure | Cosmétique fine (peut attendre) |
| **P2** | 1-2 dimensions ⚠ sur contenu | Enrichissement (à planifier) |
| **P1** | 1 dimension ✗ OU ≥2 dimensions ⚠ critiques | Bug bloquant (à traiter prioritairement) |
| **P0** | ≥2 dimensions ✗ | Skill à refondre complètement |

### 2.4 — Métriques de synthèse par agent audité

À chaque audit d'agent, calculer :
- Distribution des verdicts (% ✓ / P3 / P2 / P1 / P0)
- % skills sans certification déclarée (bug structurel mécanique)
- % skills avec ≥1 anti-pattern explicite
- % skills avec ≥1 source externe citée
- Taux de couverture des référentiels attendus (vs déclarés)

---

## 3. Déclinaisons par groupe d'agents

### 3.1 — Groupe Agile/Produit ✅ (validé, pilote PO-SAFE)

**Agents concernés (9)** : PO-SAFE · PO-SCRUM · PRODUCT-MANAGER-SAFE · SCRUM-MASTER · RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER

#### D1 — Conformité référentielle (Agile/Produit)
**Référentiels attendus** :
- Scrum Guide **2020** (3 accountabilities, Sprint Goal unique, 5 valeurs)
- SAFe **6.0** (vocabulaire exact : ART, RTE, PI, IP Iteration, Solution Train)
- WSJF méthode officielle POPM 6 (cotation **relative** par colonne, plus petit = 1, colonnes indépendantes)
- ISTQB syllabus CTFL v4.0 (2023), CTAL-TM/TA versions à jour
- PMBOK 7 (12 principes + 8 performance domains)
- IIBA BABOK v3
- PROSCI ADKAR (modèle des 3 phases)

**Cotation** :
- ✓ : 100% conforme, vocabulaire exact, pas de mélange inter-référentiels
- ⚠ : conforme dans les grandes lignes, 1-2 imprécisions (terme inexact, version ancienne citée)
- ✗ : déviation majeure (Scrum Guide 2017 utilisé, MoSCoW appliqué à des Features, etc.)

#### D2 — Actionabilité (Agile/Produit)
**Critères opérationnels** :
- Templates Jira/Confluence/Jira Align prêts à copier-coller
- Exemples chiffrés réalistes (WSJF, capacités équipe, KPIs Flow/DORA)
- Scripts cérémonies minutés (PI Planning J1/J2, rétro, atelier WSJF)
- Livrables visuels (Mermaid Program Board, Value Stream, hiérarchie)
- Checklists DoR/DoD
- Cas sectoriels (banque/retail/télécom) — pas que du "MyApp"

**Cotation** :
- ✓ : ≥3 livrables actionnables, format prêt à coller, exemples chiffrés réalistes
- ⚠ : contenu théorique correct mais peu de templates, ou exemples génériques
- ✗ : majoritairement conceptuel, aucun livrable réutilisable

#### D3 — Profondeur (Agile/Produit)
**Critères opérationnels** :
- Sources officielles 2023+ : scaledagileframework.com, scrum.org, ISTQB.org, PMI.org
- Flow Metrics SAFe 6 (Velocity, Time, Efficiency, Load, Distribution, Predictability), DORA 4 keys
- Tendances 2024-2026 : Agile + IA générative, métriques produit (NSM, AARRR), Lean Portfolio
- Cas réels documentés (transformations publiques BMW, Capital One, etc.)
- Anti-patterns explicités (WSJF en absolu, Sprint Goal multiple, etc.)

**Cotation** :
- ✓ : sources récentes (2023+), métriques modernes, anti-patterns explicités
- ⚠ : contenu solide mais sans références récentes
- ✗ : contenu daté, aucune référence externe, anti-patterns absents

#### Référentiel de sources attendues (Agile/Produit)

| Source | URL/Ref | Skills cibles |
|---|---|---|
| SAFe 6.0 (scaledagileframework.com) | site officiel 2023+ | tous skills SAFe |
| Scrum Guide 2020 (scrumguides.org) | doc officielle | skills scrum |
| WSJF SAFe POPM 6 | scaledagileframework.com/wsjf/ | wsjf.md |
| DORA Metrics | dora.dev + Forsgren "Accelerate" (2018) | safe-devops, safe-metrics |
| Lean Thinking | Womack & Jones (1996, 2003) | value-stream, lean-* |
| OKRs | John Doerr "Measure What Matters" (2018) | okr.md |
| Lean Startup / MVP | Eric Ries (2011) | epic-hypothesis-mvp |
| SPIDR / User Stories | Mike Cohn (2004) | feature-to-story-splitting |
| ISTQB CTFL v4.0 | istqb.org | skills qa |
| PMBOK 7 | pmi.org | skills cdp-ia, business-analyst |
| BABOK v3 | iiba.org | skills business-analyst |
| PROSCI ADKAR | prosci.com | skills change-manager |

---

### 3.2 — Groupe Conseil/Direction ✅ (formalisé v2.8.1 — Phase 1.1, audit 2026-05-29)

**Agents concernés (6)** : JURIDIQUE-IA · CDO-DIRECTEUR-IA · CHEF-PROJET-IA · CONSULTANT-IA · FINANCIAL-ANALYST · AUDIT-METHODO-IA

#### D1 — Conformité référentielle (Conseil/Direction)

**Référentiels attendus** (par sous-domaine) :

| Sous-domaine | Référentiels attendus |
|---|---|
| **Juridique IA** | AI Act UE (Règl. 2024/1689) · RGPD UE 2016/679 · NIS2 UE 2022/2555 · DORA UE 2022/2554 · ISO/IEC 42001:2023 · ISO/IEC 23894:2023 · ISO/IEC 27001:2022 · CNIL (DPIA, guides IA) |
| **Stratégie / Conseil** | McKinsey 7S · BCG Growth-Share Matrix · Porter Five Forces (1979) · Ansoff Matrix (1957) · Blue Ocean (Kim & Mauborgne 2005) · Wardley Maps · Lean Startup (Ries 2011) pour POC |
| **Data Governance (CDO)** | DAMA-DMBOK 2 (2017) · Data Mesh (Dehghani 2022) · Data Vault 2.0 (Linstedt) · CDMC (EDM Council) · DCAM |
| **Gestion projet (CDP)** | PMBOK 7 (2021) · PMI-ACP · PRINCE2 · EVM ANSI/EIA-748 · PMI Risk Management Standard · ISO 21500 |
| **Finance / ROI** | NPV/IRR (Brealey-Myers) · TCO Gartner · Real Options (Black-Scholes adapté) · Payback Period · Discounted Cash Flow |
| **Audit / Méthodo** | COSO ERM 2017 · COBIT 2019 · ITIL 4 · ISO/IEC 19011:2018 (audit) · IIA Standards (Internal Audit) |

**Cotation** :
- ✓ : 100% conforme, vocabulaire exact, version datée citée (AI Act art. X, RGPD art. Y), pas de mélange inter-référentiels
- ⚠ : conforme dans les grandes lignes, 1-2 imprécisions (auteur non cité, version ancienne, article non précisé)
- ✗ : déviation majeure (RGPD cité sans articles, AI Act sans niveau de risque, EVM sans formules)

#### D2 — Actionabilité (Conseil/Direction)

**Critères opérationnels** :
- **One-pagers CODIR** structurés Pyramide Minto (réponse → arguments → données)
- **Business cases chiffrés** avec NPV, IRR, TCO, Payback Period, IRR > coût capital
- **Slide decks exec** : 5-10 slides max, 1 message par slide (Barbara Minto, *The Pyramid Principle* 1987)
- **DPIA templates** (CNIL/EDPB), registres de traitement RGPD, AI Risk Register NIST RMF
- **Matrices RACI**, dashboards portefeuille projet (EVM : CV, SV, CPI, SPI)
- **Calculs ROI/TCO** avec hypothèses explicites et analyses de sensibilité
- **Cas sectoriels variés** (banque CIB, luxe, énergie, défense, télécom, hôtellerie) — anti mono-sectoriel
- **Frameworks visuels** (7S McKinsey, BCG 2×2, Porter 5F, Wardley Map en Mermaid)

**Cotation** :
- ✓ : ≥3 livrables actionnables (one-pager + business case chiffré + RACI/template juridique), exemples chiffrés réalistes
- ⚠ : contenu théorique correct, templates partiels ou exemples non chiffrés
- ✗ : majoritairement conceptuel, aucun livrable réutilisable, pas de calcul chiffré

#### D3 — Profondeur (Conseil/Direction)

**Critères opérationnels** :
- **Benchmarks marché 2024-2026** : Gartner Magic Quadrant, Forrester Wave, IDC MarketScape
- **Études cabinets récentes (2023+)** : McKinsey Global Institute, BCG, Deloitte AI, Accenture Technology Vision
- **Cas réels** : transformations CAC40 / licornes, anonymisés en secteurs (banque CIB, luxe, énergie…)
- **Jurisprudence émergente** : premières amendes AI Act 2025-2026, jurisprudence CNIL/EDPB, sanctions DORA
- **Métriques modernes** : AI maturity index (CDO), DORA metrics (data engineering), Gartner CDO playbook
- **Anti-patterns explicités** par sous-domaine (ex : "RGPD = juste un consentement", "AI Act = checklist annexe", "Business case sans hypothèses")

**Cotation** :
- ✓ : sources datées récentes (2023+), benchmarks/études cabinets cités, anti-patterns explicités, cas sectoriels variés
- ⚠ : contenu solide mais sources implicites ou datées (avant 2022)
- ✗ : contenu daté, aucune source externe, anti-patterns absents, exemples génériques

#### Référentiel de sources attendues (Conseil/Direction)

| Source | URL/Ref | Skills cibles |
|---|---|---|
| **AI Act UE** (Règl. 2024/1689) | JO L 2024/1689 (13 juin 2024) | juridique_ia/* |
| **RGPD** (Règl. UE 2016/679) | eur-lex.europa.eu | rgpd-ia, dpia-* |
| **NIS2** (Dir. UE 2022/2555) | eur-lex.europa.eu | nis2-conformite |
| **DORA** (Règl. UE 2022/2554) | eur-lex.europa.eu | finance/banque CIB |
| **ISO/IEC 42001:2023** | iso.org | gouvernance-ethique-ia, politique-ia-* |
| **NIST AI RMF 1.0** | nist.gov/itl/ai-risk-management-framework (jan. 2023) | audit-conformite-ia |
| **DAMA-DMBOK 2** | dama.org (2017, 2nd ed.) | data governance CDO |
| **Data Mesh** | Dehghani (O'Reilly 2022) | cdo_directeur_ia/data-mesh |
| **PMBOK 7** | pmi.org (2021) | chef_projet_ia/* |
| **EVM** | ANSI/EIA-748-D (PMI) | evm-valeur-acquise |
| **COSO ERM** | coso.org (2017) | risk management |
| **COBIT 2019** | isaca.org | gouvernance IT |
| **Minto Pyramid** | Barbara Minto (1987) | reporting-codir, presentation-executif |
| **Porter Five Forces** | HBR (1979) · Competitive Strategy (1980) | benchmark, strategie |
| **McKinsey 7S** | Waterman & Peters (1980) | transformation-digitale |
| **BCG Matrix** | Henderson (1970) | strategie-data-ia |
| **Blue Ocean Strategy** | Kim & Mauborgne (HBR 2004, livre 2005) | strategie |
| **Lean Startup / MVP** | Eric Ries (2011) | cadrage-poc-ia |
| **Gartner Magic Quadrant** | gartner.com | benchmark-solutions-ia |
| **Forrester Wave** | forrester.com | benchmark-solutions-ia |

---

---

### 3.3 — Groupe Data/Tech ✅ (formalisé v2.8.2 — Phase 1.2, audit 2026-05-29)

**Agents concernés (5)** : DATA-SCIENTIST (13 skills) · DATA-ENGINEER (11) · MLOPS-ENGINEER (10) · SOLUTIONS-ARCHITECT (8) · BI-ANALYST (12) — **54 skills total**

#### D1 — Conformité référentielle (Data/Tech)

| Sous-domaine | Référentiels attendus |
|---|---|
| **Data Science / ML** | CRISP-DM (1999) · CRISP-ML(Q) (2020) · Scikit-learn API conventions · PyTorch (Meta) / TensorFlow 2.x · Hugging Face Transformers · MLflow tracking · Hastie/Tibshirani *Elements of Statistical Learning* (2009) · Goodfellow et al. *Deep Learning* (2016) · Kuhn & Johnson *Applied Predictive Modeling* (2013) |
| **Data Engineering** | DAMA-DMBOK 2 (2017) · Data Mesh (Dehghani 2022) · Data Vault 2.0 (Linstedt) · Lakehouse (Databricks 2020) · Kimball *Data Warehouse Toolkit* (3rd ed. 2013) · dbt best practices · Apache Airflow / Spark 3.5+ / Kafka conventions |
| **MLOps** | Google MLOps maturity (3 niveaux, 2021) · *Machine Learning Engineering* (Burkov 2020) · MLOps Community guidelines · CD4ML (ThoughtWorks 2019) · Feature Store patterns (Tecton, Feast) · DORA metrics (Forsgren/Humble/Kim *Accelerate* 2018) |
| **Architecture SI** | TOGAF 10 (2022) · ArchiMate 3.2 · C4 Model (Simon Brown) · Zachman Framework · ISO/IEC 42010:2022 (architecture description) · Conway's Law (1968) · Fowler patterns |
| **BI / Analytics** | Kimball dimensional modeling (Kimball 2013) · Inmon CIF · OLAP (Codd 1993) · Power BI / Tableau / Looker best practices · LookML (Looker) · Microsoft Fabric · Self-Service BI (Gartner) |
| **AI lifecycle / Gouvernance** | ISO/IEC 5338:2023 (AI system lifecycle) · ISO/IEC 42001:2023 (AIMS) · NIST AI RMF 1.0 (2023) · Model Cards (Mitchell et al. 2019) · Datasheets for Datasets (Gebru et al. 2021) |

**Cotation** :
- ✓ : 100% conforme, vocabulaire exact (CRISP-DM 6 phases nommées, TOGAF ADM 8 phases, Kimball star schema), versions à jour, frameworks attribués à leurs auteurs
- ⚠ : conforme dans les grandes lignes, 1-2 imprécisions (CRISP-DM cité sans 6 phases, TOGAF cité sans ADM, dbt sans bonnes pratiques officielles)
- ✗ : déviation majeure (Kimball confondu avec Inmon, CRISP-DM sans phases, MLOps sans pipelines CI/CD)

#### D2 — Actionabilité (Data/Tech)

**Critères opérationnels** :
- **Code prêt-à-copier** : PyTorch / TensorFlow / Scikit-learn pour DS · PySpark / dbt / SQL pour DE · YAML CI/CD + Helm charts + Terraform pour MLOps · DAX / LookML / Python pandas pour BI
- **Diagrammes** Mermaid/PlantUML : architectures lakehouse, pipelines ML, ADM TOGAF, ArchiMate, C4 model
- **Notebooks templates** : EDA, feature engineering, evaluation modèles (DS) · ELT/ETL patterns (DE)
- **Dashboards exemples** : Power BI / Tableau / Looker / Fabric / Quicksight (chiffrés)
- **Métriques** opérationnelles : F1/AUC/RMSE (DS) · data quality DQ score (DE) · MTTR/lead time DORA (MLOps) · NSM/AARRR (BI)
- **Cas sectoriels variés** (banque CIB risk, retail churn, énergie maintenance prédictive, défense vision, télécom anti-fraude, hôtellerie pricing)

**Cotation** :
- ✓ : ≥3 livrables actionnables (code + diagramme + cas chiffré), exemples reproductibles, datasets/références publiques
- ⚠ : code partiel ou pseudo-code, exemples génériques mono-sectoriels
- ✗ : majoritairement conceptuel, aucun code, aucun diagramme

#### D3 — Profondeur (Data/Tech)

**Critères opérationnels** :
- **Sources académiques** : ICML / NeurIPS / KDD papers, ouvrages référence (Bishop, Murphy, Hastie, Goodfellow), Stanford CS229/CS231n
- **Tendances 2024-2026** : LLMs (Llama 3.x, Claude 3.x, GPT-4o), agentic AI, RAG patterns, vector DBs (Pinecone, Weaviate, pgvector), feature stores (Tecton, Feast), data contracts
- **Cas réels publics** : Netflix recommender, Uber Michelangelo, Airbnb feature store, Stripe ML platform, Spotify ML stack
- **Anti-patterns explicités** par sous-domaine (ex : "Train/test leakage", "Data dredging", "Model decay non monitoré", "Big ball of mud lakehouse")
- **Métriques modernes** : MLOps maturity Google 0/1/2, DORA 4 keys, DQ Score, observability data (Monte Carlo, Bigeye)

**Cotation** :
- ✓ : sources 2023+, frameworks officiels datés, anti-patterns explicités, exemples sectoriels variés, métriques modernes
- ⚠ : contenu solide mais sources implicites, exemples génériques
- ✗ : daté (TensorFlow 1.x, Spark 2.x), aucune source, anti-patterns absents

#### Référentiel de sources attendues (Data/Tech)

| Source | URL/Ref | Skills cibles |
|---|---|---|
| **CRISP-DM 1.0** | IBM SPSS 1999 (consortium) | analyse-exploratoire, modelisation-ml, rapport-data-science |
| **CRISP-ML(Q)** | Studer et al. (arxiv 2003.05155, 2020) | evaluation-modeles, ethique-ia-biais |
| **Hastie, Tibshirani, Friedman** | *Elements of Statistical Learning* (Springer 2009) | statistiques-tests, modelisation-ml |
| **Goodfellow, Bengio, Courville** | *Deep Learning* (MIT Press 2016) | deep-learning, nlp-classique |
| **Burkov A.** | *Machine Learning Engineering* (2020) | mlops_engineer/* |
| **Google MLOps Maturity** | cloud.google.com/architecture/mlops-continuous-delivery (2021) | cicd-ia, mlflow-tracking |
| **DORA Accelerate** | Forsgren, Humble, Kim (IT Revolution 2018) | cicd-ia, monitoring-llm |
| **Dehghani Z.** | *Data Mesh* (O'Reilly 2022) | gouvernance-data, cloud-data-platforms |
| **Kimball R.** | *The Data Warehouse Toolkit* (3rd ed., Wiley 2013) | data-warehouse, modelisation-dimensionnelle |
| **DAMA-DMBOK 2** | dama.org (2017) | gouvernance-data, gouvernance-bi |
| **Databricks Lakehouse** | Armbrust et al. (CIDR 2021) | cloud-data-platforms |
| **TOGAF 10** | The Open Group (2022) | togaf-adm, urbanisme-si |
| **ArchiMate 3.2** | The Open Group (2023) | archimate-modeling |
| **C4 Model** | Simon Brown (c4model.com) | architecture-bdat |
| **Conway's Law** | Mel Conway (1968) | gouvernance-architecturale |
| **ISO/IEC 5338:2023** | iso.org (AI system lifecycle) | mlops_engineer/*, ethique-ia-biais |
| **NIST AI RMF 1.0** | nist.gov (jan. 2023) | ethique-ia-biais, monitoring-llm |
| **Mitchell et al.** | *Model Cards* (FAT* 2019) | evaluation-modeles, rapport-data-science |
| **Gebru et al.** | *Datasheets for Datasets* (Comm. ACM 2021) | data-quality, gouvernance-data |
| **Codd E.F.** | OLAP "12 Rules" (1993) | bi_analyst/* |

---

---

### 3.4 — Groupe Dev/CMS ⏳ (à formaliser)

**Agents concernés (5)** : DEV-TYPESCRIPT-IA · DEV-DRUPAL-PHP · CMS-DIGITAL · PIM-EXPERT · DAM-EXPERT

#### Référentiels attendus (à valider)
- Hériter de la grille v2.7.1 (DEV core)
- + Spécifiques CMS : AEM 6.5+, Drupal 10, WordPress 6.x, Typo3 12
- + PIM : Akeneo 7, SAP Hybris, Stibo
- + DAM : Bynder, Cloudinary, Aprimo
- + Standards e-commerce : Adobe Commerce, Magento 2.4

**🔜 À compléter** : lors de l'audit DEV-TYPESCRIPT-IA.

---

### 3.5 — Groupe Transverse/Méta ⏳ (à formaliser)

**Agents concernés (8)** : ORCHESTRATEUR-WORKFLOW · PROMPT-ENGINEER · REDACTEUR-IA · UX-DESIGNER · FORMATEUR-IA · GROWTH-IA · RH-IA · VEILLE-STRATEGIQUE

**Sous-groupes possibles** :
- **UX/Contenu** : UX-DESIGNER, REDACTEUR-IA → critères design + WCAG + style guide
- **Pédagogie/Formation** : FORMATEUR-IA → critères Bloom, Kirkpatrick, andragogie
- **Engagement/Croissance** : GROWTH-IA, VEILLE-STRATEGIQUE → critères AARRR, signaux faibles
- **Méta-agents** : ORCHESTRATEUR-WORKFLOW, PROMPT-ENGINEER → critères orchestration, evals LLM
- **RH/People** : RH-IA → critères talent acquisition, people analytics

#### UX/Contenu — Référentiels attendus (à valider)
- WCAG 2.2 (W3C 2023)
- Nielsen 10 heuristics
- ISO 9241-210 (human-centered design)
- Design Tokens Community Group standards
- Figma + FigJam workflows

#### UX/Contenu — Actionabilité attendue
- Wireframes Figma (composants reusable)
- Personas testables (jobs-to-be-done)
- Plans de tests UX (5 utilisateurs, protocole)
- Checklists WCAG par niveau (A/AA/AAA)
- Style guide rédactionnel (ton, voix, vocabulaire)

**🔜 À compléter** : lors de l'audit UX-DESIGNER ou REDACTEUR-IA (premier du sous-groupe).

---

## 4. Méthodologie d'application (workflow audit)

```
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 1 — Cadrage du groupe (si premier agent du groupe)    │
│ → Vérifier/Compléter la déclinaison de grille pour ce groupe│
│ → Formaliser les critères opérationnels D1/D2/D3            │
│ → Lister les sources attendues                              │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 2 — Extraction factuelle (sous-agent Explore)         │
│ → Lecture exhaustive de tous les skills de l'agent          │
│ → Sortie factuelle structurée par skill (pas de cotation)   │
│ → Format : référentiels cités · livrables · sources ·       │
│   anti-patterns · frontières · signaux d'alerte             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 3 — Cotation expert (Claude principal)                │
│ → Appliquer la grille déclinée du groupe                    │
│ → Coter chaque skill ✓/⚠/✗ sur D1/D2/D3                     │
│ → Verdict P0-P3 par skill                                   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 4 — Rapport-type structuré                            │
│ → audits/audit-<agent>-<YYYY-MM-DD>.md                      │
│ → 10 sections : Synthèse / Méthode / Tableau / Findings     │
│   P1/P2/P3 / Transversaux / Plan d'action / Validation      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 5 — Validation Guy                                    │
│ → Verdicts validés / ajustés                                │
│ → Plan d'action arbitré (V1 cosmétique / V2 P1 / V3 P2)     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 6 — Corrections par vagues                            │
│ → V1 mécanique transverse (rapide, 30 min)                  │
│ → V2 P1 résiduels (3-4h)                                    │
│ → V3 enrichissements P2 (6-8h)                              │
│ → V4 cosmétique P3 (optionnel)                              │
│ → Commit + CHANGELOG par vague                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Patterns à propager (tous groupes)

Identifiés via l'audit PO-SAFE, applicables à tout le catalogue.

### 5.1 — Format d'en-tête skill standardisé

```markdown
# <Titre du skill>

> Certification : <certif1> · <certif2>
> Agent : AGENT-<NOM>.md  (ou Agents : ... · ... si plusieurs)

## Objectif
...
```

### 5.2 — Section `## Anti-patterns` recommandée

```markdown
## Anti-patterns
- ❌ <description courte>
- ❌ <description courte>
- ❌ <description courte>
```

### 5.3 — Section `## Sources` recommandée (fin de skill)

```markdown
## Sources
- <Source 1> — <URL ou référence bibliographique>
- <Source 2> — <URL ou référence bibliographique>
```

---

## 6. Versioning de cette grille

| Version | Date | Modification |
|---|---|---|
| **v2.7.1** | 2026-05-28 | Grille initiale (Conformité × Actionabilité × Profondeur) — calibrée DEV core |
| **v2.8.0** | 2026-05-28 | Squelette commun + déclinaison Agile/Produit validée (pilote PO-SAFE) |
| v2.8.1 | À venir | + Déclinaison Conseil/Direction (lors audit JURIDIQUE-IA) |
| v2.8.2 | À venir | + Déclinaison Data/Tech (lors audit DATA-SCIENTIST) |
| v2.8.3 | À venir | + Déclinaison Dev/CMS (lors audit DEV-TYPESCRIPT-IA) |
| v2.8.4 | À venir | + Déclinaison Transverse/Méta (lors audit UX-DESIGNER ou REDACTEUR-IA) |
| v2.9.0 | Cible | Toutes déclinaisons validées + utilisable par AGENT-AUDIT-METHODO-IA en autonomie |

---

## 7. Liens

- **Pilote PO-SAFE** : `audits/audit-po-safe-2026-05-28.md`
- **Audit DEV core v2.7.1** : `CHANGELOG.md` ## [2.7.1]
- **Agent contre-expertise** : `AGENT-AUDIT-METHODO-IA.md` (consommera cette grille en autonomie une fois v2.9.0)
- **Skills concernés (méta)** : `skills/critique_conformite/` (audit-conformite-methodo, challenge-raisonnement, gate-validation-livrable)
