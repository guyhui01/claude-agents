# Skill — Digital Asset Analytics & Performance
> Certifications: Bynder Certified Partner · Widen Certified DAM Specialist · Henry Stewart DAM Practitioner

## Objective
Measure and analyze digital asset usage and performance: download tracking, per-channel reuse, asset ROI, geographic usage zones and search behavior — to justify production investments and prioritize future creations.

## Asset analytics framework (4 axes)

```
AXIS 1 — USAGE & ADOPTION
  □ Download volume per asset, type, brand, period
  □ Reuse rate (# of channels where the asset is used)
  □ Active vs inactive users (platform adoption)
  □ No-result searches (gaps in the asset catalog)
  □ Average time to find an asset (taxonomy effectiveness)

AXIS 2 — PERFORMANCE BY CHANNEL
  □ Most-used assets per channel (web, print, social, e-com)
  □ Most-requested formats (JPEG vs WebP vs SVG vs TIFF)
  □ Asset → channel performance correlation (click-through, conversion)
  □ Over-used vs under-used assets (production rebalancing)

AXIS 3 — LIFECYCLE & RIGHTS
  □ Assets nearing rights expiration (D-90/D-30)
  □ Expired assets still in use (legal risk)
  □ Archived vs active asset rate (catalog health)
  □ Average creation → publishing time (time-to-asset)

AXIS 4 — PRODUCTION & ROI
  □ Production cost per asset (if studio data available)
  □ ROI per asset = (# reuses × cost avoided) / production cost
  □ Assets never used after production (budget waste)
  □ Top value-generating assets (basis for future briefs)
```

## DAM analytics dashboard — Template

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  DAM ANALYTICS — May 2026                                                      │
├─────────────────────────────┬──────────────┬────────────┬──────────────────────┤
│  INDICATOR                  │  VALUE       │  TARGET    │  vs previous month   │
├─────────────────────────────┼──────────────┼────────────┼──────────────────────┤
│  Active assets              │  24,350      │  —         │  ▲ +412              │
│  Downloads / month          │  8,720       │  ≥ 7,000   │  ▲ +18%              │
│  Active users               │  186 / 230   │  ≥ 80%     │  81%                 │
│  Average reuse rate         │  4.2 channels│  ≥ 3       │  ▲ +0.3              │
│  Assets expiring D-30       │  23 assets   │  ≤ 10      │  ⚠️ Action required  │
│  No-result searches         │  127 / month │  ≤ 50      │  ▼ -12% (declining)  │
│  Time-to-asset              │  3.1 days    │  ≤ 2 days  │  ▼ improvement req.  │
├─────────────────────────────┴──────────────┴────────────┴──────────────────────┤
│  🏆 TOP 3 ASSETS: photo_packshot_prodX · video_hero_brand · logo_brand_rgb     │
│  🔍 TOP NO-RESULT SEARCHES: "autumn packshot", "team photo 2026"                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Bynder API analytics queries (Python)

```python
import requests

BYNDER_URL = "https://[brand].getbynder.com/api/v4"
TOKEN = "Bearer <token>"

def get_top_downloaded_assets(period_days: int = 30, limit: int = 20) -> list:
    """Return the N most-downloaded assets over the period"""
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
    """Return assets never downloaded in the last N days"""
    response = requests.get(
        f"{BYNDER_URL}/media/",
        headers={"Authorization": TOKEN},
        params={"dateModifiedBefore": (date.today() - timedelta(days=days_without_download)).isoformat()}
    )
    return [a for a in response.json().get("media", []) if a.get("downloads", 0) == 0]
```

## Deliverables
- Asset analytics framework (indicators, formulas, data sources)
- DAM analytics dashboard (Power BI / native DAM / Metabase)
- Monthly asset performance report (top assets, gaps, expirations)
- Asset ROI report (production cost vs value generated)
- Production recommendations (which assets are missing, which to over-produce)
- Automatic alerts (expirations, never-used assets, no-result searches)

## Output format
Specify: **DAM used** and its analytics API (Bynder, Widen, AEM…), **available BI tool** (Power BI, Tableau, native…), **reporting frequency** (weekly, monthly, leadership), priority **asset types** to track, available **production cost data** (for ROI calculation).

## Anti-patterns
- ❌ **Vanity metrics**: tracking only download volume with no reuse or ROI → focus on value (reuse, cost avoided)
- ❌ **No rights-expiration tracking**: expired assets still distributed → D-90/D-30 alerts (cf. `gestion-droits-licences.md`)
- ❌ **Ignoring no-result searches**: catalog gaps stay invisible → use them to prioritize production
- ❌ **ROI without production cost**: the calculation becomes fake → collect studio costs upfront
- ❌ **Dashboard with no target**: non-actionable numbers → every KPI with a threshold + action
- ❌ **Siloed metrics** (DAM only, no channel correlation): impossible to link asset → business performance

## Sources
- **Bynder Analytics API** (v4) — developer.bynder.com · **Widen / AEM Assets** reporting — vendor documentation
- **DAM KPIs** (asset reuse rate, time-to-asset, findability) — Henry Stewart DAM / *DAM Maturity Model* (DAM Foundation) — damfoundation.org
- **Asset ROI** = (reuses × production cost avoided) / production cost — DAM sector KPI (to calibrate)

## See also
- [`gouvernance-dam.md`](gouvernance-dam.md) — governance scorecard fed by these metrics
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights-expiration tracking
- [`taxonomie-assets.md`](taxonomie-assets.md) — no-result searches reveal taxonomy gaps
- [`dam-augmente-ia.md`](dam-augmente-ia.md) — auto-tagging reducing no-result searches
