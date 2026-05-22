# Skill — Métriques ART et Flow SAFe
> Certifications : SAFe RTE (Scaled Agile), SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile)

## Objectif
Collecter, calculer et interpréter les métriques clés de l'ART — PI Predictability, Flow Metrics (DORA), Business Value — pour piloter la performance du train et identifier les axes d'amélioration.

## PI Predictability — Indicateur clé RTE

```
PI PREDICTABILITY = (BV réalisé / BV planifié) × 100

CALCUL DÉTAILLÉ
────────────────────────────────────────────────────────────
BV planifié = Somme des Business Values des PI Objectives engagés
BV réalisé  = Somme des Business Values des PI Objectives livrés

EXEMPLE PI-12
────────────────────────────────────────────────────────────
Équipe Alpha  : BO planifié 24pts → BO livré 22pts → 91.7%
Équipe Beta   : BO planifié 18pts → BO livré 18pts → 100%
Équipe Gamma  : BO planifié 20pts → BO livré 15pts → 75%
────────────────────────────────────────────────────────────
ART Total     : 62pts planifiés → 55pts livrés → 88.7%

CIBLE SAFe : 80% minimum considéré comme sain
```

## Flow Metrics SAFe (DORA + Flow)

```yaml
flow_metrics:
  pi: "PI-12"
  equipe: "Toute l'ART"
  
  # DORA Metrics
  deployment_frequency: "2 fois par sprint"     # cible : multiple/jour
  lead_time_for_changes: "8 jours"              # cible : < 1 semaine
  change_failure_rate: "12%"                    # cible : < 15%
  mean_time_to_restore: "4 heures"              # cible : < 1 heure
  
  # SAFe Flow Metrics
  flow_velocity: 38                             # story points/sprint moyen
  flow_efficiency: "42%"                        # temps actif vs temps d'attente
  flow_load: 95                                 # % de capacité utilisée
  flow_time: "6.5 jours"                        # cycle time moyen d'une US
  flow_distribution:
    features: "35%"
    enablers: "20%"
    defects: "15%"
    risk_reduction: "30%"
```

## Tableau de bord métriques ART

```
MÉTRIQUES ART — PI-12 — Bilan
══════════════════════════════════════════════════════════
PI PREDICTABILITY
─────────────────────────────────────────────────────────
Équipe Alpha  : 91.7% ✅  Équipe Beta  : 100% ✅
Équipe Gamma  : 75%   ⚠   Équipe Delta : 85%  ✅
ART TOTAL     : 88.7% ✅  (cible ≥ 80%)

QUALITÉ
─────────────────────────────────────────────────────────
Taux défauts échappés   : 8%  (cible < 10%) ✅
Change Failure Rate     : 12% (cible < 15%) ✅
MTTR                    : 4h  (cible < 1h)  ⚠

FLOW
─────────────────────────────────────────────────────────
Flow Velocity    : 38pts/sprint  → trend +5% ✅
Flow Efficiency  : 42%           → trend stable ⚠
Lead Time        : 8 jours       → cible 5j    ⚠

AXES D'AMÉLIORATION IDENTIFIÉS
─────────────────────────────────────────────────────────
1. MTTR trop élevé → investir en monitoring automatique
2. Flow Efficiency faible → réduire le temps d'attente de validation
3. Équipe Gamma PI Predictability < 80% → PI Planning coaching
```

## Livrables
- Dashboard métriques ART (YAML + tableau)
- Calcul PI Predictability par équipe
- Flow Metrics collectées et analysées
- Recommandations d'amélioration I&A

## Format de sortie
Précise : PI en cours, nombre d'équipes, PI Objectives et BV planifiés/livrés, incidents de production, vitesses d'équipe.
