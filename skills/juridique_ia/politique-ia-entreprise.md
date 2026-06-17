# Skill — Enterprise AI Policy & Use Charter

> Certifications: AI Act Compliance Expert · CIPP/E · CAP IABAC
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **AI Act EU 2024/1689** (art. 4 AI literacy, art. 5 prohibited, art. 50 transparency) · **GDPR EU 2016/679** · **OECD AI Principles** · **NIST AI RMF 1.0** · French Labor Code (Works Council consultation)

## Objective

Draft an organization's **AI policy** and **generative-AI use charter**: frame the uses, set permitted/prohibited cases, define roles and the validation process — in compliance with the AI Act + GDPR.

## Frameworks mobilized

| Topic | Framework |
|---|---|
| Prohibited cases | **AI Act art. 5** (unacceptable-risk practices) |
| Training / AI literacy | **AI Act art. 4** (obligation since Feb. 2, 2025) |
| Transparency (deepfakes, chatbots) | **AI Act art. 50** |
| Personal data | **GDPR 2016/679** |
| Values / principles | **OECD AI Principles** · **NIST AI RMF** (GOVERN) |
| Employee monitoring | **French Labor Code** + **Works Council** consultation (information-consultation) |

## Enterprise AI Policy — structure

```markdown
# Artificial Intelligence Policy — [Organization]
Version: 1.0 | Date: [Date] | Approved by: [Executive committee / CEO]

## 1. Purpose and scope
Framework for the use, development, and deployment of AI systems.

## 2. Our AI values (aligned with the OECD AI Principles)
- Transparent · Fair · Accountable (human as guarantor) · Compliant (AI Act, GDPR)
- Sustainable (measured environmental footprint)

## 3. Permitted use cases
✅ Automation of repetitive tasks (manager validation)
✅ Writing assistance (mandatory human review)
✅ Data analysis (quality control)
✅ Assisted customer support (human escalation possible)
✅ Personalization (with a GDPR legal basis)

## 4. PROHIBITED use cases
❌ Practices prohibited by the AI Act (art. 5: social scoring,
   manipulation, emotion recognition at work/in education…)
❌ Employee monitoring with no legal basis or Works Council consultation
❌ Fully automated HR decision (GDPR art. 22)
❌ Unmarked deepfakes (AI Act art. 50)
❌ Personal/confidential data in unapproved public LLMs

## 5. AI project validation process
1. Ethical assessment (EIA) → 2. DPIA if personal data (GDPR art. 35)
→ 3. AI Act compliance review → 4. AI Committee validation → 5. Security review (CISO)

## 6. Roles and responsibilities (RACI)
| Role | Responsibility |
| CDO/Head of AI | Strategy and overall compliance |
| DPO | GDPR compliance | CISO | AI systems security |
| Managers | Use validation | Employees | Compliance with the policy |

## 7. Mandatory training (AI Act art. 4 — AI literacy)
- "AI & GDPR: the essentials" (2h) → everyone
- "Responsible Prompt Engineering" (1h) → GenAI users
- "AI Act & compliance" (3h) → data/AI/legal teams

## 8. Reporting and incidents
Dedicated address + alert mechanism (consistent with the
whistleblower procedure / French Sapin 2 law).

## 9. Review
Annual, or on any major regulatory change (AI Act, CNIL guidance).
```

## Generative-AI Use Charter (employees)
```markdown
# GenAI Charter — the essentials
✅ I MAY use approved AI tools (intranet list)
⚠️ I MUST review and validate the outputs (I remain accountable)
❌ I MUST NOT paste client/confidential data into an unapproved LLM
⚠️ I MUST report any problematic output (bias, error, inappropriate content)
⚠️ I MUST mention "AI-assisted" on client deliverables when required
   (consistent with AI Act art. 50 + professional ethics)
✅ I MAY propose new use cases via the AI portal
```

## Sector example — industrial mid-market company (internal GenAI rollout)

| Element | Policy choice |
|---|---|
| Approved tools | Copilot M365 + Claude (via enterprise API), public ChatGPT prohibited for internal data |
| Key prohibited case | 100% automated HR screening (art. 22) + employee production monitoring without Works Council (art. 5 emotions) |
| AI literacy | Mandatory 2h module (art. 4) rolled out before access is opened |
| Governance | Quarterly AI Committee, validation gate for new use cases |
| Transparency | "AI-assisted" mention on client documents; support chatbot flagged (art. 50) |

## Anti-patterns

- ❌ **Policy with no validation gate**: principles displayed but no real control over projects
- ❌ **Citing "unacceptable risk" without art. 5**: anchor the prohibitions on the text
- ❌ **Employee monitoring without the Works Council**: labor-court risk + CNIL penalty
- ❌ **Forgetting AI literacy (art. 4)**: an effective obligation since Feb. 2, 2025
- ❌ **A "copy-paste" charter not tailored** to the sector (health/finance/HR have their own constraints)
- ❌ **Prohibiting without providing an approved alternative**: drives shadow AI
- ❌ **Unrevised policy** while regulation evolves fast (AI Act, CNIL guidance)

## Deliverables
- Complete AI policy (official document approved by the executive committee)
- AI use charter (1 page, poster format)
- Employee FAQ "AI at work"
- AI project validation process (workflow + AI Committee gate)
- Awareness training (slides + quiz, AI literacy art. 4)

## Output format
Specify: organization size and industry · AI tools already in use · past incidents · level of external exposure (clients, partners) · presence of a Works Council · required legal validation.

## Sources
- **AI Act** — Regulation (EU) 2024/1689 (art. 4 AI literacy, art. 5 prohibited, art. 50 transparency) — eur-lex.europa.eu
- **GDPR** — Regulation (EU) 2016/679 (art. 22 automated decision-making)
- **OECD AI Principles** (2019, upd. 2024) — oecd.ai · **NIST AI RMF 1.0** (GOVERN) — nist.gov
- **French Labor Code** — Works Council information-consultation (monitoring / new tools) · **Sapin 2 law** (alert mechanism)
- **CNIL** — AI-at-work guides (2024-2025)

## See also
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — AI committee, EIA, values (upstream of the policy)
- [`ai-act-conformite.md`](ai-act-conformite.md) — prohibited cases (art. 5) and obligations
- [`rgpd-ia.md`](rgpd-ia.md) — legal basis for uses processing personal data
- [`contrats-ia.md`](contrats-ia.md) — contractual framing of approved AI tools
- [`../formateur_ia/`](../formateur_ia/) — design of AI literacy training (art. 4)
