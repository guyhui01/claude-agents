# Skill — AI Act: Compliance and Obligations

> Certifications: AI Act Compliance Expert (EIPA) · CIPP/E · Certified DPO CNIL
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **Regulation (EU) 2024/1689 (AI Act)** — art. 5, 6, 50, 51, 53, 55 + Annex III · **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (2023) · GDPR EU 2016/679 coupling

## Objective

Assess and bring AI systems into compliance with **Regulation (EU) 2024/1689** ("AI Act"), which entered into force on **August 1, 2024**. Classify the system across the 4 risk tiers, identify obligations by role (provider/deployer), and produce the compliance plan against the right deadlines.

## Frameworks mobilized

| Framework | Contribution |
|---|---|
| **AI Act (EU) 2024/1689** | Binding obligations: art. 5 (prohibited), art. 6 + Annex III (high-risk), art. 50 (transparency), art. 51-55 (GPAI / systemic risk) |
| **ISO/IEC 42001:2023** | Auditable AI Management System (AIMS) — evidence of governance |
| **NIST AI RMF 1.0** (2023) | Risk management framework (GOVERN/MAP/MEASURE/MANAGE) — operationalizes art. 9 (risk management) |
| **GDPR EU 2016/679** | Personal-data coupling (DPIA art. 35 ↔ AI Act high-risk) |

## AI Act application timeline (official dates)

```
Aug 1, 2024   : Regulation enters into force
Feb 2, 2025   : Ban on unacceptable-risk practices (art. 5)
                + AI literacy obligations (art. 4)
                ⚠ penalties already applicable: up to €35M or 7% of worldwide turnover
Aug 2, 2025   : GPAI obligations (art. 53-55) + governance rules
                (GPAI Code of Practice published July 10, 2025)
Aug 2, 2026   : General application — HIGH-RISK systems (art. 6 + Annex III)
Aug 2, 2027   : High-risk systems embedded in regulated products (Annex I)
```

## AI risk classification

### 1. Unacceptable Risk — PROHIBITED (art. 5)
```
→ Social scoring by public authorities
→ Subliminal manipulation exploiting vulnerabilities
→ Real-time remote biometric identification in public spaces (save limited exceptions)
→ Predictive policing based on profiling alone
→ Emotion recognition in the workplace / in education
→ Untargeted scraping of facial images for recognition databases
```
> Penalty: up to **€35M or 7% of worldwide turnover** (art. 99), applicable since Feb 2, 2025.

### 2. High Risk — STRICT OBLIGATIONS (art. 6 + Annex III)
```
Annex III domains:
  ✦ Recruitment and HR management
  ✦ Credit and insurance (scoring, eligibility)
  ✦ Education (assessment, admission)
  ✦ Essential public services (water, energy, social benefits)
  ✦ Law enforcement, migration, justice
  ✦ Biometrics · critical infrastructure
  (+ Annex I: medical devices and regulated products)

Provider obligations (art. 8-17):
  1. Risk management system (art. 9 — see NIST AI RMF)
  2. Training-data governance, quality, bias (art. 10)
  3. Technical documentation (art. 11 + Annex IV)
  4. Logging / traceability (art. 12 — appropriate retention)
  5. Transparency and information to the deployer (art. 13)
  6. Human oversight (art. 14)
  7. Accuracy, robustness, cybersecurity (art. 15)
  8. EU database registration (art. 49) + declaration of conformity (art. 47) + CE marking
```

### 3. Limited Risk — TRANSPARENCY (art. 50)
```
→ Chatbots: inform the user they are interacting with an AI
→ Generative content / deepfakes: "AI-generated or manipulated" marking (machine-readable)
→ Emotion recognition / biometric categorization: inform the individuals
```

### 4. Minimal Risk — VOLUNTARY
```
→ Spam filters · video-game AI · non-critical recommendations
→ Voluntary codes of conduct encouraged (art. 95)
```

## General-purpose models (GPAI) — art. 51 to 55

```
Standard GPAI (art. 53):
  → Technical documentation + training-data summary (AI Office template)
  → EU copyright compliance policy (opt-out art. 4 Directive 2019/790)

GPAI with SYSTEMIC RISK (art. 51):
  → Automatic presumption if training > 10^25 FLOP (official term: "systemic risk")
  → Reinforced obligations (art. 55): adversarial evaluations (red-teaming),
    systemic-risk mitigation, incident reporting to the AI Office, cybersecurity
```

