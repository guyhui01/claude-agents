# 🎯 AUDIT STRATÉGIQUE — Catalogue Claude Agents Library

> **Auditeur :** Claude Opus 4.7
> **Date :** 2026-05-22
> **Corpus :** 31 agents · 30 dossiers de skills · 5 workflows · 3 serveurs MCP
> **Méthodologie :** Audit suivant prompt 5 questions (redondances · gaps · cohérence · qualité · recommandations)

---

## Q1 — Redondances & chevauchements

**Constat global :** aucun agent ne mérite une fusion. Les périmètres sont distincts. En revanche, **plusieurs skills sont dupliqués ou mal attribués** et créent du flou.

### 🔴 Recouvrements à corriger immédiatement (skills doublons)

| # | Skill | Agent 1 | Agent 2 | Action |
|---|---|---|---|---|
| 1 | `prompt-engineering` | DEV-PYTHON-IA | PROMPT-ENGINEER (dossier dédié) | **Supprimer** chez DEV-PYTHON-IA |
| 2 | `securite-ia` (skill) | AI-ARCHITECT | SECURITE-IA (dossier dédié 10 skills) | **Renommer** en `secure-by-design.md` |
| 3 | `veille-ia` | CONSULTANT-IA | VEILLE-STRATEGIQUE (dossier dédié) | **Supprimer** chez CONSULTANT-IA |
| 4 | `nlp-llm` | DATA-SCIENTIST | DEV-PYTHON-IA (LLM officiel) | **Renommer** en `nlp-classique.md` |
| 5 | `mlflow-*` | DATA-SCIENTIST | MLOPS-ENGINEER | OK si différentes perspectives — sinon tagger |

### 🟡 Frontières floues entre agents (à clarifier)

- **PO-SAFE vs PRODUCT-MANAGER-SAFE** — Les deux référencent SAFe POPM 6, partagent WSJF/Lean Business Case/Customer Centricity. Frontière théorique "opérationnel ART vs stratégique Programme" mais subtile.
- **PO-SAFE vs RELEASE-TRAIN-ENGINEER** — Les deux ont PI Planning, Inspect & Adapt, métriques. Frontière "contenu (PO-SAFE) vs facilitation (RTE)" mais skills se chevauchent en pratique.
- **CONSULTANT-IA vs CDO-DIRECTEUR-IA** — En mission, Guy peut endosser les deux. Distinction externe/interne maintenue.
- **CONSULTANT-IA vs FINANCIAL-ANALYST** — Les deux calculent du ROI. Distinction "ROI rapide pour proposition" vs "analyse financière profonde".

### 🟢 Skills mal attribués

**PO-SCRUM = 33 skills hétérogènes :**
- ❌ `sprint-planning`, `daily`, `retrospective`, `sprint-review` → appartiennent à **SCRUM-MASTER**
- ❌ `enterprise-product-vision`, `scaling-product-ownership`, `product-operating-model` → appartiennent à **PRODUCT-MANAGER-SAFE**

**REDACTEUR-IA = 16 skills :**
- ⚠️ `documentation-technique` → pourrait être chez DEV agents
- ⚠️ `ux-writing` → pourrait être chez UX-DESIGNER

---

## Q2 — Gaps stratégiques

### Workflows existants — couverture bout-en-bout

| WF | Couverture | Gap identifié |
|---|---|---|
| WF-001 Cadrage Produit | ✅ Bonne | ⚠️ Pas d'AI-ARCHITECT / PROMPT-ENGINEER / FINANCIAL-ANALYST pour produits IA-natifs |
| WF-002 Delivery SAFe | ✅ Très bonne (6 agents core) | Mineur : DEVOPS-CLOUD absent (utile si livraison soft) |
| WF-003 Lancement App IA | ⚠️ Couverture technique forte | 🔴 Pas de PO/QA — on livre une app sans backlog ni tests fonctionnels |
| WF-004 Mission Conseil | ✅ Excellente (6 agents core) | Mineur : RH-IA, UX si conception produit |
| WF-005 Veille & Growth | ✅ Bonne | Mineur : PROMPT-ENGINEER pour contenus IA-augmentés |

### Workflows MANQUANTS (cas d'usage métier non couverts)

