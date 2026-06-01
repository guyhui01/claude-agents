# Skill — Gestion des rôles et permissions Drupal
> Certifications : Acquia Certified Site Builder · Acquia Certified Developer

## Objectif
Créer et configurer les rôles Drupal (YAML), gérer les permissions, implémenter des contrôles d'accès custom via EventSubscriber et hooks.

## Rôles en YAML
```yaml
# config/sync/user.role.b2b_buyer.yml
id: b2b_buyer
label: 'Acheteur B2B'
weight: 3
permissions:
  - 'access content'
  - 'view commerce_product'
  - 'create commerce_order'
  - 'view own commerce_order'
  - 'access checkout'
```

```yaml
# config/sync/user.role.client_admin.yml
id: client_admin
label: 'Administrateur Client télécom'
weight: 4
permissions:
  - 'administer users'
  - 'view any commerce_order'
  - 'update any commerce_order'
  - 'manage b2b_accounts'
```

## Champs custom sur User
```yaml
# config/sync/field.field.user.user.field_compte_statut.yml
field_name: field_compte_statut
entity_type: user
label: 'Statut compte B2B'
field_type: list_string
required: true
default_value:
  - value: en_attente
settings:
  allowed_values:
    - { value: en_attente,  label: 'En attente' }
    - { value: actif,       label: 'Actif' }
    - { value: refuse,      label: 'Refusé' }
```

## EventSubscriber — contrôle connexion par statut
```php
// src/EventSubscriber/B2bLoginSubscriber.php
class B2bLoginSubscriber implements EventSubscriberInterface {
  public static function getSubscribedEvents(): array {
    return [UserLoginEvent::class => 'onUserLogin'];
  }

  public function onUserLogin(UserLoginEvent $event): void {
    $status = $event->getAccount()->get('field_compte_statut')->value;
    match($status) {
      'en_attente' => $this->blockWithMessage('Votre compte est en cours de validation (délai 24h).'),
      'refuse'     => $this->blockWithMessage('Votre demande a été refusée. Contactez-nous.'),
      default      => null,
    };
  }

  private function blockWithMessage(string $msg): void {
    user_logout();
    $this->messenger->addWarning($msg);
    throw new AccessDeniedHttpException();
  }
}
```

## hook_entity_access — restreindre l'accès par rôle
```php
function client_b2b_entity_access(EntityInterface $entity, string $operation, AccountInterface $account): AccessResultInterface {
  if ($entity->getEntityTypeId() === 'commerce_product' && $operation === 'view price') {
    return $account->hasRole('b2b_buyer')
      ? AccessResult::allowed()
      : AccessResult::forbidden('Prix réservé aux acheteurs B2B.');
  }
  return AccessResult::neutral();
}
```

## Bonnes pratiques
- Rôles toujours en YAML — jamais configurés uniquement via l'UI admin
- `AccessResult::neutral()` par défaut — ne jamais retourner `forbidden()` sur des entités non concernées
- Tester les permissions avec un compte anonyme ET un compte B2B actif

## Livrables
- YAML des rôles + permissions versionnés
- Champs custom User en YAML
- EventSubscriber login avec contrôle statut

## Format de sortie
Précise : rôles à créer · permissions requises par rôle · champs custom à ajouter sur l'utilisateur · règles d'accès à implémenter

## Anti-patterns
- ❌ **Rôles configurés en UI non versionnés** : drift entre environnements → YAML CMI
- ❌ **`AccessResult::forbidden()` sur des entités non concernées** : blocages inattendus → `neutral()` par défaut (fait ici ✓)
- ❌ **Permissions trop larges** (ex. `administer users` à un rôle client) : sur-privilège → principe du moindre privilège
- ❌ **Ne tester qu'un seul profil** : régressions d'accès → tester anonyme + B2B actif + en_attente/refusé
- ❌ **Logique d'accès dispersée** (hook + subscriber sans cohérence) : règles contradictoires → centraliser
- ❌ **Statut de compte non vérifié au login** : accès d'un compte non validé → contrôle `UserLoginEvent`

## Sources
- **Drupal User / Access API** — `AccessResult`, `hook_entity_access`, `UserLoginEvent` — api.drupal.org
- **Permissions & rôles** — drupal.org/docs/user_guide (Drupal 10/11)
- **PSR-3 logging** pour l'audit des accès — php-fig.org

## Voir aussi
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — prix conditionné au rôle `b2b_buyer`
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — rôles et champs en YAML versionné
- [`drupal-module-custom.md`](drupal-module-custom.md) — service de validation de compte
- [`drupal-api-rest.md`](drupal-api-rest.md) — exposition par rôle et champs masqués
