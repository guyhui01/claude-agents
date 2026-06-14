# Skill — Drupal APIs — JSON:API & REST
> Certifications: Acquia Certified Drupal Developer

## Objective
Expose and consume Drupal entities via JSON:API (standard) or the REST API for headless integrations, decoupled front ends, or third-party services.

## JSON:API (recommended for Drupal 10)
```bash
# Module included in Drupal core — enable it
drush en jsonapi -y
```

```
# Auto-generated URLs (no code required)
GET  /jsonapi/commerce_product/cable_ftth          # product list
GET  /jsonapi/commerce_product/cable_ftth/{uuid}   # a single product
GET  /jsonapi/user/user?filter[field_account_status]=pending  # filtering
POST /jsonapi/commerce_order/default               # create an order
```

## Authentication (OAuth2 via Simple OAuth)
```bash
composer require drupal/simple_oauth
```
```http
POST /oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=XXX&client_secret=YYY
&username=buyer@b2b.fr&password=MyPassword
```

## JSON:API filters (examples)
```
# Products in a category
GET /jsonapi/commerce_product/cable_ftth
    ?filter[field_category.vid]=product_category
    &filter[field_category.name]=FTTH Cables
    &include=variations,field_datasheet

# A buyer's orders
GET /jsonapi/commerce_order/default
    ?filter[uid.mail]=buyer@client-b2b.fr
    &filter[state]=pending
    &sort=-placed
```

## Custom REST Resource (when JSON:API isn't enough)
```php
// src/Plugin/rest/resource/B2bAccountResource.php
/**
 * @RestResource(
 *   id = "b2b_account_resource",
 *   label = @Translation("B2B Account"),
 *   uri_paths = {"canonical" = "/api/b2b/account/{uid}"}
 * )
 */
class B2bAccountResource extends ResourceBase {
  public function get(int $uid): ResourceResponse {
    $account = $this->entityTypeManager->getStorage('user')->load($uid);
    return new ResourceResponse([
      'status' => $account->get('field_account_status')->value,
      'company_name' => $account->get('field_company_name')->value,
    ]);
  }
}
```

## Best practices
- Native JSON:API for standard entities — custom REST only for specific business endpoints
- Always authenticate with OAuth2 (Simple OAuth) — never basic auth in prod
- Limit exposed fields via `jsonapi_extras` (don't expose `pass`, `mail`, etc.)
- Enable per-role JSON:API caching (Drupal Dynamic Page Cache)

## Deliverables
- JSON:API enabled and configured (jsonapi_extras)
- OAuth2 Simple OAuth configured
- Custom REST Resource if needed

## Output format
Specify: entities to expose · required CRUD operations · authentication · fields to hide · consumer (React front, ERP, third-party service)

## Anti-patterns
- ❌ **Basic auth in production**: credentials exposed → OAuth2 (Simple OAuth)
- ❌ **Exposing sensitive fields** (`pass`, `mail`, internal fields): data leak → restrict via `jsonapi_extras`
- ❌ **Custom REST where JSON:API is enough**: costly reinvention → custom REST only for business endpoints
- ❌ **No JSON:API cache**: server overload → per-role Dynamic Page Cache
- ❌ **No rate limiting** on a public API: abuse/DoS → throttling (proxy/middleware)
- ❌ **Uncontrolled filters** exposing the whole database: over-exposure → whitelist the allowed filters

## Sources
- **JSON:API** — jsonapi.org (Drupal core module) · **jsonapi_extras** — drupal.org/project/jsonapi_extras
- **Simple OAuth** (OAuth 2.1, RFC 9700) — drupal.org/project/simple_oauth
- **Drupal 10/11** — drupal.org (JSON:API and REST in core)

## See also
- [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) — consume third-party APIs
- [`drupal-user-roles.md`](drupal-user-roles.md) — access rights and exposure by role
- [`../cms_digital/cms-headless.md`](../cms_digital/cms-headless.md) — Drupal as a headless source
- [`../dev_typescript_ia/integration-apis-llm-ts.md`](../dev_typescript_ia/integration-apis-llm-ts.md) — consumption on the TypeScript front end
