# Skill — Développement Drupal 10
> Certifications : Acquia Certified Developer — Drupal 10 · Acquia Certified Site Builder — Drupal 10

## Objectif
Développer, configurer et maintenir des sites et applications Drupal 10 : modules custom, API REST/GraphQL, Drupal Commerce, configuration CMI, tests PHPUnit — en respectant les standards Drupal.

## Architecture Drupal 10

```
COUCHE          COMPOSANTS
──────────────  ──────────────────────────────────────────────
Présentation    Twig 3, Themes (Olivero, Bartik custom), Layouts
Applicatif      Modules contrib + custom, Services, Event Subscribers
API             REST API, JSON:API (core), GraphQL (contrib)
Données         Content Types, Fields, Views, Entity API
Config          CMI (YAML), Configuration Entities
Cache           Internal Page Cache, Dynamic Page Cache, BigPipe
Infra           PHP 8.2+, Composer, Drush, Docker
```

## Structure d'un module custom

```
modules/custom/mon_module/
├── mon_module.info.yml        # Déclaration du module
├── mon_module.module          # Hooks PHP
├── mon_module.routing.yml     # Routes
├── mon_module.services.yml    # Services DI
├── mon_module.permissions.yml # Permissions
├── config/install/            # Config par défaut
├── src/
│   ├── Controller/            # Contrôleurs
│   ├── Form/                  # Formulaires
│   ├── Plugin/                # Plugins (Block, Field, Queue…)
│   ├── Service/               # Services métier
│   └── EventSubscriber/       # Souscripteurs d'événements
└── templates/                 # Templates Twig
```

## Hooks essentiels Drupal 10

```php
<?php
// hook_entity_presave() — Modifier avant sauvegarde
function mon_module_entity_presave(EntityInterface $entity) {
    if ($entity->getEntityTypeId() === 'node' && $entity->bundle() === 'article') {
        $entity->set('field_computed', computeValue($entity));
    }
}

// hook_theme() — Déclarer un template Twig
function mon_module_theme() {
    return [
        'mon_composant' => [
            'variables' => ['title' => NULL, 'items' => []],
            'template' => 'mon-composant',
        ],
    ];
}

// hook_form_alter() — Modifier un formulaire
function mon_module_form_alter(&$form, FormStateInterface $form_state, $form_id) {
    if ($form_id === 'node_article_form') {
        $form['#validate'][] = 'mon_module_article_validate';
    }
}
```

## JSON:API — Endpoints core Drupal

```
GET    /jsonapi/node/article              → Liste des articles
GET    /jsonapi/node/article/{uuid}       → Article par UUID
POST   /jsonapi/node/article              → Créer un article
PATCH  /jsonapi/node/article/{uuid}       → Modifier un article
DELETE /jsonapi/node/article/{uuid}       → Supprimer un article

# Filtres avancés
GET /jsonapi/node/article?filter[status]=1&filter[field_tags.name]=IA&sort=-created&page[limit]=10

# Inclure les relations
GET /jsonapi/node/article?include=field_image,field_author
```

## Gestion de la config (CMI)

```bash
# Exporter la configuration
drush config:export          # → config/sync/*.yml

# Importer la configuration
drush config:import          # Applique les YAML en base

# Diff avant import (bonne pratique CI/CD)
drush config:status

# Créer un split de config (prod vs dev)
# Module config_split : config différentes par environnement
```

## Tests PHPUnit — Types Drupal

```php
// Test unitaire (pas de base de données)
class MonServiceTest extends UnitTestCase {
    public function testCalcul(): void {
        $service = new MonService();
        $this->assertEquals(42, $service->compute(6, 7));
    }
}

// Test kernel (base de données minimale)
class MonEntityTest extends KernelTestBase {
    protected static $modules = ['mon_module', 'node', 'user'];

    public function testEntityCreation(): void {
        $node = Node::create(['type' => 'article', 'title' => 'Test']);
        $node->save();
        $this->assertNotNull($node->id());
    }
}

// Test fonctionnel (navigateur simulé)
class MonPageTest extends BrowserTestBase {
    public function testPageAccess(): void {
        $this->drupalGet('/mon-page');
        $this->assertSession()->statusCodeEquals(200);
    }
}
```

## Livrables
- Module Drupal (code + tests PHPUnit)
- Configuration exportée (YAML CMI)
- Documentation (README, hooks documentés)
- Rapport de tests (couverture > 80%)
- Checklist sécurité (Drupal Security Advisories)

## Format de sortie
Précise : **version Drupal** (9, 10, 11), **type** (module custom, configuration, API, migration), **contexte** (nouvelle feature, bug, performance), **contraintes** (Drupal Commerce, multisite, headless API-first).

## Anti-patterns
- ❌ **Hacker le core** au lieu d'utiliser hooks/plugins/services : mises à jour cassées → API d'extension uniquement
- ❌ **Config modifiée en base non exportée** (CMI) : drift dev → prod → `drush config:export` systématique + revue en CI
- ❌ **Pas de tests PHPUnit** (Unit/Kernel/Functional) : régressions silencieuses → couverture sur la logique métier
- ❌ **Ignorer les Drupal Security Advisories** : modules contrib vulnérables → veille + `composer audit`
- ❌ **`#cache['max-age'] = 0`** par facilité : performance détruite → cache tags/contexts ciblés
- ❌ **Maintenir Drupal 7/9 en fin de vie** : dette et faille de sécurité → Drupal 10 (EOL déc. 2026) ou 11

## Sources
- **Drupal 10/11** — drupal.org (Drupal 11 depuis août 2024 : Symfony 7, PHP 8.3, Recipes, SDC ; Drupal 10 EOL déc. 2026)
- **Twig 3** — twig.symfony.com (SensioLabs) · **PHPUnit** — phpunit.de (Sebastian Bergmann)
- **PSR-12** — php-fig.org · **JSON:API** — jsonapi.org · **Composer / Drush** — getcomposer.org / drush.org
- **Drupal Security Advisories** — drupal.org/security

## Voir aussi
- [`performance-web.md`](performance-web.md) — cache Drupal (tags, contexts, BigPipe)
- [`migration-cms.md`](migration-cms.md) — migration Drupal 7/9 → 10/11
- [`architecture-cms.md`](architecture-cms.md) — Drupal monolithique vs headless
- [`integration-pim-dam.md`](integration-pim-dam.md) — connecteurs PIM/DAM côté Drupal
