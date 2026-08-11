# next_steps — claude-agents

> Tracker opérationnel de reprise de session (audience : Guy + Claude Code).
> En tête : prompt de démarrage paste-ready. Détail durable : mémoire `project-topologie-catalogue-claude-agents`.

---

## ▶ Prompt de démarrage (coller tel quel)

```text
Reprise session — catalogue /Users/guyhui/CLAUDE/claude-agents (repo guyhui01/claude-agents, checkout canonique unique).
Applique le rituel de démarrage. CHECK FACTUEL D'ABORD, jamais de mémoire :
  git -C /Users/guyhui/CLAUDE/claude-agents status -sb   ·   git describe --tags
  npm run validate:sidecar   (attendu : ✓ 85 asset(s), catalog v4.3.0)
  npm run validate:skill-mapping  (attendu : ✓ 425 fichiers ↔ 428 lignes × 38 agents)
  npm audit                  (attendu : found 0 vulnerabilities)

SIDECAR COMPLET = les 10 WORKFLOWS SONT INDEXÉS depuis v4.2.0 (2026-07-18). 85 assets
(38 agents + 37 skills + 10 workflows). Décisions tranchées : description ⟵ 1ʳᵉ ligne de
blockquote du fichier WF (le README n'a pas de colonne prose) ; dependsOn ⟵ agents_core
UNIQUEMENT (arêtes dures ; agents_optionnels exclus car conditionnels) ; schéma INTACT
(branche workflow déjà prévue).

ÉTAT — 4 gates vertes : validate:sidecar (85) · validate:wf-agents ·
validate:skill-mapping (425↔428) · check:schema-drift. `npm audit` = 0.
⚠ « 4 gates » était exact EN LOCAL seulement : en CI, check:schema-drift ne mesurait PAS
le catalogue (runtime non checkouté ⟹ « ⚠ drift-check skipped » + exit 0), donc 3 gates
mesuraient et la 4ᵉ ne vérifiait que le pin d'identité.
⟹ CORRIGÉ, POUSSÉ ET PROUVÉ EN CI le 2026-08-11 : le job checkoute le runtime et lance la
comparaison en mode STRICT. Étape 9 du run 31511269771 (sur d9e12c4) : « ✓ vendored schema
identical to the runtime contract (no drift) », aucun « skipped » dans le log.
⟹ EN CI, LES 4 GATES MESURENT LE CATALOGUE. Lu à l'étape, pas au verdict du run.

SESSION 2026-08-09 — POUSSÉE et VÉRIFIÉE SUR LE DISTANT : fast-uri 3.1.2 → 3.1.5
(3 alertes Dependabot `fixed` à l'API) + 4ᵉ gate validate:skill-mapping verte en CI
(run 31320524827, étape 7).

SESSION 2026-08-11 — v4.3.0 POUSSÉE ET RELEASÉE (dcd27f5, tag annoté + GitHub Release,
ni draft ni prerelease). CI run 31496493536 sur dcd27f5 : les 4 étapes de gate (5→8)
VÉRIFIÉES UNE À UNE, pas au verdict du run. 3 alertes Dependabot `fixed` à l'API.
  FAUX VERT TROUVÉ ET FERMÉ : validate:wf-agents n'avait aucun garde de corpus vide.
  Les 10 WF-*.md supprimés puis `npm run generate:sidecar` ⟹ le sidecar retombait à
  75 assets et LES 4 GATES PASSAIENT AU VERT pendant que 10 workflows quittaient le
  catalogue (claim publié « 85 assets » devenu faux). Mesuré de bout en bout.
  Deux causes composées : le garde sans plancher de corpus + le générateur sans plancher.
  Corrigés ; re-mesuré : 2 gates sur 4 rougissent désormais sur ce scénario.
  ⚠ Plancher à 1 : attrape 10 → 0, PAS 10 → 3 (un compte figé casserait tout ajout
  légitime — écarté à dessein). Limite assumée, pas un oubli.
  Le readdirSync ENOENT était le cousin cosmétique : verdict déjà correct (exit 1),
  mais il rendait INATTEIGNABLE le rapport corpus-vide de check-skill-mapping — dont le
  rouge du 2026-08-09 n'avait donc couvert que la forme « présent-mais-vide ».

✅ FAIT, POUSSÉ, CLÔTURÉ le 2026-08-11 : check:schema-drift est réel en CI — mode strict +
checkout du runtime, comparaison observée à l'étape (run 31511269771). Voir la section
« ⏭ ✅ FAIT » plus bas pour la falsification et la décision `ref: main`.

PROCHAINE UNITÉ — ✅ AUCUNE EN ATTENTE : le lot vitrine ci-dessous est FAIT le 2026-08-11.
  Bumpée (catalog.md:153 + index.md:134 → v4.3.0, les relevés figés intacts), releasée
  v1.17.1, poussée, PROD-VÉRIFIÉE 8/8 sur deux tirs. Détail dans le next_steps de la vitrine.
  Bloc conservé ci-dessous pour son GARDE-FOU DE PÉRIMÈTRE, qui a servi et resservira.

  [FAIT] 1. VITRINE — /Users/guyhui/CLAUDE/guyhui-showcase.
     ⛔ NE PAS REJOUER les patchs (a) et (b) des versions précédentes de ce bloc : les DEUX
        sont sans objet. (a) était faux dès l'écriture (method.md publie déjà le bon claim).
        (b) — « once, by hand » — a été FAIT le 2026-08-10 côté vitrine ; vérifié à la source
        le 2026-08-11 : la phrase n'existe dans AUCUN fichier de docs/, la page dit désormais
        « the same automated run … checks that mapping too, on every change », et le
        next_steps.md de la vitrine le marque « ✅ FAIT ICI le 2026-08-10 ».
        ⚠ Ce bloc a re-prescrit (b) le 2026-08-11 en le RECOPIANT d'ici sans ouvrir la page —
        le tracker aval disait « fait » depuis la veille. Un lot prescrit est une hypothèse
        datée : la tester à la source AVANT de la réécrire, jamais l'inverse.

     ▸ SEUL LOT RÉEL, et c'est v4.3.0 qui vient de le créer — la vitrine publie une version
       de catalogue périmée, en DEUX endroits (mesuré le 2026-08-11) :
         docs/catalog.md:153  « *Catalog currently at `v4.2.0` — versioned…* »
         docs/index.md:134    « *Catalog currently at `v4.2.0` · Agentic Runtime at `v0.11.0`…* »
       ⟹ v4.2.0 → v4.3.0. Le runtime v0.11.0 est JUSTE, ne pas y toucher.
       Règle appliquée : le repo qui PRODUIT la release porte la MAJ de celui qui l'AFFICHE.

     ⛔ GARDE-FOU DE PÉRIMÈTRE — ne PAS faire un rechercher/remplacer sur « v4.2.0 ».
        Toutes les autres occurrences v4.0.0 / v4.1.0 / v4.2.0 (live_proofs.md, workflows.md,
        index.md l.18-19 et l.63-64) sont des RELEVÉS FIGÉS : la version du catalogue AU
        MOMENT du run live. Les « mettre à jour » détruirait la preuve. Seules les lignes
        « Catalog currently at » décrivent le présent.

     ▸ Rien d'autre repéré : method.md « 85 assets » reste vrai à v4.3.0, et le claim
       d'appariement est désormais adossé à une gate PLUS forte qu'au moment où il a été écrit.
     (Repo distinct ⟹ session distincte : build --strict, release, vérif prod avec
      hard-refresh.)
```

