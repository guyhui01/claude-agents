# Skill QA Cycle V — Gestion des Anomalies

## Cycle de vie d'une anomalie

```
Nouveau → Assigné → En cours → Résolu → Re-testé → Fermé
                                  ↓                    ↑
                               Rejeté              Pass ✅
                                  ↓
                             Réouvert ──────────────────→ En cours
```

## Template anomalie (Jira / HP ALM)

```
TITRE : [MODULE] — [Description courte et factuelle]

Type : ☐ Bug  ☐ Anomalie fonctionnelle  ☐ Régression  ☐ Amélioration
Sévérité : ☐ Bloquant  ☐ Majeur  ☐ Mineur  ☐ Cosmétique
Priorité : ☐ Critique  ☐ Haute  ☐ Normale  ☐ Basse
Environnement : ☐ Dev  ☐ Intégration  ☐ Recette  ☐ Production
Version : [X.X.X]  |  Build : [XXX]
Cas de test lié : [TC-XXX]
Exigence liée : [SFD-XXX]

DESCRIPTION
[Description factuelle du problème — sans interprétation]

ÉTAPES DE REPRODUCTION
1. [Précondition]
2. [Action 1]
3. [Action 2]
4. [Observation]

COMPORTEMENT ATTENDU
[Ce qui devrait se passer selon la SFD]

COMPORTEMENT OBSERVÉ
[Ce qui se passe réellement — avec capture d'écran / log]

IMPACT MÉTIER
[Processus bloqué / utilisateurs impactés / données corrompues]

CONTOURNEMENT
☐ Oui : [description]  ☐ Non

PIÈCES JOINTES
[Captures, logs, vidéo de reproduction]
```

## Niveaux de sévérité ISTQB

| Sévérité | Définition | Exemple |
|---|---|---|
| **Bloquant** | Test impossible, système inutilisable | Crash, accès refusé |
| **Majeur** | Fonctionnalité principale KO, contournement possible | Calcul faux, données perdues |
| **Mineur** | Dégradation mineure, contournement facile | Message d'erreur incorrect |
| **Cosmétique** | Aucun impact fonctionnel | Faute d'orthographe, alignement |

## Règles de gestion
- Sévérité = impact technique (défini par QA)
- Priorité = urgence de correction (définie par MOA/PO)
- Tout bloquant → bloquer la MEP
- Re-test obligatoire sur la même version corrigée
- Clôture = re-test Pass + validation QA
