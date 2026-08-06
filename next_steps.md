# next_steps — claude-agents

> Tracker opérationnel de reprise de session (audience : Guy + Claude Code).
> En tête : prompt de démarrage paste-ready. Détail durable : mémoire `project-topologie-catalogue-claude-agents`.

---

## ▶ Prompt de démarrage (coller tel quel)

```text
Reprise session — catalogue /Users/guyhui/CLAUDE/claude-agents (repo guyhui01/claude-agents, checkout canonique unique).
Applique le rituel de démarrage. CHECK FACTUEL D'ABORD, jamais de mémoire :
  git -C /Users/guyhui/CLAUDE/claude-agents status -sb   ·   git describe --tags
  npm run validate:sidecar   (attendu : ✓ 85 asset(s), catalog v4.2.0)

SIDECAR COMPLET = les 10 WORKFLOWS SONT INDEXÉS, RELEASÉ v4.2.0 le 2026-07-18 (tag annoté +
GitHub Release publiée, ni draft ni prerelease, distant vérifié après coup). 85 assets
(38 agents + 37 skills + 10 workflows), package.json à 4.2.0, `[Unreleased]` du CHANGELOG VIDE.
Décisions tranchées : description ⟵ 1ʳᵉ ligne de blockquote du fichier WF (le README n'a pas
de colonne prose) ; dependsOn ⟵ agents_core UNIQUEMENT (arêtes dures ; agents_optionnels exclus
car conditionnels) ; schéma INTACT (branche workflow déjà prévue). 4 gardes workflow exercées
pour de vrai (exit 1 + message vérifiés) : blockquote absent · agent inconnu · agents_core vide ·
clé agents_core absente. Claim README reformulé (85 assets).

ÉTAT — 3 gates vertes : validate:sidecar (85) · validate:wf-agents · check:schema-drift.

PROCHAINE UNITÉ :
  VITRINE — /Users/guyhui/CLAUDE/guyhui-showcase : la formule « indexed in a CI-validated
  sidecar » est désormais VRAIE pour la totalité du catalogue (85 assets, workflows compris,
  catalogue v4.2.0). Patch intro Catalog + carte Home. Détail : guyhui-showcase/next_steps.md.
  (Repo distinct ⟹ session distincte.)

  SÉCURITÉ — 3 alertes Dependabot HIGH ouvertes sur `fast-uri`, à traiter ICI dans une
  session dédiée. Détail + critère de clôture : section « ⚠ Sécurité » plus bas.
```

---

## ⚠ Sécurité — 3 alertes Dependabot ouvertes (consigné le 2026-08-06)

> **Dependabot était DÉSACTIVÉ sur ce repo jusqu'au 2026-08-06** — donc l'absence
> d'alerte n'avait jamais rien prouvé. Activé ce jour-là sur ordre de Guy ; l'analyse
> initiale a immédiatement remonté 3 alertes. ⚠️ Ne pas lire un « 0 alerte » historique
> comme un contrôle passé.

- **Fait mesuré** : 3 alertes **HIGH** sur **`fast-uri`**, toutes en `package-lock.json`,
  **`scope=development`** — `GHSA-7p8r-x3mc-p8w7` (< 3.1.5), `GHSA-v2hh-gcrm-f6hx` (≤ 3.1.3),
  `GHSA-4c8g-83qw-93j6` (< 3.1.3). **Le seuil qui les couvre toutes est `3.1.5`.**
- **Non diagnostiqué, à faire en ouverture** : `fast-uri` est **transitive** — remonter le
  parent (`npm ls fast-uri`) avant toute action. ⛔ Ne pas présumer la voie : sur le runtime
  le 2026-08-06, le parent épinglait une plage qu'aucune mise à jour interne ne pouvait
  franchir, et la voie propre a été un `overrides` **respectant la plage déclarée du parent**,
  pas un `audit fix --force`.
- **Critère de clôture** : `npm audit` = **0 vulnérabilité** · `npm run validate:sidecar` vert
  (attendu 85 assets) · les 3 gates du repo vertes (`validate:sidecar`, `validate:wf-agents`,
  `check:schema-drift`) · alertes passées à `fixed` **vérifiées sur le distant après push**,
  jamais déduites du lock local.
- **Portée honnête** : `scope=development` ⟹ ces paquets ne sont pas embarqués dans un
  artefact publié ; ils servent au build et aux contrôles. C'est une raison de **ne pas
  paniquer**, pas une raison de ne pas corriger.

---

## Contexte

- **Tâche B (sidecar) — CLOSE et RELEASÉE en `v4.1.0`** (tag annoté + GitHub Release publiée le
  2026-07-10, vérifiés sur le distant). Le générateur scanne le filesystem (`AGENT-*.md` à la racine,
  `skills/<nom>/`) au lieu de dériver la liste des assets de `WORKFLOW_BACKBONES`. Décision de
  conception tranchée : la `description` d'un skill vient de la **colonne « Contents » de la table
  du README racine** (déjà rédigée, 37 lignes) — le README reste ainsi la source de vérité unique,
  et un skill ajouté sans sa ligne fait échouer la génération. `WORKFLOW_BACKBONES` n'est pas
  supprimé : il est reconverti en **garde d'invariant** sur les ids adressés par les spines du
  runtime.
