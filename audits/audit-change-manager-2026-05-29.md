# Audit qualité — AGENT-CHANGE-MANAGER (9ème et dernier agent groupe Agile/Produit)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 7 skills du dossier `skills/change_manager/` (hors README.md) + analyse triplon thématique
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal + comparaison croisée BA/SM/CM

---

## 1. Synthèse exécutive

**Verdict global CHANGE-MANAGER** : **Premier agent du chantier sans aucun P1**. Patrimoine cohérent (PROSCI ADKAR sur 6/7 skills) avec actionabilité forte (matrices, KPIs chiffrés, tableaux pluriels). Mais profondeur faible (John Kotter, Lewin, Bridges, McKinsey 7S absents).

| Métrique | CHANGE-MANAGER | Comparaison groupe |
|---|---|---|
| Skills audités | 7/7 | 132 cumul groupe |
| Skills ✓ purs | 0/7 | 2 cumul (story-mapping + planning-poker) |
| Skills P3 | 0/7 | — |
| Skills P2 | **7/7 (100%)** | — |
| Skills P1 | **0/7 (0%)** ⭐ | seul agent à 0% |
| Skills P0 | 0/7 | — |
| Skills sans certif en en-tête | 0/7 ✓ | top tier (avec PM-SAFE, RTE) |
| Skills avec agent déclaré | **0/7** ⚠ | V1 mécanique nécessaire |
| Skills avec source datée | 0/7 | — |
| Volumétrie moyenne | 92 L | bon (vs BA 51L) |

**Constats clés** :
- ⭐ **0 P1 — meilleur taux du chantier** (vs 14-100% sur les 8 autres agents)
- ✅ PROSCI ADKAR effectivement utilisé (6/7 skills, pas seulement déclaré)
- ✅ Volumétrie homogène (68-103L, vs BA 39-58L)
- ⚠️ **Référentiels canoniques change absents** : John Kotter "Leading Change" (8 étapes, 1995), Kurt Lewin (Unfreeze/Change/Refreeze 1947), William Bridges (Transition Model 1991), McKinsey 7S, Everett Rogers (Diffusion of Innovations 1962)
- ⚠️ **Jeff Hiatt PROSCI (2003) jamais cité** alors que le modèle ADKAR est sa contribution
- 🟡 V1 mécanique nécessaire : ajout `> Agent : AGENT-CHANGE-MANAGER.md` sur 7 skills

---

## 2. Tableau récapitulatif (7 skills)

| # | Skill | Vol. (L) | Certif | Agent | Conf. | Action. | Prof. | Verdict | Note |
|---|---|---:|---|---|:---:|:---:|:---:|:---:|---|
| 1 | adkar-model.md | 91 | ✓ | ❌ | ✓ | ✓ | ⚠ | P2 | ADKAR modèle conforme + diagnostic + dashboard |
| 2 | analyse-impact-changement.md | 68 | ✓ | ❌ | ⚠ | ✓ | ⚠ | P2 | PMP RACI absent malgré certif |
| 3 | gestion-resistance.md | 95 | ✓ | ❌ | ⚠ | ✓ | ⚠ | P2 | Carl Rogers ≠ Rogers Diffusion (confusion) |
| 4 | mesure-adoption.md | 97 | ✓ | ❌ | ⚠ | ✓ | ⚠ | P2 | Kirkpatrick "adapté" non expliqué |
| 5 | plan-communication.md | 96 | ✓ | ❌ | ✓ | ✓ | ⚠ | P2 | ADKAR aligné L.12-26 ✓ |
| 6 | stakeholder-engagement-change.md | 92 | ✓ | ❌ | ⚠ | ✓ | ⚠ | P2 | PRINCE2 superficiel, 2 signaux alerte ⭐ |
| 7 | strategie-adoption.md | 103 | ✓ | ❌ | ⚠ | ✓ | ⚠ | P2 | ITIL 4 absent du contenu |

---

## 3. Triplon thématique CHANGE — Analyse architecturale

### 3 fichiers concernés
| Fichier | Agent | Vol | Référentiel principal |
|---|---|---:|---|
| `business_analyst/analyse-impact.md` | BA | 50L | PROSCI ADKAR + Kübler-Ross |
| `scrum_master/change-management-agile.md` | SM | 83L | Kübler-Ross + Rogers Diffusion |
| `change_manager/analyse-impact-changement.md` | CM | 68L | PROSCI + Analyse impact PMP |

### Matrice de comparaison

