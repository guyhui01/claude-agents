# Skill — Cadrage de Projet MOA

> Certifications : **PMI-PBA** · **PMP** · **PRINCE2 Practitioner** · **IIBA CBAP** · **TOGAF 10** · ISO 21500
> Agent : AGENT-BUSINESS-ANALYST.md

## Objectif

Définir le périmètre, le business case, la gouvernance et les conditions de succès d'un projet **avant son lancement formel** — produire les artefacts d'**initialisation** (Note de cadrage, **Charte projet PMBOK**, **PID PRINCE2**) qui autorisent l'engagement budgétaire et nomment formellement le Chef de projet MOA.

## Cadre BABOK v3 (IIBA 2015)

| KA BABOK v3 | Tâches typiques cadrage |
|---|---|
| **#9 Strategy Analysis** | T9.1 Analyze Current State · T9.2 Define Future State · T9.4 Define Change Strategy |
| **#2 BA Planning & Monitoring** | T2.1 Plan BA Approach · T2.3 Plan BA Governance |
| **#10 Stakeholder Engagement** | Identification des parties prenantes (cf. Mendelow Power/Interest) |

## Charte projet (Project Charter PMBOK 7) — Document fondateur signé Sponsor

**À distinguer de la simple note de cadrage** : la Charte est l'**autorisation formelle** signée par le Sponsor avant tout engagement budgétaire — elle nomme le CdP MOA et lui confère son autorité.

```
1. Identification
   - Nom du projet, code, version, date

2. Justification / Business Case (cf. section dédiée)
   - Problématique métier + bénéfices attendus chiffrés
   - Investissement total estimé + ROI cible + délai retour

3. Objectifs SMART
   - 3-5 objectifs Specific Measurable Achievable Realistic Time-bound

4. Périmètre (Scope Statement)
   - In scope · Out of scope · Hypothèses · Contraintes

5. Livrables majeurs avec critères d'acceptation

6. Jalons macro (Gates Go/No-Go, max 5-10)

7. Gouvernance (cf. reporting-moa)
   - COPIL : composition, fréquence, périmètre décisionnel
   - COTECH, CCB (Change Control Board), Comité Risques

8. RACI macro (acteurs clés × phases)

9. Budget global + Tolérances PRINCE2
   - Time ±X%, Cost ±Y%, Scope MoSCoW

10. Top 5 risques + appétit pour le risque

11. Hypothèses & dépendances projet externes

12. Autorisation
    - Signatures Sponsor + CdP MOA + Direction
```

## Note de cadrage — Structure (livrable amont de la Charte)

```
1. Contexte et enjeux (situation actuelle, problématique, drivers stratégiques)
2. Périmètre (in scope / out of scope / frontières SI)
3. Parties prenantes (Sponsor, MOA, MOE, utilisateurs, RACI simplifié)
4. Livrables attendus (avec critères de succès macro)
5. Planning macro (jalons clés, Go/No-Go envisagés)
6. Budget estimatif (enveloppe, postes coût principaux)
7. Risques et hypothèses (Top 5 risques + mitigation, hypothèses de travail)
8. Conditions de succès (KPI projet + KPI business)
9. Décision demandée (validation lancement, arbitrages)
```

## Business Case — Méthode chiffrée (PRINCE2 Theme Business Case)

### Structure type
```
1. Reasons / Drivers (Why now?)
2. Business options (Do nothing / Do minimum / Do something)
3. Expected Benefits — quantifiés en € ou unités mesurables
   - Hard benefits : revenus, économies, productivité, time-to-market
   - Soft benefits : satisfaction client (NPS), engagement collaborateurs (eNPS), conformité, image
4. Expected Dis-benefits — coûts ou impacts négatifs assumés
5. Timescale — délais, jalons macro
6. Costs — CAPEX + OPEX projet + RUN post-MEP
7. Investment Appraisal — ROI, NPV (Net Present Value), Payback Period, IRR
8. Major Risks — top risques business case (cf. gestion-risques)
```

### Calculs financiers clés

| Indicateur | Formule | Décision |
|---|---|---|
| **ROI** | (Bénéfices - Coûts) / Coûts × 100% | ≥ 20% sur 3 ans : favorable |
| **NPV** (Net Present Value) | Σ Cash flows actualisés - Investissement initial | NPV > 0 : projet créateur de valeur |
| **Payback Period** | Investissement / Bénéfice annuel moyen | < 24-36 mois selon secteur |
| **IRR** (Internal Rate of Return) | Taux qui annule NPV | > Coût du capital (CMPC) entreprise |

## Étude de faisabilité — 5 dimensions (TELOS étendu)

