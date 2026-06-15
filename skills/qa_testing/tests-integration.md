# QA V-Model Skill — Integration Testing

> Certification: CTAL-TTA · CTFL
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## ISTQB goal
Verify the interfaces and interactions between components, modules or systems.

## Integration approaches

| Approach | Description | Advantages |
|---|---|---|
| **Big Bang** | Integrate everything at once | Simple to organize |
| **Top-Down** | From the main module to the sub-modules | Detects architecture defects early |
| **Bottom-Up** | From low-level modules upward | Tests the base components first |
| **Incremental** | Module by module, progressively | Precise defect localization |

## Types of integration tests

- **API interface tests**: verify the REST/SOAP contracts (format, HTTP codes, data)
- **Data flow tests**: data sent = data received
- **IS integration tests**: consistency between systems (CRM ↔ ERP ↔ CMS)
- **Database tests**: data integrity after exchanges

## API integration test case template

```
ID: TI-[XXX]
Title: [Component A] → [Component B] — [Flow tested]
Endpoint: [GET/POST/PUT/DELETE] [URL]
Authentication: [type]

Request Body:
{
  "field1": "value",
  "field2": "value"
}

Expected response:
HTTP code: [200 / 201 / 400 / 404...]
Expected body:
{
  "field": "expected value"
}

Assertions:
- [ ] Correct HTTP code
- [ ] JSON structure matches the contract
- [ ] Field values correct
- [ ] Response time < [X ms]

Status: ☐ Pass  ☐ Fail  ☐ Blocked
```
