# Skill QA Agile — Régression Automatisée CI/CD

## Principe
En Agile, la régression est automatisée et intégrée au pipeline CI/CD pour garantir la qualité à chaque commit.

## Niveaux de régression Agile

| Niveau | Déclencheur | Durée cible | Contenu |
|---|---|---|---|
| **Smoke** | Chaque commit | < 10 min | 20-30 cas critiques |
| **Régression rapide** | Chaque PR/MR | < 30 min | Zones impactées |
| **Régression complète** | Nuit / fin sprint | < 2h | 100% des cas stables |
| **Sanity** | Avant démo / MEP | < 15 min | Fonctionnalités clés |

## Template suite de régression

```
SUITE RÉGRESSION — [Projet] — v[X.X]

Smoke Tests (toujours actifs) :
| TC-ID | Titre | Priorité | Auto | Durée |
|---|---|---|---|---|
| TC-001 | Login nominal | Critique | ✅ | 30s |
| TC-002 | Page accueil charge | Critique | ✅ | 20s |

Régression fonctionnelle :
| Module | Nb cas | Auto | Manuel |
|---|---|---|---|
| [Module A] | [X] | [X] | [X] |
| [Module B] | [X] | [X] | [X] |

Critère d'arrêt : 1 Smoke fail = pipeline bloqué
```

## Rapport régression CI/CD

```
RÉGRESSION CI/CD — Build [#XXX] — [Date/Heure]
Durée : [X min]  |  Branche : [nom]

✅ Pass : [X]  ❌ Fail : [X]  ⚠️ Flaky : [X]

Échecs :
- [TC-XXX] [description] — depuis : [build #XXX]

Action requise : ☐ Fix immédiat  ☐ Ticket créé  ☐ Test à revoir
```
