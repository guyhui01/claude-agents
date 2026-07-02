## Type of change

- [ ] New agent / skill / workflow
- [ ] Change to an existing agent / skill / workflow
- [ ] Refactoring / structural reorganization
- [ ] Documentation (README, CHANGELOG, CLAUDE.md)
- [ ] Minor fix (typo, broken link)
- [ ] Audit + recommendations

## Description

<!-- What and why. Reference the audit or the request behind this change. -->

## Pre-merge checklist

- [ ] Counters consistent (README, START.md, AGENT-ORCHESTRATEUR-WORKFLOW.md)
- [ ] No orphan references (grep the old skills/* paths)
- [ ] AGENT files updated if skills were added/moved/removed
- [ ] CHANGELOG.md updated with a dated entry
- [ ] Local backup created if major refactor (`backup/claudecode_backup_<date>.zip`)
- [ ] Git tag created if milestone (Major / Minor — see CLAUDE.md)
- [ ] GitHub Release published if Major

## Tests

- [ ] `git status` clean after the changes
- [ ] No `.tmp`, `.bak`, or personal file committed
- [ ] All renames detected at 100% by git (history preserved)

## CHANGELOG link

<!-- E.g.: see [v2.0.0](CHANGELOG.md#200--2026-05-22) -->
