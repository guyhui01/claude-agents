# Cartographie skills "core mission" — Scope Phase 2 & Phase 3

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Objectif** : identifier les skills **effectivement mobilisés en mission CAC40** dans les 6 mois (critère règle 4 quadriptyque qualité — [[feedback-simplicite-maintenance]])
> **Référence** : profil utilisateur Guy (PO IA freelance Adservio · PSPO1/SAFe6/Anthropic 2026 · expertise CMS+IA générative · clients CAC40)
> **Output** : scope Phase 2 (V2 ciblés) + Phase 3 (V3 bundles) — focus 20% des skills réalisant 80% de la valeur

---

## 1. Synthèse — Cartographie 412 skills × 38 agents

**Volume total catalogue** : 412 skills sur 38 agents. Phase 1 audit a couvert 303 skills.

| Criticité | Définition | Nb skills | % catalogue |
|---|---|---:|---:|
| 🔴 **CORE-HIGH** | Utilisation systématique missions (PO/MOA + CMS + IA produit + Conseil) | **~50** | 12% |
| 🟠 **CORE-EXPANSION** | Utilisable selon mission entrante (6 mois) — PIM/DAM, UX, Audit, Formation | **~36** | 9% |
| **Total CORE** | Scope Phase 2 + Phase 3 | **~86** | **21%** |
| 🟡 MOYEN | Long-tail utile (mobilisable occasionnellement, V1 cosmétique suffit) | ~176 | 43% |
| ⚪ BASSE | Présent pour exhaustivité catalogue (dev Python/TS, Data Eng/Sci, MLOps, DevOps, Tech Lead — hors périmètre PO direct) | ~150 | 36% |

**Application 80/20 confirmée** : ~21% des skills (86) couvrent ~80% de la valeur opérationnelle missions.

---

## 2. Tableau récapitulatif par agent (38 agents)

