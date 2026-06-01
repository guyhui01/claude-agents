# Skill — Conception de Workflows Agentiques
> Certifications : TOGAF 10 (The Open Group), BPMN 2.0 OCM (OMG), PMP (PMI), Anthropic Claude Code in Action (2026)

## Objectif
Concevoir un workflow agentique structuré et documenté — agents identifiés, étapes séquencées, inputs/outputs formalisés, gateways décisionnels explicites — pour garantir une exécution reproductible et maintenable.

## Architecture d'un Workflow Agentique — Template

### 1. Fiche d'identité du Workflow

```
NOM DU WORKFLOW : [ex. Cadrage Produit IA]
OBJECTIF MÉTIER : [résultat attendu en 1 phrase]
DÉCLENCHEUR     : [événement qui lance le workflow — ex. brief client reçu]
RÉSULTAT FINAL  : [livrable ou état cible — ex. backlog priorisé + critères d'acceptation]
DURÉE ESTIMÉE   : [ex. 45 min / 2h / async]
MODÈLE LLM      : [ex. Claude Sonnet 4.6 (étapes) / Opus 4.8 pour l'orchestrateur]
```

### 2. Cartographie BPMN — Structure type

```
[ÉVÉNEMENT DÉCLENCHEUR]
        │
        ▼
[GATEWAY — Contexte client connu ?]
    ├── OUI ──▶ [AGENT BUSINESS-ANALYST : analyse métier]
    └── NON ──▶ [INPUT : collecte contexte] ──▶ [AGENT BUSINESS-ANALYST]
        │
        ▼
[AGENT PO-SCRUM : rédaction User Stories]
        │
        ▼
[GATEWAY — Besoin UX ?]
    ├── OUI ──▶ [AGENT UX-DESIGNER : wireframes]
    └── NON ──▶ [bypass]
        │
        ▼
[AGENT QA-AGILE : critères d'acceptation]
        │
        ▼
[ÉVÉNEMENT DE FIN — Livrable produit]
```

### 3. Fiche étape — Template par agent

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Analyse métier et identification des besoins"
  input:
    - "Brief client (texte libre ou template)"
    - "Contexte secteur : [secteur]"
    - "Contraintes : [budget, délai, réglementaire]"
  output_attendu:
    - "Carte des besoins métier (job-to-be-done)"
    - "Liste des parties prenantes"
    - "Périmètre fonctionnel (in scope / out of scope)"
  condition_passage: "Output validé par l'utilisateur (OUI/NON)"
  si_echec: "Relancer STEP-01 avec contexte enrichi"
  duree_estimee: "10 min"
  execution: "séquentielle"
```

### 4. Diagramme de flux simplifié

```
LÉGENDE BPMN SIMPLIFIÉ
──────────────────────────────────────────────
( ) = Événement (cercle)
[ ] = Tâche agent (rectangle)
<>  = Gateway décisionnel (losange)
──► = Flux séquentiel
═══► = Flux conditionnel
|||  = Parallélisme (fork/join)
```

### 5. Paramètres contextuels à injecter

```
CONTEXTE CLIENT (à renseigner au démarrage)
────────────────────────────────────────────
Secteur         : [ex. Banque / Assurance / Retail / Industrie]
Taille équipe   : [ex. 1 ART / 3 squads / projet solo]
Méthodologie    : [Scrum / SAFe / Kanban / Waterfall / Hybride]
Contraintes     : [RGPD, IA Act, gel budgétaire, date jalon]
Stack technique : [ex. AWS, Azure, Salesforce, SAP]
Langue livrables: [Français / Anglais / Bilingue]
```

## Bonnes pratiques de conception

- **1 agent = 1 responsabilité** : ne pas surcharger un agent avec plusieurs rôles
- **Gateways explicites** : toujours définir la condition de passage avant la suite
- **Outputs mesurables** : chaque étape produit un livrable concret et vérifiable
- **Fallback systématique** : prévoir une alternative si l'agent ne produit pas le résultat attendu
- **Contexte cumulatif** : chaque agent reçoit le contexte de toutes les étapes précédentes
- **Couche méthodologique fixe** : respecter le cadre certifié (SAFe, Scrum, PMI)
- **Couche contextuelle variable** : adapter les paramètres au client sans modifier le squelette

## Livrables
- Fiche d'identité du workflow (1 page)
- Diagramme BPMN annoté (mermaid ou ASCII)
- Fiches étapes YAML pour chaque agent
- Paramètres contextuels documentés
- Critères de succès du workflow global

## Format de sortie
Précise : objectif métier du workflow, agents du catalogue à impliquer, contraintes de séquençage, paramètres contextuels client, format des livrables attendus.

## Anti-patterns
- ❌ **Agent surchargé** (plusieurs rôles) : non testable, non réutilisable → 1 agent = 1 responsabilité
- ❌ **Gateways implicites** (condition de passage non définie) : blocages et branches ambiguës → condition explicite avant chaque suite
- ❌ **Outputs non mesurables** : impossible de valider une étape → livrable concret + critère de succès
- ❌ **Pas de fallback** sur échec d'étape : workflow bloqué → `si_echec` systématique
- ❌ **Workflow monolithique** (un méga-prompt) au lieu de décomposer : pattern orchestrator-workers (Anthropic) → étapes spécialisées
- ❌ **Contexte non cumulatif / non filtré** : perte d'info ou surcharge → handoff structuré (cf. `context-handoff.md`)

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, déc. 2024) : patterns prompt-chaining / routing / parallelization / orchestrator-workers / evaluator-optimizer
- **BPMN 2.0.2** — OMG (2013) — modélisation des workflows — omg.org/spec/BPMN
- **TOGAF 10** (The Open Group, 2022) — cadre d'architecture

## Voir aussi
- [`agent-routing.md`](agent-routing.md) — gateways et sélection d'agent
- [`dependency-mapping.md`](dependency-mapping.md) — séquençage et dépendances
- [`context-handoff.md`](context-handoff.md) — transmission de contexte entre étapes
- [`parallel-orchestration.md`](parallel-orchestration.md) — fork/join et agrégation
- [`workflow-catalog.md`](workflow-catalog.md) — catalogue des workflows types
