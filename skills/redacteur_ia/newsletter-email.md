# Skill — Newsletter & Email Marketing IA
> Certifications : HubSpot Email Marketing · HubSpot Content Marketing

## Objectif
Concevoir et produire des newsletters et campagnes email performantes, personnalisées par l'IA pour maximiser l'engagement et les conversions.

## Anatomie d'une newsletter performante
```
[Objet]       → 40-60 caractères, personnalisé, curiosité ou valeur
[Préheader]   → 85-100 caractères, complément de l'objet

[Header]      → Logo + titre de la newsletter
[Hook]        → 1-2 phrases qui justifient de lire
[Corps]       → 3 sections max (texte court + visuel)
[CTA]         → 1 seul bouton, action claire
[Footer]      → Liens légaux, désinscription, réseaux sociaux
```

## Formules d'objet qui convertissent
| Formule | Exemple | Quand l'utiliser |
|---|---|---|
| **Chiffre** | "5 outils IA que j'utilise chaque jour" | Listes, tops |
| **Question** | "Votre équipe est-elle prête pour l'AI Act ?" | Engagement, problème |
| **Curiosité** | "Ce que personne ne vous dit sur les LLMs" | Thought leadership |
| **Urgence** | "Dernier jour : webinaire IA gratuit" | Événement, offre |
| **Personnalisation** | "[Prénom], votre roadmap IA de mai" | Automation, nurturing |

## Prompt email marketing IA
```
"Écris un email de [type : bienvenue / nurturing / promotion / réengagement]
pour [audience : nouveaux abonnés / leads chauds / clients inactifs].
Objectif : [action attendue].
Ton : [professionnel / conversationnel / expert].
Longueur : [150-300 mots].
Inclure :
  - Objet + préheader accrocheurs
  - Hook personnalisé
  - Valeur principale (1 idée forte)
  - CTA unique et clair"
```

## Séquences email automatisées (types)
| Séquence | Emails | Durée | Objectif |
|---|---|---|---|
| Onboarding | 5 emails | J0, J1, J3, J7, J14 | Activation |
| Nurturing leads | 4 emails | J0, J3, J7, J14 | Qualification |
| Réengagement | 3 emails | J0, J7, J14 | Reconquête |
| Post-achat | 3 emails | J0, J3, J14 | Satisfaction + upsell |

## KPIs email à surveiller
> ⚠️ **Ordres de grandeur indicatifs**, à recalibrer selon l'outil, le secteur et la qualité de la base. Les taux d'ouverture sont fortement biaisés à la hausse depuis Apple Mail Privacy Protection (préchargement automatique des images) — privilégier le **CTOR (click-to-open rate)** comme signal d'engagement fiable. Sources de référence à jour : benchmarks Mailchimp / HubSpot / Brevo (2025).

| KPI | Ordre de grandeur B2B | Ordre de grandeur B2C |
|---|---|---|
| Taux d'ouverture *(biaisé Apple MPP)* | 30-45% | 30-40% |
| Taux de clic | 2-4% | 1-3% |
| Taux de conversion | 1-3% | 0,5-2% |
| Taux de désabonnement | < 0,5% | < 0,5% |

## Livrables
- Templates email par type (bienvenue, nurturing, promo)
- Séquence automatisée complète (5 emails)
- Plan de segmentation audience
- Rapport de performance avec recommandations A/B

## Format de sortie
Précise : type d'email · audience · objectif · outil (Mailchimp, HubSpot, Brevo) · ton · contraintes légales (RGPD)

## Anti-patterns
- ❌ **Benchmark présenté comme certitude** — afficher un taux d'ouverture « cible » sans le cadrer en ordre de grandeur ni source → objectifs irréalistes, et biais Apple MPP ignoré.
- ❌ **Plusieurs CTA concurrents** — multiplier les boutons → dilution, chute du taux de clic. Un email = un CTA principal.
- ❌ **Objet trompeur (clickbait)** — promesse non tenue dans le corps → désabonnements et perte de confiance.
- ❌ **Pas de segmentation** — même message à toute la base → pertinence faible, délivrabilité dégradée.
- ❌ **RGPD négligé** — absence de consentement explicite, de lien de désinscription clair ou de mentions légales → non-conformité (RGPD, ePrivacy).

## Sources
- **Mailchimp** — *Email Marketing Benchmarks by Industry* (mis à jour annuellement) — ordres de grandeur par secteur
- **HubSpot** — *Email Marketing Benchmarks* (2025) — open/click rates B2B/B2C
- **Apple** — *Mail Privacy Protection* (iOS 15+, 2021) — préchargement des images, biais des taux d'ouverture
- **CNIL** — *Prospection commerciale par email* (guides 2024) — consentement, opt-in, désinscription (RGPD / ePrivacy)

## Voir aussi
- [copywriting-ia.md](copywriting-ia.md) — formules persuasives pour objets et corps d'email
- [content-strategy.md](content-strategy.md) — calendrier éditorial et pilier « fidéliser »
- [seo-content.md](seo-content.md) — réutilisation du contenu web en newsletter
- [redaction-email-pro.md](redaction-email-pro.md) — emails transactionnels et professionnels (≠ marketing)
