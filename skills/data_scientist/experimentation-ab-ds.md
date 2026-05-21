# Skill — Expérimentation A/B & Tests d'Hypothèses (Data Science)
> Certifications : Google Advanced Data Analytics · IBM Data Science · DeepLearning.AI ML Specialization

## Objectif
Concevoir, analyser et interpréter des expérimentations A/B avec une rigueur statistique pour guider les décisions produit et business.

## Processus d'expérimentation rigoureux

### Étape 1 : Définir l'hypothèse
```
Structure SMART :
  H0 (nulle)     : "La variante B n'améliore pas la métrique X"
  H1 (alternative): "La variante B améliore la métrique X de au moins Y%"

Exemple :
  H0 : Le nouveau CTA ne change pas le taux de conversion
  H1 : Le nouveau CTA augmente le taux de conversion d'au moins 5%

Métrique primaire  : taux de conversion
Métriques guardrails : taux de désabonnement, NPS (ne doivent pas se dégrader)
```

### Étape 2 : Calcul de la taille d'échantillon
```python
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

def calculate_sample_size(baseline_rate: float, mde: float,
                           alpha: float = 0.05, power: float = 0.80) -> int:
    """
    baseline_rate : taux de conversion actuel (ex: 0.05 = 5%)
    mde           : minimum detectable effect (ex: 0.01 = +1 point)
    alpha         : seuil de significativité (0.05)
    power         : puissance statistique (0.80)
    """
    effect_size = proportion_effectsize(baseline_rate, baseline_rate + mde)
    analysis = NormalIndPower()
    n = analysis.solve_power(effect_size=effect_size, alpha=alpha, power=power)
    return int(np.ceil(n))

# Exemple
n = calculate_sample_size(baseline_rate=0.05, mde=0.005)
print(f"Taille minimale par groupe : {n:,}")
print(f"Durée estimée : {n * 2 / 1000:.0f} jours si 1000 visiteurs/jour")
```

### Étape 3 : Analyse des résultats
```python
from scipy import stats
import numpy as np

def analyze_ab_test(control_conversions: int, control_visitors: int,
                     treatment_conversions: int, treatment_visitors: int,
                     alpha: float = 0.05) -> dict:

    rate_ctrl = control_conversions / control_visitors
    rate_trt  = treatment_conversions / treatment_visitors
    lift      = (rate_trt - rate_ctrl) / rate_ctrl

    # Z-test sur proportions
    from statsmodels.stats.proportion import proportions_ztest
    count = np.array([treatment_conversions, control_conversions])
    nobs  = np.array([treatment_visitors, control_visitors])
    stat, p_value = proportions_ztest(count, nobs)

    # Intervalle de confiance sur le lift
    se = np.sqrt(rate_ctrl*(1-rate_ctrl)/control_visitors +
                 rate_trt*(1-rate_trt)/treatment_visitors)
    z_crit = stats.norm.ppf(1 - alpha/2)
    diff = rate_trt - rate_ctrl
    ci = (diff - z_crit*se, diff + z_crit*se)

    result = {
        'control_rate'  : f"{rate_ctrl:.2%}",
        'treatment_rate': f"{rate_trt:.2%}",
        'lift'          : f"{lift:.2%}",
        'p_value'       : f"{p_value:.4f}",
        'significant'   : p_value < alpha,
        'ci_95'         : f"[{ci[0]:.4f}, {ci[1]:.4f}]",
        'recommendation': "LANCER B" if (p_value < alpha and lift > 0) else "GARDER A"
    }
    return result
```

## Pièges et erreurs à éviter

### Peeking problem (arrêt prématuré)
```python
# ❌ Arrêter le test dès que p < 0.05 (faux positif garanti)

# ✅ Utiliser Sequential Testing (alpha spending)
# Ou définir la durée à l'avance et s'y tenir
# Outil : Evan's A/B Test Calculator avec correction Bonferroni
```

### Multiple Testing
```python
# Si plusieurs variantes (A/B/C/D) : correction Bonferroni
alpha_corrected = 0.05 / n_tests  # n_tests = nombre de comparaisons

# Ou Benjamini-Hochberg (FDR) pour + de puissance
from statsmodels.stats.multitest import multipletests
rejected, p_corrected, _, _ = multipletests(p_values, method='fdr_bh')
```

### Network Effects (effets de contamination)
```
Risque : les utilisateurs du groupe A interagissent avec ceux du groupe B
Solution : randomiser par cluster (ex: par géographie, par entreprise)
           au lieu de par utilisateur
```

## Expérimentation avancée

### Multi-Armed Bandit (vs. A/B fixe)
```python
# Thompson Sampling : allocation dynamique selon les performances
import numpy as np

class ThompsonSampling:
    def __init__(self, n_arms):
        self.alpha = np.ones(n_arms)  # succès + 1
        self.beta  = np.ones(n_arms)  # échecs + 1

    def choose_arm(self) -> int:
        samples = [np.random.beta(a, b) for a, b in zip(self.alpha, self.beta)]
        return np.argmax(samples)

    def update(self, arm: int, reward: int):
        self.alpha[arm] += reward
        self.beta[arm]  += (1 - reward)
```

## Livrables
- Plan d'expérimentation (hypothèse, métriques, taille, durée)
- Rapport d'analyse avec interprétation statistique
- Recommandation go/no-go documentée
- Historique des expériences (experiment registry)

## Format de sortie
Précise : métrique primaire · taux baseline · MDE (effet minimal détectable) · trafic disponible · durée maximale · nombre de variantes
