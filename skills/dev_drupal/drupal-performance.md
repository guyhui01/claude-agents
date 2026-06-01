# Skill — Performance & Cache Drupal 10
> Certifications : Acquia Certified Drupal Developer

## Objectif
Optimiser les performances d'un site Drupal 10 : couches de cache, BigPipe, Redis, CDN et profiling.

## Couches de cache Drupal

```
Navigateur → CDN/Varnish → Nginx → Drupal Page Cache → Dynamic Page Cache → PHP → BDD
```

| Cache | Scope | Config |
|-------|-------|--------|
| Page Cache | Pages anonymes complètes | `page_cache` module (core) |
| Dynamic Page Cache | Pages authentifiées (fragments) | `dynamic_page_cache` module (core) |
| Render Cache | Fragments HTML (blocs, views) | Automatique (tags + contexts) |
| Redis | Cache bins PHP (config, menu, etc.) | `drupal/redis` module |
| Varnish | Reverse proxy HTTP | Config Nginx/Varnish externe |

## Cache tags — invalider sélectivement
```php
// Ajouter des cache tags à un render array
$build['product_list'] = [
  '#theme' => 'product_list',
  '#cache' => [
    'tags' => ['commerce_product_list', 'user:' . $uid],
    'contexts' => ['user.roles', 'url.query_args'],
    'max-age' => Cache::PERMANENT,
  ],
];

// Invalider lors d'une mise à jour produit
Cache::invalidateTags(['commerce_product_list']);
// → Drupal invalide automatiquement tous les fragments avec ce tag
```

## BigPipe — pages authentifiées sans attendre
```php
// Composant qui charge lentement (ex: commandes récentes)
$build['recent_orders'] = [
  '#lazy_builder' => ['client_b2b.lazy_builder:renderRecentOrders', [$uid]],
  '#create_placeholder' => TRUE, // BigPipe envoie le placeholder immédiatement
];
```

## Redis — configuration
```php
// web/sites/default/settings.php
$settings['redis.connection']['interface'] = 'PhpRedis';
$settings['redis.connection']['host'] = 'redis';
$settings['cache']['default'] = 'cache.backend.redis';
$settings['cache']['bins']['form'] = 'cache.backend.database'; // forms = BDD
```

## Profiling avec Xdebug / Blackfire
```bash
# Identifier les requêtes lentes
drush core:status
drush sql:query "EXPLAIN SELECT * FROM cache_render WHERE ..."

# Blackfire (recommandé)
blackfire run drush cr
blackfire curl http://client-b2b.local/catalogue
```

## Bonnes pratiques
- Toujours définir `#cache` sur les render arrays custom
- `cache_contexts` = varier le cache selon le rôle utilisateur (ex: prix B2B)
- Ne jamais désactiver le cache en prod — utiliser `drush cr` ciblé
- Views : activer le cache "Résultat de la requête" sur toutes les vues catalogue

## Livrables
- Config Redis + Dynamic Page Cache activés
- Cache tags sur les entités custom
- BigPipe sur les blocs lents
- Rapport Blackfire sur le parcours critique (catalogue → fiche → panier)

## Format de sortie
Précise : page / composant à optimiser · rôle utilisateur concerné · volume de charge estimé · budget temps de réponse cible

## Anti-patterns
- ❌ **Désactiver le cache en prod** : performance détruite → `drush cr` ciblé, jamais cache off
- ❌ **Render array custom sans `#cache`** : fragments non mis en cache → tags + contexts systématiques
- ❌ **`max-age = 0`** par facilité : recalcul permanent → cache tags pour l'invalidation
- ❌ **Pas de `cache_contexts` par rôle** (ex. prix B2B) : fuite ou incohérence de cache → `user.roles`
- ❌ **Redis pour le cache `form`** : doit rester en BDD → bin `form` sur database (fait ici ✓)
- ❌ **Views catalogue sans cache de résultat** : requêtes lourdes répétées → activer le cache de requête

## Sources
- **Drupal Cache API** (cache tags, contexts, max-age) — drupal.org/docs/drupal-apis/cache-api · **BigPipe** (core)
- **Redis** — drupal.org/project/redis (PhpRedis) · **Varnish** — varnish-cache.org
- **Blackfire** — blackfire.io · **Xdebug** — profiling · **Drupal 10/11**

## Voir aussi
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — cache par rôle (prix B2B)
- [`drupal-api-rest.md`](drupal-api-rest.md) — cache JSON:API par rôle
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — config Redis/cache versionnée
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals côté front
