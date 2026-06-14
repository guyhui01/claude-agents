# Skill — Data Visualization & Dashboarding
> Certifications: Google Advanced Data Analytics · IBM Data Science · Kaggle

## Objective
Turn data and results into clear, actionable visualizations for technical teams and decision-makers.

## Choosing the right chart type
| Question | Recommended chart |
|---|---|
| Distribution of a variable | Histogram, Box plot, Violin plot |
| Comparison between groups | Bar chart, Grouped bar, Facets |
| Evolution over time | Line chart, Area chart |
| Correlation between 2 variables | Scatter plot, Heatmap |
| Composition (parts of a whole) | Pie chart (< 5 parts), Treemap, Stacked bar |
| Geographic | Choropleth, Bubble map |
| ML feature importance | Horizontal bar chart, SHAP summary plot |

## Python — 2026 visualization stack
```python
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go

# Professional style
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette('husl')

# Interactive chart (recommended for dashboards)
fig = px.scatter(df, x='feature_1', y='target',
                 color='category', size='importance',
                 hover_data=['id', 'label'],
                 title='Feature Importance vs Target')
fig.show()
```

## Streamlit dashboard (quick deployment)
```python
import streamlit as st
import plotly.express as px

st.set_page_config(page_title="ML Dashboard", layout="wide")
st.title("AI Model Performance Dashboard")

col1, col2, col3 = st.columns(3)
with col1:
    st.metric("AUC-ROC", "0.923", delta="+0.02")
with col2:
    st.metric("Precision", "87.4%", delta="+1.2%")
with col3:
    st.metric("Recall", "83.1%", delta="-0.5%")

# Interactive chart
fig = px.line(df_metrics, x='epoch', y=['train_loss', 'val_loss'])
st.plotly_chart(fig, use_container_width=True)
```

## BI tools for decision-makers
| Tool | Use | Advantage |
|---|---|---|
| **Power BI** | Microsoft enterprise | M365 integration, DAX |
| **Tableau** | Advanced visualization | Drag & drop, storytelling |
| **Looker** | Google Cloud | Native SQL, governance |
| **Metabase** | Open source | Fast to deploy |
| **Streamlit** | Data scientists | Native Python, ML-ready |

## Data Viz principles (Edward Tufte)
- **Data-ink ratio**: maximize the info, minimize the ink
- **Chart junk**: remove useless decorations (3D, shadows)
- **Honest scales**: axes starting at 0 for comparisons
- **Accessible colors**: colorblind-friendly palette (ColorBrewer)
- **Informative title**: say what the chart shows, not just the variable name

## Deliverables
- Interactive dashboard (Streamlit / Power BI)
- Visual report (PDF / HTML)
- Standard chart library (templates)
- ML results presentation guide

## Output format
Specify: audience (technical / business / leadership) · available data · target tool (Python, Power BI, Tableau) · report type (ad hoc / real-time / automated)