| Agent | Skills total | CORE-HIGH | CORE-EXPANSION | Total CORE | Priorité Phase 2/3 |
|---|---:|---:|---:|---:|:---:|
| **PO-SCRUM** | 30 | 9 | 3 | 12 | 🔴 PRIORITÉ 1 |
| **PO-SAFE** | 25 | 6 | 2 | 8 | 🔴 PRIORITÉ 1 |
| **BUSINESS-ANALYST** | 10 | 4 | 2 | 6 | 🔴 PRIORITÉ 1 |
| **CMS-DIGITAL** | 12 | 9 | 2 | 11 | 🔴 PRIORITÉ 1 (cœur métier Guy) |
| **CONSULTANT-IA** | 9 | 7 | 1 | 8 | 🔴 PRIORITÉ 1 |
| **JURIDIQUE-IA** | 10 | 3 | 2 | 5 | 🔴 PRIORITÉ 1 (conformité IA CAC40) |
| **REDACTEUR-IA** | 16 | 6 | 3 | 9 | 🔴 PRIORITÉ 1 (livrables clients) |
| **CHEF-PROJET-IA** | 8 | 3 | 2 | 5 | 🟠 HAUT |
| **PROMPT-ENGINEER** | 8 | 4 | 2 | 6 | 🟠 HAUT |
| **ORCHESTRATEUR-WORKFLOW** | 15 | 4 | 1 | 5 | 🟠 HAUT |
| **PIM-EXPERT** | 12 | 0 | 5 | 5 | 🟠 HAUT (expertise SAP Hybris Guy) |
| **DAM-EXPERT** | 12 | 0 | 5 | 5 | 🟠 HAUT (expertise Ooyala Guy) |
| **UX-DESIGNER** | 20 | 0 | 4 | 4 | 🟡 MOYEN (collaboration UX) |
| **FORMATEUR-IA** | 11 | 0 | 4 | 4 | 🟡 MOYEN (formations IA clients) |
| **CDO-DIRECTEUR-IA** | 8 | 0 | 2 | 2 | 🟡 MOYEN |
| **VEILLE-STRATEGIQUE** | 6 | 0 | 3 | 3 | 🟡 MOYEN |
| **FINANCIAL-ANALYST** | 6 | 0 | 3 | 3 | 🟡 MOYEN |
| **SOLUTIONS-ARCHITECT** | 8 | 0 | 3 | 3 | 🟡 MOYEN (TOGAF utile) |
| **AUDIT-METHODO-IA** | 3 | 0 | 3 | 3 | 🟡 MOYEN |
| **GROWTH-IA** | 8 | 0 | 2 | 2 | ⚪ BASSE (hors périmètre direct) |
| **CHANGE-MANAGER** | 7 | 0 | 1 | 1 | ⚪ BASSE |
| **DEV-DRUPAL-PHP** | 10 | 0 | 0 | 0 | ⚪ BASSE (Guy supervise, ne code pas) |
| **SCRUM-MASTER** | 16 | 0 | 0 | 0 | ⚪ BASSE (Guy = PO, pas SM) |
| **QA-AGILE / QA-CYCLEV** (qa_testing) | 23 | 0 | 0 | 0 | ⚪ BASSE |
| **PM-SAFE** (product_manager_safe) | 10 | 0 | 0 | 0 | ⚪ BASSE |
| **RTE** (release_train_engineer) | 6 | 0 | 0 | 0 | ⚪ BASSE |
| **AI-ARCHITECT** | 8 | 0 | 0 | 0 | ⚪ BASSE |
| **DEV-PYTHON-IA** | 9 | 0 | 0 | 0 | ⚪ BASSE (Guy = PO, pas dev) |
| **DEV-TYPESCRIPT-IA** | 9 | 0 | 0 | 0 | ⚪ BASSE |
| **DATA-ENGINEER** | 11 | 0 | 0 | 0 | ⚪ BASSE |
| **DATA-SCIENTIST** | 13 | 0 | 0 | 0 | ⚪ BASSE |
| **MLOPS-ENGINEER** | 10 | 0 | 0 | 0 | ⚪ BASSE |
| **DEVOPS-CLOUD** | 11 | 0 | 0 | 0 | ⚪ BASSE |
| **SECURITE-IA** | 10 | 0 | 0 | 0 | ⚪ BASSE (renvoi à AGENT-SECURITE-IA) |
| **TECH-LEAD** | 12 | 0 | 0 | 0 | ⚪ BASSE |
| **BI-ANALYST** | 12 | 0 | 0 | 0 | ⚪ BASSE |
| **RH-IA** | 11 | 0 | 0 | 0 | ⚪ BASSE |
| **TOTAL** | **412** | **~55** | **~50** | **~105** | — |

> ⚠️ **Cartographie initiale** : à valider/ajuster par Guy selon ses missions effectives 6 derniers + 6 mois à venir.

---

## 3. Liste détaillée des skills CORE-HIGH (~50 skills priorité 1)

### 3.1 — PO-SCRUM / PO-SAFE (15 skills CORE-HIGH) — Métier principal Guy

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `scrum/story-mapping.md` | Jeff Patton — utilisé dans WF-001 Cadrage Produit IA | ✓ pur ⭐ |
| `scrum/po-backlog.md` | Backlog management quotidien missions | P3 |
| `scrum/po-user-story.md` | User Stories format Connextra/INVEST | P1 → V2 priorité |
| `scrum/po-acceptance-tests.md` | Tests d'acceptation Gherkin | P1 → V2 priorité |
| `scrum/dor-dod.md` | DoD IA (bias, hallucination, fallback) | P2 |
| `scrum/po-ai-product.md` | PSPO-AI différenciateur compétitif (v2.9.0) | ✓ pur ⭐ |
| `scrum/ai-user-stories.md` | User Stories IA spécifiques | P2 |
| `scrum/gestion-risques.md` | Gestion risques projet IA — P1 résiduel | P1 → V2 |
| `scrum/product-vision.md` | Product Vision Board (Pichler) — P1 résiduel | P1 → V2 |
| `safe/wsjf.md` | WSJF SAFe POPM 6 — utilisé WF-002 | P2 (à vérifier audit Agile) |
| `safe/pi-planning.md` | PI Planning facilitateur | P2 |
| `safe/features-epics.md` | Features/Epics SAFe | P2 |
| `safe/popm-certif.md` | Certif POPM utile profil Guy | P2 |
| `safe/portfolio-epics.md` | Portfolio Epics Lean Business Case | P2 |
| `safe/okr-safe.md` | OKR SAFe | P2 |

