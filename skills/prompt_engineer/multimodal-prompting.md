# Skill — Multimodal Prompts (Vision, Image, Audio)
> Certifications: Anthropic Claude Code in Action (2026), Google Cloud Professional ML Engineer (Google)

## Objective
Design effective prompts for the multimodal capabilities of LLMs — image analysis, document vision, screenshot interpretation — to leverage non-textual inputs in agentic workflows.

## Vision prompt — Standard image analysis

```
Analyze the provided image and produce:
1. [WHAT WE WANT TO EXTRACT — e.g. list of UI elements]
2. [SECOND ELEMENT — e.g. accessibility issues]
3. [THIRD — e.g. improvement recommendations]

Output format: [YAML / Markdown table / Bullet points]
```

## Use cases by domain

### UX / Mockups
```
You are a UX expert. Analyze this mockup / wireframe and produce:
1. Inventory of UI components (list)
2. Identified WCAG accessibility issues
3. UX improvement suggestions (max 3, actionable)

Format: Markdown table with columns [Element | Observation | Priority]
```

### Documents / Tables
```
You are a data extraction expert.
Extract all the information from this document / table in JSON format.
Exact expected structure:
{
  "title": "...",
  "columns": ["col1", "col2"],
  "rows": [{"col1": "...", "col2": "..."}],
  "totals": {}
}
Do not interpret — extract exactly what is visible.
```

### Screenshots (debugging / code review)
```
Analyze this error / interface screenshot and:
1. Identify the visible problem
2. Suggest the probable cause
3. Suggest 2 concrete solutions

Context: [TECH STACK / PROJECT CONTEXT]
```

### Architecture diagrams
```
Analyze this architecture diagram and describe:
1. The main components and their roles
2. The data flows (inbound / outbound)
3. The potential points of failure (SPOF)
4. The recommended improvements

Format: Section by section, precise technical vocabulary.
```

## Best practices

```
IMAGE QUALITY
────────────────────────────────────────────────────────────
✓ Sufficient resolution (legible)
✓ Format: JPEG, PNG, WebP, GIF
✓ Max size: 5 MB per image (Claude)
✓ Multiple images: up to 20 per message

INSTRUCTIONS
────────────────────────────────────────────────────────────
✓ Specify what you are looking for BEFORE providing the image
✓ Indicate the context (document type, sector)
✓ Request a structured output format
✓ If there is text in the image: specify the language

LIMITS TO KNOW
────────────────────────────────────────────────────────────
⚠ Handwritten text hard to read
⚠ Very low resolution → interpretation errors
⚠ Confidential data (HR, financial) → anonymize
```

## API template — Image in base64

```typescript
import fs from "fs";

const imageBuffer = fs.readFileSync("./screenshot.png");
const base64Image = imageBuffer.toString("base64");

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 2048,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/png",
            data: base64Image,
          },
        },
        {
          type: "text",
          text: "Analyze this wireframe and list the UI components present.",
        },
      ],
    },
  ],
});
```

## Deliverables
- Vision prompt templates by use case (UX, documents, code, architecture)
- Guide to limits and best practices
- TypeScript base64 API implementation

## Output format
Specify: image type (mockup / document / screenshot / diagram), analysis goal, expected output format.

## Anti-patterns
- ❌ **Low-resolution image / handwritten text**: unreliable reading → sufficient resolution, OCR if needed
- ❌ **Confidential data** sent as an image without control: GDPR risk → mask/anonymize
- ❌ **Exceeding the limits** (> 5 MB/image, > 20 images/message): API errors → respect the limits
- ❌ **Asking to invent what is not visible**: hallucination → instruct "describe only what is visible"
- ❌ **Unreviewed AI alt-text** on critical content: degraded accessibility → human review (WCAG 2.2)

## Sources
- **Anthropic — Vision** (docs.anthropic.com/vision): formats (JPEG/PNG/WebP/GIF), limits (≤ 5 MB, ≤ 20 images), best practices
- **WCAG 2.2** — W3C (2023) — text alternatives (generated alt-text)

## See also
- [`system-prompt-design.md`](system-prompt-design.md) — framing the vision prompt
- [`chain-of-thought.md`](chain-of-thought.md) — reasoning over a complex image (diagram)
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — alt-text and WCAG
- [`../dam_expert/dam-augmente-ia.md`](../dam_expert/dam-augmente-ia.md) — vision auto-tagging/alt-text in DAM
