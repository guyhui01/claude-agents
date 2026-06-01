# Skill — Gestion du Contexte et Transferts Inter-Agents
> Certifications : Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objectif
Garantir que chaque agent du workflow reçoit le contexte exact dont il a besoin — ni plus, ni moins — pour produire un output de qualité, sans perte d'information entre les étapes.

## Principe — Context Handoff

Chaque transfert entre agents suit ce schéma :

```
AGENT A (producteur)
    │
    │  [OUTPUT A] = résultat structuré
    │  [CONTEXT PACKET] = contexte à transmettre
    ▼
AGENT B (consommateur)
    │
    │  Reçoit : [CONTEXT PACKET] + [OUTPUT A]
    │  Produit : [OUTPUT B]
    ▼
AGENT C ...
```

---

## Template — Context Packet Standard

```yaml
context_packet:
  workflow_id: "WF-001-CADRAGE-PRODUIT"
  etape_courante: "STEP-02 — PO-SCRUM"
  etape_precedente: "STEP-01 — BUSINESS-ANALYST"

  contexte_global:
    client: "[Nom / secteur / taille]"
    objectif_workflow: "[Résultat final attendu]"
    methodologie: "[Scrum / SAFe / Hybride]"
    contraintes: "[RGPD, délai, budget]"
    langue_livrables: "[FR / EN]"

  outputs_precedents:
    - etape: "STEP-01"
      agent: "BUSINESS-ANALYST"
      livrable: |
        [Coller ici le résultat de l'étape précédente]
      statut: "validé"  # validé / à retravailler / partiel

  instructions_agent_courant:
    role: "[Rôle spécifique attendu de l'agent pour cette étape]"
    input_attendu: "[Ce que l'agent doit utiliser comme base]"
    output_attendu: "[Ce que l'agent doit produire précisément]"
    format_sortie: "[Tableau Jira / YAML / Markdown / JSON]"
    contrainte_specifique: "[Ex. max 10 US / format SAFe / INVEST]"
```

---

## Règles de transfert de contexte

### Ce qui doit TOUJOURS être transmis
- Objectif global du workflow
- Identité du client et secteur
- Contraintes non négociables (RGPD, délai critique, budget)
- Outputs des étapes précédentes validés
- Format de sortie attendu

### Ce qui doit être FILTRÉ (ne pas surcharger)
- Échanges intermédiaires et versions brouillon
- Contexte technique non pertinent pour l'agent suivant
- Commentaires internes de l'orchestrateur

### Règle de validation avant transfert
```
CHECKLIST AVANT TRANSFERT
──────────────────────────────────────────
☐ L'output de l'étape précédente est-il complet ?
☐ L'output a-t-il été validé (par l'utilisateur ou un critère automatique) ?
☐ Le context packet est-il renseigné ?
☐ Les contraintes spécifiques de l'agent suivant sont-elles précisées ?
☐ Le format de sortie attendu est-il défini ?
```

---

## Prompt de transfert — Template prêt à l'emploi

```
Tu es [NOM AGENT].
Lis attentivement le contexte ci-dessous avant d'agir.

## CONTEXTE GLOBAL DU WORKFLOW
- Workflow : [NOM DU WORKFLOW]
- Client : [SECTEUR / TAILLE]
- Objectif final : [RÉSULTAT ATTENDU]
- Méthodologie : [SCRUM / SAFE / HYBRIDE]
- Contraintes : [RGPD / DÉLAI / BUDGET]

## ÉTAPES PRÉCÉDENTES COMPLÉTÉES
[AGENT X] a produit :
---
[OUTPUT DE L'ÉTAPE PRÉCÉDENTE]
---

## TA MISSION POUR CETTE ÉTAPE
- Input : [CE QUE TU DOIS UTILISER]
- Output attendu : [CE QUE TU DOIS PRODUIRE]
- Format : [MARKDOWN / YAML / TABLEAU JIRA]
- Contrainte spécifique : [EX. MAX 8 US / FORMAT INVEST]

Confirme que tu as bien compris le contexte, puis produis l'output demandé.
```

---

## Gestion de l'état du workflow (State Management)

```yaml
workflow_state:
  id: "WF-001"
  statut: "en_cours"  # démarré / en_cours / en_attente / complété / en_erreur
  etape_courante: 2
  total_etapes: 5
  
  etapes:
    - id: 1
      agent: "BUSINESS-ANALYST"
      statut: "complété"
      output_valide: true
      timestamp: "2026-05-22T09:30:00"
    
    - id: 2
      agent: "PO-SCRUM"
      statut: "en_cours"
      output_valide: false
      timestamp: "2026-05-22T09:45:00"
    
    - id: 3
      agent: "UX-DESIGNER"
      statut: "en_attente"
      output_valide: null
      timestamp: null
```

## Livrables
- Context Packet renseigné pour chaque transfert
- État du workflow mis à jour à chaque étape
- Historique des outputs validés
- Prompts de transfert prêts à copier-coller

## Format de sortie
Précise : étape en cours, agent producteur, agent consommateur, outputs à transmettre, format de sortie attendu.

## Anti-patterns
- ❌ **Tout transmettre** sans filtrage : surcharge de contexte, coût et perte de focus → ne passer que l'utile (cf. règles de filtrage)
- ❌ **Transmettre des brouillons non validés** : propagation d'erreurs en aval → checklist de validation avant transfert
- ❌ **Pas de state management persisté** : reprise impossible après une erreur → état du workflow sauvegardé
- ❌ **PII transmise sans filtrage** à l'agent suivant : risque RGPD → filtrage des données personnelles
- ❌ **Contexte non structuré** (texte libre cumulé) : l'agent suivant ne sait pas quoi prioriser → context packet formaté

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, déc. 2024) — passage de contexte entre étapes
- **Model Context Protocol** — modelcontextprotocol.io (transport et partage de contexte structuré)

## Voir aussi
- [`workflow-design.md`](workflow-design.md) — séquençage des étapes alimentant le handoff
- [`error-recovery.md`](error-recovery.md) — reprise sur état persisté
- [`workflow-monitoring.md`](workflow-monitoring.md) — suivi de l'état du workflow
- [`mcp-orchestration.md`](mcp-orchestration.md) — partage de contexte via MCP
