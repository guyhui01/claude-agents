# Skill — Time Series & Forecasting
> Certifications: IBM Data Science · DeepLearning.AI ML Specialization · Kaggle

## Objective
Analyze, model and forecast time-based data for sales forecasting, demand and business KPIs.

## Time series decomposition
```python
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt

result = seasonal_decompose(df['value'], model='multiplicative', period=12)
result.plot()

# Components:
# Trend     → Long-term trend
# Seasonal  → Periodic seasonality
# Residual  → Noise / anomalies
```

## Forecasting models — choosing by context
| Model | Advantages | When to use |
|---|---|---|
| **ARIMA / SARIMA** | Interpretable, little data | Stationary series, known seasonality |
| **Prophet (Meta)** | Easy, handles holidays | Business KPIs, irregular data |
| **XGBoost / LightGBM** | Very performant | External features, short horizon |
| **LSTM / Transformer** | Long-term relationships | High frequency, complex relationships |
| **N-BEATS / TFT** | SOTA 2026 | Complex multivariate forecasts |

## Prophet — fast forecasting
```python
from prophet import Prophet
import pandas as pd

# Required format: columns 'ds' (date) and 'y' (value)
df_prophet = df.rename(columns={'date': 'ds', 'sales': 'y'})

model = Prophet(
    seasonality_mode='multiplicative',
    yearly_seasonality=True,
    weekly_seasonality=True,
    holidays=pd.DataFrame(...)  # French public holidays
)
model.fit(df_prophet)

# 12-month forecast
future = model.make_future_dataframe(periods=365)
forecast = model.predict(future)
model.plot(forecast)
```

## Features for ML models on time series
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
        df[f'lag_{lag}'] = df['value'].shift(lag)

    # Rolling features
    for window in [7, 30, 90]:
        df[f'rolling_mean_{window}'] = df['value'].rolling(window).mean()
        df[f'rolling_std_{window}'] = df['value'].rolling(window).std()

    return df
```

## Forecast evaluation metrics
| Metric | Description | When to use |
|---|---|---|
| **MAE** | Mean absolute error | Always (interpretable) |
| **RMSE** | Root mean squared error | Penalizes large errors |
| **MAPE** | Absolute % error | Cross-series comparisons |
| **SMAPE** | Symmetric MAPE | Values close to 0 |

## Deliverables
- Forecasting model with confidence intervals
- Forecast vs actual tracking dashboard
- Accuracy report per horizon (D+7, M+1, M+3)
- Automatic anomaly detection

## Output format
Specify: variable to forecast · frequency (daily, weekly, monthly) · forecast horizon · available external features · required accuracy (target MAPE)
