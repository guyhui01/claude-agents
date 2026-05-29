# Audit qualité — AGENT-PO-SCRUM (2ème agent groupe Agile/Produit)

> **Date** : 2026-05-28
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit (validée pilote PO-SAFE)
> **Périmètre** : 30 skills du dossier `skills/scrum/` (hors README.md)
> **Méthode** : extraction factuelle déléguée à sous-agent Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global PO-SCRUM** : Patrimoine solide en actionabilité (templates riches), mais **27% des skills nécessitent une intervention bloquante** (8 P1). 1er skill exemplaire identifié dans le catalogue : `story-mapping.md` (✓).

| Métrique | PO-SCRUM | Comparaison PO-SAFE |
|---|---|---|
| Skills audités | 30/30 | 25/25 |
| Skills ✓ conformes (3 dimensions) | **1/30** (story-mapping) | 0/25 |
| Skills P3 (cosmétique) | 5/30 (17%) | 7/25 (28%) |
| Skills P2 (enrichissement) | 16/30 (53%) | 12/25 (48%) |
| Skills P1 (bug bloquant) | **8/30 (27%)** | 6/25 (24%) |
| Skills P0 | 0/30 | 0/25 |
| Skills sans certification déclarée | **11/30 (37%)** | 7/25 (28%) |
| Skills avec ≥1 anti-pattern explicite | 12/30 (40%) | 4/25 (16%) — mieux ici |
| Skills avec ≥1 source externe citée | 3/30 (10%) — story-mapping, product-metrics-ebm, business-model-canvas | 0/25 |
| Skills transverses (non-PO-Scrum spécifiquement) | **6/30 (20%)** | 0/25 |

**Constats clés** :
- ⭐ `story-mapping.md` — Jeff Patton cité 3× + quote — modèle à dupliquer
- 🔴 `po-ai-product.md` — PSPO-AI revendiqué mais skill 40L superficiel pour un domaine stratégique 2024-2026
- 🔴 `gestion-risques.md` — 20L, aucun framework risque (PMBOK, ISO 31000) — bug critique
- 🟡 **6 skills transverses** (compte-rendu, confluence-page, email-stakeholder, recette-fonctionnelle, spec-fonctionnelle, ticket-incident) à arbitrer : rester sous PO-SCRUM, déplacer dans un dossier `skills/_transverse/` ou partager explicitement ?

---

## 2. Méthodologie

Application directe de la grille **v2.8 Agile/Produit** (cf. `audits/audit-grilles-v2.8.md` §3.1).

Spécificité PO-SCRUM : ajout d'un axe d'analyse **« skill transverse vs spécifique »** pour les skills outillage/communication partagés avec d'autres agents.

---

