# Skill — KPI and Metrics Catalog
> Certifications: PL-300 Microsoft · Tableau Certified Data Analyst (Salesforce) · Google Data Analytics

## Objective
Build and maintain a KPI catalog: define the metrics, their business rules, owners and targets — to guarantee a common language across the company and eliminate contradictory numbers between teams.

## The problem with ungoverned metrics

```
SYMPTOM                         CAUSE                         IMPACT
──────────────────────────────  ────────────────────────────  ─────────────────────────────────
"The leadership figure ≠        Different definitions         Loss of trust in the data
the IT figure"                  (with or without returns?)

"Revenue" has 4 different       No official documented        Contradictory decisions
definitions across teams        business rule

The KPI changed with no notice  No designated owner           Skewed historical comparisons
```

## Structure of a KPI sheet

```markdown
## KPI — Net Revenue

### Identity
- **Official name**: Net Revenue
- **Technical name**: net_revenue
- **Domain**: Finance / Sales
- **Owner**: Chief Financial Officer
- **Data steward**: BI / Data team

### Definition
Total sales amount after deducting discounts, returns and credit notes,
excluding tax, over the selected period.

### Business rule
```
Net Revenue = SUM(gross_revenue) - SUM(discounts) - SUM(returns) - SUM(credit_notes)
Filter   : status IN ('confirmed', 'shipped', 'delivered') [exclude 'cancelled', 'pending']
Tax      : excluding VAT (net amount only)
Currency : EUR by default (converted at the order-date rate)
```

### Data source
- Table: `fact_orders`
- Fields: `gross_revenue`, `discount_amount`, `return_amount`
- Freshness: D-1 (nightly refresh at 2:00 a.m.)

### Scope
- ✅ Included: all confirmed + delivered orders
- ❌ Excluded: cancelled orders, orders awaiting confirmation

### Targets and thresholds
| Period  | Target | Red alert |
|---------|--------|-----------|
| Monthly | +8% vs PY | < -5% vs PY |
| Yearly  | €12M | < €10M |

### Available in
- Power BI: Finance report → "Revenue" page
- DAX measure: `[Net Revenue]`
- dbt model: `marts.finance.fct_revenue` column `net_revenue`
```

## KPI taxonomy by domain

```
SALES DOMAIN
  • Net revenue / Gross revenue / Recurring revenue (MRR/ARR)
  • Conversion rate (Leads → Customers)
  • Average Order Value
  • Customer Acquisition Cost (CAC)
  • Lifetime Value (LTV) — LTV/CAC ratio
  • Customer churn rate

OPERATIONS DOMAIN
  • OTD (On Time Delivery)
  • Stockout rate
  • Average processing time
  • NPS (Net Promoter Score)
  • First Contact Resolution rate (FCR)

FINANCE DOMAIN
  • EBITDA / Gross margin / Net margin
  • DSO (Days Sales Outstanding)
  • Cash burn rate
  • Budget vs Actual (Variance)
  • ROI / ROE / ROCE

HR DOMAIN
  • Turnover rate
  • eNPS (Employee NPS)
  • Average time to hire (TTFH)
  • Absenteeism rate
  • Training: hours / cost per FTE

PRODUCT / DIGITAL DOMAIN
  • MAU / DAU (active users)
  • Retention Rate
  • Time to Value (TTV)
  • Feature adoption rate
  • DORA metrics (DevOps)
```

## KPI prioritization matrix

```
CRITERION         WEIGHT        DESCRIPTION
────────────────  ───────────   ─────────────────────────────────────
Decision impact   40%           Does this KPI change a behavior?
Data reliability  30%           Is the source reliable and fresh?
Usage frequency   20%           How many people consult it?
Calculation ease  10%           Cost to produce the KPI

Total score → Prioritize KPIs > 70/100 for V1
```

## Deliverables
- KPI catalog (complete sheet per metric)
- Data dictionary (official business rules)
- Ownership map (RACI per domain)
- Governance dashboard (KPIs with no owner, no definition)
- New-KPI creation process (form + validation)

## Output format
Specify: **domain** (sales, finance, HR, product…), **audience** (leadership, managers, operations), **number of KPIs** to define, **BI tools used**, **problem to solve** (contradictory numbers? no governance? new leadership report?).
