# Audit qualité — Groupe CMS/PIM/DAM (grille v2.8 §3.4 Dev/CMS)
> Date : 2026-06-01 · Modèle : claude-opus-4-8 · Auditeur : AGENT-AUDIT-METHODO-IA (skill `audit-qualite-catalogue.md`)
> Périmètre : CMS-DIGITAL (12) + PIM-EXPERT (12) + DAM-EXPERT (12) = **36 skills** (différenciateur CV historique Guy : AEM, Drupal, Akeneo, SAP Hybris, Bynder)

## 1. Synthèse (verdict global)

**Profil dominant : « riche mais non sourcé »** — identique au cluster delivery (CHEF-PROJET/FINANCIAL) avant son V1+ de v3.14.0. Le contenu est **factuellement juste et très actionnable**, mais la **couche D3 est quasi absente** (Sources / Anti-patterns / Cross-links) et le **versioning des outils manque** (D1).

- **0 erreur factuelle majeure** détectée (≠ incident `roi-transformation`).
- **1 ✓ pur** : `dam_expert/gestion-droits-licences.md` (sources légales exactes — gabarit de référence).
- **~35 P1 mécaniques** → traitement **V1+ de masse** (Sources + Anti-patterns + Cross-links + versioning), ~10-15 min/skill.
- **2-3 candidats V2** (différenciateurs, contenu à approfondir) : `pim-augmente-ia`, `dam-augmente-ia` (+ éventuellement `architecture-cms`).

Diagnostic 80/20 : un V1+ batch traite mécaniquement l'essentiel ; réserver la V2 aux différenciateurs réels (règles 1 & 4 — densité / anti usine à gaz).

## 2. Méthode

- Groupe **Dev/CMS**, déclinaison **§3.4** (Akeneo, GS1, Bynder, IPTC/XMP/IIIF, WCAG 2.2, Core Web Vitals, AEM 6.5+, Drupal 10/11, MACH, Atomic Design…).
- Extraction factuelle déléguée à **3 sous-agents Explore** (1 par agent, brief standard §3.1, sans cotation).
- Cotation D1/D2/D3 par l'expert principal. Aucune erreur factuelle affirmée sans preuve ; les versions/dates à publier en V1+ feront l'objet d'un **WebSearch préalable** (règle `feedback_verification_factuelle`).

## 3. Tableau de cotation (synthèse par sous-groupe)

### CMS-DIGITAL (12) — §3.4
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| accessibilite-numerique | ⚠ | ✓ | ✗ | P1 (RGAA/WCAG sans dates précises, 0 source/anti-pattern) |
| aem-sites-assets | ⚠ | ✓ | ✗ | P1 (versions AEM/Maven/HTL absentes) |
| architecture-cms | ⚠ | ✓ | ⚠ | P1 → **candidat V2** (MACH/DXP, Forrester Wave à sourcer) |
| cms-headless | ⚠ | ✓ | ✗ | P1 (Next.js/Strapi/Contentful sans versions) |
| drupal-developpement | ✓ | ✓ | ✗ | P1 (Drupal 10 OK ; 0 source/anti-pattern/cross-link) |
| gouvernance-editoriale | ⚠ | ✓ | ✗ | P1 |
| integration-pim-dam | ⚠ | ✓ | ✗ | P1 (mention Ooyala — vérifier pertinence 2026) |
| migration-cms | ⚠ | ✓ | ✗ | P1 (Drupal 7/AEM 6.5 en contexte migration — OK si daté) |
| performance-web | ✓ | ✓ | ⚠ | P1 (Core Web Vitals INP 2024 OK ; sources web.dev à citer) |
| personnalisation-segmentation | ⚠ | ✓ | ✗ | P1 |
| rebranding-digital | ⚠ | ✓ | ✗ | P1 |
| seo-technique-cms | ⚠ | ✓ | ✗ | P1 |

