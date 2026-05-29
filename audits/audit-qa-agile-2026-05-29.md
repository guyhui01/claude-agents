# Audit qualité — AGENT-QA-AGILE (7ème agent groupe Agile/Produit)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 10 skills spécifiques QA-AGILE dans le dossier mutualisé `skills/qa_testing/` (le dossier compte 23 skills + 1 README ; 13 sont réservés à QA-CYCLEV)
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global QA-AGILE** : Patrimoine actionnable (templates riches Gherkin, DoD, dashboard) mais **bug structurel record** : **10/10 skills sans certification en en-tête** alors que QA-AGILE revendique **8 certifications ISTQB** dans son agent file.

| Métrique | QA-AGILE | Record chantier |
|---|---|---|
| Skills audités | 10/10 | — |
| Skills ✓ purs | 0/10 | — |
| Skills P3 (cosmétique) | 0/10 | — |
| Skills P2 (enrichissement) | 0/10 | — |
| Skills P1 (bug bloquant) | **10/10 (100%)** ⚠️ | **PIRE TAUX DU CHANTIER** |
| Skills P0 | 0/10 | — |
| Skills sans certif | **10/10 (100%)** ⚠️ | record (vs 0% PM-SAFE/RTE/BA) |
| Skills avec source datée | 0/10 | — |
| Skills avec anti-pattern explicite | 2/10 (tests-ia ⭐ 8, retrospective-qa 5) | — |

**Bonne nouvelle paradoxale** : Les 10 P1 sont **mécaniques** (manque de certif en en-tête). Une V1 cosmétique transverse (~30 min) régressera **10 P1 → 10 P2** quasi-instantanément. C'est le pattern le plus rapide à corriger du chantier.

**Constats clés** :
- 🔴 **Bug structurel systémique** : agent QA-AGILE revendique 8 ISTQB certs (CTFL, CTFL-AT, CTAL-ATT, CTAL-TM, CTAL-TA, CT-TAE, CT-MBT, CT-AI) mais **aucune n'apparaît dans les en-têtes des skills**
- ⭐ `tests-ia.md` = **8 anti-patterns IA explicites** (non-déterminisme, dérive, biais, boîte noire, hallucinations, prompt injections...) — meilleur skill anti-patterns du chantier
- ⭐ `retrospective-qa.md` = 5 anti-patterns explicites (tests trop tard, flaky, couverture, critères flous, post-démo)
- 🟢 Templates riches : Gherkin (bdd-gherkin, atdd-sprint), DoD 3 niveaux (dod-qualite), Pyramide auto + pipeline (pyramide-automatisation), Dashboard (metriques-qualite)
- 🟡 **Référentiels QA Agile canoniques absents** : Dan North (BDD 2006), Kent Beck (TDD 2003), James Bach (SBTM 2000), Lisa Crispin & Janet Gregory ("Agile Testing" 2009), Gojko Adzic (3 Amigos populariseur)
- 🟡 **ISTQB CTFL-AT absent partout** — ironique pour un agent QA Agile ISTQB

---

## 2. Tableau récapitulatif (10 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict | Raison P1 |
|---|---|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | strategie-agile.md | 47 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif |
| 2 | bdd-gherkin.md | 70 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif + Dan North absent |
| 3 | tests-exploratoires.md | 55 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif + James Bach absent |
| 4 | dod-qualite.md | 54 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif |
| 5 | pyramide-automatisation.md | 56 | ❌ | ✓ | ✓ | ⚠ | **P1** | Sans certif (mais Mike Cohn cité ✓) |
| 6 | atdd-sprint.md | 58 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif + Gojko Adzic absent |
| 7 | regression-cicd.md | 50 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif |
| 8 | metriques-qualite.md | 46 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif + cibles non sourcées |
| 9 | retrospective-qa.md | 48 | ❌ | ⚠ | ✓ | ✓ | **P1** | Sans certif (5 anti-patterns ⭐) |
| 10 | tests-ia.md | 84 | ❌ | ⚠ | ✓ | ✓ | **P1** | Sans certif (8 anti-patterns ⭐) |

---

## 3. V1 cosmétique transverse — Action prioritaire (~30 min)

