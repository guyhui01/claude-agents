# i18n glossary — FR → EN translation reference

> **Scope:** professional US English translation of the `guyhui01/claude-agents` and `guyhui01/claude-agentic-runtime` repositories.
> **Governing rules:** see the translation charter (3 categories + 10 guardrails).
> **Principle:** translate what a human reads; never break what the machine or the LLM executes.

---

## 1. Do-Not-Translate list (category C)

These tokens are **never translated or altered**. Changing them breaks paths, sidecar references, runtime imports, or internal links.

| Type | Protected tokens |
|---|---|
| **Agent IDs** (38) | `AGENT-AI-ARCHITECT`, `AGENT-PO-SCRUM`, `AGENT-CHEF-PROJET-IA`, … *(every `AGENT-*`; these are file names)* |
| **Workflow IDs** (10) | `WF-001-cadrage-produit-ia` … `WF-010-post-mortem-projet` *(slugs are file names; keep intact)* |
| **Environment variables** | `CATALOG_ROOT`, `LIVE_RUN`, `LIVE_PROGRESS_FILE`, `LIVE_RESULT_FILE` |
| **Schema / JSON keys** | `schemaVersion`, `catalog`, `assets`, `id`, `type`, `path`, `title`, `description`, `catalogVersion`, `source`, `file`, `catalogTag`, `dependsOn`, `generatedAt`, `name`, `version` |
| **`enum` values** | `agent`, `skill`, `workflow`, `path` *(logical values, not prose)* |
| **npm scripts** | `build`, `typecheck`, `test`, `testwatch` |
| **Code / file names** | `sidecar.json`, `eval-gate`, `run-wf-00x`, `schema/`, `src/`, `workflows/`, `mcp-servers/` |
| **Proper nouns / acronyms** | `Guy HUI-BON-HOA`, `claude-agents`, `claude-agentic-runtime`, `guyhui01`, `PSPO`, `SAFe`, `ICAgile`, `RAG`, `MCP`, `A2A`, `DoD`, `EVM` |

---

## 2. Bilingual term map (terminology consistency)

One source term maps to **one** target term everywhere.

| FR | EN (canonical) |
|---|---|
| cadrage | scoping |
| lancement | launch |
| delivery | delivery |
| mission conseil | consulting engagement |
| avant-vente | pre-sales |
| proposition commerciale | commercial proposal |
| veille (stratégique) | (strategic) intelligence |
| recette | UAT (User Acceptance Testing) |
| conduite du changement | change management |
| maîtrise d'ouvrage (MOA) | business ownership / MOA (glossed) |
| partie prenante | stakeholder |
| périmètre | scope |
| livrable | deliverable |
| exigences / cahier des charges | requirements |
| référentiel | framework / standard |
| feuille de route | roadmap |
| atelier | workshop |
| cérémonies (Scrum) | Scrum events |
| conformité (IA Act, RGPD) | compliance (AI Act, GDPR) |

### Agent role titles

| FR | EN |
|---|---|
| Chef de Projet IA | AI Project Manager |
| Directeur IA / CDO | Chief AI Officer |
| Rédacteur IA | AI Content Writer |
| Formateur IA | AI Trainer |
| Veille Stratégique | Strategic Intelligence |

> Several role titles are already in English in `sidecar.json`; reuse the existing wording when present.

---

## 3. Style

- **US English**, clear technical-professional register (Anthropic / Google Cloud / AWS docs as reference).
- **Active voice**, present tense; **imperative** for instructions ("Run `npm install`").
- **Sentence case** headings.
- Standard AI terminology stays in English: `agent`, `prompt`, `RAG`, `workflow`, `eval gate`.