## AI Act assessment grid

```
1. Is it an "AI system" within the meaning of art. 3(1)?
   → "machine-based system... operating with varying levels of autonomy,
      that may exhibit adaptiveness... infers from input how to generate outputs"

2. Is it PROHIBITED? → check art. 5 (unacceptable risk)

3. Is it HIGH-RISK? → check art. 6 + Annex III (+ Annex I products)

4. Is it a GPAI model? → art. 53; systemic risk if > 10^25 FLOP (art. 51)

5. What is my role?
   → Provider: maximum obligations
   → Deployer: information, human oversight, compliant use
   → Importer / distributor: conformity verification
```

## Mandatory documentation (high-risk)
- AI risk management system (art. 9 — frameworks **ISO/IEC 42001:2023** + **NIST AI RMF**)
- Technical documentation (art. 11 + Annex IV)
- EU declaration of conformity (art. 47) + CE marking
- EU database registration (art. 49)
- Human-oversight procedure (art. 14) + testing/validation plan (art. 15)

## Example — classifying a credit-scoring system
```
System: credit-granting scoring model (retail banking)
→ Art. 6 + Annex III (point 5b "creditworthiness") = HIGH-RISK
→ Bank's role: deployer (if third-party model) OR provider (if developed in-house)
→ Obligations: risk management (art. 9), data governance + bias testing (art. 10),
   human oversight on refusals (art. 14), information to the individual (art. 13 + GDPR art. 22)
→ Deadline: compliance by August 2, 2026
→ GDPR coupling: DPIA art. 35 mandatory
```

## Anti-patterns

- ❌ **Confusing "Annex I" and "art. 5"**: prohibited practices are in **art. 5**, not in an annex
- ❌ **"AI Act = annex checklist"**: it is a binding regulation with penalties (€35M / 7%)
- ❌ **Forgetting the deployer role**: believing only "provider" obligations matter
- ❌ **"Not concerned because GPAI"**: a GPAI > 10²⁵ FLOP triggers the systemic-risk regime (art. 51)
- ❌ **Confusing transparency (art. 50) and high-risk (art. 6)**: a chatbot can be "limited" without being "high-risk"
- ❌ **Handling the AI Act without GDPR**: a high-risk HR/credit system also triggers a DPIA (art. 35)
- ❌ **Citing unsourced dates or thresholds**: always rely on the official text / the AI Office

## Deliverables
- AI Act compliance audit (classification + prioritized plan)
- System classification sheet (risk tier + applicable articles)
- Dated compliance plan (2025/2026/2027 deadlines)
- Required technical documentation (Annex IV)
- "AI Act" training (art. 4 AI literacy)

## Output format
Specify: AI system description · industry of use · role (provider/deployer/importer) · data processed · current level of human oversight · targeted compliance deadline.

## Sources
- **Regulation (EU) 2024/1689 (AI Act)** — OJ L of July 12, 2024 — eur-lex.europa.eu (art. 5 prohibited, art. 6 + Annex III high-risk, art. 9-17 obligations, art. 50 transparency, art. 51-55 GPAI/systemic risk, art. 99 penalties)
- **Application timeline**: entry into force Aug 1, 2024 · prohibited + AI literacy Feb 2, 2025 · GPAI + governance Aug 2, 2025 · high-risk Aug 2, 2026 · Annex I products Aug 2, 2027 — digital-strategy.ec.europa.eu
- **GPAI Code of Practice** — European Commission, published July 10, 2025
- **ISO/IEC 42001:2023** (AI Management System) — iso.org
- **NIST AI RMF 1.0** (NIST AI 100-1, Jan. 2023) — nist.gov

## See also
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — audit the operational application of the AI Act
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — GDPR DPIA art. 35 (high-risk coupling)
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — AI committee, EIA, governance (NIST GOVERN)
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — art. 53 GPAI + TDM opt-out (Directive 2019/790)
- [`politique-ia-entreprise.md`](politique-ia-entreprise.md) — AI policy and permitted/prohibited use cases
