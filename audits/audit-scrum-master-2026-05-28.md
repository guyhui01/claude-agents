# Audit qualité — AGENT-SCRUM-MASTER (4ème agent groupe Agile/Produit)

> **Date** : 2026-05-28
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 20 skills du dossier `skills/scrum_master/` (hors README.md)
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global SCRUM-MASTER** : Le patrimoine est riche (2 071 lignes au total) et inclut **le 2ème skill exemplaire ✓ pur du chantier** (`planning-poker.md`). **Mais bug architectural majeur identifié** : 4 cérémonies Scrum existent à la fois dans des fichiers standalone ET dans `facilitation-ceremonies.md` (doublons quasi-totaux).

| Métrique | SCRUM-MASTER | Groupe (cumul 4 agents) |
|---|---|---|
| Skills audités | 20/20 | 85 skills |
| Skills ✓ conformes | **1/20** (planning-poker) | 2 cumulé (story-mapping + planning-poker) |
| Skills P3 (cosmétique) | 3/20 (15%) | 16 cumulé |
| Skills P2 (enrichissement) | 11/20 (55%) | 46 cumulé |
| Skills P1 (bug bloquant) | **5/20 (25%)** | 21 cumulé |
| Skills P0 | 0/20 | 0 |
| Skills sans certif | 4/20 (20%) | dont 4 ici |
| Skills avec sources externes citées | 7/20 (35%) ⭐ | mieux que PO-SAFE/PO-SCRUM |

**Découvertes majeures** :
- ⭐⭐ **`planning-poker.md`** (220L) : **2ème ✓ pur du chantier** — James Grenning (2002), Mike Cohn, 6 alternatives comparées, 8 anti-patterns, cross-links riches
- 🔴 **4 doublons architecturaux** : `daily.md` / `sprint-planning.md` / `sprint-review.md` / `retrospective.md` répliquent partiellement `facilitation-ceremonies.md` (sans certif, < 50L chacun)
- 🔴 **`change-management-agile.md`** revendique compétence change mais **n'utilise ni PROSCI ADKAR ni John Kotter** (référentiels canoniques absents)
- ⚠️ **`kanban-flow.md`** présent à la fois dans `skills/scrum_master/` ET `skills/scrum/` — possible doublon à arbitrer

**Constats positifs** :
- 35% de skills avec source externe (meilleur taux du chantier, vs 30% PM-SAFE, 10% PO-SCRUM, 0% PO-SAFE)
- Sources datées avec précision : James Grenning **2002** explicite, Norm Kerth Project Retrospectives explicite, SAFe **6.0** explicite
- Anti-patterns nombreux : 8 dans planning-poker.md, 6 dans retrospective-avancee.md

---

