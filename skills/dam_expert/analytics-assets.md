# Skill — Analytics & Performance des Assets Digitaux
> Certifications : Bynder Certified Partner · Widen Certified DAM Specialist · Henry Stewart DAM Practitioner

## Objectif
Mesurer et analyser l'usage et la performance des assets digitaux : suivi des téléchargements, de la réutilisation par canal, du ROI des assets, des zones géographiques d'usage et des comportements de recherche — pour justifier les investissements de production et prioriser les créations futures.

## Framework d'analytics assets (4 axes)

```
AXE 1 — USAGE & ADOPTION
  □ Volume de téléchargements par asset, type, marque, période
  □ Taux de réutilisation (nb canaux où l'asset est utilisé)
  □ Utilisateurs actifs vs inactifs (adoption de la plateforme)
  □ Recherches sans résultat (gaps dans le catalogue d'assets)
  □ Temps moyen pour trouver un asset (efficacité de la taxonomie)

AXE 2 — PERFORMANCE PAR CANAL
  □ Assets les plus utilisés par canal (web, print, social, e-com)
  □ Formats les plus demandés (JPEG vs WebP vs SVG vs TIFF)
  □ Corrélation asset → performance canal (taux de clic, conversion)
  □ Assets sur-sollicités vs sous-utilisés (rééquilibrage production)

AXE 3 — CYCLE DE VIE & DROITS
  □ Assets approchant l'expiration des droits (J-90/J-30)
  □ Assets expirés encore utilisés (risque légal)
  □ Taux d'assets archivés vs actifs (santé du catalogue)
  □ Délai moyen création → publication (time-to-asset)

AXE 4 — PRODUCTION & ROI
  □ Coût de production par asset (si données studio disponibles)
  □ ROI par asset = (nb réutilisations × coût évité) / coût production
  □ Assets jamais utilisés après production (gaspillage budget)
  □ Top assets générateurs de valeur (base pour briefs futurs)
```

## Dashboard analytics DAM — Template

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  DAM ANALYTICS — Mai 2026                                                      │
├─────────────────────────────┬──────────────┬────────────┬──────────────────────┤
│  INDICATEUR                 │  VALEUR      │  CIBLE     │  vs mois précédent   │
├─────────────────────────────┼──────────────┼────────────┼──────────────────────┤
│  Assets actifs              │  24 350      │  —         │  ▲ +412              │
│  Téléchargements / mois     │  8 720       │  ≥ 7 000   │  ▲ +18%              │
│  Utilisateurs actifs        │  186 / 230   │  ≥ 80%     │  81%                 │
│  Taux réutilisation moyen   │  4.2 canaux  │  ≥ 3       │  ▲ +0.3              │
│  Assets expiration J-30     │  23 assets   │  ≤ 10      │  ⚠️ Action requise   │
│  Recherches sans résultat   │  127 / mois  │  ≤ 50      │  ▼ -12% (en baisse)  │
│  Time-to-asset              │  3.1 jours   │  ≤ 2 jours │  ▼ amélioration req. │
├─────────────────────────────┴──────────────┴────────────┴──────────────────────┤
│  🏆 TOP 3 ASSETS : photo_packshot_prodX · video_hero_marque · logo_marque_rgb  │
│  🔍 TOP RECHERCHES SANS RÉSULTAT : "packshot automne", "photo équipe 2026"      │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Requêtes analytics Bynder API (Python)

```python
import requests

BYNDER_URL = "https://[brand].getbynder.com/api/v4"
TOKEN = "Bearer <token>"

def get_top_downloaded_assets(period_days: int = 30, limit: int = 20) -> list:
    """Retourne les N assets les plus téléchargés sur la période"""
    response = requests.get(
        f"{BYNDER_URL}/media/",
        headers={"Authorization": TOKEN},
        params={
            "orderBy": "downloads",
            "orderDir": "desc",
            "limit": limit,
            "modifiedAfter": (date.today() - timedelta(days=period_days)).isoformat()
        }
    )
    return response.json().get("media", [])

def get_unused_assets(days_without_download: int = 180) -> list:
    """Retourne les assets jamais téléchargés depuis N jours"""
    response = requests.get(
        f"{BYNDER_URL}/media/",
        headers={"Authorization": TOKEN},
        params={"dateModifiedBefore": (date.today() - timedelta(days=days_without_download)).isoformat()}
    )
    return [a for a in response.json().get("media", []) if a.get("downloads", 0) == 0]
```

## Livrables
- Framework d'analytics assets (indicateurs, formules, sources de données)
- Dashboard DAM analytics (Power BI / natif DAM / Metabase)
- Rapport mensuel performance assets (top assets, gaps, expirations)
- Rapport ROI assets (coût production vs valeur générée)
- Recommandations production (quels assets manquent, lesquels surproduire)
- Alertes automatiques (expirations, assets jamais utilisés, recherches sans résultat)

## Format de sortie
Précise : **DAM utilisé** et son API analytics (Bynder, Widen, AEM…), **outil BI disponible** (Power BI, Tableau, natif…), **fréquence de reporting** (hebdo, mensuel, CODIR), **types d'assets** prioritaires à suivre, **données de coût de production** disponibles (pour calcul ROI).

## Anti-patterns
- ❌ **Vanity metrics** : ne suivre que le volume de téléchargements sans réutilisation ni ROI → axer sur la valeur (réutilisation, coût évité)
- ❌ **Pas de suivi des expirations de droits** : assets expirés encore diffusés → alertes J-90/J-30 (cf. `gestion-droits-licences.md`)
- ❌ **Ignorer les recherches sans résultat** : les gaps du catalogue restent invisibles → les exploiter pour prioriser la production
- ❌ **ROI sans coût de production** : le calcul devient factice → collecter les coûts studio en amont
- ❌ **Dashboard sans cible** : chiffres non actionnables → chaque KPI assorti d'un seuil + d'une action
- ❌ **Métriques en silo** (DAM seul, sans corrélation canal) : impossible de relier asset → performance business

## Sources
- **Bynder Analytics API** (v4) — developer.bynder.com · **Widen / AEM Assets** reporting — documentation éditeurs
- **DAM KPIs** (asset reuse rate, time-to-asset, findability) — Henry Stewart DAM / *DAM Maturity Model* (DAM Foundation) — damfoundation.org
- **ROI assets** = (réutilisations × coût de production évité) / coût de production — KPI sectoriel DAM (à calibrer)

## Voir aussi
- [`gouvernance-dam.md`](gouvernance-dam.md) — scorecard de gouvernance alimentée par ces métriques
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — suivi des expirations de droits
- [`taxonomie-assets.md`](taxonomie-assets.md) — les recherches sans résultat révèlent les gaps de taxonomie
- [`dam-augmente-ia.md`](dam-augmente-ia.md) — auto-tagging réduisant les recherches sans résultat
