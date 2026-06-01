# Skill — Drupal Commerce 2.x — Catalogue & Tarifs B2B
> Certifications : Drupal Association Commerce 2.x Specialist · Acquia Certified Developer

## Objectif
Configurer le catalogue produits Drupal Commerce 2.x avec types de produits, variations, et gestion des prix B2B par rôle.

## Types de produits et variations
```yaml
# config/sync/commerce_product_type.cable_ftth.yml
id: cable_ftth
label: 'Câble FTTH'
variationType: cable_ftth_variation
description: 'Câbles fibre optique FTTH'
```

```yaml
# config/sync/commerce_product_variation_type.cable_ftth_variation.yml
id: cable_ftth_variation
label: 'Variation Câble FTTH'
traits:
  - purchasable_entity_title
  - purchasable_entity_price
```

## Champs variation (référence SKU, conditionnement)
```yaml
# field.field.commerce_product_variation.cable_ftth_variation.field_conditionnement.yml
field_name: field_conditionnement
label: 'Conditionnement'
field_type: list_string
settings:
  allowed_values:
    - value: bobine_100m
      label: 'Bobine 100m'
    - value: bobine_500m
      label: 'Bobine 500m'
    - value: bobine_1000m
      label: 'Bobine 1000m'
```

## Prix B2B par rôle — PriceSubscriber
```php
// src/EventSubscriber/B2bPriceSubscriber.php
class B2bPriceSubscriber implements EventSubscriberInterface {
  public static function getSubscribedEvents(): array {
    return [PriceEvents::PRICE_CALCULATE => ['onPriceCalculate', -100]];
  }

  public function onPriceCalculate(PriceCalculateEvent $event): void {
    if (!$this->currentUser->hasRole('b2b_buyer')) {
      // Stopper la résolution de prix pour les non-B2B
      $event->stopPropagation();
    }
  }
}
```

## Masquer le prix pour les anonymes
```php
// hook_entity_access() ou template Twig
// Twig : vérifier le rôle avant d'afficher le prix
{% if is_b2b_buyer %}
  <div class="price-b2b">{{ product_variation.price }}</div>
{% else %}
  <p><a href="/login">Connectez-vous pour voir le tarif B2B</a></p>
{% endif %}
```

## Bonnes pratiques
- Toujours configurer via YAML (pas d'UI admin non versionnée)
- PriceSubscriber avec priorité négative pour override les resolvers par défaut
- Ne jamais stocker les prix en dur — utiliser les Price Lists Commerce pour les tarifs négociés

## Livrables
- Types de produits + variations en YAML versionné
- PriceSubscriber B2B (prix masqué pour anonymes)
- Template Twig fiche produit avec affichage conditionnel du prix

## Format de sortie
Précise : types de produits à créer · champs de variation · règle de pricing (rôle, client, liste de prix) · comportement pour visiteur anonyme

## Anti-patterns
- ❌ **Prix codés en dur** au lieu des Price Lists Commerce : tarifs B2B non gérables → Price Lists / résolveurs
- ❌ **Configuration via l'UI admin non versionnée** : drift dev/prod → tout en YAML CMI (`config/sync`)
- ❌ **PriceSubscriber sans priorité explicite** : ordre d'override imprévisible → priorité négative documentée
- ❌ **Prix B2B exposé aux anonymes** : fuite commerciale → masquage conditionnel par rôle (template + access)
- ❌ **Rester sur Commerce 2.x sans plan de migration** : Commerce 3.0 (janv. 2025) est compatible Drupal 11 → planifier la montée

## Sources
- **Drupal Commerce** — drupalcommerce.org (Commerce 2.x ; **Commerce 3.0** depuis le 22 janv. 2025, support Drupal 10.3+/11)
- **Drupal 10/11** — drupal.org · **PriceCalculate / PriceResolver API** — docs Commerce
- **Drupal 10/11** — drupal.org (D11 depuis août 2024 ; D10 EOL déc. 2026)

## Voir aussi
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — tunnel de commande et workflow
- [`drupal-user-roles.md`](drupal-user-roles.md) — rôle `b2b_buyer` conditionnant le prix
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — gestion de la config CMI
- [`drupal-theming-twig.md`](drupal-theming-twig.md) — affichage conditionnel du prix
