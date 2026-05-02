# Personal Site — UI Kit

A working homepage for **Yash Sharma**, Developer Advocate. Single React + Tailwind document. Tailwind core utilities only, plus arbitrary values for the design tokens.

## Files

- `index.html` — entry; loads React, Tailwind, fonts, and mounts the homepage
- `app.jsx` — composes the page in section order
- `Nav.jsx`, `Hero.jsx`, `LogoWall.jsx`, `Credibility.jsx`, `About.jsx`, `SignatureTalks.jsx`, `TalkList.jsx`, `PhotoMarquee.jsx`, `PullQuote.jsx`, `Content.jsx`, `OpenSource.jsx`, `Press.jsx`, `Footer.jsx` — section components

## Why split this way
Each section is ~50–120 lines and reads as one editorial unit. Components share style only via tokens loaded from `../../colors_and_type.css`. No prop drilling, no theme provider — the design depends on tokens being globally available.

## Sections in order
1. Nav
2. Hero — name, positioning line, primary + secondary CTA, supporting stage photo
3. Conference logo wall
4. Credibility strip — six entries
5. About + currently strip
6. Signature talks (3)
7. Pull-quote
8. Full talks list (grouped by year)
9. Photo marquee
10. Content index
11. Open source
12. Pull-quote
13. Press / featured-in
14. Footer

## Imagery
Placeholder photos use `picsum.photos` with seeded IDs so layout is stable. Replace with real KubeCon stage shots before shipping.