Mapping certifs/agent par skill (déduit d'AGENT-QA-AGILE.md table + AGENT-QA-CYCLEV à venir) :

| Skill | Certifs à ajouter | Agents partagés |
|---|---|---|
| strategie-agile.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| bdd-gherkin.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| tests-exploratoires.md | CTFL-AT · CTAL-TA | AGENT-QA-AGILE.md (à vérifier si partagé QA-CYCLEV) |
| dod-qualite.md | CTFL-AT · CTAL-TM | AGENT-QA-AGILE.md |
| pyramide-automatisation.md | CT-TAE (Test Automation Engineer) · CTAL-ATT | AGENT-QA-AGILE.md |
| atdd-sprint.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| regression-cicd.md | CT-TAE · CTAL-ATT | AGENT-QA-AGILE.md (à vérifier QA-CYCLEV) |
| metriques-qualite.md | CTAL-TM · CTFL-AT | AGENT-QA-AGILE.md |
| retrospective-qa.md | CTFL-AT · CTAL-TM | AGENT-QA-AGILE.md |
| tests-ia.md | CT-AI · CT-MBT (Model-Based Tester) | AGENT-QA-AGILE.md |

**Impact attendu V1** : 10 P1 → 10 P2 (le contenu reste à enrichir mais la structure devient conforme). Pattern identique à PO-SCRUM (V1 mécanique 10 skills → 4 P1 régressés).

---

## 4. Findings P2 latents (après V1 — pour V3)

Pour chaque skill, ajouter `## Sources` + `## Anti-patterns` quand absents :

### P2.A — `strategie-agile.md`
- Citer Brian Marick "Agile Testing Quadrants" (2003) — agile testing matrix
- Citer Lisa Crispin & Janet Gregory "Agile Testing: A Practical Guide" (2009, 2nd ed 2022)
- Anti-patterns : "Tests après code", "QA en silo", "Pas de shift-right (production monitoring)"

### P2.B — `bdd-gherkin.md`
- Citer **Dan North** (créateur BDD, blog post "Introducing BDD" 2006)
- Citer Aslak Hellesøy (créateur Cucumber 2008)
- Citer Gojko Adzic "Specification by Example" (2011), "Bridging the Communication Gap" (2009)
- Anti-patterns : "Scénarios couplés au code (IDs HTML)", "Background trop chargé", "Scenario Outline avec >50 lignes d'exemples"

### P2.C — `tests-exploratoires.md`
- Citer **James Bach** (créateur Session-Based Test Management, 2000)
- Citer Cem Kaner (testing thought leader)
- Citer ISTQB CTFL v4.0 syllabus (2023) section 4.4 Exploratory Testing
- Anti-patterns : "Tests exploratoires comme test principal", "Sessions sans charter", "Pas de timeboxing 60-90 min"

### P2.D — `dod-qualite.md`
- Citer Scrum Guide 2020 (Ken Schwaber, Jeff Sutherland) pour DoD définition
- Anti-patterns : "DoD négociable", "DoD différente entre équipes même ART", "DoD sans critère qualité testable"

### P2.E — `pyramide-automatisation.md`
- Citer **Mike Cohn "Succeeding with Agile" (2009)** — Test Pyramid original
- Citer Martin Fowler "Test Pyramid" blog post (2012)
- Citer ISTQB CT-TAE (Certified Tester Test Automation Engineer, 2016) syllabus
- Anti-patterns : "Inverted Pyramid (E2E majoritaire)", "Pyramide sans Integration tests", "Tests UI sans page object pattern", "ROI maintenance non calculé"

### P2.F — `atdd-sprint.md`
- Citer Gojko Adzic (popularisateur "Three Amigos" — Specification by Example 2011)
- Citer ATDD : Markus Gärtner "ATDD by Example" (2012)
- Anti-patterns : "3 Amigos sans PO", "ATDD sans automatisation", "Critères découverts en sprint review"

### P2.G — `regression-cicd.md`
- Citer ISTQB CTFL v4.0 section 4.3 Regression Testing
- Citer Forsgren et al. "Accelerate" (2018) — DORA Change Failure Rate
- Anti-patterns : "Smoke tests > 10 min", "Flaky tests ignorés > 1 sprint", "Régression manuelle par défaut"

### P2.H — `metriques-qualite.md`
- Citer ISTQB CTAL-TM (Test Manager) — métriques qualité
- Justifier cibles : "< 10% échappement" (industry benchmark), "> 70% couverture" (Mike Cohn pyramide)
- Anti-patterns : "Métriques sans contexte", "Velocity tests confondue avec velocity dev"

### P2.I — `retrospective-qa.md`
- Citer Esther Derby & Diana Larsen "Agile Retrospectives" (2006)
- Cross-link vers `skills/scrum_master/retrospective-avancee.md` (formats avancés)
- Forces actuelles : déjà 5 anti-patterns explicites ⭐

### P2.J — `tests-ia.md`
- Citer ISTQB CT-AI (Certified Tester AI Testing) v1.0 (2021)
- Citer NIST AI RMF (Risk Management Framework 2023) pour bias testing
- Citer OWASP LLM Top 10 (pour prompt injections)
- Forces actuelles : déjà 8 anti-patterns explicites ⭐ (record du chantier)

---

## 5. Findings transversaux QA-AGILE

### 🔴 T1 — Pattern record : 100% sans certif en en-tête
**Action V1 immédiate** : 10 éditions mécaniques (~30 min) pour régresser 10 P1 → 10 P2.

### 🟡 T2 — Dossier mutualisé qa_testing — Vérification de cohérence
- 10 skills audités côté QA-AGILE
- 13 skills réservés à QA-CYCLEV (à auditer au prochain agent)
- Risque : skills mutualisés avec en-têtes ambigus

**Action V1** : Pour les skills qui pourraient être partagés (ex : `tests-exploratoires`, `regression-cicd`, `metriques-qualite`), déclarer explicitement dans l'en-tête `> Agents : AGENT-QA-AGILE.md · AGENT-QA-CYCLEV.md` si pertinent.

### 🟡 T3 — Référentiels canoniques QA Agile absents
Liste exhaustive :
- Dan North (BDD 2006), Aslak Hellesøy (Cucumber 2008)
- Kent Beck (TDD 2003), Martin Fowler (Refactoring/Test Pyramid)
- James Bach (SBTM 2000), Cem Kaner
- Lisa Crispin & Janet Gregory (Agile Testing 2009)
- Mike Cohn (Test Pyramid 2009) — 1 mention sans date
- Gojko Adzic (Specification by Example 2011)
- Esther Derby & Diana Larsen (Agile Retrospectives 2006)
- Markus Gärtner (ATDD by Example 2012)

**Action V3** : campagne de sourcing systémique.

### 🟡 T4 — ISTQB CTFL-AT absent partout
Ironique pour l'agent "QA Testeur Expert ISTQB Agile". Le syllabus ISTQB CTFL-AT (2014, révisé 2023) couvre tous les sujets traités par QA-AGILE (BDD, ATDD, tests exploratoires, DoD, pyramide). À citer dans chaque skill.

### 🟡 T5 — Aucun renvoi inter-agent
0/10 skills citent AGENT-PO-SCRUM, AGENT-QA-CYCLEV, AGENT-TECH-LEAD, AGENT-DEV-PYTHON-IA. À corriger en V3.

### 🟢 T6 — Forces remarquables
- 8 anti-patterns IA explicites dans `tests-ia.md` (record)
- 5 anti-patterns retro dans `retrospective-qa.md`
- Templates Gherkin de qualité production
- DoD 3 niveaux (US/Sprint/Release) bien structurée
- Pyramide automatisation avec critères auto/non-auto explicites

---

## 6. Plan d'action recommandé

### V1 — Cosmétique transverse (~30 min, intervention mécanique)
10 éditions : ajout `> Certifications :` + `> Agent :` (avec note partage si pertinent).
**Impact** : 10 P1 → 10 P2.

### V2 (après V1) — Aucun P1 résiduel attendu
Le pattern QA-AGILE est unique : tous les P1 sont mécaniques (certif). V1 suffit à les résoudre.

### V3 — Enrichissements P2 (10 skills après V1, ~5-6h)
- Bundle "Sources Frameworks QA Agile" : 10 skills à sourcer (Dan North, Bach, Crispin/Gregory, Adzic, etc.)
- Bundle "Anti-patterns" : 8 skills à enrichir (tests-ia + retrospective-qa déjà excellents)
- Bundle "Cross-links" : 10 skills à enrichir avec renvois inter-agents

---

## 7. Bilan groupe Agile/Produit (7/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | QA-AGILE | **Cumul 7** |
|---|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | 10 | **112** |
| Verdicts ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | 0 | **2** |
| % P1 | 24% | 27% | 20% | 25% | 14% | 40% | **100%** ⚠️ | 35% |
| % skills sans certif | 28% | 37% | 0% | 20% | 0% | 0% | **100%** ⚠️ | 22% |
| % anti-patterns explicites | 16% | 40% | 20% | 60% | 0% | 0% | 20% | — |

**Pattern QA-AGILE unique** : tous les P1 sont **trivialement résolvables en V1 mécanique**. Contrairement à BA (où P1 = volume insuffisant = refonte profonde V2), QA-AGILE est en réalité à **80-90% prêt** une fois la V1 appliquée.

**Apprentissages pour les 2 derniers agents Agile** :
- QA-CYCLEV partage le dossier `qa_testing/` — anticiper même pattern "0 certif" sur les 13 skills restants
- CHANGE-MANAGER : confronter à PROSCI/Kotter (déjà vu absent dans 2 skills BA/SM)

---

## 8. Prochaines étapes

- [ ] **V1 immédiate** : 10 éditions certifs sur les 10 skills QA-AGILE (~30 min)
- [ ] Commit v2.8.4 (audit + V1)
- [ ] Enchaîner audit QA-CYCLEV (13 skills restants dans `qa_testing/`)
- [ ] Décision : V1 cumulée QA-CYCLEV au même moment (cohérence dossier mutualisé) ?
