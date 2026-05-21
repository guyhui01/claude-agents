# Skill — Continuous Exploration (CE) dans le Continuous Delivery Pipeline SAFe

> Certification : SAFe POPM 6 · SAFe DevOps Practitioner
> Agent : AGENT-PO-SAFE.md

## Objectif
Piloter la phase de Continuous Exploration du Continuous Delivery Pipeline SAFe pour alimenter en continu le Program Backlog avec des features validées et priorisées.

## Le Continuous Delivery Pipeline SAFe

```
CONTINUOUS    →  CONTINUOUS    →  CONTINUOUS    →  CONTINUOUS
EXPLORATION      INTEGRATION      DEPLOYMENT       RELEASE
(CE)             (CI)             (CD)             (CR)

[Besoin]         [Build + Test]   [Deploy Auto]    [Release]
[Hypothèse]      [Intégration]    [Staging]        [Production]
[Feature]        [Qualité]        [Monitoring]     [Feedback]

← Rôle PM/PO →  ← Rôle Dev/DevOps ──────────────────────────→
```

## Les 4 activités de la Continuous Exploration

### 1. Hypothesize (Formuler des hypothèses)
- Analyser les tendances marché et retours clients
- Formuler des hypothèses produit (cf. skill hypothesis-driven.md)
- Aligner sur les Strategic Themes du Portfolio

### 2. Collaborate & Research (Collaborer et Rechercher)
- User Research : interviews, observations, surveys
- Benchmarking concurrentiel
- Analyse des données produit (analytics, NPS, support)
- Design Thinking workshops (cross-fonctionnel)
- Spike techniques pour valider la faisabilité

### 3. Architect & Design (Concevoir)
- Définir les Features SAFe (titre + Benefit Hypothesis + AC)
- Préparer les enablers architecturaux (en coordination Architect)
- Wireframing / Prototypage (fidélité croissante)
- Validation utilisateur (tests de prototype)

### 4. Synthesize (Synthétiser → Program Backlog)
- Prioriser par WSJF
- Rédiger les Features prêtes pour le PI Planning
- Mettre à jour la Roadmap
- Communiquer aux stakeholders (Vision + PI Objectives)

## Cadence CE dans le PI

```
PI (10 semaines = 4 Iterations + 1 IP)

Semaine 1-2   : CE Iteration N (hypothèses + research)
Semaine 3-4   : CE Iteration N+1 (design + validation)
Semaine 5-6   : CE Iteration N+2 (synthèse + features prêtes)
Semaine 7     : PI Planning prep (Program Backlog finalisé)
Semaine 8-10  : Livraison + feedback → nouveau cycle CE
```

## Program Backlog — Features issues de la CE

### DoR Feature (Definition of Ready)
- [ ] Titre au format "Verbe + Objet + Valeur"
- [ ] Benefit Hypothesis rédigée
- [ ] Acceptance Criteria définis (minimum 3)
- [ ] WSJF calculé et score documenté
- [ ] Dépendances identifiées
- [ ] Enablers architecturaux identifiés si nécessaire
- [ ] Estimation T-shirt validée par l'ART

## Métriques CE

| Métrique | Description | Cible |
|---|---|---|
| Feature validation rate | % features validées avec users avant dev | > 60% |
| Discovery lead time | Temps idée → feature prête PI Planning | < 1 PI |
| Hypothesis confirmation rate | % hypothèses confirmées en production | Mesurer (baseline) |
| Research to backlog ratio | % insights research → features backlog | > 30% |
