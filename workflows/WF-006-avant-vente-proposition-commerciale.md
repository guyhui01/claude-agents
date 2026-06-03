# WF-006 — Avant-vente / Proposition commerciale

> RFP reçu → qualification → cadrage → architecture → planning → chiffrage → proposition commerciale
> Certifications mobilisées : PMP · CBAP · TOGAF 10 · CFA · CAP IABAC · Anthropic Claude Code in Action

---

## Carte d'identité

```yaml
id: "WF-006"
nom: "Avant-vente / Proposition commerciale"
domaine: "Management & Conseil"
declencheur: "RFP / appel d'offre / demande de proposition reçu d'un prospect"
resultat_final: "Proposition technico-commerciale complète : périmètre, architecture, planning, chiffrage J/H, prix, ROI prospect"
duree_estimee: "75-120 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Workflow stratégique à fort enjeu commercial : qualification GO/NO-GO, architecture cible, chiffrage J/H, pricing, ROI prospect. La qualité du raisonnement et de la synthèse multi-dimensions conditionne le taux de conversion commerciale. Opus 4.8 recommandé pour les propositions à destination de clients CAC40 / GAFA / licornes."
modele_alternatif: "claude-sonnet-4-6"  # pour des demandes simples de devis (forfait court, scope cadré, < 20 J/H)
agents_core:
  - CONSULTANT-IA        # qualification du besoin client + grille GO/NO-GO
  - BUSINESS-ANALYST     # cadrage fonctionnel, cas d'usage cibles, exigences
  - AI-ARCHITECT         # architecture technique cible, stack, trade-offs
  - CHEF-PROJET-IA       # planning, lotissement, ressources, jalons
  - FINANCIAL-ANALYST    # chiffrage J/H, prix, ROI prospect, marge
  - REDACTEUR-IA         # rédaction de la proposition commerciale finale
agents_optionnels:
  - JURIDIQUE-IA         # si clauses contractuelles IA Act / RGPD à intégrer
  - VEILLE-STRATEGIQUE   # si positionnement concurrentiel requis
  - PROMPT-ENGINEER      # si POC LLM / prompt-engineering à chiffrer dans la proposition
statut: "disponible"
version: "1.0"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | CONSULTANT-IA | Qualification du besoin + décision GO/NO-GO | Fiche qualification + verdict |
| 2 | BUSINESS-ANALYST | Cadrage fonctionnel et exigences | Note de cadrage + cas d'usage |
| 3 | AI-ARCHITECT | Architecture technique cible et stack | Schéma architecture + trade-offs |
| 4 | CHEF-PROJET-IA | Planning, lotissement et ressources | Macro-planning + WBS |
| 5 | FINANCIAL-ANALYST | Chiffrage J/H, prix, ROI prospect | Grille chiffrage + tableau prix |
| 6 | REDACTEUR-IA | Rédaction proposition commerciale finale | Proposition PDF + executive summary |
| opt | JURIDIQUE-IA | Clauses contractuelles IA Act / RGPD | Annexe juridique |
| opt | VEILLE-STRATEGIQUE | Positionnement concurrentiel | Benchmark concurrents shortlistés |
| opt | PROMPT-ENGINEER | POC LLM / chiffrage prompt-engineering | Estimation POC + livrables techniques |

---

## Paramètres contextuels

```
CONTEXTE AVANT-VENTE (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Prospect            : [Nom / Secteur / Taille / Maturité IA]
Type de demande     : [RFP formel / Sollicitation directe / Recommandation / Concours]
Périmètre demandé   : [Cadrage / POC / Build / TMA / Mission conseil / Full]
Budget indicatif    : [Range estimé / Non communiqué]
Délai de réponse    : [Deadline RFP — ISO 8601]
Concurrence         : [Cabinets en lice / Sole source]
Décideurs           : [DSI / CDO / Métier / Achats]
Critères de choix   : [Prix / Expertise / Référence / Délai / RSE]
Contraintes         : [On-premise / Cloud souverain / SecNumCloud / HDS]
Format proposition  : [PDF / Présentation orale / Démo / Q&A écrit]
Risques connus      : [Concurrence agressive, prix plancher, exigences cachées]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — RFP reçu / opportunité qualifiée)
        │
        ▼
