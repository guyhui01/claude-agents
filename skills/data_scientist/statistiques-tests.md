# Skill — Statistiques & Tests Hypothèses
> Certifications : Google Advanced Data Analytics · IBM Data Science · SAS Statistical Business Analyst

## Objectif
Appliquer les outils statistiques pour valider des hypothèses, mesurer des effets et prendre des décisions basées sur les données.

## Tests statistiques — guide de sélection
| Question | Test | Conditions |
|---|---|---|
| 2 moyennes indépendantes | t-test de Student | Normalité, variance égale |
| 2 moyennes appariées | t-test apparié | Avant/après même sujet |
| > 2 groupes | ANOVA | Normalité, homoscédasticité |
| Proportions (A/B test) | z-test proportions | n > 30 |
| Distribution non-normale | Mann-Whitney U | Alternative non-param au t-test |
| Variables catégorielles | Chi-2 | Fréquences attendues > 5 |
| Corrélation | Pearson (linéaire) / Spearman (rang) | Selon distribution |

## A/B Testing (expérimentation)
```python
from scipy import stats
import numpy as np

# Données A/B test
control = [0, 1, 0, 0, 1, ...]   # Groupe A (n_A)
treatment = [1, 1, 0, 1, 1, ...]  # Groupe B (n_B)

# Taux de conversion
conv_A = sum(control) / len(control)
conv_B = sum(treatment) / len(treatment)

# Test z sur proportions
from statsmodels.stats.proportion import proportions_ztest
count = np.array([sum(treatment), sum(control)])
nobs = np.array([len(treatment), len(control)])
stat, p_value = proportions_ztest(count, nobs)

print(f"Lift: {(conv_B - conv_A) / conv_A:.1%}")
print(f"p-value: {p_value:.4f}")
print(f"Significatif: {'Oui' if p_value < 0.05 else 'Non'}")
```

## Calcul de la taille d'échantillon (A/B test)
```python
from statsmodels.stats.power import NormalIndPower

analysis = NormalIndPower()
n = analysis.solve_power(
    effect_size=0.1,    # Lift minimal détectable
    alpha=0.05,         # Seuil de significativité
    power=0.8,          # Puissance statistique
    alternative='two-sided'
)
print(f"Taille minimale par groupe: {int(n)}")
```

## Intervalles de confiance
```python
import scipy.stats as stats

# IC sur la moyenne (t-distribution)
data = [12.3, 11.8, 13.1, 12.7, 11.9]
ci = stats.t.interval(0.95, df=len(data)-1,
                       loc=np.mean(data),
                       scale=stats.sem(data))
print(f"IC 95%: [{ci[0]:.2f}, {ci[1]:.2f}]")
```

## Régression linéaire — inférence
```python
import statsmodels.api as sm

X = sm.add_constant(X)
model = sm.OLS(y, X).fit()
print(model.summary())
# Interpréter : coefficients, p-values, R², F-statistic
```

## Pièges statistiques classiques
| Piège | Description | Solution |
|---|---|---|
| p-hacking | Tester jusqu'à trouver p < 0.05 | Pré-enregistrer l'hypothèse |
| Multiple testing | Faux positifs si > 1 test | Correction Bonferroni / FDR |
| Confusion causalité/corrélation | r élevé ≠ causalité | Design expérimental, IV |
| Biais de survie | Analyser que les succès | Inclure tous les cas |
| Simpson's paradox | Tendance inversée par agrégation | Stratifier l'analyse |

## Livrables
- Rapport d'analyse statistique (méthode, résultats, décision)
- Plan d'expérimentation A/B (hypothèses, taille, durée)
- Dashboard de suivi des expérimentations
- Présentation des résultats (décideurs non-statisticiens)

## Format de sortie
Précise : type de question (comparaison, corrélation, A/B test) · données disponibles · niveau de confiance requis · audience (technique / business)
