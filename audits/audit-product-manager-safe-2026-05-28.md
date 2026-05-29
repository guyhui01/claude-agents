# Audit qualité — AGENT-PRODUCT-MANAGER-SAFE (3ème agent groupe Agile/Produit)

> **Date** : 2026-05-28
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 10 skills propres dans `skills/product_manager_safe/` + 2 skills SAFe partagés avec PO-SAFE (déjà audités, verdict P3 chacun)
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global PM-SAFE** : Patrimoine actionnable (templates YAML riches, exemples chiffrés), mais **20% des skills en P1** dont 1 bug architectural critique sur `enterprise-product-vision.md` (confusion scope Programme/équipe en header).

| Métrique | PM-SAFE | PO-SAFE | PO-SCRUM |
|---|---|---|---|
| Skills audités | 10 | 25 | 30 |
| Skills ✓ conformes | 0/10 | 0/25 | 1/30 |
| Skills P3 (cosmétique) | 1/10 (10%) | 7/25 | 5/30 |
| Skills P2 (enrichissement) | 7/10 (70%) | 12/25 | 16/30 |
| Skills P1 (bug bloquant) | **2/10 (20%)** | 6/25 | 8/30 |
| Skills sans certification | 0/10 ✓ | 7/25 | 11/30 |
| Skills avec anti-patterns | 2/10 (20%) | 4/25 | 12/30 |
| Skills avec source externe | **3/10 (30%)** | 0/25 | 3/30 |

**Découvertes** :
- ⭐ `scaling-product-ownership.md` (P3) — meilleur skill avec **4 anti-patterns explicites + distinction PM↔PO claire**
- 🔴 `enterprise-product-vision.md` — **bug architectural** : header indique `Agent: AGENT-PO-SCRUM.md` alors que le skill est niveau Programme PM
- 🔴 `market-analysis.md` — D3 ✗ : **zéro source externe** (Gartner/Forrester/IDC absents) alors que PMI-PBA + PMP revendiqués
- 🟡 **9/10 skills utilisent exclusivement le secteur RH/IA** comme exemple — faible transférabilité

**Observation positive vs autres audits** : **0/10 skills sans certif** (vs 28% PO-SAFE / 37% PO-SCRUM) → PM-SAFE est le mieux structuré sur ce point.

---

## 2. Méthodologie

Application directe de la grille v2.8 Agile/Produit avec ajout d'un axe d'analyse spécifique :
- **D4 (analyse complémentaire)** : Distinction PM (niveau Programme) vs PO (niveau équipe Scrum) — critère architectural propre à PM-SAFE.

Note : 2 skills SAFe partagés (`epic-hypothesis-mvp.md`, `epic-to-feature-splitting.md`) sont déjà audités sous PO-SAFE — verdict **P3 chacun**, non re-cotés ici.

---

## 3. Tableau récapitulatif (10 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | PM↔PO clair | Verdict | Note |
|---|---|---:|---|:---:|:---:|:---:|:---:|:---:|---|
| 1 | customer-centricity.md | 100 | ✓ | ⚠ | ✓ | ⚠ | ⚠ | P2 | JTBD/Empathy non attribués |
| 2 | economic-framework-pm.md | 83 | ✓ | ✓ | ✓ | ⚠ | ❌ | P2 | WSJF conforme POPM 6 ✓ |
| 3 | enterprise-product-vision.md | 106 | ⚠ | ⚠ | ✓ | ⚠ | ✗ | **P1** | 🔴 Bug header Agent PO-SCRUM |
| 4 | market-analysis.md | 58 | ✓ | ✓ | ✓ | ✗ | ❌ | **P1** | 🔴 Zéro source externe |
| 5 | product-operating-model.md | 96 | ⚠ | ⚠ | ✓ | ⚠ | ⚠ | P2 | Cagan/LeSS sans dates |
| 6 | release-strategy.md | 98 | ✓ | ⚠ | ✓ | ⚠ | ❌ | P2 | Pas de cadence SAFe Release Train |
| 7 | roadmap-programme.md | 102 | ✓ | ⚠ | ✓ | ⚠ | ⚠ | P2 | 3-Horizons non sourcé |
| 8 | scaling-product-ownership.md | 84 | ✓ | ⚠ | ✓ | ✓ | ✓ | **P3** | ⭐ 4 anti-patterns, PM↔PO clair |
| 9 | stakeholder-alignment-pm.md | 79 | ✓ | ⚠ | ✓ | ⚠ | ⚠ | P2 | Manque guidance conflits |
| 10 | vision-strategie-produit.md | 90 | ✓ | ⚠ | ✓ | ⚠ | ⚠ | P2 | Moore/Doerr non datés |