## 3. Tableau récapitulatif (30 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict | Note |
|---|---|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | ai-user-stories.md | 48 | ✓ | ⚠ | ✓ | ⚠ | P2 | PSPO-AI guide non sourcé |
| 2 | business-model-canvas.md | 36 | ✓ | ✓ | ⚠ | ⚠ | P2 | Osterwalder cité, années manquantes |
| 3 | coaching-pos.md | 100 | ✓ | ✓ | ✓ | ⚠ | **P3** | Riche, sources absentes |
| 4 | compte-rendu.md | 36 | ❌ | N/A | ✓ | ✗ | P2 | **Transverse** |
| 5 | confluence-page.md | 29 | ❌ | N/A | ⚠ | ✗ | P2 | **Transverse** |
| 6 | customer-discovery.md | 41 | ✓ | ⚠ | ⚠ | ⚠ | P2 | Teresa Torres OST non sourcé |
| 7 | dor-dod.md | 45 | ✓ | ⚠ | ✓ | ⚠ | P2 | INVEST implicite |
| 8 | email-stakeholder.md | 61 | ❌ | N/A | ✓ | ⚠ | P2 | **Transverse** |
| 9 | forecasting-planning.md | 83 | ✓ | ⚠ | ✓ | ⚠ | P2 | actionableagile.com cité ✓ |
| 10 | gestion-risques.md | 20 | ❌ | ✗ | ⚠ | ✗ | **P1** | 🔴 Aucun framework risque |
| 11 | hypothesis-driven.md | 81 | ✓ | ⚠ | ✓ | ⚠ | P2 | Lean Startup implicite |
| 12 | kanban-flow.md | 45 | ✓ | ✓ | ✓ | ⚠ | **P3** | PSK-I, Little's Law non attribuée |
| 13 | lean-ux.md | 66 | ✓ | ⚠ | ✓ | ⚠ | P2 | Gothelf 2016 non cité, 4 anti-patterns ✓ |
| 14 | po-acceptance-tests.md | 61 | ❌ | ✓ | ✓ | ⚠ | **P1** | 🔴 Pas de certif déclarée |
| 15 | po-ai-product.md | 40 | ✓ | ⚠ | ⚠ | ✗ | **P1** | 🔴 Domaine IA superficiel |
| 16 | po-backlog.md | 138 | ✓ | ✓ | ✓ | ⚠ | **P3** | 6 anti-patterns, riche |
| 17 | po-user-story.md | 60 | ❌ | ⚠ | ✓ | ⚠ | **P1** | 🔴 Skill core sans certif |
| 18 | priorisation-techniques.md | 239 | ✓ | ⚠ | ✓ | ⚠ | P2 | 7 techniques, 0 sourcée |
| 19 | product-metrics-ebm.md | 36 | ✓ | ✓ | ⚠ | ⚠ | **P3** | Scrum.org EBM Guide cité ✓ |
| 20 | product-vision.md | 35 | ✓ | ⚠ | ⚠ | ⚠ | **P1** | 🔴 35L pour skill stratégique |
| 21 | recette-fonctionnelle.md | 51 | ❌ | N/A | ✓ | ⚠ | P2 | **Transverse QA** |
| 22 | reporting-kpi.md | 28 | ❌ | ⚠ | ⚠ | ✗ | **P1** | 🔴 Skill très minimal |
| 23 | spec-fonctionnelle.md | 44 | ❌ | ⚠ | ✓ | ✗ | **P1** | 🔴 Sans certif, BA classique |
| 24 | stakeholder-map.md | 38 | ✓ | ⚠ | ⚠ | ⚠ | P2 | Mendelow 1991 non cité |
| 25 | stakeholder-negotiation.md | 96 | ✓ | ⚠ | ✓ | ⚠ | P2 | Getting to Yes non cité |
| 26 | stories-techniques.md | 256 | ✓ | ✓ | ✓ | ⚠ | **P3** | 8 anti-patterns, cross-links ✓ |
| 27 | **story-mapping.md** | 218 | ✓ | ✓ | ✓ | ✓ | **✓** | ⭐ **Skill exemplaire — Jeff Patton cité 3×** |
| 28 | ticket-incident.md | 41 | ❌ | N/A | ✓ | ✗ | P2 | **Transverse QA** |
| 29 | ux-sprint.md | 44 | ✓ | ⚠ | ⚠ | ⚠ | **P1** | 🔴 Skill minimal pour PSU-I |
| 30 | value-decomposition.md | 90 | ✓ | ⚠ | ✓ | ⚠ | P2 | 4 frameworks non sourcés |

---

## 4. Findings P1 — Bugs bloquants (8 skills)

### 🔴 P1.1 — `gestion-risques.md` (20L)
**Symptôme** : Skill critique PO (gestion risques projet) ramené à 20 lignes, **sans aucun framework cité** (PMBOK 7, ISO 31000, COSO ERM), RACI vide. Émojis 🟢🟡🔴 non-méthodologiques.

