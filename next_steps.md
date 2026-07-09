# next_steps — claude-agents

> Tracker opérationnel de reprise de session (audience : Guy + Claude Code).
> En tête : prompt de démarrage paste-ready. Détail durable : mémoire `project-topologie-catalogue-claude-agents`.

---

## ▶ Prompt de démarrage (coller tel quel)

```text
Reprise session — catalogue /Users/guyhui/CLAUDE/claude-agents (repo guyhui01/claude-agents, checkout canonique unique).
Applique le rituel de démarrage. CHECK FACTUEL D'ABORD, jamais de mémoire :
  git -C /Users/guyhui/CLAUDE/claude-agents status -sb   (attendu : main EN SYNC, working tree propre)
  git describe --tags   ·   consulter next_steps.md à la racine

TÂCHE B = compléter le sidecar.json (index machine-readable du catalogue), aujourd'hui INCOMPLET.
- CONSTAT VÉRIFIÉ (2026-07-08) : sidecar.json = { schemaVersion, catalog{name, version}, generatedAt, assets[] }.
  * assets = 14 entrées SEULEMENT, toutes de type "agent" → 14/38 agents indexés, 0/37 skills.
  * catalog.version = "v4.0.0" (PÉRIMÉ : le repo est à v4.0.1).
  * Conséquence produit : le claim « 38 agents + 37 skills indexed in a CI-validated sidecar »
    (README + ex-vitrine) était FAUX → assaini côté vitrine (showcase v0.4.1). Le régénérer ici
    rendra ce claim VRAI et permettra de restaurer la formule forte sur la vitrine.
- OBJECTIF : sidecar.json couvrant les 38 agents + 37 skills, catalog.version = "v4.0.1",
  validé par le schéma/CI. Source de vérité = les fichiers AGENT-*.md et skills/*/ réels.
- MÉTHODE (factuel d'abord) : inspecter le générateur `tools/` (ADR-0003) et `schema/` ;
  comprendre pourquoi seuls 14 agents + 0 skill sont émis (générateur partiel ? liste en dur ?
  filtre ?) ; corriger le générateur (PAS d'édition manuelle du JSON généré) ; régénérer ;
  vérifier assets = 75 (38 agents + 37 skills) et validation CI verte.
- VERSIONING : bump du catalogue selon l'ampleur (probable patch/minor — décider en session,
  cf. CLAUDE.md tableau git). Ordre release si tag : CHANGELOG → commit → tag annoté → push → gh release.
- ⛔ push/tag/release SUR ORDRE de Guy uniquement.

APRÈS ce fix : revenir sur la vitrine (/Users/guyhui/CLAUDE/guyhui-showcase) restaurer,
si voulu, la formule « indexed in a CI-validated sidecar » (désormais vraie) dans l'intro
Catalog + la carte Home, en patch. Détail : guyhui-showcase/next_steps.md.
```

---

## Contexte

- **Dette README (groupement skills) — RÉSOLUE le 2026-07-08.** `prompt_engineer/` et
  `solutions_architect/` déplacés sous Development & Engineering (commit `5c2ba3e`, poussé ;
  CHANGELOG `4f12c7c`). La vitrine `guyhui-showcase` a été réalignée puis releasée `v0.4.0`.
- **Dette sidecar (Tâche B) — OUVERTE.** Repérée le 2026-07-08 pendant un audit non-complaisant
  de la page Catalog de la vitrine : `sidecar.json` n'indexe que 14 agents (0 skill, version
  périmée `v4.0.0`). Le générateur `tools/` (ADR-0003) est à corriger pour couvrir tout le
  catalogue. Voir le prompt de reprise ci-dessus.
- **Dette README (titres WF overview) — RÉSOLUE le 2026-07-09** (commit local `7216488`,
  non poussé). WF-005 → « Strategic Intelligence & Growth » ; WF-007 → « Client Engagement
  Onboarding D1-D5 » (H1 canonique). **Le constat initial sous-estimait la dette** : elle
  n'était PAS confinée à `workflows/README.md`. `START.md` portait les deux mêmes libellés
  périmés, et le `README.md` racine une **troisième** variante pour WF-007 (« Day-1 Engagement
  Onboarding », tronquée elle aussi). Les 3 fichiers mirrorent désormais le H1 des fichiers WF.
  Entrées `CHANGELOG` datées laissées intactes (record figé). Vitrine : rien à répercuter,
  elle utilise déjà les titres corrects.

## Journal des jalons

- **2026-07-08** — (1) Dette de cohérence README **corrigée** (`5c2ba3e` : `prompt_engineer/` +
  `solutions_architect/` → Development & Engineering ; sous-comptes README alignés). (2) Nouvelle
  dette **sidecar** documentée (Tâche B) : `sidecar.json` incomplet (14/38 agents, 0/37 skills,
  `catalog.version` = `v4.0.0`) → générateur à corriger pour couvrir 38 agents + 37 skills et
  bumper la version. Non encore corrigée. (3) Nouvelle **dette README titres WF** documentée
  (Tâche C) : la table overview de `workflows/README.md` diverge des fichiers WF (WF-005
  « Watch » vs « Intelligence » ; WF-007 « Day 1 » vs « Day 1–5 »). Non encore corrigée.
- **2026-07-09** — Tâche C **corrigée** (`7216488`, docs-only, main direct, pas de tag). Périmètre
  élargi en séance : la dette touchait aussi `START.md` (2 libellés) et le `README.md` racine
  (3ᵉ variante de WF-007), pas seulement `workflows/README.md`. Reste ouvert : **Tâche B (sidecar)**,
  volontairement reportée à une session à budget frais (générateur `tools/` + schéma + CI).