---

## ⏭ ✅ FAIT ET CLÔTURÉ — `check:schema-drift` est réel en CI

> Décidé le **2026-08-11** à la clôture de v4.3.0, **implémenté le même jour**, sur demande
> explicite de Guy et dans la même session que le lot vitrine (dérogation assumée à
> `feedback-un-chantier-par-session`, deux repos en écriture).
> **✅ CLÔTURÉ le 2026-08-11 — POUSSÉ (`4da35c6..d9e12c4`) ET PROUVÉ EN CI À L'ÉTAPE.**
> Run **`31511269771`** sur **`d9e12c4`**, job `sidecar`, **étape 9 « Drift-check against the
> runtime contract (strict) »** : `RUNTIME_SCHEMA_PATH` résolu à
> `/home/runner/work/claude-agents/claude-agents/.runtime-ssot/schema/sidecar.schema.json`,
> commande `node tools/check-schema-drift.mjs --strict`, sortie
> `✓ identity pin OK` puis **`✓ vendored schema identical to the runtime contract (no drift).`**
> ⟹ la comparaison a bel et bien TOURNÉ. **Aucun `⚠ skipped` nulle part dans le log du run.**
> Lu **au log de l'étape**, jamais au verdict du run — un run vert ne dit pas laquelle de ses
> étapes a mesuré quoi. **En CI, les 4 gates mesurent désormais le catalogue.**
>
> **Ce qui a été fait**, exactement : `tools/check-schema-drift.mjs` accepte `--strict` /
> `RUNTIME_SCHEMA_REQUIRED=1` ⟹ runtime **attendu mais introuvable = exit 1** au lieu du skip
> (comportement indulgent conservé hors strict, pour un run local sans le repo voisin) ;
> `package.json` porte `check:schema-drift:strict` ; `.github/workflows/sidecar.yml` checkoute
> `guyhui01/claude-agentic-runtime` (**public, sans token**) **en dernier et dans son propre
> `path:` `.runtime-ssot`**, pour qu'aucune gate de catalogue ne puisse voir ses fichiers dans
> son corpus, puis lance l'étape en strict via `RUNTIME_SCHEMA_PATH`.
>
> **Décision tranchée par Guy le 2026-08-11 : `ref: main`**, pas un tag épinglé. La raison
> n'est pas le confort : un tag compare la copie vendored à une **photographie** du contrat —
> si le runtime fait évoluer son schéma, la gate **reste verte pendant que la copie a
> réellement dérivé**, exactement le « vert sans avoir gardé » que ce chantier combat. Le
> coût du couplage est le **signal voulu** (rouge = propager), et il est mesuré comme
> quasi nul : `schema/sidecar.schema.json` côté runtime a **3 commits au total**, le dernier
> le **2026-06-20**, et il est **identique entre `v0.11.0` et `main`**.
>
> **Falsification faite AVANT adoption, sur une COPIE de l'arbre** (repo réel vérifié
> non muté après) — **6 cas, chacun contrôlé sur son code de sortie ET son message**, parce
> qu'un exit code seul ne distingue pas « a comparé » de « a sauté » : runtime absent en
> `--strict` ⟹ **exit 1** · runtime absent via `RUNTIME_SCHEMA_REQUIRED=1` ⟹ **exit 1** ·
> schéma divergent ⟹ **exit 1** (`drift detected`) · `$id` vendored altéré ⟹ **exit 1**
> (niveau 1, avant même le niveau 2) · runtime absent **hors** strict ⟹ **exit 0** avec
> `drift-check skipped` (non-régression du mode local) · runtime présent et identique en
> strict ⟹ **exit 0** disant `identical to the runtime contract`, **jamais** `skipped`.
> ▫ Contrôle qui ferme le risque propre au choix `main` : le schéma vendored est
> **IDENTIQUE au `origin/main` distant du runtime** (comparaison canonique, pas au clone
> local seul) ⟹ la CI ne rougira pas au premier run pour une dérive préexistante.
> ▫ Les 4 gates locales re-vertes après modification, YAML relu et re-parsé (8 étapes).

