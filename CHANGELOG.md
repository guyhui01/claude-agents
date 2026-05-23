# Changelog — Claude Agents Library

> Journal de suivi des modifications du catalogue.
> Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versionnement [SemVer](https://semver.org/lang/fr/).

---

## [Non publié]

### Planifié
- M3 — Tag méthodologie sur skills `qa_testing/`
- M4 — Clarifier frontière PO-SAFE vs PM-SAFE
- M5 — Enrichissement skills IA-spécifiques pour FORMATEUR-IA

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
