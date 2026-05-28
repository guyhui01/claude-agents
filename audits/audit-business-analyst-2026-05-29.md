# Audit qualité — AGENT-BUSINESS-ANALYST (6ème agent groupe Agile/Produit)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 10 skills du dossier `skills/business_analyst/` (hors README.md)
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global BA** : Agent le plus **sous-dimensionné** du chantier. Tous les skills entre **39-58 lignes** (vs 100-200L sur les autres agents). **40% de P1** = pire taux du chantier. Pourtant 0/10 sans certif → patrimoine bien structuré mais peu profond.

| Métrique | BA | Comparaison groupe |
|---|---|---|
| Skills audités | 10/10 | 102 cumul |
| Skills ✓ purs | **0/10** | 2 cumul |
| Skills P3 (cosmétique) | **0/10** | 14 cumul |
| Skills P2 (enrichissement) | 6/10 (60%) | — |
| Skills P1 (bug bloquant) | **4/10 (40%)** ⚠️ | pire taux (avant : SM 25%, RTE 14%) |
| Skills P0 | 0/10 | 0 |
| Skills sans certif | **0/10** ✓ | comme PM-SAFE, RTE |
| Skills avec source externe | **0/10** ⚠ | retour à zéro |
| Volumétrie moyenne | **50,6 L** | la + faible (vs SAFe 95L, PO-SCRUM 75L, SM 103L) |

**Constats clés** :
- 🔴 **Sous-dimensionnement systémique** : `elicitation-besoins.md` (39L) pour le **knowledge area BABOK #4** "Elicitation & Collaboration" qui fait 60+ pages dans BABOK v3
- 🔴 **Référentiels canoniques BA absents** : Volere (Robertson 2012), Karl Wiegers "Software Requirements" (2013), Ivar Jacobson "Use Cases" (1992) — **0 citation sur 10 skills**
- 🟡 **BABOK v3 mentionné L.7** dans 2 skills seulement (elicitation-besoins, gestion-exigences) — pas exploité ailleurs
- 🟢 **0 skill sans certification** (3ème agent au top après PM-SAFE, RTE)
- 🟡 **0 source datée** : BABOK v3 (2015), PMBOK 7 (2021), TOGAF 10 (2022), BPMN 2.0 (OMG 2011), Volere (2012) — toutes absentes

---

## 2. Tableau récapitulatif (10 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict | Note |
|---|---|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | analyse-impact.md | 50 | ✓ | ⚠ | ⚠ | ⚠ | **P1** | PROSCI uniquement, BABOK absent du contenu |
| 2 | animation-atelier-metier.md | 55 | ✓ | ⚠ | ✓ | ⚠ | P2 | Gestion personnalités difficiles ✓ |
| 3 | cadrage-projet.md | 58 | ✓ | ⚠ | ✓ | ⚠ | P2 | Note cadrage 9 sections, Eisenhower |
| 4 | cartographie-si.md | 45 | ✓ | ⚠ | ⚠ | ✗ | **P1** | 🔴 TOGAF revendiqué peu exploité |
| 5 | elicitation-besoins.md | **39** | ✓ | ✓ | ⚠ | ⚠ | **P1** | 🔴 **Knowledge area BABOK CORE ramené à 39L** |
| 6 | gestion-exigences.md | 47 | ✓ | ✓ | ✓ | ⚠ | P2 | BABOK v3 cité, matrice + SMART |
| 7 | modelisation-processus.md | 44 | ✓ | ⚠ | ✓ | ⚠ | **P1** | 🔴 BPMN 2.0 + UML 2.5 ramenés à 44L |
| 8 | recette-moa.md | 55 | ✓ | ⚠ | ✓ | ⚠ | P2 | CR-001 + PV recette, AGENT-QA-AGILE non lié |
| 9 | reporting-moa.md | 58 | ✓ | ⚠ | ✓ | ⚠ | P2 | COPIL 5 sections, code RAG |
| 10 | specification-fonctionnelle.md | 55 | ✓ | ⚠ | ✓ | ⚠ | P2 | Complémentaire à scrum/spec-fonctionnelle (60-70% redondance) |

---

## 3. Findings P1 — Bugs bloquants (4 skills)

### 🔴 P1.1 — `elicitation-besoins.md` (39L) — Knowledge area BABOK ramené à 1 page
**Symptôme** : Elicitation & Collaboration est le **Knowledge Area #4 de BABOK v3** (60+ pages dans le livre officiel). Ramené à 39 lignes ici. IIBA CBAP/CCBA/PMI-PBA revendiqués mais skill ultra-minimaliste.