| ID proposé | Workflow | Agents | Pourquoi prioritaire |
|---|---|---|---|
| **WF-006** | Avant-vente / Proposition commerciale | CONSULTANT + FINANCIAL + REDACTEUR + VEILLE | Cas d'usage fréquent freelance |
| **WF-007** | Onboarding mission client J1-J5 | CHEF-PROJET + BA + REDACTEUR + CHANGE | Premier livrable mission |
| **WF-008** | Audit conformité IA Act / RGPD | JURIDIQUE-IA + SECURITE-IA + CHEF-PROJET + REDACTEUR | Très demandé 2026 |
| **WF-009** | Recrutement profil IT/IA | RH-IA + (CONSULTANT en variante) | Agent RH-IA orphelin |
| **WF-010** | Post-mortem / REX projet | SCRUM-MASTER + CHEF-PROJET + REDACTEUR + CHANGE | Fin de mission |

### Agents potentiellement manquants

| Agent | Utilité | Verdict |
|---|---|---|
| **AGENT-AVANT-VENTE** | Propositions commerciales, RFP | ⚠️ Couvert par CONSULTANT-IA mais pourrait justifier un agent dédié |
| **AGENT-SOLUTIONS-ARCHITECT (TOGAF EA)** | Architecture d'entreprise pure | 🟡 Utile en grand compte |
| **AGENT-DATA-GOVERNANCE / DPO** | Catalog, lineage, qualité | 🟡 Pas un agent prioritaire |
| **AGENT-SRE** | Incident, on-call, postmortem | 🟢 DEVOPS-CLOUD couvre à 80% |
| **AGENT-CSM-IA** | Customer Success post-livraison | 🟢 Niche, pas critique |

### Skills manquants

- **PROMPT-ENGINEER** : aucun skill `evals-observability.md` (LangSmith, Langfuse) alors que mentionné en périmètre
- **DEVOPS-CLOUD** : pas de skill `incident-response-llm.md` ni `finops-llm-tokens.md`
- **FORMATEUR-IA** : 8 skills assez génériques, manque skills IA-spécifiques
- **CONSULTANT-IA** : pas de skill `negociation-mission.md`

---

## Q3 — Cohérence agents ↔ skills ↔ workflows + model_id

### model_recommande — 5 workflows audités

| Workflow | Modèle principal | Alternatif | Cohérence |
|---|---|---|---|
| WF-001 Cadrage Produit | claude-sonnet-4-6 | opus-4-7 | ✅ Cohérent |
| WF-002 Delivery SAFe | claude-opus-4-7 | sonnet-4-6 | ✅ Cohérent |
| WF-003 Lancement App IA | claude-opus-4-7 | sonnet-4-6 | ✅ Cohérent |
| WF-004 Mission Conseil | claude-opus-4-7 | sonnet-4-6 | ✅ Cohérent |
| WF-005 Veille & Growth | claude-sonnet-4-6 | opus-4-7 | ✅ Cohérent |

**Verdict :** model_id systématiquement bien calibré. Excellente discipline.

### Couverture skills par workflow

| WF | Couverture skills | Incohérence |
|---|---|---|
| WF-001 | ✅ 100% | — |
| WF-002 | ⚠️ 95% | SCRUM-MASTER doit produire "Sprint Plan" mais `sprint-planning.md` est dans `scrum/` (PO-SCRUM) |
| WF-003 | ✅ 100% | — |
| WF-004 | ✅ 100% | — |
| WF-005 | ✅ 100% | — |

---

## Q4 — Qualité des agents (scoring 5/5)

| Tier | Agents | Note |
|---|---|---|
| **Excellents (5/5)** | ORCHESTRATEUR · BUSINESS-ANALYST · CHANGE-MANAGER · CHEF-PROJET-IA · DATA-ENGINEER · DATA-SCIENTIST · DEV-DRUPAL-PHP · DEVOPS-CLOUD · FINANCIAL-ANALYST · GROWTH-IA · JURIDIQUE-IA · MLOPS-ENGINEER · PROMPT-ENGINEER · QA-AGILE · QA-CYCLEV · RELEASE-TRAIN-ENGINEER · RH-IA · SCRUM-MASTER · SECURITE-IA · UX-DESIGNER · VEILLE-STRATEGIQUE | 21/31 — 68% |
| **Très bons (4.3-4.7/5)** | AI-ARCHITECT · CDO-DIRECTEUR-IA · CONSULTANT-IA · DEV-PYTHON-IA · DEV-TYPESCRIPT-IA · PO-SAFE · PRODUCT-MANAGER-SAFE · REDACTEUR-IA | 8/31 — 26% |
| **Bons (4/5)** | FORMATEUR-IA | 1/31 — 3% |
| **Hétérogène (à recentrer)** | PO-SCRUM (33 skills, mélange PO + SM + PM) | 1/31 — 3% |