*[Ci-dessous, le PLAN D'ORIGINE conservé tel quel pour mémoire. Il est rédigé au présent et
décrit l'état d'AVANT le lot : lire le chapeau ci-dessus pour l'état courant. Ce qu'il garde
d'utile est son raisonnement — notamment que le vrai travail était le mode strict, ce que le
lot confirme.]*

**Le constat qui l'ouvre.** La gate a deux niveaux (`tools/check-schema-drift.mjs`) :
niveau 1 = pin d'identité `$id`, **toujours actif** ; niveau 2 = comparaison au contrat du
runtime (SSOT), **sauté quand le runtime est injoignable**. En CI le runtime n'est pas
checkouté ⟹ l'étape imprime `⚠ drift-check skipped` et **sort 0**. En CI, **3 gates
mesurent le catalogue, la 4ᵉ ne vérifie que le pin**.

**Ce qui est déjà mesuré (2026-08-11, ancrage absolu, chemins distincts vérifiés) :**

- `claude-agentic-runtime` est **PUBLIC** ⟹ `actions/checkout` avec `repository:` + `path:`
  suffit, **aucun token** à provisionner.
- Le point d'entrée existe déjà : **`RUNTIME_SCHEMA_PATH`**. Testé ancré ⟹ `exit 0` avec
  `✓ vendored schema identical to the runtime contract`. **Activer la comparaison ne demande
  aucun changement de code**, seulement du YAML.
