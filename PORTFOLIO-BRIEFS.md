# Portfolio Build Briefs — At The Meridian

These are detailed concept briefs for the six placeholder case studies on the **Work** page (`/portfolio`). Each one is a buildable spec: a project you can produce (real client, spec build, or a polished concept site) and then drop into the matching card by swapping the image, client name, and outcome metrics.

The cards live in `src/app/(frontend)/portfolio/page.tsx` — the `caseStudies` array. To publish a real build: replace `img` with a screenshot of the live site, update `client`, `title`, `summary`, `outcomes`, and `tags`.

A strong portfolio piece tells one story: **here's where they were stuck → here's what we built → here's what changed.** Lead every case study with the outcome.

---

## 1. Verdant Grounds — Landscape Design  *(Featured)*

**The story to tell:** A beautiful photo gallery that didn't sell. Visitors admired the work and left. We turned it into a pre-qualifying sales engine.

**Design direction**
- Dark, editorial, full-bleed photography. Let the landscapes breathe — large hero images, generous whitespace, serif display type for project titles.
- Each project is a *story page*, not a gallery thumbnail: before-state, the client's goal, the transformation, and a "book a consult for a project like this" CTA at the bottom.
- Seasonal hero that rotates (spring planting → summer entertaining → fall hardscape).

**Key pages / features**
- Project story pages (8–12), each targeting a project type + neighborhood.
- Neighborhood/service-area landing pages for local SEO ("landscape design in [town]").
- A pre-qualifying booking flow: budget band, project type, timeline, lot size — so only ready buyers reach the calendar.
- Off-season nurture: email capture + a "design inspiration" lead magnet.

**Outcome metrics to showcase:** +312% organic traffic (9 mo), 60%+ pre-qualified consults, 3.4× consult-to-close.

**Tech notes:** Next.js, image optimization (the whole pitch is fast-loading photography), schema markup for LocalBusiness + service areas.

---

## 2. Stoneform Masonry — Concrete & Masonry

**The story to tell:** Stuck in three-bid price wars on jobs they didn't even want. We repositioned them from commodity to premium specialist.

**Design direction**
- Heavy, premium, textural. Dark charcoal with stone/concrete texture accents. Big macro shots of stamped concrete, stone joints, finished outdoor kitchens.
- Position around the *highest-margin specialty* (stamped patios, outdoor kitchens, polished concrete) — not "concrete services."

**Key pages / features**
- Specialty landing pages per high-intent search term.
- A visual "process & craftsmanship" page that justifies the premium (this is what separates them from the cheap bid).
- Lead-filtering intake: scope + budget questions that route price-shoppers away and high-value projects to the team.
- Reputation engine: reviews + before/after galleries that compound trust.

**Outcome metrics to showcase:** 2.5× avg. project value, −48% wrong-fit leads, Top-3 local rankings.

**Tech notes:** Project-type schema, fast galleries, click-to-call prominent on mobile.

---

## 3. Meridian Build Co. — General Contracting

**The story to tell:** Whole pipeline ran on referrals — one slow quarter from empty. We made new-project pipeline predictable.

**Design direction**
- Confident, architectural, trust-forward. Wide cinematic project photography, clean grid, restrained palette.
- Authority positioning: the resource for their project type (commercial / residential custom / design-build), not just a portfolio.

**Key pages / features**
- Authority/credibility pages (process, team, past projects with budgets + timelines shown tastefully).
- Long-cycle CRM: nurture sequences for 6-month decisions so leads who weren't ready in March close in September.
- Local SEO + paid run together, both tracked to closed projects.
- A reporting dashboard concept (for the case study visual): channel → lead → closed project.

**Outcome metrics to showcase:** 4.2× qualified inbound (90 days), 90 days to measurable ROI, 100% of spend tracked to revenue.

**Tech notes:** CRM integration (HubSpot/GoHighLevel), conversion tracking wired from ad click → form → CRM stage.

---

## 4. Atelier North — Interior Design

**The story to tell:** The site attracted every shopper, including the ones who couldn't afford them. We made it filter for premium clients.

**Design direction**
- The most editorial of the set — this *is* the portfolio piece that shows your design range. Magazine layout, refined serif/sans pairing, lots of negative space, slow elegant scroll reveals.
- Copy signals tier *without quoting prices*, so buyers self-select.

**Key pages / features**
- Project lookbooks (full home, kitchen, primary suite) doubling as SEO pages by style (coastal, modern, transitional).
- "Working with us / what to expect" page that sets the minimum project expectation gracefully.
- Booking flow (not a contact form) → consults land qualified and scheduled.

**Outcome metrics to showcase:** 70%+ premium-tier inquiries, 3.1× conversion lift, "booked consults, not forms."

**Tech notes:** Image-heavy but indexable — alt text, captions, and project copy so Google can read the work. Lazy-loaded galleries.

---

## 5. Cedar & Cliff Homes — Custom Home Builders

**The story to tell:** World-class homes, template website. The biggest purchase of someone's life, represented by stock photos. We built a flagship for the flagship homes.

**Design direction**
- Cinematic and immersive. Full-screen video or large parallax hero of a finished home. Slow, deliberate pacing. Architectural typography.
- Brand has to carry the price — premium positioning, not "family-owned since 1987."

**Key pages / features**
- Home tours as story pages (architecture, materials, the collaboration).
- A philosophy/process page that earns trust before the first call.
- 12–24 month nurture sequence (custom builds are a long decision).
- Custom intake qualifying budget, lot, timeline, and architectural fit.

**Outcome metrics to showcase:** +218% qualified inquiries, 24-month nurture window, premium tier positioning.

**Tech notes:** Performance with heavy media (video posters, responsive images), CRM with long-cycle automation.

---

## 6. Renova Kitchen & Bath — Remodelers

**The story to tell:** Leads scattered across Houzz, Angie, Google, paid, and referrals — nothing unified, nothing followed up. We caught every lead in one system.

**Design direction**
- Bright, clean, conversion-first (more functional than editorial — remodeling buyers are comparison-shopping and need fast answers).
- Project-type clarity: kitchen / bath / whole-home, each its own ranking page.

**Key pages / features**
- Project-type SEO pages per keyword ("kitchen remodel [city]", etc.).
- Financing + process pages (reduce friction on a big-ticket decision).
- One CRM unifying every channel — Houzz, paid, organic, referrals — with auto-routing, scoring, and follow-up.
- Paid acquisition tuned to qualified-lead cost, tracked to closed projects.

**Outcome metrics to showcase:** −60% cost per lead, "all channels, one CRM," top-of-search authority.

**Tech notes:** Lead-source attribution, automated follow-up sequences, review-request automation.

---

## How to publish a real build into the site

1. Build the project (or a polished spec/concept site).
2. Take a clean screenshot of the live site (desktop, ~16:11 crop works best for the cards).
3. Drop the image into `public/` (or import it) and set `img` on the matching object in `caseStudies`.
4. Update `client`, `title`, `summary`, `outcomes`, and `tags` with the real story and numbers.
5. Keep the outcome-first framing — the metric row is what sells the next client.

> Tip: a portfolio of three *real, deeply-told* case studies outperforms six shallow ones. If you only have a few real builds, delete the extra cards rather than padding with weak ones — the array length drives the page automatically.
