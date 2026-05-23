# Skill QA Cycle V — Tests d'Acceptance (UAT)

> **Méthodologie :** Cycle en V

## Définition ISTQB
Les UAT (User Acceptance Tests) valident que le système est conforme aux besoins métier et prêt pour la mise en production. Réalisés par les utilisateurs finaux ou la MOA.

## Responsabilités UAT
| Rôle | Responsabilité |
|---|---|
| **MOA / PO** | Définit les critères d'acceptance, valide le GO |
| **Métier / Utilisateurs** | Exécutent les tests de leur domaine |
| **QA** | Prépare les cas de test, support technique |
| **Chef de projet** | Décision GO / NO GO finale |

## Template cas de test UAT

```
ID : UAT-[XXX]
Titre : [Scénario métier — langage utilisateur]
Référence : [Exigence métier / User Story / UC]
Exécuté par : [Nom utilisateur / MOA]
Date : [JJ/MM/AAAA]

CONTEXTE MÉTIER :
[Description en langage métier — pas technique]

SCÉNARIO :
1. [Action utilisateur en langage naturel]
2. [Action utilisateur]
3. [Vérification]

RÉSULTAT ATTENDU (langage métier) :
[Ce que l'utilisateur doit voir / obtenir]

RÉSULTAT OBTENU :
[À remplir par l'utilisateur]

VERDICT : ☐ Accepté  ☐ Refusé — motif : [...]
COMMENTAIRES : [retour utilisateur libre]
```

## Critères GO MEP (UAT)

```
☐ 100% des scénarios critiques : Accepté
☐ 0 anomalie bloquante ouverte
☐ < [X] anomalies majeures (avec plan de correction daté)
☐ Procédures d'exploitation validées
☐ Plan de retour arrière défini
☐ Formation utilisateurs réalisée
☐ Signature du PV de recette par MOA / Métier
```

## PV de Recette

```
PROCÈS-VERBAL DE RECETTE — [Projet] — [Date]

Périmètre testé : [liste fonctionnalités]
Cas de test exécutés : [X]
Acceptés : [X] | Refusés : [X]

Anomalies résiduelles acceptées :
| ID | Sévérité | Description | Plan de correction |
|---|---|---|---|

Décision : ☐ RECETTE PRONONCÉE  ☐ RECETTE REFUSÉE

Signataires :
MOA : [nom] — Date : [...]
Métier : [nom] — Date : [...]
Chef de projet : [nom] — Date : [...]
```