| Aspect | BA | SM | CM |
|---|---|---|---|
| **Cible audience** | Parties prenantes (analyse impact) | Scrum Masters + management Agile | Change Manager + Sponsor |
| **Horizon temporel** | Projet (généralisé) | 12 mois transformation Agile | Post go-live (30/90 jours) |
| **Livrables** | Matrice impact 5D + plan conduite | Roadmap Q1-Q4 + obstacles Agile | Cartographie processus + gaps skills |
| **Approche** | Analyse multidim + émotions | Transformation Agile équipes | Diagnostic tactique post-projet |

### Verdicts croisés

| Paire | Verdict | Justification |
|---|---|---|
| BA ↔ SM | **DISTINCT** | Périmètres différents (analyse impact business vs transformation Agile équipes) |
| BA ↔ CM | **COMPLÉMENTAIRE** | Redondance modérée (PROSCI ADKAR cité 2 fois) — BA = diagnostic / CM = exécution tactique |
| SM ↔ CM | **DISTINCT** | Contextes différents (équipes Agile vs populations organisationnelles larges) |

### Décision architecturale recommandée

✅ **Statu quo avec clarification des frontières** — pas de fusion, pas de suppression.

**Action V3 (cosmétique)** : Ajouter cross-links `## Voir aussi` dans les 3 skills :
- `business_analyst/analyse-impact.md` → "Pour exécution tactique post-diagnostic, voir `skills/change_manager/analyse-impact-changement.md`"
- `change_manager/analyse-impact-changement.md` → "Pour analyse multidimensionnelle préalable, voir `skills/business_analyst/analyse-impact.md`"
- `scrum_master/change-management-agile.md` → "Pour change organisationnel large hors Agile, voir `skills/change_manager/`"

---

## 4. V1 cosmétique CHANGE-MANAGER (~10 min)

Pattern actuel observé sur les 7 skills :
```
> Certifications : PROSCI Change Management (PROSCI) · CCMP (ACMP)
```

V1 = ajouter ligne `> Agent : AGENT-CHANGE-MANAGER.md` après la ligne Certifications.

**Impact V1** : Les 7 skills P2 restent P2 (la cotation profondeur ne change pas), mais la structure devient conforme au standard du repo (Certif + Agent en en-tête).

---

## 5. Findings P2 — Enrichissements (les 7 skills)

Action commune : citer Jeff Hiatt PROSCI (2003), Kotter "Leading Change" (1995, 2nd ed 2012), Lewin (1947), Bridges (1991, 4th ed 2017), Rogers (1962, 5th ed 2003), McKinsey 7S (Peters & Waterman 1982).

### P2.A — `adkar-model.md` (91L)
- Citer Jeff Hiatt "ADKAR: A Model for Change in Business, Government and our Community" (2006) + PROSCI (1996 founding)
- Lien vers prosci.com pour outils diagnostic ADKAR officiels
- Anti-patterns ADKAR : "Phase K (Knowledge) bypassée", "R (Reinforcement) zappé en clôture projet", "ADKAR individuel mais pas équipe"

### P2.B — `analyse-impact-changement.md` (68L)
- Citer PMBOK 7 (PMI 2021) — Performance Domain "Stakeholders" pour RACI
- Citer Kübler-Ross "On Death and Dying" (1969) avec **clarification** : Kübler-Ross = deuil/résistance individuelle (à utiliser avec parcimonie pour change organisationnel)
- Préférer William Bridges "Managing Transitions" (1991) pour la transition organisationnelle (3 phases : Ending → Neutral Zone → New Beginning)
- Cross-link vers `skills/business_analyst/analyse-impact.md` (clarification triplon)
- Anti-patterns analyse impact : "Cartographie sans validation populations", "Gap analysis sans baseline mesurée", "Risques sans owner"

