# Skills — Drupal PHP Development

> Folder attached to `AGENT-DEV-DRUPAL-PHP.md`
> Frameworks: Acquia Certified Drupal Developer (Back-End / Site Builder / Front-End) · Drupal Association Commerce 2.x · Zend PHP 8.x · PHPUnit / Behat

---

## Skill index (10)

| # | Skill | When to use it | Certification |
|---|---|---|---|
| 1 | [`drupal-module-custom.md`](drupal-module-custom.md) | Develop a custom Drupal 10 module (hooks, plugins, services, events) | Acquia Back-End |
| 2 | [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) | Configure Drupal Commerce 2.x (catalog, variations, B2B pricing) | Acquia Commerce |
| 3 | [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) | Develop the Drupal Commerce checkout | Acquia Commerce |
| 4 | [`drupal-user-roles.md`](drupal-user-roles.md) | Manage Drupal roles and permissions | Acquia Site Builder |
| 5 | [`drupal-theming-twig.md`](drupal-theming-twig.md) | Develop Twig templates (preprocess, theme hooks) | Acquia Front-End |
| 6 | [`drupal-config-yaml.md`](drupal-config-yaml.md) | Manage CMI configuration (YAML export/import) | Acquia Back-End |
| 7 | [`drupal-api-rest.md`](drupal-api-rest.md) | Expose/consume JSON:API / REST APIs | Acquia Back-End |
| 8 | [`drupal-tests-phpunit-behat.md`](drupal-tests-phpunit-behat.md) | Automated testing with PHPUnit + Behat (Drupal Test Traits) | PHPUnit · Behat |
| 9 | [`drupal-performance.md`](drupal-performance.md) | Optimize performance (Cache, BigPipe, CDN, Varnish) | Acquia Back-End |
| 10 | [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) | Integrate third-party APIs (Stripe, SendGrid, Chronopost, INSEE) | Acquia Back-End · Zend PHP |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... DEVELOP A CUSTOM FEATURE?
    → drupal-module-custom.md (hooks, plugins, services)
    → drupal-config-yaml.md (Configuration Management)
    → drupal-tests-phpunit-behat.md (test coverage)

  ... WORK ON DRUPAL COMMERCE?
    → drupal-commerce-catalog.md (catalog + B2B pricing)
    → drupal-commerce-checkout.md (order workflow + payment)

  ... WORK ON THE FRONT END?
    → drupal-theming-twig.md (templates + preprocess)

  ... INTEGRATE THIRD-PARTY SYSTEMS?
    → drupal-api-rest.md (Drupal exposes its APIs)
    → drupal-integration-api-tierce.md (Drupal consumes third-party APIs)

  ... OPTIMIZE FOR PRODUCTION?
    → drupal-performance.md (Cache + BigPipe + CDN)
    → drupal-user-roles.md (role-based security)
```

---

## Boundaries with other agents

| Adjacent topic | Relevant agent | Boundary |
|---|---|---|
| Overall CMS architecture (headless, hybrid) | `AGENT-CMS-DIGITAL.md` skill `drupal-developpement.md` | DEV-DRUPAL = application code; CMS-DIGITAL = architecture/governance |
| TypeScript / React frontend (headless Drupal) | `AGENT-DEV-TYPESCRIPT-IA.md` | DEV-DRUPAL = Drupal backend; DEV-TS = SPA frontend |
| Infrastructure / deployment | `AGENT-DEVOPS-CLOUD.md` | DEV-DRUPAL = code; DEVOPS = infra |
| AI architecture | `AGENT-AI-ARCHITECT.md` | DEV-DRUPAL = backend; AI-ARCHITECT = AI stack |

---

## Frameworks and standards used

- **Drupal 10**: https://www.drupal.org/docs/10
- **Drupal Commerce 2.x**: https://docs.drupalcommerce.org/
- **Twig**: https://twig.symfony.com/doc/3.x/
- **PHP 8.x**: https://www.php.net/manual/en/
- **Drupal Coding Standards** + **PHPCS Drupal ruleset**
- **PHPUnit**: https://docs.phpunit.de/
- **Behat**: https://docs.behat.org/
- **Drupal Configuration Management (CMI)**: YAML export/import
