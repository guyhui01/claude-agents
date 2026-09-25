# Skill — Drupal 10 Development
> Certifications: Acquia Certified Developer — Drupal 10 · Acquia Certified Site Builder — Drupal 10

## Objective
Develop, configure, and maintain Drupal 10 sites and applications: custom modules, REST/GraphQL APIs, Drupal Commerce, CMI configuration, PHPUnit tests — following Drupal standards.

## Drupal 10 architecture

```
LAYER           COMPONENTS
──────────────  ──────────────────────────────────────────────
Presentation    Twig 3, Themes (Olivero, custom Bartik), Layouts
Application     Contrib + custom modules, Services, Event Subscribers
API             REST API, JSON:API (core), GraphQL (contrib)
Data            Content Types, Fields, Views, Entity API
Config          CMI (YAML), Configuration Entities
Cache           Internal Page Cache, Dynamic Page Cache, BigPipe
Infra           PHP 8.2+, Composer, Drush, Docker
```

## Structure of a custom module

```
modules/custom/my_module/
├── my_module.info.yml        # Module declaration
├── my_module.module          # PHP hooks
├── my_module.routing.yml     # Routes
├── my_module.services.yml    # DI services
├── my_module.permissions.yml # Permissions
├── config/install/           # Default config
├── src/
│   ├── Controller/          # Controllers
│   ├── Form/                # Forms
│   ├── Plugin/              # Plugins (Block, Field, Queue…)
│   ├── Service/             # Business services
│   └── EventSubscriber/     # Event subscribers
└── templates/               # Twig templates
```

## Essential Drupal 10 hooks

```php
<?php
// hook_entity_presave() — Modify before saving
function my_module_entity_presave(EntityInterface $entity) {
    if ($entity->getEntityTypeId() === 'node' && $entity->bundle() === 'article') {
        $entity->set('field_computed', computeValue($entity));
    }
}

// hook_theme() — Declare a Twig template
function my_module_theme() {
    return [
        'my_component' => [
            'variables' => ['title' => NULL, 'items' => []],
            'template' => 'my-component',
        ],
    ];
}

// hook_form_alter() — Modify a form
function my_module_form_alter(&$form, FormStateInterface $form_state, $form_id) {
    if ($form_id === 'node_article_form') {
        $form['#validate'][] = 'my_module_article_validate';
    }
}
```

## JSON:API — Drupal core endpoints

```
GET    /jsonapi/node/article              → List of articles
GET    /jsonapi/node/article/{uuid}       → Article by UUID
POST   /jsonapi/node/article              → Create an article
PATCH  /jsonapi/node/article/{uuid}       → Update an article
DELETE /jsonapi/node/article/{uuid}       → Delete an article

# Advanced filters
GET /jsonapi/node/article?filter[status]=1&filter[field_tags.name]=AI&sort=-created&page[limit]=10

# Include relationships
GET /jsonapi/node/article?include=field_image,field_author
```

## Config management (CMI)

```bash
# Export the configuration
drush config:export          # → config/sync/*.yml

# Import the configuration
drush config:import          # Apply the YAML to the database

# Diff before import (CI/CD best practice)
drush config:status

# Create a config split (prod vs dev)
# config_split module: different config per environment
```

## PHPUnit tests — Drupal types

```php
// Unit test (no database)
class MyServiceTest extends UnitTestCase {
    public function testCompute(): void {
        $service = new MyService();
        $this->assertEquals(42, $service->compute(6, 7));
    }
}

// Kernel test (minimal database)
class MyEntityTest extends KernelTestBase {
    protected static $modules = ['my_module', 'node', 'user'];

    public function testEntityCreation(): void {
        $node = Node::create(['type' => 'article', 'title' => 'Test']);
        $node->save();
        $this->assertNotNull($node->id());
    }
}

// Functional test (simulated browser)
class MyPageTest extends BrowserTestBase {
    public function testPageAccess(): void {
        $this->drupalGet('/my-page');
        $this->assertSession()->statusCodeEquals(200);
    }
}
```

## Deliverables
- Drupal module (code + PHPUnit tests)
- Exported configuration (CMI YAML)
- Documentation (README, documented hooks)
- Test report (coverage > 80%)
- Security checklist (Drupal Security Advisories)

## Output format
Specify: **Drupal version** (9, 10, 11), **type** (custom module, configuration, API, migration), **context** (new feature, bug, performance), **constraints** (Drupal Commerce, multisite, headless API-first).

## Anti-patterns
- ❌ **Hacking the core** instead of using hooks/plugins/services: broken updates → extension API only
- ❌ **Config changed in the DB and not exported** (CMI): dev → prod drift → systematic `drush config:export` + CI review
- ❌ **No PHPUnit tests** (Unit/Kernel/Functional): silent regressions → coverage on business logic
- ❌ **Ignoring Drupal Security Advisories**: vulnerable contrib modules → monitoring + `composer audit`
- ❌ **`#cache['max-age'] = 0`** for convenience: performance destroyed → targeted cache tags/contexts
- ❌ **Maintaining end-of-life Drupal 7/9**: debt and security hole → Drupal 10 (EOL Dec. 2026) or 11

## Sources
- **Drupal 10/11** — drupal.org (Drupal 11 since Aug. 2024: Symfony 7, PHP 8.3, Recipes, SDC; Drupal 10 EOL Dec. 2026)
- **Twig 3** — twig.symfony.com (SensioLabs) · **PHPUnit** — phpunit.de (Sebastian Bergmann)
- **PSR-12** — php-fig.org · **JSON:API** — jsonapi.org · **Composer / Drush** — getcomposer.org / drush.org
- **Drupal Security Advisories** — drupal.org/security

## See also
- [`performance-web.md`](performance-web.md) — Drupal cache (tags, contexts, BigPipe)
- [`migration-cms.md`](migration-cms.md) — Drupal 7/9 → 10/11 migration
- [`architecture-cms.md`](architecture-cms.md) — monolithic vs headless Drupal
- [`integration-pim-dam.md`](integration-pim-dam.md) — PIM/DAM connectors on the Drupal side
