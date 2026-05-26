# Changelog — Claude Agents Library

> Journal de suivi des modifications du catalogue.
> Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versionnement [SemVer](https://semver.org/lang/fr/).

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

- [v2.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v2.0.0) — Audit stratégique Opus 4.7
- [v1.5.0...v2.0.0](https://github.com/guyhui01/claude-agents/compare/v1.5.0...v2.0.0)
- [v1.4.0...v1.5.0](https://github.com/guyhui01/claude-agents/compare/v1.4.0...v1.5.0)
- [v1.3.0...v1.4.0](https://github.com/guyhui01/claude-agents/compare/v1.3.0...v1.4.0)
- [v1.2.0...v1.3.0](https://github.com/guyhui01/claude-agents/compare/v1.2.0...v1.3.0)
- [v1.1.0...v1.2.0](https://github.com/guyhui01/claude-agents/compare/v1.1.0...v1.2.0)
- [v1.0.0...v1.1.0](https://github.com/guyhui01/claude-agents/compare/v1.0.0...v1.1.0)
- [v1.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v1.0.0) — État initial du catalogue