**Corrections** :
- Déclarer `> Certification : PSPO II · ICAgile ICP-APO`
- Référencer PMBOK 7 (Performance Domain "Uncertainty") et ISO 31000:2018
- Compléter RACI avec exemple sectoriel (luxe e-commerce ou hôtellerie digital)
- Ajouter taxonomie risques (technique, organisationnel, business, conformité, sécurité)
- Anti-patterns risques : "Matrice sans plan de mitigation", "Risk owner = chef de projet par défaut"

### 🔴 P1.2 — `po-acceptance-tests.md` (61L)
**Symptôme** : Aucune certification déclarée alors que c'est un skill PSPO I core. Gherkin bien utilisé mais BDD (Behavior-Driven Development) non sourcé, TNR non défini.

**Corrections** :
- Déclarer `> Certification : PSPO I · ISTQB CTFL`
- Citer Dan North (BDD 2006), Cucumber/SpecFlow
- Définir TNR (Tests de Non-Régression)
- Ajouter section automation vs manual (Cypress, Playwright pour e2e ; Selenium si legacy)
- Anti-patterns : "AC écrits après le code", "Gherkin avec implémentation (clicks)", "Recette validée sans TNR"

### 🔴 P1.3 — `po-ai-product.md` (40L)
**Symptôme** : **Domaine stratégique IA 2024-2026** revendiqué (PSPO-AI Scrum.org 2024+) mais skill ultra-superficiel (40 lignes). Hallucinations/biais/sécurité mentionnés sans détail. Aucune référence AI Act, NIST AI RMF, ISO 42001.

**Corrections (priorité haute)** :
- Citer PSPO-AI Guide Scrum.org (2024)
- Ajouter section "AI Risk Register" avec catégories NIST AI RMF (Govern, Map, Measure, Manage)
- Référencer AI Act UE (entrée en vigueur 2025-2026) — articulation avec rôle PO
- Détailler métriques IA : hallucination_rate, factuality score (TruthfulQA, FActScore), latence p50/p95/p99, bias detection (disparate impact ratio < 0.8 = alerte)
- Anti-patterns IA : "Feature IA sans fallback non-IA", "Pas de mesure de confiance utilisateur", "Sécurité prompt injection ignorée", "Données entraînement non documentées (data sheet absente)"
- Exemple chiffré : feature "Recommandation produit" avec seuils acceptance (precision ≥0.7, recall ≥0.6, latence ≤500ms p95, hallucination rate ≤2%)
- Liens cross : `ai-user-stories.md`, `skills/securite_ia/owasp-llm-top10.md`, `skills/juridique_ia/ai-act.md`

### 🔴 P1.4 — `po-user-story.md` (60L)
**Symptôme** : Skill **core PSPO I** sans certification déclarée. Format Connextra utilisé mais non nommé (Bill Wake 2003). INVEST mentionné non attribué.

**Corrections** :
- Déclarer `> Certification : PSPO I · PSPO II`
- Citer Connextra (format "As a..." 2001) et Bill Wake (INVEST 2003)
- Ajouter Mike Cohn "User Stories Applied" (2004) en source
- Ajouter exemples sectoriels (banque, retail, télécom) au-delà du template générique
- Anti-patterns User Stories : "Story technique formulée comme user story" (renvoyer vers stories-techniques.md), "Story sans AC testables", "Job Story confondue avec User Story"

### 🔴 P1.5 — `product-vision.md` (35L)
**Symptôme** : Skill stratégique **PSPO II/III** ramené à 35 lignes. Frameworks mentionnés (Product Vision Board, Elevator Pitch, North Star, Impact Mapping) **sans structure détaillée** — c'est un sommaire, pas un skill.

