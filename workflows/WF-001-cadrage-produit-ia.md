# WF-001 — Cadrage Produit IA

> Brief client → backlog priorisé + critères d'acceptation  
> Certifications mobilisées : PSPO I · SAFe 6 · PMI-ACP · ISTQB · UX certifié

---

## Carte d'identité

```yaml
id: "WF-001"
nom: "Cadrage Produit IA"
domaine: "Agile & Produit"
declencheur: "Brief client reçu / idée produit à cadrer"
resultat_final: "Backlog initial priorisé + critères d'acceptation Gherkin"
duree_estimee: "45-90 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Workflow structuré et séquentiel — sorties balisées (US, Gherkin, wireframes). Sonnet 4.6 offre le meilleur rapport qualité/vitesse/coût pour ce type de production."
modele_alternatif: "claude-opus-4-8"  # si brief client très ambigu ou contexte métier complexe (ex: réglementaire, niche sectorielle)
agents_core:
  - BUSINESS-ANALYST     # analyse des besoins métier, BPMN AS-IS
  - UX-DESIGNER          # parcours utilisateur, personas, wireframes clés
  - PO-SCRUM             # rédaction User Stories + priorisation MoSCoW
  - QA-AGILE             # critères d'acceptation + cas de test BDD
agents_optionnels:
  - CHANGE-MANAGER       # si transformation organisationnelle impliquée
  - PRODUCT-MANAGER-SAFE # si contexte SAFe / multi-équipes
  - JURIDIQUE-IA         # si données personnelles ou AI Act concerné
  - AI-ARCHITECT         # si produit IA-natif (RAG, agents, multi-modèles)
  - PROMPT-ENGINEER      # si conception de prompts ou agents IA dans le périmètre
  - FINANCIAL-ANALYST    # si business case et chiffrage ROI requis dès le cadrage
statut: "disponible"
version: "1.2"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | BUSINESS-ANALYST | Analyse des besoins métier, BPMN AS-IS | Carte des besoins, périmètre in/out |
| 2 | UX-DESIGNER | Parcours utilisateur, personas, wireframes clés | User journey map, maquettes |
| 3 | PO-SCRUM | Rédaction User Stories + priorisation MoSCoW | Backlog initial (8-15 US) |
| 4 | QA-AGILE | Critères d'acceptation + cas de test BDD | Scénarios Gherkin validés |
| opt | CHANGE-MANAGER | Plan d'adoption si changement organisationnel | ADKAR assessment, plan comm |
| opt | PRODUCT-MANAGER-SAFE | Alignement vision Programme si ART | Epic SAFe, Lean Business Case |
| opt | AI-ARCHITECT | Esquisse d'architecture cible si produit IA-natif | Schéma archi C4 Level 1, choix LLM |
| opt | PROMPT-ENGINEER | Conception baseline de prompts si IA | System prompt v0, stratégie tokens |
| opt | FINANCIAL-ANALYST | Business case léger pour go/no-go | ROI estimé, payback, scénarios |

---

## Paramètres contextuels

```
CONTEXTE CLIENT (à renseigner avant le démarrage)
──────────────────────────────────────────────────
Secteur          : [Banque / Assurance / Retail / Industrie / Autre]
Type de produit  : [App IA / Portail B2B / CMS / Workflow interne / Autre]
Taille équipe    : [Solo / 1 squad / Plusieurs équipes SAFe]
Méthodo projet   : [Scrum / SAFe / Kanban / Hybride]
Contraintes      : [Date jalon, budget, RGPD, AI Act, stack imposée]
Langue livrables : [Français / Anglais / Bilingue]
Niveau de détail : [MVP rapide / Cadrage complet / Backlog multi-sprints]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Brief client reçu)
        │
        ▼
[STEP-01 — BUSINESS-ANALYST]
  Analyse métier, BPMN AS-IS,
  identification des besoins
        │
        ▼
<GATEWAY — Composante UX identifiée ?>
  ├── OUI ──▶ [STEP-02 — UX-DESIGNER]
  │            User journey, personas, wireframes
  │                      │
  └── NON ──────────────┘
        │
        ▼
[STEP-03 — PO-SCRUM]
  Rédaction User Stories,
  priorisation MoSCoW / WSJF
        │
        ▼
[STEP-04 — QA-AGILE]
  Critères d'acceptation Gherkin
  Cas de tests BDD
        │
        ▼
<GATEWAY — Transformation organisationnelle ?>
  ├── OUI ──▶ [STEP-05 — CHANGE-MANAGER]
  │            ADKAR, plan communication
  │                      │
  └── NON ──────────────┘
        │
        ▼
<GATEWAY — Contexte SAFe / multi-équipes ?>
  ├── OUI ──▶ [STEP-06 — PRODUCT-MANAGER-SAFE]
  │            Epic SAFe, Lean Business Case
  │                      │
  └── NON ──────────────┘
        │
        ▼