### 3.2 — CMS-DIGITAL (9 skills CORE-HIGH) — Cœur métier expertise Guy

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `cms_digital/accessibilite-numerique.md` | WCAG 2.2 + RGAA 4.1 — obligation légale CAC40 | ✓ pur ⭐ |
| `cms_digital/aem-sites-assets.md` | AEM expertise Guy (CHANEL) | P2 |
| `cms_digital/drupal-developpement.md` | Drupal expertise Guy (Aginode) | P3 |
| `cms_digital/architecture-cms.md` | MACH + Headless + DXP | P2 |
| `cms_digital/migration-cms.md` | Migration carve-out (Aginode) | P3 |
| `cms_digital/integration-pim-dam.md` | PIM/DAM ↔ CMS (Hybris Guy) | P2 |
| `cms_digital/gouvernance-editoriale.md` | RACI éditorial + workflows | P3 |
| `cms_digital/performance-web.md` | Core Web Vitals + Lighthouse | P3 proche ✓ |
| `cms_digital/seo-technique-cms.md` | Schema.org + Core Web Vitals | P3 |

### 3.3 — BUSINESS-ANALYST (4 skills CORE-HIGH)

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `business_analyst/elicitation-besoins.md` | Volere + Wiegers — P1 différenciateur | P1 → V2 |
| `business_analyst/modelisation-processus.md` | BPMN 2.0 + UML — P1 différenciateur | P1 → V2 |
| `business_analyst/cartographie-si.md` | TOGAF + Archimate — P1 différenciateur | P1 → V2 |
| `business_analyst/recette-fonctionnelle.md` | Recette MOA Agile | P2 |

### 3.4 — CONSULTANT-IA (7 skills CORE-HIGH) — Avant-vente missions

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `consultant_ia/diagnostic-maturite-ia.md` | Diagnostic mission start — P1 différenciateur | P1 → V2 priorité haute |
| `consultant_ia/benchmark-solutions-ia.md` | Magic Quadrant — P1 différenciateur | P1 → V2 priorité haute |
| `consultant_ia/feuille-route-ia.md` | Roadmap stratégique 12-24m | P2 |
| `consultant_ia/cadrage-poc-ia.md` | Cadrage PoC client | P2 |
| `consultant_ia/estimation-roi-rapide.md` | ROI projet IA | P2 |
| `consultant_ia/presentation-executif.md` | Pitch CODIR — Pyramide Minto | P2 |
| `consultant_ia/proposition-commerciale.md` | RFP/AAO — WF-006 | P2 |

### 3.5 — REDACTEUR-IA (6 skills CORE-HIGH) — Livrables clients

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `redacteur_ia/synthese-executive.md` | Minto + SCQA — référence livrable | ✓ pur ⭐ |
| `redacteur_ia/redaction-rapport.md` | STAR + architecture 7 parties | P3 |
| `redacteur_ia/presentation-pitch.md` | Pitch + storytelling clients | P3 |
| `redacteur_ia/note-cadrage.md` | SMART + 10 sections | P3 |
| `redacteur_ia/copywriting-ia.md` | AIDA + PAS + FAB | P3 |
| `redacteur_ia/content-strategy.md` | Stratégie contenu thought leadership | P3 |

