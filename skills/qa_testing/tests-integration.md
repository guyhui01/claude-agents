# Skill QA Cycle V — Tests d'Intégration

> **Méthodologie :** Cycle en V

## Objectif ISTQB
Vérifier les interfaces et interactions entre composants, modules ou systèmes.

## Approches d'intégration

| Approche | Description | Avantages |
|---|---|---|
| **Big Bang** | Tout intégrer d'un coup | Simple à organiser |
| **Top-Down** | Du module principal vers les sous-modules | Détecte tôt les défauts architecture |
| **Bottom-Up** | Des modules bas vers le haut | Teste les composants de base en premier |
| **Incrémentale** | Module par module progressivement | Localisation précise des défauts |

## Types de tests d'intégration

- **Tests d'interface API** : vérification des contrats REST/SOAP (format, codes HTTP, données)
- **Tests de flux de données** : données émises = données reçues
- **Tests d'intégration SI** : cohérence entre systèmes (CRM ↔ ERP ↔ CMS)
- **Tests de base de données** : intégrité des données après échanges

## Template cas de test intégration API

```
ID : TI-[XXX]
Titre : [Composant A] → [Composant B] — [Flux testé]
Endpoint : [GET/POST/PUT/DELETE] [URL]
Authentification : [type]

Corps de la requête (Request Body) :
{
  "champ1": "valeur",
  "champ2": "valeur"
}

Réponse attendue :
Code HTTP : [200 / 201 / 400 / 404...]
Body attendu :
{
  "champ": "valeur attendue"
}

Assertions :
- [ ] Code HTTP correct
- [ ] Structure JSON conforme au contrat
- [ ] Valeurs des champs correctes
- [ ] Temps de réponse < [X ms]

Statut : ☐ Pass  ☐ Fail  ☐ Bloqué
```
