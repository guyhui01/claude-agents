# Skill — Tests automatisés Drupal — PHPUnit & Behat
> Certifications : PHPUnit / Behat — Automated Testing Drupal · Acquia Cloud

## Objectif
Écrire des tests PHPUnit (unitaires, kernel, fonctionnels) et des tests Behat (BDD) pour garantir la non-régression des modules custom Drupal.

## Types de tests PHPUnit Drupal

| Type | Classe de base | Vitesse | Contexte |
|------|---------------|---------|----------|
| Unit | `UnitTestCase` | Très rapide | Pas de BDD, pas de Drupal bootstrap |
| Kernel | `KernelTestBase` | Moyen | BDD + services Drupal chargés |
| Functional | `BrowserTestBase` | Lent | Navigateur simulé, pages complètes |
| FunctionalJS | `WebDriverTestBase` | Très lent | Chrome headless (JavaScript) |

## Test unitaire — SiretValidator
```php
// tests/src/Unit/SiretValidatorTest.php
class SiretValidatorTest extends UnitTestCase {
  public function testValidSiret(): void {
    $validator = new SiretConstraintValidator();
    $this->assertTrue($validator->isValid('12345678901234')); // 14 chiffres ✅
  }

  public function testInvalidSiretTooShort(): void {
    $this->assertFalse($validator->isValid('1234567'));        // 7 chiffres ❌
  }

  public function testInvalidSiretWithLetters(): void {
    $this->assertFalse($validator->isValid('1234567890ABCD')); // lettres ❌
  }
}
```

## Test Kernel — AccountValidationService
```php
// tests/src/Kernel/AccountValidationServiceTest.php
class AccountValidationServiceTest extends KernelTestBase {
  protected static $modules = ['client_b2b', 'user', 'system'];

  public function testValidateAccount(): void {
    $user = User::create(['name' => 'test', 'mail' => 'test@b2b.fr',
                          'field_compte_statut' => 'en_attente']);
    $user->save();

    $this->container->get('client_b2b.account_validation')->validate($user);

    $user = User::load($user->id());
    $this->assertEquals('actif', $user->get('field_compte_statut')->value);
  }
}
```

## Test Behat — scénario BDD (depuis les .feature QA)
```gherkin
# tests/behat/features/US-005-creation-compte.feature
# (copie du fichier QA bdd_gherkin/US-005.feature)
Feature: Création de compte professionnel B2B

  Scenario: SIRET invalide — pas 14 chiffres
    Given je suis sur la page d'inscription B2B
    When je saisis le SIRET "1234567"
    And je valide le formulaire
    Then le message "Le SIRET doit contenir exactement 14 chiffres" s'affiche
    And la soumission est bloquée
```

```php
// tests/behat/features/bootstrap/FeatureContext.php
class FeatureContext extends RawDrupalContext {
  /**
   * @When je saisis le SIRET :siret
   */
  public function jeSaisisLeSiret(string $siret): void {
    $this->getSession()->getPage()->fillField('SIRET', $siret);
  }

  /**
   * @Then le message :message s'affiche
   */
  public function leMessageSAffiche(string $message): void {
    $this->assertSession()->pageTextContains($message);
  }
}
```

## Commandes
```bash
# PHPUnit
./vendor/bin/phpunit web/modules/custom/client_b2b/ --testdox

# Behat (tous les scénarios Sprint 1)
./vendor/bin/behat --tags=sprint1

# Behat (une US spécifique)
./vendor/bin/behat features/US-005-creation-compte.feature
```

## Bonnes pratiques
- 1 test unitaire par méthode de service (SiretValidator, AccountValidation)
- Tests Kernel pour les interactions avec la BDD Drupal
- Scénarios Behat = copie des .feature QA → alignement QA / DEV garanti
- `@tags` Behat par sprint pour exécution sélective en CI

## Livrables
- Tests unitaires pour chaque Constraint et Service custom
- Tests Kernel pour les workflows d'entités
- FeatureContext Behat avec step definitions fr

## Format de sortie
Précise : classe / service à tester · comportements à valider · scénarios Gherkin QA disponibles · niveau de couverture cible

## Anti-patterns
- ❌ **Tester uniquement le happy path** : les cas limites cassent en prod → couvrir invalides/erreurs (fait ici ✓)
- ❌ **Valider le SIRET sur la longueur seule** (14 chiffres) sans la **clé de Luhn** : faux SIRET acceptés → contrôle Luhn
- ❌ **Test Functional pour ce qui peut être Kernel/Unit** : CI lente → choisir le niveau le moins coûteux suffisant
- ❌ **Behat désaligné des `.feature` QA** : dérive QA/DEV → réutiliser les scénarios Gherkin de la QA
- ❌ **Pas de tests en CI** : régressions silencieuses → exécution PHPUnit + Behat en pipeline
- ❌ **Pas de versions épinglées** (PHPUnit/Behat) : tests cassés à la montée → fixer via Composer

## Sources
- **PHPUnit** — phpunit.de (Sebastian Bergmann) · **Behat** — behat.org (BDD) · **Gherkin** — cucumber.io/docs/gherkin
- **Drupal Testing** (UnitTestCase / KernelTestBase / BrowserTestBase / WebDriverTestBase) — drupal.org/docs/automated-testing
- **Drupal 10/11** — drupal.org (PHP 8.3)

## Voir aussi
- [`drupal-module-custom.md`](drupal-module-custom.md) — services/contraintes à tester
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — workflows à couvrir en Kernel/Functional
- [`drupal-user-roles.md`](drupal-user-roles.md) — tests d'accès par rôle
- [`../qa_testing/`](../qa_testing/) — scénarios Gherkin QA source (alignement QA/DEV)