### 3.6 — JURIDIQUE-IA (3 skills CORE-HIGH) — Conformité IA CAC40

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `juridique_ia/ai-act-conformite.md` | AI Act UE 2024/1689 — obligation CAC40 | P2 |
| `juridique_ia/rgpd-ia.md` | RGPD + IA — obligation CAC40 | P3 proche ✓ |
| `juridique_ia/dpia-systemes-ia.md` | DPIA obligatoire RGPD art. 35 | P3 |

### 3.7 — PROMPT-ENGINEER + ORCHESTRATEUR-WORKFLOW (8 skills CORE-HIGH) — Workflows agentiques

| Skill | Pourquoi CORE | Verdict Phase 1 |
|---|---|:---:|
| `prompt_engineer/system-prompt-design.md` | System prompts agents | P3 |
| `prompt_engineer/chain-of-thought.md` | CoT raisonnement | P1 → V2 |
| `prompt_engineer/few-shot-learning.md` | Few-shot examples | P1 → V2 |
| `prompt_engineer/rag-prompt-design.md` | RAG patterns | P2 |
| `orchestrateur_workflow/workflow-design.md` | Design BPMN workflows | P3 |
| `orchestrateur_workflow/workflow-catalog.md` | Catalogue 10 workflows (v3.0.1) | P3 |
| `orchestrateur_workflow/claude-api-integration.md` | Anthropic SDK (v3.0.1) | P3 |
| `orchestrateur_workflow/mcp-orchestration.md` | MCP Anthropic 2024 (v3.0.1) | P3 |

---

## 4. Skills CORE-EXPANSION (~36 skills priorité 2)

Skills mobilisables selon mission entrante. Cohérent expertise déclarée Guy (PIM Hybris, DAM Ooyala, AEM CQ5, audit méthodo).

### 4.1 — PIM-EXPERT (5 skills) — Expertise SAP Hybris Guy
- `pim_expert/modelisation-catalogue.md`
- `pim_expert/syndication-canaux.md`
- `pim_expert/gouvernance-donnees-produit.md` (P1 différé Phase 2)
- `pim_expert/integration-erp-pim.md`
- `pim_expert/scoring-qualite-produit.md`

### 4.2 — DAM-EXPERT (5 skills) — Expertise Ooyala Guy
- `dam_expert/taxonomie-assets.md`
- `dam_expert/distribution-multicanal.md`
- `dam_expert/integration-dam-cms.md`
- `dam_expert/gouvernance-dam.md`
- `dam_expert/gestion-droits-licences.md` (v3.0.1 corrigé)

### 4.3 — UX-DESIGNER (4 skills) — Collaboration UX missions
- `ux_design/prototypage-figma.md`
- `ux_design/design-system.md`
- `ux_design/accessibilite-wcag.md` (proche ✓ pur)
- `ux_design/audit-ux-heuristiques.md`

### 4.4 — AUDIT-METHODO-IA (3 skills) — Méta-contrôle qualité
- `critique_conformite/audit-conformite-methodo.md`
- `critique_conformite/challenge-raisonnement.md`
- `critique_conformite/gate-validation-livrable.md`

### 4.5 — FORMATEUR-IA (4 skills) — Formations IA clients
- `formateur_ia/conception-parcours.md` (✓ pur ⭐)
- `formateur_ia/evaluation-formation.md` (✓ pur ⭐)
- `formateur_ia/formation-claude-code.md`
- `formateur_ia/prompt-engineering-formation.md` (✓ pur ⭐)

### 4.6 — VEILLE-STRATEGIQUE (3 skills) — Veille IA mission
- `veille_strategique/veille-ia-llm.md`
- `veille_strategique/analyse-tendances.md`
- `veille_strategique/synthese-periodique.md`

