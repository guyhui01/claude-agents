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

### 3.2 — Groupe Conseil/Direction ⏳ (à formaliser lors du 1er audit de groupe)

**Agents concernés (6)** : JURIDIQUE-IA · CDO-DIRECTEUR-IA · CHEF-PROJET-IA · CONSULTANT-IA · FINANCIAL-ANALYST · AUDIT-METHODO-IA

#### Référentiels attendus (à valider lors du premier audit)
- DAMA-DMBOK (data governance)
- McKinsey 7S / BCG matrix / Porter 5 forces (frameworks stratégiques)
- ISO 42001 (gouvernance IA)
- NIST AI RMF
- ISO 23894 (risk management AI)
- AI Act (UE 2024)
- RGPD (UE 2016, application 2018)
- NIS2 (UE 2023)
- PMI PMP, PMI-ACP, EVM (gestion projet)
- CMMI

#### Actionabilité attendue (à valider)
- One-pagers CODIR, business cases, roadmaps stratégiques
- Slides decks structurés (pyramide Minto)
- Calculs ROI/TCO/NPV chiffrés
- DPIA templates, registres de traitement RGPD
- Matrices risques IA (NIST AI RMF)

#### Profondeur attendue (à valider)
- Benchmarks marché 2024-2026 (Gartner Magic Quadrant, Forrester Wave)
- Études McKinsey/BCG/Deloitte récentes
- Cas réels CAC40 ou licornes
- Jurisprudence AI Act (premières amendes 2025-2026 attendues)

**🔜 À compléter** : critères opérationnels précis, échelle de cotation, sources attendues — formaliser lors de l'audit JURIDIQUE-IA (premier agent du groupe).

---

### 3.3 — Groupe Data/Tech ⏳ (à formaliser)

**Agents concernés (5)** : DATA-SCIENTIST · DATA-ENGINEER · MLOPS-ENGINEER · SOLUTIONS-ARCHITECT · BI-ANALYST

#### Référentiels attendus (à valider)
- Hériter en grande partie de la grille v2.7.1 (DEV core)
- + DAMA-DMBOK (data governance)
- + TOGAF / Zachman (architecture d'entreprise)
- + MLflow, Kubeflow, Spark 3.5+, dbt, Airflow versions récentes
- + DORA + AIOps metrics
- + ISO/IEC 5338 (AI system lifecycle)

#### Actionabilité attendue
- Code prêt-à-copier (PyTorch, Spark, dbt models)
- Diagrammes Mermaid (lakehouse, pipelines ML)
- Notebook templates (EDA, feature engineering)
- Dashboards Power BI / Tableau / Looker exemples

**🔜 À compléter** : lors de l'audit DATA-SCIENTIST.

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
