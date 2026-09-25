# Skill — Drupal Commerce 2.x — Catalog & B2B Pricing
> Certifications: Drupal Association Commerce 2.x Specialist · Acquia Certified Developer

## Objective
Configure the Drupal Commerce 2.x product catalog with product types, variations, and role-based B2B pricing.

## Product types and variations
```yaml
# config/sync/commerce_product_type.cable_ftth.yml
id: cable_ftth
label: 'FTTH Cable'
variationType: cable_ftth_variation
description: 'FTTH fiber optic cables'
```

```yaml
# config/sync/commerce_product_variation_type.cable_ftth_variation.yml
id: cable_ftth_variation
label: 'FTTH Cable Variation'
traits:
  - purchasable_entity_title
  - purchasable_entity_price
```

## Variation fields (SKU reference, packaging)
```yaml
# field.field.commerce_product_variation.cable_ftth_variation.field_packaging.yml
field_name: field_packaging
label: 'Packaging'
field_type: list_string
settings:
  allowed_values:
    - value: reel_100m
      label: 'Reel 100m'
    - value: reel_500m
      label: 'Reel 500m'
    - value: reel_1000m
      label: 'Reel 1000m'
```

## Role-based B2B pricing — PriceSubscriber
```php
// src/EventSubscriber/B2bPriceSubscriber.php
class B2bPriceSubscriber implements EventSubscriberInterface {
  public static function getSubscribedEvents(): array {
    return [PriceEvents::PRICE_CALCULATE => ['onPriceCalculate', -100]];
  }

  public function onPriceCalculate(PriceCalculateEvent $event): void {
    if (!$this->currentUser->hasRole('b2b_buyer')) {
      // Stop price resolution for non-B2B users
      $event->stopPropagation();
    }
  }
}
```

## Hide the price from anonymous users
```php
// hook_entity_access() or Twig template
// Twig: check the role before showing the price
{% if is_b2b_buyer %}
  <div class="price-b2b">{{ product_variation.price }}</div>
{% else %}
  <p><a href="/login">Log in to see the B2B price</a></p>
{% endif %}
```

## Best practices
- Always configure via YAML (no unversioned admin UI)
- PriceSubscriber with a negative priority to override the default resolvers
- Never hardcode prices — use Commerce Price Lists for negotiated rates

## Deliverables
- Product types + variations in versioned YAML
- B2B PriceSubscriber (price hidden from anonymous users)
- Product page Twig template with conditional price display

## Output format
Specify: product types to create · variation fields · pricing rule (role, customer, price list) · behavior for anonymous visitors

## Anti-patterns
- ❌ **Hardcoded prices** instead of Commerce Price Lists: unmanageable B2B rates → Price Lists / resolvers
- ❌ **Configuration via the unversioned admin UI**: dev/prod drift → everything in CMI YAML (`config/sync`)
- ❌ **PriceSubscriber without an explicit priority**: unpredictable override order → documented negative priority
- ❌ **B2B price exposed to anonymous users**: commercial leak → conditional role-based hiding (template + access)
- ❌ **Staying on Commerce 2.x without a migration plan**: Commerce 3.0 (Jan. 2025) is Drupal 11 compatible → plan the upgrade

## Sources
- **Drupal Commerce** — drupalcommerce.org (Commerce 2.x; **Commerce 3.0** since Jan. 22, 2025, supports Drupal 10.3+/11)
- **Drupal 10/11** — drupal.org · **PriceCalculate / PriceResolver API** — Commerce docs
- **Drupal 10/11** — drupal.org (D11 since Aug. 2024; D10 EOL Dec. 2026)

## See also
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — checkout funnel and workflow
- [`drupal-user-roles.md`](drupal-user-roles.md) — the `b2b_buyer` role that gates the price
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — CMI config management
- [`drupal-theming-twig.md`](drupal-theming-twig.md) — conditional price display