**Cas particuliers :**
- **FORMATEUR-IA** : skills très généraux, manque la spécificité IA
- **PO-SCRUM** : 33 skills hétérogènes, à recentrer
- **REDACTEUR-IA** : périmètre large (16 skills), 2 skills à réévaluer

---

## Q5 — Recommandations priorisées

### 🔴 HIGH — À traiter en priorité

| # | Recommandation | Impact | Effort | Action |
|---|---|---|---|---|
| **H1** | Réattribuer 7 skills mal placés (PO-SCRUM) | 🔴 Élevé | 1h | mv 4 cérémonies → scrum_master/, mv 3 scaling → product_manager_safe/ |
| **H2** | Supprimer 3 skills doublons | 🔴 Élevé | 30 min | rm prompt-engineering, rename securite-ia, rm veille-ia |
| **H3** | Renforcer WF-001 avec agents IA | 🔴 Élevé | 15 min | Ajouter AI-ARCHITECT, PROMPT-ENGINEER, FINANCIAL-ANALYST en optionnels |
| **H4** | Ajouter QA dans WF-003 | 🔴 Élevé | 30 min | Insérer STEP-04 QA-AGILE entre dev et déploiement |
| **H5** | Renommer `nlp-llm.md` → `nlp-classique.md` | 🟠 Moyen-élevé | 10 min | Cohérence DATA-SCIENTIST périmètre HORS |

### 🟠 MEDIUM

| # | Recommandation | Impact | Effort |
|---|---|---|---|
| **M1** | Créer WF-006 Avant-vente / Proposition commerciale | 🟠 Moyen-élevé | 1h30 |
| **M2** | Créer WF-008 Audit conformité IA Act / RGPD | 🟠 Moyen-élevé | 1h30 |
| **M3** | Tagger les skills `qa_testing/` par méthodologie | 🟠 Moyen | 1h |
| **M4** | Clarifier frontière PO-SAFE vs PM-SAFE | 🟠 Moyen | 30 min |
| **M5** | Enrichir FORMATEUR-IA avec skills IA-spécifiques | 🟠 Moyen | 2h |
| **M6** | Renommer `calcul-roi-ia.md` → `estimation-roi-rapide.md` | 🟢 Faible-moyen | 10 min |

### 🟢 LOW

| # | Recommandation | Impact | Effort |
|---|---|---|---|
| **L1** | Créer WF-009 Recrutement IT/IA | 🟢 Faible-moyen | 1h |
| **L2** | Ajouter skill `evals-llm-observability.md` à PROMPT-ENGINEER | 🟢 Faible-moyen | 1h |
| **L3** | Ajouter skill `incident-response-llm.md` à DEVOPS-CLOUD | 🟢 Faible | 1h |
| **L4** | Créer WF-010 Post-mortem projet | 🟢 Faible | 1h |
| **L5** | Créer WF-007 Onboarding mission J1 | 🟢 Faible | 1h |
| **L6** | Auditer ux-writing + documentation-technique chez REDACTEUR-IA | 🟢 Faible | 30 min |
| **L7** | Créer AGENT-SOLUTIONS-ARCHITECT (TOGAF EA) | 🟢 Faible | 3h |

---

## 📊 Synthèse exécutive

**Verdict global :** Catalogue **excellent à la maille agent** (29/31 ≥ 4.3/5), **bon à la maille workflow** (couvre les 5 grands cas d'usage), **perfectible à la maille skill** (7 skills mal attribués, 3 doublons, 2 nomenclatures trompeuses).

**Points forts uniques :**
- model_recommande systématiquement calibré par workflow (rare)
- 31 agents avec périmètres ✅❌ explicites
- Skills très actionnables, prêts à copier-coller

**3 actions immédiates pour passer de "excellent" à "best-in-class" :**
1. **H1+H2** (1h30) : nettoyer les 7 skills mal placés + 3 doublons
2. **H3+H4** (45 min) : combler les gaps WF-001 (IA) et WF-003 (QA)
3. **M1** (1h30) : créer WF-006 Avant-vente — cas d'usage business le plus fréquent

---

## Statut d'exécution

- ✅ H1 — Réattribution skills mal placés — exécuté 2026-05-22
- ✅ H2 — Suppression skills doublons — exécuté 2026-05-22
- ✅ H3 — Renforcement WF-001 — exécuté 2026-05-22
- ✅ H4 — Ajout QA dans WF-003 — exécuté 2026-05-22
- ✅ H5 — Renommage nlp-llm — exécuté 2026-05-22
- ⏳ M1 à M6 — Planifiés
- ⏳ L1 à L7 — Planifiés

Voir [CHANGELOG.md](CHANGELOG.md) pour le journal détaillé des modifications.
