# Skills — Développement Drupal PHP

> Dossier rattaché à `AGENT-DEV-DRUPAL-PHP.md`
> Référentiels : Acquia Certified Drupal Developer (Back-End / Site Builder / Front-End) · Drupal Association Commerce 2.x · Zend PHP 8.x · PHPUnit / Behat

---

## Index des skills (10)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`drupal-module-custom.md`](drupal-module-custom.md) | Développer un module custom Drupal 10 (hooks, plugins, services, events) | Acquia Back-End |
| 2 | [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) | Configurer Drupal Commerce 2.x (catalogue, variations, pricing B2B) | Acquia Commerce |
| 3 | [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) | Développer le checkout Drupal Commerce | Acquia Commerce |
| 4 | [`drupal-user-roles.md`](drupal-user-roles.md) | Gérer les rôles et permissions Drupal | Acquia Site Builder |
| 5 | [`drupal-theming-twig.md`](drupal-theming-twig.md) | Développer des templates Twig (preprocess, theme hooks) | Acquia Front-End |
| 6 | [`drupal-config-yaml.md`](drupal-config-yaml.md) | Gérer la configuration CMI (YAML export/import) | Acquia Back-End |
| 7 | [`drupal-api-rest.md`](drupal-api-rest.md) | Exposer/consommer des APIs JSON:API / REST | Acquia Back-End |
| 8 | [`drupal-tests-phpunit-behat.md`](drupal-tests-phpunit-behat.md) | Tests automatisés PHPUnit + Behat (Drupal Test Traits) | PHPUnit · Behat |
| 9 | [`drupal-performance.md`](drupal-performance.md) | Optimiser performances (Cache, BigPipe, CDN, Varnish) | Acquia Back-End |
| 10 | [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) | Intégrer APIs tierces (Stripe, SendGrid, Chronopost, INSEE) | Acquia Back-End · Zend PHP |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉVELOPPER UNE FONCTIONNALITÉ CUSTOM ?
    → drupal-module-custom.md (hooks, plugins, services)
    → drupal-config-yaml.md (Configuration Management)
    → drupal-tests-phpunit-behat.md (couverture tests)

  ... TRAVAILLER SUR DRUPAL COMMERCE ?
    → drupal-commerce-catalog.md (catalogue + tarification B2B)
    → drupal-commerce-checkout.md (workflow commande + paiement)

  ... TRAVAILLER SUR LE FRONT ?
    → drupal-theming-twig.md (templates + preprocess)

  ... INTÉGRER DES SYSTÈMES TIERS ?
    → drupal-api-rest.md (Drupal expose ses APIs)
    → drupal-integration-api-tierce.md (Drupal consomme APIs tierces)

  ... OPTIMISER PRODUCTION ?
    → drupal-performance.md (Cache + BigPipe + CDN)
    → drupal-user-roles.md (sécurité par rôles)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Architecture CMS globale (headless, hybrid) | `AGENT-CMS-DIGITAL.md` skill `drupal-developpement.md` | DEV-DRUPAL = code applicatif ; CMS-DIGITAL = architecture/gouvernance |
| Frontend TypeScript / React (Drupal headless) | `AGENT-DEV-TYPESCRIPT-IA.md` | DEV-DRUPAL = backend Drupal ; DEV-TS = frontend SPA |
| Infrastructure / déploiement | `AGENT-DEVOPS-CLOUD.md` | DEV-DRUPAL = code ; DEVOPS = infra |
| Architecture IA | `AGENT-AI-ARCHITECT.md` | DEV-DRUPAL = backend ; AI-ARCHITECT = stack IA |

---

## Référentiels et standards utilisés

- **Drupal 10** : https://www.drupal.org/docs/10
- **Drupal Commerce 2.x** : https://docs.drupalcommerce.org/
- **Twig** : https://twig.symfony.com/doc/3.x/
- **PHP 8.x** : https://www.php.net/manual/fr/
- **Drupal Coding Standards** + **PHPCS Drupal ruleset**
- **PHPUnit** : https://docs.phpunit.de/
- **Behat** : https://docs.behat.org/
- **Drupal Configuration Management (CMI)** : YAML export/import