## 2. Tableau récapitulatif (20 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict | Note |
|---|---|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | agile-engineering.md | 101 | ✓ | ⚠ | ✓ | ⚠ | P2 | Kent Beck/Fowler non cités |
| 2 | amelioration-continue.md | 151 | ✓ | ✓ | ✓ | ⚠ | **P3** | PDCA/MUDA/VSM/Little cités |
| 3 | change-management-agile.md | 83 | ✓ | ⚠ | ✓ | ⚠ | **P1** | 🔴 PROSCI/Kotter ABSENTS |
| 4 | coaching-equipe.md | 73 | ✓ | ⚠ | ✓ | ⚠ | P2 | Tuckman sans date, Adkins absent |
| 5 | coaching-po-sm.md | 125 | ✓ | ⚠ | ✓ | ⚠ | P2 | GROW non daté |
| 6 | community-of-practice.md | 103 | ✓ | ⚠ | ✓ | ⚠ | P2 | Wenger sans date 1998 |
| 7 | conflict-resolution.md | 79 | ✓ | ✓ | ✓ | ⚠ | P2 | Lencioni/Rosenberg/Edmondson cités ✓ |
| 8 | daily.md | 27 | ❌ | ⚠ | ⚠ | ✗ | **P1** | 🔴 Doublon + 27L + 0 certif |
| 9 | facilitation-ateliers-sm.md | 150 | ✓ | ✓ | ✓ | ✓ | **P3** | Riche, Prime Directive citée |
| 10 | facilitation-ceremonies.md | 103 | ✓ | ✓ | ✓ | ⚠ | P2 | Source de vérité cérémonies |
| 11 | gestion-impediments.md | 90 | ✓ | ✓ | ✓ | ⚠ | P2 | Solide mais 0 anti-pattern |
| 12 | kanban-flow.md | 98 | ✓ | ⚠ | ✓ | ⚠ | P2 | Anderson/Little sans dates |
| 13 | metriques-agiles.md | 86 | ✓ | ⚠ | ✓ | ⚠ | P2 | DORA séparé dans agile-engineering |
| 14 | onboarding-agile.md | 148 | ✓ | ✓ | ✓ | ⚠ | P2 | Plan 30-60-90 chiffré, presque P3 |
| 15 | **planning-poker.md** | 220 | ✓ | ✓ | ✓ | ✓ | **✓** | ⭐⭐ **Skill exemplaire (2ème du repo)** |
| 16 | retrospective.md | 49 | ❌ | ⚠ | ⚠ | ✗ | **P1** | 🔴 Doublon + 49L + 0 certif |
| 17 | retrospective-avancee.md | 143 | ✓ | ✓ | ✓ | ✓ | **P3** | Norm Kerth cité, 6 anti-patterns |
| 18 | scaling-safe-ssm.md | 86 | ✓ | ✓ | ✓ | ⚠ | P2 | SAFe 6.0 cité ✓ |
| 19 | sprint-planning.md | 34 | ❌ | ⚠ | ⚠ | ✗ | **P1** | 🔴 Doublon + 34L + 0 certif |
| 20 | sprint-review.md | 37 | ❌ | ⚠ | ✓ | ✗ | **P1** | 🔴 Doublon + 37L + 0 certif |

---

## 3. Skill exemplaire : `planning-poker.md` ⭐⭐ — 2ème ✓ pur du chantier

**Pourquoi il atteint le verdict ✓** :
- Source datée précisément : **James Grenning (2002)** L.15 + Mike Cohn / Mountain Goat Software
- Wideband Delphi mentionné L.16 (origine académique)
- **6 alternatives comparées** : T-shirt, #NoEstimates, Affinity, Magic, Bucket System
- Adaptation SAFe explicite (Story Points Normalisés, démarche calibration ART)
- **8 anti-patterns explicites** : Anchoring, SM voting, PO voting, HiPPO bias, moyenne automatique, conversion SP→heures, comparer vélocité entre équipes, bonus vélocité↑
- Cross-links riches L.198-205 vers 5 skills connexes
- 220 lignes structurées, exemples chiffrés, outils digitaux comparés

**Avec story-mapping.md (PO-SCRUM), ce sont les 2 skills modèles à dupliquer sur les 32 agents restants.**

---

## 4. Bug architectural — 4 doublons cérémonies

### Constat

| Cérémonie | Skill standalone | Vol. | Cert. | Skill central équivalent |
|---|---|---:|---|---|
| Daily Scrum | `daily.md` | 27L | ❌ | `facilitation-ceremonies.md` L.28-43 |
| Sprint Planning | `sprint-planning.md` | 34L | ❌ | `facilitation-ceremonies.md` L.9-26 |
| Sprint Review | `sprint-review.md` | 37L | ❌ | `facilitation-ceremonies.md` L.45-57 |
| Sprint Retrospective | `retrospective.md` | 49L | ❌ | `facilitation-ceremonies.md` L.59-79 + `retrospective-avancee.md` (143L) |

**Pattern systémique** : 4 fichiers < 50L, **tous sans certification**, partiellement redondants avec `facilitation-ceremonies.md`. Le pattern "sans certif" est cohérent avec leur statut de doublon — ce ne sont pas vraiment des skills mais des résumés extraits.

