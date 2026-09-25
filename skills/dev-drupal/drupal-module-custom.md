# Skill — Custom Drupal 10 module development
> Certifications: Acquia Certified Drupal Developer (Back-End Specialist) · Zend PHP 8.x

## Objective
Create a custom Drupal 10 module structured to standards (hooks, services, plugins, events) in typed PHP 8.2.

## Minimal scaffold structure

```
web/modules/custom/my_module/
  ├── my_module.info.yml       # module declaration
  ├── my_module.module         # hooks (only when necessary)
  ├── my_module.services.yml   # dependency injection
  ├── my_module.routing.yml    # URL routes
  ├── my_module.permissions.yml
  ├── config/install/          # initial YAML config
  └── src/
      ├── Controller/
      ├── Form/
      ├── Service/
      ├── EventSubscriber/
      └── Plugin/
```

## .info.yml file
```yaml
name: 'B2B Client'
type: module
description: 'B2B account and access management for a telecom client'
core_version_requirement: ^10
package: Custom
dependencies:
  - drupal:user
  - drupal:commerce_order
```

## Injected service (PHP 8.2 best practice)
```php
// src/Service/AccountValidationService.php
final class AccountValidationService {
  public function __construct(
    private readonly MailManagerInterface $mailManager,
    private readonly EntityTypeManagerInterface $entityTypeManager,
    private readonly LoggerInterface $logger,
  ) {}

  public function validate(UserInterface $account): void {
    $account->set('field_account_status', 'active')->save();
    $this->mailManager->mail('my_module', 'account_activated', ...);
  }
}
```

```yaml
# my_module.services.yml
services:
  my_module.account_validation:
    class: Drupal\my_module\Service\AccountValidationService
    arguments:
      - '@plugin.manager.mail'
      - '@entity_type.manager'
      - '@logger.channel.my_module'
```

## Hook in .module (only when a class isn't possible)
```php
// Prefer an EventSubscriber — the hook remains for cases where the Drupal API requires it
function my_module_user_insert(UserInterface $account): void {
  // Delegate to a service, never inline logic
  \Drupal::service('my_module.account_validation')->setInitialStatus($account);
}
```

## Best practices
- Zero business logic in `.module` — everything in `src/`
- No `\Drupal::service()` inside classes — inject via the constructor
- Strict PHP 8.2 types on every method
- PHPCS Drupal ruleset before every commit: `./vendor/bin/phpcs --standard=Drupal src/`

## Deliverables
- Module scaffold (info.yml, services.yml, routing.yml)
- At least one service with dependency injection
- Hooks kept to a minimum, delegating to services

## Output format
Specify: module name · feature to implement · Drupal entities involved · required contrib dependencies

## Anti-patterns
- ❌ **Business logic in `.module`**: not testable → everything in `src/` (services/plugins)
- ❌ **`\Drupal::service()` inside classes**: static coupling → constructor injection
- ❌ **Procedural hook** when an EventSubscriber/plugin fits: prefer the object-oriented approach
- ❌ **No PHPCS Drupal before commit**: non-compliant code → `phpcs --standard=Drupal`
- ❌ **Too lax `core_version_requirement`** or missing typing: silent breakage → strict PHP 8.3 typing
- ❌ **Service without `final` or `readonly`**: uncontrolled extension → final classes, readonly properties

## Sources
- **Drupal API** — api.drupal.org (hooks, services, plugins, Entity API) · **Drupal 10/11** (D11: PHP 8.3, Symfony 7)
- **PSR-12** — php-fig.org · **PHPCS Drupal / Coder** — drupal.org/project/coder
- **Symfony Dependency Injection** — symfony.com (Drupal service container)

## See also
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — module install config (CMI)
- [`drupal-tests-phpunit-behat.md`](drupal-tests-phpunit-behat.md) — testing the service and hooks
- [`drupal-api-rest.md`](drupal-api-rest.md) — expose the module as an API
- [`drupal-user-roles.md`](drupal-user-roles.md) — module permissions and access