**Corrections** :
- Détailler Product Vision Board (Roman Pichler) — 5 blocs : Vision, Target Group, Needs, Product, Business Goals (template complet)
- Détailler Impact Mapping (Gojko Adzic 2012) — diagramme Goal → Actors → Impacts → Deliverables avec exemple
- Détailler North Star Metric (Sean Ellis / Lenny Rachitsky) — choix NSM, métriques satellites, anti-patterns "NSM = revenue"
- Ajouter Marty Cagan "Inspired" (2018) et "Empowered" (2021) en sources
- Cas réel (ex : NSM Airbnb = nights booked, NSM Spotify = time spent listening)
- Anti-patterns vision : "Vision figée 3 ans sans pivot", "NSM = output (features livrées)", "Vision décorrélée du business model"

### 🔴 P1.6 — `reporting-kpi.md` (28L)
**Symptôme** : 28 lignes pour un skill de reporting PO, format émoji-heavy (📊⚡📦🐛🔧). 4 KPIs listés mais aucun framework cité (DORA, EBM, AARRR, NSM).

**Corrections** :
- Déclarer `> Certification : PSPO II · ICAgile ICP-APO`
- Ajouter framework EBM (4 KVA) — lien `product-metrics-ebm.md`
- Ajouter AARRR (Acquisition/Activation/Retention/Referral/Revenue)
- Templates dashboards : Sprint report, PI report (si SAFe), Product Health Monthly
- Anti-patterns reporting : "Vélocité comme KPI engageant équipe", "Rapport sans Sprint Goal", "KPIs sans baseline ni cible"

### 🔴 P1.7 — `spec-fonctionnelle.md` (44L)
**Symptôme** : Skill classique BA (Spec Fonctionnelle Générale/Détaillée + Use Cases + BPMN) **sans certification déclarée**. Use Cases Ivar Jacobson non cités. BPMN OMG non sourcé. Skill peu Scrum-spécifique.

**Corrections** :
- Déclarer `> Certification : PSPO I · IIBA BABOK v3 (Tasks 10.34, 10.20)` — ou positionner comme partagé avec AGENT-BUSINESS-ANALYST
- Citer Ivar Jacobson (Use Cases 1992) et OMG BPMN 2.0 (2011)
- Ajouter renvois explicites vers `AGENT-BUSINESS-ANALYST.md` (frontière)
- Décider : conserver dans `skills/scrum/` ou déplacer vers `skills/business_analyst/` ?

### 🔴 P1.8 — `ux-sprint.md` (44L)
**Symptôme** : Skill **PSU-I** (Professional Scrum with UX) revendiqué mais ramené à 44 lignes pour un domaine UX/Scrum complexe. Dual Track non sourcé (Marty Cagan / Jeff Patton), Proto-Personas non détaillés.

**Corrections** :
- Citer PSU-I Guide Scrum.org
- Citer Jeff Patton (Dual Track Agile, 2006), Marty Cagan (Discovery vs Delivery)
- Détailler Proto-Personas (Babich, Nielsen Norman Group)
- Ajouter exemples concrets Figma (composants, prototypes interactifs)
- Tableau outils : Figma, FigJam, Maze (user testing), Hotjar, Lookback
- Anti-patterns UX/Scrum : "Designer hors sprint", "Pas de research continu", "Proto-Persona = persona définitif"

---

## 5. Findings P2 — Enrichissements (16 skills)

Approche commune (à appliquer skill par skill) :
- Ajouter `## Sources` en fin de skill avec attribution complète
- Ajouter `## Anti-patterns` section explicite (3-5 bullets)
- Citer auteur + année + URL/livre pour chaque framework

### Cas notables P2

#### P2.A — `priorisation-techniques.md` (239L) — Le plus volumineux du repo
Skill **incontournable** mais 7 frameworks mentionnés **sans aucune source** :
- MoSCoW (Dai Clegg 1994)
- RICE (Intercom — Sean McBride 2016)
- Kano (Noriaki Kano 1984)
- Value/Effort (Eisenhower matrix adaptée)
- Buy a Feature (Luke Hohmann — Innovation Games 2006)
- 100$ Test (Cooper / Schenkel)
- Opportunity Scoring (Tony Ulwick / Strategyn — Outcome-Driven Innovation 2005)