| Dimension | Questions clés | Livrable |
|---|---|---|
| **Technique** | Technologies disponibles ? Compétences internes ? Architecture cible viable ? | POC / Spike technique |
| **Économique / Financière** | ROI ? Budget disponible ? Funding source ? | Business Case + NPV |
| **Légale / Réglementaire** | RGPD, AI Act, sectoriel (DORA, NIS2, MDR), licences | Analyse juridique + DPIA |
| **Opérationnelle / Organisationnelle** | Capacité absorption changement ? Disponibilité ressources ? | Analyse d'impact + capacity planning |
| **Temporelle / Calendrier** | Délai réaliste ? Fenêtre de marché ? Dépendances externes ? | Planning macro + analyse chemin critique |
| **Environnementale / RSE** *(optionnel)* | Bilan carbone projet ? Conformité CSRD ? | Évaluation environnementale |

## Matrice Eisenhower appliquée au cadrage périmètre

```
Important + Urgent       → Phase 1 (MVP) — Must (MoSCoW)
Important + Non urgent   → Phase 2-3 — Should / Could
Non important + Urgent   → Déprioriser ou déléguer — Could
Non important + Non urgent → Out of scope — Won't (this time)
```

## WBS niveau 2 — Décomposition initiale phases × lots

À ce stade de cadrage, on produit le **WBS macro** (2 niveaux maximum) — le WBS détaillé (3-4 niveaux, work packages 8-80h) vient en phase d'initialisation projet (cf. [pilotage-projet.md](pilotage-projet.md)).

```
Projet (Niveau 0)
├── Phase 1 — Cadrage & Initialisation (Niveau 1)
│   ├── Lot 1.1 — Études faisabilité
│   ├── Lot 1.2 — Business case
│   └── Lot 1.3 — Charte projet
├── Phase 2 — Spécification
├── Phase 3 — Conception
├── Phase 4 — Réalisation
├── Phase 5 — Recette & MEP
└── Phase 6 — Clôture
```

## Arbre de décision Build / Buy / SaaS / Lease (TOGAF + Gartner)

| Critère | Build (sur-mesure) | Buy (COTS on-prem) | SaaS (cloud) | Lease (open source + intégration) |
|---|:---:|:---:|:---:|:---:|
| Coût initial CAPEX | Élevé | Moyen-Élevé | Faible | Moyen |
| TCO sur 5 ans | Variable, souvent élevé | Moyen | Élevé (abonnement) | Faible-Moyen |
| Time-to-market | Long (12-24 mois) | Moyen (6-12 mois) | Rapide (1-3 mois) | Moyen (3-9 mois) |
| Différenciation business | Forte | Faible | Faible | Moyenne |
| Souveraineté données | Totale | Forte | Variable (cf. localisation) | Forte |
| Dépendance fournisseur | Faible (interne) | Moyenne (éditeur) | Forte (lock-in) | Faible (open source) |
| Critère décision dominant | Différenciation compétitive forte | Métier standard + besoin spécifique | Métier standardisé, besoin time-to-market | Mix flexibilité + souveraineté |

## Exemple chiffré sectoriel — Cadrage transformation **secteur public** (administration)

**Contexte anonymisé** : agence publique européenne (~15 000 agents, 28 sites territoriaux). Cadrage du programme **"Démat'Services 2025"** — dématérialisation 32 procédures administratives usagers (12 M demandes/an).

**Charte projet validée** :
- Sponsor : Directeur Général + Directeur Programme Transformation
- CdP MOA : 1 directeur de programme + 4 CdP MOA filière
- Budget global : **18 M€** (CAPEX 11 M€ + OPEX projet 7 M€ sur 30 mois)
- Tolérances PRINCE2 : Time ±10% phase / ±5% global · Cost ±5% phase / ±3% global · Scope Must intangible (32 procédures cibles)

**Business Case** :
- Bénéfices T+36 mois (post-MEP totale) :
  - Économie traitement papier : 4.2 M€/an (réduction 65% volumes papier)
  - Productivité agents : 380 ETP recentrés sur tâches valeur ajoutée
  - Délais traitement usagers : 21 jours → **5 jours** moyenne pondérée (-76%)
  - Satisfaction usagers (baromètre annuel) : 5.8/10 → cible **7.5/10**
  - Conformité RGPD + Référentiel Général de Sécurité ANSSI : 100%
- Investissement : 18 M€ projet + 2 M€/an RUN
- ROI 5 ans : **+34 M€ net** · Payback 28 mois · NPV (taux 4%) : +12 M€

**Étude de faisabilité (TELOS étendu)** :
- Technique : ✅ (cloud SecNumCloud disponible, agents formés Numérique)
- Économique : ✅ (financement Plan France Relance + Plan IA ministère)
- Légale : ✅ sous conditions (DPIA obligatoire, RGS ANSSI, accessibilité RGAA 4.1, Référentiel Général Eco-conception RGESN)
- Opérationnelle : 🟡 (forte conduite changement requise, dialogue social syndical, formation 8 500 agents)
- Temporelle : ✅ (30 mois, alignée mandature politique)