[STEP-01 — CONSULTANT-IA]
  Qualification du besoin,
  grille BANT (Budget/Authority/Need/Timeline),
  décision GO/NO-GO argumentée
        │
        ▼
<GATEWAY — GO sur la proposition ?>
  ├── NON ──▶ (FIN — Décision NO-BID documentée)
  └── OUI ──▶ poursuite
        │
        ▼
[STEP-02 — BUSINESS-ANALYST]
  Cadrage fonctionnel,
  cas d'usage cibles,
  exigences fonctionnelles & non-fonctionnelles
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-03A — AI-ARCHITECT]
  │    Architecture cible, stack,
  │    trade-offs make vs. buy
  │
  └── [STEP-03B — VEILLE-STRATEGIQUE] (optionnel)
       Positionnement concurrentiel,
       benchmark prix marché
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-04 — CHEF-PROJET-IA]
  Macro-planning, lotissement,
  WBS, ressources, jalons,
  hypothèses & contraintes
        │
        ▼
[STEP-05 — FINANCIAL-ANALYST]
  Chiffrage J/H par profil,
  grille de prix,
  ROI prospect,
  scénarios commerciaux
        │
        ▼
<GATEWAY — Clauses contractuelles IA Act / RGPD ?>
  ├── OUI ──▶ [STEP-06 — JURIDIQUE-IA]
  │            Annexe contractuelle conformité
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Proposition commerciale finale,
  executive summary 1 page,
  pitch deck si oral
        │
        ▼
(FIN — Proposition envoyée au prospect)
```

---

## Étapes détaillées

### STEP-01 — CONSULTANT-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CONSULTANT-IA"
  role: "Qualification du besoin et décision GO/NO-GO"
  input:
    - "RFP / cahier des charges / brief commercial"
    - "Contexte prospect : secteur, taille, maturité IA, historique"
    - "Capacités internes disponibles (compétences, ressources, délais)"
  output_attendu:
    - "Fiche qualification BANT (Budget / Authority / Need / Timeline)"
    - "Scoring de l'opportunité (probabilité de gain 0-100%)"
    - "Cartographie des risques commerciaux et techniques"
    - "Identification du sponsor et du circuit de décision client"
    - "Verdict argumenté : GO / NO-GO / GO conditionnel"
  condition_passage: "GO validé par l'utilisateur avant cadrage"
  duree_estimee: "15 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Cadrage fonctionnel et exigences"
  input:
    - "RFP et fiche qualification (STEP-01)"
    - "Cas d'usage métier ciblés"
    - "Contraintes réglementaires et organisationnelles"
  output_attendu:
    - "Note de cadrage : périmètre IN / OUT clairement bornés"
    - "Cartographie des cas d'usage prioritaires"
    - "Exigences fonctionnelles structurées (MoSCoW)"
    - "Exigences non-fonctionnelles (performance, sécurité, scalabilité)"
    - "Liste des hypothèses et zones d'incertitude à lever"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-01"
```

### STEP-03A — AI-ARCHITECT

```yaml
etape:
  id: "STEP-03A"
  agent: "AGENT-AI-ARCHITECT"
  role: "Architecture technique cible"
  input:
    - "Note de cadrage et exigences (STEP-02)"
    - "Contraintes infra prospect (cloud, on-premise, SecNumCloud, HDS)"
    - "Existant SI prospect (à intégrer)"
  output_attendu:
    - "Schéma d'architecture cible (Mermaid ou texte structuré)"
    - "Stack recommandé : LLM, RAG, agents, MCP, observabilité"
    - "Trade-offs make vs. buy par composant"
    - "Estimation coût d'exploitation mensuel (LLM tokens, infra)"
    - "Risques architecture et plan de mitigation"
  duree_estimee: "20 min"
  execution: "parallèle avec STEP-03B si benchmark requis"
```

### STEP-03B — VEILLE-STRATEGIQUE (optionnel)

```yaml
etape:
  id: "STEP-03B"
  agent: "AGENT-VEILLE-STRATEGIQUE"
  role: "Positionnement concurrentiel"
  input:
    - "Liste des cabinets concurrents identifiés (STEP-01)"
    - "Secteur d'activité du prospect"
    - "Prix marché de référence pour le type de mission"
  output_attendu:
    - "Benchmark concurrents : forces / faiblesses / positionnement prix"
    - "Différentiateurs à mettre en avant dans la proposition"
    - "Arguments anti-concurrence par cabinet"
    - "Recommandation de pricing positionné vs. marché"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-03A si activé"
```

