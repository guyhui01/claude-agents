# WF-002 — Delivery Agile SAFe

> PI Planning → sprint backlog → reporting avancement CODIR  
> Certifications mobilisées : SAFe 6 · SAFe RTE · SAFe POPM 6 · SAFe LPM · PSM I · PMP

---

## Carte d'identité

```yaml
id: "WF-002"
nom: "Delivery Agile SAFe"
domaine: "Agile & Produit"
declencheur: "Lancement d'un PI Planning ou démarrage d'un sprint ART"
resultat_final: "PI Objectives validés + Program Backlog WSJF + Plan sprint + Reporting CODIR"
duree_estimee: "60-120 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Workflow dense : 6 agents, orchestration ART multi-équipes, WSJF, PI Planning, dépendances croisées et reporting CODIR. Opus 4.8 est nécessaire pour la profondeur de raisonnement SAFe et la cohérence des outputs sur l'ensemble de la chaîne."
modele_alternatif: "claude-sonnet-4-6"  # acceptable pour des contextes ART simples (1-2 équipes, PI connu)
agents_core:
  - PRODUCT-MANAGER-SAFE  # vision Programme, roadmap ART
  - RELEASE-TRAIN-ENGINEER # facilitation PI Planning, coordination ART
  - PO-SAFE               # features, WSJF, PI Objectives équipe
  - SCRUM-MASTER          # plan de sprint, coaching
  - QA-AGILE              # tests d'acceptation sprint
  - CHEF-PROJET-IA        # reporting CODIR, EVM
agents_optionnels:
  - CHANGE-MANAGER        # si déploiement avec fort changement organisationnel
  - BUSINESS-ANALYST      # si features nécessitent un recadrage métier
statut: "disponible"
version: "1.1"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | PRODUCT-MANAGER-SAFE | Vision Programme, priorisation features ART | Vision board, roadmap PI |
| 2 | RELEASE-TRAIN-ENGINEER | Facilitation PI Planning, dépendances inter-équipes | Program Board, ROAM |
| 3 | PO-SAFE | PI Objectives équipe, WSJF, features sprint | PI Objectives + backlog sprint |
| 4 | SCRUM-MASTER | Plan de sprint, identification impediments | Sprint plan validé |
| 5 | QA-AGILE | Critères d'acceptation, plan de tests sprint | Test plan sprint |
| 6 | CHEF-PROJET-IA | Reporting CODIR, EVM, tableau de bord | Dashboard + note CODIR |
| opt | CHANGE-MANAGER | Accompagnement adoption SAFe | Plan résistances |

---

## Paramètres contextuels

```
CONTEXTE ART (à renseigner avant le démarrage)
──────────────────────────────────────────────────
Nom ART            : [ex. ART Digital Banking]
Nombre d'équipes   : [ex. 3 squads / 5 équipes Scrum]
Durée PI           : [ex. 10 semaines / 4 sprints de 2 semaines]
Numéro PI actuel   : [ex. PI-07]
Capacité ART       : [ex. 120 story points / PI]
Dépendances        : [autres ART, systèmes externes, fournisseurs]
Contraintes        : [gel code, compliance date, dépendance release]
Langue livrables   : [Français / Anglais / Bilingue]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — PI Planning ou sprint à planifier)
        │
        ▼
[STEP-01 — PRODUCT-MANAGER-SAFE]
  Vision Programme, roadmap PI,
  features priorisées (WSJF)
        │
        ▼
[STEP-02 — RELEASE-TRAIN-ENGINEER]
  Facilitation PI Planning,
  Program Board, dépendances,
  ROAM risks
        │
        ▼
[STEP-03 — PO-SAFE]  ◄── Parallel possible avec step 02 pour chaque équipe
  PI Objectives par équipe,
  WSJF features, backlog sprint 1
        │
        ▼
[STEP-04 — SCRUM-MASTER]
  Sprint planning,
  identification impediments,
  capacité équipe
        │
        ▼
[STEP-05 — QA-AGILE]
  Critères d'acceptation,
  plan de tests sprint
        │
        ▼
[STEP-06 — CHEF-PROJET-IA]
  Reporting CODIR,
  EVM (CPI/SPI),
  dashboard PI
        │
        ▼
<GATEWAY — Changement organisationnel majeur ?>
  ├── OUI ──▶ [STEP-07 — CHANGE-MANAGER]
  │            ADKAR, résistances SAFe
  └── NON ──▶ (bypass)
        │
        ▼
