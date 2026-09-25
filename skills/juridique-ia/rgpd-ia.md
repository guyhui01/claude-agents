# Skill — GDPR Applied to AI Systems

> Certifications: CIPP/E · CIPM · Certified DPO CNIL · ISO/IEC 27701 Lead Implementer
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **GDPR EU 2016/679** (art. 6, 9, 12, 13-14, 15-22, 30, 35) · **CNIL** AI Recommendations (2024-2025) · **AI Act EU 2024/1689** (art. 14, 50, 86) · PSD2 Directive (EU) 2015/2366

## Objective

Ensure **GDPR** compliance of AI projects: legal bases, individuals' rights, minimization, automated decision-making (art. 22), and articulation with the **AI Act**.

## Frameworks mobilized

| Topic | Framework |
|---|---|
| Legal bases | GDPR art. 6 (+ art. 9/10 sensitive/criminal data) |
| Individuals' rights | GDPR art. 12-22 (deadlines art. 12.3) |
| Automated decision-making | GDPR art. 22 + AI Act art. 14 (oversight) + art. 86 (explanation) |
| Register / DPIA | GDPR art. 30 / art. 35 |
| AI doctrine | **CNIL AI Recommendations** (Oct. 2024 + Apr. 2025) — training legal basis, legitimate interest |

## Legal bases for AI (GDPR art. 6)
| Legal basis | Conditions | Typical AI use |
|---|---|---|
| **Consent** | Free, informed, specific, revocable | Personalization, marketing profiling |
| **Contract** | Necessary for performance | In-app recommendations |
| **Legal obligation** | Imposed by EU/national law | Fraud detection (e.g. **PSD2 — Dir. (EU) 2015/2366**) |
| **Vital interest** | Survival of a person | Emergency medical AI |
| **Public-interest task** | Public authority | AI in public services |
| **Legitimate interest** | Balancing test (art. 6.1.f) | Security, B2B analytics, **training (see CNIL 2024)** |

> **CNIL AI Recommendations (2024-2025)**: legitimate interest can ground the building of training databases, under conditions (balancing test, measures for individuals' rights, transparency). To be documented.

## Data minimization in AI
```python
# Principle: collect only what is necessary for the purpose (art. 5.1.c)

# ❌ Avoid: collecting everything "just in case"
training_data = db.query("SELECT * FROM users")  # Too broad

# ✅ Strict minimization
training_data = db.query("""
    SELECT age_bucket,        -- not the exact age
           region,            -- not the address
           product_category,  -- not the product details
           churn_label        -- the target only
    FROM users WHERE consent_ml = TRUE
""")

# Pseudonymization before use (art. 4.5)
def pseudonymize(df):
    df['user_id'] = df['user_id'].apply(
        lambda x: hashlib.sha256(f"{x}:{SALT}".encode()).hexdigest())
    return df.drop(columns=['email', 'name', 'phone'])
```

## Individuals' rights — technical implementation
> Response deadline: **1 month**, extendable by **2 months** if complex (GDPR art. 12.3).
```python
# Right of access (art. 15) — response ≤ 1 month (art. 12.3)
def get_user_data(user_id: str) -> dict:
    return {"conversations": db.get_conversations(user_id),
            "profile": db.get_profile(user_id),
            "ml_predictions": model_store.get_predictions(user_id),
            "training_data": training_store.check_presence(user_id)}

# Right to erasure (art. 17)
async def delete_user_data(user_id: str):
    await db.delete_conversations(user_id); await db.delete_profile(user_id)
    await vector_db.delete_embeddings(user_id)
    await ml_pipeline.schedule_retraining(exclude_user=user_id)  # if present in the training set
    await audit_log.record(f"GDPR_DELETE:{user_id}")

# Portability (art. 20)
def export_user_data(user_id: str) -> bytes:
    return json.dumps(get_user_data(user_id), ensure_ascii=False, indent=2).encode('utf-8')

# Objection to profiling (art. 21)
def opt_out_profiling(user_id: str):
    db.set_flag(user_id, 'profiling_consent', False)
    ml_pipeline.remove_from_personalization(user_id)
```

## Profiling and automated decision-making (art. 22)
```
Art. 22: prohibition of SOLELY automated decisions producing legal or
significant effects, EXCEPT: performance of a contract, authorization
under EU law, or explicit consent.

Associated rights: human intervention · expression of one's point of view · contestation.
AI Act coupling: art. 14 (human oversight) + art. 86 (right to an explanation
of an individual decision made on the basis of a high-risk system).

Examples: credit scoring · automatic CV screening · automated assessment
(→ these uses are also AI Act "high-risk", Annex III).
```

## GDPR × AI Act: articulation
| Obligation | GDPR | AI Act |
|---|---|---|
| Transparency to the individual | Art. 13-14 | **Art. 50** (transparency) |
| Human oversight | Art. 22 | **Art. 14** |
| Documentation | Art. 30 (register) | **Art. 11 + Annex IV** (technical doc) |
| Risk assessment | **DPIA art. 35** | **Art. 9** (risk management system) |
| Explanation of a decision | Art. 22 | **Art. 86** (individual-decision explanation) |

> DPIA (GDPR) and AI Act conformity assessment are **complementary**: the former addresses the risk to individuals, the latter product compliance. See [`dpia-systemes-ia.md`](dpia-systemes-ia.md).

## Anti-patterns

- ❌ **Legitimate interest "by default"** with no documented balancing test (art. 6.1.f)
- ❌ **Collecting everything "just in case"**: violates minimization (art. 5.1.c)
- ❌ **Erasure (art. 17) that forgets the training set**: the data persists in the model/embeddings
- ❌ **100% automated decision with no human recourse** (violates art. 22 + AI Act art. 14)
- ❌ **Confusing pseudonymization and anonymization**: pseudonymized data is still personal data
- ❌ **Citing a legal basis without qualifying it** per processing (each purpose = one basis)
- ❌ **Ignoring the CNIL AI Recommendations 2024-2025** on training and legitimate interest

## Deliverables
- AI processing register (art. 30)
- Data minimization policy
- Individuals'-rights procedures (6 rights, deadlines art. 12.3)
- Legal-basis analysis per AI system (balancing test if legitimate interest)
- GDPR × AI training for the project teams

## Output format
Specify: AI processing type · data processed · envisaged legal basis · presence of profiling/automated decision-making · nationality/residence of the data subjects.

## Sources
- **GDPR** — Regulation (EU) 2016/679 (art. 5, 6, 9, 12, 13-22, 30, 35) — eur-lex.europa.eu
- **CNIL** — Recommendations on AI (October 2024 + April 2025) — cnil.fr (legal basis, legitimate interest, individuals' rights)
- **AI Act** — Regulation (EU) 2024/1689 (art. 14 oversight, art. 50 transparency, art. 86 explanation)
- **PSD2** — Directive (EU) 2015/2366 of November 25, 2015 (payment services, fraud detection)
- **ISO/IEC 27701:2019** — privacy extension of ISO 27001 (PIMS)

## See also
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA art. 35 (complementary)
- [`ai-act-conformite.md`](ai-act-conformite.md) — high-risk + transparency coupling
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — ethics EIA (beyond GDPR)
- [`contrats-ia.md`](contrats-ia.md) — DPA (art. 28) and data clauses
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — training data and rights
