# Skill QA Agile — Rétrospective QA & Amélioration Continue

> Certification : CTFL-AT · CTAL-TM
> Agent : AGENT-QA-AGILE.md
> Méthodologie : Agile

## Contribution QA à la rétrospective Scrum

Le QA apporte des données factuelles sur la qualité du sprint :
- Nombre et type de défauts détectés
- Taux d'échappement (bugs trouvés après la démo)
- Couverture des tests
- Temps moyen de feedback DEV ↔ QA

## Template bilan qualité pré-rétrospective

```
BILAN QUALITÉ — Sprint [N] — Préparé par QA

DÉFAUTS :
Détectés en sprint : [X]
Dont : Bloquant [X] | Majeur [X] | Mineur [X]
Échappés (trouvés en review / prod) : [X]
Taux d'échappement : [X]%

TESTS :
Cas exécutés : [X] | Pass : [X]% | Fail : [X]%
Nouveaux tests auto créés : [X]
Tests flaky identifiés : [X]

CE QUI A BIEN MARCHÉ (qualité) :
- [exemple : 3 Amigos a évité 2 incompréhensions]

CE QUI PEUT S'AMÉLIORER :
- [exemple : les tests n'ont démarré qu'au J7 — trop tard]

PROPOSITION D'ACTION :
- [action SMART pour le prochain sprint]
```

## Actions d'amélioration qualité fréquentes

| Problème détecté | Action corrective |
|---|---|
| Bugs détectés trop tard | Démarrer les tests dès J2 du sprint |
| Trop de bugs post-démo | Renforcer les 3 Amigos |
| Tests flaky | Audit et stabilisation des tests instables |
| Couverture auto < 50% | Sprint dédié à l'automatisation |
| Critères d'acceptance flous | Checklist de complétude en Refinement |
