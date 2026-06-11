# Skill QA Cycle V — Rédaction Cas de Test

> Certification : CTAL-TA · CTFL
> Agent : AGENT-QA-CYCLEV.md
> Méthodologie : Cycle en V

## Structure d'un cas de test formel

```
ID : TC-[MODULE]-[XXX]
Titre : [description courte et précise]
Référence : [SFD-XXX / UC-XXX]
Niveau : ☐ Unitaire ☐ Intégration ☐ Système ☐ UAT
Type : ☐ Fonctionnel ☐ Régression ☐ Performance ☐ Sécurité
Priorité : ☐ Haute ☐ Moyenne ☐ Basse
Auteur : [Guy HUI-BON-HOA]  |  Date : [JJ/MM/AAAA]

PRÉCONDITIONS :
- [état du système requis]
- [données requises]
- [accès / droits requis]

DONNÉES DE TEST :
- Utilisateur : [login / rôle]
- Jeu de données : [description]

ÉTAPES :
| # | Action | Données | Résultat attendu |
|---|--------|---------|-----------------|
| 1 | [action précise] | [donnée] | [résultat observable] |
| 2 | [action précise] | [donnée] | [résultat observable] |
| 3 | [action précise] | [donnée] | [résultat observable] |

POSTCONDITIONS :
- [état du système après le test]

RÉSULTAT OBTENU : [à remplir lors de l'exécution]
STATUT : ☐ Pass  ☐ Fail  ☐ Bloqué  ☐ Non exécuté
ANOMALIE : [ID si Fail]
EXÉCUTÉ PAR : [nom]  |  DATE : [JJ/MM/AAAA]
```

## Techniques de conception (ISTQB)

| Technique | Usage | Exemple |
|---|---|---|
| **Partitions d'équivalence** | Réduire le nb de tests | Valeurs valides / invalides |
| **Valeurs limites** | Tester les frontières | Min-1, Min, Min+1, Max-1, Max, Max+1 |
| **Table de décision** | Combinaisons de règles | Si A et B alors C |
| **Transition d'état** | Flux avec états | Connexion → Connecté → Déconnecté |
| **Cas d'utilisation** | Parcours utilisateur | UC nominal + alternatifs |
| **Tests exploratoires** | Apprentissage du système | Session libre documentée |

## Niveaux de priorité
- **Haute** : cas nominal principal, règle de gestion critique
- **Moyenne** : cas alternatifs, règles secondaires
- **Basse** : cas limites, cosmétique, confort

## Checklist cas de test
- [ ] Titre explicite (pas "test du bouton valider")
- [ ] Préconditions exhaustives
- [ ] Étapes atomiques et reproductibles
- [ ] Résultat attendu observable et vérifiable
- [ ] Données de test spécifiées
- [ ] Lié à la SFD / exigence source