### Décision architecturale requise

3 options à arbitrer avec Guy :

**Option A — Suppression (20 → 16 skills)**
- Supprimer les 4 doublons
- `facilitation-ceremonies.md` devient source de vérité unique pour les cérémonies
- `retrospective-avancee.md` reste pour le coaching avancé
- ✅ Catalogue clean, pas de redondance
- ❌ Perte d'entry points granulaires (un PO cherchant "comment animer un Daily" perd un fichier dédié)

**Option B — Transformer en stubs (référence rapide)**
- Garder les 4 doublons mais réduire à un quick-reference (<30L)
- Ajouter en tête : `> Source de vérité : facilitation-ceremonies.md L.XX-XX`
- Ajouter certifications déclarées
- ✅ Conserve les entry points granulaires
- ⚠️ Maintient la redondance, charge de maintenance ↑

**Option C — Enrichir comme skills à part entière**
- Garder les 4 et leur ajouter contenu propre (anti-patterns, scripts détaillés, cas)
- Réduire `facilitation-ceremonies.md` à un index/sommaire
- ✅ Skills granulaires complets
- ❌ Travail de refactoring conséquent

**Ma recommandation** : **Option A** (suppression) — alignée avec ton principe "agents nets et certifiants" + facilite la maintenance + cohérente avec [[feedback_safe_conformity]] (qualité > quantité).

---

## 5. Findings P1 — Bugs bloquants (5 skills)

### 🔴 P1.1 — `change-management-agile.md` (83L) — Référentiel canonique absent

**Symptôme** : Skill change management revendiquant PSM III + A-CSM + ICAgile ICP-ATF + SAFe SSM mais **PROSCI ADKAR absent** (référentiel n°1 mondial change management) et **John Kotter "Leading Change" 1995/2012 absent**. Kübler-Ross utilisé (courbe du deuil) → mauvais référentiel pour transformation Agile (Kübler-Ross = deuil, pas changement organisationnel).

**Corrections** :
- Ajouter PROSCI ADKAR (Awareness → Desire → Knowledge → Ability → Reinforcement) avec lien prosci.com
- Ajouter John Kotter 8 étapes "Leading Change" (1995, 2nd ed 2012)
- Citer Diffusion of Innovations (Everett Rogers 1962) avec date
- Garder Kübler-Ross mais clarifier : utile pour résistance individuelle, pas pour transformation organisationnelle
- Référencer Lyssa Adkins "Coaching Agile Teams" (2010) pour la transformation Agile
- Ajouter 3-5 anti-patterns transformation : "Big Bang Agile", "Forcing teams without Why", "Sponsor absent", "No reinforcement post-go-live", "Métriques succès non définies"

### 🔴 P1.2 — `daily.md` (27L) — Doublon + certif absente
Cf. §4 (décision architecturale). Si Option A : suppression. Si Option B : ajouter `> Certification : PSM I · CSM` + `> Source de vérité : facilitation-ceremonies.md L.28-43`.

### 🔴 P1.3 — `retrospective.md` (49L) — Doublon + certif absente
Cf. §4. Si Option A : suppression (couvert par `retrospective-avancee.md` + `facilitation-ceremonies.md`). Si Option B : stub avec renvoi.

### 🔴 P1.4 — `sprint-planning.md` (34L) — Doublon + certif absente
Cf. §4. Suppression recommandée (couvert par facilitation-ceremonies.md L.9-26).

### 🔴 P1.5 — `sprint-review.md` (37L) — Doublon + certif absente
Cf. §4. Suppression recommandée (couvert par facilitation-ceremonies.md L.45-57).

---

## 6. Findings P2 — Enrichissements (11 skills)

Approche commune : ajouter `## Sources` + `## Anti-patterns` quand absents. Cas notables :