### PIM-EXPERT (12) — §3.4
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| enrichissement-produit | ⚠ | ✓ | ✗ | P1 (Akeneo sans version) |
| gouvernance-donnees-produit | ⚠ | ✓ | ⚠ | P1 (DAMA-DMBOK2 2017 à dater ; GS1/Schema.org à expliciter) |
| integration-erp-pim | ⚠ | ✓ | ✗ | P1 (SAP S/4HANA, Talend, MuleSoft sans versions) |
| kpis-catalogue | ⚠ | ✓ | ⚠ | P1 (seuils non sourcés) |
| localisation-i18n | ⚠ | ✓ | ✗ | P1 (« SI standards » → ISO 80000 ; BLEU non sourcé) |
| migration-pim | ⚠ | ✓ | ✗ | P1 |
| modelisation-catalogue | ⚠ | ✓ | ✗ | P1 (GS1/Schema.org Product absents de la modélisation) |
| onboarding-donnees-produit | ⚠ | ✓ | ✗ | P1 (GTIN vs EAN-13 à préciser ; ETIM à sourcer) |
| pim-augmente-ia | ⚠ | ✓ | ✗ | P1 → **candidat V2** (gains % non sourcés, gouvernance IA à approfondir) |
| portail-fournisseurs | ⚠ | ✓ | ✗ | P1 (SSO → SAML 2.0/OIDC à préciser ; RGPD fournisseurs) |
| scoring-qualite-produit | ⚠ | ✓ | ✗ | P1 (pénalités sans base) |
| syndication-canaux | ⚠ | ✓ | ✗ | P1 (Amazon SP-API, EANCOM/EDIFACT versions ; GS1 GTIN-13/14) |

### DAM-EXPERT (12) — §3.4
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| analytics-assets | ⚠ | ✓ | ✗ | P1 (Bynder API v4 sans date ; ROI non sourcé) |
| brand-portal | ⚠ | ✓ | ✗ | P1 (Brandfolder éditeur ; SSO vague) |
| dam-augmente-ia | ⚠ | ✓ | ✗ | P1 → **candidat V2** (« 95 % tags » non sourcé, gouvernance IA) |
| distribution-multicanal | ⚠ | ✓ | ✗ | P1 (profils couleur/DPI non sourcés) |
| **gestion-droits-licences** | ✓ | ✓ | ✓ | **✓ pur** (gabarit de référence légal) |
| gouvernance-dam | ⚠ | ✓ | ✗ | P1 (CDMP/DAMA à expliciter ; durées archivage) |
| integration-dam-cms | ⚠ | ✓ | ✗ | P1 (SDK Bynder/Cloudinary sans versions) |
| migration-dam | ⚠ | ✓ | ⚠ | P1 (Dublin Core/XMP à sourcer ; 1 cross-link informel) |
| naming-convention | ⚠ | ✓ | ⚠ | P1 (a déjà un tableau anti-pattern ; IPTC Core sans n° ; ISO 8601 implicite) |
| taxonomie-assets | ⚠ | ✓ | ⚠ | P1 (DC/EXIF/XMP/IPTC détaillés mais sans versions/liens) |
| transformation-formats | ⚠ | ✓ | ⚠ | P1 (métriques « WebP -30 % » empiriques ; profil ISO coated imprécis) |
| workflow-validation-assets | ⚠ | ✓ | ✗ | P1 (BPMN sans version OMG 2.0.2 ; SLA arbitraires) |

## 4. Findings P1 (transversaux — traitement V1+ mécanique)

Mêmes 4 manques récurrents sur ~35 skills :
1. **`## Sources` absente** (~35/36) — ajouter sources officielles datées (drupal.org, akeneo.com, bynder.com, w3.org/wcag, iptc.org, gs1.org, web.dev/vitals…).
2. **`## Anti-patterns` absente** (~34/36) — 3-5 anti-patterns/skill par sous-domaine.
3. **`## Voir aussi` absente** (~35/36) — cross-links intra-groupe (CMS↔PIM↔DAM, ex. `integration-pim-dam` ↔ `pim_expert/syndication-canaux` ↔ `dam_expert/integration-dam-cms`).
4. **Versioning D1** — dater/versionner les outils (Akeneo, Bynder, Cloudinary, Contentful, AEM, Next.js…) et standards (WCAG 2.2 W3C 2023, IPTC Core 1.x, BPMN 2.0.2 OMG, GS1).

