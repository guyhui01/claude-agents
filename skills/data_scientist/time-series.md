# Skill — Séries Temporelles & Prévisions
> Certifications : IBM Data Science · DeepLearning.AI ML Specialization · Kaggle

## Objectif
Analyser, modéliser et prévoir des données temporelles pour les prévisions de ventes, la demande, les KPIs métier.

## Décomposition d'une série temporelle
```python
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt

result = seasonal_decompose(df['valeur'], model='multiplicative', period=12)
result.plot()

# Composantes :
# Trend     → Tendance à long terme
# Seasonal  → Saisonnalité périodique
# Residual  → Bruit / anomalies
```

## Modèles de prévision — choix selon le contexte
| Modèle | Avantages | Quand l'utiliser |
|---|---|---|
| **ARIMA / SARIMA** | Interprétable, peu de données | Série stationnaire, saisonnalité connue |
| **Prophet (Meta)** | Facile, gère les fêtes | Business KPIs, données irrégulières |
| **XGBoost / LightGBM** | Très performant | Features externes, horizon court |
| **LSTM / Transformer** | Relations long terme | Haute fréquence, relations complexes |
| **N-BEATS / TFT** | SOTA 2026 | Prévisions multivariées complexes |

## Prophet — prévision rapide
```python
from prophet import Prophet
import pandas as pd

# Format requis : colonnes 'ds' (date) et 'y' (valeur)
df_prophet = df.rename(columns={'date': 'ds', 'ventes': 'y'})

model = Prophet(
    seasonality_mode='multiplicative',
    yearly_seasonality=True,
    weekly_seasonality=True,
    holidays=pd.DataFrame(...)  # Jours fériés français
)
model.fit(df_prophet)

# Prévision 12 mois
future = model.make_future_dataframe(periods=365)
forecast = model.predict(future)
model.plot(forecast)
```

## Features pour modèles ML sur time series
```python
def create_time_features(df, date_col='date'):
    df['year'] = df[date_col].dt.year
    df['month'] = df[date_col].dt.month
    df['day_of_week'] = df[date_col].dt.dayofweek
    df['week_of_year'] = df[date_col].dt.isocalendar().week
    df['is_weekend'] = (df['day_of_week'] >= 5).astype(int)
    df['is_month_end'] = df[date_col].dt.is_month_end.astype(int)
    
    # Lag features
    for lag in [1, 7, 14, 30]:
        df[f'lag_{lag}'] = df['valeur'].shift(lag)
    
    # Rolling features
    for window in [7, 30, 90]:
        df[f'rolling_mean_{window}'] = df['valeur'].rolling(window).mean()
        df[f'rolling_std_{window}'] = df['valeur'].rolling(window).std()
    
    return df
```

## Métriques d'évaluation prévision
| Métrique | Description | Quand l'utiliser |
|---|---|---|
| **MAE** | Erreur absolue moyenne | Toujours (interprétable) |
| **RMSE** | Racine de l'erreur quadratique | Pénalise les grandes erreurs |
| **MAPE** | Erreur % absolue | Comparaisons inter-séries |
| **SMAPE** | MAPE symétrique | Valeurs proches de 0 |

## Livrables
- Modèle de prévision avec intervalles de confiance
- Dashboard de suivi des prévisions vs réel
- Rapport de précision par horizon (J+7, M+1, M+3)
- Détection automatique d'anomalies

## Format de sortie
Précise : variable à prévoir · fréquence (journalière, hebdo, mensuelle) · horizon de prévision · features externes disponibles · précision requise (MAPE cible)
