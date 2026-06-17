# Skill — AI Compliance Audit

> Certifications: AI Act Compliance Expert · CIPP/E · ISO 27001 Lead Auditor · Certified DPO
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **ISO/IEC 19011:2018** (auditing guidelines) · **ISO/IEC 42001:2023** (auditable AIMS) · **NIST AI RMF 1.0** (2023) · **AI Act EU 2024/1689** · GDPR EU 2016/679 · **OWASP Top 10 for LLM Applications (2025)**

## Objective

Carry out **compliance audits** of AI systems (AI Act, GDPR, security, ethics), following a standardized audit approach (**ISO/IEC 19011:2018**), producing a scored report and a dated remediation plan.

## Frameworks mobilized

| Framework | Contribution to the audit |
|---|---|
| **ISO/IEC 19011:2018** | Audit method: 7 principles (integrity, fair presentation, due professional care, confidentiality, independence, evidence-based approach, risk-based approach) + audit program management |
| **ISO/IEC 42001:2023** | Auditable framework for the AI management system (AIMS) — basis for a certification audit |
| **NIST AI RMF 1.0** | Risk assessment grid (GOVERN/MAP/MEASURE/MANAGE) |
| **AI Act 2024/1689** | Audited obligations (art. 5, 6+Annex III, 9-17, 50) |
| **GDPR 2016/679** | Data compliance (art. 13/14, 22, 28, 30, 35) |
| **OWASP Top 10 for LLM Applications 2025** | Generative-AI security part |

## Audit principles (ISO/IEC 19011:2018)

Every audit relies on the **7 principles**: integrity · fair presentation (report positive AND negative findings) · due professional care (diligence) · confidentiality · **independence** (auditor ≠ auditee) · **evidence-based approach** (each finding = verifiable evidence) · **risk-based approach** (prioritize AI Act high-risk systems).

## 5-phase AI audit methodology

### Phase 1: Scoping (D1-D5)
```
Deliverables: engagement letter · AI systems mapping · audit plan · documentary checklist
Documents to collect:
  → Processing register (GDPR art. 30) · existing DPIAs (art. 35)
  → Models' technical documentation (AI Act art. 11 + Annex IV)
  → Model Cards (Mitchell et al. 2019) / System Cards
  → AI governance policies · provider contracts (DPA art. 28, SaaS ToS)
  → Traceability logs (AI Act art. 12)
```

### Phase 2: Documentary review (D6-D15)
```
Controls (evidence-backed — ISO 19011 evidence-based):
  ☐ AI Act: correct risk classification (art. 6 + Annex III)
  ☐ AI Act: complete technical documentation if high-risk (art. 11)
  ☐ AI Act: transparency (art. 50) — AI content marking / chatbot info
  ☐ GDPR art. 13/14: information to individuals
  ☐ GDPR art. 22: rights over the automated decision
  ☐ GDPR art. 28: DPA signed with every processor
  ☐ GDPR art. 35: DPIA carried out if mandatory
  ☐ Ethics: Model Card with bias metrics (see gouvernance-ethique-ia)
  ☐ Security: OWASP Top 10 LLM 2025 addressed (see below)
  ☐ Governance: AI management system (ISO/IEC 42001:2023)
```

### Phase 3: Technical testing (D16-D25)
```
Test 1 — Explainability: XAI available (SHAP/LIME) on critical decisions?
Test 2 — Bias & fairness: fairness metrics by subgroup; gap < documented threshold?
Test 3 — Human oversight (AI Act art. 14): real human override on decisions?
Test 4 — Individuals' rights (GDPR): access < 1 month (art. 12.3), effective erasure, portability?
Test 5 — Transparency (AI Act art. 50): "AI-generated" marking, chatbot info?
Test 6 — GenAI security (OWASP LLM 2025): see dedicated checklist
```

### Security part — OWASP Top 10 for LLM Applications (2025)
```
LLM01 Prompt Injection            LLM06 Excessive Agency
LLM02 Sensitive Info Disclosure   LLM07 System Prompt Leakage
LLM03 Supply Chain                LLM08 Vector & Embedding Weaknesses
LLM04 Data & Model Poisoning      LLM09 Misinformation
LLM05 Improper Output Handling    LLM10 Unbounded Consumption
```
> Source: OWASP Gen AI Security Project, *OWASP Top 10 for LLM Applications 2025* (genai.owasp.org). In-depth technical audit → see AGENT-SECURITE-IA.

