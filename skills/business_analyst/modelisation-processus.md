# Skill — Modélisation des Processus (BPMN, UML)
> Certifications : IIBA CBAP · BCS International Diploma BA

## Objectif
Modéliser les processus métier et les cas d'usage pour documenter l'existant et concevoir la cible.

## BPMN 2.0 — Business Process Model and Notation
### Éléments clés
- **Événements** : début (cercle fin), intermédiaire (cercle double), fin (cercle épais)
- **Activités** : tâche (rectangle arrondi), sous-processus (+ en bas)
- **Passerelles** : XOR (losange X), AND (losange +), OR (losange O)
- **Flux** : séquence (flèche pleine), message (flèche pointillée)
- **Pools & Lanes** : acteurs / systèmes participants

### Niveaux de modélisation BPMN
| Niveau | Détail | Usage |
|---|---|---|
| Descriptif | Vue d'ensemble, grandes étapes | Communication métier |
| Analytique | Flux complets, décisions | Analyse et documentation |
| Exécutable | Prêt pour BPMS | Automatisation |

## UML — Cas d'usage (Use Case)
```
Acteur → [Cas d'usage 1]
       → [Cas d'usage 2]
            ↳ <<include>> [Sous-cas]
            ↳ <<extend>> [Extension optionnelle]
```
- Identifier les **acteurs primaires** (initiateurs) et **secondaires** (systèmes)
- Rédiger la **description textuelle** : flux nominal + flux alternatifs + flux d'exception

## Autres notations utiles
- **UML Séquence** : interactions entre composants dans le temps
- **UML Classe** : modèle de données conceptuel
- **RACI** : matrice des responsabilités par processus

## Livrables
- Diagramme BPMN as-is (processus actuel)
- Diagramme BPMN to-be (processus cible)
- Diagramme de cas d'usage UML
- Description textuelle des cas d'usage principaux

## Format de sortie
Précise : processus à modéliser · niveau de détail · outil cible (Visio, Lucidchart, Miro, draw.io) · as-is ou to-be