---

## 4. Findings P1 — Bugs bloquants (2 skills)

### 🔴 P1.1 — `enterprise-product-vision.md` (106L) — Bug architectural

**Symptôme critique** : En-tête mentionne `Agent : AGENT-PO-SCRUM.md` (L.4) alors que le skill couvre la **Vision Produit d'Entreprise au niveau Programme/Portfolio** — domaine fonctionnel de PM-SAFE, pas de PO-SCRUM (équipe Scrum). C'est une erreur de scope qui :
- Discrédite l'agent PM-SAFE auprès d'un client (incohérence de positionnement)
- Crée un risque de duplication avec `vision-strategie-produit.md` (même dossier) qui couvre Vision Statement

**Constats secondaires** :
- Marty Cagan et Roman Pichler cités L.28 sans dates ni ouvrages ("Inspired" 2018, "Empowered" 2021, "Strategize" 2016)
- Lean Startup (Ries 2011), JTBD, BABOK absents alors que le skill traite vision/stratégie

**Corrections** :
- **Corriger immédiatement** la ligne `> Agent :` → `AGENT-PRODUCT-MANAGER-SAFE.md` (et ajouter `AGENT-CDO-DIRECTEUR-IA.md` si vision d'entreprise IA touche le périmètre CDO)
- Ajouter `> Certification : SAFe SPC · SAFe LPM · PSPO III` (PSPO III seul actuellement, manque SPC/LPM cohérents avec "Enterprise")
- Citer ouvrages : Marty Cagan "Inspired" (2018) et "Empowered" (2021), Roman Pichler "Strategize" (2016), Geoffrey Moore "Crossing the Chasm" (1991)
- Clarifier la frontière `enterprise-product-vision.md` vs `vision-strategie-produit.md` :
  - Enterprise = Portfolio level (3-5 ans, Strategic Themes)
  - Vision Stratégie = Programme level (12-24 mois, Vision Statement + OKR)
- Anti-patterns vision : "Vision figée sans pivot annuel", "North Star = revenue", "Vision décorrélée des Strategic Themes"

### 🔴 P1.2 — `market-analysis.md` (58L) — Zéro source externe

**Symptôme** : Skill **stratégique** (analyse marché + concurrence) revendiquant PMI-PBA + PMP + SAFe POPM 6. **Aucune source externe citée**. Les exemples TAM/SAM/SOM (15Md€ marché RH) sortent de nulle part — pas de Gartner Magic Quadrant, pas de Forrester Wave, pas d'IDC Worldwide HCM Software.

**Constats** :
- TAM/SAM/SOM standard mais méthodologie estimation absente
- SWOT 4 quadrants — pas de framework spécifique cité (Albert Humphrey 1960s ? SRI 1965 ?)
- Benchmark concurrents tableau — pas de structure type Porter 5 forces ou Strategy Canvas
- AI Act mentionné L.45 — bien pour conformité, mais pas lié à veille stratégique

**Corrections** :
- Référencer Gartner (Magic Quadrant for HCM 2024-2025), Forrester (Wave for AI in HR), IDC (Worldwide AI Software Forecast)
- Citer Porter (1979 "How Competitive Forces Shape Strategy"), Kim & Mauborgne (Blue Ocean Strategy 2005)
- Ajouter framework Strategy Canvas (Blue Ocean) en complément de SWOT
- Détailler méthodologie TAM/SAM/SOM (top-down vs bottom-up, sources INSEE/Eurostat pour TAM Europe)
- Diversifier exemples (banque/retail/télécom au-delà du RH)
- Anti-patterns market analysis : "TAM 'on dit'", "Benchmark concurrents sans grille critères", "Pas de signaux faibles dans veille"

---

## 5. Findings P2 — Enrichissements (7 skills)

Action commune : ajouter section `## Sources` et `## Anti-patterns`. Cas notables :

### P2.A — `customer-centricity.md` (100L)
- Citer Tony Ulwick (JTBD "Outcome-Driven Innovation" 2005, "Jobs to be Done" 2016)
- Citer Clayton Christensen ("Competing Against Luck" 2016)
- Citer IDEO / Tim Brown ("Change by Design" 2009) pour Design Thinking
- Citer Teresa Torres ("Continuous Discovery Habits" 2021)
- Ajouter Empathy Map (Dave Gray, "Gamestorming" 2010)
- Anti-patterns customer-centricity : "Personas inventés (non testés terrain)", "JTBD reformulé en feature", "Discovery one-shot vs continu"

### P2.B — `economic-framework-pm.md` (83L)
- Référencer WSJF SAFe officiel : scaledagileframework.com/wsjf/
- Citer Donald Reinertsen "Principles of Product Development Flow" (2009) — origine CoD
- Diversifier exemples : secteurs banque CIB, hôtellerie, luxe (CMS), énergie, défense, télécom
- Anti-patterns : "WSJF Feature copié au niveau Epic", "ROI calculé sans payback", "LBC > 10 pages"

### P2.C — `product-operating-model.md` (96L)
- Citer Marty Cagan "Empowered" (2021) explicitement
- Citer Craig Larman & Bas Vodde "Large-Scale Scrum: More with LeSS" (2016)
- Citer Ken Schwaber pour Nexus Guide (2015)
- Ajouter Spotify Model (Henrik Kniberg 2014) — référence reconnue
- Préciser certifs : ajouter `SAFe POPM 6 · SAFe SPC`
- Anti-patterns POM : "Feature teams sans backlog unifié", "Spotify Model copié sans culture", "Empowered = abandonné par le management"

### P2.D — `release-strategy.md` (98L)
- Citer SAFe Release Management : scaledagileframework.com/release-on-demand/
- Citer "Continuous Delivery" (Jez Humble & David Farley 2010)
- Lier explicitement à `safe-devops.md` (DORA metrics, CDP)
- Anti-patterns release : "Big bang release", "Feature flags non nettoyés > 30 jours", "GTM décidé en fin de PI"

### P2.E — `roadmap-programme.md` (102L)
- Citer Janna Bastow / ProdPad (3-Horizons Now/Next/Later)
- Citer SAFe Roadmap : scaledagileframework.com/roadmap/
- Lier à `economic-framework-pm.md` pour WSJF scores
- Documenter cadence revue roadmap (post-PI Planning, post-I&A)
- Anti-patterns roadmap : "Roadmap engagement client à 18 mois", "Now/Next/Later sans WSJF", "Stretch passé en Committed sans renégociation"

### P2.F — `stakeholder-alignment-pm.md` (79L)
- Citer PMBOK 7 (Performance Domain "Stakeholders")
- Citer Mendelow (Power/Interest Grid 1991)
- Citer Mike Cohn / Lyssa Adkins pour facilitation
- Ajouter guidance gestion conflits (Thomas-Kilmann modes : compete/collaborate/compromise/avoid/accommodate)
- Diversifier exemples (pas que RH)
- Anti-patterns : "Stakeholder map non revue par PI", "Steering Committee sans décisions sortantes", "BO bypass via Sponsor"

### P2.G — `vision-strategie-produit.md` (90L)
- Citer Geoffrey Moore "Crossing the Chasm" (1991) avec date
- Citer John Doerr "Measure What Matters" (2018) pour OKRs
- Citer Jeff Gothelf "Lean UX" (2016, 3e éd 2021) pour Lean UX Canvas
- Citer Eric Ries "The Lean Startup" (2011) pour hypothèses risquées
- Anti-patterns Vision/OKR : "Vision aspirationnelle non quantifiée", "KR = output (feature livrée) au lieu d'outcome", "OKR copiés-collés à chaque PI"

---

## 6. Finding P3 — Cosmétique (1 skill)

### P3.1 — `scaling-product-ownership.md` (84L) ⭐ Meilleur skill PM-SAFE

**Pourquoi il sort du lot** :
- 4 anti-patterns explicites (dépendances bloquantes, priorisation contradictoire, stakeholder bypass, vitesse inégale)
- Distinction **PM (Programme) vs PO (équipe) explicite** (L.19-20, L.70)
- Health metrics avec objectifs chiffrés
- 8 livrables : CPO/PO Proxy, Area PO, Feature vs Component, Backlog rules, PO Sync, Program Board, Défis/solutions, métriques

**Actions P3** :
- Citer Craig Larman & Bas Vodde "Large-Scale Scrum" (2016) pour LeSS
- Citer Ken Schwaber "The Nexus Guide" (2015)
- Ajouter Tribes/Squads pour Spotify Model (Kniberg 2014)
- Préciser escalade décisionnelle WSJF lors deadlock PO-PO

---

## 7. Findings transversaux PM-SAFE

### 🔴 T1 — Bug architectural confusion PM/PO
- **enterprise-product-vision.md** : header `Agent : AGENT-PO-SCRUM.md` alors que skill niveau Programme
- À corriger immédiatement (P1)
- À surveiller sur les futurs audits : tous les skills PM-SAFE doivent avoir `Agent : AGENT-PRODUCT-MANAGER-SAFE.md` (et éventuellement `AGENT-PO-SAFE.md` ou autres si partage)

### 🟡 T2 — Doublon potentiel Vision
- `enterprise-product-vision.md` (Vision Board + North Star + Strategy Canvas)
- `vision-strategie-produit.md` (Vision Statement Moore + Lean UX Canvas + OKR)
- **Décision** : Clarifier la frontière dans les en-têtes des 2 skills :
  - Enterprise = Portfolio (3-5 ans, Strategic Themes)
  - Vision Strategie = Programme (12-24 mois, ART)
- Ajouter renvoi croisé dans chaque skill

### 🟡 T3 — Zéro diversité sectorielle
- **9/10 skills** utilisent uniquement le secteur **RH/IA** comme exemple
- Risque : tendance à enfermer l'agent dans un domaine
- Action V3 : diversifier au moins 4-5 skills avec banque/retail/télécom/CMS pour matcher la palette sectorielle des missions (banque CIB, hôtellerie, luxe, télécom, énergie, défense)

### 🟡 T4 — Carence sources externes (mais meilleure que PO-SAFE/PO-SCRUM)
- 3/10 skills citent quelqu'un (Cagan, Moore, Pichler, LeSS/Nexus) — meilleur ratio
- **Mais sans dates ni titres d'ouvrages** → demi-citation
- Action V3 mass : compléter avec dates+titres

### 🟡 T5 — Anti-patterns PM spécifiques quasi-absents
- 2/10 seulement (scaling-PO + Feature Factory dans POM)
- Patterns à propager : "Confondre PM Programme vs PO équipe", "Overpromising stakeholders", "Scope creep", "Roadmap fragmentation"

### 🟢 T6 — Bon signal : 0 skill sans certification
- PM-SAFE est le mieux structuré sur ce point (vs 28% PO-SAFE, 37% PO-SCRUM)
- V1 cosmétique transverse non nécessaire ici

### 🟡 T7 — Templates riches mais peu liés à SAFe 6.0 natif
- WSJF conforme POPM 6 ✓ (`economic-framework-pm.md`)
- Mais peu de mentions PI Planning, Business Owners, Release Train, hardening sprints, Innovation sprints
- Risque : les skills pourraient être perçus comme "PM générique" plutôt que "PM SAFe"
- Action V3 : ajouter section "Articulation SAFe" en fin de chaque skill renvoyant vers `skills/safe/*`

---

## 8. Plan d'action recommandé

### V1 — Corrections architecturales urgentes (~10 min)
- Corriger header `enterprise-product-vision.md` : `Agent : AGENT-PRODUCT-MANAGER-SAFE.md` (+ ajouter SAFe POPM 6 · SAFe SPC dans Certification)
- Préciser `product-operating-model.md` : `Certification : PSPO III · SAFe POPM 6 · SAFe SPC` (PSPO III seul actuellement insuffisant)
- **Impact attendu** : 1 P1 → P2 (enterprise-product-vision)

### V2 — Bug bloquant résiduel (~1h)
- Traiter `market-analysis.md` : ajouter Gartner/Forrester/IDC + Porter + diversifier exemples + anti-patterns

### V3 — Enrichissements P2 (7 skills, ~4-5h)
- Bundle "Sources Frameworks" : 7 skills à sourcer
- Bundle "Anti-patterns" : 8 skills à enrichir
- Bundle "Articulation SAFe" : préciser liens vers `skills/safe/*`

### V4 — Diversification sectorielle (optionnel)
- Choisir 4-5 skills pour ajouter exemples banque/retail/télécom

---

## 9. Bilan groupe Agile/Produit (3/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | Cumul 3 agents |
|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | **65/~180** (36%) |
| Verdict ✓ | 0 | 1 | 0 | 1 |
| P1 | 6 (24%) | 8 (27%) | 2 (20%) | 16 (25%) |
| P2 | 12 (48%) | 16 (53%) | 7 (70%) | 35 (54%) |
| P3 | 7 (28%) | 5 (17%) | 1 (10%) | 13 (20%) |
| % skills sans certif | 28% | 37% | **0%** ⭐ | 18 / 65 = 28% |
| % skills avec sources | 0% | 10% | 30% ⭐ | ~10% |
| % skills anti-patterns | 16% | 40% | 20% | ~28% |

**Pattern émergent** :
- PM-SAFE est le **mieux structuré** des 3 (0% sans certif, 30% sources, P1 le plus bas)
- Mais reste sur le même fond : sources non datées, peu d'anti-patterns
- **Aucun des 3 agents n'atteint > 50% ✓** — pattern systémique à corriger en mass

**Apprentissages pour les 6 agents Agile restants** (SCRUM-MASTER, RELEASE-TRAIN-ENGINEER, BUSINESS-ANALYST, QA-AGILE, QA-CYCLEV, CHANGE-MANAGER) :
- ✅ Grille v2.8 Agile/Produit **toujours stable** (3 agents, aucun ajustement)
- ✅ Méthode "Explore + cotation" **rodée** : ~25-30 min par agent
- ⚠️ Pattern récurrent à anticiper : skills "sources non sourcées", anti-patterns absents, scope flou
- ⚠️ **Vérifier systématiquement les headers `Agent :`** — bug PM-SAFE peut se reproduire

---

## 10. Annexes

### A. Skills SAFe partagés avec PO-SAFE (hors périmètre audit PM-SAFE)
- `skills/safe/epic-hypothesis-mvp.md` — Verdict **P3** (audit PO-SAFE)
- `skills/safe/epic-to-feature-splitting.md` — Verdict **P3** (audit PO-SAFE)

→ Ces 2 skills sont déjà solides et bien réutilisables PM-SAFE. Aucune action additionnelle.

### B. Sources attendues complémentaires PM-SAFE
- Marty Cagan "Inspired: How to Create Tech Products Customers Love" (2018, 2nd ed)
- Marty Cagan "Empowered: Ordinary People, Extraordinary Products" (2021)
- Roman Pichler "Strategize: Product Strategy and Product Roadmap Practices" (2016)
- Geoffrey Moore "Crossing the Chasm" (1991, 3rd ed 2014)
- Teresa Torres "Continuous Discovery Habits" (2021)
- Tony Ulwick "Jobs to be Done" (2016) + "Outcome-Driven Innovation"
- Clayton Christensen "Competing Against Luck" (2016)
- Eric Ries "The Lean Startup" (2011)
- John Doerr "Measure What Matters" (2018)
- IDEO / Tim Brown "Change by Design" (2009)
- Donald Reinertsen "Principles of Product Development Flow" (2009)
- Craig Larman & Bas Vodde "Large-Scale Scrum: More with LeSS" (2016)
- Henrik Kniberg "Spotify Engineering Culture" (2014, blog series)
- Jez Humble & David Farley "Continuous Delivery" (2010)
- Michael Porter "How Competitive Forces Shape Strategy" (1979 HBR)
- Kim & Mauborgne "Blue Ocean Strategy" (2005)
- Dave Gray "Gamestorming" (2010) — Empathy Map et autres outils

### C. Prochaines étapes
- [ ] V1 immédiate : corriger header `enterprise-product-vision.md` + préciser certifs `product-operating-model.md` (2 micro-éditions)
- [ ] Décision : poursuivre groupe Agile/Produit avec SCRUM-MASTER (20 skills) ?
- [ ] Décision : commit intermédiaire (CHANGELOG v2.7.10 ou v2.8.0) maintenant ou en fin de session ?