**Matrice Eisenhower** → Phase 1 MVP : 8 procédures les plus volumiques (60% des 12M demandes) · Phase 2 : 16 procédures complémentaires · Phase 3 : 8 procédures niches · Out of scope (V2 future) : interopérabilité inter-administrations.

**Décision COPIL** : GO programme avec 3 conditions (DPIA validée préalablement par CNIL, plan formation 8 500 agents budgété, dispositif accompagnement syndical formalisé).

## 6 anti-patterns cadrage projet

- ❌ **Note de cadrage sans business case chiffré** ("c'est stratégique") → pas d'autorité d'engagement budgétaire, arbitrage Comex impossible
- ❌ **Charte projet absente** (on saute directement au plan de management) → CdP MOA non-empowered formellement, scope creep garanti
- ❌ **In scope défini, out of scope absent** → ambiguïté périmètre, demandes additionnelles non tracées
- ❌ **Faisabilité limitée au technique** (TELOS partiel : économique + légal + opérationnel + temporel ignorés) → risques découverts en cours de projet
- ❌ **Top 5 risques sans cotation P×I ni owner** → ne déclenche aucune action concrète
- ❌ **Pas de tolérances PRINCE2 définies** → impossible de piloter par exception, sponsor saturé par opérationnel

## Outils

- **Note de cadrage / Charte / Business Case** : Word + Confluence + Notion · ProjectLibre (gratuit) · Smartsheet
- **WBS macro** : MindManager · XMind · Lucidchart · Miro · draw.io
- **Faisabilité technique POC** : Notion · Confluence · GitHub (POC repository) · Postman (API tests)
- **Business case financier** : Excel + templates PMI · Smartsheet Financial Templates · Power BI dashboards
- **Évaluation Build/Buy/SaaS** : Gartner Decision Tools · Forrester TEI (Total Economic Impact) calculator
- **DPIA / Compliance** : CNIL PIA software (gratuit) · OneTrust · Vanta

## Livrables

- **Note de cadrage validée Sponsor** (livrable amont avant Charte)
- **Charte projet PMBOK signée** ou **PID PRINCE2** (autorisation formelle)
- **Business Case** chiffré (ROI, NPV, Payback, IRR)
- **Étude de faisabilité TELOS** (5 dimensions documentées)
- **Périmètre MoSCoW** (Must / Should / Could / Won't)
- **WBS macro niveau 2** (phases × lots)
- **Top 5 risques + plan mitigation**
- **Arbre décision Build/Buy/SaaS** documenté si pertinent
- **DPIA + analyse conformité** réglementaire (si traitement données sensibles)

## Format de sortie

Pour chaque mission cadrage, précise :
- **Type de projet** : SI/digital · transformation organisationnelle · réglementaire · IA · transverse
- **Contexte client** : taille organisation · secteur · maturité projet · gouvernance existante
- **Contraintes connues** : budget cap · délai impératif · réglementation · disponibilité ressources
- **Décision attendue** : Go/No-Go Comex · arbitrage budgétaire · validation périmètre · choix Build/Buy/SaaS
- **Niveau de formalisme** : startup/scale-up (cadrage léger) · ETI (note de cadrage + business case) · grand groupe / secteur public (Charte PMBOK + PID PRINCE2 + DPIA + COPIL formalisé)

## Sources

- **PMBOK Guide, 7th Edition** — PMI (2021) — Project Charter, Business Case
- **PRINCE2 7th Edition** — PeopleCert/Axelos (septembre 2023, remplace 6e édition) — Theme Business Case, Process SU (Starting Up a Project)
- **ISO 21500:2021** — Project, programme and portfolio management — Context and concepts
- **BABOK Guide v3** — IIBA (2015) — KA #9 Strategy Analysis, KA #2 Planning & Monitoring
- **AFNOR FD X50-115:2001** — Management de projet — Présentation générale
- **Cooper R.G.** — *Winning at New Products: Creating Value Through Innovation* (Basic Books, 5ème éd. 2017) — Stage-Gate
- **Eisenhower Matrix** — Eisenhower D.D. (1954) — priorisation Important/Urgent
- **TOGAF Standard 10th Edition** — The Open Group (2022) — Phase A Architecture Vision

## Voir aussi

- [pilotage-projet.md](pilotage-projet.md) — pilotage projet aval (WBS détaillé, Gantt/CPM, Tolerances, Clôture, Lessons Learned)
- [elicitation-besoins.md](elicitation-besoins.md) — élicitation amont avant la note de cadrage
- [cartographie-si.md](cartographie-si.md) — état des lieux SI mobilisé pour faisabilité technique
- [analyse-impact.md](analyse-impact.md) — analyse impact organisationnel + conduite changement
- [reporting-moa.md](reporting-moa.md) — gouvernance projet, COPIL, escalade
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — Risk Register projet (ISO 31000, COSO ERM)
- [`../scrum/business-model-canvas.md`](../scrum/business-model-canvas.md) — Business Model Canvas pour business case agile
