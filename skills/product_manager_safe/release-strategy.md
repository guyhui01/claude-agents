# Skill — Stratégie de Release et Go-to-Market
> Certifications : SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), SAFe SPC (Scaled Agile)

## Objectif
Définir la stratégie de release au niveau Programme SAFe — cadence de release, release train vs release on demand, plan go-to-market — pour maximiser la valeur livrée aux clients et l'impact business des incréments.

## Release Strategy — Template

```yaml
release_strategy:
  produit: "Solution RH IA"
  pi: "PI-12"
  
  type_release: "release_on_demand"
  # Options : release_train (cadencé) / release_on_demand (à la valeur)
  
  releases_planifiees:
    - id: "R2.0"
      nom: "Launch — Module Scoring"
      pi: "PI-12"
      sprint: 4
      date_cible: "2026-06-15"
      features_incluses: ["F-01", "F-02"]
      audiences:
        - "Pilote 3 clients CAC40 (Orange, CA, Accor)"
      criteres_go_live:
        - "Performance scoring : précision > 85%"
        - "RGPD / AIPD validée DPO"
        - "Tests utilisateurs : CSAT > 3.5/5"
        - "0 bug critique en production"
      rollout: "Feature flags — activation progressive 20% → 50% → 100%"
      
    - id: "R2.1"
      nom: "Extension — Transcription entretiens"
      pi: "PI-13"
      sprint: 4
      date_cible: "2026-09-14"
      features_incluses: ["F-05", "F-06"]
```

## Plan Go-to-Market — Template

```
PLAN GTM — Release R2.0 — Module Scoring IA
══════════════════════════════════════════════════════════

SEGMENT CIBLE
─────────────────────────────────────────────────────────
Clients pilotes    : 3 grands groupes (Orange, CA, Accor)
Critère sélection  : > 500 recrutements / an, budget validé

PROPOSITION DE VALEUR
─────────────────────────────────────────────────────────
"Réduisez de 40% votre temps de tri candidats dès le premier mois"

CANAUX
─────────────────────────────────────────────────────────
Avant go-live  : Démo personnalisée, atelier pilote, benchmark
Go-live        : Session de lancement (DG + RH), formation équipes
Post go-live   : NPS mensuel, success stories, cas client

MÉTRIQUES GTM
─────────────────────────────────────────────────────────
Conversion pilote → contract : > 80%
Time-to-value : < 30 jours post-activation
NPS client : > 45 à 90 jours
```

## Feature Flags — Release progressive

```typescript
// Stratégie de déploiement progressif
const releaseConfig = {
  featureFlags: {
    "scoring-ia-v2": {
      enabled: true,
      rollout: {
        percentage: 20,        // 20% des utilisateurs d'abord
        targetGroups: ["pilot_clients"],
        schedule: [
          { date: "2026-06-15", percentage: 20 },
          { date: "2026-06-22", percentage: 50, condition: "CSAT > 3.5" },
          { date: "2026-06-29", percentage: 100, condition: "0 bug critique" }
        ]
      }
    }
  }
};
```

## Livrables
- Release strategy documentée (YAML)
- Plan Go-to-Market complet
- Critères go/no-go par release
- Plan de rollout progressif (feature flags)

## Format de sortie
Précise : features à releaser, segments clients, date de go-live, contraintes réglementaires, canaux de distribution.
