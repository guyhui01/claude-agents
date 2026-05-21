# Skill — Spécifications Fonctionnelles
> Certifications : IIBA CBAP · PMI-PBA · BCS Diploma BA

## Objectif
Rédiger des spécifications fonctionnelles complètes, traçables et validables pour guider le développement.

## Types de documents
| Document | Contexte | Détail |
|---|---|---|
| **SFG** (Spécifications Fonctionnelles Générales) | Vision macro, cycle en V | Exigences de haut niveau |
| **SFD** (Spécifications Fonctionnelles Détaillées) | Détail technique, cycle en V | Règles de gestion, IHM |
| **Cahier des charges fonctionnel** | Appel d'offres | Besoins + contraintes |
| **User Stories + AC** | Agile | Format PO |

## Structure d'une SFD type
```
1. Objet et périmètre
2. Documents de référence
3. Glossaire
4. Description des acteurs
5. Cas d'usage / Scénarios fonctionnels
   5.1 Flux nominal
   5.2 Flux alternatifs
   5.3 Flux d'exception
6. Règles de gestion
7. Exigences non-fonctionnelles (performance, sécurité, accessibilité)
8. Maquettes IHM (si disponibles)
9. Matrice de traçabilité (besoins → exigences)
10. Points ouverts / hypothèses
```

## Règles de rédaction des exigences (SMART)
- **Spécifique** : une exigence = une seule chose
- **Mesurable** : critère de vérification identifiable
- **Atteignable** : réalisable techniquement
- **Réaliste** : alignée sur les contraintes du projet
- **Traçable** : liée à un besoin métier identifié

## Règles de gestion — format standard
```
RG-001 : [Libellé de la règle]
Déclencheur : [Événement qui active la règle]
Condition : [Si...]
Action : [Alors...]
Priorité : [Obligatoire / Souhaitable / Optionnel]
```

## Livrables
- SFG ou SFD selon le contexte
- Matrice de traçabilité besoins → exigences
- Liste des règles de gestion numérotées
- Points ouverts et hypothèses documentés

## Format de sortie
Précise : type de document · contexte (cycle en V, Agile) · domaine fonctionnel · niveau de détail attendu
