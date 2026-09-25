# QA Agile Skill — BDD & Gherkin Scenarios

> Certification: CTFL-AT · CTAL-ATT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile


## BDD — Behavior Driven Development
A collaborative approach (PO + DEV + QA) that expresses expected behaviors in structured natural language, executable by tools (Cucumber, SpecFlow, Behave).

## Gherkin syntax

```gherkin
Feature: [Feature name]
  As a [persona]
  I want [capability]
  So that [benefit]

  Background: (preconditions common to all scenarios)
    Given [common initial state]

  Scenario: [Nominal case — short description]
    Given [initial context]
    And [additional context]
    When [triggered action]
    And [additional action]
    Then [expected result]
    And [additional result]
    But [result that must not occur]

  Scenario Outline: [Case with multiple data sets]
    Given a user with the role <role>
    When they access <page>
    Then they see <result>

    Examples:
      | role    | page        | result            |
      | admin   | dashboard   | all widgets       |
      | viewer  | dashboard   | limited widgets   |
```

## Full example

```gherkin
Feature: User login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    And they have an active account
    When they enter the email "test@example.com"
    And they enter the password "Password123!"
    And they click "Log in"
    Then they are redirected to the dashboard
    And their first name appears in the menu

  Scenario: Failed login with a wrong password
    Given the user is on the login page
    When they enter the email "test@example.com"
    And they enter the password "wrong"
    And they click "Log in"
    Then an error message is displayed
    But they are not logged in
```

## Gherkin best practices
- One scenario = one behavior tested
- Business language (not technical)
- Given = state, When = action, Then = observable result
- Not "I click the button ID#42" → "I click Submit"
- Independent scenarios (no dependency between scenarios)
- Background for common preconditions only
