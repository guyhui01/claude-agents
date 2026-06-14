# Skill — AI Security
> Certifications: AWS AIF-C01 · Azure AI-102 · EU AI Act

## Objective
Identify and mitigate the security risks specific to AI and LLM systems.

## Top 10 LLM risks (OWASP LLM Top 10 — 2025)
1. **Prompt Injection**: malicious instructions in user inputs
2. **Insecure Output Handling**: unvalidated execution of LLM outputs
3. **Training Data Poisoning**: corruption of training data
4. **Model Denial of Service**: token overload to exhaust resources
5. **Supply Chain Vulnerabilities**: compromised dependencies (models, plugins)
6. **Sensitive Information Disclosure**: data leakage via the LLM
7. **Insecure Plugin Design**: LLM tools with overly broad access
8. **Excessive Agency**: agent with too many permissions
9. **Overreliance**: excessive trust in LLM outputs
10. **Model Theft**: model extraction via targeted queries

## Protection measures

### Prompt Injection
- Clearly separate system instructions and user input
- Validate and sanitize inputs (don't pass them straight to the LLM)
- Use XML tags to delimit user content

### Agent permission management
- Principle of least privilege: an agent only accesses what it needs
- Audit log of all agent actions
- Human-in-the-loop before sensitive actions

### Data Privacy (GDPR + EU AI Act)
- Don't send PII to cloud LLM APIs without consent
- Anonymize data before processing
- Audit trail of data processed by the AI

### EU AI Act (2024-2026)
| Risk | Category | Obligation |
|---|---|---|
| Unacceptable | Banned | — |
| High | Heavy regulation | Audit, transparency, human oversight |
| Limited | Transparency obligation | Disclose that it is AI |
| Minimal | Unrestricted | — |

## Deliverables
- AI security audit report (OWASP LLM Top 10)
- Risks × mitigation measures matrix
- AI Act compliance checklist
- Hardening recommendations

## Output format
Specify: AI system type · data processed · exposure (internal/public) · deployment country
