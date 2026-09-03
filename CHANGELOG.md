# Changelog

Tracks every change made in this rebuild, cross-referenced against two source
documents: the technical audit of the original WordPress site, and the
**Ideas in Practice — Solari & Stock: Website Brand Recommendations**
(15 May 2026, "the report"). Status is one of **Done**, **Skipped — needs
Director decision**, or **N/A**.

## Open items — require a Director decision (report §2.4, §3.1.1)

These three are explicitly gated in the report and have **not** been decided
unilaterally. Current treatment is noted; flip on request.

| Item | Report ref | Current treatment |
|---|---|---|
| Final tagline | §3.1.1 | Defaulted to the report's own top-ranked option, **"In Your Best Interests"**, live in the homepage hero, Family Law hero and About Us page. Report's shortlist alternatives: "Expert Law for Complex Life", "Law That Listens". |
| Is mediation an active service? | §2.4 item 1, §3.2 | **Not added.** No mediation section was written on the Family Law page, and the firm descriptor "Lawyers & Mediators" is left untouched. If mediation is active, say so and a mediation section + CTA will be added. |
| "Lawyers" vs "Solicitors" house style | §2.4 item 2 | Left as **"Lawyers"** throughout, matching the live site's current usage. Report's recommended split (Solicitors in formal/bio contexts, Lawyers in marketing copy) not applied. |

## Full rebuild — platform migration (technical audit)

| Change | Status |
|---|---|
| Migrated WordPress + WPBakery + Slider Revolution to Next.js 15 + Tailwind v4, App Router | Done |
| Every page except the blog scraped, rebuilt with real copy and imagery, identical URL slugs preserved for SEO | Done |
| Fixed: Contact page was live, unedited Bridge-theme demo content (fake NY/London offices, lorem ipsum, placeholder phone) — replaced with the real Miranda address/phone from the site's own footer/schema | Done |
| Fixed: Our Services page was live, unedited medical-clinic theme demo content — rebuilt as a real practice-area index | Done |
| Added LocalBusiness/Attorney, Service, Person, BreadcrumbList, FAQPage JSON-LD schema (previously one bare WebSite block sitewide) | Done |
| Added HSTS + standard security headers (next.config.ts) | Done |
| Added persistent mobile call/book bar | Done |
| Contact form: stub API route (`/api/contact`) — needs a real email/CRM destination before launch | Skipped — needs real credentials |
| Online payment page: needs the firm's actual Stripe Payment Link | Skipped — needs real credentials |
| Contact email: intentionally omitted — the live site's obfuscated contact email decodes to a placeholder (`office@example.com`), not a real address | Skipped — needs real address |

## Brand recommendations report — bio updates (§2)

| Change | Report ref | Status |
|---|---|---|
| Nikita Ward's title made explicit: "Solicitor, Family Law \| Law Society Accredited Specialist" | §2.1, §2.2 | Done |
| Nicole Quirk's title made explicit: "Special Counsel, Family Law \| Law Society Accredited Specialist" | §2.1 | Done |
| Vicki De Bonis: 40 years' experience added to her role line and bio opening | §2.1 | Done |
| Vicki De Bonis: reference "Danielle" as operational backbone of the property team | §2.1 | **Not done** — no team member named Danielle exists on the live site's team roster; can't reference someone not in the source data without fabricating a person. Flagging for the firm to supply. |
| Michael Solari bio page created | §2.1, §2.2 | **N/A — already existed.** The live site added this bio between the report's date (May 2026) and this rebuild's scrape (Sept 2026); it was carried over automatically. |
| Mia Doncevski / Sarah Khan: assign practice areas on team listing | §2.1 | **N/A — already assigned** on the live site by the time of the Sept 2026 scrape (Family Law and Estates Law respectively). |
| Nicole Commandeur: complete bio content | §2.1 | Not actioned — report marks this LOW priority, "when capacity allows"; no new source content available to add. |

