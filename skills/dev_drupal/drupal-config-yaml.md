# Skill — Configuration Management Drupal (CMI — YAML)
> Certifications : Acquia Certified Drupal Developer

## Objectif
Gérer toute la configuration Drupal via fichiers YAML versionnés (CMI), garantir la cohérence entre environnements local / staging / production.

## Principe CMI
```
Base de données (runtime)  ←→  config/sync/*.yml (versionné git)
        ↑ drush config:import
        ↓ drush config:export
```

## Workflow quotidien
```bash
# Après une modif en UI admin locale
drush config:export          # export BDD → YAML
git add config/sync/
git commit -m "config: ajouter champ field_siret sur user"
git push

# Sur staging / prod
git pull
drush updatedb -y            # mises à jour BDD (update hooks)
drush config:import -y       # import YAML → BDD
drush cr                     # rebuild caches
```

## Config d'installation de module (config/install/)
```yaml
# modules/custom/aginode_b2b/config/install/aginode_b2b.settings.yml
# Chargée automatiquement lors du premier enable du module
admin_email: 'admin@aginode.fr'
account_validation_delay_hours: 24
flood_limit: 5
flood_window: 900
```

## Lire la config dans le code
```php
// Lecture
$config = \Drupal::config('aginode_b2b.settings');
$adminEmail = $config->get('admin_email');

// Écriture (ConfigFactory — service injecté)
$this->configFactory->getEditable('aginode_b2b.settings')
  ->set('admin_email', $newEmail)
  ->save();
```

## Override par environnement (settings.php)
```php
// web/sites/default/settings.local.php (non versionné)
$config['aginode_b2b.settings']['admin_email'] = 'dev-local@aginode.fr';

// Production (settings.php ou settings.prod.php)
$config['sendgrid_integration.settings']['apikey'] = getenv('SENDGRID_API_KEY');
```

## Pièges à éviter
| Piège | Solution |
|-------|----------|
| Config créée en UI et non exportée | Toujours `drush cex` avant commit |
| `drush cim` écrase des modifs locales | Vérifier `drush config:status` avant import |
| UUID différents entre envs | Ne jamais copier de YAML d'un env à l'autre manuellement |
| Config sensible (clés API) en YAML | Utiliser override via `settings.php` + variables d'env |

## Bonnes pratiques
- `config/sync/` versionné dans git, `config/install/` dans le module custom
- Jamais de clés API ni secrets dans les YAML versionnés
- Tester `drush config:import --preview` avant d'importer en prod

## Livrables
- Config YAML exportée et committée à chaque US
- `config/install/` pour la config initiale du module
- Procédure de déploiement documentée

## Format de sortie
Précise : configuration à gérer (champs, rôles, vues, workflows) · environnements cibles · secrets à externaliser
