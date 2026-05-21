# Skill Scrum — Recette Fonctionnelle

## Processus
```
1. Réception livraison DEV
2. Vérification environnement de recette
3. Exécution cas de test (nominal + alternatifs)
4. Saisie résultats dans Jira/Xray
5. Ouverture anomalies (si Fail)
6. Suivi corrections
7. Validation PO → GO / NO GO MEP
```

## Template cas de test
```
ID : TC-[XXX]  |  US : [US-XXX]
Titre : [description courte]
Préconditions : [état du système]

| # | Action | Données | Résultat attendu |
|---|--------|---------|-----------------|
| 1 | [...] | [...] | [...] |
| 2 | [...] | [...] | [...] |

Résultat obtenu : [...]
Statut : ☐ Pass  ☐ Fail  ☐ Bloqué
Anomalie : [JIRA-XXX]
Exécuté par : Guy HUIBONHOA | Date : [JJ/MM]
```

## Critères GO MEP
```
☐ 0 anomalie bloquante
☐ < 3 anomalies majeures
☐ Tous cas nominaux : Pass
☐ TNR validé
☐ Validation PO signée
```

## Rapport de recette
```
Recette Sprint [N] — [Date]
US testées : [X] | Cas exécutés : [X]
Pass : [X] | Fail : [X] | Bloqués : [X]

Anomalies ouvertes :
- [JIRA-XXX] [Sévérité] [Description]

Décision PO : ☐ GO MEP  ☐ NO GO — motif : [...]
```
