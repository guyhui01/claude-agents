# Skill — Earned Value Management (EVM) pour Projets IA
> Certifications : PMP (PMI 2026), PMI-SP (Scheduling Professional), PMI-ACP, Certified Agile Value Engineer

## Objectif
Piloter l'avancement réel d'un projet IA avec les indicateurs EVM — détecter tôt les dérives de coût et de planning, forecaster la date et le coût de fin, et présenter les données au Steering Committee.

## Concepts & Formules EVM

### Les 3 grandeurs fondamentales

```
EARNED VALUE MANAGEMENT — CALCUL
─────────────────────────────────────────────────────────────
PV  (Planned Value)    = BAC × % planifié à date
     → Ce que nous DEVIONS dépenser pour le travail planifié

EV  (Earned Value)     = BAC × % travail réellement réalisé
     → Ce que nous AVONS PRODUIT (en valeur)

AC  (Actual Cost)      = Coûts réels dépensés à date
     → Ce que nous AVONS DÉPENSÉ

BAC (Budget At Completion) = Budget total du projet
```

### Calculs EVM complets

```python
# evm_calculator.py
from dataclasses import dataclass
from typing import Optional
import math

@dataclass
class EVMSnapshot:
    """Snapshot EVM à un instant T."""
    project_name: str
    date: str
    bac: float          # Budget At Completion
    pv: float           # Planned Value
    ev: float           # Earned Value
    ac: float           # Actual Cost
    eac_method: str = "CPI"  # Méthode de prévision EAC

    # ── Variances ──────────────────────────────────────────
    @property
    def cv(self) -> float:
        """Cost Variance = EV - AC. Négatif = dépassement."""
        return self.ev - self.ac

    @property
    def sv(self) -> float:
        """Schedule Variance = EV - PV. Négatif = retard."""
        return self.ev - self.pv

    # ── Indices de performance ──────────────────────────────
    @property
    def cpi(self) -> float:
        """Cost Performance Index. < 1 = dépassement de coût."""
        return self.ev / self.ac if self.ac else float("inf")

    @property
    def spi(self) -> float:
        """Schedule Performance Index. < 1 = en retard."""
        return self.ev / self.pv if self.pv else float("inf")

    # ── Prévisions ─────────────────────────────────────────
    @property
    def eac(self) -> float:
        """Estimate At Completion — prévision du coût final."""
        if self.eac_method == "CPI":
            # Hypothèse : performance future = performance passée (pessimiste)
            return self.bac / self.cpi
        elif self.eac_method == "ACTUAL":
            # Hypothèse : le reste sera fait au budget (optimiste)
            return self.ac + (self.bac - self.ev)
        elif self.eac_method == "CPI_SPI":
            # Combinaison coût et planning (réaliste)
            return self.ac + (self.bac - self.ev) / (self.cpi * self.spi)
        return self.bac

    @property
    def etc(self) -> float:
        """Estimate To Complete = EAC - AC."""
        return self.eac - self.ac

    @property
    def vac(self) -> float:
        """Variance At Completion = BAC - EAC. Négatif = dépassement prévu."""
        return self.bac - self.eac

    @property
    def tcpi(self) -> float:
        """To-Complete Performance Index — efficacité requise pour finir dans budget.
        > 1.1 = très difficile, > 1.2 = pratiquement impossible
        """
        remaining_work = self.bac - self.ev
        remaining_budget = self.bac - self.ac
        return remaining_work / remaining_budget if remaining_budget else float("inf")

    @property
    def percent_complete(self) -> float:
        """Avancement réel (EV-based)."""
        return (self.ev / self.bac) * 100 if self.bac else 0

    def summary(self) -> dict:
        return {
            "project": self.project_name,
            "date": self.date,
            # Avancement
            "percent_complete": f"{self.percent_complete:.1f}%",
            # Budget
            "bac": f"€{self.bac:,.0f}",
            "ac":  f"€{self.ac:,.0f}",
            "ev":  f"€{self.ev:,.0f}",
            "pv":  f"€{self.pv:,.0f}",
            # Variances
            "cv":  f"€{self.cv:,.0f} ({'OK' if self.cv >= 0 else 'DEPASSEMENT'})",
            "sv":  f"€{self.sv:,.0f} ({'OK' if self.sv >= 0 else 'RETARD'})",
            # Indices
            "cpi": f"{self.cpi:.3f} ({'OK' if self.cpi >= 1 else 'ALERTE'})",
            "spi": f"{self.spi:.3f} ({'OK' if self.spi >= 1 else 'ALERTE'})",
            # Prévisions
            "eac":  f"€{self.eac:,.0f}",
            "etc":  f"€{self.etc:,.0f}",
            "vac":  f"€{self.vac:,.0f}",
            "tcpi": f"{self.tcpi:.3f} ({'FAISABLE' if self.tcpi <= 1.1 else 'DIFFICILE'})",
        }


# Exemple réel — Projet IA Sprint 6 sur 10
snapshot = EVMSnapshot(
    project_name="Scoring Conversion IA",
    date="2026-05-19",
    bac=180_000,    # Budget total : 180k€
    pv=108_000,     # 60% du planning écoulé → PV = 60% × 180k
    ev=90_000,      # Seulement 50% du travail fait → EV = 50% × 180k
    ac=99_000,      # Coûts réels dépensés : 99k€
    eac_method="CPI",
)

for k, v in snapshot.summary().items():
    print(f"{k:25s} {v}")

# Sortie :
# percent_complete          50.0%
# cpi                       0.909 (ALERTE)  → dépassement coût
# spi                       0.833 (ALERTE)  → 17% de retard
# eac                       €198,000        → prévision finale +10%
# vac                       €-18,000        → dépassement prévu
# tcpi                      1.100 (DIFFICILE) → rattrapage très difficile
```

