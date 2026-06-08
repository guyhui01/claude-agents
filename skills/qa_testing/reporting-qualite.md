# Skill QA Cycle V — Reporting Qualité & Métriques

> Certification : CTAL-TM · ISTQB Expert Test Management
> Agent : AGENT-QA-CYCLEV.md
> Méthodologie : Cycle en V

## Métriques clés (ISTQB)

| Métrique | Formule | Cible |
|---|---|---|
| Couverture des exigences | CAS testés / CAS totaux × 100 | > 90% |
| Taux de détection | Anomalies QA / Anomalies totales × 100 | > 80% |
| Taux de Pass | TC Pass / TC exécutés × 100 | > 95% en UAT |
| Densité de défauts | Anomalies / Points de fonction | En réduction |
| Efficacité des tests | Défauts détectés avant MEP / total | > 95% |
| Coût de la non-qualité | Anomalies post-MEP × coût moyen | Proche de 0 |

## Template rapport d'avancement tests

```
RAPPORT TESTS — [Projet] — [Date] — Phase : [Système / UAT]

AVANCEMENT :
Cas de test total : [X]
Exécutés : [X] ([X]%)  |  Restants : [X]

RÉSULTATS :
✅ Pass : [X] ([X]%)
❌ Fail : [X] ([X]%)
⚠️ Bloqués : [X]
⏭️ Non exécutés : [X]

ANOMALIES OUVERTES :
🔴 Bloquant : [X]
🟠 Majeur : [X]
🟡 Mineur : [X]
⚪ Cosmétique : [X]

RISQUES :
- [risque 1] → action : [...]

DÉCISION : ☐ Continuer  ☐ Suspendre  ☐ GO MEP
```

## Template rapport final de tests

```
RAPPORT FINAL — [Projet] — v[X.X] — [Date]

SYNTHÈSE EXÉCUTIVE :
Qualité globale : ☐ Conforme ☐ Non conforme
Décision MEP : ☐ GO ☐ NO GO

BILAN :
Cas exécutés : [X] | Pass : [X]% | Fail : [X]%
Anomalies détectées : [X] | Résolues : [X] | Résiduelles : [X]

ANOMALIES RÉSIDUELLES ACCEPTÉES :
| ID | Sévérité | Description | Plan correction |
|---|---|---|---|

LEÇONS APPRISES :
- [point 1]
- [point 2]

Signé : [Guy HUIBONHOA] — QA Lead — [Date]
```

cat > /mnt/user-data/outputs/claude-catalogue/skills/qa-cyclev/environnements.md << 'EOF'
# Skill QA Cycle V — Gestion des Environnements de Test

## Environnements types

| Environnement | Usage | Données | Accès |
|---|---|---|---|
| **Développement** | Tests unitaires DEV | Fictives | DEV |
| **Intégration** | Tests d'intégration | Anonymisées | DEV + QA |
| **Recette** | Tests système + UAT | Clone prod anonymisé | QA + MOA |
| **Pré-production** | Validation finale | Clone prod | QA + MOA + Ops |
| **Production** | Exploitation | Réelles | Ops |

## Checklist mise en place environnement de recette

```
INFRASTRUCTURE :
☐ Serveurs provisionnés et stables
☐ Accès réseau configurés
☐ Certificats SSL installés

DONNÉES :
☐ Jeu de données de test préparé
☐ Données anonymisées (RGPD)
☐ Données de référence chargées
☐ Comptes utilisateurs de test créés

INTÉGRATIONS :
☐ API et connecteurs SI configurés
☐ Mocks / bouchons en place si SI non disponibles
☐ Flux email/notification redirigés (pas de vrais envois)

BUILD :
☐ Version à tester déployée et vérifiée
☐ Notes de version reçues
☐ Smoke test initial passé (5 min de vérification rapide)
```

## Smoke Test (vérification rapide post-déploiement)

```
SMOKE TEST — [Version X.X] — [Date]
Durée : 15-30 min maximum

☐ Application accessible (URL répond)
☐ Login fonctionnel (compte test)
☐ Page d'accueil chargée sans erreur
☐ Fonctionnalité principale accessible
☐ Aucune erreur critique dans les logs

Résultat : ☐ BUILD OK — tests peuvent démarrer
           ☐ BUILD KO — retour DEV nécessaire
```
