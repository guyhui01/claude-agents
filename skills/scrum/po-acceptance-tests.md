# Skill Scrum — Tests d'Acceptation

## Format Given/When/Then
```
GIVEN [contexte initial]
AND [condition supplémentaire]
WHEN [action déclenchée]
THEN [résultat attendu]
AND [résultat complémentaire]
```

## Exemple
```
GIVEN l'utilisateur est connecté
AND son contrat est actif
WHEN il clique sur "Télécharger mon relevé"
THEN un PDF est généré et téléchargé
AND le nom du fichier contient la date (AAAA-MM-JJ)
```

## Types de tests
| Type | Description | Qui |
|---|---|---|
| Fonctionnel | Comportement attendu | PO + QA |
| Non-régression (TNR) | Pas de régression | QA |
| Acceptation utilisateur (UAT) | Validation métier | PO + Métier |
| Performance | Temps de réponse | Tech Lead |

## Structure cas de test
```
ID : TC-[XXX]  |  US : [US-XXX]
Titre : [description courte]
Préconditions : [état du système]

Étapes :
1. [action]
2. [action]

Résultat attendu : [...]
Résultat obtenu : [à remplir]
Statut : ☐ Pass  ☐ Fail  ☐ Bloqué
Anomalie : [JIRA-XXX si Fail]
```

## Niveaux de sévérité
| Niveau | Définition | Délai |
|---|---|---|
| Bloquant | Inutilisable, pas de contournement | Immédiat |
| Majeur | Dégradé, contournement possible | Sprint en cours |
| Mineur | Gêne sans impact fonctionnel | Prochain sprint |
| Cosmétique | Visuel, orthographe | Backlog |

## Critères GO / NO GO MEP
```
☐ 0 anomalie bloquante
☐ < 3 anomalies majeures ouvertes
☐ Tous les cas nominaux : Pass
☐ TNR validé
☐ Validation PO signée
```