- **Dette `package.json` 4.0.0 vs tag v4.0.1 — RÉSOLUE** par le bump 4.1.0 du même lot.
- **Dette claim README — RÉSOLUE.** L'intro annonçait « 38 agents, 37 skills, et 10 workflows,
  indexés dans un sidecar » : les workflows ne le sont toujours pas. Phrase reformulée (le sidecar
  indexe agents + skills ; les workflows sont *exécutables* via le runtime). Voir unité 3 ci-dessus.
- **Dette titres WF (Tâche C) — RÉSOLUE le 2026-07-09**, poussée (`7216488`, docs-only).

### ⚠ Deux erreurs du diagnostic du 2026-07-09, démasquées à l'exécution

Le diagnostic read-only était juste sur la cause racine, mais **faux sur deux points** ; ils sont
consignés ici pour qu'ils ne soient pas « re-corrigés » à tort :

1. **`dependsOn` N'EST PAS optionnel pour les agents.** Le diagnostic annonçait une « dette de
   commentaire » dans le générateur (l.15-17, « required by the schema for type agent »). C'est le
   **commentaire qui avait raison** : la clause `allOf` du schéma (`schema/sidecar.schema.json`,
   l.103-111) impose `dependsOn` dès que `type == "agent"` — vérifié par sonde ajv, un agent sans
   `dependsOn` est rejeté. Rien à corriger.
2. **L'i18n des messages FR de `check-workflow-agent-counts.mjs` et `check-schema-drift.mjs` était
   déjà faite.** Aucune chaîne FR ne subsistait dans `tools/`. L'étape 8 du plan était sans objet.

Correction de forme : le tracker qualifiait `7216488` de « commit local non poussé » — il est sur
`origin/main` depuis le 2026-07-09. Et le skill `qa_testing/` est partagé par `AGENT-QA-AGILE` et
**`AGENT-QA-CYCLEV`** (le tracker écrivait `AGENT-QA-VMODEL`, qui n'existe pas).

## Journal des jalons

- **2026-07-08** — (1) Dette de cohérence README **corrigée** (`5c2ba3e` : `prompt_engineer/` +
  `solutions_architect/` → Development & Engineering ; sous-comptes README alignés). (2) Nouvelle
  dette **sidecar** documentée (Tâche B). (3) Nouvelle **dette README titres WF** documentée (Tâche C).
- **2026-07-09** — Tâche C **corrigée** (`7216488`, docs-only, main direct, pas de tag) ; périmètre
  élargi en séance à `START.md` et au `README.md` racine. Puis **diagnostic read-only de la Tâche B** :
  cause racine établie (liste en dur `WORKFLOW_BACKBONES`), schéma hors périmètre, `package.json`
  non bumpé démasqué, CI verte expliquée, unique décision de conception isolée.
- **2026-07-10** — **Tâche B exécutée.** Sidecar 14 → **75 assets** (38 agents + 37 skills),
  `dependsOn` agent→skill peuplé (38 arêtes → 37 skills distincts, `qa_testing` partagé),
  `package.json` bumpé 4.1.0, claim README reformulé, `WORKFLOW_BACKBONES` reconverti en garde.
  4 gardes de génération exercées (exit 1 vérifié), 3 gates CI vertes. Deux erreurs du diagnostic
  du 2026-07-09 démasquées (cf. ci-dessus). Effet de bord acquis : le check d'intégrité
  `DANGLING_REFERENCE` cesse d'être vacant, puisque `dependsOn` n'est plus vide partout.
  Puis **release `v4.1.0`** sur ordre de Guy : CHANGELOG basculé `[Unreleased]` → `[4.1.0]`, commit,
  tag annoté, push `main` + tag, GitHub Release créée depuis les notes extraites du CHANGELOG
  (pas réécrites à la main). Distant vérifié après coup : `main`, tag et Release en place.
- **2026-07-18** — **Workflows indexés dans le sidecar** : 75 → **85 assets** (+ 10 `type:"workflow"`).
  Générateur étendu (`parseWorkflowCard` : H1 → title, blockquote → description, `agents_core` →
  `dependsOn` mappé `NAME` → `AGENT-NAME` ; optionnels exclus, sémantique « dépendance dure »).
  Schéma intact (branche `workflow` déjà présente, `dependsOn` minItems 1). 4 nouvelles gardes
  exercées (exit 1 + message exact vérifiés sur WF-005, restauration `git restore` prouvée diff
  vide). Les 25 agents distincts cités en `agents_core` se résolvent tous. Claim README mis à jour
  (« 85 assets, all indexed »). `WORKFLOW_BACKBONES` inchangé (garde spines runtime, sous-ensemble
  du core). Puis, sur ordre de Guy : **push** (`f236246`+`b6ee0e1`, ls-remote vérifié) et
  **release `v4.2.0`** dans la foulée — CHANGELOG basculé `[Unreleased]` → `[4.2.0]`, bump
  package.json 4.2.0, sidecar régénéré (`catalogVersion` = v4.2.0 sur les 85 assets), 3 gates
  re-vertes, commit, tag annoté, push `main` + tag, GitHub Release créée depuis les notes
  extraites du CHANGELOG. Distant vérifié après coup : `main`, tag et Release en place.