## Brand recommendations report — master content & design changes (§3, §4)

| Change | Report ref | Status |
|---|---|---|
| Homepage hero added with tagline + one-sentence positioning statement | §3.1, §4.1 | Done |
| Credentials trust bar (3× Accredited Specialists \| STEP Accredited \| Since 1987 \| 4.6★) built as a reusable component | §4.2 | Done — placed on Home, Family Law, Wills & Estates, About Us |
| Google 4.6★ rating displayed on Contact page | §4.3 | Done |
| Family Law: credentials statement naming all three Accredited Specialists | §3.2 | Done |
| Family Law: DV / coercive-control section with confidentiality note + CTA | §3.2 | Done |
| Family Law: mediation section | §3.2, §2.4 | Skipped — needs Director decision (see above) |
| Wills & Estates: STEP credential callout naming Rebecca Exley TEP, linked to her bio | §3.3 | Done |
| Wills & Estates: reference earned media (AFR, Daily Telegraph) | §3.3 | Done |
| Commercial Law: expanded positioning statement | §3.4 | Done |
| Commercial Law: Michael Solari named with photo, credential summary, bio link | §2.1, §2.2, §3.4 | Done |
| Commercial Law: specific "Book a Commercial Law Consultation" CTA | §4.4 | Done |
| Commercial Law: 2-3 anonymised client outcome descriptions | §3.4 | **Not done** — no source material for real, anonymised outcomes exists; fabricating case outcomes for a law firm's marketing copy isn't something to do without real matter data from the firm. |
| About Us page: history (since 1987), ethos, three Directors, St George & Sutherland Law Society ties, Michael Solari's committee/office-bearer role | §3.5, §4.6 | Done — new page at `/about-us`, in primary nav and sitemap |
| Rename "Other Law" → "Dispute Resolution" in navigation | §3.5, §2.4 | Skipped — explicitly a Director-confirm-first item; left as "Other Legal Areas" |
| Newsletter signup on homepage + Contact page | §3.1, Phase 2 | **Not done this pass** — needs an email platform/list to send to (Mailchimp, HubSpot forms, etc.); no such integration exists yet to wire a signup into. |
| Referrer hub page (credentials, practice summaries, affiliations panel) | §3, Phase-adjacent | **Not done this pass** — a distinct, sizeable new page; flagging as a follow-up rather than folding it in unannounced. |
| Separation Options Consult dedicated landing page + UTM tracking | §3.2, §4.5, Phase 4 | **Not done** — explicitly Phase 4 / Month 2+ in the report's own sequencing, tied to a paid-ads campaign that hasn't started. |
| Professional affiliations panel (society logos) on About Us | §4.6 | **Not done** — no real logo assets available to use; placeholder logos would misrepresent the firm's actual affiliations. |
| RedView source attribution + HubSpot UTM tracking confirmation | §4.5 | **Not done — needs the firm's actual RedView/HubSpot account access**, not something to fabricate tracking IDs for. |
| HubSpot chatbot prompts (Family Law, Wills & Estates) | §4.8 | **Not done this pass** — a HubSpot account configuration task, not a codebase change; needs the firm's HubSpot embed script/portal ID. |
| SEO title tag reformatting (report's suggested "Solicitors" phrasing) | §3.6 | **Not applied** — report's suggested titles use "Solicitors", which conflicts with the still-open Lawyers/Solicitors house-style decision above; existing "Lawyers"-based titles kept until that's resolved. |

## Still-open, larger asks (raised but not executed this pass)

- A dedicated visual/creative direction pass ("vibe" refresh) beyond the
  current clean, brand-consistent styling — the report itself recommends
  this as a later "Phase 5" activity, after content changes are live.
- Competitor benchmarking research against the highest-traffic Sutherland
  Shire family law website, to inform any future visual refresh.

Both are real, reasonably large pieces of work in their own right — flagged
here rather than run speculatively in the same pass as the content changes.
