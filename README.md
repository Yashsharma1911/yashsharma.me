# Yash Sharma — Personal Site Design System

A personal website for a Developer Advocate at DigitalOcean working in cloud-native and AI infrastructure. The audience is founders, DevRel directors, and engineering leaders. The site has eight seconds to land before they bounce. It must lead with **evidence**, not narrative.

This system is the visual + verbal foundation for that site.

## Sources

This system was built from a written brief only. No Figma, no codebase, no slide decks were attached. The brief referenced **adambraun.com** as a structural reference (logo wall, credibility strip, press row, talk framing pattern) — explicitly *not* a visual reference. The aesthetic target named in the brief: a Stripe-design-team-meets-respected-literary-publication DevRel portfolio.

## Point of View

This is not a portfolio. It is a **publication of one engineer's body of work.**

Other DevRel sites perform reach. This one performs operational scale. It treats credibility data — cluster counts, conferences spoken at, mentees graduated — with the dignity a financial publication gives to numbers: large, monospaced, set in their own column, with editorial captions in the gutter. The single signature interaction is a quiet horizontal photo marquee where venue and year emerge in mono on hover. Everything else is text, restraint, and a single oxblood accent that appears only when you touch something.

A founder reading this should think *this person operates real systems*. A DevRel director should think *this person has range and judgment*. A CTO should think *I would trust this person in a war room*.

## Finalized Direction

**Palette A — Oxblood on warm paper** is the shipped direction. Paper `#F4F1EA`, ink `#1A1714`, oxblood accent `#7A1C1C`. The accent appears in less than 5% of pixels — credibility numerals, hover states, the italic thesis line under the hero, and focus rings.

The canonical render of the site lives at **`palette-iterations/index-A-oxblood.html`** and is composed by `palette-iterations/page.jsx`. That file is final; do not edit it. Other palettes that were under exploration have been retired.

## Index

| File | What it is |
|---|---|
| `README.md` | This document — context, content fundamentals, visual foundations, iconography |
| `SKILL.md` | Agent-Skills front-matter so this folder is portable to Claude Code |
| `colors_and_type.css` | All design tokens as CSS custom properties — colors, type scale, spacing, motion, semantic shortcuts |
| `palette-iterations/index-A-oxblood.html` | **The finalized homepage.** Single React + Tailwind document, oxblood palette, all sections. |
| `palette-iterations/page.jsx` | Source for the homepage — every section component inline in one file |
| `palette-iterations/palette-A.css` | The oxblood palette (paper, ink, accent) as CSS custom properties |
| `palette-iterations/_base.css` | Palette-agnostic base: font imports, type defaults, marquee + hover effects |
| `preview/` | Specimen cards rendered for the Design System tab — type, color, spacing, components, brand |
| `ui_kits/personal-site/` | Earlier modular component breakdown (Nav, Hero, Credibility, etc.) — kept for reference; the live site is now in `palette-iterations/` |

## Page sections (in order)

The finalized homepage composes twelve sections. Section order is meaningful — credibility comes before about, talks come before writing, the pull-quotes break up the long midsection.

1. **Nav** — sticky, paper background, hairline on scroll
2. **Hero** — display headline + italic oxblood thesis line + supporting photo at column 7–11
3. **Logo wall** — six conference / community wordmarks between hairlines
4. **Credibility strip** — six numerals (talk attendees, impressions, continents, CNCF maintainer, social following, mentees), oxblood, paper-deep background
5. **About** — sentence-case heading in the gutter, prose at column 4–10, three-column meta row at the bottom
6. **Signature talks** — three full talk cards with framing, takeaways, video thumb, hairline-divided
7. **Pull-quote** — display italic, paper-deep background
8. **Photo marquee** — horizontal scrolling tiles, desaturated at rest, venue + year on hover
9. **Content index** — six items across essay / video / podcast / thread / talk-recap formats
10. **Open source** — Meshery flagship card + three other repo cards
11. **Pull-quote** — second one breaks up open-source and social
12. **Social** — four cards of LinkedIn / X posts that traveled, with metrics in oxblood mono
13. **Press** — six masthead-style wordmarks between hairlines
14. **Footer** — name + role, elsewhere links, colophon, copyright

A small **rationale banner** sits between the nav and the hero in the iteration file; it is a development affordance for explaining the palette and would be removed before shipping.

## Content Fundamentals

How copy is written on this site. These rules are non-negotiable; they are the difference between sounding like a senior engineer and sounding like a keynote-speaker-for-hire.

### Voice
**Technical depth, opinionated but generous, builds in public.** The author writes in first person ("I"), addresses the reader directly only when it earns its keep ("you" is rare and load-bearing). The voice is closer to a well-edited engineering blog than a personal landing page. It is allowed to be dry. It is not allowed to be cute.

