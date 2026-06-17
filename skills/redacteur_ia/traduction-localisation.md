# Skill — AI Translation & Localization
> Certifications: Google Digital Marketing · HubSpot Content Marketing

## Objective
Adapt content to new markets and languages while preserving meaning, tone, and cultural impact, using AI as an accelerator.

## Translation vs. localization
| Translation | Localization |
|---|---|
| Word-for-word conversion | Full cultural adaptation |
| Meaning preserved | Tone, humor, references adapted |
| Fast | Requires cultural expertise |
| E.g., technical manual | E.g., marketing campaign |

## AI localization process

### Step 1: Preparation
- Source content audit (terminology consistency)
- Glossary creation (non-translatable domain terms)
- Tone definition by market

### Step 2: AI translation (machine translation)
- DeepL Pro / Google Translate API / Claude for the first draft
- BLEU metric *(Papineni et al., ACL 2002)* as an indicator of closeness to the reference text before human review (threshold to calibrate by language pair and content type — BLEU measures neither fluency nor cultural fit)

### Step 3: Human post-editing
- Revising tone and cultural nuances
- Adapting examples, numbers, formats (dates, currencies)
- Terminology validation (glossary)

### Step 4: Quality control
- Native-speaker proofreading
- User testing on the target market for critical content

## AI translation / localization prompt
```
"Translate the following text into [target language] for a [B2B/B2C, country, industry] audience.
Source text: [text]

Instructions:
- Preserve the [professional / conversational / expert] tone
- Adapt idiomatic expressions (do not translate literally)
- Keep technical terms in [language / English]: [list]
- Output format: [Markdown / plain text]
- Flag culturally sensitive passages to review"
```

## Priority languages and markets 2026
| Language | Market | Specifics |
|---|---|---|
| English (EN-GB / EN-US) | UK, USA, International | Spelling variants |
| Spanish (ES-ES / ES-LATAM) | Spain, Latin America | Different vocabulary |
| German | DACH | Formal tone, precision |
| Arabic | MENA | Right-to-left, visual adaptation |
| Japanese | Japan | Complex politeness levels |

## Formats and tools
| Tool | Use | Advantage |
|---|---|---|
| DeepL Pro | Fast translation | Best AI quality |
| Claude / GPT-4o | Localization + adaptation | Cultural nuance |
| Phrase / Lokalise | TMS (translation management) | Team workflow |
| Crowdin | Open source projects | Community |

## Deliverables
- Content localized into [N] languages
- Bilingual terminology glossary
- Style guide by market
- Quality report (BLEU score + review)

## Output format
Specify: source language · target language · market / country · content type · tone · terms not to translate · existing glossary

## Anti-patterns
- ❌ **Literal translation of idioms** — rendering a figurative expression word-for-word → misreading or absurdity. Localize, don't translate.
- ❌ **Relying on BLEU alone** — validating on an automatic score with no native review → fluency and cultural errors invisible to the metric.
- ❌ **No glossary** — letting AI translate domain terms ad hoc → terminology inconsistency across content.
- ❌ **Unadapted formats** — keeping the source's dates, currencies, units, reading direction → local non-compliance (e.g., RTL for Arabic).
- ❌ **Zero native review** — publishing raw machine output as-is on critical content → brand risk.

## Sources
- **Papineni, Roukos, Ward & Zhu (IBM)** — *BLEU: a Method for Automatic Evaluation of Machine Translation* (ACL 2002) — BLEU metric
- **ISO 17100:2015** — *Translation services* — quality requirements and post-editing
- **ISO 18587:2017** — *Post-editing of machine translation output* — post-editing levels
- **DeepL / Lokalise / Phrase** — official documentation of TMS and translation engines

## See also
- [content-strategy.md](content-strategy.md) — multi-market rollout of the content strategy
- [copywriting-ia.md](copywriting-ia.md) — transcreation of marketing copy
- [seo-content.md](seo-content.md) — multilingual and international SEO
- [`../prompt_engineer/multimodal-prompting.md`](../prompt_engineer/multimodal-prompting.md) — prompting for AI translation
