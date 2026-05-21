# Skill — APIs Drupal — JSON:API & REST
> Certifications : Acquia Certified Drupal Developer

## Objectif
Exposer et consommer les entités Drupal via JSON:API (standard) ou REST API pour intégrations headless, front découplé ou services tiers.

## JSON:API (recommandé Drupal 10)
```bash
# Module inclus dans Drupal core — activer
drush en jsonapi -y
```

```
# URL auto-générées (aucun code requis)
GET  /jsonapi/commerce_product/cable_ftth          # liste produits
GET  /jsonapi/commerce_product/cable_ftth/{uuid}   # un produit
GET  /jsonapi/user/user?filter[field_compte_statut]=en_attente  # filtrage
POST /jsonapi/commerce_order/default               # créer une commande
```

## Authentification (OAuth2 via Simple OAuth)
```bash
composer require drupal/simple_oauth
```
```http
POST /oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&client_id=XXX&client_secret=YYY
&username=buyer@b2b.fr&password=MonMotDePasse
```

## Filtres JSON:API (exemples)
```
# Produits d'une catégorie
GET /jsonapi/commerce_product/cable_ftth
    ?filter[field_category.vid]=product_category
    &filter[field_category.name]=Câbles FTTH
    &include=variations,field_fiche_technique

# Commandes d'un acheteur
GET /jsonapi/commerce_order/default
    ?filter[uid.mail]=buyer@aginode.fr
    &filter[state]=pending
    &sort=-placed
```

## REST Resource custom (si JSON:API insuffisant)
```php
// src/Plugin/rest/resource/B2bAccountResource.php
/**
 * @RestResource(
 *   id = "b2b_account_resource",
 *   label = @Translation("Compte B2B"),
 *   uri_paths = {"canonical" = "/api/b2b/account/{uid}"}
 * )
 */
class B2bAccountResource extends ResourceBase {
  public function get(int $uid): ResourceResponse {
    $account = $this->entityTypeManager->getStorage('user')->load($uid);
    return new ResourceResponse([
      'status' => $account->get('field_compte_statut')->value,
      'raison_sociale' => $account->get('field_raison_sociale')->value,
    ]);
  }
}
```

## Bonnes pratiques
- JSON:API natif pour les entités standard — REST custom uniquement si endpoints métier spécifiques
- Toujours authentifier avec OAuth2 (Simple OAuth) — jamais basic auth en prod
- Limiter les champs exposés via `jsonapi_extras` (ne pas exposer `pass`, `mail`, etc.)
- Activer le cache JSON:API par rôle (Drupal Dynamic Page Cache)

## Livrables
- JSON:API activé et configuré (jsonapi_extras)
- OAuth2 Simple OAuth configuré
- REST Resource custom si nécessaire

## Format de sortie
Précise : entités à exposer · opérations CRUD requises · authentification · champs à masquer · consommateur (front React, ERP, service tiers)