(FIN — Backlog + critères d'acceptation livrés)
```

---

## Étapes détaillées

### STEP-01 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Analyse des besoins métier et élicitation"
  input:
    - "Brief client (texte libre ou template structuré)"
    - "Contexte secteur : [secteur]"
    - "Contraintes identifiées : [budget, délai, tech, réglementaire]"
  output_attendu:
    - "Carte des besoins (job-to-be-done structuré)"
    - "Liste des parties prenantes avec rôles"
    - "Périmètre fonctionnel : in scope / out of scope"
    - "Processus AS-IS (BPMN simplifié si applicable)"
    - "Questions ouvertes à clarifier"
  condition_passage: "Output validé par l'utilisateur avant STEP-02"
  si_echec: "Relancer STEP-01 avec brief enrichi ou atelier d'élicitation"
  duree_estimee: "15 min"
  execution: "séquentielle"
```

### STEP-02 — UX-DESIGNER (conditionnel)

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-UX-DESIGNER"
  condition_activation: "Produit avec interface utilisateur / parcours à concevoir"
  role: "Conception parcours utilisateur et wireframes clés"
  input:
    - "Carte des besoins (STEP-01)"
    - "Parties prenantes identifiées"
    - "Contraintes UX : accessibilité WCAG, charte graphique, device cible"
  output_attendu:
    - "User journey map (étapes clés)"
    - "2-3 personas principaux"
    - "Wireframes des écrans clés (lo-fi)"
    - "Points de friction identifiés"
  condition_passage: "Wireframes validés avant rédaction US"
  si_echec: "Reprendre avec hypothèses documentées"
  duree_estimee: "15-20 min"
  execution: "séquentielle après STEP-01"
```

### STEP-03 — PO-SCRUM

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-PO-SCRUM"
  role: "Rédaction du backlog initial et priorisation"
  input:
    - "Carte des besoins (STEP-01)"
    - "User journey map et wireframes (STEP-02 si disponible)"
    - "Critères de priorisation : MoSCoW / WSJF / valeur métier"
  output_attendu:
    - "8 à 15 User Stories format : En tant que [persona], je veux [action] afin de [bénéfice]"
    - "Chaque US avec : priorité, estimation story points, DoD"
    - "Backlog ordonné par valeur / risque"
    - "Épics de regroupement (3-5 max)"
  condition_passage: "Backlog relu et approuvé par l'utilisateur"
  si_echec: "Décomposer les US trop larges, reformuler si ambiguës"
  duree_estimee: "15-20 min"
  execution: "séquentielle après STEP-02"
```

### STEP-04 — QA-AGILE

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-QA-AGILE"
  role: "Critères d'acceptation et scénarios BDD"
  input:
    - "Backlog priorisé (STEP-03)"
    - "5 à 8 US prioritaires à couvrir"
    - "Risques fonctionnels identifiés"
  output_attendu:
    - "Critères d'acceptation Gherkin pour chaque US sélectionnée"
      # Format : Given [contexte] / When [action] / Then [résultat attendu]
    - "Cas nominaux + cas d'erreur + cas limites"
    - "Plan de test sprint 1 (quick win)"
  condition_passage: "Scénarios Gherkin validés fonctionnellement"
  si_echec: "Affiner avec le BA ou le PO si ambiguïté fonctionnelle"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-03"
```

### STEP-05 — CHANGE-MANAGER (optionnel)

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-CHANGE-MANAGER"
  condition_activation: "Transformation organisationnelle ou adoption IA impliquée"
  role: "Évaluation du changement et plan d'accompagnement"
  input:
    - "Périmètre fonctionnel (STEP-01)"
    - "Parties prenantes impactées"
    - "Niveau de maturité IA des équipes"
  output_attendu:
    - "Assessment ADKAR par population cible"
    - "Plan de communication phase cadrage"
    - "Identification des sponsors et relais"
    - "Risques de résistance et mesures préventives"
  duree_estimee: "10 min"
  execution: "parallèle possible avec STEP-04"
```

### STEP-06 — PRODUCT-MANAGER-SAFE (optionnel)

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-PRODUCT-MANAGER-SAFE"
  condition_activation: "Contexte SAFe — livraison multi-équipes ART"
  role: "Alignement vision Programme et Lean Business Case"
  input:
    - "Backlog initial (STEP-03)"
    - "Contraintes budget et timeline"
    - "Contexte portefeuille SAFe"
  output_attendu:
    - "Epic SAFe avec Lean Business Case"
    - "Hypothèses de valeur et critères de succès"
    - "Dépendances identifiées avec les autres équipes ART"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-04"
```

---

## Livrables finaux

```
CHECKLIST WF-001
──────────────────────────────────────────────────────
□ Carte des besoins métier (job-to-be-done)
□ Périmètre fonctionnel in scope / out of scope
□ User journey map + personas (si UX activé)
□ Wireframes lo-fi des écrans clés (si UX activé)
□ Backlog initial : 8-15 User Stories ordonnées
□ Critères d'acceptation Gherkin (US prioritaires)
□ Plan de test sprint 1
□ [optionnel] Assessment ADKAR + plan communication
□ [optionnel] Epic SAFe + Lean Business Case
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-001 depuis workflows/WF-001-cadrage-produit-ia.md.

Contexte client :
- Secteur : [à renseigner]
- Produit : [à renseigner]
- Contraintes : [à renseigner]

Lance STEP-01 avec AGENT-BUSINESS-ANALYST.
```
