# Skill — AI-Augmented BI (Copilot, Q&A, Smart Narratives)
> Certifications: PL-300 Microsoft · DP-600 Microsoft Fabric · Claude Code 101 (Anthropic 2026) · Claude Code in Action (Anthropic 2026)

## Objective
Integrate generative AI into BI workflows: Power BI Copilot, natural-language Q&A, automatic narrative generation, Claude-assisted analysis — to speed up insight production and democratize data access.

## Overview of AI capabilities in BI

```
TOOL                      CAPABILITY                            MATURITY (2026)
──────────────────────── ─────────────────────────────────────  ─────────────────────────
Power BI Copilot          Generates reports from a description    GA (Premium P1+ / Fabric)
(Microsoft Fabric)        Summarizes data in natural language     Very useful for prototyping
                          Creates DAX measures from prompts

Power BI Q&A              Natural-language questions             GA since 2019
                          "Which region has the most revenue?"   Limited to configured datasets

Smart Narratives          Generates text describing the data     GA — limited, low context
(Power BI)                automatically on visuals

Tableau Pulse             AI that explains trends                 GA (Tableau Cloud 2024)
                          and sends personalized digests

Looker Conversational     Natural-language questions             Beta (2026)
Analytics                 in the Looker interface

Claude + BI               Analysis of exported data              Very flexible, unlimited
(custom)                  Generation of DAX, LookML, SQL
                          Interpretation of results
```

## Power BI Copilot — Effective commands

```
IN POWER BI DESKTOP / SERVICE (Copilot button):

"Create a report page with the monthly net revenue trend
 and a comparison by region for the last 12 months"

"Generate a DAX measure for Year-to-Date revenue with a PY comparison"

"Summarize the main trends in this report in 3 sentences"

"Which 5 customers grew their revenue the most vs last year?"

"Create a visual showing the correlation between delivery time and NPS"
```

## Power BI Q&A — Optimal configuration

```
SYNONYMS TO CONFIGURE IN THE DATASET:
  "revenue", "sales", "turnover", "income"      → [Net Revenue]
  "customers", "buyers", "clients"              → dim_customer
  "last month", "M-1", "previous month"         → relative period

TYPICAL QUESTIONS THIS UNLOCKS:
  "What was last month's revenue by region?"
  "Top 10 products by sales this year"
  "How many new customers in June 2026?"
  "Average order value trend by quarter"

CONFIGURATION:
  Dataset → Schema → Synonyms → Add per column and per table
  Dataset → Suggested questions → Add the frequent questions
```

## Claude + BI — Prompts for analysts

```python
# Using Claude to analyze a Power BI / CSV export
import anthropic

ANALYSIS_PROMPT = """You are an expert Business Intelligence Analyst.
Analyze the following data report and provide:
1. The 3 most important insights
2. Anomalies or watch items
3. 2 actionable recommendations for leadership
4. A punchy title for the leadership meeting (an assertion, not a description)

Context: {context}

Data (CSV):
{data}
"""

client = anthropic.Anthropic()

def analyze_bi_data(csv_data: str, context: str) -> str:
    message = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=2048,
        system="You always respond in English, concisely and decision-oriented.",
        messages=[{
            "role": "user",
            "content": ANALYSIS_PROMPT.format(context=context, data=csv_data)
        }]
    )
    return message.content[0].text

# Generate DAX from a business description
def generate_dax(metric_description: str, model_context: str) -> str:
    message = client.messages.create(
        model="claude-sonnet-5",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"""Generate a Power BI DAX measure for:
{metric_description}

Data model context:
{model_context}

Provide only the DAX code with comments."""
        }]
    )
    return message.content[0].text
```

## Tableau Pulse — Insight configuration

```
IN TABLEAU CLOUD / SERVER:
  1. Create a Pulse metric from an existing workbook
  2. Define:
     □ Main metric: [Net Revenue]
     □ Comparison dimension: [Region]
     □ Period: Weekly
     □ Comparison: vs previous week + vs PY

RESULT:
  Tableau Pulse automatically generates:
  → "Revenue grew 12% this week. The EMEA region
     posted the strongest growth (+18%), driven by
     3 new customers in Germany."
  → Daily/weekly digest email personalized per user
```

## AI best practices in BI

```
DO ✅                                        DON'T ❌
────────────────────────────────────────    ─────────────────────────────────────────────
Validate every AI-generated figure          Publish an AI report without human validation
Document effective prompts                   Use AI on personal data (GDPR)
Train users to read AI output                Replace critical analysis with AI alone
Use AI for the draft, humans for             Believe an AI narrative = a validated insight
  the final validation
Cite the source in AI narratives
```

## Deliverables
- Power BI Copilot + Q&A configuration (synonyms, questions)
- Python scripts for Claude-assisted BI analysis
- BI AI user guide (effective prompts, best practices)
- Copilot usage dashboard (adoption, frequent questions)
- AI usage charter for BI (GDPR, validation, citation)

## Output format
Specify: **BI tool** (Power BI Fabric, Tableau Cloud, Looker…), **target AI capability** (Copilot, Q&A, Pulse, custom Claude…), **use case** (prototyping, user self-service, automated leadership reporting), **constraints** (GDPR, sensitive data, API budget), **the organization's BI maturity level**.
