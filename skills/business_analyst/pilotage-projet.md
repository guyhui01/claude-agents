# Skill — Pilotage de Projet MOA (Project Management Cycle V & Hybride)

> Certifications : **PMI-PBA** · **PMP** (Project Management Professional) · **PRINCE2 Practitioner** · **IIBA CBAP** · **ISO 21500 Lead Project Manager** · **AgilePM** (DSDM)
> Agent : AGENT-BUSINESS-ANALYST.md

## Objectif

Piloter un projet MOA de bout en bout (cycle en V ou hybride) selon les référentiels normatifs internationaux (**PMBOK 7**, **PRINCE2**, **ISO 21500/21502**) et français (**AFNOR FD X50-115**) — depuis la charte projet jusqu'à la clôture et la capitalisation lessons learned. Couvre les volets pilotage **non couverts** par le BA pur (analyse) : WBS, planning, jalons, RACI projet, tolérances, suivi avancement, clôture.

## Cadre BABOK v3 (IIBA 2015) — Knowledge Areas mobilisées

| KA BABOK v3 | Tâches typiques pilotage projet MOA |
|---|---|
| **#2 Business Analysis Planning & Monitoring** | T2.1 Plan BA Approach · T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach |
| **#9 Strategy Analysis** | T9.4 Define Change Strategy · T9.3 Assess Risks |
| **Perspective Business Architecture** | Articulation pilotage projet ↔ capabilities entreprise |

## PMBOK Guide 7th Edition (PMI 2021) — 12 Principes + 8 Performance Domains

### 12 Principes (Project Management Standard)
1. Stewardship — diligence, respect, intégrité
2. Team — environnement collaboratif
3. Stakeholders — engagement efficace
4. Value — focus sur la valeur livrée
5. Systems Thinking — vue systémique
6. Leadership — démontrer leadership
7. Tailoring — adapter au contexte
8. Quality — qualité processus + livrables
9. Complexity — naviguer la complexité
10. Risk — optimiser réponses aux risques
11. Adaptability/Resiliency — s'adapter et rebondir
12. Change — embarquer le changement

### 8 Performance Domains
**Stakeholders · Team · Development Approach & Lifecycle · Planning · Project Work · Delivery · Measurement · Uncertainty**

## PRINCE2 7th Edition (PeopleCert/Axelos, septembre 2023) — 7 Principes × 7 Thèmes × 7 Processus

### 7 Principes
Continued business justification · Learn from experience · Defined roles and responsibilities · Manage by stages · **Manage by exception** · Focus on products · Tailor to suit the environment

### 7 Thèmes
**Business Case · Organization · Quality · Plans · Risk · Change · Progress**

### 7 Processus séquencés
1. Starting Up a Project (SU) — Pre-projet
2. Initiating a Project (IP) — Charte + PID
3. Directing a Project (DP) — Pilotage stratégique transverse
4. Controlling a Stage (CS) — Gestion d'une phase
5. Managing Product Delivery (MP) — Pilotage équipe MOE
6. Managing a Stage Boundary (SB) — Transition entre phases (Go/No-Go)
7. Closing a Project (CP) — Clôture formelle

## Charte projet (Project Charter PMBOK) — Document fondateur

**Document signé par le Sponsor avant lancement formel** — autorise officiellement le projet et nomme le Chef de projet MOA.

