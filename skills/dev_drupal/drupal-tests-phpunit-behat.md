# Skill — Drupal Automated Testing — PHPUnit & Behat
> Certifications: PHPUnit / Behat — Automated Testing Drupal · Acquia Cloud

## Objective
Write PHPUnit tests (unit, kernel, functional) and Behat (BDD) tests to guard against regressions in custom Drupal modules.

## Drupal PHPUnit test types

| Type | Base class | Speed | Context |
|------|---------------|---------|----------|
| Unit | `UnitTestCase` | Very fast | No DB, no Drupal bootstrap |
| Kernel | `KernelTestBase` | Medium | DB + Drupal services loaded |
| Functional | `BrowserTestBase` | Slow | Simulated browser, full pages |
| FunctionalJS | `WebDriverTestBase` | Very slow | Headless Chrome (JavaScript) |

## Unit test — SiretValidator
```php
// tests/src/Unit/SiretValidatorTest.php
class SiretValidatorTest extends UnitTestCase {
  public function testValidSiret(): void {
    $validator = new SiretConstraintValidator();
    $this->assertTrue($validator->isValid('12345678901234')); // 14 digits ✅
  }

  public function testInvalidSiretTooShort(): void {
    $this->assertFalse($validator->isValid('1234567'));        // 7 digits ❌
  }

  public function testInvalidSiretWithLetters(): void {
    $this->assertFalse($validator->isValid('1234567890ABCD')); // letters ❌
  }
}
```

## Kernel test — AccountValidationService
```php
// tests/src/Kernel/AccountValidationServiceTest.php
class AccountValidationServiceTest extends KernelTestBase {
  protected static $modules = ['client_b2b', 'user', 'system'];

  public function testValidateAccount(): void {
    $user = User::create(['name' => 'test', 'mail' => 'test@b2b.fr',
                          'field_account_status' => 'pending']);
    $user->save();

    $this->container->get('client_b2b.account_validation')->validate($user);

    $user = User::load($user->id());
    $this->assertEquals('active', $user->get('field_account_status')->value);
  }
}
```

## Behat test — BDD scenario (from the QA .feature files)
```gherkin
# tests/behat/features/US-005-creation-compte.feature
# (copy of the QA file bdd_gherkin/US-005.feature)
Feature: B2B professional account creation

  Scenario: Invalid SIRET — not 14 digits
    Given I am on the B2B signup page
    When I enter the SIRET "1234567"
    And I submit the form
    Then the message "The SIRET must contain exactly 14 digits" is shown
    And the submission is blocked
```

```php
// tests/behat/features/bootstrap/FeatureContext.php
class FeatureContext extends RawDrupalContext {
  /**
   * @When I enter the SIRET :siret
   */
  public function iEnterTheSiret(string $siret): void {
    $this->getSession()->getPage()->fillField('SIRET', $siret);
  }

  /**
   * @Then the message :message is shown
   */
  public function theMessageIsShown(string $message): void {
    $this->assertSession()->pageTextContains($message);
  }
}
```

## Commands
```bash
# PHPUnit
./vendor/bin/phpunit web/modules/custom/client_b2b/ --testdox

# Behat (all Sprint 1 scenarios)
./vendor/bin/behat --tags=sprint1

# Behat (a specific US)
./vendor/bin/behat features/US-005-creation-compte.feature
```

## Best practices
- 1 unit test per service method (SiretValidator, AccountValidation)
- Kernel tests for interactions with the Drupal DB
- Behat scenarios = copies of the QA `.feature` files → guaranteed QA / DEV alignment
- Behat `@tags` per sprint for selective execution in CI

## Deliverables
- Unit tests for each custom Constraint and Service
- Kernel tests for entity workflows
- Behat FeatureContext with step definitions

## Output format
Specify: class / service to test · behaviors to validate · available QA Gherkin scenarios · target coverage level

## Anti-patterns
- ❌ **Testing only the happy path**: edge cases break in prod → cover invalid/error cases (done here ✓)
- ❌ **Validating the SIRET on length alone** (14 digits) without the **Luhn check**: fake SIRETs accepted → Luhn check
- ❌ **Functional test for what could be Kernel/Unit**: slow CI → pick the cheapest sufficient level
- ❌ **Behat out of sync with the QA `.feature` files**: QA/DEV drift → reuse the QA Gherkin scenarios
- ❌ **No tests in CI**: silent regressions → run PHPUnit + Behat in the pipeline
- ❌ **No pinned versions** (PHPUnit/Behat): tests broken on upgrade → pin via Composer

## Sources
- **PHPUnit** — phpunit.de (Sebastian Bergmann) · **Behat** — behat.org (BDD) · **Gherkin** — cucumber.io/docs/gherkin
- **Drupal Testing** (UnitTestCase / KernelTestBase / BrowserTestBase / WebDriverTestBase) — drupal.org/docs/automated-testing
- **Drupal 10/11** — drupal.org (PHP 8.3)

## See also
- [`drupal-module-custom.md`](drupal-module-custom.md) — services/constraints to test
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — workflows to cover in Kernel/Functional
- [`drupal-user-roles.md`](drupal-user-roles.md) — per-role access tests
- [`../qa_testing/`](../qa_testing/) — source QA Gherkin scenarios (QA/DEV alignment)
