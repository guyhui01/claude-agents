# Skill — AI Contracts (development, SaaS, DPA, IP clauses)

> Certifications: CIPP/E · LegalTech AI Certificate · Certified DPO CNIL
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **GDPR EU 2016/679** (art. 28, 32) · **Directive (EU) 2016/943** (trade secrets) · **French IP Code (CPI)** (art. L.111-1, L.112-1, L.122-6) · **AI Act EU 2024/1689** · TDM clauses (Directive 2019/790)

## Objective

Draft and negotiate the **contracts tied to AI projects** (development, SaaS, model licensing) and their sensitive clauses: intellectual property, GDPR DPA, anti-training use, indemnification, SLA, reversibility.

> **Scope & boundary**: this skill covers the **contractual mechanics**. For the **IP doctrine and verified case law** (AI outputs, TDM, NYT/Andersen/Getty/Like Company/Thaler cases), see [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — the domain's source of truth, not to be duplicated here.

## Frameworks mobilized

| Topic | Framework |
|---|---|
| Data processing | **GDPR art. 28** (DPA) + **art. 32** (security) |
| Model protection | **Directive (EU) 2016/943** (trade secrets, art. 2) |
| IP / FR copyright | **CPI** art. L.111-1, L.112-1, L.122-6 (software) |
| AI compliance | **AI Act 2024/1689** (provider compliance clause) |
| Training data | **Directive (EU) 2019/790** art. 4 (TDM + opt-out) |

## Types of AI contracts

### AI development contract
```
Essential clauses:
  1. Scope and deliverables
     → Precise functional specifications (resolve the ambiguity around "AI")
     → Performance metrics (accuracy, latency, availability) + acceptance criteria
  2. Intellectual property (see propriete-intellectuelle-ia.md for the doctrine)
     → Trained model: assignment vs. license; weights; datasets; source code
     → Future-improvements clause
  3. Data and GDPR
     → Party qualification (controller / processor); DPA (art. 28) mandatory
     → Data location (EU); retention and deletion
  4. Warranties and liability
     → AI Act compliance warranty; bias/discrimination clause
     → Liability limitation on AI decisions; IP indemnification (below)
  5. Maintenance and evolution
     → Ongoing maintenance (service level); model-drift monitoring (who monitors/fixes?)
     → Dependency on foundation models (e.g. a third-party API evolving)
```

### AI SaaS contract (client side) — points of vigilance
```
  ✓ GDPR-compliant DPA (art. 28) + listed sub-processors
  ✓ Data location (EU if strict GDPR; documented cloud regions)
  ✓ Portability and reversibility on termination
  ✓ Audit and control right
  ✓ Quantified availability SLA (99.9% ≠ 99.5% — annual downtime calculation)
  ✓ Retention / deletion policy
  ✓ Unilateral ToS changes (notification clause + exit right)
  ✓ Use of client data to train the provider's model → PROHIBITED by default (clause below)
  ✓ Provider's AI Act compliance (role, documentation)
```

## Ownership of AI models (summary — detail in `propriete-intellectuelle-ia.md`)

| Element | Preferred protection |
|---|---|
| Training code | Software copyright (CPI art. L.122-6) |
| **Model weights** | **Trade secret** (Directive 2016/943, art. 2 — 3 cumulative conditions) ⭐ |
| Proprietary datasets | *Sui generis* database right (Dir. 96/9) + trade secret |
| Trademark (model name) | EU trademark (Reg. 2017/1001) |

**LLM outputs (copyright)** — synthetic position (detail + verified case law → `propriete-intellectuelle-ia.md`):
- A **purely AI** output is in principle not protectable (no human author — USCO 2023/2025, CJEU *Infopaq* C-5/08 criterion).
- A **substantial human creative** contribution may open protection (case by case).
- Pending litigation on training (US fair use / EU TDM): NYT v. OpenAI, Andersen, Getty UK, Like Company v. Google (CJEU C-250/25) → **active monitoring** is essential.

> ⚠️ Do not assert a frozen "CJEU/EUIPO position": beyond *Infopaq*, there is not yet a CJEU ruling settling GenAI outputs (Like Company C-250/25 pending, hearing March 10, 2026). Any clause relies on the **dated** state of the law and on monitoring.

## DPA (Data Processing Agreement) — key clauses (GDPR art. 28)
```
Minimum clauses (art. 28.3):
  1. Subject matter, duration, nature and purpose of the processing
  2. Type of data + categories of individuals
  3. Obligations and rights of the controller
  4. Sub-processors (list + prior authorization)
  5. Transfers outside the EU (standard contractual clauses — SCC)
  6. Security measures (art. 32)
  7. Assistance with individuals' rights + breach notification
  8. Deletion / return at contract end + audit right
```

## Strategic clauses (templates)

### Anti-training-use clause
```
The PROVIDER shall refrain from using the CLIENT's data (inputs, outputs,
conversations, prompts, logs) to train, fine-tune, or improve any model
or service, save prior written agreement. The prohibition extends to
sub-processors. Commitment of unlimited duration (post-contractual included).
```

### IP indemnification clause
```
The PROVIDER indemnifies the CLIENT against any third-party claim relating
to an IP infringement arising from compliant use of the Service (outputs included).
Cap to be negotiated (e.g. 12-24 months of fees). Exclusions: non-compliant use,
unauthorized fine-tuning, outputs substantially modified by the CLIENT.
→ Compare market offers (Adobe Firefly, OpenAI Copyright Shield, Anthropic,
  Microsoft Customer Copyright Commitment) — terms and caps vary,
  to be checked in the current ToS (see DD table in propriete-intellectuelle-ia.md).
```

## Anti-patterns

- ❌ **Generic LLM-provider clauses**: no anti-training negotiation or IP indemnification = maximum risk
- ❌ **No DPA** when there is personal-data processing (GDPR art. 28 violation)
- ❌ **SLA without downtime calculation**: "99.9%" and "99.5%" = ~8.8 h vs ~43.8 h of downtime/year
- ❌ **Asserting frozen, unsourced case law** (e.g. "2025 CJEU/EUIPO position"): cite the dated state + refer to monitoring
- ❌ **Ignoring unilateral ToS changes**: provide for notification + exit right
- ❌ **Confusing assignment and license** of the model's / weights' IP
- ❌ **Forgetting the reversibility clause** (data export + portability) on termination
- ❌ **Protecting the weights by patent in the EU** with no "technical effect": prefer the trade secret

## Deliverables
- AI development contract template (annotated)
- AI SaaS due-diligence checklist
- GDPR-compliant DPA template (art. 28)
- AI Act compliance clause for provider contracts
- Standard IP clauses (assignment, anti-training-use, indemnification) — consistent with `propriete-intellectuelle-ia.md`

## Output format
Specify: contract type · parties (client/provider/SaaS) · data processed · countries of operation · priority IP stakes · negotiation timeframe.

## Sources
- **GDPR** — Regulation (EU) 2016/679, art. 28 (processing/DPA), art. 32 (security) — eur-lex.europa.eu
- **Directive (EU) 2016/943** of June 8, 2016 — trade-secret protection (art. 2, 3 conditions)
- **French Intellectual Property Code** — art. L.111-1, L.112-1, L.122-6 (software), L.341-1 (sui generis databases)
- **Directive (EU) 2019/790** (DSM) — art. 4 commercial TDM + opt-out
- **AI Act** — Regulation (EU) 2024/1689 (provider compliance clause, art. 50/53)
- **Regulation (EU) 2017/1001** — European Union trademark
- Detailed IP case law and doctrine → [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) (verified sources)

## See also
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — **IP doctrine & AI case law** (source of truth, essential complement)
- [`rgpd-ia.md`](rgpd-ia.md) — GDPR applied to AI (legal bases, individuals' rights)
- [`ai-act-conformite.md`](ai-act-conformite.md) — AI Act obligations to reflect in the clauses
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA (triggered by certain contracted processing)
- [`../consultant_ia/benchmark-solutions-ia.md`](../consultant_ia/benchmark-solutions-ia.md) — LLM-provider due diligence (TCO, clauses)
