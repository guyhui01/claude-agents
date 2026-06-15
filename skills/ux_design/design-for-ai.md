# Skill — Design for AI (LLM, Chat UI, Voice UI)
> Certifications: NN/g UX-C (AI UX) · IDF

## Objective
Design interfaces for products that integrate generative AI, LLMs and voice assistants.

## Chat UI patterns
- Input area with a contextual placeholder
- Message bubbles: user (right) / AI (left)
- Response streaming (token-by-token display)
- Quick actions (suggestions, reply buttons)
- User feedback (thumbs up/down, regenerate, copy)
- Thinking / loading indicator

## LLM Interface patterns
- Prompt templates and starter examples
- History management (threads, sessions)
- Citations and sources (groundedness)
- Tone selector (formal, casual, concise)
- Limits and refusals: clear, non-blaming error message

## Voice UI specifics
- Visual feedback of the voice state (idle, listening, processing, speaking)
- Real-time transcription
- Fallback commands if recognition fails

## AI ethics principles
- Transparency: the user knows they are talking to an AI
- User control: undo, edit, ignore
- Error handling: hallucinations, competence limits

## Deliverables
- Annotated flows (idle state → input → streaming → response)
- AI-specific component library (Figma)
- Guide to tones and error messages

## Output format
Specify: AI type (chat, assistant, copilot, voice) · product context · target LLM model

## Sources
- **Saleema Amershi et al. (Microsoft)** — *Guidelines for Human-AI Interaction* (CHI 2019) — 18 HAX rules
- **Google PAIR** — *People + AI Guidebook* (2019, updated) — AI design patterns
- **Apple** — *Human Interface Guidelines: Machine Learning / Generative AI* — native patterns
- **Nielsen Norman Group** — *AI UX* articles (generative, chatbots) 2023+
- **Anthropic** — interaction best practices (transparency, control, citations/groundedness)

## Anti-patterns
- Over-anthropomorphism: implying the AI has consciousness / emotions
- Hiding that the user is interacting with an AI (lack of transparency)
- No "escape hatch" to a human or a manual action
- Presenting responses without citation or uncertainty indication (unflagged hallucination risk)
- Blaming or opaque refusal message instead of an actionable explanation

## See also
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — shape the behavior of the underlying model
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — tones, error messages and AI microcopy
- [accessibilite-wcag.md](accessibilite-wcag.md) — accessibility of conversational/voice interfaces
- [metriques-ux.md](metriques-ux.md) — measure satisfaction and acceptance of AI responses
