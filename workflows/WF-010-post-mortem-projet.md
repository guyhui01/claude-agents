# WF-010 — Post-mortem Projet / REX

> Projet clôturé (ou incident majeur) → collecte → analyse → rapport REX → plan d'amélioration
> Certifications mobilisées : PMP · PRINCE2 · PROSCI · ISTQB · Anthropic Claude Code in Action

---

## Carte d'identité

```yaml
id: "WF-010"
nom: "Post-mortem Projet / REX"
domaine: "Management & Conseil"
declencheur: "Clôture de projet, fin de PI, ou incident majeur en production"
resultat_final: "Rapport REX complet + plan d'amélioration priorisé + capitalisation des apprentissages"
duree_estimee: "45-75 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Workflow documentaire et analytique : collecte de faits, analyse causale, rédaction rapport. Sonnet 4.6 produit des REX de qualité professionnelle."
modele_alternatif: "claude-opus-4-7"  # si post-mortem à fort enjeu (incident critique, litige, COMEX)
agents_core:
  - CHEF-PROJET-IA    # facilitation REX, timeline, analyse causale, plan d'amélioration
  - QA-AGILE          # analyse qualité livrables, couverture tests, dettes techniques
  - CHANGE-MANAGER    # bilan humain, dynamique équipe, gestion des résistances
  - REDACTEUR-IA      # rapport REX final, synthèse executive, mémo capitalisation
agents_optionnels:
  - CONSULTANT-IA     # si REX avec enjeux stratégiques ou client CAC40
  - SECURITE-IA       # si incident de sécurité ou faille LLM à analyser
  - DATA-SCIENTIST    # si projet ML/IA avec dérives modèle ou métriques à analyser
statut: "disponible"
version: "1.0"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | CHEF-PROJET-IA | Facilitation REX, timeline, analyse des causes | Timeline + 5 Whys + plan amélioration |
| 2 | QA-AGILE | Bilan qualité livrables et processus tests | Rapport qualité + dettes techniques |
| 3 | CHANGE-MANAGER | Bilan humain, équipe, adoption, résistances | Bilan RH + recommandations équipe |
| 4 | REDACTEUR-IA | Rapport REX final + mémo capitalisation | Rapport REX + executive summary |
| opt | CONSULTANT-IA | Volet stratégique et impact business | Analyse ROI réel vs prévu |
| opt | SECURITE-IA | Analyse incidents sécurité IA | Rapport sécurité + correctifs |

---

## Paramètres contextuels

```
CONTEXTE POST-MORTEM (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Projet / Incident    : [Nom + dates début/fin]
Type de clôture      : [Succès / Échec partiel / Incident / Fin de PI SAFe]
Durée projet         : [< 3 mois / 3-12 mois / > 12 mois]
Équipe impliquée     : [Taille / Répartition / Distanciel ou présentiel]
Enjeux client        : [Budget non respecté / Délai / Qualité / Périmètre]
Données disponibles  : [KPIs, métriques, CR réunions, incidents logués]
Audience du rapport  : [Interne équipe / COPIL / CODIR / Client / Public]
Format attendu       : [Rapport détaillé / Synthèse 1 page / Présentation]
Sensibilités RH      : [Tensions d'équipe à gérer / Contexte social]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Clôture projet / fin PI / incident majeur)
        │
        ▼
[STEP-01 — CHEF-PROJET-IA]
  Construction de la timeline projet,
  analyse causale (5 Whys, Ishikawa),
  identification des écarts planifié vs réel
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-02 — QA-AGILE]
  │    Bilan qualité livrables :
  │    couverture tests, bugs,
  │    dette technique, DoD
  │
  ├── [STEP-03 — CHANGE-MANAGER]
  │    Bilan humain :
  │    dynamique d'équipe, adoption,
  │    résistances, points de friction
  │
  └── [STEP-04 — CONSULTANT-IA] (optionnel)
       ROI réel vs objectifs,
       impact business mesuré
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — Incident sécurité IA impliqué ?>
  ├── OUI ──▶ [STEP-05 — SECURITE-IA]
  │            Analyse incident + correctifs
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-06 — REDACTEUR-IA]
  Rapport REX complet,
  synthèse executive 1 page,
  mémo capitalisation (best practices + pièges),
  plan d'amélioration formalisé
        │
        ▼