### P2.A — `agile-engineering.md` (101L)
- Citer Kent Beck "Extreme Programming Explained" (1999, 2nd ed 2004)
- Citer Martin Fowler "Refactoring" (1999, 2nd ed 2018)
- Citer Nicole Forsgren et al. "Accelerate" (2018) pour DORA
- Anti-patterns engineering : "TDD optionnel", "Pair programming jamais imposé", "Tech debt sans tracking"

### P2.B — `coaching-equipe.md` (73L)
- **Citer Lyssa Adkins "Coaching Agile Teams" (2010)** — référence n°1 absente
- Citer Geoff Watts "Scrum Mastery" (2013)
- Citer Bruce Tuckman "Developmental Sequence in Small Groups" (1965) + version 1977 (5 stages)
- Anti-patterns coaching : "Coach qui donne les réponses", "Coaching individuel sans coaching équipe", "Pas de contrat de coaching explicite"

### P2.C — `conflict-resolution.md` (79L)
- Citer **Thomas-Kilmann Conflict Mode Instrument (TKI)** (1974) — référentiel canonique absent
- Citer Patrick Lencioni "The Five Dysfunctions of a Team" (2002) avec date
- Citer Marshall Rosenberg "Nonviolent Communication" (2003)
- Citer Amy Edmondson "The Fearless Organization" (2018) — sécurité psychologique
- Anti-patterns conflits : "SM médiateur sans formation", "Conflit étouffé en rétro", "Court-circuit hiérarchique"

### P2.D — `kanban-flow.md` (98L)
- Citer David J. Anderson "Kanban: Successful Evolutionary Change for Your Technology Business" (2010)
- Citer J.D.C. Little (1961) — Little's Law origine
- **Vérifier doublon avec `skills/scrum/kanban-flow.md`** (même nom de fichier, contextes différents)
- Anti-patterns kanban : "WIP limits négociés à la baisse", "Classes de service mélangées", "CFD non revu"

### P2.E — `metriques-agiles.md` (86L)
- Lier vers `agile-engineering.md` DORA (éviter duplication)
- Citer Forsgren "Accelerate" + DORA dora.dev
- Anti-patterns métriques : "Velocity comme KPI engageant", "Comparer équipes sur velocity", "Métriques sans contexte"

### P2.F — `onboarding-agile.md` (148L)
- Excellent skill (Working Agreement, plan 30-60-90 KPIs chiffrés) — proche P3
- Manque uniquement : anti-patterns onboarding, sources Scrum Guide 2020 explicite, Geoff Watts pour mentoring

### P2.G — `facilitation-ceremonies.md` (103L)
- Si Option A retenue, ce skill devient source de vérité unique → enrichir (durées exactes, anti-patterns par cérémonie, formats rétro développés)

### P2.H — `community-of-practice.md` (103L)
- Citer Etienne Wenger "Communities of Practice: Learning, Meaning, and Identity" (1998)
- Lien explicite vers Spotify Model (Guilds/Chapters)
- Anti-patterns CoP : "CoP sans facilitateur dédié", "Participation imposée", "Pas de capitalisation transverse"

### P2.I — `coaching-po-sm.md` (125L)
- Citer John Whitmore "Coaching for Performance" (1992) pour GROW
- Citer Marty Cagan "Empowered" (2021) pour coaching PO
- Citer Roman Pichler "Strategize" (2016) pour vision PO

### P2.J — `gestion-impediments.md` (90L)
- Anti-patterns impediments : "Impediment Backlog non revu en daily", "Escalade sans suivi", "SM résout sans coacher"
- Lier scaling-safe-ssm.md (SoS pour escalade cross-team)

### P2.K — `scaling-safe-ssm.md` (86L)
- Référencer SAFe Scrum Master training officiel
- Citer Dean Leffingwell (créateur SAFe)
- Anti-patterns SAFe SM : "SSM = facilitateur PI Planning only", "SoS sans RTE", "I&A workshop sans actions"

---

## 7. Findings P3 — Cosmétique (3 skills)