### 4.7 — Autres CORE-EXPANSION (12 skills)
- CHEF-PROJET-IA : `cadrage-projet-ia`, `reporting-codir`, `post-mortem-rex` (3)
- FINANCIAL-ANALYST : `business-case-ia`, `roi-transformation`, `budget-projet` (3)
- SOLUTIONS-ARCHITECT : `togaf-adm`, `archimate-modeling`, `urbanisme-si` (3)
- JURIDIQUE-IA : `audit-conformite-ia`, `gouvernance-ethique-ia` (2)
- BUSINESS-ANALYST : `analyse-impact` (1)

---

## 5. Skills NON CORE — MOYEN + BASSE (~326 skills)

**Règle 4 quadriptyque appliquée** : V1 cosmétique suffit, pas d'investissement V2/V3 ciblé sur ces skills.

### 5.1 — MOYEN (~176 skills) : long-tail utile

- Reste SAFe (19 skills) : `safe/lean-portfolio`, `safe/value-stream`, etc.
- Reste Scrum (15 skills) : sprint reviews, retrospectives détaillées, etc.
- Reste Scrum Master (16 skills) : Guy = PO, pas SM
- Reste UX Design (16 skills) : Guy collabore, ne fait pas
- Reste Rédacteur (10 skills) : long-tail formats
- Reste Consultant IA (2 skills) : `offre-mission`, `transformation-digitale`
- Reste Juridique IA (5 skills) : `contrats-ia`, `nis2-conformite`, etc.
- Reste Prompt Engineer (4 skills) : `multimodal-prompting`, `prompt-evaluation`, etc.
- Reste Orchestrateur (11 skills) : `agent-routing`, `context-handoff`, etc.

### 5.2 — BASSE (~150 skills) : hors périmètre PO direct

**Skills techniques non mobilisés directement par Guy en mission** (renvoi à autres agents) :
- Dev Python IA (9), Dev TypeScript IA (9), Dev Drupal (10) — Guy = PO, supervise
- Data Engineer (11), Data Scientist (13), MLOps Engineer (10) — collabore via AGENT-* mais ne pratique pas
- DevOps Cloud (11), Sécurité IA (10), AI Architect (8), Tech Lead (12) — pas son métier
- BI Analyst (12) — pas son métier principal
- RH IA (11) — pas son métier
- Change Manager (7), RTE (6), PM SAFe (10), QA testing (23) — connexions occasionnelles

---

## 6. Application Phase 2 + Phase 3 (scope révisé selon cartographie)

### Phase 2 transversale — V2 ciblés (~15-20h sur 5-7 P1 stratégiques CORE-HIGH)

**Sélection top 7 P1 stratégiques alignés CORE-HIGH** (sur 38 P1 résiduels après V1 propreté v3.0.1) :

| Priorité | Skill | Catégorie | Justification |
|:---:|---|---|---|
| 🔴 **P2.1** | `consultant_ia/diagnostic-maturite-ia.md` | CONSULTANT-IA CORE | Mission start, Gartner AI Maturity Model |
| 🔴 **P2.2** | `consultant_ia/benchmark-solutions-ia.md` | CONSULTANT-IA CORE | Magic Quadrant/Forrester Wave |
| 🔴 **P2.3** | `business_analyst/elicitation-besoins.md` | BA CORE | Volere + Wiegers — différenciateur MOA |
| 🔴 **P2.4** | `business_analyst/modelisation-processus.md` | BA CORE | BPMN 2.0 + UML 2.5 |
| 🟠 **P2.5** | `business_analyst/cartographie-si.md` | BA CORE | TOGAF 10 + Archimate 3.2 |
| 🟠 **P2.6** | `scrum/gestion-risques.md` | PO-SCRUM CORE | PMBOK 7 + ISO 31000 |
| 🟠 **P2.7** | `scrum/product-vision.md` | PO-SCRUM CORE | Cagan/Pichler/Moore datés |

