# Skill — Amélioration Continue de l'ART
> Certifications : SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), SAFe 6 Agilist (Scaled Agile)

## Objectif
Piloter l'amélioration continue de l'ART entre deux PI — suivre les actions I&A, animer les Communautés de Pratique, mesurer la maturité Agile des équipes et construire le plan d'amélioration du prochain PI.

## Suivi des actions I&A

```yaml
actions_ia:
  pi_source: "PI-12"
  pi_cible: "PI-13"
  
  actions:
    - id: "IA-01"
      description: "Augmenter couverture tests automatiques à 65%"
      proprietaire: "Tech Lead Alpha"
      sprint_cible: 2
      mesure: "SonarQube coverage metric"
      statut: "en_cours"
      avancement: "55% atteint Sprint 1"
      
    - id: "IA-02"
      description: "Ajouter régression dans la DoD ART"
      proprietaire: "RTE"
      sprint_cible: 1
      mesure: "DoD mise à jour et validée"
      statut: "complété"
      
    - id: "IA-03"
      description: "Réduire Lead Time de 8 à 5 jours"
      proprietaire: "Tous les SM"
      sprint_cible: 4
      mesure: "Flow Time metric dans Jira"
      statut: "en_cours"
      avancement: "7.2 jours Sprint 2"
```

## Plan d'amélioration PI

```
PLAN AMÉLIORATION PI-13
══════════════════════════════════════════════════════════
DOMAINE QUALITÉ
─────────────────────────────────────────────────────────
✓ Couverture tests : 55% → 65% (Sprint 2) → 75% (Sprint 4)
✓ DoD ART mise à jour (Sprint 1 — fait)
✓ Formation TDD — 2 équipes (Sprint 1-2)

DOMAINE FLOW
─────────────────────────────────────────────────────────
✓ Réduire WIP limits (Sprint 1 — chaque équipe)
✓ Améliorer le refinement process (< 20% sprint capacity)
✓ Lead Time cible : 5 jours fin PI-13

DOMAINE COLLABORATION
─────────────────────────────────────────────────────────
✓ CoP Architecture mensuelle (RTE + Tech Leads)
✓ CoP Testing bimensuelle (QA Engineers)
✓ Buddy system équipes Alpha-Beta
```

## Évaluation maturité Agile — Team Assessment

```
RADAR DE MATURITÉ AGILE — Équipe Alpha — PI-12
────────────────────────────────────────────────
Pratiques Scrum     : ████████░░  4/5
Tests automatiques  : █████░░░░░  3/5
Collaboration équipe: ███████░░░  3.5/5
Définition du Done  : ██████░░░░  3/5
Continuous Delivery : ████░░░░░░  2/5
Lean Thinking       : ██████░░░░  3/5
────────────────────────────────────────────────
SCORE GLOBAL : 3.1/5 (Objectif PI+1 : 3.5/5)
```

## Livrables
- Tracker des actions I&A avec avancement
- Plan d'amélioration PI documenté
- Radar de maturité par équipe
- Rapport d'amélioration pour l'I&A suivant

## Format de sortie
Précise : actions I&A du PI précédent, métriques actuelles, domaines d'amélioration prioritaires, ressources disponibles.
