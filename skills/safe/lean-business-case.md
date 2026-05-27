# Skill — Lean Business Case pour Portfolio Epics SAFe

> Certification : SAFe LPM · SAFe POPM 6
> Agent : AGENT-PO-SAFE.md

## Objectif
Construire un Lean Business Case (LBC) pour soumettre un Portfolio Epic au Portfolio Kanban et obtenir le go/no-go de financement.

## Structure du Lean Business Case SAFe

### Template officiel SAFe 6

```
PORTFOLIO EPIC — [Nom de l'Epic]
Hypothèse de bénéfice (Benefit Hypothesis) :
"En livrant [capacité], nous attendons [résultat business]
 mesuré par [KPI] avec une cible de [valeur] à [date]."

═══════════════════════════════════════════════════════

1. CONTEXTE ET OPPORTUNITÉ
   Problème/Opportunité : [description concise]
   Utilisateurs impactés : [segments]
   Alignement stratégique : [thème stratégique SAFe concerné]

2. SOLUTION PROPOSÉE
   Description : [ce qu'on va construire / changer]
   Périmètre MVP : [version minimum viable]
   Hors périmètre : [ce qu'on ne fait pas]

3. ANALYSE DE LA VALEUR
   Revenus potentiels : [€ / % croissance]
   Économies potentielles : [€ / % réduction coûts]
   Risque de ne pas le faire : [impact si on n'agit pas]

4. ANALYSE DES COÛTS
   Estimation effort : [nb équipes × nb sprints]
   Coût estimé : [€ HT]
   Time to market estimé : [PI(s) nécessaires]

5. WSJF SCORE (cotation relative, plus petit = 1 par colonne — cf. skills/safe/wsjf.md)
   CoD = Business Value + Time Criticality + RR/OE (Fibonacci 1·2·3·5·8·13·20)
   Job Size : [Fibonacci]
   WSJF = CoD / Job Size = [score final]

6. RISQUES CLÉS
   | Risque | Probabilité | Impact | Mitigation |
   |--------|-------------|--------|------------|
   | [R1]   | Moyen       | Élevé  | [action]   |

7. GO / NO-GO CRITERIA
   Go si : [conditions de succès mesurables]
   No-go si : [signaux d'arrêt]
   Point de décision : après [MVP / PI N]
```

## Processus Portfolio Kanban

```
Idée Epic → Analyse LBC → Revue LPM → Approbation → En cours → Terminé
              (2-4 sem.)   (Bimensuel)  (Financement)
```

### Critères d'entrée dans le Portfolio Kanban
- [ ] Benefit Hypothesis rédigée
- [ ] Analyse coûts/bénéfices complète
- [ ] WSJF calculé
- [ ] Alignement stratégique confirmé
- [ ] Risques identifiés + mitigation

## Calcul du WSJF pour un Epic

### Cost of Delay (CoD) — 3 composantes (cf. skills/safe/wsjf.md)

> Cotation **relative**, **plus petit = 1 par colonne**, colonnes indépendantes, Fibonacci (1·2·3·5·8·13·20).

| Composante | Description |
|---|---|
| Business Value | Impact direct sur revenu/client |
| Time Criticality | Fenêtre d'opportunité (pénalité si tard) |
| Risk Reduction / Opportunity Enablement | Réduit un risque ou ouvre une opportunité |

**CoD = Business Value + Time Criticality + RR/OE**

```
WSJF = CoD / Job Size (taille relative T-shirt : XS=1, S=2, M=3, L=5, XL=8, XXL=13)
```

## Présentation au Portfolio Sync

**Format recommandé : 10 min par Epic**
- 2 min : contexte + problème
- 3 min : solution proposée + MVP
- 3 min : analyse valeur + WSJF
- 2 min : risques + go/no-go criteria
