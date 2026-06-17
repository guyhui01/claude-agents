# Briefs — Workflow launch inputs

> This folder holds the client briefs written by Guy to launch the workflows in live mode.
> A brief = the input of a workflow, with no documented output.

---

## Pipeline

```
briefs/ → [run workflow] → outputs/ → [curation] → use_cases/
```

## Governance

| Folder | Content | Editable |
|---------|---------|------------|
| `briefs/` | Pure input — ready to launch | ❌ Never after commit |
| `outputs/` | Raw run result | ✅ Enrichment possible |
| `use_cases/` | Showcase-quality curated outputs | ✅ Curation |

**Rule**: a brief is immutable after commit. If a correction is needed → new versioned file (`-v2.md`).

---

## Naming convention

```
WF-{ID}-brief-{sector}-{context}.md
```

Examples:
- `WF-002-brief-assurance-pi01.md`
- `WF-003-brief-fintech-lancement-app.md`
- `WF-006-brief-retail-avant-vente.md`

---

## Structure of a brief

```
# Brief — WF-{ID} — {Context title}

## Launch command
[Complete command to paste into Claude Code]

## Client context
[Filled-in parameters]

## Test objective
[What we want to validate or explore]

## Status
- [ ] Brief written
- [ ] Workflow executed
- [ ] Output evaluated
- [ ] Promoted to a use case? [yes/no]
```