- Les deux schémas sont **IDENTIQUES aujourd'hui** (comparaison réelle, pas circulaire :
  la 1ʳᵉ tentative a comparé le runtime à lui-même par dérive de `cwd`, redite en absolu).

**⚠ Le vrai travail n'est PAS le checkout — c'est le mode strict.** Falsifié le même jour :
`RUNTIME_SCHEMA_PATH=/nexiste/pas.json` ⟹ **`skip` + exit 0**. Donc un chemin faux, un
`path:` renommé ou un déplacement du fichier côté runtime feraient **retomber la gate en
vacante sans que rien ne rougisse** — on croirait l'avoir rendue réelle. Il faut un
`--strict` (ou `RUNTIME_SCHEMA_REQUIRED=1`) qui **échoue quand le runtime est attendu mais
introuvable**, et le job CI doit l'employer. Sans ça, le chantier produit une gate qui a
l'air gardée. C'est littéralement la leçon de v4.3.0 :
« n'a pas tourné » et « passé » ne doivent pas rendre le même vert.

**Décision à TRANCHER, pas à présumer — quelle réf du runtime comparer ?** *[TRANCHÉE par Guy
le 2026-08-11 : `main`. La mesure demandée en fin de paragraphe a bien été prise avant de
choisir — 3 commits, dernier le 2026-06-20, `v0.11.0` == `main` — donc le pronostic « très
stable » écrit ici était juste, et il a été VÉRIFIÉ, pas cru.]*

- `main` : toujours à jour, mais **couple la CI de ce repo à des commits d'un autre repo**
  (un push côté runtime peut faire rougir ici, sans rapport avec le changement testé).
- **Tag épinglé** (runtime à `v0.11.0` au 2026-08-11) : découplé et reproductible, mais
  périme en silence — il faut alors savoir *qui* le fait avancer, et quand.

Ne pas trancher de tête : mesurer d'abord la fréquence réelle de changement de
`schema/sidecar.schema.json` côté runtime (il date du **20 juin**, donc probablement très
stable — à confirmer par `git log` sur ce fichier, pas par cette phrase).

**Critère de clôture** : le job CI montre l'étape drift-check **exécutée avec la comparaison
active** (message `✓ vendored schema identical…`, jamais `⚠ skipped`), vérifiée **à l'étape**
et non au verdict du run ; et le mode strict prouvé **rouge** sur runtime absent avant adoption.

---

## ⚠ Sécurité — corrigée en local le 2026-08-09, clôture SUSPENDUE au push

- **Fait le 2026-08-09** : `npm audit fix` (sans `--force`) → `fast-uri` **3.1.2 → 3.1.5**,
  `npm audit` = **0 vulnérabilité**, 4 gates vertes. Diff : **3 lignes de `package-lock.json`**,
  `ajv` reste `8.20.0`, aucune dépendance déclarée ne bouge.
- **Le pronostic du 2026-08-06 était le bon RÉFLEXE mais le mauvais CAS.** Il fallait remonter
  le parent — c'était juste ; il ne fallait pas présumer la voie — c'était juste aussi, et c'est
  la voie **inverse** du runtime qui s'est appliquée : `ajv` déclare `fast-uri: ^3.0.1`, et
  `3.1.5` (dernière 3.x) tombe **dans** cette plage ⟹ **aucun `overrides` nécessaire**. Ce qui
  tranche reste la plage déclarée du parent, jamais le remède de la fois d'avant.
- **Chiffre à ne pas confondre** : `npm audit` comptait **1 vulnérabilité** (un paquet),
  Dependabot **3 alertes** (trois advisories sur ce paquet). Même réalité, deux dénominateurs.
- ✅ **CLÔTURÉE le 2026-08-09.** Poussé (`c014795..6e2629a`), puis alertes vérifiées **via
  l'API** (`gh api …/dependabot/alerts`) : les **3** sont `fixed`. ⚠ Le bandeau `remote:` du
  push annonçait encore « 3 vulnerabilities (3 high) » — instantané **pré-scan**, à ne jamais
  lire comme un verdict, exactement comme prévu par la mémoire advisory.

<details>
<summary>Constat d'origine (consigné le 2026-08-06) — conservé comme trace</summary>

**⚠ Sécurité — 3 alertes Dependabot ouvertes (état du 2026-08-06, figé)**

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