### P3.1 — `amelioration-continue.md` (151L)
- Citer Edwards Deming PDCA (1950s, "Out of the Crisis" 1986)
- Citer Taiichi Ohno (MUDA — Toyota Production System années 1950)
- Citer Mike Rother & John Shook "Learning to See" (1999) pour VSM
- Anti-patterns amélioration : "Kaizen Event sans suivi", "Métriques health non revue", "PDCA cassé après Plan"

### P3.2 — `facilitation-ateliers-sm.md` (150L)
- Citer Henri Lipmanowicz & Keith McCandless "The Surprising Power of Liberating Structures" (2013)
- Anti-patterns facilitation : déjà 3 présents (monopolisation, tour en rond, conflit ouvert) — ajouter "Facilitateur expert sur le fond"

### P3.3 — `retrospective-avancee.md` (143L)
- Citer **Esther Derby & Diana Larsen "Agile Retrospectives" (2006)** — livre référent absent
- Citer Norm Kerth "Project Retrospectives" (2001) — actuellement implicite L.117
- Tous les autres éléments déjà excellents

---

## 8. Findings transversaux SCRUM-MASTER

### 🔴 T1 — Doublons architecturaux (4 skills)
Cf. §4. Décision architecturale requise.

### 🟡 T2 — Possible doublon `kanban-flow.md` inter-dossiers
- `skills/scrum_master/kanban-flow.md` (98L) — focus SM facilitation Kanban
- `skills/scrum/kanban-flow.md` (45L, audité dans PO-SCRUM) — focus PO/Scrum+Kanban

**Action** : Vérifier le delta (potentiellement complémentaires : facilitation vs gestion PO). Si redondants, fusionner. Si complémentaires, ajouter cross-links.

### 🟡 T3 — Lyssa Adkins absente partout
La référence n°1 pour coaching d'équipe Agile (Coaching Agile Teams, 2010) est citée **0 fois** sur 20 skills SCRUM-MASTER. Anomalie : un SM certifié PSM III/A-CSM connaît Adkins.

**Action** : citer dans coaching-equipe.md, coaching-po-sm.md, facilitation-ceremonies.md, retrospective-avancee.md.

### 🟡 T4 — PROSCI ADKAR / John Kotter absents
Cf. P1.1. Bug référentiel sur skill change-management.

### 🟢 T5 — Sources externes : meilleur taux du chantier (35%)
SCRUM-MASTER est en tête : 7/20 skills avec source externe (vs 0% PO-SAFE, 10% PO-SCRUM, 30% PM-SAFE).
- Sources datées explicites : James Grenning 2002 ✓, SAFe 6.0 ✓, Norm Kerth ✓
- Sources implicites : Lencioni, Rosenberg, Edmondson, Anderson, Tuckman, Wenger

**Action V3** : juste compléter avec les dates et URLs (intervention rapide).

### 🟡 T6 — Anti-patterns : hétérogène
- planning-poker.md : 8 anti-patterns ⭐
- retrospective-avancee.md : 6 anti-patterns ⭐
- facilitation-ateliers-sm.md : 3 anti-patterns
- 4 skills : 0 anti-pattern

**Action V3** : propager le pattern sur 12 skills manquants.

---

## 9. Plan d'action recommandé

### V1 — Décision architecturale (arbitrage Guy nécessaire)
- 🔴 Décider Option A/B/C pour les 4 doublons cérémonies
- Si Option A : supprimer 4 fichiers → 5 P1 → 1 P1 résiduel (change-management-agile)
- Si Option B : éditer 4 fichiers (ajouter certif + renvoi) → 5 P1 → 1 P1 résiduel
- Si Option C : reporter à V2 (refactoring lourd)

### V2 — P1 résiduels
- `change-management-agile.md` : ajouter PROSCI ADKAR + John Kotter + Lyssa Adkins (~30 min)

### V3 — Enrichissements P2 (11 skills, ~5-6h)
- Bundle "Sources Frameworks" : 11 skills à sourcer
- Bundle "Anti-patterns" : 12 skills à enrichir
- Bundle "Lyssa Adkins" : 4 skills à enrichir (coaching-equipe, coaching-po-sm, facilitation-ceremonies, retrospective-avancee)

