# Skill — Visualisation des Données & Dashboarding
> Certifications : Google Advanced Data Analytics · IBM Data Science · Kaggle

## Objectif
Transformer les données et résultats en visualisations claires et actionnables pour les équipes techniques et les décideurs.

## Choisir le bon type de graphique
| Question | Graphique recommandé |
|---|---|
| Distribution d'une variable | Histogramme, Box plot, Violin plot |
| Comparaison entre groupes | Bar chart, Grouped bar, Facets |
| Évolution dans le temps | Line chart, Area chart |
| Corrélation entre 2 variables | Scatter plot, Heatmap |
| Composition (parts d'un tout) | Pie chart (< 5 parts), Treemap, Stacked bar |
| Géographique | Choropleth, Bubble map |
| Importance des features ML | Bar chart horizontal, SHAP summary plot |

## Python — Stack de visualisation 2026
```python
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go

# Style professionnel
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette('husl')

# Graphique interactif (recommandé pour dashboards)
fig = px.scatter(df, x='feature_1', y='target',
                 color='category', size='importance',
                 hover_data=['id', 'label'],
                 title='Feature Importance vs Target')
fig.show()
```

## Dashboard Streamlit (déploiement rapide)
```python
import streamlit as st
import plotly.express as px

st.set_page_config(page_title="ML Dashboard", layout="wide")
st.title("Dashboard Performance Modèle IA")

col1, col2, col3 = st.columns(3)
with col1:
    st.metric("AUC-ROC", "0.923", delta="+0.02")
with col2:
    st.metric("Précision", "87.4%", delta="+1.2%")
with col3:
    st.metric("Rappel", "83.1%", delta="-0.5%")

# Graphique interactif
fig = px.line(df_metrics, x='epoch', y=['train_loss', 'val_loss'])
st.plotly_chart(fig, use_container_width=True)
```

## Outils BI pour les décideurs
| Outil | Usage | Avantage |
|---|---|---|
| **Power BI** | Enterprise Microsoft | Intégration M365, DAX |
| **Tableau** | Visualisation avancée | Drag & drop, storytelling |
| **Looker** | Google Cloud | SQL natif, gouvernance |
| **Metabase** | Open source | Rapide à déployer |
| **Streamlit** | Data scientists | Python natif, ML-ready |

## Principes de Data Viz (Edward Tufte)
- **Data-ink ratio** : maximiser l'info, minimiser l'encre
- **Chart junk** : supprimer décorations inutiles (3D, ombres)
- **Échelles honnêtes** : axes commençant à 0 pour les comparaisons
- **Couleurs accessibles** : palette daltonien-friendly (ColorBrewer)
- **Titre informatif** : dire ce que montre le graphique, pas juste le nom de la variable

## Livrables
- Dashboard interactif (Streamlit / Power BI)
- Rapport visuel (PDF / HTML)
- Bibliothèque de graphiques standards (templates)
- Guide de présentation des résultats ML

## Format de sortie
Précise : audience (technique / métier / CODIR) · données disponibles · outil cible (Python, Power BI, Tableau) · type de rapport (ad hoc / temps réel / automatisé)