### Phase 4: Audit report
```
1. Executive summary (1-page for the executive committee): overall score /100 + critical findings + priority recommendations
2. Results by domain: AI Act · GDPR · Ethics · Security (score + findings + evidence)
3. Remediation plan: Finding | Risk | Action | Owner | Deadline
4. Technical appendices: tests performed, evidence, methodology (ISO 19011 traceability)
```

### Phase 5: Follow-up and re-audit
```
D+30: critical findings · D+90: major findings · D+180: improvements · D+365: re-audit
```

## AI compliance scoring
| Score | Level | Action |
|---|---|---|
| 90-100 | Compliant | Maintenance and monitoring |
| 75-89 | Compliant with reservations | 90-day improvement plan |
| 60-74 | Partially compliant | Urgent remediation plan |
| < 60 | Non-compliant | Suspension recommended + escalation |
> An **internal management** grid (auditor's convention), to be distinguished from the AI Act/GDPR legal obligations, which are not "scored" (they are met or not).

## Example — audit of a social-benefits pre-processing system (public sector)

**Anonymized context**: local authority, AI system for **pre-processing and prioritizing** social-benefit applications. **High-risk** use (AI Act Annex III §5 — access to essential social benefits). Internal audit, 4 domains, on a vulnerable population.

| Domain | Score /100 | Key findings |
|---|:--:|---|
| AI Act | 70 | Correct high-risk classification; technical documentation (art. 11 + Annex IV) incomplete |
| GDPR | 80 | DPIA carried out (art. 35); information to users (art. 13-14) to be reinforced |
| Ethics | 55 | 🔴 subgroup bias test **absent** (vulnerable population) |
| Security (OWASP LLM 2025) | 75 | LLM02 (data leak) / LLM06 (excessive agency) partially addressed |

**Overall score: 70/100 → "partially compliant"** (urgent remediation plan).
- **Critical findings**: subgroup fairness test (R1) + effective human oversight on **refusals** (AI Act art. 14, GDPR art. 22).
- **Remediation**: D+30 bias test + human override · D+90 technical documentation · re-audit D+365.

## Anti-patterns

- ❌ **Audit without a method framework**: conducting an audit without relying on ISO/IEC 19011:2018 (evidence, independence, program)
- ❌ **Checking "compliant" without evidence**: violates the evidence-based approach (false positive = risk no. 1)
- ❌ **Auditor = auditee**: the team that designed the system cannot self-audit it (independence)
- ❌ **OWASP LLM without a version**: citing "OWASP LLM Top 10" without specifying the edition (2025)
- ❌ **Confusing internal score and legal compliance**: an 85/100 score does not excuse a missing AI Act obligation
- ❌ **One-off audit without re-audit**: AI compliance degrades (model drift, regulatory change)
- ❌ **Ignoring evidence traceability**: an undocumented finding is not enforceable

## Deliverables
- Complete audit report (confidential) + executive-committee summary (1 page)
- Prioritized remediation plan (deadlines D+30/90/180/365)
- Evidence register (ISO 19011 traceability)
- Compliance certificate / attestation (if applicable, ISO 42001)
- Re-audit report (D+365)

## Output format
Specify: AI systems in scope · applicable frameworks (AI Act, GDPR, ISO 42001, OWASP LLM 2025) · audit type (internal, external, pre-certification) · timeframe · report audience.

## Sources
- **ISO/IEC 19011:2018** — *Guidelines for auditing management systems* (7 principles + audit program) — iso.org/standard/70017.html
- **ISO/IEC 42001:2023** — AI Management System (auditable) — iso.org
- **NIST AI RMF 1.0** (NIST AI 100-1, Jan. 2023) — nist.gov
- **AI Act** — Regulation (EU) 2024/1689 (art. 11 technical doc, art. 12 logs, art. 14 oversight, art. 50 transparency)
- **GDPR** — Regulation (EU) 2016/679 (art. 13/14, 22, 28, 30, 35)
- **OWASP Top 10 for LLM Applications 2025** — OWASP Gen AI Security Project — genai.owasp.org
- **Mitchell M. et al.** — *Model Cards for Model Reporting* (ACM FAT* 2019)

## See also
- [`ai-act-conformite.md`](ai-act-conformite.md) — AI Act classification and obligations (subject of the audit)
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — GDPR DPIA art. 35
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — governance and EIA (audited here)
- [`rgpd-ia.md`](rgpd-ia.md) — GDPR compliance applied to AI
- [`../critique_conformite/audit-qualite-catalogue.md`](../critique_conformite/audit-qualite-catalogue.md) — methodological quality audit (ISO 19011 applied to skills)
- [`../securite_ia/`](../securite_ia/) — AI technical security audit (in-depth OWASP LLM)