### P2.C — `gestion-resistance.md` (95L)
- **Corriger confusion Rogers** : Carl Rogers (écoute active, psychologie humaniste 1959) ≠ Everett Rogers (Diffusion of Innovations 1962, 5 catégories d'adopteurs)
- Citer Carl Rogers "On Becoming a Person" (1961) pour écoute active
- Ajouter Everett Rogers "Diffusion of Innovations" (1962, 5th ed 2003) pour segmentation résistants (Innovateurs 2.5%, Early Adopters 13.5%, etc.)
- Anti-patterns gestion résistance : "Résistance vue comme problème (vs feedback)", "Diagnostic sans rencontre individuelle", "Quick wins sans plan de pérennisation"
- Activer SAFe 6 (cert revendiquée) : ajouter section "Résistance en contexte transformation SAFe ART"

### P2.D — `mesure-adoption.md` (97L)
- Citer Kirkpatrick "Evaluating Training Programs" (1959, 4 levels) + Phillips ROI (5th level) si "adapté"
- Expliquer l'adaptation Kirkpatrick → adoption (vs formation initiale)
- Ajouter AARRR Pirate Metrics (Dave McClure 2007) pour produit IA
- Anti-patterns mesure : "Mesure réaction (L1) sans Behavior (L3)", "KPIs sans baseline", "Adoption mesurée 1 fois post go-live"

### P2.E — `plan-communication.md` (96L)
- Citer John Kotter "Leading Change" (1995) — Étape 4 "Communicate the Vision"
- Citer Jeff Hiatt PROSCI Best Practices in Change Management report (mises à jour annuelles, dernière 2024 11th edition)
- Anti-patterns communication : "Communication descendante uniquement", "Pas de Q&A bidirectionnel", "Cadence dégressive après J+30", "Pas de communication tailored par persona"

### P2.F — `stakeholder-engagement-change.md` (92L)
- Citer Aubrey Mendelow "Stakeholder Power/Interest Grid" (1991) — origine de la matrice
- Citer PMBOK 7 Performance Domain "Stakeholders"
- Citer PRINCE2 7 (Axelos 2023) avec contenu PRINCE2 explicite (Project Board, Business Case)
- Activer ces certifications avec contenu dédié
- Forces actuelles : 2 signaux d'alerte explicites (absence aux événements, messages contradictoires) ⭐

### P2.G — `strategie-adoption.md` (103L)
- Citer ITIL 4 (Axelos 2019) — service value system, change enablement practice
- Activer ITIL 4 avec contenu : CAB (Change Advisory Board), Change Authority levels, Standard/Normal/Emergency changes
- Citer Geoffrey Moore "Crossing the Chasm" (1991) pour stratégie adoption early adopters → majority
- Anti-patterns adoption : "Formation Big Bang", "Super-users non choisis (volontaires)", "Hotline non staffée post go-live", "Pas de suivi adoption 90 jours"

---

## 6. Findings transversaux CHANGE-MANAGER

### 🟢 T1 — Patrimoine actionnable, 0 P1
Meilleur taux du chantier (0% P1 vs 14-100% autres agents). PROSCI ADKAR vraiment utilisé (pas juste cité en certif).

### 🔴 T2 — Référentiels canoniques absents partout
- **John Kotter** (8 étapes, 1995) — **ABSENT** sur 7/7 skills (cité README uniquement)
- **Kurt Lewin** (Unfreeze/Change/Refreeze 1947) — **ABSENT**
- **William Bridges** (Transition Model 1991) — **ABSENT**
- **McKinsey 7S** — **ABSENT** (cité README)
- **Everett Rogers** (Diffusion 1962) — **ABSENT** (Carl Rogers cité L.70 gestion-resistance, confusion possible)

### 🟡 T3 — Certifications déclarées mais non actionnalisées
- **PMP** (analyse-impact, stakeholder-engagement) — RACI absent
- **PRINCE2** (stakeholder-engagement) — superficiel
- **ITIL 4** (strategie-adoption) — absent du contenu
- **SAFe 6 Agilist** (gestion-resistance) — pas de contenu SAFe
- **CCMP** (5/7 skills) — non déployé

**Action V3** : pour chaque certif déclarée, ajouter au moins 1 section dédiée dans le skill.

### 🟡 T4 — Confusion Carl Rogers ↔ Everett Rogers
Bug subtil mais réel : `gestion-resistance.md` L.70 cite "Carl Rogers (écoute active)". OK. Mais l'agent a 5 catégories d'adopteurs revendiquées qui correspondent à Everett Rogers (Diffusion of Innovations). À clarifier en V3.

### 🟡 T5 — Aucun renvoi inter-agent ni intra-CM
- Pas de cross-link entre les 7 skills CM (adkar-model n'appelle pas plan-communication, mesure-adoption, etc.)
- Pas de cross-link vers AGENT-BUSINESS-ANALYST.md, AGENT-SCRUM-MASTER.md (triplon non documenté)
- Pas de renvoi vers AGENT-FORMATEUR-IA.md (formation = sujet adjacent)

### 🟢 T6 — Templates exécutables
- Matrices ADKAR, populations × dimensions, 2×3 stakeholders
- Tableaux KPIs chiffrés (mesure-adoption ⭐)
- Calendriers ASCII (plan-communication)
- Scripts entretien opposants (stakeholder-engagement)

Format prêt à coller dans Confluence/PowerPoint sur tous les skills.

---

## 7. Plan d'action recommandé

### V1 — Cosmétique transverse (~10 min)
- Ajouter `> Agent : AGENT-CHANGE-MANAGER.md` sur les 7 skills (mécanique)
- **Impact** : structure conforme au standard du repo, mais aucune régression de verdict (7 P2 restent P2)

### V2 — Aucun P1 résiduel à traiter
Pattern unique du chantier — agent déjà sans bug bloquant.

### V3 — Enrichissements P2 (7 skills, ~5-6h en session dédiée)
- Bundle "Sources Frameworks Change" : Kotter, Lewin, Bridges, Rogers, McKinsey 7S, Hiatt PROSCI 2003
- Bundle "Anti-patterns Change" : Big Bang, sponsor absent, no reinforcement, communication descendante
- Bundle "Activation certifs déclarées" : RACI/PMP, PRINCE2 explicite, ITIL 4 CAB, SAFe 6 ART
- Bundle "Cross-links" : intra-CM + triplon BA/SM/CM

---

## 8. Bilan groupe Agile/Produit complet (9/9 agents audités) ✅

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | QA-AGILE | QA-CYCLEV | CM | **Cumul 9/9** |
|---|---|---|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | 10 | 13 | 7 | **132** |
| Skills catalogue actuel | 25 | 30 | 10 | 16 | 6+1 | 10 | 10 | 13 | 7 | **127** |
| ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | 0 | 0 | 0 | **2** |
| P3 | 7 | 5 | 1 | 3 | 1 | 0 | 0 | 0 | 0 | **17** |
| P2 (avant V1) | 12 | 16 | 7 | 11 | 5 | 6 | 0 | 1 | 7 | **65** |
| **P1 (avant V1)** | 6 | 8 | 2 | 5 | 1 | 4 | 10 | 12 | 0 | **48** |
| **P1 (après V1 cumulées)** | 2 | 4 | 1 | 1 | 0 | 4 | 0 | 1 | 0 | **13** |
| Verdict ✓ % | 0% | 3% | 0% | 6% | 0% | 0% | 0% | 0% | 0% | 1.6% |

### Pattern bilan groupe Agile/Produit

**2 skills exemplaires identifiés** :
- ⭐ `story-mapping.md` (PO-SCRUM) — Jeff Patton cité 3 fois + quote
- ⭐⭐ `planning-poker.md` (SCRUM-MASTER) — James Grenning 2002, Mike Cohn, 6 alternatives, 8 anti-patterns

**P1 résiduels après toutes V1 (13 skills)** — à traiter en V2 profondes (sessions dédiées) :
- PO-SAFE : 2 (capabilities, lean-agile-mindset)
- PO-SCRUM : 4 (gestion-risques, po-ai-product, product-vision, ux-sprint)
- PM-SAFE : 1 (market-analysis)
- SM : 1 (change-management-agile)
- BA : 4 (elicitation-besoins, modelisation-processus, cartographie-si, analyse-impact)
- QA-CYCLEV : 1 (tests-securite — OWASP critique)

**Bugs architecturaux corrigés en cours d'audit** :
- ✅ PM-SAFE : 3 headers Agent corrigés (v2.8.0)
- ✅ SM : 4 doublons cérémonies supprimés (v2.8.1)
- ✅ SM/PO-SCRUM : kanban-flow cross-links ajoutés (v2.8.1)
- ✅ RTE : inspect-adapt-rte fusionné vers safe/inspect-adapt + suppression (v2.8.2)
- ✅ Triplon CHANGE : statu quo + cross-links recommandés (v2.8.4)

**Tendance émergente** :
- Bugs structurels résolus systématiquement par V1 mécanique (Limit WIP appliqué)
- 65 P2 à enrichir = chantier V3 réparti par bundles thématiques (Sources / Anti-patterns / Cross-links)
- 13 P1 résiduels = V2 profonde (refonte de contenu, ~4-5h pour les 4 P1 BA + 1-2h pour autres)

---

## 9. Prochaines étapes

- [ ] **V1 immédiate** : ajout `> Agent :` sur 7 skills CHANGE-MANAGER (~10 min)
- [ ] Commit v2.8.4 unifié : audits QA-AGILE + QA-CYCLEV + CHANGE-MANAGER + V1 qa_testing (22 skills) + V1 CM (7 skills)
- [ ] Push + tag v2.8.4
- [ ] **🎉 Bilan groupe Agile/Produit COMPLET 9/9**
- [ ] Roadmap V2 et V3 cross-agents (à formaliser dans audits/roadmap-v2-v3.md ?)
- [ ] Décision : enchaîner sur le groupe Conseil/Direction (JURIDIQUE-IA recommandé pour formaliser la 2ème déclinaison de grille) ?
