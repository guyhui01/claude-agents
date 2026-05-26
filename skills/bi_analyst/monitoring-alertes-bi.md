# Skill — Monitoring et Alertes BI
> Certifications : PL-300 Microsoft · DP-600 Fabric · Tableau Certified Data Analyst

## Objectif
Mettre en place un monitoring proactif des KPIs et des alertes BI : seuils d'alerte, abonnements automatiques, anomaly detection — pour que les décideurs soient notifiés en temps réel des dérives importantes.

## Types d'alertes BI

```
TYPE                    DÉCLENCHEUR                    CANAL           LATENCE
──────────────────────  ─────────────────────────────  ──────────────  ─────────────
Seuil fixe             KPI > ou < valeur seuil         Email, Teams    Selon refresh
                       Ex : Taux d'erreur > 2%

Anomalie statistique   Déviation > N écarts-types      Email, Webhook  Selon refresh
                       vs tendance historique

Fraîcheur données      Dataset pas refreshé depuis     Email, Teams    Temps réel
                       X heures (SLA violation)

Budget/Objectif        Budget consommé à > 80%         Email, Slack    Refresh nocturne
                       Objectif à < 70% en mi-période

Drift KPI             Variation > X% vs semaine précéd. Email, Teams   Refresh hebdo
```

## Power BI — Alertes sur tableaux de bord

```
CONFIGURATION DANS POWER BI SERVICE :
  1. Ouvrir un dashboard (pas un rapport)
  2. Cliquer sur une KPI card ou jauge
  3. Gérer les alertes → + Ajouter une règle d'alerte
  4. Configurer :
     □ Condition : Au-dessus de / En dessous de
     □ Seuil : valeur numérique
     □ Fréquence de vérification : 24h / 1h
     □ Email de notification : utilisateur Power BI

LIMITATIONS :
  - Uniquement sur les visuels de type KPI, Gauge, Card
  - Uniquement sur les datasets en mode Import (pas DirectQuery)
  - 1 notification max par heure (évite le spam)
```

## Data Activator (Fabric) — Alertes temps réel

```
# Data Activator permet des alertes sur données en streaming
# ou sur des datasets Fabric sans limite de type de visuel

CONFIGURATION :
  1. Power BI → Right-click sur un visuel → Set alert
  2. Ou via Data Activator directement (Fabric)
  3. Définir la condition (seuil, anomalie, changement d'état)
  4. Définir l'action : Email, Teams, Power Automate flow

# Exemple : Alerte quand le taux de churn hebdomadaire dépasse 3%
Trigger: weekly_churn_rate > 0.03
Action: Send Teams message to #bi-alerts channel
        "⚠️ Alerte Churn : {weekly_churn_rate:P} cette semaine
         vs cible 3% — Voir dashboard Rétention Clients"
```

## Dashboard de monitoring BI — Structure

```
PAGE 1 — SANTÉ DES DONNÉES
  □ Statut de refresh par dataset (✅ OK / ⚠️ En retard / ❌ Échec)
  □ Heure du dernier refresh par dataset
  □ Taux de succès des refreshs sur 30 jours
  □ Volume de données (lignes chargées vs attendues)

PAGE 2 — QUALITÉ DES DONNÉES
  □ Taux de null par colonne clé
  □ Valeurs aberrantes détectées (> 3σ)
  □ Doublons sur les clés primaires
  □ Données en retard (lag vs source)

PAGE 3 — USAGE PLATEFORME BI
  □ Utilisateurs actifs par semaine
  □ Rapports les plus consultés (Top 10)
  □ Datasets les plus utilisés
  □ Temps de chargement moyen par rapport
```

## Anomaly Detection — Power BI

```
VISUEL : Smart Narrative + Anomaly Detection (ligne temporelle)
ACTIVATION : Ajouter le graphique en courbe → Analytics → Détection des anomalies

PARAMÈTRES :
  Sensibilité : 1 (peu sensible) à 100 (très sensible) — recommandé : 85
  Forme : Remplit la zone d'anomalie

DAX pour anomaly detection manuelle :
Z-Score Revenue =
DIVIDE(
    [Net Revenue] - [Revenue Average 90d],
    [Revenue StdDev 90d],
    BLANK()
)
// Z-Score > 2 ou < -2 = anomalie statistique (95% CI)
```

## Power Automate — Alerte personnalisée

```
FLOW : "Alerte BI — Churn Hebdomadaire"

Déclencheur : Recurrence (chaque lundi 9h00)

Action 1 : Power BI — Exécuter requête DAX
  Dataset : "Finance Certifié"
  Requête : EVALUATE { [Weekly Churn Rate] }

Action 2 : Condition
  Si [Weekly Churn Rate] > 0.03

  Branche OUI :
    Envoyer email à bi-alerts@entreprise.fr
    Sujet : "⚠️ Alerte Churn : {WeeklyChurnRate}% cette semaine"
    Corps  : "Le taux de churn de {WeeklyChurnRate}% dépasse le seuil de 3%.
              Dashboard : [lien Power BI]"

  Branche NON : (ne rien faire)
```

## Livrables
- Configuration des alertes sur les KPIs critiques
- Dashboard de monitoring BI (santé données + usage)
- Flows Power Automate (alertes métier personnalisées)
- Matrice des alertes (KPI × seuil × responsable × canal)
- Runbook incidents données (procédure si refresh échoue)
- SLA de fraîcheur documenté par dataset

## Format de sortie
Précise : **outil BI** (Power BI, Tableau, Fabric…), **KPIs à surveiller** et leurs seuils d'alerte, **canaux de notification** (email, Teams, Slack, webhook), **fréquence** (temps réel, horaire, quotidien), **responsables des alertes** (qui reçoit quoi).