```
1. Identification
   - Nom du projet, code, version
   - Sponsor (Accountable)
   - Chef de projet MOA (Responsible)
   - Date de signature

2. Justification / Business Case
   - Problématique métier adressée
   - Bénéfices attendus quantifiés (revenus, économies, conformité, NPS)
   - Investissement total estimé
   - ROI cible + délai retour

3. Objectifs SMART
   - 3-5 objectifs Specific Measurable Achievable Realistic Time-bound

4. Périmètre
   - In scope : périmètre fonctionnel + populations + géographies + délai
   - Out of scope : exclusions explicites
   - Hypothèses + contraintes

5. Livrables majeurs
   - Liste des livrables clés avec critères d'acceptation

6. Jalons macro (5-10 max)
   - Kick-off · Charte signée · Fin spec · Fin réalisation · Recette · MEP · Clôture

7. Gouvernance
   - COPIL : fréquence, composition, périmètre décisionnel
   - COTECH : fréquence, composition
   - Équipe projet : RACI macro

8. Budget global
   - Enveloppe globale (CAPEX + OPEX projet)
   - Tolerances PRINCE2 : Time (±X%) · Cost (±Y%) · Scope (Must vs Should vs Could)

9. Top 5 risques + appétit pour le risque
   - Cf. skill gestion-risques.md

10. Autorisation
    - Signatures Sponsor + Chef de projet MOA + Direction
```

## WBS — Work Breakdown Structure (PMI Practice Standard 2nd ed)

Décomposition **hiérarchique livrable-centrée** du périmètre projet en **work packages** estimables (8-80h chacun).

```
Projet (Niveau 0)
├── Phase 1 (Niveau 1)
│   ├── Lot 1.1
│   │   ├── Work Package 1.1.1 (8-80h)
│   │   ├── Work Package 1.1.2
│   │   └── Work Package 1.1.3
│   └── Lot 1.2
├── Phase 2
│   ├── Lot 2.1
│   └── Lot 2.2
└── Phase 3 (Clôture)
```

**Règle 100%** : la somme des Work Packages d'un parent = 100% du périmètre du parent (ni plus, ni moins). Pas de doublon, pas de manque.

**WBS Dictionary** : pour chaque Work Package — description, livrables, critères d'acceptation, propriétaire, durée estimée, coût estimé, dépendances.

## Planning — Méthodes complémentaires

### Diagramme de Gantt (Henry Gantt 1910s)
Visualisation chronologique tâches × durée × dépendances. Outils : MS Project, Primavera, Smartsheet, GanttPRO, ProjectLibre.

### PERT / CPM (Program Evaluation Review Technique 1958 / Critical Path Method)
Identification du **chemin critique** : séquence de tâches dont le retard impacte directement la date de fin.
- Calcul Early Start / Early Finish / Late Start / Late Finish par tâche
- Float / Marge libre par tâche
- Tâches sur chemin critique = marge zéro

### Critical Chain Project Management (Eli Goldratt 1997)
Optimisation TOC (Theory of Constraints) — buffers projet/alimentaire mutualisés en fin de chaîne plutôt que par tâche, élimination du syndrome étudiant + loi de Parkinson.

### Estimation à trois points (PERT)
**Durée espérée = (Optimiste + 4×Probable + Pessimiste) / 6** — réduit biais d'optimisme estimateur unique.

## Jalons & Gates (Stage-Gate Process, Cooper 1986)

Phase = ensemble de Work Packages livrant une valeur jalonnée. **Gate = Go/No-Go formel** avant passage à phase suivante (validation comité).

| Phase type cycle V | Livrable jalon | Critères Gate Go |
|---|---|---|
| **G0 — Cadrage** | Charte projet signée + business case | Sponsor + budget alloué |
| **G1 — Spécification** | SFG + SFD validées MOA | Couverture exigences + recettabilité |
| **G2 — Conception** | STD MOE + maquettes IHM | Architecture validée + faisabilité confirmée |
| **G3 — Réalisation** | Livraison itérative + tests unitaires | DoD respectée |
| **G4 — Recette** | PV de recette + GO MEP | 0 anomalie bloquante + tolerances respectées |
| **G5 — MEP** | Mise en production réussie | Monitoring opérationnel OK |
| **G6 — Clôture** | PV de clôture + lessons learned | Sponsor satisfait + capitalisation |

## RACI projet détaillé — Matrice exhaustive

