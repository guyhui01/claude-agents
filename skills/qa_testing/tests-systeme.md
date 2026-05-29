# Skill QA Cycle V — Tests Système

> Certification : CTAL-TA · CTFL
> Agent : AGENT-QA-CYCLEV.md
> Méthodologie : Cycle en V

## Objectif ISTQB
Valider le comportement du système complet par rapport aux exigences spécifiées (fonctionnelles et non-fonctionnelles).

## Sous-types de tests système

| Type | Objectif |
|---|---|
| **Fonctionnel** | Vérifier les fonctionnalités end-to-end |
| **Performance** | Temps de réponse, charge, stress |
| **Sécurité** | Accès, authentification, injections |
| **Compatibilité** | Navigateurs, OS, devices |
| **Utilisabilité** | Ergonomie, accessibilité |
| **Fiabilité** | Stabilité dans le temps |
| **Récupération** | Comportement après incident |

## Template cas de test système (end-to-end)

```
ID : TS-[XXX]
Titre : Parcours [rôle utilisateur] — [scénario complet]
Périmètre : End-to-end [module A → module B → module C]
Environnement : [recette / staging / pré-prod]

PRÉCONDITIONS :
- Environnement stable et données initialisées
- Comptes utilisateurs de test créés
- Intégrations SI actives

SCÉNARIO :
| # | Étape | Action | Données | Attendu |
|---|-------|--------|---------|---------|
| 1 | [contexte] | [action] | [donnée] | [résultat] |
| 2 | [...] | [...] | [...] | [...] |

VÉRIFICATIONS POST-EXÉCUTION :
- [ ] Données correctement enregistrées en BDD
- [ ] Flux SI déclenchés (logs vérifiés)
- [ ] Email / notification envoyé si applicable
- [ ] Aucune erreur dans les logs serveur

Statut : ☐ Pass  ☐ Fail  ☐ Bloqué
```