### STEP-04 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Planning, lotissement et ressources"
  input:
    - "Architecture cible (STEP-03A)"
    - "Exigences MoSCoW (STEP-02)"
    - "Délai prospect et disponibilité ressources"
  output_attendu:
    - "WBS détaillé (Work Breakdown Structure) par lot"
    - "Macro-planning Gantt avec jalons clés"
    - "Estimation J/H par lot et par profil (PO, AI Architect, Dev, Data, MLOps)"
    - "Plan de charge ressources sur la durée projet"
    - "Hypothèses, dépendances, contraintes calendaires"
  duree_estimee: "15 min"
  execution: "séquentielle après JOIN STEP-03"
```

### STEP-05 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Chiffrage et pricing commercial"
  input:
    - "Estimation J/H par profil (STEP-04)"
    - "TJM par profil (référentiel interne)"
    - "Cible de marge et stratégie commerciale (prix de pénétration / premium)"
    - "Benchmark prix marché (STEP-03B si activé)"
  output_attendu:
    - "Grille de chiffrage détaillée (J/H × TJM par profil)"
    - "Prix de vente proposé + marge calculée"
    - "Scénarios commerciaux : forfait / régie / résultat / hybride"
    - "ROI prospect estimé (gain métier vs. coût mission)"
    - "Conditions financières : modalités de facturation, échéancier"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-04"
```

### STEP-06 — JURIDIQUE-IA (optionnel)

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-JURIDIQUE-IA"
  role: "Annexe contractuelle conformité IA Act / RGPD"
  input:
    - "Architecture cible et données traitées (STEP-03A)"
    - "Cas d'usage et tier AI Act applicable"
    - "Contraintes contractuelles prospect (RGPD, sous-traitance, propriété intellectuelle)"
  output_attendu:
    - "Annexe contractuelle clauses IA Act (tier risque, transparence, monitoring)"
    - "Clauses RGPD : DPA, sous-traitance, transferts hors UE"
    - "Clauses propriété intellectuelle (modèles fine-tunés, prompts, données)"
    - "Engagements de niveau de service (SLA) et responsabilité"
  duree_estimee: "15 min"
  execution: "conditionnelle — si clauses IA Act / RGPD requises"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Rédaction de la proposition commerciale finale"
  input:
    - "Tous les outputs des STEP-01 à STEP-06"
    - "Charte graphique et template proposition (référentiel interne)"
    - "Ton et niveau de formalisme attendus par le prospect"
  output_attendu:
    - "Executive summary 1 page (contexte / valeur / prix / planning)"
    - "Proposition commerciale complète (20-40 pages)"
    - "Pitch deck (10-15 slides) si soutenance orale prévue"
    - "Q&A anticipées et réponses préparées"
    - "Annexes : références similaires, CV consultants, méthodologie"
  duree_estimee: "20 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-006
──────────────────────────────────────────────────────
□ Fiche qualification BANT + verdict GO/NO-GO
□ Note de cadrage avec périmètre IN / OUT
□ Cas d'usage prioritaires + exigences MoSCoW
□ Schéma d'architecture cible + stack recommandé
□ [optionnel] Benchmark concurrentiel + positionnement prix
□ WBS + macro-planning + estimation J/H par profil
□ Grille de chiffrage + prix de vente + ROI prospect
□ Scénarios commerciaux (forfait / régie / hybride)
□ [optionnel] Annexe contractuelle IA Act / RGPD
□ Executive summary 1 page
□ Proposition commerciale complète (20-40 pages)
□ Pitch deck si soutenance orale
□ Q&A anticipées
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-006 depuis workflows/WF-006-avant-vente-proposition-commerciale.md.

Contexte avant-vente :
- Prospect : [à renseigner]
- Type de demande : [RFP / Sollicitation / Recommandation]
- Périmètre : [à renseigner]
- Budget indicatif : [à renseigner]
- Délai de réponse : [à renseigner]
- Décideurs : [à renseigner]

Lance STEP-01 avec AGENT-CONSULTANT-IA.
```
