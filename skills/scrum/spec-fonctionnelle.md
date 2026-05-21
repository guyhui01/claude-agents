# Skill Scrum — Spécifications Fonctionnelles

## Types de documents
| Document | Abréviation | Usage |
|---|---|---|
| Spécifications Fonctionnelles Générales | SFG | Vue macro — cadrage projet |
| Spécifications Fonctionnelles Détaillées | SFD | Vue détaillée par fonctionnalité |
| Expression de Besoin | EBE | Recueil initial avant spec |

## Structure SFG
```
1. Contexte et objectifs
2. Périmètre (in scope / out of scope)
3. Acteurs et personas
4. Parcours utilisateurs
5. Règles de gestion
6. Cas d'utilisation (Use Cases)
7. Interfaces et intégrations SI
8. Contraintes techniques et réglementaires
9. Glossaire
10. Annexes
```

## Format Cas d'utilisation
```
UC-[XXX] — [Titre]
Acteur principal : [rôle]
Préconditions : [état du système]
Scénario nominal :
  1. L'utilisateur [action]
  2. Le système [réponse]
Scénarios alternatifs :
  A1. Si [condition] → [traitement]
Postconditions : [état final]
```

## Checklist SFD
- [ ] Périmètre validé par le client
- [ ] Cas nominaux et alternatifs documentés
- [ ] Règles de gestion numérotées
- [ ] Flux de données représentés (Swimlanes / BPMN)
- [ ] Interfaces SI identifiées
- [ ] Signé par le Métier / Stakeholder
