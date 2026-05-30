# Skill — Reporting MOA & Gouvernance Projet

> Certifications : **IIBA CBAP** · **PMI-PBA** · **PRINCE2 Practitioner** · ISO 21500
> Agent : AGENT-BUSINESS-ANALYST.md

## Objectif

Produire des **reportings actionnables** et structurer la **comitologie complète** (COMEX → COSTRAT → COPIL → COTECH → CCB → CDP) pour piloter un projet/programme MOA avec **escalade tracée** et **décisions documentées** — en s'appuyant sur les indicateurs RAG (Red-Amber-Green), les OKR projet et les dashboards multi-niveaux.

## Cadre BABOK v3 (IIBA 2015)

| KA BABOK v3 | Tâches typiques reporting/gouvernance |
|---|---|
| **#2 BA Planning & Monitoring** | T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach · T2.7 Identify BA Performance Improvements |
| **#10 Stakeholder Engagement** | Communication ciblée par quadrant Mendelow (cf. analyse-impact) |
| **#6 Solution Evaluation** | T6.1 Measure Solution Performance · T6.2 Analyze Performance Measures |

## Comitologie complète — Pyramide de gouvernance projet/programme

```
                    ┌──────────────────────┐
                    │  COMEX (Comité Exéc.) │  Stratégique entreprise
                    │  Fréq. trimestrielle  │  Programme > 5 M€ ou stratégique
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  COSTRAT (Comité     │  Stratégique programme
                    │   Stratégique)        │  Fréq. trimestrielle
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  COPIL (Comité de    │  Pilotage projet
                    │   Pilotage)          │  Fréq. mensuelle (parfois bimensuelle)
                    └──────────┬───────────┘
                               │
              ┌────────────────┼─────────────────┐
              │                │                 │
       ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼─────┐
       │  COTECH     │  │  CCB (Change│  │  CDP       │
       │  (Comité    │  │  Control    │  │  (Comité   │
       │   Technique)│  │   Board)    │  │   Projet)  │
       │  Bimensuel  │  │  Hebdo      │  │  Hebdo     │
       └─────────────┘  └─────────────┘  └────────────┘
```

| Instance | Fréquence | Composition typique | Périmètre décisionnel |
|---|---|---|---|
| **COMEX** | Trimestrielle | DG/CEO + Direction Générale + Sponsor exécutif | Validation programme stratégique, arbitrages > 1 M€, alignement portefeuille |
| **COSTRAT** | Trimestrielle | Sponsor + DG métier + DSI + Direction Programme + Régulateur si applicable | Cap stratégique programme, business case, jalons majeurs, exceptions sponsor |
| **COPIL** | Mensuelle (bimensuelle si projet rapide) | Sponsor + CdP MOA + CdP MOE + Métier + DSI + PMO | Pilotage projet RAG, jalons, budget, exceptions PRINCE2, arbitrages périmètre |
| **COTECH** | Bimensuelle | CdP MOA + CdP MOE + Architectes + Tech leads + RSSI | Décisions techniques, architecture, dépendances, dette technique |
| **CCB** (Change Control Board) | Hebdomadaire ou ad hoc | CdP MOA + Sponsor + BA + Architecte + représentant métier | Change Requests : Approved / Rejected / Deferred / Need More Info |
| **CDP** (Comité de Projet) | Hebdomadaire | Équipe projet élargie (CdP MOA, BA, MOE, Métier référents) | Suivi opérationnel hebdomadaire, blocages, plan d'actions |

## Escalade pyramidale — Triggers automatiques

| Trigger | Niveau cible | Délai escalade |
|---|---|---|
| Risque 🔴 nouveau identifié | COPIL (suivant) | < 7 jours |
| Tolérance PRINCE2 dépassée (Time/Cost) | COPIL → COSTRAT | Immédiat (exception report) |
| Demande de change Must (CCB) | COPIL ou COSTRAT selon impact | < 14 jours |
| Réserve majeure régulateur / audit | COSTRAT | < 48h |
| Tolérance globale programme dépassée | COSTRAT → COMEX | Trimestre suivant |
| Bloquant ressources critiques | CDP → COPIL → COSTRAT | Selon ancienneté blocage (3/7/14j) |