### Casing
- Section headings: **Sentence case.** "Signature talks", not "Signature Talks".
- Buttons / links: sentence case. "Read recent talks", "Watch recording".
- Mono labels (dates, venues, repo names): lowercase or as-published. `kubecon na 2025 · atlanta` not `KubeCon NA 2025 · Atlanta`. Mono carries the formal weight; lowercase keeps it from feeling shouty.
- Proper nouns (KubeCon, CNCF, Kubernetes, DigitalOcean, Meshery) keep their canonical casing always.

### Tone — concrete examples

| Bad (template-DevRel) | Good (this site) |
|---|---|
| "Welcome to my page! 🚀" | "Developer Advocate. Cloud-native and AI infrastructure." |
| "I'm passionate about empowering developers" | "I work on the parts of Kubernetes most people would rather not think about." |
| "Check out my amazing talks!" | "Three talks I'd give again, refined." |
| "Let's connect and build the future together!" | "Email is the best way to reach me." |
| "1M+ impressions across socials" | "5M+ social impressions" set in JetBrains Mono at 60px |

### Numerals
**Always mono, always with a unit, always understated.** `5M+ · social impressions`, not `5,000,000 impressions 📊`. The number is the proof; the caption is in the gutter at low contrast. Do not animate counters.

### Lists vs prose
Default to prose for **About** and **talk framings**. Default to compact rows with mono metadata for **content index, OSS projects, social posts**. Numbered takeaways inside signature-talk cards (4 max, each one a short clause) — numerals mono, copy body.

### Forbidden
- Emoji (anywhere, including footer)
- Exclamation marks (the writing earns emphasis through structure, not punctuation)
- "Crafted with ❤️" / "Built with [stack]" footers
- "Let's build something amazing"
- "Empower / unlock / supercharge / level up"
- "Thought leader / influencer / evangelist"
- Vanity metrics dressed up as proof (raw follower counts presented without context)
- Em-dashes for casual tone (— is allowed for editorial parenthesis, not as a vocal tic)

## Visual Foundations

### Color — quiet and committed

The palette is functionally monochrome with a single **oxblood** accent that appears in less than 5% of pixels — only on hover, focus, current-section indicators, the credibility-strip numerals, the italic thesis line, and the social-card metric primary.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#1A1714` | Primary text. Not pure black; warm-shifted toward the paper. |
| `--paper` | `#F4F1EA` | Page background. Warm off-white, low-contrast. |
| `--paper-deep` | `#EBE7DD` | One-step darker paper for surface lifts (credibility strip, pull-quote backgrounds, rationale banner). |
| `--ink-soft` | `#5A544D` | Secondary text, captions, dates. ~50% perceptual lightness on paper. |
| `--ink-faint` | `#9C958A` | Tertiary text, mono metadata, hairline labels. |
| `--rule` | `#D8D2C5` | Hairline borders. 1px only. |
| `--accent` | `#7A1C1C` | Oxblood. Reserved. |
| `--accent-hover` | `#5C1414` | Pressed/hover state of the accent. |

No gradients. No tinted section backgrounds beyond `--paper-deep` for two surface lifts (credibility, pull-quote). Section breaks are made by **whitespace and hairlines**, never by color blocks.

### Typography — type-led, three families

| Role | Family | Source | Why |
|---|---|---|---|
| Display | **Instrument Serif** | Google Fonts | Editorial personality, the slight humanist warmth a "literary publication" needs; free; an honest open-source equivalent to Tiempos Headline or GT Sectra. |
| Body | **Geist** | Google Fonts | A Söhne-adjacent neutral sans with restrained character. Avoids Inter (overused) and Söhne (paid). |
| Mono | **JetBrains Mono** | Google Fonts | Wide community recognition among the engineering audience. Used for dates, venues, repos, and credibility numerals. |

Type scale (px): **12 / 14 / 16 / 20 / 28 / 40 / 64 / 96**
- Body line-height: 1.6
- Display line-height: 1.08 (1.03 on the hero h1)
- Mono is set 1px smaller than its visual neighbour to align x-heights (mono caps run hot)

The credibility-strip numerals are set in JetBrains Mono at 52–60px with `font-variant-numeric: tabular-nums lining-nums`.

> **Font substitution flag:** The brief named Tiempos Headline / GT Sectra / Editorial New / Söhne Breit (display) and Inter / Söhne (body) as targets. All four display options and Söhne are paid. **Instrument Serif** and **Geist** are the closest free open-source equivalents and are loaded from Google Fonts. If you have licenses for the named families, drop them in `fonts/` and update `colors_and_type.css` — the rest of the system needs no other changes.

### Spacing — 4px base, editorial scale

Spacing tokens follow a 4-base scale tuned for long-form layouts: `4 8 12 16 24 32 48 64 96 128 192 256`. Section gaps are large (`96` between major sections, `128` around the hero). Component padding is moderate (`24–32`). Inline gaps are tight (`8–12`). The site breathes; it does not buzz.

### Layout

