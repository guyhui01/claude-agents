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

TÂCHE B = élargir le sidecar.json (index machine-readable) aux 38 agents + 37 skills.
DIAGNOSTIC FAIT le 2026-07-09 (read-only). Ne pas le refaire — le VÉRIFIER, puis exécuter.

- CAUSE RACINE (ce n'est PAS un bug) : `tools/generate-sidecar.mjs` ne scanne jamais le
  filesystem. Il part de `WORKFLOW_BACKBONES` (l.40-58), liste EN DUR des backbones runtime
  WF-001/002/003 ; `CATALOG_AGENT_IDS` (l.64) en prend l'union dédupliquée = 14 agents
  (AGENT-QA-AGILE partagé WF-001/003). Périmètre assumé et documenté en tête (l.10-12).
  ⟹ Le sidecar est COMPLET pour son périmètre déclaré. Le claim README « 38 agents + 37 skills
  indexed » était faux par SUR-PROMESSE, pas par régression.

- `catalog.version` = "v4.0.0" n'est PAS un sidecar périmé : `catalogTag()` (l.67-70) lit
  `package.json.version`, qui vaut **4.0.0** alors que le repo est tagué **v4.0.1**.
  ⟹ Le bump v4.0.1 a OUBLIÉ package.json. Dette distincte, à corriger d'abord.
  ⟹ La CI est donc VERTE aujourd'hui : `npm run validate:sidecar` sort 0
  (« ✓ 14 asset(s), catalog v4.0.0 ») car sidecar et package.json sont cohérents entre eux.
  Ne pas s'attendre à une CI rouge : rien ne la déclenche.

- SCHÉMA : AUCUN changement requis. `schema/sidecar.schema.json` `$defs.asset` a déjà
  `type` enum = ["agent","skill","workflow"]. `required` = les 7 champs ; **`dependsOn` est
  OPTIONNEL** — le commentaire du générateur (l.15-17) qui le dit « required by the schema for
  type agent » est FAUX : dette de commentaire à corriger dans le même lot.

- FAISABILITÉ AGENTS (mécanique) : 38/38 `AGENT-*.md` parsent avec `parseAgentCard` (H1 +
  blockquote `> **Domain:**`) — vérifié. Remplacer `CATALOG_AGENT_IDS` par un scan de `AGENT-*.md`.

- FAISABILITÉ SKILLS (1 seul point de CONCEPTION) : 37/37 `skills/*/README.md` existent et ont
  un H1 (`# Skills — <Nom>`). MAIS leur blockquote est `> Folder attached to AGENT-X.md`, pas
  `> **Domain:** …` ⟹ `parseAgentCard` NE CONVIENT PAS. Écrire `parseSkillCard` et **trancher
  d'où vient `description`** (le H1 ne suffit pas). Candidats : la colonne « Contents » de la
  table `README.md` racine (déjà rédigée, 37 lignes) ou la 1ʳᵉ phrase de la section objectif.
  ⟹ C'est LA décision de la session, tout le reste est mécanique.
  * `path` d'un skill = `skills/<nom>/README.md` (un fichier, pas le dossier : l'integrity check
    `existsSync` accepterait le dossier, mais un fichier est le contrat honnête).

- BONUS À SAISIR : la blockquote `> Folder attached to AGENT-X.md` donne le mapping agent↔skill
  ⟹ peupler `dependsOn` (aujourd'hui `[]` partout, l.16-17, pour éviter DANGLING_REFERENCE).
  Piège : `qa_testing/` est partagé par AGENT-QA-AGILE **et** AGENT-QA-VMODEL (2 agents → 1 skill).

- CONTRAINTE RUNTIME (l.38-39) : les `id` DOIVENT matcher les `assetId` des spines pour que
  `loadSpine` résolve. Ajouter des assets n'invalide pas les 14 existants ; ⛔ ne RIEN renommer.

- ORDRE D'EXÉCUTION : (1) bump `package.json` (aujourd'hui 4.0.0) ; (2) scan agents ;
  (3) `parseSkillCard` + décision `description` ; (4) `dependsOn` ; (5) `npm run generate:sidecar` ;
  (6) vérifier assets = **75** et `npm run validate:sidecar` vert ; (7) corriger le commentaire
  l.15-17 ; (8) i18n des messages FR de `check-workflow-agent-counts.mjs` + `check-schema-drift.mjs`
  (reliquat connu, MÊME lot : ces fichiers sont dans `tools/`). PAS d'édition manuelle du JSON généré.
- VERSIONING : nouveau contenu indexé, non-breaking ⟹ **minor v4.1.0** (le bump corrige du même
  coup la dette package.json). À confirmer en séance, cf. CLAUDE.md tableau git.
  Ordre release si tag : CHANGELOG → bump → commit → tag annoté → push → gh release.
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
- **Dette sidecar (Tâche B) — OUVERTE, mais DIAGNOSTIQUÉE le 2026-07-09** (read-only, rien
  modifié dans `tools/`). Le périmètre 14 agents est un **choix assumé** du générateur (liste
  en dur des backbones WF-001/002/003), pas une régression : le claim README était une
  sur-promesse. Deux surprises : (a) `catalog.version` périmée vient de `package.json` resté à
  **4.0.0** malgré le tag `v4.0.1` — donc **la CI est verte**, rien ne la déclenche ; (b) le
  **schéma n'est pas à toucher** (`type` enum contient déjà `skill`). Reste une seule décision
  de conception : la source de `description` pour les skills. Tout le détail exécutable est
  dans le prompt de reprise ci-dessus.
- **Dette `package.json` v4.0.0 vs tag v4.0.1 — OUVERTE.** Découverte le 2026-07-09 pendant le
  diagnostic B. À corriger dans le lot B (le bump minor l'absorbe).
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
  (3ᵉ variante de WF-007), pas seulement `workflows/README.md`. Puis **diagnostic read-only de la
  Tâche B** en fin de budget : cause racine établie (liste en dur `WORKFLOW_BACKBONES`), schéma
  hors périmètre, `package.json` non bumpé démasqué, CI verte expliquée, unique décision de
  conception isolée (`description` des skills). Aucun fichier de `tools/` touché. Tâche B reste
  ouverte mais son périmètre est désormais CONNU — exécution à budget frais.
