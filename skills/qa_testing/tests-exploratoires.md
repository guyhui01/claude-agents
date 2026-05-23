# Skill QA Agile — Tests Exploratoires

> **Méthodologie :** Agile

## Définition ISTQB
Les tests exploratoires combinent apprentissage, conception et exécution simultanément. Le testeur explore librement le système en documentant sa démarche.

## Session-Based Test Management (SBTM)

```
SESSION DE TEST EXPLORATOIRE

ID session : SE-[XXX]
Date : [JJ/MM/AAAA]  |  Durée : [60-90 min]
Testeur : [Guy HUIBONHOA]
Charter (mission) : [Ce que je veux explorer et pourquoi]

Zone explorée : [module / fonctionnalité / flux]
Risques ciblés : [ce qui pourrait mal se passer]

NOTES D'EXPLORATION :
[Notes libres durant la session — observations, questions, anomalies]

ANOMALIES DÉTECTÉES :
| ID | Description | Sévérité | Reproductible |
|---|---|---|---|
| BUG-XXX | [...] | Majeur | ☐ Oui ☐ Non |

QUESTIONS / ZONES À APPROFONDIR :
- [question 1]
- [question 2]

COUVERTURE ESTIMÉE : [X]%
DURÉE RÉELLE : [X min]
VERDICT : ☐ Zone saine  ☐ Risques identifiés  ☐ Investigation requise
```

## Techniques d'exploration

| Technique | Description |
|---|---|
| **Tour du fou** | Saisir des données aberrantes partout |
| **Tour du flâneur** | Suivre les liens / boutons sans but précis |
| **Tour de l'historique** | Tester les anciennes anomalies régressées |
| **Tour du collectionneur** | Rassembler tous les outputs du système |
| **Tour du saboteur** | Interrompre les processus en cours |
| **Tour des limites** | Valeurs min, max, vides, null |

## Quand utiliser les tests exploratoires ?
- Nouveau module à découvrir rapidement
- Complément aux tests scriptés
- Après une correction complexe
- Quand le temps est contraint
- Pour les fonctionnalités mal spécifiées