### Interprétation des indicateurs

| CPI / SPI | Signification | Action |
|-----------|--------------|--------|
| CPI > 1, SPI > 1 | En avance et sous budget | Capitaliser |
| CPI < 1, SPI < 1 | En retard et en dépassement | Escalade immédiate |
| CPI < 1, SPI > 1 | En avance mais cher | Revoir les coûts unitaires |
| CPI > 1, SPI < 1 | En retard mais économique | Accélérer sans coût |

### Reporting EVM Simplifié (Agile EVM)

```python
# agile_evm.py — EVM adapté aux sprints
def agile_evm_from_sprints(
    sprint_budgets: list[float],        # Budget par sprint
    sprint_velocities: list[float],     # % réalisé par sprint (0-1)
    actual_costs: list[float],          # Coûts réels par sprint
    planned_velocities: list[float],    # % planifié par sprint
) -> dict:
    """Calcule l'EVM Agile à partir des données de sprints."""
    bac = sum(sprint_budgets)
    pv = sum(b * p for b, p in zip(sprint_budgets, planned_velocities))
    ev = sum(b * v for b, v in zip(sprint_budgets, sprint_velocities))
    ac = sum(actual_costs)

    snapshot = EVMSnapshot("Agile Project", "today", bac, pv, ev, ac)
    return snapshot.summary()
```

## Livrables
- Rapport EVM mensuel (tableau CPI/SPI/EAC/VAC)
- Courbes S (PV, EV, AC) sur toute la durée du projet
- Dashboard Excel/Notion avec calculs automatiques
- Analyse des dérives et recommandations correctives
- Prévisions de coût final (3 méthodes EAC comparées)
- Slides Steering Committee : statut EVM en 1 page

## Format de sortie
Précise : budget total (BAC), durée du projet (semaines/sprints), date de référence, données disponibles (PV, EV, AC actuels), méthode de comptabilisation (par sprint, par lot de travail, par jalon), fréquence de reporting.
