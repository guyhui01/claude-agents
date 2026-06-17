# Skill — AI Technical Documentation
> Certifications: Anthropic Claude Code in Action · Google Digital Marketing

## Objective
Produce clear, maintainable, accessible technical documentation for developers, users, and product teams.

## Types of technical documentation
| Type | Audience | Objective | Format |
|---|---|---|---|
| **README** | Developers | Installation + quick usage | Markdown |
| **API Docs** | Developers | Technical reference | OpenAPI / Swagger |
| **User Guide** | End users | Step-by-step usage | Web / PDF |
| **Architecture Doc** | Tech leads | Understand the system | C4 / diagrams |
| **Runbook** | Ops / DevOps | Operational procedures | Markdown / Wiki |
| **Release Notes** | Everyone | What's new per version | Markdown |

## Ideal README template
```markdown
# [Project name]
> [Short description — 1 line]

## ✨ Key features
- Feature 1
- Feature 2

## 🚀 Quick install
```bash
npm install package-name
```

## 📖 Usage
```python
from module import Class
# minimal working example
```

## 📋 Prerequisites
- Python 3.10+
- Node.js 18+

## 🗺️ Roadmap
- [ ] Upcoming feature

## 🤝 Contributing
[link to CONTRIBUTING.md]

## 📄 License
[Project license — e.g. MIT, Apache-2.0, PolyForm-Noncommercial-1.0.0]
```

## AI technical documentation prompt
```
"Generate the [type: README / API / user guide] documentation
for [project / component / API description].
Audience: [junior / senior developers / end users].
Include:
  - Description and objective
  - Prerequisites and installation
  - Working code examples
  - Frequent use cases
  - Common errors and solutions
Tone: [precise technical / accessible / educational].
Format: Markdown."
```

## Documentation best practices
- **Docs as Code**: version the docs with the code (same repo)
- **Examples > descriptions**: one example is worth 10 lines of explanation
- **Docs testing**: code examples must run
- **Living docs**: update on every release (CI/CD)
- **Accessibility**: clear H1/H2/H3 structure, alt text on images

## Deliverables
- Complete, structured README.md
- User guide (5-20 pages depending on complexity)
- API reference (OpenAPI 3.0)
- Changelog and release notes in standard format
- Operational runbook (deployment / incident procedures)

## Output format
Specify: doc type · project/component described · audience · level of detail · output format (Markdown, HTML, PDF) · code language used

## Anti-patterns
- ❌ **Docs out of sync with code** — documentation not versioned with the code → obsolete by the next release. Apply *Docs as Code*.
- ❌ **Descriptions without examples** — explaining without showing → the user can't get started. A runnable example is worth 10 lines of prose.
- ❌ **Untested examples** — snippets that don't compile → immediate loss of trust. Test the docs in CI.
- ❌ **Everything in one README** — mixing README, API, runbook, guide → unreadable. Separate by type and audience.
- ❌ **Undefined jargon** — acronyms and in-house terms not explained → a barrier for newcomers.

## Sources
- **OpenAPI Initiative** — *OpenAPI Specification 3.x* (Linux Foundation) — API reference
- **Simon Brown** — *The C4 Model for visualising software architecture* (c4model.com) — architecture diagrams
- **Write the Docs** — *Docs as Code* — documentation versioned with the code
- **Daniele Procida** — *Diátaxis framework* (tutorials / how-to / reference / explanation) — documentation typology
- **WCAG 2.2** — W3C (October 2023) — content accessibility (structure, alt text)

## See also
- [redaction-rapport.md](redaction-rapport.md) — structured writing outside a code context
- [ux-writing.md](ux-writing.md) — microcopy and error messages on the interface side
- [`../dev_typescript_ia/README.md`](../dev_typescript_ia/README.md) — developer skills (consumers of the docs)
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — prompt/agent documentation
