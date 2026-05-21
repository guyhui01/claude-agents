# Skill — Éthique IA, Biais & Fairness
> Certifications : CAP IABAC · DeepLearning.AI AI For Everyone · IBM Data Science

## Objectif
Détecter, mesurer et atténuer les biais dans les systèmes IA pour garantir l'équité, la transparence et la conformité réglementaire (AI Act, RGPD).

## Types de biais en ML
| Type de biais | Description | Exemple |
|---|---|---|
| **Biais de données** | Sur/sous-représentation dans le dataset | Modèle de crédit entraîné sur population homogène |
| **Biais de mesure** | Indicateurs inadéquats comme proxy | Utiliser le code postal comme proxy du revenu |
| **Biais d'algorithme** | Amplification de biais par l'optimisation | Minimiser l'erreur globale pénalise les minorités |
| **Biais de confirmation** | Choix des features guidé par les croyances | Exclure des variables qui contredisent l'hypothèse |
| **Biais de déploiement** | Distribution drift en production | Modèle entraîné en 2020, déployé en 2026 |

## Détection des biais (Fairlearn)
```python
from fairlearn.metrics import MetricFrame, demographic_parity_difference
from sklearn.metrics import accuracy_score

# Créer un MetricFrame par groupe sensible
mf = MetricFrame(
    metrics=accuracy_score,
    y_true=y_test,
    y_pred=y_pred,
    sensitive_features=X_test['genre']
)

print(mf.by_group)          # Accuracy par groupe
print(mf.difference())       # Écart max entre groupes
print(mf.ratio())            # Ratio min/max entre groupes

# Parité démographique
dpd = demographic_parity_difference(y_test, y_pred,
                                     sensitive_features=X_test['genre'])
print(f"Parité démographique : {dpd:.3f}")  # Idéal : 0
```

## Métriques de fairness
| Métrique | Définition | Seuil acceptable |
|---|---|---|
| **Demographic Parity** | Égalité des taux de prédiction positive | Diff < 0.10 |
| **Equalized Odds** | Égalité TPR et FPR entre groupes | Diff < 0.10 |
| **Individual Fairness** | Individus similaires → prédictions similaires | Qualitative |
| **Calibration** | Probabilités alignées avec la réalité | Par groupe |

## Atténuation des biais
```python
from fairlearn.reductions import ExponentiatedGradient, DemographicParity

# Contrainte de fairness pendant l'entraînement
constraint = DemographicParity()
mitigator = ExponentiatedGradient(
    estimator=LogisticRegression(),
    constraints=constraint
)
mitigator.fit(X_train, y_train, sensitive_features=X_train['genre'])
```

## AI Act — obligations de conformité (2026)
| Catégorie de risque | Exemples | Obligations |
|---|---|---|
| **Risque inacceptable** | Score social, manipulation subliminale | Interdit |
| **Risque élevé** | Recrutement, crédit, justice | Audit, traçabilité, supervision humaine |
| **Risque limité** | Chatbots, deepfakes | Transparence (déclaration IA) |
| **Risque minimal** | Filtres spam, recommandations | Bonnes pratiques volontaires |

## Livrables
- Audit de biais (rapport MetricFrame)
- Plan de mitigation documenté
- Rapport de conformité AI Act
- Politique de gouvernance IA du modèle (Model Card)

## Format de sortie
Précise : type de modèle · variables sensibles (genre, âge, origine) · réglementation applicable (AI Act niveau) · métriques de fairness prioritaires · audience du rapport