## Types de reportings MOA

| Format | Fréquence | Public | Durée présentation |
|---|---|---|---|
| **Daily Standup MOA** | Quotidien | Équipe projet | 15 min |
| **Point hebdomadaire CDP** | Hebdo | Équipe + CdP | 30 min |
| **Rapport d'avancement** | Bimensuel | CdP MOA → CdP MOE → PMO | 1 page PDF |
| **Compte rendu CCB** | Hebdo | Membres CCB + archive Confluence | 15 min |
| **Tableau de bord COPIL** | Mensuel | Sponsors + Direction métier + DSI | 30-45 min, 5-8 slides |
| **Bilan de Gate (Go/No-Go)** | Fin de phase | Comité de steering / COSTRAT | 1h, 10-15 slides |
| **Reporting COSTRAT** | Trimestriel | Direction Générale + Sponsor exécutif | 30 min, 5 slides exécutifs |
| **Reporting COMEX** | Trimestriel | COMEX entreprise | 10-15 min, 1-3 slides |

## Tableau de bord COPIL — Structure 5 slides (gabarit standard)

### Slide 1 — Synthèse exécutive (1 slide récap)
- **Indicateur global RAG** : 🟢 Vert · 🟡 Orange · 🔴 Rouge
- 3 points clés période + 3 décisions demandées
- Trend (vs COPIL précédent)

### Slide 2 — Avancement planning
- Jalons réalisés vs prévus (% avancement par phase)
- Jalons à venir M+1 / M+2 / M+3
- Chemin critique mis à jour (cf. [pilotage-projet.md](pilotage-projet.md))
- Tolérance Time consommée (vs ±10% PRINCE2)

### Slide 3 — Budget & ressources
- Budget consommé vs budgété par phase + global
- RAF (Reste À Faire) + EAC (Estimate At Completion)
- Tolérance Cost consommée (vs ±5% PRINCE2)
- Charge équipe (ETP utilisés / planifiés)

### Slide 4 — Risques & qualité
- Top 5 risques actifs (P × I, owner, trend)
- Anomalies détectées par phase (bloquantes / majeures / mineures)
- Tolérance Quality consommée
- Risques montants 🔴 nouveaux

### Slide 5 — Décisions demandées + Change Requests
- CR Approved / Rejected / Deferred ce mois
- Arbitrages COPIL attendus (options + recommandation CdP MOA)
- Lessons Learned intermédiaires

## OKR projet — Couplage Objectives + Key Results

**Inspiré OKR (John Doerr 2018, *Measure What Matters*)** appliqué au pilotage projet.

### Structure OKR projet
```
Objective (qualitatif, motivant, ambitieux)
  ↓
Key Result 1 (quantitatif, mesurable, ambitieux)
Key Result 2
Key Result 3
```

### Exemple OKR projet conformité réglementaire
- **Objective** : Atteindre la conformité régulateur à l'échéance avec sérénité
- **KR1** : 100% des 47 services critiques documentés et testés (TLPT) au 17/01/2025
- **KR2** : 0 réserve majeure à l'audit ACPR/EBA
- **KR3** : RTO services critiques < 4h (exigence DORA)

### Couplage KPI projet ↔ KPI business case
- **KPI projet** : avancement, budget, qualité, risques (pilotage CdP MOA)
- **KPI bénéfices business case** : ROI, NPS, productivité, conformité (validation Sponsor → COSTRAT)
- **Reporting COPIL** : KPI projet dominants
- **Reporting COSTRAT** : KPI bénéfices dominants

## Indicateurs clés MOA (KPI standardisés)

