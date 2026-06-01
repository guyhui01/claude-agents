# Skill — Développement module custom Drupal 10
> Certifications : Acquia Certified Drupal Developer (Back-End Specialist) · Zend PHP 8.x

## Objectif
Créer un module Drupal 10 custom structuré selon les standards (hooks, services, plugins, events) en PHP 8.2 typé.

## Structure scaffold minimale

```
web/modules/custom/mon_module/
  ├── mon_module.info.yml       # déclaration module
  ├── mon_module.module         # hooks (uniquement si nécessaire)
  ├── mon_module.services.yml   # injection de dépendances
  ├── mon_module.routing.yml    # routes URL
  ├── mon_module.permissions.yml
  ├── config/install/           # config YAML initiale
  └── src/
      ├── Controller/
      ├── Form/
      ├── Service/
      ├── EventSubscriber/
      └── Plugin/
```

## Fichier .info.yml
```yaml
name: 'Client B2B'
type: module
description: 'Gestion des comptes et accès B2B Client télécom'
core_version_requirement: ^10
package: Custom
dependencies:
  - drupal:user
  - drupal:commerce_order
```

## Service injecté (bonne pratique PHP 8.2)
```php
// src/Service/AccountValidationService.php
final class AccountValidationService {
  public function __construct(
    private readonly MailManagerInterface $mailManager,
    private readonly EntityTypeManagerInterface $entityTypeManager,
    private readonly LoggerInterface $logger,
  ) {}

  public function validate(UserInterface $account): void {
    $account->set('field_compte_statut', 'actif')->save();
    $this->mailManager->mail('mon_module', 'account_activated', ...);
  }
}
```

```yaml
# mon_module.services.yml
services:
  mon_module.account_validation:
    class: Drupal\mon_module\Service\AccountValidationService
    arguments:
      - '@plugin.manager.mail'
      - '@entity_type.manager'
      - '@logger.channel.mon_module'
```

## Hook dans .module (uniquement si pas de classe possible)
```php
// Préférer un EventSubscriber — le hook reste pour les cas où l'API Drupal l'exige
function mon_module_user_insert(UserInterface $account): void {
  // Déléguer à un service, jamais de logique inline
  \Drupal::service('mon_module.account_validation')->setInitialStatus($account);
}
```

## Bonnes pratiques
- Zéro logique métier dans le `.module` — tout dans `src/`
- Pas de `\Drupal::service()` dans les classes — injection via constructeur
- Types PHP 8.2 stricts sur toutes les méthodes
- PHPCS Drupal ruleset avant chaque commit : `./vendor/bin/phpcs --standard=Drupal src/`

## Livrables
- Scaffold module (info.yml, services.yml, routing.yml)
- Au moins un service avec injection de dépendances
- Hooks réduits au minimum, délégant à des services

## Format de sortie
Précise : nom du module · fonctionnalité à implémenter · entités Drupal concernées · dépendances contrib requises

## Anti-patterns
- ❌ **Logique métier dans le `.module`** : non testable → tout dans `src/` (services/plugins)
- ❌ **`\Drupal::service()` dans les classes** : couplage statique → injection par constructeur
- ❌ **Hook procédural** quand un EventSubscriber/plugin convient : préférer l'orienté objet
- ❌ **Pas de PHPCS Drupal avant commit** : code non conforme → `phpcs --standard=Drupal`
- ❌ **`core_version_requirement` trop laxiste** ou typage absent : ruptures silencieuses → typage PHP 8.3 strict
- ❌ **Service sans `final` ni `readonly`** : extension non maîtrisée → classes finales, propriétés readonly

## Sources
- **Drupal API** — api.drupal.org (hooks, services, plugins, Entity API) · **Drupal 10/11** (D11 : PHP 8.3, Symfony 7)
- **PSR-12** — php-fig.org · **PHPCS Drupal / Coder** — drupal.org/project/coder
- **Symfony Dependency Injection** — symfony.com (conteneur de services Drupal)

## Voir aussi
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — config d'installation du module (CMI)
- [`drupal-tests-phpunit-behat.md`](drupal-tests-phpunit-behat.md) — tests du service et des hooks
- [`drupal-api-rest.md`](drupal-api-rest.md) — exposer le module en API
- [`drupal-user-roles.md`](drupal-user-roles.md) — permissions et accès du module