**Manques critiques** :
- Volere (Suzanne & James Robertson "Mastering the Requirements Process", 3rd ed 2012) — référentiel #1 absent
- Karl Wiegers "Software Requirements" (3rd ed 2013) — absent
- 14 techniques d'élicitation BABOK v3 — seulement 4 listées
- Job Stories (Alan Klement) — méthode moderne absente
- Anti-patterns élicitation : "Élicitation passive", "Stakeholders mauvais représentés", "Exigences en quête de besoin"

**Corrections** :
- Doubler la volumétrie (39 → ~100L minimum)
- Citer Volere, Wiegers, BABOK v3 (IIBA 2015)
- Documenter les 14 techniques BABOK avec timing/usage
- Ajouter 5-7 anti-patterns explicites
- Cross-link vers `AGENT-PO-SCRUM.md` (techniques élicitation alignées Scrum)

### 🔴 P1.2 — `modelisation-processus.md` (44L) — BPMN 2.0 + UML 2.5 sous-dimensionnés
**Symptôme** : BPMN 2.0 (OMG 2011, **538 pages de spec**) + UML 2.5 (OMG, 800+ pages) compressés en 44 lignes. Use Cases (Ivar Jacobson 1992) cités sans attribution.

**Corrections** :
- Citer OMG (Object Management Group) pour BPMN 2.0 et UML 2.5 avec dates
- Citer Ivar Jacobson "Object-Oriented Software Engineering" (1992) — créateur Use Cases
- Détailler les niveaux BPMN (descriptif/analytique/exécutable) avec exemples concrets
- Ajouter Activity Diagram, Sequence Diagram (déjà listés mais non détaillés)
- Diagramme Mermaid d'exemple (Pool/Lane, Use Case)
- Anti-patterns modélisation : "BPMN exécutable pour cadrage", "Use Cases en cascade", "UML hors-contexte BA"

### 🔴 P1.3 — `cartographie-si.md` (45L) — TOGAF 10 revendiqué peu exploité
**Symptôme** : TOGAF 10 (Open Group 2022, **~600 pages**) déclaré en certification mais ramené à 45L. Archimate (langage de modélisation TOGAF) implicite L.39, jamais cité explicitement.

**Corrections** :
- Citer TOGAF 10 (Open Group 2022) — www.opengroup.org/togaf
- Citer Archimate 3.2 (Open Group 2023) — langage de modélisation TOGAF
- Détailler les 4 couches Archimate (Business / Application / Technology / Physical)
- Ajouter exemple Schéma Directeur SI (sectoriel : banque, retail)
- **Lien explicite vers `AGENT-AI-ARCHITECT.md`** (frontière architecture vs cartographie BA)
- Anti-patterns cartographie : "Cartographie au démarrage sans cadrage", "Pas de référentiel applicatif unifié", "Cartographie figée sans gouvernance"

### 🔴 P1.4 — `analyse-impact.md` (50L) — BABOK absent, IIBA AAC déclaré non utilisé
**Symptôme** : Skill axé PROSCI ADKAR + Kübler-Ross uniquement. **Aucune mention BABOK v3** Knowledge Area "Strategy Analysis" qui couvre l'analyse d'impact. IIBA AAC (Agile Analysis Certification) déclaré non exploité.

**Corrections** :
- Citer PROSCI ADKAR (Jeff Hiatt 2003) + URL prosci.com avec date publication
- Citer Kübler-Ross "On Death and Dying" (1969) — pour transparence (référentiel deuil, pas changement organisationnel)
- **Préférer John Kotter "Leading Change" (1995, 2nd ed 2012)** comme référentiel principal change organisationnel
- Citer Diffusion of Innovations (Everett Rogers 1962, 5th ed 2003)
- Documenter BABOK v3 "Strategy Analysis" knowledge area pour l'analyse d'impact
- Templates IIBA AAC pour le changement Agile
- Anti-patterns : "Analyse d'impact sans sponsor", "Pas de baseline mesurée", "Kübler-Ross utilisé pour le changement organisationnel (mauvais référentiel)"

---

## 4. Findings P2 — Enrichissements (6 skills)

Approche commune : doubler la volumétrie de chaque skill (de 47-58L vers ~100L), ajouter `## Sources` + `## Anti-patterns`, citer référentiels datés.

### P2.A — `animation-atelier-metier.md` (55L)
- Citer Jim Benson "Lean Coffee" (méthode 2009)
- Citer Henri Lipmanowicz & Keith McCandless "Liberating Structures" (2013) — 1-2-4-All
- Citer Dave Gray "Gamestorming" (2010)
- Lien vers `skills/scrum_master/facilitation-ateliers-sm.md` (skill SM riche déjà audité P3)