*(Snapshot figé — annoté, non réécrit : son « les 3 gates du repo vertes » date d'avant
`validate:skill-mapping`. Le critère courant en compte 4.)*

</details>

---

## ⚠ Propriété publiée non gardée — RÉSOLUE le 2026-08-09

> Cette dette était consignée **dans le mauvais repo** : `guyhui-showcase/next_steps.md`
> la portait alors que le correctif se paie **ici**, et le bloc de reprise de ce tracker
> ne la mentionnait pas. Le repo qui devait la preuve ignorait qu'il la devait.

- **Ce qui n'était gardé par rien** : la vitrine publie « *425 skill files … every one
  reachable from a request line, none referenced but absent, verified at catalog `v4.2.0`* ».
  Le sidecar indexe au niveau **DOSSIER** (un asset `skill` = `skills/<name>/README.md`) ⟹
  les 37 fichiers qu'il valide sont **exactement** les 37 qui ne portent aucun appariement.
  Un chemin cassé dans une table `## Available skills` n'aurait été vu par personne.
- **Correctif** : `tools/check-skill-mapping.mjs` + `npm run validate:skill-mapping`, ajouté
  à `.github/workflows/sidecar.yml`. Ferme les deux sens : `ABSENT` (ligne de demande vers un
  fichier inexistant) et `UNMAPPED` (fichier de skill que personne n'offre).
- **Mesure au moment de l'ajout** : 38 agents · **428 lignes de demande** · **425 fichiers
  distincts** · 425 sur disque · 0 absent · 0 orphelin. Fermeture `425 + 37 = 462` fichiers
  `.md` sous `skills/`. ⚠ **425 ≠ 428** : 425 compte des fichiers, 428 des lignes.
- **Rouge observé sur les 4 causes avant adoption** (exit 1 + message exact, arbre reprouvé
  propre) : référence morte · fichier orphelin · titre `## Available skills` renommé ·
  **corpus vide**. Ce dernier est le plus important : sans lui, « rien à mesurer » et
  « passé » auraient imprimé le même vert.
- ✅ **LE GARDE TOURNE EN CI depuis le 2026-08-09.** Run `31320524827` sur `6e2629a`, **étape 7
  `npm run validate:skill-mapping` exécutée et verte** (vérifiée à l'étape, pas au verdict
  global du run) : « 425 skill file(s) ↔ 428 request row(s) across 38 agent card(s) ».
  ⟹ La phrase de la vitrine ne tient plus par sa seule provenance : elle peut désormais
  emprunter la garantie CI. C'est ce qui débloque le patch (b) côté `guyhui-showcase`.

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
- **2026-08-09** — Deux unités, **commits locaux, rien de poussé**. (1) **`fast-uri` 3.1.2 →
  3.1.5** par `npm audit fix` seul : `ajv` déclare `^3.0.1`, le correctif tombe dans la plage,
  donc ni `overrides` ni `--force` — la voie **inverse** du cas runtime du 2026-08-06, ce qui
  confirme la règle (« ce qui tranche est la plage du parent ») en invalidant le remède.
  `npm audit` 1 HIGH → **0** ; diff = 3 lignes de lock, `ajv` inchangé. (2) **4ᵉ gate
  `validate:skill-mapping`** : la propriété la plus commerciale du site (« 425 skill files …
  none referenced but absent ») n'était gardée par **rien**, et la dette était consignée dans
  le repo qui l'AFFICHE au lieu de celui qui la PRODUIT. Garde écrit, câblé en CI, **rouge
  observé sur ses 4 causes** dont le corpus vide. Mesure : 425 fichiers ↔ 428 lignes × 38
  agents, 0 absent, 0 orphelin. **Poussé le jour même** (`c014795..6e2629a`) : 3 alertes
  Dependabot `fixed` à l'API, run CI `31320524827` vert avec l'étape 7 du garde **exécutée**
  (vérifiée à l'étape, pas au verdict du run). Reste dû : la réécriture côté vitrine.
  ▫ Effet de bord de la session, dans `claude-config` : la formule de parité des fences était
  recopiée à **3 endroits** (hook, mémoire, `scripts/audit_memory.py`) ; la mémoire avait été
  corrigée le 2026-08-06, les deux copies non — et c'est une copie périmée qui a été appliquée.
  Corrigé, calibré sur 667 fichiers, et le hook ne recopie plus aucun opérateur.
- **2026-08-11** — **Faux vert fermé, puis `v4.3.0` coupée en local (rien de poussé).**
  Le point d'entrée était le `readdirSync` sur un `skills/` absent. En attaquant l'espace
  d'entrée `{absent, vide, peuplé} × {skills/, workflows/}` — et non en ajoutant une sonde —
  le vrai défaut est apparu ailleurs : **`validate:wf-agents` n'avait aucun garde de corpus
  vide**, là où son frère `validate:skill-mapping` en portait un depuis le 2026-08-09.
  Deux gardes frères tranchaient la même politique en sens opposés, chacun vert sur sa fixture.
  **Scénario mesuré de bout en bout** : les 10 `WF-*.md` supprimés, `npm run generate:sidecar`
  lancé (le geste normal quand le catalogue bouge) ⟹ `sidecar.json` réécrit **85 → 75 assets**
  et **les 4 gates au vert** — 10 workflows hors catalogue, claim publié « 85 assets » devenu
  faux, CI intégralement verte. Le générateur était l'activateur : aucun plancher de corpus.
  Corrigés tous les deux ; re-mesuré sur le même scénario : **2 gates sur 4 rougissent**
  (générateur qui refuse d'écrire + `wf-agents`). Plancher à **1 par type** — attrape 10 → 0,
  **pas** 10 → 3 ; un compte figé casserait tout ajout légitime, écarté à dessein.
  Le `readdirSync` s'est révélé **cosmétique quant au verdict** (exit 1 déjà correct, mesuré)
  mais il rendait **inatteignable** le rapport corpus-vide de `check-skill-mapping` : le rouge
  du 2026-08-09 n'avait donc jamais couvert la forme *absente*, seulement *présent-mais-vide*.
  Falsification avant adoption : chaque garde **rouge sur sa cause**, et *absent* / *vide* /
  *peuplé* rendent désormais **trois sorties distinctes** dans les trois outils.
  ▫ Constat annexe, vérifié dans `.github/workflows/sidecar.yml` lui-même : `check:schema-drift`
  est un **no-op assumé en CI** (runtime non checkouté → « ⚠ drift-check skipped » + exit 0).
  « 4 gates vertes » est exact en local ; en CI **3 mesurent**. Précision portée au tracker
  et au CHANGELOG. **[Annotation 2026-08-11 — ce constat n'est plus l'état courant :
  corrigé en local le même jour, voir la section « ⏭ ✅ FAIT EN LOCAL ». Journal daté
  annoté, non réécrit.]**
  ▫ Hygiène d'instrument : mes **deux premiers harnais de mesure étaient faux** (argument
  `--check` non splitté, et un cas « workflows vide » qui supprimait aussi `workflows/README.md`,
  confondant deux mutations). Refaits avec **contrôle positif baseline vert** avant lecture —
  aucune ligne des grilles v1 n'a été retenue.
  ▫ **6ᵉ propriété non gardée, trouvée sur la question « reste-t-il des dettes ? »** :
  `package-lock.json` restait à 4.2.0 face à un `package.json` à 4.3.0. `npm ci` passe malgré
  la dérive (mesuré, exit 0) ⟹ rien ne la mesurait, et elle a récidivé : **5 tags sur les 9**
  qui portent les deux fichiers ont été publiés avec un lock périmé (v3.27.0, v3.27.2,
  v3.27.3, v4.1.0, v4.3.0-avant-correctif). Garde ajouté dans `catalogTag()` — compare
  `package.json` aux DEUX champs du lock (`version` et `packages[""].version`), donc porté
  par la 1ʳᵉ gate, sans nouvelle gate ni câblage CI. Rouge prouvé sur 4 causes.
  ⚠ Sa 1ʳᵉ version relivrait le défaut ENOENT que cette même release corrige (lock absent →
  stack brute) : rattrapé par la falsification, pas par la relecture.
  ▫ Puis `v4.3.0` : CHANGELOG basculé `[Unreleased]` → `[4.3.0]`, bump package.json + lock,
  sidecar régénéré (`catalogVersion` = v4.3.0, 85 assets), 4 gates re-vertes, `npm audit` = 0,
  commit + tag annoté. **Push et GitHub Release en attente d'accord explicite** — c'est ce tag
  qui publiera le correctif sécurité `fast-uri` (`a7ecd5a`, déjà sur `main` mais hors tag).