### V4 — Cosmétique P3 (3 skills)
- Compléter dates et titres ouvrages sur amelioration-continue, facilitation-ateliers-sm, retrospective-avancee

---

## 10. Bilan groupe Agile/Produit (4/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SCRUM-MASTER | Cumul 4 agents |
|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | **85** |
| Verdict ✓ | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | **2** |
| P1 (%) | 24% | 27% | 20% | **25%** | 25% |
| % sans certif | 28% | 37% | 0% | 20% | 22% |
| % sources externes | 0% | 10% | 30% | **35%** ⭐ | 14% |

**Tendance émergente** :
- Plus l'agent est récent / mature, plus le taux de sources externes monte (0% → 35%)
- Les bugs architecturaux apparaissent dans les 2 derniers audits (PM-SAFE confusion scope, SM doublons cérémonies) — pattern à surveiller sur les 5 agents restants

**Apprentissages pour les 5 agents Agile restants** (RELEASE-TRAIN-ENGINEER, BUSINESS-ANALYST, QA-AGILE, QA-CYCLEV, CHANGE-MANAGER) :
- ✅ Grille v2.8 toujours stable
- ⚠️ Vérifier systématiquement les doublons inter-dossiers (kanban-flow potentiel doublon)
- ⚠️ Vérifier la conformité Agent header (bug PM-SAFE peut se reproduire)
- ⚠️ Pour CHANGE-MANAGER : anticiper la confrontation aux référentiels canoniques PROSCI/Kotter/ADKAR

---

## 11. Annexes

### A. Sources attendues complémentaires SCRUM-MASTER
- Lyssa Adkins "Coaching Agile Teams" (2010)
- Geoff Watts "Scrum Mastery" (2013), "Product Mastery" (2017)
- Esther Derby & Diana Larsen "Agile Retrospectives: Making Good Teams Great" (2006)
- Norm Kerth "Project Retrospectives: A Handbook for Team Reviews" (2001)
- Kent Beck "Extreme Programming Explained" (1999, 2nd ed 2004)
- Martin Fowler "Refactoring" (1999, 2nd ed 2018)
- Nicole Forsgren, Jez Humble, Gene Kim "Accelerate" (2018)
- David J. Anderson "Kanban: Successful Evolutionary Change" (2010)
- Patrick Lencioni "The Five Dysfunctions of a Team" (2002)
- Marshall Rosenberg "Nonviolent Communication" (3rd ed 2015)
- Amy Edmondson "The Fearless Organization" (2018), "Teaming" (2012)
- Bruce Tuckman "Developmental Sequence in Small Groups" (1965, augmented 1977)
- Thomas-Kilmann Conflict Mode Instrument (1974) — Kilmann Diagnostics
- PROSCI ADKAR — prosci.com (Jeff Hiatt 2003)
- John Kotter "Leading Change" (1995, 2nd ed 2012)
- Everett Rogers "Diffusion of Innovations" (1962, 5th ed 2003)
- Etienne Wenger "Communities of Practice" (1998)
- James Grenning "Planning Poker" (paper 2002) ✓ déjà cité
- Mike Cohn "Agile Estimating and Planning" (2005) ✓ déjà cité
- Liberating Structures (Henri Lipmanowicz & Keith McCandless 2013)
- John Whitmore "Coaching for Performance" (1992, 5th ed 2017) — GROW model
- W. Edwards Deming "Out of the Crisis" (1986)
- Taiichi Ohno "Toyota Production System" (1988)

### B. Prochaines étapes
- [ ] **Arbitrage Guy : Option A/B/C pour les 4 doublons cérémonies**
- [ ] V1 selon arbitrage
- [ ] V2 P1 résiduel : change-management-agile (~30 min)
- [ ] Décision : 5ème agent Agile/Produit (RELEASE-TRAIN-ENGINEER recommandé pour boucler trio PO/PM/RTE) ?