| Activité projet | Sponsor | CdP MOA | BA | MOE | Métier | DSI | Régulateur |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Validation charte projet | A | R | C | I | C | I | I |
| Élicitation besoins | I | A | R | C | C | I | I |
| Rédaction SFG/SFD | I | A | R | C | C | I | I |
| Conception technique | I | A | C | R | I | C | I |
| Réalisation | I | A | C | R | I | C | I |
| Recette MOA | I | A | R | I | C | I | I |
| Validation MEP | A | R | C | C | C | C | I |
| Conformité réglementaire | I | A | C | I | I | C | R |

**R**esponsible (fait) · **A**ccountable (rend des comptes — 1 seul A par ligne) · **C**onsulted (avis avant action) · **I**nformed (reçoit info après action)

## Pilotage par exception (PRINCE2)

### Concept : Tolérances par dimension

**Le sponsor ne pilote que les exceptions** (dépassement de tolérances) — pas le quotidien du projet.

| Dimension | Tolérance typique | Trigger escalade |
|---|:---:|---|
| Temps | ±10% sur chaque phase | Dépassement → exception report → décision sponsor |
| Coût | ±5% sur budget de phase | Dépassement → exception report → décision sponsor |
| Périmètre | MoSCoW : Must = intangible · Should/Could négociables | Demande changement Must → CCB → arbitrage sponsor |
| Qualité | Critères d'acceptation par livrable | Anomalies > seuil → revue qualité → décision sponsor |
| Risques | Score > seuil défini (cf. gestion-risques) | Risque 🔴 nouveau → CCB |
| Bénéfices | Réduction > seuil business case | Révision business case → décision sponsor |

### Avantages du pilotage par exception
- Sponsor non saturé par opérationnel
- CdP MOA empowered dans son périmètre tolérancié
- Escalade structurée et tracée
- Réduction réunions de pilotage de 40-60%

## Clôture projet & Lessons Learned (PRINCE2 CP / PMBOK Close Project)

### Activités de clôture (Process CP — Closing a Project, PRINCE2)
1. **Transition opérationnelle** : transfert au métier + DSI Run + équipe support
2. **PV de clôture** : signé Sponsor + Métier + DSI + CdP MOA
3. **Bilan budgétaire final** : consommé vs budgété, écart expliqué
4. **Évaluation bénéfices (initiale)** : mesure T0 des KPI business case
5. **Plan d'évaluation bénéfices** (Benefits Realization Plan) : mesures T+6, T+12, T+24 mois
6. **Lessons Learned Workshop** (Retrospective projet)
7. **Archivage documentaire** : référentiel projet pérenne

### Lessons Learned — Méthodes structurées
- **4L's** (Liked / Learned / Lacked / Longed for)
- **Start-Stop-Continue** (3 colonnes simples)
- **KALM** (Keep / Add / Less / More)
- **5 Whys** sur incidents majeurs
- **Knowledge Café** ou **World Café** pour grands projets

### Capitalisation organisationnelle
- Base de connaissances projets (PMO ou Knowledge Management)
- Modèles WBS / Gantt / Charte enrichis par retour terrain
- Métriques benchmarks (effort/livrable, durée/phase, coût/UO)
- Partage cross-projets : communauté de pratique CdP MOA

## Exemple chiffré sectoriel — Groupe d'assurance européen multi-pays

**Contexte anonymisé** : groupe d'assurance européen présent dans 12 pays (IARD + Santé + Vie), ~45 000 collaborateurs, primes 30 Md€/an, ~22M assurés. Programme **conformité IFRS 17 + Solvabilité II reporting renforcé** — durée 24 mois, budget 28 M€.

**Charte projet validée** :
- Sponsor : Directeur Financier Groupe + Directeur Actuariat
- CdP MOA : 1 directeur de programme + 4 CdP MOA filière (Vie, Santé, IARD, Réassurance)
- 5 jalons Gates : G0 cadrage (M0) · G1 spec (M5) · G2 conception (M10) · G3 réalisation (M16) · G4 recette (M21) · G5 MEP (M24) · G6 clôture (M26)

