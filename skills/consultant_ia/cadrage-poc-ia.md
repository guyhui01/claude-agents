# Skill — Cadrage d'un PoC IA
> Certifications : CAP IABAC · PMI-ACP · AWS CCP · Anthropic Claude Code in Action

## Objectif
Définir et cadrer un Proof of Concept IA en limitant les risques et en maximisant les chances de succès.

## Définition d'un PoC IA réussi
Un PoC IA valide **3 hypothèses** :
1. **Faisabilité technique** : les données existent, le modèle fonctionne
2. **Valeur métier** : l'IA améliore réellement le processus cible
3. **Acceptabilité** : les utilisateurs adoptent l'outil

## Fiche de cadrage PoC IA
```
TITRE DU PoC      : [Nom descriptif de la solution]
CAS D'USAGE       : [Processus métier ciblé]
PROBLÈME RÉSOLU   : [Pain point quantifié]
HYPOTHÈSE TESTÉE  : [Ce que le PoC doit prouver]

PÉRIMÈTRE
  Inclus          : [Ce que couvre le PoC]
  Exclu           : [Ce qui n'est PAS testé]
  Données         : [Source, volume, qualité]

CRITÈRES DE SUCCÈS
  KPI Go          : [Seuil de validation]
  KPI No-Go       : [Seuil d'abandon]

ÉQUIPE
  Sponsor         : [Décideur garant du budget]
  Product Owner   : [Responsable produit]
  Tech Lead       : [Responsable technique]
  Métier          : [Expert fonctionnel]

PLANNING
  Durée           : [4-8 semaines recommandé]
  Livrables clés  : [Jalons intermédiaires]
  Budget          : [Enveloppe PoC]

DÉCISION POST-PoC : Go / No-Go / Pivot
```

## Étapes du PoC IA
```
S1-S2 : Cadrage et préparation des données
S3-S4 : Développement du prototype (MVP technique)
S5-S6 : Tests avec utilisateurs pilotes
S7    : Mesure KPIs et présentation des résultats
S8    : Décision Go / No-Go / Pivot
```

## Critères Go / No-Go
| Dimension | Critère Go | Critère No-Go |
|---|---|---|
| Performance | Précision > seuil défini | Précision < acceptable |
| Données | Données suffisantes et qualitatives | Données insuffisantes / biais majeurs |
| Utilisateurs | NPS > 0, adoption > 60% | Rejet par les utilisateurs |
| ROI | Business case validé | ROI insuffisant |
| Risques | Risques maîtrisés | Risque réglementaire bloquant |

## Erreurs classiques à éviter
- PoC trop large → réduire le périmètre (1 processus, 1 équipe)
- Critères de succès flous → définir des KPIs SMART avant de commencer
- Ignorer la qualité des données → audit data en S1
- Oublier le change management → impliquer les utilisateurs dès S3
- Budget sous-estimé → prévoir +30% de contingence

## Livrables
- Fiche de cadrage PoC (1 page)
- Plan de projet PoC (8 semaines)
- Rapport de résultats Go / No-Go
- Recommandation post-PoC documentée

## Format de sortie
Précise : cas d'usage · données disponibles · équipe · budget · délai · critère de succès principal