> ⚠️ Chaque version/date publiée en V1+ exige un **WebSearch préalable** (versions courantes mi-2026 : Drupal 11, AEM as a Cloud Service, Akeneo PIM, Core Web Vitals INP depuis mars 2024…).

## 5. Findings P2 (à approfondir — candidats V2)

- **`pim-augmente-ia`** + **`dam-augmente-ia`** : gains chiffrés non sourcés (« 80 % temps rédaction », « 95 % tags pertinents ») → remplacer par benchmarks sourcés ou requalifier en fourchettes prudentes ; approfondir gouvernance IA (AI Act art. 50 transparence GenAI + ISO 42001 + validation humaine). **Cœur du positionnement « PO/MOA AI augmenté ».**
- **`architecture-cms`** (optionnel) : MACH/DXP + Forrester Wave DXP + Atomic Design (Frost 2016) — différenciateur conseil.

## 6. Findings P3

- Exemples avec dates « 2026 » présentées comme futures (`kpis-catalogue`, `scoring-qualite-produit`) — anachronisme léger résolu a posteriori (on est en juin 2026), à neutraliser en relatif.
- Diagrammes en ASCII (0 Mermaid) — cosmétique, non prioritaire.

## 7. Constats transversaux

- **Homogénéité structurelle** : le groupe a été produit sur un même moule (forte actionabilité, D3 systématiquement omise) → le V1+ de masse est mécaniquement efficace, comme sur le cluster delivery.
- **`gestion-droits-licences` = preuve par l'exemple** que la barre ✓ est atteignable dans ce groupe → sert de gabarit (sources légales/articles/dates).
- **Standards metadata sous-exploités côté liens** : IPTC/XMP/Dublin Core sont cités mais jamais reliés à leur spec datée → gain D1+D3 rapide.

## 8. Métriques de synthèse

- Distribution (36) : **✓ = 1 (3 %)** · **P1 = ~35 (97 %)** · P0 = 0.
- % avec certification déclarée : **100 %** (mais PIM : certs non datées).
- % avec `## Sources` : **~3 %** · `## Anti-patterns` : **~6 %** · `## Voir aussi` : **~3 %**.
- % avec exemple chiffré sectoriel anonymisé : **faible** (la plupart fictifs/génériques).

## 9. Plan d'action recommandé

| Priorité | Action | Vague | Budget |
|---|---|:---:|---|
| **P1** | V1+ mécanique batch sur ~35 skills (Sources + Anti-patterns + Cross-links + versioning), WebSearch préalable des versions | V1+ | ~3 sous-lots (CMS / PIM / DAM), 1 commit/sous-lot |
| **P2** | V2 profonde `pim-augmente-ia` + `dam-augmente-ia` (benchmarks sourcés + gouvernance IA) | V2 | 1,5-2h/skill |
| P3 | `architecture-cms` V2 (MACH/DXP) — optionnel | V2 | si mission ciblée |

**Séquençage proposé** : V1+ DAM d'abord (gabarit `gestion-droits-licences` déjà disponible) → PIM → CMS ; puis V2 des 2 « augmenté-IA ». 1 release minor par vague.

## 10. Validation Guy

- [ ] Diagnostic « riche non sourcé » + V1+ de masse validé ?
- [ ] Périmètre V1+ : les 35 P1 (hors `gestion-droits-licences` ✓) ?
- [ ] Candidats V2 retenus : `pim-augmente-ia` + `dam-augmente-ia` (+ `architecture-cms` ?) ?
- [ ] Séquençage DAM → PIM → CMS puis V2 ?