**WBS — 4 niveaux, 312 Work Packages** :
- Niveau 1 : 5 phases (cadrage, spec, conception, réalisation, recette+MEP)
- Niveau 2 : 18 lots (1 par filière × 6 chantiers : data, calculs actuariels, comptable, reporting, IT, change)
- Niveau 3 : 67 sous-lots
- Niveau 4 : 312 work packages estimés 8-80h chacun

**Planning chemin critique (CPM)** :
- Durée critique : 624 jours ouvrés sur 24 mois
- 47 tâches sur chemin critique (15% du total)
- Buffers Goldratt : project buffer 8 semaines fin programme + 3 feeding buffers sur sous-chemins

**Tolerances PRINCE2 définies en charte** :
| Dimension | Tolérance | Seuil escalade COPIL |
|---|:---:|---|
| Temps | ±5% par phase | Dépassement 5% phase → exception report |
| Coût | ±3% phase, ±5% global | Dépassement → décision sponsor |
| Périmètre | Must = intangible (calculs IFRS 17), Should/Could négociables | CCB hebdo |
| Qualité | 0 anomalie bloquante recette + ≤ 3 majeures | Sinon NO-GO MEP |

**Pilotage par exception** :
- COPIL mensuel (vs hebdo initialement prévu, économie -60% temps sponsor)
- Exception reports formels : 7 sur 24 mois (vs 50+ points de pilotage classiques)
- Décisions traçées : 3 changes Must approuvés (régulateur EIOPA), 4 reports phases acceptés

**Clôture & bénéfices mesurés** :
- Conformité IFRS 17 : **100%** au 1er janvier 2024 (échéance respectée)
- Conformité Solvabilité II reporting : **100%** Qx 2024
- Réduction temps clôture comptable trimestrielle : 45 jours → **18 jours** (-60%)
- Budget consommé : 26.8 M€ vs 28 M€ budgété (**-4.3%**, dans tolérance)
- Délai : 24 mois respectés (1 phase reportée de 3 semaines, absorbée par project buffer Goldratt)
- Lessons Learned Workshop : 14 leçons capitalisées (8 méthodologiques + 6 techniques)
- Évaluation bénéfices T+12 : ROI atteint 87% des cibles business case

## 8 anti-patterns pilotage projet MOA

- ❌ **Charte projet absente ou signée verbalement** → pas d'autorité formelle CdP MOA, scope creep garanti
- ❌ **WBS non maintenu** (figé après kick-off, jamais à jour) → dérive silencieuse, replanification impossible
- ❌ **Jalons sans critères Go/No-Go formalisés** → Gates = formalités tamponnées, pas de vrais points d'arrêt
- ❌ **RACI ambigu** (deux R sur une activité, A non identifié, "tout le monde I") → conflits de responsabilité, décisions bloquées
- ❌ **Pilotage par exception inversé** (CdP MOA remonte tout au sponsor, sponsor décide tout) → CdP non-empowered, sponsor saturé
- ❌ **Tolerances PRINCE2 non définies** → impossible d'identifier une "exception", pilotage par jugement subjectif
- ❌ **Clôture projet sautée** ("on enchaîne sur le suivant") → équipe dispersée sans capitalisation, lessons learned perdues
- ❌ **Lessons Learned non documentés ou non lus** → mêmes erreurs reproduites sur projets suivants — coût caché majeur pour l'organisation

## Outils

- **Planning Gantt + CPM** : MS Project · Primavera Oracle P6 · Smartsheet · GanttPRO · ProjectLibre (gratuit) · TeamGantt
- **Plateformes PM intégrées** : Asana · Monday.com · Wrike · ClickUp · Notion (projets simples) · Trello + Power-Ups
- **WBS visualisation** : WBS Schedule Pro · MindManager · XMind · Miro
- **Pilotage budgétaire EVM** : MS Project Pro · Deltek Cobra · ServiceNow PPM · Planview
- **Comitologie / Gouvernance** : Confluence (PID, comptes rendus) · Notion · MS Loop · SharePoint
- **Lessons Learned & Knowledge Mgmt** : Confluence base · Notion · SharePoint Lessons Learned Library · Microsoft Viva Topics
- **Tableaux de bord projet** : Power BI · Tableau · Smartsheet Dashboards · MS Project Online