### P2.B — `cadrage-projet.md` (58L)
- Citer Stephen Covey (Matrice Eisenhower originelle de la productivité)
- Citer TOGAF 10 explicitement (mention faible actuellement)
- Citer RGPD (UE 2016) et AI Act (UE 2024) avec dates
- Ajouter exemple sectoriel (banque/retail/télécom) au-delà du générique

### P2.C — `gestion-exigences.md` (47L) — proche P3
- Citer Karl Wiegers "Software Requirements" (3rd ed 2013) — référentiel #1 absent
- Citer Volere "Atomic Requirements" (Robertson 2012)
- Remplacer SMART généraliste par les "Characteristics of good requirements" BABOK v3 (Atomic, Cohesive, Complete, Consistent, Correct, Feasible, Modifiable, Unambiguous, Testable)
- Anti-patterns : "Exigences contradictoires non arbitrées", "RTM non maintenue après livraison", "Exigences sans propriétaire"

### P2.D — `recette-moa.md` (55L)
- Citer ISO/IEC 25010 (qualité logicielle, 2011, révisée 2023)
- Citer ISTQB CTFL v4.0 (2023) pour UAT
- **Lien explicite vers `AGENT-QA-AGILE.md`** (frontière recette MOA vs tests QA)
- Anti-patterns : "Recette sans cahier", "PV non signé Métier", "TNR oubliés"

### P2.E — `reporting-moa.md` (58L)
- Citer PMBOK 7 (2021) — Performance Domain "Measurement"
- Citer indicateurs RAG (Red/Amber/Green) origines PMI
- Anti-patterns reporting : "RAG sans seuil objectif", "COPIL sans décision sortante", "KPIs sans baseline"

### P2.F — `specification-fonctionnelle.md` (55L)
- **Lien explicite vers `skills/scrum/spec-fonctionnelle.md`** (complémentaire, 60-70% commune mais angles distincts)
- Citer Karl Wiegers "Software Requirements" + Volere
- Ajouter exemple SFD complet sectoriel
- Remplacer SMART par BABOK v3 "Characteristics of good requirements"

---

## 5. Findings transversaux BA

### 🔴 T1 — Sous-dimensionnement systémique
- **10/10 skills < 60L** (moyenne 50,6L)
- 4/10 skills **< 50L** sur des sujets BA majeurs
- Comparaison : skills DEV-PYTHON-IA audités v2.7.1 = 200-400L par skill

**Action V2 (priorité haute)** : doubler la volumétrie de tous les skills BA.

### 🔴 T2 — Référentiels canoniques BA totalement absents
- Volere (Robertson 2012) — **0 citation**
- Karl Wiegers "Software Requirements" (2013) — **0 citation**
- Ivar Jacobson "Use Cases" (1992) — **0 citation**
- OMG (BPMN/UML créateur) — **0 citation**
- Cockburn "Writing Effective Use Cases" (2000) — **0 citation**

**Action V3** : campagne de sourcing systémique sur les 10 skills.

### 🟢 T3 — Tous les skills avec certification déclarée (0%)
3ème agent au top après PM-SAFE et RTE.

### 🟡 T4 — Frontières inter-agents non documentées
Tous les renvois manquants :
- `cartographie-si.md` → `AGENT-AI-ARCHITECT.md`
- `recette-moa.md` → `AGENT-QA-AGILE.md`
- `elicitation-besoins.md` → `AGENT-PO-SCRUM.md` (techniques alignées Scrum)
- `analyse-impact.md` → `AGENT-CHANGE-MANAGER.md`
- `specification-fonctionnelle.md` → `skills/scrum/spec-fonctionnelle.md`

### 🟡 T5 — 0 anti-pattern explicite (anomalie)
Sur les 10 skills, **0 anti-pattern** documenté. Pour un agent BA expert IIBA CBAP, c'est anormal.

### 🟢 T6 — Doublon thématique acceptable
`specification-fonctionnelle.md` BA vs `spec-fonctionnelle.md` Scrum = **complémentaires** (60-70% redondance acceptable, angles BA vs PO distincts). Pas de fusion recommandée.

---

## 6. Plan d'action recommandé

### V1 — Cosmétique transverse (~10 min)
- Aucun skill sans certif → **pas de V1 mécanique nécessaire** ⭐ (3ème agent dans ce cas)

