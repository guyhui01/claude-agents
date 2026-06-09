# schema/ — contrat du sidecar (miroir vendoré)

`sidecar.schema.json` est une **copie épinglée** (schemaVersion `1.0.0`) du schéma de
référence dont la **source de vérité (SSOT) est le runtime** :
`claude-agentic-runtime/schema/sidecar.schema.json`.

## Pourquoi une copie ?

- **ADR-0003** : le générateur de sidecar et sa **validation en CI appartiennent au
  catalogue** ; le runtime ne fait que **lire** le sidecar. Pour valider en CI côté
  catalogue sans dépendre d'un checkout du runtime, le contrat est vendoré ici.
- **Invariant** : ce fichier ne doit **jamais** être modifié indépendamment du runtime.
  Il est le contrat, pas une variante. Toute évolution part du runtime, puis est
  répercutée ici.

## Garde anti-dérive

`npm run check:schema-drift` compare cette copie au schéma du runtime (résolu en
sibling `../claude-agentic-runtime/` ou via `RUNTIME_SCHEMA_PATH`). Si les deux
divergent, la commande échoue. Si le runtime est introuvable (repos non côte à côte,
ex. CI isolée du catalogue), la vérification est **ignorée proprement** (exit 0) et
signalée — la validation du sidecar lui-même reste, elle, toujours active.
