# Changelog — Claude Agents Library

> Journal de suivi des modifications du catalogue.
> Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versionnement [SemVer](https://semver.org/lang/fr/).

---

## [2.8.0] — 2026-05-28 — Audit qualité agents Agile/Produit (3/9) + grille v2.8 + corrections architecturales
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Démarrage du chantier d'audit qualité étendu (post-v2.7.1 qui couvrait les 5 agents DEV core). Cette release adresse les **3 premiers agents du groupe Agile/Produit** (PO-SAFE, PO-SCRUM, PRODUCT-MANAGER-SAFE) selon une nouvelle grille déclinée v2.8 calibrée pour les agents non-DEV. Méthode rodée : extraction factuelle déléguée à sous-agent Explore + cotation expert Claude principal. **Bug architectural critique détecté et corrigé** : 3 skills PM-SAFE référençaient erronément `Agent: AGENT-PO-SCRUM.md` (confusion scope Programme/équipe).

### ✨ Ajouté — Livrable méthodologique
- `audits/audit-grilles-v2.8.md` — **Grille d'audit qualité v2.8** :
  - Squelette commun (3 dimensions universelles × 4 niveaux ✓/⚠/✗/N/A · règles verdict P0/P1/P2/P3)
  - **Déclinaison Agile/Produit validée** (référentiels Scrum Guide 2020, SAFe 6.0, WSJF POPM 6, PMBOK 7, BABOK v3, PROSCI, ISTQB)
  - Emplacements pour 4 déclinaisons futures (Conseil/Direction, Data/Tech, Dev/CMS, Transverse/Méta)
  - Workflow d'application en 6 étapes (Cadrage → Extraction → Cotation → Rapport → Validation → Corrections par vagues)
  - Référentiel de sources attendues par référentiel (13 entrées)

### ✨ Ajouté — 3 rapports d'audit complets
- `audits/audit-po-safe-2026-05-28.md` (**Pilote**, 25 skills) — 0 ✓ / 7 P3 / 12 P2 / **6 P1**
- `audits/audit-po-scrum-2026-05-28.md` (30 skills) — **1 ✓** ⭐ (story-mapping) / 5 P3 / 16 P2 / **8 P1**
- `audits/audit-product-manager-safe-2026-05-28.md` (10 skills + 2 SAFe partagés) — 0 ✓ / 1 P3 / 7 P2 / **2 P1**

### 🐛 Corrigé — Bug architectural PM-SAFE (3 skills)
Header `> Agent :` erroné dans 3 skills `skills/product_manager_safe/` :
- `enterprise-product-vision.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md` (+ ajout `SAFe POPM 6 · SAFe SPC` dans Certification)
- `product-operating-model.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md` (+ ajout `SAFe POPM 6 · SAFe SPC`)
- `scaling-product-ownership.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md`

**Impact** : Restaure la cohérence Programme (PM) vs équipe (PO Scrum) sur 3 skills stratégiques.

### 🔧 Modifié — V1 cosmétique transverse (17 skills, ajout `> Certification :` + `> Agent :`)

**PO-SAFE (7 skills `skills/safe/`)** :
- art.md → SAFe POPM 6 · SAFe Agilist · Agents PO-SAFE/PM-SAFE
- dependencies.md → SAFe POPM 6 · Agent PO-SAFE
- features.md → SAFe POPM 6 · Agents PO-SAFE/PM-SAFE
- inspect-adapt.md → SAFe POPM 6 · SAFe Agilist · Agent PO-SAFE
- okr.md → SAFe POPM 6 · Agents PO-SAFE/PM-SAFE
- pi-planning.md → SAFe POPM 6 · SAFe Agilist · Agent PO-SAFE
- roadmap.md → SAFe POPM 6 · SAFe LPM · Agents PO-SAFE/PM-SAFE

**PO-SCRUM (10 skills `skills/scrum/`)** :
- compte-rendu.md → PSPO I
- confluence-page.md → PSPO I
- email-stakeholder.md → PSPO I · PSPO II
- gestion-risques.md → PSPO II · ICAgile ICP-APO
- po-acceptance-tests.md → PSPO I · ISTQB CTFL
- po-user-story.md → PSPO I · PSPO II
- recette-fonctionnelle.md → PSPO I · ISTQB CTFL
- reporting-kpi.md → PSPO II · ICAgile ICP-APO
- spec-fonctionnelle.md → PSPO I · IIBA BABOK v3
- ticket-incident.md → PSPO I

### 📊 Statistiques après v2.8.0

| Métrique | Avant V1 | Après V1 |
|---|---|---|
| Agents audités (Agile/Produit) | 0/9 | **3/9 (33%)** |
| Skills audités | 0 | **65/180 Agile/Produit (36%)** |
| Skills avec verdict ✓ pur | — | 1 (story-mapping ⭐) |
| Skills avec verdict P1 (Agile/Produit) | — | 16 → **8 après V1** (régression 8 P1 → P2) |
| Skills sans certification déclarée | — | 18 → **0 après V1** ✓ |
| Skills product_manager_safe avec Agent header correct | 7/10 | **10/10** ✓ |

### 🔜 RAF v2.8.x — Plan d'action 4 vagues (par agent)

**V2 — P1 résiduels (8 skills à enrichir en profondeur)** :
- PO-SAFE : capabilities, lean-agile-mindset (template manquant)
- PO-SCRUM : gestion-risques, **po-ai-product** (différenciateur stratégique IA), product-vision, ux-sprint
- PM-SAFE : market-analysis (zéro source externe)

**V3 — Enrichissements P2 (35 skills)** — propagation sources externes + anti-patterns + diversification sectorielle (sortir du seul exemple RH/IA dans PM-SAFE)

**V4 — Cosmétique P3** (13 skills) — sections `## Sources` à standardiser

### 🔜 RAF v2.8.x — Audits restants groupe Agile/Produit (6/9 agents)
SCRUM-MASTER (20 skills) · RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER

### 📌 Pattern méthode validé
- Délégation extraction Explore + cotation Claude expert : **~30 min par agent**
- Grille v2.8 Agile/Produit **stable sur 3 itérations** (aucun ajustement après PO-SAFE pilote)
- Limit WIP : V1 cosmétique systématique après chaque audit avant d'enchaîner

---

## [2.7.9] — 2026-05-28 — README index 14 dossiers restants (37/37 ✓ 100%)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Finalisation du chantier README index : ajout des **14 README index restants** pour atteindre **100% de couverture** (37/37 dossiers de skills). Tous les dossiers de skills du catalogue disposent désormais d'un README structuré avec : index numéroté, arbre de décision "Tu veux...", tableau des frontières avec les autres agents, liste des référentiels et standards utilisés.

### ✨ Ajouté — 14 README index supplémentaires

**Direction & Management (3)** :
- `skills/cdo_directeur_ia/README.md` — 8 skills (stratégie data-IA, gouvernance DAMA, CoE IA, Data Mesh, OKRs)
- `skills/change_manager/README.md` — 7 skills (PROSCI ADKAR, analyse impact, plan communication, résistances, KPIs)
- `skills/release_train_engineer/README.md` — 7 skills (PI Planning, ART, impediments, I&A, Flow Metrics, Scrum of Scrums)

**Data & Analyse (3)** :
- `skills/data_engineer/README.md` — 11 skills (pipelines, Spark, Kafka, dbt, Airflow, Lakehouse, gouvernance)
- `skills/data_scientist/README.md` — 13 skills (EDA, feature engineering, ML, DL, time series, MLflow, éthique IA)
- `skills/financial_analyst/README.md` — 6 skills (business case IA, ROI, TCO, budget, scoring investissements)

**Dev & Production de contenu (3)** :
- `skills/dev_drupal/README.md` — 10 skills (modules custom Drupal 10, Commerce 2.x, Twig, CMI, PHPUnit/Behat)
- `skills/redacteur_ia/README.md` — 16 skills (rapports, synthèses, copywriting, SEO, UX writing, documentation)
- `skills/ux_design/README.md` — 20 skills (research, personas, wireframing Figma, Design System, tests, WCAG)

**Croissance & Apprentissage (2)** :
- `skills/formateur_ia/README.md` — 11 skills (TNA, Bloom, Kirkpatrick, prompt engineering formation, data literacy)
- `skills/growth_ia/README.md` — 8 skills (acquisition, A/B testing, product analytics, LTV/CAC, personnalisation IA)

**Orchestration & Méthodes (3)** :
- `skills/orchestrateur_workflow/README.md` — 15 skills (BPMN, agent routing, MCP, LangGraph/CrewAI, monitoring)
- `skills/critique_conformite/README.md` — 3 skills (audit méthode SAFe/Scrum/ISTQB/PMI, challenge raisonnement, gates DoD)
- `skills/veille_strategique/README.md` — 6 skills (veille IA/LLM, concurrentielle, signaux faibles, synthèses)

### 📊 Statistiques finales après v2.7.9
| Métrique | v2.7.7 | v2.7.9 |
|---|---|---|
| README dossiers skills | 23/37 (62%) | **37/37 (100%)** ✓ |
| Format unifié sur l'ensemble du catalogue | Partiel | **Complet** ✓ |

### 🏆 Récapitulatif du chantier README (v2.7.3 → v2.7.9)
| Vague | Dossiers indexés | Cumul |
|---|---|---|
| v2.7.3 | 1 (securite_ia) | 1/37 |
| v2.7.4 | 4 (DEV core) | 5/37 |
| v2.7.5 | 10 (Agile, MOA, CMS, Data, EA) | 15/37 |
| v2.7.7 | 8 (pilotage, conseil, juridique, RH, TS) | 23/37 |
| v2.7.9 | 14 (restants) | **37/37 ✓** |

### 🔜 RAF v2.7.10+ (cosmétique fine, non bloquant)
- Uniformisation tag `> Certifications :` (2 formats coexistants — virgule vs middle dot `·`)
- Sections "Hors périmètre" universelles à la fin des 50 skills DEV

---

## [2.7.8] — 2026-05-28 — Correctif traçabilité modèle (v2.7.2 → v2.7.5)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Correction rétroactive de la mention du modèle Claude utilisé sur les entrées v2.7.2 à v2.7.5. Initialement, ces versions étaient consignées comme produites avec `Claude Sonnet 4.6` suite à une commande `/model claude-sonnet-4-6` saisie en cours de session. Vérification ex-post : le modèle effectif resté actif était **Claude Opus 4.7** sur toute la session post-v2.7.1. Correction appliquée.

### 🔧 Modifié
- Mise à jour de la ligne `> Modèle :` dans les 4 entrées du CHANGELOG : v2.7.2, v2.7.3, v2.7.4, v2.7.5 — passage de `Claude Sonnet 4.6` à `Claude Opus 4.7`
- Mise à jour de la table récapitulative "Traçabilité rétroactive" dans l'entrée v2.7.6 — passage des lignes v2.7.2 à v2.7.5 en `Claude Opus 4.7`
- Ajout d'une note de correction dans v2.7.6 pour traçabilité de l'erreur initiale

### 📋 État final des modèles de la session 2026-05-28
| Version | Modèle |
|---|---|
| v2.7.0 | Claude Sonnet 4.6 |
| v2.7.1 à v2.7.8 | **Claude Opus 4.7** (7 releases consécutives) |

---

## [2.7.7] — 2026-05-28 — README index 8 dossiers de skills supplémentaires (23/37)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Poursuite du chantier README index amorcé en v2.7.3 et étendu en v2.7.4 / v2.7.5. Cette release ajoute **8 README index** sur les dossiers à utilisation transversale en mission (pilotage projet, conseil, produit, prompting, juridique, scrum master, RH, frontend TS). Bilan : **23/37 dossiers** indexés (62%).

### ✨ Ajouté — 8 README index supplémentaires
- `skills/chef_projet_ia/README.md` — 8 skills (cadrage, planification hybride, risques, EVM, portefeuille, CODIR, stakeholders, post-mortem)
- `skills/consultant_ia/README.md` — 9 skills (avant-vente, diagnostic, feuille de route, benchmark, exécutif, ROI, PoC, transformation)
- `skills/product_manager_safe/README.md` — 12 skills (Vision/Stratégie, Customer-Centricity, Économie, Scaling, Épics cross-référencés)
- `skills/prompt_engineer/README.md` — 8 skills (system prompt, few-shot, CoT, RAG, multimodal, evals, optimisation, observabilité)
- `skills/juridique_ia/README.md` — 10 skills (AI Act, RGPD, DPIA, contrats, IP, gouvernance éthique, veille, politique, NIS2, audit)
- `skills/scrum_master/README.md` — 20 skills (cérémonies, coaching, pilotage, scaling SAFe SSM, transformation Agile)
- `skills/rh_ia/README.md` — 11 skills (recrutement IT/IA, anti-fraude CV/deepfake, GEPP, people analytics, transformation RH)
- `skills/dev_typescript_ia/README.md` — 9 skills (TypeScript avancé, MCP server TS, Vercel AI SDK, Next.js, chat UI streaming, edge functions)

### 📊 Statistiques après v2.7.7
| Métrique | v2.7.6 | v2.7.7 |
|---|---|---|
| README dossiers skills | 15/37 (40%) | **23/37 (62%)** |
| Dossiers à utilisation cliente forte/transverse | 15/15 ✓ | **23/23** ✓ |

### 🔜 RAF v2.7.8+
- 14 dossiers restants (faible utilisation client ou très spécialisés) : `cdo_directeur_ia`, `change_manager`, `critique_conformite`, `data_engineer`, `data_scientist`, `dev_drupal`, `financial_analyst`, `formateur_ia`, `growth_ia`, `orchestrateur_workflow`, `redacteur_ia`, `release_train_engineer`, `ux_design`, `veille_strategique`
- Uniformisation tag `> Certifications :` (~80 skills, 2 formats coexistants)
- Sections "Hors périmètre" universelles (~50 skills DEV)

---

## [2.7.6] — 2026-05-28 — Convention de traçabilité modèle + cosmétique skills DEV
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Ajout d'une convention de traçabilité : **chaque entrée CHANGELOG et chaque tag annoté doit désormais indiquer le modèle Claude utilisé** (Sonnet 4.6 / Opus 4.7 / Haiku 4.5). Mise à jour rétroactive des 6 entrées de la session v2.7.0–v2.7.5. Préférence sauvegardée dans la mémoire conversationnelle (`feedback_changelog_modele.md`).

### ✨ Ajouté — Convention de traçabilité modèle
- Format CHANGELOG : ligne `> Modèle : Claude <version>` sous le titre de chaque entrée
- Format tag annoté : mention du modèle en fin de message, ex : `v2.7.6 — Description (Opus 4.7)`
- Mise à jour rétroactive des entrées v2.7.0 à v2.7.5 (cf. ci-dessous)

### 🔧 Modifié — Traçabilité rétroactive des entrées 2026-05-28
| Version | Modèle utilisé |
|---|---|
| v2.7.0 | Claude Sonnet 4.6 (modèle par défaut au démarrage de la session) |
| v2.7.1 | **Claude Opus 4.7** (audit qualité multi-agents en parallèle) |
| v2.7.2 | Claude Opus 4.7 |
| v2.7.3 | Claude Opus 4.7 |
| v2.7.4 | Claude Opus 4.7 |
| v2.7.5 | Claude Opus 4.7 |

> **Note de correction (appliquée en v2.7.8)** : les entrées v2.7.2 à v2.7.5 indiquaient initialement `Sonnet 4.6` (consigné après une commande `/model claude-sonnet-4-6` saisie en cours de session). En réalité, le modèle effectif resté actif était Claude Opus 4.7 sur toute la session post-v2.7.1 ; correction rétroactive appliquée en v2.7.8.

### 🔧 Modifié — Datage des références (3 occurrences)
- `skills/ai_architect/README.md` : `OWASP LLM Top 10` → `OWASP LLM Top 10 (2025)`, `NIST AI RMF` → `NIST AI RMF 1.0 (2023)`
- `skills/securite_ia/threat-modeling.md` (ligne 114) : ajout `v2025` et `1.0`
- `skills/juridique_ia/veille-reglementaire.md` : `NIST AI RMF` → `NIST AI RMF 1.0 (nist.gov, 2023)`

### 🔍 Audit du datage des références
Audit complet via Grep des références aux standards (NIST AI RMF, OWASP LLM Top 10, MITRE ATT&CK, Scrum Guide, ISO/IEC 42001, EU AI Act) : **95% des occurrences déjà correctement datées**. Seules 3 corrections nécessaires (cf. ci-dessus). Les autres références sont déjà au format conforme depuis les v2.7.x précédentes.

### 🔜 RAF v2.7.7+ (cosmétique restante)
- **Uniformisation tag `> Certifications :`** : 2 formats coexistent dans ~80 skills (virgule vs middle dot `·`). Format cible recommandé = middle dot. Vague séparée nécessaire (audit puis batch de modifications).
- **Sections "Hors périmètre" universelles** : à ajouter à la fin des 50 skills DEV
- **README index dossiers restants** : 22 dossiers (faible utilisation client)

---

## [2.7.5] — 2026-05-28 — README index 10 dossiers de skills supplémentaires
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Poursuite de la généralisation du pattern README index initié en v2.7.3 (`securite_ia/`) et étendu aux 4 dossiers DEV core en v2.7.4. Cette release ajoute **10 README index** sur les dossiers les plus utilisés en mission, en priorisant les domaines de Guy (Agile, MOA, CMS, PIM, DAM, BI, EA). Bilan : **15/37 dossiers** indexés (40%) — les dossiers à plus forte utilisation client sont couverts.

### ✨ Ajouté — 10 README index supplémentaires

**Agile & Produit (3)** :
- `skills/scrum/README.md` — 30 skills indexés (Vision/Discovery, Backlog, Métriques, Pratiques avancées, Communication), arbre de décision, frontières (PO-SAFE, SCRUM-MASTER, PRODUCT-MANAGER-SAFE, BUSINESS-ANALYST, QA-AGILE)
- `skills/safe/README.md` — 25 skills indexés (Team, Program/ART, Large Solution, Portfolio, Transversal), avec rappel des règles de conformité critiques (WSJF relatif, MoSCoW = US only, Sprint Goal unique, etc.)
- `skills/qa_testing/README.md` — 23 skills (dossier partagé QA-AGILE + QA-CYCLEV), groupés par méthodologie (10 Agile / 12 Cycle en V / 1 Transversal)

**Business Analysis (1)** :
- `skills/business_analyst/README.md` — 10 skills MOA (élicitation, BPMN, spécifications, recette MOA, cadrage, exigences, change)

**CMS / Data Product (3)** :
- `skills/cms_digital/README.md` — 12 skills (architecture, AEM, Drupal, headless, migration, gouvernance, performance, accessibilité RGAA/WCAG)
- `skills/pim_expert/README.md` — 12 skills (modélisation, enrichissement, gouvernance, syndication, localisation, migration, IA)
- `skills/dam_expert/README.md` — 12 skills (taxonomie, workflows, droits, distribution, transformations, brand portal, IA visuelle)

**Data & Architecture (3)** :
- `skills/bi_analyst/README.md` — 12 skills (modélisation dimensionnelle, Power BI/Tableau/Looker, SQL, KPIs, CODIR, Fabric, BI augmentée IA)
- `skills/solutions_architect/README.md` — 8 skills (TOGAF ADM, ArchiMate, urbanisme, BDAT, integration patterns, cloud migration, gouvernance, roadmap)
- `skills/mlops_engineer/README.md` — 10 skills (Docker IA, K8s GPU, CI/CD ML, MLflow, monitoring LLM, model serving vLLM/TGI, Terraform IA)

### 📊 Statistiques après v2.7.5
| Métrique | v2.7.4 | v2.7.5 |
|---|---|---|
| README dossiers skills | 5/37 (14%) | **15/37 (40%)** |
| Dossiers core couverts | 5/5 ✓ | 5/5 ✓ |
| Dossiers à forte utilisation client couverts | 5/15 | **15/15** ✓ |

### 🔜 RAF v2.7.6+ (cosmétique long terme, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025)
- Uniformisation du tag `> Certifications :` (format hétérogène)
- Sections "Hors périmètre" systématiques sur les 50 skills
- README index pour les 22 dossiers restants (faible priorité — agents moins sollicités)

---

## [2.7.4] — 2026-05-28 — README index des 4 dossiers de skills DEV core
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Suite à la création du premier README index (`skills/securite_ia/`) en v2.7.3, généralisation du pattern aux 4 dossiers de skills DEV core. Chaque README suit le même format : index numéroté · arbre de décision "Tu veux..." · tableau des frontières avec les autres agents · liste des référentiels et standards. Les 32 dossiers de skills restants seront traités en v2.7.5+ (cosmétique long terme).

### ✨ Ajouté — 4 README index core
- `skills/ai_architect/README.md` — 8 skills indexés, arbre de décision (démarrer projet / concevoir agent / RAG / mesurer qualité / sécuriser), frontières avec DEV-PYTHON, DEV-TS, MLOPS, SECURITE-IA, PO, SOLUTIONS-ARCHITECT
- `skills/dev_python_ia/README.md` — 9 skills indexés, arbre de décision (coder propre / intégrer LLM / RAG / agent / entraîner), frontières avec AI-ARCHITECT, DEV-TS, MLOPS, PROMPT-ENGINEER
- `skills/tech_lead/README.md` — 12 skills indexés, arbre de décision (qualité code / design technique / industrialisation / sécurité culture / onboarding), avec rappel explicite des 3 frontières TECH-LEAD ↔ SECURITE-IA / DEVOPS-CLOUD / QA-AGILE (cf. v2.7.2)
- `skills/devops_cloud/README.md` — 11 skills indexés, arbre de décision (CI/CD / déploiement / cloud / observabilité / incident / sécurité), frontières avec TECH-LEAD, MLOPS, DEV-PYTHON, AI-ARCHITECT, SECURITE-IA

### 📊 Statistiques après v2.7.4
| Métrique | v2.7.3 | v2.7.4 |
|---|---|---|
| README dossiers skills | 1/37 | **5/37** |
| Dossiers core avec README | 1/5 | **5/5** ✓ |

### 🔜 RAF v2.7.5+ (cosmétique long terme, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025)
- Uniformisation du tag `> Certifications :` (format hétérogène)
- Sections "Hors périmètre" systématiques sur les 50 skills
- README index pour les 32 dossiers de skills restants (non-core)

---

## [2.7.3] — 2026-05-28 — Finalisation P3 audit qualité skills DEV (98% conformité)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Traitement des 3 skills P3 restants identifiés lors de l'audit qualité v2.7.1, et création du premier README index de dossier de skills (`skills/securite_ia/`). Les 4 dernières tâches cosmétiques (datage références sur 50 skills, uniformisation tag `> Certifications :`, sections "Hors périmètre" universelles, README pour les 36 autres dossiers de skills) sont reportées à v2.7.4.

### ✨ Enrichi — P3 skills restants (3 fichiers)
- `skills/securite_ia/threat-modeling.md` — méthodologie **PASTA détaillée en 7 phases** (inputs/activités/livrables par phase) + **3 kill chains MITRE ATT&CK complètes** (Indirect Prompt Injection T-LLM02, Training Data Poisoning, Model Extraction T-LLM06), chacune avec 7 étapes opérationnelles incluant tactiques MITRE, outils, signaux de détection et contre-mesures
- `skills/dev_python_ia/python-avance-ia.md` — ajout de 3 fichiers d'exemples testables prêts à copier-coller : `async_llm_retry.py` (Claude async + tenacity + structured logging), `test_async_llm_retry.py` (3 tests pytest avec mocks Anthropic), `rag_query_validation.py` (validation Pydantic stricte avec `field_validator` anti-injection)
- `skills/securite_ia/owasp-llm-top10.md` — ajout grille d'évaluation scoring /10 (4 dimensions × 4 niveaux), matrice CVSS 3.1 avec exemple détaillé LLM01 + vecteur officiel FIRST, template complet de rapport d'audit (synthèse exécutive, détail par vulnérabilité, plan de remédiation priorisé P0/P1/P2)

### ✨ Ajouté — Premier README index de dossier
- `skills/securite_ia/README.md` — index des 10 skills + arbre de décision (auditer / construire / industrialiser / détecter & répondre) + tableau des frontières avec autres agents + liste des référentiels et standards (OWASP, NIST, ISO, MITRE)

### 📊 Statistiques après v2.7.3
| Métrique | Avant audit | v2.7.1 | v2.7.2 | v2.7.3 |
|---|---|---|---|---|
| Skills DEV conformes (✓) | 33/50 (66%) | 46/50 (92%) | 46/50 (92%) | **49/50 (98%)** |
| Doublons inter-agents arbitrés | 0/3 | 0/3 | **3/3** | 3/3 |
| README dossiers skills | 0/37 | 0/37 | 0/37 | **1/37** |

### 🔜 RAF v2.7.4 (cosmétique restante, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025, etc.)
- Uniformisation du tag `> Certifications :` en tête de chaque skill (format hétérogène détecté)
- Sections "Hors périmètre" systématiques sur les 50 skills (renvoi vers agents spécialistes)
- README index pour les 36 autres dossiers de skills (modèle `securite_ia/README.md`)

---

## [2.7.2] — 2026-05-28 — Frontières inter-agents : arbitrage des 3 doublons audit v2.7.1
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Suite à l'audit v2.7.1, 3 doublons fonctionnels avaient été détectés entre AGENT-TECH-LEAD et 3 agents spécialistes (SECURITE-IA, DEVOPS-CLOUD, QA-AGILE). Cette release documente la frontière de manière **symétrique** (côté TECH-LEAD ET côté spécialiste), sur le modèle de la note QA-AGILE ↔ QA-CYCLEV (v2.3.6).

### 🔧 Modifié — Frontières inter-agents documentées

**Principe directeur** : TECH-LEAD pilote la **vision et la culture côté équipe dev** ; l'agent spécialiste **exécute en profondeur**.

- `AGENT-TECH-LEAD.md` — Section "❌ Hors périmètre" enrichie (3 nouvelles lignes) + note `> ℹ️ **Frontières inter-agents**` au-dessus de la table des skills, listant les 3 doublons et leur arbitrage
- `AGENT-SECURITE-IA.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `securite-applicative.md` pour la culture sécurité côté équipe dev (vs. audit/pentest professionnel côté SECURITE-IA)
- `AGENT-DEVOPS-CLOUD.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `cicd-pipeline.md` pour la stratégie CI/CD côté équipe (vs. config plateforme côté DEVOPS)
- `AGENT-QA-AGILE.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `strategie-tests.md` pour la vision pyramide de tests (vs. exécution sprint côté QA)

### 📊 Statistiques après v2.7.2
| Métrique | Avant | Après |
|---|---|---|
| Doublons inter-agents non arbitrés | 3 | **0** |
| Agents avec note de frontière explicite | 2 (QA-AGILE, QA-CYCLEV) | **6** (+TECH-LEAD, SECURITE-IA, DEVOPS-CLOUD, QA-AGILE) |

### 🔜 RAF pour atteindre 100% (v2.7.3)
- Skills P3 restants (3 fichiers) : `threat-modeling.md` (PASTA + kill chains MITRE), `python-avance-ia.md` (exemples testables), `owasp-llm-top10.md` (template audit + CVSS)
- Cosmétique (50 skills) : datage références 2024-2026, uniformisation tag `> Certifications :`, README dossier `securite_ia/`

---

## [2.7.1] — 2026-05-28 — Audit qualité skills DEV (5 agents core) + corrections P1/P2
> Modèle : Claude Opus 4.7 (audit multi-agents en parallèle)

### 🎯 Contexte
Audit qualité méthodologique appliqué aux 50 skills des 5 agents techniques core (DEV-PYTHON-IA, AI-ARCHITECT, TECH-LEAD, DEVOPS-CLOUD, SECURITE-IA). Audit conduit par 5 sous-agents en parallèle (Opus 4.7) avec grille standardisée : conformité aux certifications revendiquées · actionabilité (livrables concrets, format prêt-à-copier) · profondeur (sources/références récentes 2024-2026). Bilan : 33/50 conformes (66%), 17/50 à corriger, 0/50 à refondre. Pas d'agent à risque, mais 1/3 des skills sous-investis. Vague de corrections P1 (3 bugs bloquants) + P2 (10 enrichissements). Skills restants (P3) reportés à une vague ultérieure.

### 🐛 Corrigé — P1 bugs bloquants
- `skills/dev_python_ia/pipeline-rag.md` — import LangChain v0.2+ cassé (`langchain.text_splitter` → `langchain_text_splitters`), ajout Voyage AI embeddings (partenaire Anthropic), enrichissement section RAGAs (4 métriques + dataset complet + seuils production)
- `skills/tech_lead/ia-workflows-dev.md` — commandes `claude review` inventées remplacées par les vrais skills Claude Code (`/code-review`, `/code-review --fix`, `/verify`, `/security-review`, `/simplify`, `/init`)
- `AGENT-DEVOPS-CLOUD.md` — ajout 3 certifications ML manquantes (AWS MLA-C01, GCP ML Engineer, Azure AI-102) pour cohérence avec les skills cloud aws/gcp/azure-architecture
- `skills/dev_python_ia/agents-python.md` — fix nom modèle obsolète `claude-opus-4-5` → `claude-opus-4-7`

### ✨ Enrichi — P2 contenu et actionabilité

**AI-ARCHITECT (5 skills)** :
- `evaluation-llm.md` — benchmarks 2025+ (GPQA, IFEval, MMLU-Pro, SWE-bench Verified, τ-bench, LMArena), outils 2026 (Braintrust, Inspect AI UK AISI), template golden dataset YAML, format rapport mensuel
- `design-patterns-agents.md` — diagramme Mermaid Multi-Agent Supervisor + code LangGraph 0.2+ complet (StateGraph + Command routing + structured output)
- `protocoles-mcp-a2a.md` — MCP server TypeScript complet (tools + resources + stdio transport) + commande create-server + config Claude Desktop
- `multi-agent-design.md` — exemple StateGraph LangGraph avec checkpointing SQLite et `interrupt_before` human-in-the-loop
- `architecture-rag.md` — diagramme Mermaid pipeline (indexation + runtime) + code chunking récursif avec métadonnées propagées

**DEV-PYTHON-IA (2 skills)** :
- `agents-python.md` — pattern ReAct **déplié** (StateGraph manuel + ToolNode + boucle agent↔tools + checkpointing SQLite), démo multi-tour avec thread_id
- `pytorch-deeplearning.md` — Mini-Transformer complet (PositionalEncoding + Encoder + classification head) + Dataset/DataLoader + boucle train/val avec accuracy

**DEVOPS-CLOUD (2 skills)** :
- `observabilite-sre.md` — règles Prometheus spécifiques LLM (LLMCostBudgetBurn, AgentLoopRunaway, HallucinationRateHigh, ContextWindowSaturation) + instrumentation OTel Python pour coûts tokens
- `incident-response-llm.md` — toolbox d'investigation concrète (RAGAs, DeepEval, LangSmith, Helicone, Langfuse, Anthropic Console)

**SECURITE-IA (1 skill)** :
- `incident-response.md` — passage de 3 à 6 runbooks complets (Prompt Injection, Data Poisoning, Model Theft, Data Exfiltration, DoS/Token Burn, Auth Bypass) + template RCA méthode 5 Whys + tableau de suivi avec SLA P0-P3

### 📊 Statistiques après v2.7.1
| Métrique | Avant audit | Après corrections |
|---|---|---|
| Skills DEV conformes (✓) | 33/50 (66%) | 46/50 (92%) |
| Skills DEV à corriger (⚠) | 17/50 | 4/50 (P3, à traiter ultérieurement) |
| Skills DEV à refondre (✗) | 0/50 | 0/50 |
| Certifications ML alignées avec contenu | 0/3 | 3/3 (DEVOPS-CLOUD) |
| Bugs bloquants identifiés | 3 | 0 |

### 🔜 Reste à arbitrer (P3)
- `skills/securite_ia/threat-modeling.md` — PASTA détaillé + kill chains MITRE complets
- `skills/dev_python_ia/python-avance-ia.md` — création d'exemples testables
- `skills/securite_ia/owasp-llm-top10.md` — template rapport d'audit + matrice CVSS
- 3 doublons à arbitrer entre agents (securite-applicative ↔ SECURITE-IA, cicd-pipeline ↔ DEVOPS-CLOUD, strategie-tests ↔ QA-AGILE)

---

## [2.7.0] — 2026-05-28 — Nouvel agent AGENT-AUDIT-METHODO-IA + 3 skills critique_conformite
> Modèle : Claude Sonnet 4.6

### 🎯 Contexte
Ajout d'un agent de contre-expertise méthodologique indépendant, distinct des agents QA existants (AGENT-QA-AGILE et AGENT-QA-CYCLEV qui couvrent tests et code). AGENT-AUDIT-METHODO-IA joue le rôle de second avis adversarial sur les livrables produits par les autres agents IA : audit de conformité méthode (SAFe/Scrum/ISTQB/PMI/ISO 9001), challenge du raisonnement (biais cognitifs, devil's advocate, red-team) et gate de validation avant promotion. Nom initialement CONTRE-EXPERTISE-IA, renommé AUDIT-METHODO-IA pour refléter exactement le périmètre fonctionnel certifiant — conformément à la convention catalogue fonction + domaine.

### ✨ Ajouté — AGENT-AUDIT-METHODO-IA.md
Auditeur Méthodo IA — contre-expertise indépendante Agile/SAFe/ISTQB/PMI/ISO 9001/CMMI.
- **16 certifications** : SAFe 6 SA/POPM/SSM/SASM/RTE · PSM I/II/III · PSPO I/II · ISTQB CTFL/CTFL-AT/CTAL-TM/CTAL-TA · PMP · PMI-ACP · ISO 9001:2015 Lead Auditor (IRCA/CQI) · CMMI Associate · 3× Anthropic 2026
- **3 skills** dans `skills/critique_conformite/` :
  - `audit-conformite-methodo.md` — checklists Scrum Guide 2020, SAFe 6, ISTQB CTFL/CTAL, PMBOK 7
  - `challenge-raisonnement.md` — 8 biais cognitifs, devil's advocate 4 étapes, red-team 5 vecteurs
  - `gate-validation-livrable.md` — 4 gates DoD (Story / Feature / PI-Release / Livrable IA), règle anti-théâtre

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 37 → **38 agents**, 36 → **37 dossiers skills**
- `CLAUDE.md` — Compteurs 37/36 → **38/37**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue 37 → **38 agents**

### 📊 Statistiques après v2.7.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 37 | **38** |
| Dossiers de skills | 36 | **37** |
| Skills nouveaux | — | **+3** |
| Fichiers créés/modifiés | — | 7 (1 agent + 3 skills + 3 mises à jour) |

---

## [2.6.0] — 2026-05-27 — Gouvernance workflows + conformité méthode WSJF officielle

### 🎯 Contexte
Mise en conformité de la priorisation SAFe sur l'ensemble du catalogue (méthode WSJF officielle POPM 6) et structuration de la gouvernance des workflows. Déclenché par un audit méthodologique : MoSCoW appliqué à tort aux Epics/Features (réservé aux User Stories), et WSJF coté en absolu (échelle 1-20) au lieu de la cotation relative officielle (plus petit = 1 par colonne).

### ✨ Ajouté — Gouvernance des workflows
- `workflows/briefs/` — dossier des briefs de lancement (inputs immuables) + README
- `workflows/outputs/` — dossier des runs bruts tracés + README + template
- Pipeline documenté : `briefs → [run] → outputs → [curation] → use_cases`
- `workflows/use_cases/WF-002-uc01-assurance-pi01.md` — use case Delivery SAFe PI-01 (continuité de WF-001 UC-01), 6 agents orchestrés, conforme SAFe/Scrum/ISTQB/PMI

### 🐛 Corrigé — Conformité méthode WSJF (POPM 6)
- `skills/safe/wsjf.md` (source de vérité) — règles officielles ajoutées : cotation relative, plus petit = 1 par colonne, colonnes indépendantes, anti-ex-aequo + exemple conforme
- Propagation sur ~11 fichiers : `economic-framework`, `economic-framework-pm` (échelle 1-10 → Fibonacci), `investment-scoring`, `lean-business-case` (CoD 4 → 3 composantes, RR/OE combiné), `gouvernance-portefeuille`, `few-shot-learning`, `chain-of-thought`, `epic-to-feature-splitting`, `mcp-orchestration`, WF-001 UC-01
- MoSCoW recentré sur les **User Stories** ; **WSJF** pour Epics et Features

### 🔧 Modifié — Conformité Scrum
- `workflows/WF-002-delivery-safe.md` — output STEP-04 reformulé : auto-organisation des Developers (le SM facilite, n'assigne pas — Scrum Guide 2020), Sprint Goal unique par équipe

### 📊 Statistiques après v2.6.0
| Métrique | Avant | Après |
|---|---|---|
| Use cases workflows | 1 | **2** |
| Dossiers workflows | use_cases | + **briefs/**, **outputs/** |
| Fichiers mis en conformité WSJF | — | **~11** |

---

## [2.5.1] — 2026-05-26 — Sécurité : anonymisation repo public + convention token

### 🔒 Sécurité — Anonymisation données repo public
Suppression de tous les noms de clients nominatifs dans les fichiers publics du repo.
Remplacés par secteurs génériques (telecom, luxe, finance, hôtellerie) pour préserver
le positionnement professionnel sans exposer les relations clients.

Fichiers corrigés :
- `AGENT-CMS-DIGITAL.md`, `AGENT-DAM-EXPERT.md`, `AGENT-BI-ANALYST.md`
- `mcp-servers/README.md`
- `skills/consultant_ia/offre-mission.md`, `skills/veille_strategique/veille-concurrentielle.md`
- `skills/cms_digital/architecture-cms.md`, `skills/cms_digital/rebranding-digital.md`
- `skills/product_manager_safe/release-strategy.md`

### 🔒 Sécurité — GitHub hardening (activé via API 2026-05-26)
- Branch protection `main` : no force push · no delete · linear history ✅
- Secret scanning activé ✅
- Push protection activé (bloque les commits contenant des secrets) ✅

### 🔒 Connexion SSH
Remote basculé en SSH (git@github.com:guyhui01/claude-agents.git).
Aucun token d'authentification nécessaire pour les opérations git push / git pull.

### 🔧 Modifié — `.gitignore` renforcé
Ajout : `*.p12`, `*.pfx`, `*_password*`, `*_api_key*`, `config.local.*`, `secrets/`,
`.vscode/`, `.idea/`, `__pycache__/`, `.venv/`, `node_modules/`, `*.bak`

---

## [2.5.0] — 2026-05-26 — 2 nouveaux agents : PIM-EXPERT, DAM-EXPERT

### 🎯 Contexte
Enrichissement du catalogue suite à l'analyse stratégique du triptyque CMS-PIM-DAM : les agents CMS-DIGITAL (v2.4.0) couvre la couche publication, mais les couches données produit (PIM) et assets (DAM) manquaient d'agents dédiés. 2 nouveaux agents créés avec 24 skills actionnables, des certifications 2024-2026 et les 3 certifications Anthropic 2026.

### ✨ Ajouté — AGENT-PIM-EXPERT.md
Expert PIM & Gestion du Catalogue Produit — Akeneo, Pimcore, inriver, SAP MDG, syndication multicanal, gouvernance données produit, enrichissement IA.
- **13 certifications** : Akeneo Product Manager & Developer, Pimcore Dev, inriver, Salsify, SAP MDG Associate, Contentserv PIM, DAMA DMBOK2, CDMP, ISO/IEC 42001:2023, 3× Anthropic 2026
- **12 skills** : `modelisation-catalogue` · `enrichissement-produit` · `gouvernance-donnees-produit` · `syndication-canaux` · `localisation-i18n` · `integration-erp-pim` · `scoring-qualite-produit` · `migration-pim` · `portail-fournisseurs` · `onboarding-donnees-produit` · `pim-augmente-ia` · `kpis-catalogue`

### ✨ Ajouté — AGENT-DAM-EXPERT.md
Expert DAM & Gestion des Assets Digitaux — Bynder, AEM Assets, Cloudinary, Canto, Widen, Brandfolder, brand portal, gouvernance, IA visuelle.
- **13 certifications** : Bynder Certified Partner, AEM Assets Specialist, Cloudinary Dev Expert, Henry Stewart DAM Practitioner, Canto, Widen / Acquia, Brandfolder, IPTC, Adobe CC, ISO/IEC 42001:2023, 3× Anthropic 2026
- **12 skills** : `taxonomie-assets` · `workflow-validation-assets` · `gestion-droits-licences` · `distribution-multicanal` · `transformation-formats` · `integration-dam-cms` · `brand-portal` · `gouvernance-dam` · `migration-dam` · `dam-augmente-ia` · `analytics-assets` · `naming-convention`

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 35 → **37 agents**, 34 → **36 dossiers skills**
- `CLAUDE.md` — Compteurs 35/34 → **37/36**
- `START.md` — Compteur 35/34 → **37/36**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue 35 → 37, PIM-EXPERT et DAM-EXPERT ajoutés

### 📊 Statistiques après v2.5.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 35 | **37** |
| Dossiers de skills | 34 | **36** |
| Skills nouveaux | — | **+24** |
| Fichiers créés/modifiés | — | 30 (2 agents + 24 skills + 4 mises à jour) |

---

## [2.4.1] — 2026-05-26 — Finalisation audit 24/05 : alignement 3-certs Anthropic & ISO 42001

### 🎯 Contexte
Complétion des tâches restantes de l'audit qualité v2.3.6 (2026-05-24) : alignement de tous les agents sur le format 3-certifications Anthropic 2026 et ajout des certifications réglementaires IA manquantes.

### 🔧 Modifié — Tâche 1 : Alignement 3-certs Anthropic (9 agents)
Tous les agents avaient une certification Anthropic partielle ou non standardisée. Format cible :
`Claude 101 (Anthropic 2026)` · `Claude Code 101 (Anthropic 2026)` · `Anthropic Claude Code in Action — Certified AI Workflow Engineer (Anthropic 2026)`

Agents mis à jour :
- `AGENT-AI-ARCHITECT.md` — `Anthropic — Claude Code in Action` → 3 certifications complètes
- `AGENT-CDO-DIRECTEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-CONSULTANT-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-DEV-TYPESCRIPT-IA.md` — `Claude Code 101 & Claude Code in Action` → 3 certifications complètes
- `AGENT-FORMATEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-GROWTH-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-REDACTEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-SECURITE-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-VEILLE-STRATEGIQUE.md` — format non standard → 3 certifications complètes

### 🔧 Modifié — Tâche 2 : ISO/IEC 42001:2023 (2 agents)
- `AGENT-CONSULTANT-IA.md` — ajout `ISO/IEC 42001:2023 — AI Management System (AIMS) Lead Implementer (PECB)`
- `AGENT-FINANCIAL-ANALYST.md` — ajout `ISO/IEC 42001:2023 — AI Management System (AIMS) Lead Implementer (PECB)` + 3 certifications Anthropic 2026

### 📊 Statistiques après v2.4.1
| Métrique | Avant | Après |
|---|---|---|
| Agents avec 3 certs Anthropic 2026 | 11 | **20** |
| Agents avec ISO/IEC 42001:2023 | 3 | **5** |
| Fichiers modifiés | — | 10 |

---

## [2.4.0] — 2026-05-26 — 3 nouveaux agents : CMS-DIGITAL, TECH-LEAD, BI-ANALYST

### 🎯 Contexte
Analyse évolutive du catalogue (2026-05-26) : identification de 3 gaps métier majeurs absents du catalogue malgré leur pertinence pour les missions clients CAC40. Chaque agent est livré avec 12 skills actionnables (36 skills au total), des certifications 2024-2026 et les 3 certifications Anthropic 2026.

### ✨ Ajouté — AGENT-CMS-DIGITAL.md
Expert CMS & Digital Platform Manager — comble le gap de l'expertise CMS forte de Guy (AEM, Drupal, Headless, ABE, Noheto) absente du catalogue.
- **17 certifications** : Adobe Certified Expert AEM Sites Developer & Business Practitioner, Acquia Certified Developer & Site Builder Drupal 10, Contentful Certified Professional, Sitecore XM Cloud Developer, **TYPO3 CMS Certified Integrator (TCI)**, **Optimizely CMS Certified Developer**, **HubSpot CMS for Developers**, **Shopify Theme Development**, Yoast SEO, TOGAF 10 Foundation, WCAG 2.2 / RGAA 4.1, 3× Anthropic 2026
- **12 skills** : `architecture-cms`, `aem-sites-assets`, `drupal-developpement`, `cms-headless`, `migration-cms`, `gouvernance-editoriale`, `integration-pim-dam`, `performance-web`, `accessibilite-numerique`, `seo-technique-cms`, `rebranding-digital`, `personnalisation-segmentation`

### ✨ Ajouté — AGENT-TECH-LEAD.md
Tech Lead / Lead Developer IA — comble le gap entre les agents DEV-* (exécution) et SOLUTIONS-ARCHITECT (architecture d'entreprise).
- **11 certifications** : AWS DVA-C02, Google Professional Cloud Developer, Azure AZ-204, CKAD Linux Foundation, **GitHub Actions Certifications**, MongoDB Certified Developer Professional, **ISTQB FL v4.0**, **Postman API Fundamentals Expert**, 3× Anthropic 2026
- **12 skills** : `code-review`, `architecture-applicative`, `api-design`, `strategie-tests`, `cicd-pipeline`, `securite-applicative`, `dette-technique`, `documentation-technique`, `performance-applicative`, `mentoring-equipe-dev`, `ia-workflows-dev`, `branching-release`

### ✨ Ajouté — AGENT-BI-ANALYST.md
Business Intelligence Analyst Expert — comble le gap BI pur (DATA-SCIENTIST couvre le ML mais pas Power BI, Tableau, Looker, reporting CODIR).
- **11 certifications** : **PL-300 Power BI Data Analyst Associate**, **DP-600 Fabric Analytics Engineer**, **Tableau Certified Data Analyst**, Google Data Analytics, **Databricks Data Analyst Associate**, **dbt Certified Analytics Engineer**, Looker BI & Data Analytics, AWS DEA-C01, 3× Anthropic 2026
- **12 skills** : `modelisation-dimensionnelle`, `power-bi-reporting`, `tableau-dashboard`, `looker-lookml`, `sql-analytique`, `catalogue-kpis`, `reporting-codir`, `gouvernance-bi`, `self-service-bi`, `microsoft-fabric`, `monitoring-alertes-bi`, `bi-augmentee-ia`

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 32 → **35 agents**, 31 → **34 dossiers skills** + 3 agents et 3 dossiers ajoutés aux tables
- `CLAUDE.md` — Compteurs harmonisés 32/31 → **35/34**
- `START.md` — Compteur mis à jour 32 → **35 agents**, 31 → **34 dossiers**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue mis à jour (32 → 35), 3 agents ajoutés à la table Dev & Technique

### 📊 Statistiques après v2.4.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 32 | **35** |
| Dossiers de skills | 31 | **34** |
| Skills nouveaux | — | **+36** |
| Agents avec 3 certs Anthropic 2026 | 8 | **11** |
| Fichiers modifiés/créés | — | 43 (3 agents + 36 skills + 4 mise à jour) |

---

## [2.3.6] — 2026-05-24 — Audit qualité certifications & cohérence structurelle

### 🎯 Contexte
Audit complet (Opus 4.7) du catalogue selon 2 axes : (1) qualité & mise à jour des certifications, (2) cohérence de la structure agentique. Identifié 12 corrections à appliquer immédiatement (quick wins P1 + Anthropic 2026 P2 + réglementaires IA P3 + housekeeping P4).

### 🔧 Modifié — Certifications obsolètes
- `AGENT-AI-ARCHITECT.md` — `AWS MLS-C01` (Machine Learning Specialty, en dépréciation) remplacée par **`AWS MLA-C01`** (Machine Learning Engineer Associate, sortie 2024-08)
- `AGENT-MLOPS-ENGINEER.md` — Retiré l'année figée `(2024)` du libellé GitHub Actions Certification
- `AGENT-DATA-ENGINEER.md` — Retiré `— 2024` du libellé AWS DEA-C01
- `AGENT-DEV-TYPESCRIPT-IA.md` — Retiré `(2025)` du libellé Vercel Next.js Certification

### ✨ Ajouté — Certifications Anthropic 2026 propagées (P2)
Pattern unifié `Claude 101 / Claude Code 101 / Anthropic Claude Code in Action — Certified AI Workflow Engineer` ajouté sur 6 agents prioritaires :
- `AGENT-DEV-PYTHON-IA.md`
- `AGENT-MLOPS-ENGINEER.md`
- `AGENT-DATA-SCIENTIST.md`
- `AGENT-CHEF-PROJET-IA.md`
- `AGENT-PRODUCT-MANAGER-SAFE.md`
- `AGENT-SOLUTIONS-ARCHITECT.md`

### ✨ Ajouté — Certifications réglementaires IA 2024-2026 (P3)
- `AGENT-JURIDIQUE-IA.md` — +**ISO/IEC 42001:2023** (AI Management System), +**NIST AI RMF 1.0**, +**ISO/IEC 23894:2023** (AI Risk Management)
- `AGENT-SECURITE-IA.md` — +**ISO/IEC 42001:2023**, +**NIST AI RMF 1.0**
- `AGENT-CDO-DIRECTEUR-IA.md` — +**ISO/IEC 42001:2023**

### 🔧 Modifié — Cohérence structurelle (P1 + P4)
- `CLAUDE.md` — Tree ASCII harmonisé : `31/30/5` → **32/31/10** (agents/skills/workflows)
- `AGENT-QA-AGILE.md` — Note explicite sur le partage du dossier `skills/qa_testing/` avec QA-CYCLEV (orientation Agile)
- `AGENT-QA-CYCLEV.md` — Note explicite sur le partage du dossier `skills/qa_testing/` avec QA-AGILE (orientation Cycle en V)
- `AGENT-REDACTEUR-IA.md` — Note clarifiant le statut transverse de `documentation-technique.md` et `ux-writing.md` (L6 de l'audit 22-05 traité)

### 📊 Statistiques après v2.3.6
| Métrique | Avant | Après |
|---|---|---|
| Agents avec ≥1 cert Anthropic 2026 | 11/32 (34%) | **17/32 (53%)** |
| Agents avec les 3 certs Anthropic | 2 (PROMPT-ENG, ORCHESTRATEUR) | **8** |
| Agents avec ISO/NIST AI standards | 0 | **3** (JURIDIQUE, SECURITE, CDO) |
| Fichiers modifiés | — | 12 (1 CLAUDE.md + 11 agents) |

### 🔜 Reste à arbitrer
- Aligner les 9 agents qui ont seulement "Claude Code in Action" sur le format 3-certs (cohérence)
- Évaluer si d'autres agents méritent les certs ISO 42001 (FINANCIAL-ANALYST, CONSULTANT-IA pour conformité)

---

## [2.3.4] — 2026-05-23 — Stories techniques Scrum (tech debt, spikes, infra)

### 🎯 Contexte
Les Enabler Stories étaient déjà couvertes côté SAFe (`feature-to-story-splitting.md` v2.3.2) mais rien côté Scrum pur. Ajout d'1 skill rattaché à PO-SCRUM pour combler le gap (missions PME / startups / ESN équipe unique) avec encadré de renvoi vers SAFe.

### ✨ Ajouté
- `skills/scrum/stories-techniques.md` — 3 types (Tech Debt, Spike, Infra), template de rédaction adapté (pas de Connextra), INVEST adapté par type, DoR spécifique, règle des 15-20% capacité, signaux d'alerte, anti-patterns + encadré "En contexte SAFe → Enabler Stories officielles" avec mapping vers les 4 types SAFe

### 🔧 Modifié
- `AGENT-PO-SCRUM.md` — 1 ligne ajoutée dans la table skills

---

## [2.3.3] — 2026-05-23 — Skill dédié Planning Poker (Scrum Master)

### 🎯 Contexte
La méthode Planning Poker était mentionnée dans 5 fichiers (po-backlog, po-user-story, facilitation-ateliers-sm, feature-to-story-splitting, planification-hybride) sans skill dédié. Création d'un skill complet rattaché au SCRUM-MASTER (facilitateur officiel de l'atelier) avec cross-links depuis les agents PO.

### ✨ Ajouté
- `skills/scrum_master/planning-poker.md` — Fibonacci complet (avec ? ∞ ☕), procédure d'animation pas-à-pas, référentiel d'US d'ancrage, facilitation remote (Planning Poker Online, Scrum Poker, Miro), 5 alternatives (T-shirt, #NoEstimates, Affinity, Magic Estimation, Bucket System), anti-patterns (anchoring, HiPPO, conversion SP→heures), adaptation SAFe (NSP + PI Planning)

### 🔧 Modifié
- `AGENT-SCRUM-MASTER.md` — 1 ligne ajoutée dans la table skills
- `skills/scrum/po-backlog.md` — Section estimation recentrée sur le rôle PO (4 lignes), renvoi vers le skill dédié pour les détails techniques (suppression doublon)

---

## [2.3.2] — 2026-05-23 — Couverture SAFe Epic → Feature → Story

### 🎯 Contexte
Comblement de la lacune SAFe sur la cascade Epic → Feature → User Story. Alternative pragmatique à la création d'un agent EPIC-OWNER dédié : enrichissement de PO-SAFE + PM-SAFE avec 3 skills SAFe officiels, reflétant la réalité opérationnelle (Epic Owner = casquette ponctuelle PM/Architecte, pas un rôle plein-temps).

### ✨ Ajouté
- `skills/safe/epic-hypothesis-mvp.md` — Epic Hypothesis Statement (template SAFe officiel For/Who/The/Is a/That/Unlike/Our solution), rôle Epic Owner, MVP vs MMF, Build-Measure-Learn, décision Pivot/Persevere/Stop
- `skills/safe/epic-to-feature-splitting.md` — 8 patterns officiels SAFe (Workflow, Business Rules, CRUD, Scenarios, Simple First, Variations, Data, Defer Performance) + atelier Continuous Exploration
- `skills/safe/feature-to-story-splitting.md` — INVEST + SPIDR en contexte SAFe + 4 types d'Enabler Stories + AC Gherkin + input Program Board

### 🔧 Modifié
- `AGENT-PO-SAFE.md` — 3 nouveaux skills ajoutés dans la table (epic-hypothesis-mvp, epic-to-feature-splitting, feature-to-story-splitting)
- `AGENT-PRODUCT-MANAGER-SAFE.md` — 2 skills ajoutés (epic-hypothesis-mvp, epic-to-feature-splitting), périmètre ✅ enrichi (rôle Epic Owner ponctuel + décomposition Epic→Features), périmètre ❌ clarifié (rédaction/raffinement Feature reste PO-SAFE)

### 📊 Statistiques après v2.3.2
| Métrique | Avant | Après |
|---|---|---|
| Skills `safe/` | 22 | 25 |
| Skills PM-SAFE référencés | 10 | 12 |
| Skills PO-SAFE référencés | 22 | 25 |

---

## [2.3.1] — 2026-05-23 — PO-Scrum enrichi : priorisation multi-techniques + Story Mapping

### 🎯 Contexte
Comblement des lacunes sur les méthodes de priorisation certifiantes PSPO et la méthode Jeff Patton (audit utilisateur direct).

### ✨ Ajouté
- `skills/scrum/priorisation-techniques.md` — MoSCoW détaillé, RICE, Kano, Value/Effort Matrix, Buy a Feature, 100$ test, Opportunity Scoring + grille de choix par contexte + anti-patterns
- `skills/scrum/story-mapping.md` — Méthode Jeff Patton complète : 6 étapes, code couleur, atelier présentiel/remote (Miro), Walking Skeleton, conversion vers backlog

### 🔧 Modifié
- `skills/scrum/po-backlog.md` — Recentré sur gestion (structure, DoR INVEST, refinement, santé, roadmap), doublons MoSCoW/Story Mapping retirés avec renvois vers les nouveaux skills
- `AGENT-PO-SCRUM.md` — Table skills : 2 nouvelles lignes (priorisation + story mapping), libellé po-backlog clarifié
- `README.md` — Description AGENT-PO-SCRUM (retrait "cérémonies Scrum" obsolète depuis audit v2.0.0) + description `skills/scrum/`

---

## [2.3.0] — 2026-05-23 — Nouvel agent Solutions Architect + 10 nouveaux skills + 3 workflows RH/Ops

### 🎯 Contexte
Exécution des recommandations M6 et L1–L7 de l'audit stratégique du 2026-05-22.

### ✨ Ajouté
- `AGENT-SOLUTIONS-ARCHITECT.md` — Nouvel agent Architecture d'Entreprise (TOGAF 10, ArchiMate 3, AWS SAP-C02, AZ-305, CITA-A, CISSP)
- `skills/solutions_architect/togaf-adm.md` — 9 phases ADM, Architecture Vision, principes d'architecture
- `skills/solutions_architect/archimate-modeling.md` — 3 couches, viewpoints par audience, relations essentielles, outils
- `skills/solutions_architect/urbanisme-si.md` — 3 vues (métier/fonctionnel/technique), référentiel applicatif, plan urbanisme
- `skills/solutions_architect/architecture-bdat.md` — Couches B/D/A/T, check de traçabilité BDAT
- `skills/solutions_architect/integration-patterns.md` — API Management, EDA, ESB→iPaaS, microservices
- `skills/solutions_architect/migration-cloud.md` — Framework 6R, 4 phases, TCO, wave planning
- `skills/solutions_architect/gouvernance-architecturale.md` — ARB, Tech Radar, métriques de gouvernance
- `skills/solutions_architect/roadmap-transformation-si.md` — Horizon Now/Next/Later, 6 axes, grille de priorisation
- `skills/prompt_engineer/evals-llm-observability.md` — 4 niveaux d'évals, LLM Ops stack, gestion du drift
- `skills/devops_cloud/incident-response-llm.md` — Taxonomie P0-P3, runbook 5 phases, OWASP LLM Top 10
- `workflows/WF-007-onboarding-mission-j1.md` — Prise de poste → kit d'intégration mission (4 agents, 45-75 min)
- `workflows/WF-009-recrutement-it-ia.md` — Brief poste → shortlist profilée (4-7 agents, 60-90 min)
- `workflows/WF-010-post-mortem-projet.md` — Clôture projet → rapport REX + plan d'actions (4-7 agents, 45-75 min)

### 🔧 Modifié
- `AGENT-CONSULTANT-IA.md` — Skill renommé `calcul-roi-ia` → `estimation-roi-rapide` (nom plus actionable)
- `skills/consultant_ia/calcul-roi-ia.md` → `estimation-roi-rapide.md` — Renommage via `git mv`
- `AGENT-PROMPT-ENGINEER.md` — Skill `evals-llm-observability.md` ajouté dans la table
- `AGENT-DEVOPS-CLOUD.md` — Skill `incident-response-llm.md` ajouté dans la table
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — SOLUTIONS-ARCHITECT ajouté au catalogue, compteur 30 → 32 agents
- `README.md` — Compteurs 31→32 agents, 30→31 dossiers, 7→10 workflows + ajouts table agents/skills/workflows/tree
- `START.md` — Compteurs mis à jour, Dev & Technique 10→11, workflows 7→10
- `workflows/README.md` — 7→10 workflows, sélection rapide + vue d'ensemble mis à jour

### 📊 Statistiques après M6/L1-L7
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 32 |
| Dossiers de skills | 30 | 31 |
| Workflows | 7 | 10 |
| Skills solutions_architect/ | 0 | 8 |
| Skills prompt_engineer/ | 7 | 8 |
| Skills devops_cloud/ | 10 | 11 |

---

## [2.2.0] — 2026-05-23 — Tags QA, frontière SAFe, enrichissement FORMATEUR-IA

### 🎯 Contexte
Exécution des recommandations M3, M4 et M5 de l'audit stratégique du 2026-05-22.

### ✨ Ajouté
- `skills/formateur_ia/formation-agents-ia.md` — Former aux agents IA et architectures agentic (patterns, MCP/A2A, LangGraph vs CrewAI, TP)
- `skills/formateur_ia/formation-claude-code.md` — Former à Claude Code et outils LLM pro (CLI, API Anthropic, SDK, gouvernance)
- `skills/formateur_ia/conception-parcours-certifiant-ia.md` — Concevoir un parcours certifiant IA (catalogue 2026, plan 8 semaines, déploiement collectif)

### 🔧 Modifié
- `skills/qa_testing/` — Tag `> **Méthodologie :**` ajouté sur les 23 skills (10 Agile · 12 Cycle en V · 1 Mixte)
- `AGENT-PO-SAFE.md` — Titre clarifié "Product Owner SAFe Expert" (suppression "/ Product Manager") + périmètre ❌ enrichi (renvois vers PRODUCT-MANAGER-SAFE)
- `AGENT-PRODUCT-MANAGER-SAFE.md` — Périmètre ❌ enrichi (renvois explicites vers PO-SAFE pour PI Planning opérationnel, Features SAFe, I&A)
- `AGENT-FORMATEUR-IA.md` — 3 nouveaux skills IA-spécifiques ajoutés dans la table (agents IA, Claude Code, parcours certifiant)

### 📊 Statistiques après M3/M4/M5
| Métrique | Avant | Après |
|---|---|---|
| Skills `formateur_ia/` | 8 | 11 |
| Skills `qa_testing/` taggés | 0 | 23 |
| Frontières PO-SAFE / PM-SAFE | Floues | Clarifiées (✅/❌ mis à jour) |

---

## [2.1.0] — 2026-05-23 — Workflows avant-vente & conformité IA

### 🎯 Contexte
Exécution des recommandations M1 et M2 de l'audit stratégique du 2026-05-22. Création de deux nouveaux workflows à forte valeur commerciale et réglementaire, conçus avec Opus 4.7 pour garantir la qualité du raisonnement multi-dimensions (chiffrage commercial pour WF-006, qualification AI Act / RGPD pour WF-008).

### ✨ Ajouté
- `workflows/WF-006-avant-vente-proposition-commerciale.md` — RFP → qualification BANT → cadrage → architecture → planning → chiffrage → proposition commerciale (6 agents core + 3 optionnels, 75-120 min)
- `workflows/WF-008-audit-conformite-ia-act-rgpd.md` — Cartographie obligations → audit architecture/sécurité/données → gouvernance cible → plan de remédiation (7 agents core + 2 optionnels, 90-150 min)

### 🔧 Modifié
- `README.md` — Compteur workflows 5 → 7 + tableau workflows + structure du repo
- `START.md` — Compteur en-tête 5 → 7 workflows + tableau workflows disponibles
- `workflows/README.md` — Compteur 5 → 7 + grille de sélection rapide + vue d'ensemble

### 📊 Statistiques après ajout
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 31 |
| Dossiers de skills | 30 | 30 |
| Workflows | 5 | 7 |
| Domaines couverts | 3 | 4 (+ Conformité & Gouvernance) |

---

## [2.0.0] — 2026-05-22 — Audit stratégique Opus 4.7

### 🎯 Contexte
Audit stratégique complet par Opus 4.7 (5 questions : redondances, gaps, cohérence, qualité, recommandations). Exécution des recommandations HIGH.

### ✨ Ajouté
- `AUDIT-STRATEGIQUE-2026-05-22.md` — Rapport d'audit complet 31 agents × 30 skills × 5 workflows
- `CHANGELOG.md` — Ce journal de suivi des modifications
- WF-001 : 3 agents optionnels (AI-ARCHITECT, PROMPT-ENGINEER, FINANCIAL-ANALYST) pour cadrage de produits IA-natifs
- WF-003 : Nouveau STEP-04 QA-AGILE entre développement et déploiement (evals LLM + Gherkin BDD)
- WF-003 : Agent optionnel PO-SCRUM pour pilotage backlog en cours de dev

### 🔧 Modifié
- WF-001 : version 1.1 → 1.2 (renforcement périmètre IA)
- WF-003 : version 1.1 → 1.2 (renumération STEP-04 → STEP-05 DEVOPS / STEP-05 → STEP-06 SECURITE)
- AGENT-PO-SCRUM.md : 7 skills retirés de la table (4 cérémonies + 3 scaling), 2 nouvelles sections "Hors périmètre"
- AGENT-SCRUM-MASTER.md : 4 skills ajoutés (sprint-planning, daily, retrospective, sprint-review)
- AGENT-PRODUCT-MANAGER-SAFE.md : 3 skills ajoutés (enterprise-product-vision, scaling-product-ownership, product-operating-model)
- AGENT-AI-ARCHITECT.md : renommage skill securite-ia → secure-by-design + redirection vers SECURITE-IA pour audit
- AGENT-DEV-PYTHON-IA.md : suppression skill prompt-engineering + redirection vers PROMPT-ENGINEER
- AGENT-CONSULTANT-IA.md : suppression skill veille-ia + redirection vers VEILLE-STRATEGIQUE
- AGENT-DATA-SCIENTIST.md : renommage skill nlp-llm → nlp-classique (cohérence périmètre HORS)

### 📦 Déplacements de fichiers (skills réattribués)
- `skills/scrum/sprint-planning.md` → `skills/scrum_master/`
- `skills/scrum/daily.md` → `skills/scrum_master/`
- `skills/scrum/retrospective.md` → `skills/scrum_master/`
- `skills/scrum/sprint-review.md` → `skills/scrum_master/`
- `skills/scrum/enterprise-product-vision.md` → `skills/product_manager_safe/`
- `skills/scrum/scaling-product-ownership.md` → `skills/product_manager_safe/`
- `skills/scrum/product-operating-model.md` → `skills/product_manager_safe/`
- `skills/ai_architect/securite-ia.md` → `skills/ai_architect/secure-by-design.md`
- `skills/data_scientist/nlp-llm.md` → `skills/data_scientist/nlp-classique.md`

### 🗑️ Supprimé
- `skills/dev_python_ia/prompt-engineering.md` (doublon avec dossier PROMPT-ENGINEER)
- `skills/consultant_ia/veille-ia.md` (doublon avec dossier VEILLE-STRATEGIQUE)

### 📊 Statistiques après audit
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 31 |
| Dossiers de skills | 30 | 30 |
| Skills `scrum/` (PO-SCRUM) | 34 | 27 |
| Skills `scrum_master/` | 15 | 19 |
| Skills `product_manager_safe/` | 7 | 10 |
| Skills `consultant_ia/` | 10 | 9 |
| Skills `dev_python_ia/` | 10 | 9 |
| Workflows | 5 | 5 (WF-001 et WF-003 enrichis) |

---

## [1.5.0] — 2026-05-22 — Refactoring structurel (audit P0/P1)

### ✨ Ajouté
- `CLAUDE.md` racine — Instructions projet pour Claude Code
- Section "Intégrations MCP" dans README.md
- `AGENT-RH-IA.md` + 11 skills `skills/rh_ia/` (recrutement IT/IA, anti-fraude CV/deepfake, GEPP, ATS, people analytics, transformation RH)

### 🔧 Modifié
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` : catalogue passé de 22 → 30 agents orchestrables (ajout des 7 manquants : RH-IA, CHANGE-MANAGER, FINANCIAL-ANALYST, PRODUCT-MANAGER-SAFE, RELEASE-TRAIN-ENGINEER, VEILLE-STRATEGIQUE, PROMPT-ENGINEER) + nouvelle section "RH & Talent"
- `START.md` : réécrit comme hub d'entrée complet (8 lignes → 130 lignes), 3 modes d'entrée, catalogue par catégorie
- `README.md` : sync agents (30 → 31), skills (26 → 30), tree structure post-flatten

### 📦 Aplatissement skills/dev_ia/
- `skills/dev_ia/architect/` → `skills/ai_architect/`
- `skills/dev_ia/mlops/` → `skills/mlops_engineer/`
- `skills/dev_ia/python_ia/` → `skills/dev_python_ia/`
- `skills/dev_ia/typescript_ia/` → `skills/dev_typescript_ia/`
- 4 AGENT files mis à jour avec les nouveaux chemins
- 37 fichiers déplacés (renames git détectés à 100%)

---

## [1.4.0] — 2026-05-22 — Benchmark LLM Frontier 2026

### 🔧 Modifié
- `skills/rh_ia/evaluation-profils-techniques.md` : question senior LLM enrichie avec Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, Grok 3, Mistral Large 2, LLaMA 3.3 — grille de choix par use case avec SWE-bench Pro et LM Arena Elo
- `skills/rh_ia/transformation-rh-ia.md` : nouvelle section "Référentiel LLM Frontier — Avril 2026" + tableau 9 modèles + recommandations usage RH par tier
- `skills/rh_ia/redaction-offre-emploi.md` : stack LLM mise à jour Frontier/Production
- `skills/rh_ia/benchmark-remuneration-it.md` : table positionnement client enrichie (Licorne, startup Série A/early, PME tech distincte)
- `AGENT-RH-IA.md` : périmètre client étendu à GAFA + licornes

---

## [1.3.0] — 2026-05-22 — Skills anti-fraude recrutement + ATS

### ✨ Ajouté
- `skills/rh_ia/detection-fraude-cv-profils.md` — faux CV, profils LinkedIn/GitHub IA, outils GPTZero/Originality
- `skills/rh_ia/detection-deepfake-entretien.md` — voix clonées, deepfake vidéo, AI copilot live, Pindrop/Reality Defender
- `skills/rh_ia/verification-references-background-check.md` — appels référence 15 min, RGPD France, prestataires
- `skills/rh_ia/cv-parsing-ats-scoring.md` — pipeline ATS, formats CV, détection keyword stuffing

### 🔧 Modifié
- `AGENT-RH-IA.md` : 11 skills au total

---

## [1.2.0] — 2026-05-22 — Agent RH IA initial

### ✨ Ajouté
- `AGENT-RH-IA.md` + 7 skills initiaux (sourcing, rédaction offres, évaluation technique, GEPP, people analytics, benchmark rémunération, transformation RH par l'IA)
- Certifications : SHRM-CP, PHR, ATD CPTD, LinkedIn Talent Solutions, CIPD L5, PROSCI

---

## [1.1.0] — 2026-05-22 — Wireframes Sprint 2 + 3 (projet Company-Test B2B)

### ✨ Ajouté
- `projects/Project_test__ecommerce_b2b/04_ux_design/design_handoff/wireframes_sprint_02.html`
- `projects/Project_test__ecommerce_b2b/04_ux_design/design_handoff/wireframes_sprint_03.html`
- Déplacés ensuite vers le repo séparé `claude-projects` (gouvernance : projets clients hors `claude-agents`)

---

## [1.0.0] — 2026-05-21 — État initial du catalogue

### Snapshot
- 30 agents IA spécialisés (avant ajout RH-IA)
- 26 dossiers de skills
- 5 workflows agentiques (WF-001 à WF-005)
- 3 serveurs MCP (Jira, Confluence, workflow-log)
- Architecture des skills : `skills/dev_ia/` nichait Python, TS, Architect, MLOps

### Conventions établies
- Naming : `AGENT-NOM.md` pour agents, `snake_case.md` pour skills
- Structure agent : identité + certifs / périmètre ✅❌ / règles / table skills / activation
- Structure workflow : YAML carte d'identité + BPMN + paramètres + fiches étapes + livrables
- Modèle par défaut : claude-sonnet-4-6, alternatif claude-opus-4-7

---

## Conventions de versioning

- **Major (X.0.0)** : changement de structure significatif, audit complet, refactoring large
- **Minor (X.Y.0)** : nouveaux agents, skills, workflows ou enrichissement majeur
- **Patch (X.Y.Z)** : corrections ponctuelles, renommages, ajustements mineurs

## Conventions d'entrées

- ✨ **Ajouté** — nouvelles fonctionnalités, fichiers, sections
- 🔧 **Modifié** — modifications de fonctionnalités existantes
- 📦 **Déplacé / renommé** — réorganisation sans suppression
- 🗑️ **Supprimé** — éléments retirés
- 🐛 **Corrigé** — bugs / incohérences résolus
- ⚠️ **Déprécié** — éléments à supprimer prochainement
- 🔒 **Sécurité** — corrections de sécurité

---

## Liens de comparaison entre versions

- [v2.7.9](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.9) — README index 14 dossiers restants (37/37 ✓ 100%) (Opus 4.7)
- [v2.7.8...v2.7.9](https://github.com/guyhui01/claude-agents/compare/v2.7.8...v2.7.9)
- [v2.7.8](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.8) — Correctif traçabilité modèle v2.7.2→v2.7.5 (Opus 4.7)
- [v2.7.7...v2.7.8](https://github.com/guyhui01/claude-agents/compare/v2.7.7...v2.7.8)
- [v2.7.7](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.7) — README index 8 dossiers supplémentaires (23/37) (Opus 4.7)
- [v2.7.6...v2.7.7](https://github.com/guyhui01/claude-agents/compare/v2.7.6...v2.7.7)
- [v2.7.6](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.6) — Convention traçabilité modèle + cosmétique skills (Opus 4.7)
- [v2.7.5...v2.7.6](https://github.com/guyhui01/claude-agents/compare/v2.7.5...v2.7.6)
- [v2.7.5](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.5) — README index 10 dossiers supplémentaires (15/37)
- [v2.7.4...v2.7.5](https://github.com/guyhui01/claude-agents/compare/v2.7.4...v2.7.5)
- [v2.7.4](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.4) — README index 4 dossiers DEV core
- [v2.7.3...v2.7.4](https://github.com/guyhui01/claude-agents/compare/v2.7.3...v2.7.4)
- [v2.7.3](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.3) — Finalisation P3 audit qualité skills DEV (98%)
- [v2.7.2...v2.7.3](https://github.com/guyhui01/claude-agents/compare/v2.7.2...v2.7.3)
- [v2.7.2](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.2) — Frontières inter-agents
- [v2.7.1...v2.7.2](https://github.com/guyhui01/claude-agents/compare/v2.7.1...v2.7.2)
- [v2.7.1](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.1) — Audit qualité skills DEV (P1+P2)
- [v2.7.0...v2.7.1](https://github.com/guyhui01/claude-agents/compare/v2.7.0...v2.7.1)
- [v2.7.0](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.0) — AGENT-AUDIT-METHODO-IA
- [v2.6.0...v2.7.0](https://github.com/guyhui01/claude-agents/compare/v2.6.0...v2.7.0)
- [v2.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v2.0.0) — Audit stratégique Opus 4.7
- [v1.5.0...v2.0.0](https://github.com/guyhui01/claude-agents/compare/v1.5.0...v2.0.0)
- [v1.4.0...v1.5.0](https://github.com/guyhui01/claude-agents/compare/v1.4.0...v1.5.0)
- [v1.3.0...v1.4.0](https://github.com/guyhui01/claude-agents/compare/v1.3.0...v1.4.0)
- [v1.2.0...v1.3.0](https://github.com/guyhui01/claude-agents/compare/v1.2.0...v1.3.0)
- [v1.1.0...v1.2.0](https://github.com/guyhui01/claude-agents/compare/v1.1.0...v1.2.0)
- [v1.0.0...v1.1.0](https://github.com/guyhui01/claude-agents/compare/v1.0.0...v1.1.0)
- [v1.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v1.0.0) — État initial du catalogue