### Couverture & Qualité
- **Taux de couverture des exigences** : % exigences testées et validées
- **Taux de réussite recette** : % cas de test OK / total
- **Densité d'anomalies** : nombre d'anomalies / KLOC ou / cas de test
- **Anomalies bloquantes ouvertes** : nombre (objectif 0 pour GO MEP)
- **DRE** (Defect Removal Efficiency) : anomalies détectées en pré-prod / total anomalies — cible ≥ 95%

### Avancement & Performance
- **% avancement physique** : livrables validés / livrables planifiés
- **% avancement valeur** : EVM Earned Value / Budget At Completion (cf. pilotage-projet)
- **SPI** (Schedule Performance Index) = EV / PV — ≥ 1 OK
- **CPI** (Cost Performance Index) = EV / AC — ≥ 1 OK
- **Vélocité agile** (si hybride) : points story / sprint

### Engagement & Satisfaction
- **NPS projet stakeholders** : Net Promoter Score interne post-comité
- **Satisfaction utilisateurs ateliers** : score 1-5 post-workshop
- **Taux participation comités** : présence effective / convocation
- **eNPS équipe projet** : engagement collaborateurs équipe

## Code couleur RAG (Red-Amber-Green) — Définition stricte

| Statut | Critères objectifs | Action attendue |
|:---:|---|---|
| 🟢 **Vert** | Dans tolérances Time/Cost/Quality/Risk + 0 risque 🔴 nouveau + Sponsor satisfait | Continuer, pas d'arbitrage |
| 🟡 **Orange** | 1 tolérance consommée à > 70% OU 1-2 risques 🔴 sous contrôle OU dérive amorcée | Plan d'action + suivi rapproché + reporting hebdo |
| 🔴 **Rouge** | Tolérance dépassée OU risque 🔴 actif sans mitigation OU sponsor insatisfait majeur | Exception report immédiat + escalade COSTRAT + décision sponsor < 7 jours |

**Anti-pattern** : RAG "subjectif" mis Vert pour rassurer le Sponsor alors que tolérances dépassées → perte de confiance majeure si découverte tardive. Toujours **RAG quantitatif** basé sur seuils définis en Charte.

## Bilan de Gate (Go/No-Go) — Structure 10 slides

1. **Rappel objectifs phase** (Charter + critères Gate)
2. **Livrables produits** (vs prévus, avec preuve de validation)
3. **Critères Gate Go/No-Go** : ✅ / ❌ / 🟡 par critère
4. **Avancement consolidé** (planning, budget, qualité)
5. **Risques résiduels** sortie de phase + transition phase suivante
6. **Lessons Learned phase** (à capitaliser)
7. **Charge équipe** ressources mobilisées + plan ressources phase suivante
8. **Budget consommé phase** + revue budget phase suivante
9. **Recommandation Go/No-Go** + conditions éventuelles
10. **Décision COSTRAT** + signataires + minutes

## 8 anti-patterns reporting & gouvernance

- ❌ **RAG subjectif sans seuils** (Vert pour rassurer) → perte de confiance Sponsor si découverte tardive
- ❌ **Comitologie unique COPIL pour tout** (pas de COSTRAT, pas de CCB) → sponsor saturé par opérationnel, décisions techniques mal arbitrées
- ❌ **Pas d'escalade pyramidale formalisée** → risques 🔴 traités en COPIL au lieu de remonter COSTRAT
- ❌ **Reporting figé sans analyse** (tableau de chiffres bruts sans interprétation CdP) → Sponsor doit décoder, perte de temps comité
- ❌ **Décisions COPIL non tracées** → conflits ultérieurs sur ce qui a été acté, pas de Change Log
- ❌ **OKR confondus avec KPI** → OKR = ambitions trimestrielles, KPI = mesures continues, ne pas mélanger
- ❌ **Compte rendu CCB inexistant** → Change Log absent, scope creep silencieux
- ❌ **Reporting COMEX = reporting COPIL agrandi** → noyer le COMEX dans le détail au lieu de décisions stratégiques

