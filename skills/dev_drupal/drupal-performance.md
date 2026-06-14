# Skill — Drupal 10 Performance & Cache
> Certifications: Acquia Certified Drupal Developer

## Objective
Optimize a Drupal 10 site's performance: cache layers, BigPipe, Redis, CDN, and profiling.

## Drupal cache layers

```
Browser → CDN/Varnish → Nginx → Drupal Page Cache → Dynamic Page Cache → PHP → DB
```

| Cache | Scope | Config |
|-------|-------|--------|
| Page Cache | Full anonymous pages | `page_cache` module (core) |
| Dynamic Page Cache | Authenticated pages (fragments) | `dynamic_page_cache` module (core) |
| Render Cache | HTML fragments (blocks, views) | Automatic (tags + contexts) |
| Redis | PHP cache bins (config, menu, etc.) | `drupal/redis` module |
| Varnish | HTTP reverse proxy | External Nginx/Varnish config |

## Cache tags — invalidate selectively
```php
// Add cache tags to a render array
$build['product_list'] = [
  '#theme' => 'product_list',
  '#cache' => [
    'tags' => ['commerce_product_list', 'user:' . $uid],
    'contexts' => ['user.roles', 'url.query_args'],
    'max-age' => Cache::PERMANENT,
  ],
];

// Invalidate on a product update
Cache::invalidateTags(['commerce_product_list']);
// → Drupal automatically invalidates all fragments with this tag
```

## BigPipe — authenticated pages without waiting
```php
// Slow-loading component (e.g., recent orders)
$build['recent_orders'] = [
  '#lazy_builder' => ['client_b2b.lazy_builder:renderRecentOrders', [$uid]],
  '#create_placeholder' => TRUE, // BigPipe sends the placeholder immediately
];
```

## Redis — configuration
```php
// web/sites/default/settings.php
$settings['redis.connection']['interface'] = 'PhpRedis';
$settings['redis.connection']['host'] = 'redis';
$settings['cache']['default'] = 'cache.backend.redis';
$settings['cache']['bins']['form'] = 'cache.backend.database'; // forms = DB
```

## Profiling with Xdebug / Blackfire
```bash
# Identify slow queries
drush core:status
drush sql:query "EXPLAIN SELECT * FROM cache_render WHERE ..."

# Blackfire (recommended)
blackfire run drush cr
blackfire curl http://client-b2b.local/catalog
```

## Best practices
- Always set `#cache` on custom render arrays
- `cache_contexts` = vary the cache by user role (e.g., B2B price)
- Never disable the cache in prod — use a targeted `drush cr`
- Views: enable the "Query results" cache on all catalog views

## Deliverables
- Redis + Dynamic Page Cache enabled config
- Cache tags on custom entities
- BigPipe on slow blocks
- Blackfire report on the critical path (catalog → product page → cart)

## Output format
Specify: page / component to optimize · user role involved · estimated load volume · target response-time budget

## Anti-patterns
- ❌ **Disabling the cache in prod**: performance destroyed → targeted `drush cr`, never cache off
- ❌ **Custom render array without `#cache`**: fragments not cached → tags + contexts systematically
- ❌ **`max-age = 0`** for convenience: permanent recomputation → cache tags for invalidation
- ❌ **No per-role `cache_contexts`** (e.g., B2B price): cache leak or inconsistency → `user.roles`
- ❌ **Redis for the `form` cache**: must stay in DB → `form` bin on database (done here ✓)
- ❌ **Catalog views without a results cache**: heavy queries repeated → enable the query cache

## Sources
- **Drupal Cache API** (cache tags, contexts, max-age) — drupal.org/docs/drupal-apis/cache-api · **BigPipe** (core)
- **Redis** — drupal.org/project/redis (PhpRedis) · **Varnish** — varnish-cache.org
- **Blackfire** — blackfire.io · **Xdebug** — profiling · **Drupal 10/11**

## See also
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — per-role cache (B2B price)
- [`drupal-api-rest.md`](drupal-api-rest.md) — per-role JSON:API cache
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — versioned Redis/cache config
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals on the front end
