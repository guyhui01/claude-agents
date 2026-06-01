# Skill — Gestion des Erreurs, Fallbacks et Reprises de Workflow
> Certifications : ITIL 4 Foundation (Axelos), PMP (PMI), AWS Certified Solutions Architect (Amazon), PRINCE2 Practitioner (Axelos)

## Objectif
Détecter, qualifier et traiter les erreurs survenant dans un workflow agentique — output insuffisant, agent bloqué, contexte manquant — et reprendre l'exécution sans perdre le travail accompli.

## Taxonomie des erreurs

```
TYPE 1 — ERREUR D'OUTPUT
  L'agent a produit un résultat incomplet, hors format ou non conforme
  → Action : reformuler le prompt et relancer l'étape

TYPE 2 — ERREUR DE CONTEXTE
  L'agent manque d'informations pour accomplir sa tâche
  → Action : enrichir le context packet et relancer

TYPE 3 — ERREUR DE ROUTAGE
  Le mauvais agent a été sélectionné pour la tâche
  → Action : router vers l'agent correct sans perdre le contexte

TYPE 4 — ERREUR DE DÉPENDANCE
  L'étape précédente n'est pas complétée ou validée
  → Action : bloquer l'étape courante et résoudre la dépendance

TYPE 5 — ERREUR MÉTIER
  L'output est techniquement correct mais ne correspond pas au besoin réel
  → Action : clarifier le besoin avec l'utilisateur et repartir de l'étape concernée
```

---

## Matrice de traitement des erreurs

| Type | Détection | Priorité | Action immédiate | Fallback |
|---|---|---|---|---|
| Output incomplet | Critères de validation non remplis | Haute | Relancer avec prompt enrichi | Agent alternatif |
| Contexte manquant | Agent signale manque d'info | Haute | Enrichir context packet | Poser 1 question à l'utilisateur |
| Mauvais routage | Output hors périmètre agent | Moyenne | Router vers agent correct | Requalifier la demande |
| Dépendance manquante | Étape précédente non validée | Critique | Bloquer et résoudre | Workflow séquentiel forcé |
| Erreur métier | Utilisateur invalide le livrable | Haute | Clarifier le besoin | Reprendre depuis étape concernée |

---

## Template — Rapport d'erreur

```yaml
erreur:
  id: "ERR-WF001-STEP02-001"
  workflow_id: "WF-001"
  etape: "STEP-02 — PO-SCRUM"
  type: "output_incomplet"
  timestamp: "2026-05-22T10:15:00"
  
  description: |
    L'agent PO-SCRUM a produit 3 User Stories au lieu des 8 attendues.
    Les critères d'acceptation sont absents sur 2 US.
  
  criteres_non_remplis:
    - "Nombre d'US < 8"
    - "Critères d'acceptation manquants sur US-02 et US-03"
  
  action_corrective:
    type: "relancer_avec_prompt_enrichi"
    instructions: |
      Compléter les 5 US manquantes en respectant le format INVEST.
      Ajouter les critères d'acceptation au format Gherkin sur toutes les US.
    agent: "PO-SCRUM"
    
  fallback:
    condition: "Si l'agent échoue à nouveau après 2 tentatives"
    action: "Escalader à l'utilisateur pour arbitrage"
```

---

## Stratégies de reprise

### Reprise partielle (reprise à l'étape en erreur)
```
WF : [STEP-01 ✓] → [STEP-02 ✗] → [STEP-03 ⏸] → [STEP-04 ⏸]
                         │
                    REPRISE ICI
                    (context conservé des étapes précédentes)
```

### Reprise complète (si contexte corrompu)
```
WF : [STEP-01 ✓] → [STEP-02 ✗] → RESET COMPLET
                         │
              Conserver uniquement :
              - Contexte client global
              - Contraintes non négociables
              - Outputs validés des étapes avant STEP-02
```

### Reprise avec agent alternatif
```
STEP-02 : PO-SCRUM → ✗ (2 tentatives échouées)
        ↓
STEP-02 : BUSINESS-ANALYST → reformulation du besoin
        ↓
STEP-02 : PO-SCRUM → relance avec meilleur contexte
```

---

## Checklist de validation d'un output

```
VALIDATION OUTPUT — [NOM AGENT] — [ÉTAPE]
─────────────────────────────────────────────────
☐ Le format demandé est respecté (YAML / Markdown / Tableau)
☐ Le volume attendu est atteint (ex. 8 US / 5 risques / 3 wireframes)
☐ Tous les champs obligatoires sont renseignés
☐ Le vocabulaire métier correct est utilisé (SAFe / Scrum / PMI)
☐ L'output est directement utilisable (prêt à copier dans Jira / Confluence)
☐ Aucune contradiction avec le contexte global du workflow
☐ L'utilisateur a validé (si étape critique)
```

---

## Escalade à l'utilisateur

Escalader systématiquement si :
- 2 tentatives de correction échouées sur la même étape
- Ambiguïté sur le besoin métier réel (non résolvable par l'agent)
- Décision impactant le périmètre ou le budget du workflow
- Output contradictoire avec les étapes précédentes validées

```
MESSAGE D'ESCALADE
──────────────────────────────────────────────────────
⚠ Blocage sur [ÉTAPE] — [NOM AGENT]

Problème : [description en 1 phrase]
Tentatives : 2 relances effectuées sans succès
Besoin : [question précise à l'utilisateur]

Options proposées :
  A. [Option 1 avec conséquences]
  B. [Option 2 avec conséquences]
  C. Modifier le périmètre du workflow
```

## Livrables
- Rapport d'erreur structuré (YAML)
- Plan de reprise documenté
- Historique des tentatives de correction
- Décision d'escalade si applicable

## Format de sortie
Précise : étape en erreur, type d'erreur, outputs partiels déjà produits, contraintes de reprise.

## Anti-patterns
- ❌ **Retry infini sans backoff ni plafond** : « thundering herd », coûts → backoff exponentiel + jitter + nombre d'essais borné
- ❌ **Pas de taxonomie d'erreur** : traitement uniforme inadapté → distinguer transitoire / contenu / système / métier
- ❌ **Échec silencieux** (erreur avalée) : workflow incohérent → log + statut `en_erreur` explicite
- ❌ **Pas de point de reprise (checkpoint)** : tout rejouer depuis le début → reprise sur état persisté (cf. `context-handoff.md`)
- ❌ **Aucune escalade humaine** sur erreur critique : boucle bloquée → seuil d'escalade défini

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, déc. 2024) — pattern evaluator-optimizer (boucle de correction)
- **ITIL 4** (Axelos) — gestion des incidents et reprise · patterns **retry / circuit breaker / dead-letter queue**

## Voir aussi
- [`context-handoff.md`](context-handoff.md) — reprise sur état du workflow persisté
- [`output-validation.md`](output-validation.md) — détection d'output invalide déclenchant la reprise
- [`workflow-monitoring.md`](workflow-monitoring.md) — alerting sur erreurs
- [`trigger-management.md`](trigger-management.md) — événements d'interruption
