# Skill — Recette MOA
> Certifications : IIBA CBAP · BCS International Diploma BA

## Objectif
Planifier, préparer et conduire la recette fonctionnelle pour valider que le système livré correspond aux exigences MOA.

## Types de recette
| Type | Qui | Quand |
|---|---|---|
| **Recette fonctionnelle** | MOA / métier | Avant mise en production |
| **Recette utilisateur (UAT)** | Utilisateurs finaux | Avant déploiement |
| **Recette de non-régression (TNR)** | MOA + QA | À chaque livraison |
| **Recette de mise en production** | MOA + Exploitation | Go-live |

## Plan de recette — Structure
```
1. Objectifs et périmètre de la recette
2. Critères d'entrée (environnement prêt, données de test)
3. Stratégie de test (priorités, couverture)
4. Organisation (équipe, planning, outils)
5. Critères de sortie (taux de succès minimum)
6. Procédure de gestion des anomalies
```

## Cahier de recette — Format standard
| ID | Cas de test | Prérequis | Étapes | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|---|---|---|
| CR-001 | Connexion utilisateur | Compte actif | 1. Saisir login... | Accès tableau de bord | ... | OK / KO / Bloquant |

## Cycle de vie d'une anomalie en recette
```
Détectée → Qualifiée (sévérité) → Affectée → Corrigée → Vérifiée → Fermée
```
Sévérités : **Bloquant** · **Majeur** · **Mineur** · **Cosmétique**

## Critères de sévérité
- **Bloquant** : impossible de continuer la recette, fonctionnalité inutilisable
- **Majeur** : fonctionnalité dégradée, contournement difficile
- **Mineur** : impact faible, contournement possible
- **Cosmétique** : visuel, ergonomie, orthographe

## PV de recette — Contenu
- Résumé exécutif (périmètre, résultats, décision go/no-go)
- Tableau de bord : nb cas testés, réussis, échoués, bloquants
- Liste des anomalies résiduelles acceptées (avec engagement de correction)
- Signature MOA / MOE / Sponsor

## Livrables
- Plan de recette
- Cahier de recette (cas de test rédigés)
- Rapport d'anomalies
- PV de recette signé

## Format de sortie
Précise : périmètre fonctionnel · sprint ou version à tester · outil de gestion (Jira, TestRail, HP ALM) · deadline go-live
