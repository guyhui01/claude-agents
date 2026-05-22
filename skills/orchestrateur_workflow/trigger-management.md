# Skill — Gestion des Déclencheurs et Conditions
> Certifications : BPMN 2.0 OCM (OMG), AWS Certified Solutions Architect (Amazon), ITIL 4 Foundation (Axelos)

## Objectif
Définir et gérer les événements qui déclenchent un workflow ou une étape — conditions d'entrée, événements intermédiaires, conditions de sortie et règles de transition — pour une exécution fiable et prévisible.

## Types de déclencheurs

```
TYPE 1 — DÉCLENCHEUR MANUEL
  L'utilisateur démarre explicitement le workflow
  Exemple : "Lance le WF-001 avec ce brief client"
  Usage   : Tous les workflows à la demande

TYPE 2 — DÉCLENCHEUR PAR ÉVÉNEMENT
  Un événement externe déclenche le workflow
  Exemple : Nouveau ticket Jira créé → WF-002 démarre
  Usage   : Intégration Jira, Slack, GitHub

TYPE 3 — DÉCLENCHEUR CONDITIONNEL (GATEWAY)
  Une condition logique décide du chemin
  Exemple : Si besoin UX = OUI → UX-DESIGNER, sinon → QA-AGILE
  Usage   : Tous les gateways décisionnels dans les workflows

TYPE 4 — DÉCLENCHEUR TEMPOREL
  Un calendrier ou délai déclenche le workflow
  Exemple : Chaque lundi → workflow Veille & Growth
  Usage   : Workflows récurrents (veille, reporting)

TYPE 5 — DÉCLENCHEUR ENCHAÎNÉ
  L'output d'un workflow déclenche un autre workflow
  Exemple : WF-001 complété → WF-002 démarre automatiquement
  Usage   : Chaînes de workflows complexes
```

---

## Template — Définition d'un déclencheur

```yaml
trigger:
  id: "TRG-WF001-START"
  workflow_id: "WF-001"
  type: "manuel"
  
  condition_entree:
    description: "Brief client disponible et validé"
    criteres:
      - "Objectif métier défini en 1-2 phrases"
      - "Secteur client identifié"
      - "Contraintes principales connues (délai, budget)"
    si_non_rempli: "Demander les informations manquantes avant de démarrer"
  
  parametres_requis:
    - "contexte_client"
    - "objectif_workflow"
    - "methodologie"
    - "contraintes"
  
  message_activation: |
    Workflow WF-001 — Cadrage Produit IA
    Contexte reçu : [RÉSUMÉ DU BRIEF]
    Démarrage dans 3... 2... 1...
    Première étape : AGENT BUSINESS-ANALYST
```

---

## Gateways décisionnels — Template

```yaml
gateway:
  id: "GW-WF001-UX"
  etape_precedente: "STEP-02 — PO-SCRUM"
  question: "Le workflow nécessite-t-il une phase UX ?"
  
  conditions:
    - condition: "Produit grand public (B2C) OU interface utilisateur complexe"
      action: "Déclencher STEP-2b — UX-DESIGNER en parallèle"
      
    - condition: "Produit B2B technique OU interface admin simple"
      action: "Bypass UX-DESIGNER → Passer directement à STEP-03 QA-AGILE"
  
  inputs_pour_decision:
    - "Type de produit (B2C / B2B / interne)"
    - "Complexité de l'interface (simple / modérée / complexe)"
    - "Budget et délai disponibles pour l'UX"
  
  decision_par_defaut: "Inclure UX-DESIGNER si doute"
```

---

## Conditions de sortie par étape

```yaml
conditions_sortie:
  - etape: "STEP-01 — BUSINESS-ANALYST"
    sortie_ok:
      - "Carte des besoins produite"
      - "Parties prenantes identifiées"
      - "Périmètre in/out scope défini"
    sortie_ko:
      - "Brief trop vague pour analyser"
      - "Contradictions dans les exigences"
    action_si_ko: "Poser 3 questions de clarification à l'utilisateur"
  
  - etape: "STEP-02 — PO-SCRUM"
    sortie_ok:
      - "≥ 8 User Stories rédigées au format INVEST"
      - "Critères d'acceptation Gherkin sur toutes les US"
      - "Priorité définie (MoSCoW)"
    sortie_ko:
      - "< 5 User Stories"
      - "Absence de critères d'acceptation"
    action_si_ko: "Relancer avec contexte STEP-01 enrichi"
```

---

## Règles de transition inter-workflows

```yaml
chaine_workflows:
  - id: "CHAIN-001"
    description: "Du cadrage à la delivery SAFe"
    
    etape_1:
      workflow: "WF-001 — Cadrage Produit IA"
      condition_fin: "Backlog ≥ 20 US validées"
      
    transition:
      type: "automatique"
      condition: "WF-001 statut = complété ET utilisateur valide passage"
      contexte_transmis:
        - "Backlog priorisé (toutes US)"
        - "Critères d'acceptation"
        - "Contraintes client"
      
    etape_2:
      workflow: "WF-002 — Delivery Agile SAFe"
      agent_entree: "PO-SAFE"
      instruction: |
        Le WF-001 a produit le backlog ci-joint.
        Démarrer le PI Planning sur la base de ce backlog.
```

---

## Événements d'interruption

```
PAUSE    : L'utilisateur interrompt le workflow temporairement
           → Sauvegarder l'état complet (context packet + outputs)
           → Reprendre à l'étape en cours

ANNULATION : L'utilisateur annule le workflow
           → Lister les outputs déjà produits
           → Proposer de sauvegarder les livrables partiels

MODIFICATION SCOPE : Le périmètre change en cours de workflow
           → Évaluer l'impact sur les étapes suivantes
           → Invalider les outputs concernés
           → Proposer un plan de reprise
```

## Livrables
- Définition formalisée des déclencheurs (YAML)
- Gateways décisionnels documentés
- Conditions de sortie par étape
- Règles de transition inter-workflows

## Format de sortie
Précise : workflow concerné, type de déclencheur, conditions d'entrée disponibles, contraintes de transition.
