# Skill — Drupal Roles and Permissions Management
> Certifications: Acquia Certified Site Builder · Acquia Certified Developer

## Objective
Create and configure Drupal roles (YAML), manage permissions, and implement custom access controls via EventSubscriber and hooks.

## Roles in YAML
```yaml
# config/sync/user.role.b2b_buyer.yml
id: b2b_buyer
label: 'B2B Buyer'
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
label: 'Telecom Client Administrator'
weight: 4
permissions:
  - 'administer users'
  - 'view any commerce_order'
  - 'update any commerce_order'
  - 'manage b2b_accounts'
```

## Custom fields on User
```yaml
# config/sync/field.field.user.user.field_account_status.yml
field_name: field_account_status
entity_type: user
label: 'B2B account status'
field_type: list_string
required: true
default_value:
  - value: pending
settings:
  allowed_values:
    - { value: pending,  label: 'Pending' }
    - { value: active,   label: 'Active' }
    - { value: rejected, label: 'Rejected' }
```

## EventSubscriber — login control by status
```php
// src/EventSubscriber/B2bLoginSubscriber.php
class B2bLoginSubscriber implements EventSubscriberInterface {
  public static function getSubscribedEvents(): array {
    return [UserLoginEvent::class => 'onUserLogin'];
  }

  public function onUserLogin(UserLoginEvent $event): void {
    $status = $event->getAccount()->get('field_account_status')->value;
    match($status) {
      'pending'  => $this->blockWithMessage('Your account is being validated (within 24h).'),
      'rejected' => $this->blockWithMessage('Your request was rejected. Contact us.'),
      default    => null,
    };
  }

  private function blockWithMessage(string $msg): void {
    user_logout();
    $this->messenger->addWarning($msg);
    throw new AccessDeniedHttpException();
  }
}
```

## hook_entity_access — restrict access by role
```php
function client_b2b_entity_access(EntityInterface $entity, string $operation, AccountInterface $account): AccessResultInterface {
  if ($entity->getEntityTypeId() === 'commerce_product' && $operation === 'view price') {
    return $account->hasRole('b2b_buyer')
      ? AccessResult::allowed()
      : AccessResult::forbidden('Price restricted to B2B buyers.');
  }
  return AccessResult::neutral();
}
```

## Best practices
- Roles always in YAML — never configured only via the admin UI
- `AccessResult::neutral()` by default — never return `forbidden()` on unrelated entities
- Test permissions with an anonymous account AND an active B2B account

## Deliverables
- Versioned YAML for roles + permissions
- Custom User fields in YAML
- Login EventSubscriber with status control

## Output format
Specify: roles to create · permissions required per role · custom fields to add on the user · access rules to implement

## Anti-patterns
- ❌ **Roles configured in the UI, unversioned**: drift across environments → CMI YAML
- ❌ **`AccessResult::forbidden()` on unrelated entities**: unexpected blocks → `neutral()` by default (done here ✓)
- ❌ **Overly broad permissions** (e.g., `administer users` on a client role): over-privilege → least-privilege principle
- ❌ **Testing only one profile**: access regressions → test anonymous + active B2B + pending/rejected
- ❌ **Scattered access logic** (hook + subscriber out of sync): contradictory rules → centralize
- ❌ **Account status not checked at login**: access for an unvalidated account → `UserLoginEvent` control

## Sources
- **Drupal User / Access API** — `AccessResult`, `hook_entity_access`, `UserLoginEvent` — api.drupal.org
- **Permissions & roles** — drupal.org/docs/user_guide (Drupal 10/11)
- **PSR-3 logging** for access auditing — php-fig.org

## See also
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — price gated on the `b2b_buyer` role
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — roles and fields in versioned YAML
- [`drupal-module-custom.md`](drupal-module-custom.md) — account validation service
- [`drupal-api-rest.md`](drupal-api-rest.md) — exposure by role and hidden fields