### V2 — P1 résiduels (4 skills, ~4-5h)
- `elicitation-besoins.md` : refonte profonde (39L → ~100L, Volere/Wiegers/14 techniques BABOK)
- `modelisation-processus.md` : refonte profonde (44L → ~120L, BPMN 2.0 + UML 2.5 détaillés)
- `cartographie-si.md` : refonte profonde (45L → ~80L, TOGAF 10 + Archimate)
- `analyse-impact.md` : revoir référentiel (Kübler-Ross → Kotter + BABOK Strategy Analysis)

### V3 — Enrichissements P2 (6 skills, ~3-4h)
Bundle "Sources + Anti-patterns + Cross-links" sur les 6 skills P2.

### V4 — Cosmétique P3 (optionnel)
Pas applicable (0 P3).

---

## 7. Bilan groupe Agile/Produit (6/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | **Cumul 6** |
|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | **102** |
| Verdicts ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | **2** |
| P3 | 7 | 5 | 1 | 3 | 1 | 0 | **17** |
| P2 | 12 | 16 | 7 | 11 | 5 | 6 | **57** |
| P1 (%) | 24% | 27% | 20% | 25% | 14% | **40%** ⚠️ | 25 (24%) |
| % sans certif | 28% | 37% | 0% | 20% | 0% | 0% | 16% |
| % sources externes | 0% | 10% | 30% | 35% ⭐ | 0% | 0% | 12% |
| Volumétrie moyenne (L) | 78 | 84 | 90 | 103 | 90 | 51 ⚠️ | — |

**Pattern émergent — BA est l'outlier** :
- Plus faible volumétrie moyenne (51L vs 90L moyenne autres)
- Plus haut taux P1 (40% vs 22% autres)
- 0 source externe (régression vs RTE 0% qui était déjà alarmant)
- **Mais** 0 skill sans certif (parfait)

**Hypothèse** : BA a été créé en lot rapide sans approfondissement skill-par-skill. Action prioritaire en V2 : enrichissement profond.

**Apprentissages pour les 3 agents Agile restants** (QA-AGILE, QA-CYCLEV, CHANGE-MANAGER) :
- ⚠️ Si QA-AGILE / QA-CYCLEV ont aussi des skills < 60L, anticiper même pattern de sous-dimensionnement
- ⚠️ CHANGE-MANAGER reprendra le sujet déjà partiellement traité dans `analyse-impact.md` BA et `change-management-agile.md` SM → risque triplon thématique

---

## 8. Annexes

### A. Sources attendues complémentaires BA
- IIBA "A Guide to the Business Analysis Body of Knowledge — BABOK v3" (2015) — iiba.org
- PMI "PMBOK 7" (2021) + PMI-PBA Examination Content Outline
- Open Group "TOGAF 10" (2022) — opengroup.org/togaf
- Open Group "ArchiMate 3.2 Specification" (2023)
- OMG "BPMN 2.0 Specification" (2011) — omg.org/spec/BPMN/2.0/
- OMG "UML 2.5.1 Specification" (2017) — omg.org/spec/UML/
- Suzanne Robertson & James Robertson "Mastering the Requirements Process" (3rd ed 2012) — Volere
- Karl Wiegers & Joy Beatty "Software Requirements" (3rd ed 2013)
- Ivar Jacobson, Magnus Christerson, Patrik Jonsson, Gunnar Övergaard "Object-Oriented Software Engineering: A Use Case Driven Approach" (1992)
- Alistair Cockburn "Writing Effective Use Cases" (2000)
- Alan Klement "When Coffee and Kale Compete" (2018) — Job Stories
- Henri Lipmanowicz & Keith McCandless "The Surprising Power of Liberating Structures" (2013)
- Dave Gray, Sunni Brown, James Macanufo "Gamestorming" (2010)
- John Kotter "Leading Change" (1995, 2nd ed 2012)
- Jeff Hiatt "ADKAR" (2003) — prosci.com
- Everett Rogers "Diffusion of Innovations" (1962, 5th ed 2003)
- ISO/IEC 25010:2011 "Systems and software Quality Requirements and Evaluation" (révisé 2023)
- ISTQB CTFL v4.0 (2023) — istqb.org

### B. Prochaines étapes
- [ ] Validation Guy : verdicts (0 ✓ / 0 P3 / 6 P2 / **4 P1**)
- [ ] Décision : V2 profonde sur BA (4-5h pour les 4 P1) ou continuer le tour d'audits ?
- [ ] Décision : 7ème agent QA-AGILE recommandé pour terminer le quatuor MOA/QA (BA+QA-AGILE+QA-CYCLEV+CHANGE)
