# Skill QA Agile — BDD & Scénarios Gherkin

> **Méthodologie :** Agile


## BDD — Behavior Driven Development
Approche collaborative (PO + DEV + QA) qui exprime les comportements attendus en langage naturel structuré, exécutable par des outils (Cucumber, SpecFlow, Behave).

## Syntaxe Gherkin

```gherkin
Feature: [Nom de la fonctionnalité]
  En tant que [persona]
  Je veux [capacité]
  Afin de [bénéfice]

  Background: (préconditions communes à tous les scénarios)
    Given [état initial commun]

  Scenario: [Cas nominal — description courte]
    Given [contexte initial]
    And [contexte supplémentaire]
    When [action déclenchée]
    And [action supplémentaire]
    Then [résultat attendu]
    And [résultat complémentaire]
    But [résultat à ne pas obtenir]

  Scenario Outline: [Cas avec données multiples]
    Given un utilisateur avec le rôle <rôle>
    When il accède à <page>
    Then il voit <résultat>

    Examples:
      | rôle    | page        | résultat          |
      | admin   | dashboard   | tous les widgets  |
      | viewer  | dashboard   | widgets limités   |
```

## Exemple complet

```gherkin
Feature: Connexion utilisateur

  Scenario: Connexion réussie avec identifiants valides
    Given l'utilisateur est sur la page de connexion
    And il dispose d'un compte actif
    When il saisit l'email "test@example.com"
    And il saisit le mot de passe "MotDePasse123!"
    And il clique sur "Se connecter"
    Then il est redirigé vers le tableau de bord
    And son prénom apparaît dans le menu

  Scenario: Connexion échouée avec mauvais mot de passe
    Given l'utilisateur est sur la page de connexion
    When il saisit l'email "test@example.com"
    And il saisit le mot de passe "mauvais"
    And il clique sur "Se connecter"
    Then un message d'erreur s'affiche
    But il n'est pas connecté
```

## Bonnes pratiques Gherkin
- Un scénario = un comportement testé
- Langage métier (pas technique)
- Given = état, When = action, Then = résultat observable
- Pas de "je clique sur le bouton ID#42" → "je clique sur Valider"
- Scénarios indépendants (pas de dépendance entre scénarios)
- Background pour les préconditions communes uniquement
