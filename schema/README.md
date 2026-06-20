# schema/ — sidecar contract (vendored mirror)

`sidecar.schema.json` is a **pinned copy** (schemaVersion `1.0.0`) of the reference
schema whose **single source of truth (SSOT) is the runtime**:
`claude-agentic-runtime/schema/sidecar.schema.json`.

## Why a copy?

- **ADR-0003**: the sidecar generator and its **CI validation belong to the
  catalog**; the runtime only **reads** the sidecar. To validate in the catalog's CI
  without depending on a runtime checkout, the contract is vendored here.
- **Invariant**: this file must **never** be modified independently of the runtime.
  It is the contract, not a variant. Any change starts in the runtime, then is
  propagated here.

## Drift guard

`npm run check:schema-drift` compares this copy to the runtime schema (resolved as
the sibling `../claude-agentic-runtime/` or via `RUNTIME_SCHEMA_PATH`). If the two
diverge, the command fails. If the runtime is not found (repos not side by side,
e.g. CI isolated from the catalog), the check is **cleanly skipped** (exit 0) and
reported — the sidecar's own validation, however, stays always active.