12-column grid at 1280 (gutter `24`, margin `64`), 8-column at 1024, 4-column at 768, single-column with a 32px margin at 375. **Asymmetric** by default — section headings sit in the left two or three columns, content runs columns 4–11. The Stripe Press / *Harper's* convention.

### Motion

Restraint. Three durations only.

| Token | Value | Use |
|---|---|---|
| `--motion-fast` | `120ms` | Hover color/opacity transitions on links, buttons, talk rows, content cards |
| `--motion-base` | `240ms` | Photo marquee tile saturation + meta fade, focus rings |
| `--motion-slow` | `480ms` | Section entrance fades on scroll (only once, only on first reveal) |

Easing: **`cubic-bezier(0.2, 0, 0, 1)`** universally. No bounce. No overshoot. No spring physics. The photo marquee is the only continuous animation on the page (60s linear loop, pauses on hover).

### Hover & press states

- **Inline links:** underline always on, in `--rule`. On hover: color and underline shift to `--accent` over `120ms`. No underline-thickness changes. No background fills.
- **Buttons (primary):** ink fill, paper text. On hover: subtle lightening to `#2A2520`. On focus: 2px oxblood ring at 2px offset. On press: `#0F0E0C`.
- **Buttons (ghost):** paper fill, ink text, 1px rule border. Hover swaps to ink fill / paper text. No transform. No shadow.
- **Photo marquee tiles:** at rest, `filter: saturate(0.4) contrast(0.95)`. On hover: filter clears over 240ms; venue + year fade in over a soft black gradient.
- **Talk-list rows / signature-talk articles:** hairline-divided. On hover (via `.talk-row`): a 2px oxblood marker appears flush left; nothing else moves.
- **Content cards / social cards / OSS cards:** at rest, 1px `--rule` border. On hover: border darkens to `--ink-faint` over 120ms.

No transforms (translate, scale) in any hover. No shadows in any hover. The page does not bounce when you touch it.

### Borders

1px hairlines only, in `--rule`. Used for talk-list dividers, section breaks, ghost-button outlines, all card outlines. No double borders. No dashed borders. No border radii above 4px.

### Shadows

None on layout components. The only "shadow" used in the system is `--shadow-1`, an inset 1px bottom rule used for semantic clarity on the credibility column. The brief is "no shadows" by spirit.

### Corner radii

`--radius-sm: 2px` on small interactive surfaces (button focus rings, image clips, the CNCF sandbox tag). `--radius-md: 4px` on cards (content card, OSS card, signature-talk video thumb, social card). Never above 4px. Pill buttons are forbidden.

### Imagery treatment

**Photographic only. No illustration. No stock people-coding shots. No SVG art beyond logos and icons.** All photos are real conference stage shots with venue branding visible. Default treatment: full color, slightly desaturated (`saturate(0.85)`), no filter. Photo marquee tiles get `saturate(0.4) contrast(0.95)` at rest and clear on hover. The hero photo sits column 7–11, framed in a 1px `--rule` border, never full-bleed, never with a shadow.

### Transparency / blur

None. No glassmorphism. No backdrop-filter. The site is opaque.

### Cards

A "card" on this site is a hairline-bordered rectangle with `--radius-md` corners, `24–32` padding, `--paper` fill. Not raised. Not shadowed. Used for: signature talks, content index items, OSS project cards, social posts. Hover: 1px border darkens from `--rule` to `--ink-faint` over 120ms. That's it.

### Layout rules (fixed elements)

- Sticky top nav, 64px tall, `--paper` background with a 1px bottom rule that becomes visible only on scroll (>8px).
- Footer: three-column at 1024+, single-column at 768. Name + role, elsewhere links, colophon. A bottom hairline strip carries copyright and last-updated date in mono. No newsletter. No cookie banner.
- Section anchors live in the URL hash (`#talks`, `#writing`, `#open-source`, `#about`, `#social`); nav links are anchor jumps.

## Iconography

**No standing icon library.** The finalized site does not depend on Lucide or any other icon CDN — formats and metadata are carried by mono labels (`essay`, `video`, `podcast`, `thread`, `talk recap`) rather than icons. External-link affordances are typographic arrows (`→`, `↗`) inline with link text.

If a future iteration needs icons:
- Use **Lucide** (lucide.dev), monoline, 1.5px stroke, 16px or 20px sizing, `--ink-faint` color
- No emoji anywhere. No unicode symbols as decoration.

The conference logo wall and press wall use real organization wordmarks set in display / mono / sans-uppercase variations on `--ink` — those are typographic, not iconographic. They live as text rather than SVG in the current build; replace with real SVG wordmarks before shipping.

## Working on this system

Every visual decision answers to one of three questions:

1. Does this make a founder believe this person operates real systems?
2. Does this make a DevRel director believe this person has judgment?
3. Does this make a CTO believe this person is a credible technical voice?

If a decision doesn't serve one of those, cut it. The brief said "one thousand no's for every yes." That applies here too.