(FIN — PI lancé, sprint planifié, CODIR informé)
```

---

## Étapes détaillées

### STEP-01 — PRODUCT-MANAGER-SAFE

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-PRODUCT-MANAGER-SAFE"
  role: "Vision et priorisation Programme pour le PI"
  input:
    - "Roadmap produit Programme actuelle"
    - "Feedback clients et métriques PI précédent"
    - "Contraintes budget et capacité ART"
    - "Objectifs stratégiques portefeuille"
  output_attendu:
    - "Vision board PI (en 1 page)"
    - "Top 10 features priorisées WSJF"
    - "Lean Business Case pour features majeures"
    - "Communication vision Business Owners"
  condition_passage: "Vision validée par les Business Owners"
  duree_estimee: "15 min"
  execution: "séquentielle — démarre le workflow"
```

### STEP-02 — RELEASE-TRAIN-ENGINEER

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-RELEASE-TRAIN-ENGINEER"
  role: "Facilitation PI Planning et Program Board"
  input:
    - "Vision et features priorisées (STEP-01)"
    - "Capacités des équipes Scrum"
    - "Dépendances techniques inter-équipes"
    - "Enablers architecturaux disponibles"
  output_attendu:
    - "Program Board avec dépendances visuelles"
    - "ROAM risks (Resolved/Owned/Accepted/Mitigated)"
    - "Agenda PI Planning (2 jours type)"
    - "Liste des impediments ART à lever"
    - "Vote de confiance (cible > 3.5/5)"
  condition_passage: "Vote de confiance atteint"
  si_echec: "Itération de re-planification si vote < 3/5"
  duree_estimee: "20 min"
  execution: "séquentielle après STEP-01"
```

### STEP-03 — PO-SAFE

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-PO-SAFE"
  role: "PI Objectives et backlog sprint équipe"
  input:
    - "Features allouées à l'équipe (STEP-02)"
    - "Capacité sprint en story points"
    - "Dépendances identifiées sur Program Board"
  output_attendu:
    - "PI Objectives équipe (3-5 objectifs SMART)"
    - "Backlog sprint 1 : 5-10 US priorisées"
    - "Critères WSJF par feature"
    - "Risques équipe déclarés (ROAM)"
  duree_estimee: "15 min"
  execution: "peut être parallélisée par équipe"
```

### STEP-04 — SCRUM-MASTER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-SCRUM-MASTER"
  role: "Sprint planning et capacité équipe"
  input:
    - "PI Objectives et backlog sprint (STEP-03)"
    - "Vélocité historique de l'équipe"
    - "Disponibilités et congés sprint"
  output_attendu:
    - "Sprint Goal unique par équipe (1 objectif cohérent)"
    - "Sprint plan validé — forecast des Developers (US engagées + story points)"
    - "Sprint Backlog auto-organisé par les Developers (allocation ajustée au Daily ; le SM facilite, n'assigne pas — Scrum Guide 2020)"
    - "Impediments sprint 1 listés"
    - "Définition of Done rappelée"
  duree_estimee: "10 min"
  execution: "séquentielle après STEP-03"
```

### STEP-05 — QA-AGILE

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-QA-AGILE"
  role: "Plan de tests et critères d'acceptation sprint"
  input:
    - "US engagées dans le sprint (STEP-04)"
    - "Critères d'acceptance fonctionnels disponibles"
    - "Environnements de test disponibles"
  output_attendu:
    - "Scénarios Gherkin pour les US critiques"
    - "Plan de test sprint (nominal + erreur + limite)"
    - "Stratégie de régression (automation vs manuel)"
  duree_estimee: "10 min"
  execution: "parallèle possible avec STEP-04"
```

### STEP-06 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Tableau de bord PI et reporting CODIR"
  input:
    - "PI Objectives (STEP-03) + Program Board (STEP-02)"
    - "Budget PI alloué et consommé"
    - "Métriques PI précédent (PI Predictability)"
  output_attendu:
    - "Dashboard PI : objectifs / capacité / avancement / risques"
    - "Note CODIR (1 page) : état PI, risques, décisions requises"
    - "EVM sprint (CPI, SPI si applicable)"
    - "RAG status par feature critique"
  duree_estimee: "10 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-002
──────────────────────────────────────────────────────
□ Vision board PI (1 page)
□ Top 10 features priorisées WSJF + Lean Business Case
□ Program Board avec dépendances visuelles
□ ROAM risks documentés
□ PI Objectives par équipe (SMART)
□ Backlog sprint 1 engagé + story points
□ Plan de sprint validé (capacité, répartition)
□ Scénarios Gherkin US critiques
□ Dashboard PI : budget / avancement / risques
□ Note CODIR (1 page)
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-002 depuis workflows/WF-002-delivery-safe.md.

Contexte ART :
- Nom ART : [à renseigner]
- Nombre d'équipes : [à renseigner]
- Durée PI : [à renseigner]
- Contraintes : [à renseigner]

Lance STEP-01 avec AGENT-PRODUCT-MANAGER-SAFE.
```
