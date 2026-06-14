# Skill — Code Review
> Certifications: ISTQB Certified Tester Foundation Level v4.0 · GitHub Certifications (GitHub 2024)

## Objective
Run effective code reviews: spot logic, security, performance and readability defects — while providing constructive, actionable feedback.

## Review checklist (priority order)

```
PRIORITY 1 — Correctness (potential bugs)
  □ Logic is correct and covers all edge cases
  □ No possible null pointer / undefined / division by zero
  □ Explicit error handling (try/catch, error results)
  □ Concurrency: race conditions, deadlocks (async/await, threads)
  □ Security: SQL injection, XSS, unsafe deserialization, IDOR

PRIORITY 2 — Readability & Maintainability
  □ Expressive variable/function names (reveal intent)
  □ Short functions (< 30 lines), a single level of abstraction
  □ No duplication (DRY) — extract if > 2 occurrences
  □ Comments only on non-obvious "whys"

PRIORITY 3 — Design
  □ Adheres to the project's architectural patterns
  □ Low coupling, high cohesion (SOLID)
  □ No premature abstraction ("You Ain't Gonna Need It")

PRIORITY 4 — Performance
  □ No N+1 queries in loops (ORM, DB)
  □ No useless recomputation in loops (hoist out of the loop)
  □ Suitable data structures (Set vs Array for lookups)

PRIORITY 5 — Tests
  □ Coverage of both nominal AND error cases
  □ Readable tests (AAA: Arrange, Act, Assert)
  □ No conditional logic inside tests
```

## Review comments — Standard phrasings

```
LEVEL       PREFIX         EXAMPLE
──────────  ─────────────  ──────────────────────────────────────────────────────
Blocking    [MUST]         "[MUST] Missing null check on line 42 — possible NullPointerException"
Suggestion  [SUGGEST]      "[SUGGEST] Extract this logic into a private method to make it testable"
Question    [?]            "[?] Why reopen the connection here instead of reusing the pool?"
Praise      [NICE]         "[NICE] Nice idempotency handling on this DELETE endpoint"
Nit         [NIT]          "[NIT] Naming: prefetchData → prefetchUserProfile would be clearer"
```

## Code patterns to reject

```typescript
// ❌ Bad — Callback hell + no error handling
getData(id, (err, data) => {
  processData(data, (err2, result) => {
    saveResult(result, (err3) => { /* ... */ })
  })
})

// ✅ Correct — async/await + error handling
async function handleData(id: string): Promise<void> {
  const data = await getData(id)
  const result = await processData(data)
  await saveResult(result)
}

// ❌ Bad — N+1 query
const users = await User.findAll()
for (const user of users) {
  user.orders = await Order.findAll({ where: { userId: user.id } })  // N queries!
}

// ✅ Correct — Eager loading
const users = await User.findAll({ include: [{ model: Order }] })  // 1 query with JOIN
```

## Pull Request template

```markdown
## Context
[Why this change? What problem does it solve?]

## Changes
- [Change 1]
- [Change 2]

## Testing performed
- [ ] Unit tests added / updated
- [ ] Integration tests validated
- [ ] Manual testing (scenarios covered)

## Reviewer checklist
- [ ] Correct logic and edge cases covered
- [ ] Security checked (OWASP Top 10)
- [ ] Performance (no N+1, no costly loop)
- [ ] Readable, well-named code
```

## Deliverables
- Categorized review comments (MUST / SUGGEST / NIT)
- Summary report (blocking issues, quality trends)
- Prioritized refactoring recommendations
- Code quality metrics (test coverage, cyclomatic complexity)

## Output format
Specify: **language and stack** (TypeScript, Python, Java…), **context** (new feature, bugfix, refactoring), **priority focus** (security, performance, readability), **desired levels** (MUST only or full review).
