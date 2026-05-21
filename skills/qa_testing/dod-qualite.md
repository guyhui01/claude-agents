# Skill QA Agile — Definition of Done orientée Qualité

## Principe
La DoD est un engagement collectif de l'équipe sur ce que signifie "terminé". Elle inclut les critères qualité non négociables.

## DoD par niveau

### DoD User Story
```
☐ Code développé et revu par un pair (code review)
☐ Tests unitaires rédigés et passants (couverture > [X]%)
☐ Tests d'acceptance exécutés et validés (PO)
☐ Scénarios BDD passants (si applicable)
☐ Aucune anomalie bloquante ou majeure ouverte
☐ Documentation technique mise à jour
☐ Déployé sur environnement de recette
☐ Validé par le PO sur environnement de recette
```

### DoD Sprint
```
☐ Toutes les US du sprint satisfont la DoD US
☐ Tests de régression exécutés sur les zones impactées
☐ Aucune régression introduite
☐ Dette technique du sprint documentée dans le backlog
☐ Rapport de tests du sprint disponible
☐ Environnement de recette stable pour la démo
☐ Sprint Review possible sur environnement stable
```

### DoD Release / MEP
```
☐ Toutes les US de la release satisfont la DoD Sprint
☐ Tests de régression complets exécutés
☐ Tests de performance validés (si applicable)
☐ Tests de sécurité validés (si applicable)
☐ Zéro anomalie bloquante ouverte
☐ Plan de retour arrière (rollback) validé
☐ Documentation utilisateur à jour
☐ GO MEP prononcé par PO + QA Lead
```

## Template DoD partagée Confluence
```
DOD — [Équipe] — [Projet] — v[X.X] — [Date]
Validée par : [équipe + PO + QA]

[Copier les 3 niveaux ci-dessus]

Révision prévue : [prochaine rétrospective]
```