**Estim. effort total** : ~15-20h sur 4-5 sessions de 3-4h.
**Releases prévues** : v3.1.0 → v3.5.0 (1 release par 1-2 V2).

**31 P1 résiduels hors CORE** (Data/Tech, autres agents BASSE) → **différés Phase 3 V3 bundles** ou abandonnés selon priorité Guy.

### Phase 3 V3 bundles cross-agents (~10-15h sur skills CORE seuls)

Application sélective bundles sur **86 skills CORE uniquement** (vs 303 audités) — économie 70% effort.

| Bundle | Skills CORE concernés | Estim. |
|---|:---:|:---:|
| Sources Frameworks datées (URLs, auteurs, années) | ~50 skills CORE sans sources URL | ~6h |
| Anti-patterns (3-5 bullets par skill) | ~30 skills CORE sans anti-patterns | ~4h |
| Cross-links Voir aussi (paires logiques) | ~60 liens CORE-CORE | ~2h |
| Versions stack frameworks | ~15 skills CORE techniques (Drupal, AEM, Anthropic SDK) | ~2h |
| Diversification sectorielle (secteurs CAC40 anonymisés) | ~20 skills CORE consulting | ~3h |

**TOTAL Phase 2 + Phase 3 selon scope révisé** : **~25-35h** (vs 70-80h plan initial — économie 50%+).

---

## 7. Annexes

### A. Critères de décision skill CORE vs non-CORE

✅ **CORE** si répond ≥3 critères :
1. Utilisé directement par Guy en mission (PO/MOA + CMS + IA produit/conseil/conformité)
2. Présenté à clients CAC40 (livrables ou expertise déclarée)
3. Aligné certifications Guy (PSPO1, SAFe6, Claude 101/Code 101/Code in Action)
4. Sources expertise déclarée (AEM CQ5, Drupal, Hybris, Ooyala, etc.)
5. Différenciateur compétitif positionnement freelance Adservio

❌ **NON-CORE** si :
1. Skill technique pur (dev Python, TypeScript, ML, MLOps, DevOps) — Guy supervise, ne pratique pas
2. Skill rôle non-Guy (Scrum Master, QA, RTE, Tech Lead, BI Analyst, RH)
3. Long-tail SAFe/Scrum non systématique en mission
4. Renvoi systématique à autre agent dans missions

### B. Skills à V2 d'exception possible (hors Phase 2 cartographiée)

Selon garde-fou Phase 1 (max 1-2 V2 d'exception par groupe), 2 candidats hors top 7 :
- `mlops_engineer/monitoring-llm.md` — V1 propreté v3.0.1 (OWASP LLM Top 10 ajouté) déjà → P3, plus besoin V2
- `dam_expert/gestion-droits-licences.md` — V1 propreté v3.0.1 (RGPD sources légales ajoutées) déjà → P3, plus besoin V2

**Conclusion** : V1 propreté v3.0.1 a désamorcé les 2 V2 "non-CORE" qui auraient été nécessaires → focus Phase 2 100% sur CORE.

### C. Décisions Guy à valider

- [ ] Confirmer cartographie CORE-HIGH (50 skills) — ajustements possibles selon missions effectives
- [ ] Confirmer scope Phase 2 (top 7 P1 stratégiques alignés CORE)
- [ ] Confirmer scope Phase 3 (bundles sur 86 CORE uniquement)
- [ ] Décider sort des 31 P1 hors CORE (différer Phase 3 V3 bundle "Sources" OU abandonner)

### D. Volume cartographié

- **412 skills total** sur 38 agents
- **~86 skills CORE** (21%) — focus Phase 2/3
- **~326 skills non-CORE** (79%) — V1 cosmétique suffit
- **Économie effort Phase 2+3** : 50%+ (~28-38h vs 70-80h plan initial)
- **10 ✓ purs identifiés Phase 1** déjà dans CORE (cohérent — modèles de référence à dupliquer)