(FIN — REX validé et archivé)
```

---

## Étapes détaillées

### STEP-01 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Facilitation REX et analyse causale"
  input:
    - "Données projet : planning initial vs réel, budget, périmètre"
    - "KPIs et métriques de livraison"
    - "Incidents et risques matérialisés"
  output_attendu:
    - "Timeline projet annotée (jalons clés, dérapages, corrections)"
    - "Écarts planifié vs réel (délai, budget, périmètre, qualité)"
    - "Analyse causale racine : 5 Whys sur les 3 principaux problèmes"
    - "Ce qui a bien fonctionné (à reproduire)"
    - "Plan d'amélioration priorisé (5-10 actions concrètes)"
  duree_estimee: "20 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — QA-AGILE

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-QA-AGILE"
  role: "Bilan qualité livrables et processus tests"
  input:
    - "Métriques qualité : bugs, couverture tests, non-conformités"
    - "Résultats recette client et UAT"
    - "Dette technique estimée"
  output_attendu:
    - "Bilan qualité livrables (fonctionnel vs. technique)"
    - "Analyse de la couverture tests (unitaires, intégration, E2E)"
    - "Top 5 bugs critiques et leur origine"
    - "Estimation dette technique laissée"
    - "Recommandations processus QA pour le prochain projet"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-03 et STEP-04"
```

### STEP-03 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Bilan humain et dynamique d'équipe"
  input:
    - "Composition et évolution de l'équipe sur la durée du projet"
    - "Points de friction et conflits observés"
    - "Niveau d'adoption par les utilisateurs finaux"
  output_attendu:
    - "Bilan dynamique d'équipe (cohésion, communication, leadership)"
    - "Analyse adoption utilisateurs (taux, résistances, champions)"
    - "Points de friction inter-équipes ou avec le client"
    - "Recommandations RH et organisationnelles"
    - "Reconnaissance des contributions individuelles (format template)"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-02 et STEP-04"
```

### STEP-06 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-REDACTEUR-IA"
  role: "Rapport REX final et capitalisation"
  input:
    - "Tous les outputs STEP-01 à STEP-05"
    - "Audience du rapport (équipe / COPIL / client / public)"
    - "Format attendu"
  output_attendu:
    - "Rapport REX complet (10-20 pages) : timeline, analyse, bilan, plan"
    - "Synthèse executive 1 page (faits + leçons + actions)"
    - "Mémo capitalisation : top 5 best practices + top 5 pièges à éviter"
    - "Présentation COPIL/CODIR (10 slides) si requise"
    - "Archives documentaires : tout archivé dans le référentiel projet"
  duree_estimee: "15 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-010
──────────────────────────────────────────────────────
□ Timeline projet annotée + écarts planifié vs réel
□ Analyse causale racine (5 Whys × 3 problèmes)
□ Ce qui a bien fonctionné (à reproduire)
□ Bilan qualité livrables + dette technique
□ Bilan humain (équipe, adoption, frictions)
□ [optionnel] ROI réel vs objectifs
□ [optionnel] Rapport incident sécurité IA
□ Plan d'amélioration priorisé (5-10 actions)
□ Rapport REX complet (10-20 pages)
□ Synthèse executive 1 page
□ Mémo capitalisation best practices / pièges
□ Présentation COPIL/CODIR si requise
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-010 depuis workflows/WF-010-post-mortem-projet.md.

Contexte post-mortem :
- Projet / Incident : [à renseigner]
- Type de clôture : [Succès / Échec partiel / Incident / Fin PI]
- Audience rapport : [Équipe / COPIL / Client]
- Données disponibles : [KPIs, métriques, incidents]

Lance STEP-01 avec AGENT-CHEF-PROJET-IA.
```
