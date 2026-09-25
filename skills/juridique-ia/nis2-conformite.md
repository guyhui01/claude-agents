# Skill — NIS2 Directive & Cybersecurity of AI Systems
> Certifications: CISSP · CISM · AI Act Compliance Expert · ISO 27001 Lead Implementer

## Objective
Bring organizations into compliance with the NIS2 Directive (Network and Information Security), in force since October 2024, for critical AI systems.

## NIS2 — Context and scope

### Organizations concerned (France 2026)
```
Essential Entities (EE) — critical sectors:
  → Energy (electricity, gas, oil, hydrogen)
  → Transport (air, rail, maritime, road)
  → Banking and financial infrastructure
  → Health and pharmaceuticals
  → Water (distribution, treatment)
  → Digital infrastructure (cloud, data centers, DNS)
  → Public administration
  → Space

Important Entities (EI) — important sectors:
  → Postal services
  → Waste management
  → Critical manufacturing
  → Food
  → Chemicals
  → Research
  → Digital service providers (marketplaces, search engines)

Threshold: > 250 employees OR > €50M turnover (EE) | > 50 employees (EI)
```

### AI and NIS2 — intersection zones
```
AI systems concerned by NIS2:
  → LLMs hosted in critical data centers
  → Anomaly-detection AI for OT/SCADA
  → Automated trading algorithms (finance)
  → Medical AI (diagnosis, dosing, monitoring)
  → AI for power-grid / transport management
  → AI supply chain (third-party vendors)
```

## NIS2 obligations applicable to AI systems

### Governance (Art. 20)
```
Obligations:
  ✓ The management body approves the security measures
  ✓ Mandatory cybersecurity training for executives
  ✓ Personal liability of executives (penalties)

For AI systems:
  → AI security policy approved by the executive committee
  → CDO / CIO training on NIS2 × AI risks
  → Appointed head of AI systems security
```

### Risk management measures (Art. 21)
```
10 measure domains (transposed to AI systems):

1. AI risk analysis policies
   → Threat modeling of AI systems
   → Evaluation of AI vendors (SaaS, open source)

2. AI incident management
   → Incident detection (active AI SOC)
   → AI incident response procedures

3. Business continuity
   → BCP/DRP for critical AI systems
   → Backup management for models and data

4. Supply-chain security
   → Audit of AI vendors (OpenAI, AWS Bedrock, Azure AI)
   → SBOM (Software Bill of Materials) for models

5. Systems security (acquisition, development, maintenance)
   → DevSecOps integrated into the AI pipeline
   → Pre-deployment security testing

6. Effectiveness assessment of the measures
   → Annual NIS2 × AI audits
   → Security metrics (DORA, MTTR)

7. AI cybersecurity training
   → Mandatory program for data/AI teams

8. Cryptography and encryption
   → Encryption of models, data, and communications

9. Access management (IAM)
   → Zero Trust Architecture for AI systems

10. Multi-factor authentication
    → Mandatory MFA for access to production models
```

### Incident notification (Art. 23)
```
Notification deadlines to ANSSI (France):

  Early warning: 24 hours after becoming aware
    → Is the incident significant?
    → Suspicion of a malicious act?

  Notification: 72 hours
    → Initial assessment (severity, impact, indicators)

  Interim report: at ANSSI's request

  Final report: 1 month after the initial notification
    → Detailed description
    → Threat type / root cause
    → Corrective measures

  Significant incident for AI systems:
    → Service disruption > threshold (by sector)
    → Compromise of a production model
    → Data exfiltration via the AI system
    → Manipulation of the AI system affecting a critical service
```

## NIS2 penalties
```
Essential Entities: up to €10M or 2% of worldwide turnover
Important Entities: up to €7M or 1.4% of worldwide turnover
Personal liability of executives in case of serious breach
```

## Deliverables
- Mapping of AI systems within the NIS2 scope
- NIS2 × AI gap analysis report
- Prioritized compliance plan
- Incident notification procedures (ANSSI)
- NIS2 × AI training program

## Output format
Specify: sector (EE or EI) · AI systems concerned · current security maturity · past incidents · compliance deadline · ANSSI point of contact