## Livrables

- **Charte projet PMBOK signée** (Project Charter, autorisation formelle)
- **PID PRINCE2** (Project Initiation Documentation) — équivalent enrichi du Charter
- **WBS hiérarchique** + WBS Dictionary par work package
- **Planning Gantt + CPM** avec chemin critique identifié + buffers Goldratt
- **RACI projet détaillé** par activité × rôle (matrice complète)
- **Charte de tolérances PRINCE2** (Time/Cost/Scope/Quality/Risk/Benefits)
- **Plan de management projet** (Project Management Plan, PMBOK)
- **Exception Reports** (PRINCE2) tracés
- **PV de clôture projet** signé Sponsor + Métier + DSI + CdP MOA
- **Lessons Learned Report** (atelier + capitalisation knowledge base)
- **Benefits Realization Plan** (mesures bénéfices T+6/+12/+24 mois)

## Format de sortie

Pour chaque mission pilotage projet, précise :
- **Méthodologie cible** : cycle V pur (cascade) · hybride (cascade + sprints) · adaptive (agile à l'échelle SAFe) · PRINCE2 Agile
- **Référentiel principal** : PMBOK 7 · PRINCE2 · ISO 21500/21502 · AFNOR FD X50-115 · mix
- **Échelle projet** : petit (< 200 K€, < 6 mois, 1-5 équipiers) · moyen (200K-2M€, 6-18 mois, 5-20 équipiers) · grand programme (> 2 M€, > 18 mois, > 20 équipiers — méthodologies obligatoires)
- **Gouvernance attendue** : COPIL fréquence · COTECH fréquence · CCB (Change Control Board) · Comité d'Architecture · Comité Risques

## Sources

- **PMBOK Guide, 7th Edition** — Project Management Institute (PMI 2021) — 12 principes + 8 Performance Domains
- **PRINCE2 7th Edition** — PeopleCert/Axelos (septembre 2023, remplace 6e édition) — 7 Principles + 7 Themes + 7 Processes
- **ISO 21500:2021** — Project, programme and portfolio management — Context and concepts
- **ISO 21502:2020** — Project, programme and portfolio management — Guidance on project management
- **AFNOR FD X50-115:2001** — Management de projet — Présentation générale (référentiel français)
- **PMI Practice Standard for Work Breakdown Structures, 3rd ed** (2019)
- **Goldratt E.M.** — *Critical Chain* (North River Press, 1997) — Theory of Constraints appliquée au PM
- **Cooper R.G.** — *Winning at New Products: Accelerating the Process from Idea to Launch* (Addison-Wesley, 1986 — 1ère éd., depuis multiples éditions) — Stage-Gate® trademarked phase-gate decision model
- **PMI Practice Standard for Project Risk Management** (2009)
- **P3M3** — Portfolio, Programme & Project Management Maturity Model (OGC / Axelos 2015)
- **BABOK Guide v3** — IIBA (2015) — KA #2 Planning & Monitoring + KA #9 Strategy Analysis

## Voir aussi

- [cadrage-projet.md](cadrage-projet.md) — note de cadrage amont, étude de faisabilité, business case
- [gestion-exigences.md](gestion-exigences.md) — traçabilité exigences ↔ Work Packages WBS
- [analyse-impact.md](analyse-impact.md) — analyse d'impact transverse + conduite du changement
- [recette-moa.md](recette-moa.md) — recette MOA en aval (Gate G4)
- [reporting-moa.md](reporting-moa.md) — gouvernance projet, COPIL, escalade
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — Risk Register projet, ISO 31000, ROAM
- [`../scrum/forecasting-planning.md`](../scrum/forecasting-planning.md) — pont vers planification probabiliste agile (Monte Carlo)
- [`../change_manager/strategie-adoption.md`](../change_manager/strategie-adoption.md) — pilotage adoption post-MEP