Action P2 : ajouter section `## Sources` avec ces 7 attributions + URLs.

#### P2.B — `value-decomposition.md` (90L)
4 frameworks majeurs non sourcés :
- Value Stream Mapping (Taiichi Ohno / Toyota Production System, Mike Rother & John Shook 1999)
- MUDA 7 gaspillages (Toyota Production System)
- SPIDR (Richard Lawrence)
- Jobs To Be Done (Tony Ulwick, Clayton Christensen 2016 "Competing Against Luck")

Action P2 : section Sources + cas réel (ex : VSM banque retail / CIB).

#### P2.C — `business-model-canvas.md` (36L)
Skill **trop court** pour un sujet stratégique. Manque :
- Animation atelier BMC (timing, matériel Miro/FigJam, déroulé 2h)
- Liens BMC ↔ VPC (Value Proposition Canvas) — Osterwalder 2014 explicite
- Exemple complet sectoriel (ex : BMC d'une fintech)
- Lien vers `product-vision.md`

---

## 6. Findings P3 — Cosmétique (5 skills)

Skills solides nécessitant uniquement compléments sources et anti-patterns.

| Skill | Action |
|---|---|
| coaching-pos.md | Citer Hersey & Blanchard (Situational Leadership 1969) + PSPO Competency Model Scrum.org |
| kanban-flow.md | Attribuer Little's Law (John D.C. Little 1961), citer Scrum+Kanban Guide |
| po-backlog.md | Attribuer INVEST (Bill Wake 2003), citer Mike Cohn "User Stories Applied" (2004) |
| product-metrics-ebm.md | Préciser version EBM Guide (2024), ajouter section AARRR (Dave McClure 2007) |
| stories-techniques.md | Citer Ward Cunningham (tech debt metaphor 1992), Martin Fowler (Refactoring) |

---

## 7. Skill exemplaire : `story-mapping.md` ⭐

**Premier skill du catalogue à atteindre le verdict ✓ sur les 3 dimensions de la grille v2.8.**

**Pourquoi il sort du lot** :
- Jeff Patton cité **3 fois** explicitement (L.1, L.21, L.28) — incluant une **quote**
- Theory + Practice + Tools : 218 lignes structurées
- Code couleur, logistique atelier (présentiel + remote), 6 étapes minutées
- Walking Skeleton, conversion Story Map → Backlog
- 6 anti-patterns explicites
- Template Miro réutilisable

**À dupliquer** : ce skill est le **modèle de référence pour la propagation v2.8** sur les 32 agents restants. Tout skill qui rejoint son niveau passe automatiquement en ✓.

---

## 8. Findings transversaux (pattern global PO-SCRUM)

### 🔴 T1 — Carence sourcing académique (similaire PO-SAFE)
- 27/30 skills (90%) sans source externe
- Exception : story-mapping (Patton), product-metrics-ebm (Scrum.org EBM), business-model-canvas (Osterwalder partiel)
- **Action** : section `## Sources` à propager (intervention v2.8.x mass — peut être semi-automatisée)

### 🔴 T2 — 11/30 skills sans certification déclarée
**Skills concernés** : compte-rendu, confluence-page, email-stakeholder, gestion-risques, po-acceptance-tests, po-user-story, recette-fonctionnelle, reporting-kpi, spec-fonctionnelle, ticket-incident, (et partiellement po-ai-product avec format inconsistant).

Recommandation certifs par skill :

| Skill | Certifs à ajouter |
|---|---|
| compte-rendu.md | PSPO I (transverse) |
| confluence-page.md | PSPO I (transverse) |
| email-stakeholder.md | PSPO I · PSPO II |
| gestion-risques.md | PSPO II · ICAgile ICP-APO |
| po-acceptance-tests.md | PSPO I · ISTQB CTFL |
| po-user-story.md | PSPO I · PSPO II |
| recette-fonctionnelle.md | PSPO I · ISTQB CTFL |
| reporting-kpi.md | PSPO II · ICAgile ICP-APO |
| spec-fonctionnelle.md | PSPO I · IIBA BABOK v3 |
| ticket-incident.md | PSPO I (transverse) |

### 🟡 T3 — PSPO-AI sous-déployé (2/30 skills seulement)
**Constat** : PSPO-AI revendiqué dans l'identité de PO-SCRUM mais seulement 2 skills l'utilisent (ai-user-stories, po-ai-product) — et po-ai-product est marqué P1.

**Action** : Identifier 3-5 skills additionnels où enrichir avec angle IA :
- `dor-dod.md` → DoD IA (tests bias, hallucination, fallback)
- `product-vision.md` → AI Strategy section
- `priorisation-techniques.md` → priorisation features IA (incertitude, coût compute)
- `forecasting-planning.md` → impact velocity sur projets IA (incertitude R&D)
- `stakeholder-negotiation.md` → expliquer IA aux stakeholders non-tech

### 🟡 T4 — 6 skills transverses non spécifiquement PO-Scrum (20%)
**Skills concernés** : compte-rendu, confluence-page, email-stakeholder, recette-fonctionnelle, spec-fonctionnelle, ticket-incident.

**Action à arbitrer** :
- **Option A** : conserver dans `skills/scrum/` avec note "[Transverse]" dans le README
- **Option B** : créer `skills/_communs/` ou `skills/_transverse/` et y déplacer
- **Option C** : déclarer le partage explicite dans le frontmatter (`> Partagé avec : AGENT-BUSINESS-ANALYST.md · AGENT-QA-AGILE.md`)

Recommandation pilote : **Option C** (déclaration partage) — moins disruptif, fait par éditions simples du frontmatter.

### 🟡 T5 — Anti-patterns présents dans 40% des skills (vs 16% PO-SAFE)
**Bonne nouvelle** : PO-SCRUM est plus avancé que PO-SAFE sur ce point. 12/30 skills ont déjà des anti-patterns explicites.

**Action** : Propager le pattern aux 18/30 skills manquants. Cible : 100% des skills avec section `## Anti-patterns`.

### 🟡 T6 — Frontières inter-skills documentées partielles
Cross-links internes existants :
- `po-backlog.md` → priorisation-techniques.md, story-mapping.md
- `stories-techniques.md` → 5 skills + safe/feature-to-story-splitting.md
- `stakeholder-map.md` → email-stakeholder.md

**Action** : Ajouter section `## Voir aussi` standardisée en fin de chaque skill.

---

## 9. Plan d'action recommandé (4 vagues)

### V1 — Cosmétique transverse PO-SCRUM (~40 min)
- T2 : Ajouter `> Certification :` sur les 11 skills concernés (correction mécanique)
- T4 : Déclarer skills transverses partagés (`> Partagé avec :` sur 6 skills)
- **Impact attendu** : 4 P1 régressent vers P2 (po-acceptance-tests, po-user-story, reporting-kpi, spec-fonctionnelle deviennent P2)
- État après V1 : 1 ✓ / 5 P3 / 20 P2 / **4 P1**

### V2 — Bugs bloquants P1 résiduels (~3-4h)
Traiter individuellement les 4 P1 restants : **gestion-risques, po-ai-product, product-vision, ux-sprint**.
Priorité haute sur `po-ai-product` car positionne PSPO-AI = différenciateur compétitif.

### V3 — Enrichissements P2 (16 skills, ~6-8h)
À planifier sur 1-2 sessions. Bundles thématiques :
- Bundle "Sources Frameworks" : priorisation-techniques + value-decomposition + business-model-canvas + customer-discovery + lean-ux + stakeholder-map + stakeholder-negotiation + hypothesis-driven + forecasting-planning
- Bundle "Anti-patterns" : 18 skills sans anti-patterns
- Bundle "Transverses" : 6 skills (clarification scope partagé)

### V4 — Mass propagation (optionnel)
- Section `## Voir aussi` standardisée sur 30 skills (mécanique)
- Mise à jour `skills/scrum/README.md` avec marqueur transverse

---

## 10. Bilan groupe Agile/Produit (2/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | Tendance groupe |
|---|---|---|---|
| Skills audités | 25 | 30 | 55/~180 total Agile (30%) |
| Verdict ✓ | 0 | 1 (story-mapping) | Émergent |
| % P1 | 24% | 27% | Stable ~25% |
| % sans certif | 28% | 37% | Bug structurel généralisé |
| % sources citées | 0% | 10% | Patrimoine en progression |
| % anti-patterns | 16% | 40% | Hétérogène |

**Apprentissages pour les 7 agents Agile restants** :
- ✅ Grille v2.8 Agile/Produit **stable** (aucun ajustement nécessaire après PO-SCRUM)
- ✅ Méthode "extraction Explore + cotation Claude" **rodée** (~30 min pour 30 skills)
- ⚠️ **Pattern P1 mécanique récurrent** : skill sans certif → corrigeable en V1 systématique
- ⚠️ **Pattern transverse** à surveiller : SCRUM-MASTER (20 skills) aura probablement aussi des skills outillage transverses

---

## 11. Méta-observations méthode v2.8

### Ce qui a fonctionné
- Délégation extraction factuelle : **53KB pour 30 skills, ~25 min**
- Grille v2.8 Agile/Produit appliquée sans modification depuis le pilote
- Identification de l'1er skill exemplaire (`story-mapping`) → preuve de concept que la grille est atteignable
- Détection automatique des skills transverses (signal d'alerte explicite dans l'extraction)

### Ce qui doit évoluer
- **Préfilter "skill < 50L sans certif"** comme P1 automatique (gain de temps de cotation)
- **Compteur de frameworks non sourcés** comme métrique systémique
- **Bibliothèque de sources** à constituer pour faciliter les enrichissements (par référentiel)

---

## 12. Annexes

### A. Sources attendues complémentaires (Scrum/PSPO)
- Connextra format (As a... I want... So that...) — Connextra 2001
- INVEST acronym — Bill Wake (2003)
- Mike Cohn "User Stories Applied" (2004)
- Mike Cohn "Agile Estimating and Planning" (2005)
- Tony Ulwick "Outcome-Driven Innovation" (2005), "Jobs To Be Done" (2016)
- Marty Cagan "Inspired" (2018), "Empowered" (2021)
- Teresa Torres "Continuous Discovery Habits" (2021)
- Jeff Patton "User Story Mapping" (2014) ⭐ déjà utilisé
- Jeff Gothelf, Josh Seiden "Lean UX" (2016, 3rd ed 2021)
- Gojko Adzic "Impact Mapping" (2012), "Specification by Example" (2011)
- Roman Pichler "Strategize" (2016), Product Vision Board
- Sean Ellis (North Star Metric)
- Eric Ries "The Lean Startup" (2011)
- Alex Osterwalder "Business Model Generation" (2010), "Value Proposition Design" (2014)
- Dan North (BDD origins, 2006)
- Lenny Rachitsky (newsletter PM moderne)
- Scrum.org EBM Guide (2024), PSPO-AI Guide (2024+)

### B. Prochaines étapes
- [ ] Validation Guy : verdicts (1 ✓ / 5 P3 / 16 P2 / 8 P1)
- [ ] Arbitrage V1 cosmétique transverse PO-SCRUM
- [ ] Décision skills transverses (option A/B/C — recommandé C)
- [ ] Décision : passer au 3ème agent (PRODUCT-MANAGER-SAFE recommandé pour terminer le triptyque PO/PM SAFe) ou consolider d'abord les V1+V2 sur PO-SAFE+PO-SCRUM ?