## Outils

- **Comitologie & Comptes Rendus** : Confluence · Notion · MS Loop · SharePoint
- **Tableaux de bord COPIL** : PowerPoint · Google Slides · Confluence Roadmaps · Smartsheet Dashboards
- **Reporting automatisé** : Power BI · Tableau · Looker · Domo · Qlik Sense
- **Reporting projet** : MS Project Online · Smartsheet · Asana Goals · ServiceNow PPM · Planview
- **OKR** : Ally.io (Microsoft Viva Goals) · Perdoo · Gtmhub (Quantive) · Atlassian Jira Align
- **Change Log (CCB)** : Jira (workflow Change Request custom) · ServiceNow Change Management · Confluence Change Log
- **Dashboards multi-niveaux** : ThoughtSpot · Sisense · Power BI (Premium pour large audience)

## Livrables

- **Charte de gouvernance projet** (comitologie + RACI comités + fréquence + ordre du jour standard)
- **Tableau de bord COPIL mensuel** (PowerPoint 5 slides + dashboard live Confluence/Power BI)
- **Rapport d'avancement hebdomadaire** (1 page PDF) pour PMO + filière
- **Compte rendu CCB hebdomadaire** + Change Log à jour (Excel/Jira)
- **Bilan de Gate** (10 slides + PV signé COSTRAT)
- **Reporting COSTRAT trimestriel** (5 slides exécutifs, KPI bénéfices)
- **Reporting COMEX trimestriel** (1-3 slides programme, alignement portefeuille)
- **OKR projet trimestriels** documentés et tracés
- **Exception Reports PRINCE2** archivés (escalade Time/Cost/Scope/Quality)

## Format de sortie

Pour chaque mission reporting, précise :
- **Type de reporting** : COPIL · COSTRAT · COMEX · CCB · CDP · Bilan de Gate
- **Fréquence cible** : daily · hebdo · bimensuel · mensuel · trimestriel · ad hoc
- **Public** : équipe / management / sponsor / DG / COMEX / régulateur
- **Indicateurs disponibles** : EVM (SPI/CPI) · ratios qualité · NPS / eNPS · OKR avancement
- **Outil de présentation** : PowerPoint · Confluence · Power BI · Smartsheet · combiné
- **Niveau de formalisme** : startup léger · ETI structuré · grand groupe / secteur public protocolaire

## Sources

- **PMBOK Guide, 7th Edition** — PMI (2021) — Performance Domain Measurement, Earned Value Management
- **PRINCE2 7th Edition** — Axelos / PeopleCert (2017, rév. 2023) — Theme Progress, Process DP (Directing a Project)
- **BABOK Guide v3** — IIBA (2015) — KA #2 Planning & Monitoring + KA #6 Solution Evaluation + KA #10 Stakeholder Engagement
- **ISO 21500:2021** — Project, programme and portfolio management — Performance reporting
- **Doerr J.** — *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs* (Portfolio Penguin, 2018)
- **Mendelow A.** — *Stakeholder Power-Interest Grid* (1991) — pour ciblage communication par audience
- **Kerzner H.** — *Project Management Metrics, KPIs, and Dashboards* (Wiley, 4ème éd. 2022)

## Voir aussi

- [pilotage-projet.md](pilotage-projet.md) — pilotage projet aval (WBS, Gantt, Tolerances, EVM)
- [cadrage-projet.md](cadrage-projet.md) — Charte projet amont, définit la comitologie initiale
- [analyse-impact.md](analyse-impact.md) — Stakeholder Impact Matrix Mendelow pour ciblage communication
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — Risk Register projet, escalade COSTRAT
- [`../scrum/reporting-kpi.md`](../scrum/reporting-kpi.md) — équivalent reporting agile (PO Scrum)
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — vue backlog agile pour reporting hybride
