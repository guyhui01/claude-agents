# Skill — Drupal Configuration Management (CMI — YAML)
> Certifications: Acquia Certified Drupal Developer

## Objective
Manage all Drupal configuration through versioned YAML files (CMI), ensuring consistency across local / staging / production environments.

## CMI principle
```
Database (runtime)  ←→  config/sync/*.yml (versioned in git)
        ↑ drush config:import
        ↓ drush config:export
```

## Daily workflow
```bash
# After a change in the local admin UI
drush config:export          # export DB → YAML
git add config/sync/
git commit -m "config: add field_siret on user"
git push

# On staging / prod
git pull
drush updatedb -y            # DB updates (update hooks)
drush config:import -y       # import YAML → DB
drush cr                     # rebuild caches
```

## Module install config (config/install/)
```yaml
# modules/custom/client_b2b/config/install/client_b2b.settings.yml
# Loaded automatically on the module's first enable
admin_email: 'admin@client-b2b.fr'
account_validation_delay_hours: 24
flood_limit: 5
flood_window: 900
```

## Read the config in code
```php
// Read
$config = \Drupal::config('client_b2b.settings');
$adminEmail = $config->get('admin_email');

// Write (ConfigFactory — injected service)
$this->configFactory->getEditable('client_b2b.settings')
  ->set('admin_email', $newEmail)
  ->save();
```

## Per-environment override (settings.php)
```php
// web/sites/default/settings.local.php (not versioned)
$config['client_b2b.settings']['admin_email'] = 'dev-local@client-b2b.fr';

// Production (settings.php or settings.prod.php)
$config['sendgrid_integration.settings']['apikey'] = getenv('SENDGRID_API_KEY');
```

## Pitfalls to avoid
| Pitfall | Solution |
|-------|----------|
| Config created in the UI and not exported | Always `drush cex` before commit |
| `drush cim` overwrites local changes | Check `drush config:status` before import |
| Different UUIDs across environments | Never copy YAML from one env to another by hand |
| Sensitive config (API keys) in YAML | Use an override via `settings.php` + env variables |

## Best practices
- `config/sync/` versioned in git, `config/install/` inside the custom module
- Never put API keys or secrets in versioned YAML
- Test `drush config:import --preview` before importing to prod

## Deliverables
- YAML config exported and committed with every US
- `config/install/` for the module's initial config
- Documented deployment procedure

## Output format
Specify: configuration to manage (fields, roles, views, workflows) · target environments · secrets to externalize

> The "Pitfalls to avoid" above serve as the anti-patterns for this skill.

## Sources
- **Configuration Management (CMI)** — drupal.org/docs/configuration-management (Drupal 10/11; CMI since Drupal 8)
- **Config Split** — drupal.org/project/config_split (per-environment differentiated config)
- **Drush** — drush.org (`config:export/import/status`)

## See also
- [`drupal-module-custom.md`](drupal-module-custom.md) — the module's `config/install/`
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — order workflow in YAML
- [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) — externalized secrets (settings.php/env)
- [`drupal-user-roles.md`](drupal-user-roles.md) — versioned roles and permissions
