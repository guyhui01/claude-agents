# Skill — Exploratory Data Analysis (EDA)
> Certifications: IBM Data Science · Google Advanced Data Analytics · Kaggle

## Objective
Understand, clean and visualize a dataset to extract insights before any modeling.

## Standard EDA checklist

### 1. Dataset overview
```python
import pandas as pd
import numpy as np

df.shape          # (rows, columns)
df.dtypes         # data types
df.info()         # full overview
df.describe()     # descriptive statistics
df.head(10)       # first records
df.isnull().sum() # missing values
df.duplicated().sum() # duplicates
```

### 2. Missing-value analysis
```python
# Completeness rate per column
missing_rate = df.isnull().mean().sort_values(ascending=False)

# Decision thresholds:
# < 5%  → imputation (median, mean, mode)
# 5-20% → advanced imputation (KNN, regression)
# > 20% → consider dropping the column
```

### 3. Variable distribution
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Numeric variables
df.hist(figsize=(15,10))

# Categorical variables
df['col'].value_counts().plot(kind='bar')

# Outlier detection (IQR)
Q1, Q3 = df['col'].quantile([0.25, 0.75])
IQR = Q3 - Q1
outliers = df[(df['col'] < Q1-1.5*IQR) | (df['col'] > Q3+1.5*IQR)]
```

### 4. Correlations
```python
# Correlation matrix
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')

# Scatter plot of variable pairs
sns.pairplot(df, hue='target')
```

## Questions to answer at the end of the EDA
- What is the overall data quality (score /10)?
- Which features look most predictive of the target?
- Is there class imbalance (classification)?
- Are transformations needed (log, normalization, encoding)?
- Were any anomalies or data errors detected?

## Deliverables
- Complete EDA notebook (Jupyter)
- Data quality report (1 page)
- List of recommended transformations
- Key visualizations (5-10 annotated charts)

## Output format
Specify: dataset (name, size, source) · target variable · problem type (classification, regression, clustering) · business constraints
