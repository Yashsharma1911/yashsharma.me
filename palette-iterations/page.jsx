// Single-file homepage — Yash Sharma. Real content. All sections inline so one file
// renders the whole page; only colors are swapped via the loaded palette CSS.

const { useState, useEffect } = React;

// ── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '#talks', label: 'Talks' },
    { href: '#writing', label: 'Writing' },
    { href: '#open-source', label: 'Open source' },
    { href: '#about', label: 'About' },
  ];
  return (
    <nav className="sticky top-0 z-50 transition-colors duration-150" style={{ background: 'var(--paper)', borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
        <a href="#top" className="no-underline" style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.01em' }}>Yash Sharma</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l.href} href={l.href} className="text-[14px] no-underline transition-colors duration-150" style={{ color: 'var(--ink-soft)' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent)'} onMouseLeave={e => e.currentTarget.style.color='var(--ink-soft)'}>{l.label}</a>)}
          <a href="mailto:hello@yashsharma.dev" className="text-[14px] font-mono no-underline" style={{ color: 'var(--ink)' }}>hello@yashsharma.dev</a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero + Thesis ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 lg:pt-32 pb-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>yash sharma · hyderabad · works globally</span>
          <h1 className="font-display text-[52px] sm:text-[68px] lg:text-[84px] leading-[1.03]" style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            I work on the parts of Kubernetes most people would rather not think about &mdash; and the AI infrastructure being built on top of them.
          </h1>
          <p className="text-[19px] leading-[1.5] max-w-[44ch]" style={{ color: 'var(--ink-soft)' }}>
            Senior Developer Advocate at DigitalOcean. CNCF maintainer, Meshery. Recurring KubeCon speaker across four continents.
          </p>

          {/* Thesis line — display italic, sits between sub and credibility */}
          <p className="font-display italic text-[22px] lg:text-[24px] leading-[1.3] max-w-[48ch] m-0 pt-2" style={{ color: 'var(--accent)', letterSpacing: '-0.005em' }}>
            I take infrastructure that&rsquo;s genuinely hard &mdash; cloud-native security, AI workloads on Kubernetes &mdash; and turn it into the talks, code, and writing engineers actually adopt.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a href="#talks" className="inline-flex items-center gap-2 text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>Read recent talks</a>
            <a href="#writing" className="inline-flex items-center gap-2 text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline" style={{ border: '1px solid var(--rule)', color: 'var(--ink)' }}>Recent writing</a>
            <a href="mailto:hello@yashsharma.dev" className="text-[14px] link-inline ml-2" style={{ color: 'var(--ink-soft)' }}>or email me</a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pl-12 flex items-end">
          <figure className="w-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[4px]" style={{ border: '1px solid var(--rule)', background: 'var(--paper-deep)' }}>
              <img src="https://lh3.googleusercontent.com/pw/AP1GczM4ZyW4BxgYAH6WBkKzReUgmzV1Q229EnYbTw3PHKgUmSykUzINrdZl_9otZleK1DbOO1_6Vw4Ad4eyAqxV22J8hlugraJt65UtXRKJWlfw_WfXhh8oOblqkX-hJwHE-Oe_W-JspmB_ujWELXsp3xEUtQ=w668-h890-s-no-gm" alt="Yash on stage" referrerPolicy="no-referrer" className="w-full h-full object-cover" style={{ transformOrigin: 'center center' }} />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--ink-faint)' }}>kubecon na 2025 · atlanta · MCP security</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

// ── Logo wall ──────────────────────────────────────────────────────────────
function LogoWall() {
  const marks = [
    { name: 'KubeCon + CloudNativeCon', s: 'font-display text-[24px]' },
    { name: 'CNCG', s: 'font-mono text-[20px] font-medium' },
    { name: 'ContainerDays', s: 'font-display italic text-[22px]' },
    { name: 'DigitalOcean Deploy', s: 'font-sans uppercase text-[14px] font-semibold tracking-[0.06em]' },
    { name: 'KCD SriLanka', s: 'font-mono text-[18px] font-medium' },
    { name: 'Cloud Native Rejekts', s: 'font-display text-[22px]' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pb-20">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink-faint)' }}>spoken at · contributes to</span>
      <div className="py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        {marks.map(m => <span key={m.name} className={m.s} style={{ color: 'var(--ink)' }}>{m.name}</span>)}
      </div>
    </section>
  );
}

// ── Credibility ────────────────────────────────────────────────────────────
function Credibility() {
  const entries = [
    { numeral: '6K+', label: 'talk attendees' },
    { numeral: '5M+', label: 'social impressions' },
    { numeral: '4', unit: 'continents', label: 'kubecon · na · eu · india · china' },
    { display: 'CNCF', label: 'maintainer · meshery' },
    { numeral: '15K+', label: 'social following' },
    { numeral: '30+', label: 'developers mentored · lfx → cncf' },
  ];
  return (
    <section style={{ background: 'var(--paper-deep)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-8" style={{ color: 'var(--ink-faint)' }}>on record</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          {entries.map((e, i) => (
            <div key={i} className="flex flex-col gap-3">
              {e.numeral ? (
                <span className="font-mono text-[52px] lg:text-[60px] leading-none" style={{ color: 'var(--accent)', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums lining-nums' }}>
                  {e.numeral}{e.unit && <span className="text-[20px] ml-1" style={{ color: 'var(--ink-faint)' }}>{e.unit}</span>}
                </span>
              ) : (
                <span className="font-display italic text-[44px] lg:text-[52px] leading-none" style={{ color: 'var(--ink)' }}>{e.display}</span>
              )}
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] leading-[1.5]" style={{ color: 'var(--ink-faint)' }}>{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>about</span></div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <p className="font-display text-[28px] leading-[1.2] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>
            I&rsquo;m a Developer Advocate at DigitalOcean working on the Kubernetes service team and the AI infrastructure built on top of it.
          </p>
          <p className="text-[17px] leading-[1.6] m-0" style={{ color: 'var(--ink)' }}>
            Before DigitalOcean I worked at Layer5 on Meshery, where I went from LFX mentee to CNCF maintainer. I write and speak about the parts of cloud-native that don&rsquo;t fit neatly into a vendor narrative &mdash; security in MCP, observability at scale, AI workloads on commodity Kubernetes.
          </p>
          <p className="text-[17px] leading-[1.6] m-0" style={{ color: 'var(--ink)' }}>
            I&rsquo;m based in Hyderabad. I work globally. The best way to reach me is{' '}
            <a href="mailto:hello@yashsharma.dev" className="link-inline" style={{ color: 'var(--ink)' }}>email</a>.
          </p>
          <div className="mt-6 pt-6 grid grid-cols-3 gap-6" style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>role</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>Senior Developer Advocate · DigitalOcean</span></div>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>focus</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>AI infrastructure on Kubernetes · MCP security</span></div>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>writing</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>Building-in-public on LinkedIn · technical essays</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Signature talks (3 real) ───────────────────────────────────────────────
const TALKS = [
  {
    title: 'Your Kubernetes playbook at your fingertips: advanced troubleshooting with MCP, RAG, and k8sgpt',
    framing: 'Co-presented with David vonThenen (NetApp). Static troubleshooting drifts the moment you ship it. We wire k8sgpt to the Model Context Protocol and a RAG store of your team\u2019s real runbooks, so diagnostics keep up with the cluster instead of lagging behind it.',
    takeaways: [
      'How MCP lets k8sgpt ingest live runbooks and Kubernetes docs without retraining',
      'RAG tuned to your org\u2019s operational playbooks, not generic Kubernetes content',
      'Why response time and accuracy improve once the agent is grounded in real cluster state',
      'A working integration pattern you can take back to your team',
    ],
    venue: 'kubecon na 2025', date: 'nov · atlanta',
    duration: '34 min', audience: 'kubecon main stage',
    videoId: 'SVLrY-KpTcE',
  },
  {
    title: 'We deleted our observability stack and rebuilt it with OTEL: 12 engineers to 4 at 20K+ clusters',
    framing: 'Co-presented with Kunju Perath (DigitalOcean). At 5,000 clusters our internal observability hit a wall \u2014 audit logs lost, metrics scraping failing under volume. We re-architected on OTEL and now run 20K+ production clusters with a third of the team.',
    takeaways: [
      'Using the upstream OTEL Operator to manage agents across 20K+ clusters',
      'What we got wrong on the first pass \u2014 250M+ log files into storage before we caught it',
      '460+TB processed with zero log loss and complete metrics coverage',
      '4 engineers running observability for 20K+ clusters, down from 12+ at 5K',
    ],
    venue: 'kubecon eu 2026', date: 'apr · london',
    duration: '32 min', audience: 'kubecon main stage',
    videoId: 'Z0oum6Eh1is',
  },
  {
    title: 'Visualize and manage your cloud-native infrastructure with Meshery',
    framing: 'A project lightning talk on Meshery, the CNCF cloud-native manager I help maintain. The Kubernetes ecosystem is rich and complex; Kanvas is the visual layer that reduces cognitive load on the operators who have to live in it.',
    takeaways: [
      'Why YAML, RBAC, and CRD sprawl is a UX problem, not a tooling problem',
      'How Kanvas applies HCI principles to make Kubernetes design legible',
      'OPA-backed policy at the visual layer, so guardrails travel with the design',
      'Where Meshery fits in the broader CNCF ecosystem',
    ],
    venue: 'kubecon eu 2026', date: 'apr · london',
    duration: 'lightning talk', audience: 'project pavilion',
    videoId: '69uYP-TW48s',
  },
];

function SignatureTalk({ talk, reverse }) {
  const [playing, setPlaying] = useState(false);
  const watchUrl = talk.videoId ? `https://www.youtube.com/watch?v=${talk.videoId}` : '#';
  const thumbUrl = talk.videoId ? `https://i.ytimg.com/vi/${talk.videoId}/hqdefault.jpg` : talk.image;
  return (
    <article className="grid grid-cols-12 gap-6 py-16" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className={`col-span-12 lg:col-span-7 ${reverse ? 'lg:order-2 lg:col-start-6' : ''} flex flex-col gap-5`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{talk.venue} · {talk.date}</span>
        <h3 className="font-display text-[36px] lg:text-[44px] leading-[1.08] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>{talk.title}</h3>
        <p className="text-[17px] leading-[1.5] max-w-[56ch] m-0" style={{ color: 'var(--ink-soft)' }}>{talk.framing}</p>
        <ul className="flex flex-col gap-2 mt-2 list-none p-0">
          {talk.takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-[1.5]" style={{ color: 'var(--ink)' }}>
              <span className="font-mono text-[11px] pt-[5px]" style={{ color: 'var(--ink-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-3">
          {talk.videoId && !playing && (
            <button onClick={() => setPlaying(true)} className="text-[14px] link-inline bg-transparent border-0 p-0 cursor-pointer" style={{ color: 'var(--ink)', font: 'inherit' }}>Watch recording &rarr;</button>
          )}
          <a href={watchUrl} target="_blank" rel="noreferrer" className="text-[14px] link-inline" style={{ color: 'var(--ink)' }}>Open on YouTube &rarr;</a>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-5 ${reverse ? 'lg:order-1' : ''} flex flex-col gap-3`}>
        {playing && talk.videoId ? (
          <div className="relative aspect-video overflow-hidden rounded-[4px]" style={{ border: '1px solid var(--rule)', background: 'var(--ink)' }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${talk.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={talk.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        ) : (
          <button
            onClick={() => talk.videoId && setPlaying(true)}
            disabled={!talk.videoId}
            className="block relative aspect-video overflow-hidden rounded-[4px] no-underline p-0 cursor-pointer"
            style={{ border: '1px solid var(--rule)', background: 'var(--paper-deep)' }}
            aria-label={`Play recording: ${talk.title}`}
          >
            <img src={thumbUrl} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-[64px] h-[64px] rounded-full" style={{ background: 'var(--paper)', color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end gap-1 text-left">
              <span className="font-display text-[20px] leading-[1.15]" style={{ color: 'var(--paper)' }}>{talk.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.7)' }}>{talk.venue} · {talk.date}</span>
            </div>
          </button>
        )}
        <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{talk.duration} · {talk.audience}</span>
      </div>
    </article>
  );
}

function SignatureTalks() {
  return (
    <section id="talks" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>signature talks</span></div>
        <div className="col-span-12 lg:col-span-7"><h2 className="font-display text-[40px] leading-[1.1] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Three talks I&rsquo;d give again, refined.</h2></div>
      </header>
      {TALKS.map((t, i) => <SignatureTalk key={t.title} talk={t} reverse={i % 2 === 1} />)}
    </section>
  );
}

// ── Archive: full talk list ────────────────────────────────────────────────
const ARCHIVE_TALKS = [
  { date: '2025 · nov', venue: 'kubecon na · atlanta', title: 'Your Kubernetes playbook at your fingertips: MCP, RAG, and k8sgpt', format: 'co-talk', href: 'https://www.youtube.com/watch?v=SVLrY-KpTcE' },
  { date: '2026 · apr', venue: 'kubecon eu · london', title: 'We deleted our observability stack and rebuilt it with OTEL', format: 'co-talk', href: 'https://www.youtube.com/watch?v=Z0oum6Eh1is' },
  { date: '2026 · apr', venue: 'kubecon eu · london', title: 'Visualize and manage your cloud-native infrastructure with Meshery', format: 'lightning', href: 'https://www.youtube.com/watch?v=69uYP-TW48s' },
  { date: '2024 · nov', venue: 'kubecon na · salt lake city', title: 'Add a real talk title here', format: 'talk', href: '#' },
  { date: '2024 · sep', venue: 'kcd sri lanka', title: 'Add a real talk title here', format: 'keynote', href: '#' },
  { date: '2024 · jun', venue: 'containerdays · hamburg', title: 'Add a real talk title here', format: 'talk', href: '#' },
  { date: '2024 · mar', venue: 'kubecon eu · paris', title: 'Add a real talk title here', format: 'co-talk', href: '#' },
  { date: '2023 · nov', venue: 'kubecon na · chicago', title: 'Add a real talk title here', format: 'talk', href: '#' },
  { date: '2023 · jun', venue: 'cloud native rejekts · amsterdam', title: 'Add a real talk title here', format: 'talk', href: '#' },
];

function ArchiveTalks() {
  const [expanded, setExpanded] = useState(false);
  const initial = 5;
  const visible = expanded ? ARCHIVE_TALKS : ARCHIVE_TALKS.slice(0, initial);
  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pb-24">
      <header className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>archive · all talks</span></div>
        <div className="col-span-12 lg:col-span-7 flex items-baseline justify-between gap-6">
          <h2 className="font-display text-[28px] leading-[1.15] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Everything else, in chronological order.</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] hidden md:inline shrink-0" style={{ color: 'var(--ink-faint)' }}>{ARCHIVE_TALKS.length} talks</span>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-start-4 lg:col-span-9">
          <ul className="list-none p-0 m-0" style={{ borderTop: '1px solid var(--rule)' }}>
            {visible.map((t, i) => (
              <li key={i} className="talk-row" style={{ borderBottom: '1px solid var(--rule)' }}>
                <a href={t.href} target={t.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="grid grid-cols-12 gap-4 items-baseline py-5 no-underline">
                  <span className="col-span-4 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{t.date}</span>
                  <span className="col-span-12 md:col-span-7 text-[16px] leading-[1.4]" style={{ color: 'var(--ink)' }}>{t.title}</span>
                  <span className="col-span-8 md:col-span-2 font-mono text-[11px]" style={{ color: 'var(--ink-soft)' }}>{t.venue}</span>
                  <span className="col-span-4 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-right" style={{ color: 'var(--ink-faint)' }}>{t.format} <span style={{ color: 'var(--ink)' }}>&#8599;</span></span>
                </a>
              </li>
            ))}
          </ul>
          {ARCHIVE_TALKS.length > initial && (
            <div className="pt-6">
              <button onClick={() => setExpanded(v => !v)} className="text-[14px] link-inline bg-transparent border-0 p-0 cursor-pointer" style={{ color: 'var(--ink)', font: 'inherit' }}>
                {expanded ? 'Collapse' : `Show all ${ARCHIVE_TALKS.length} talks`} &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── PullQuote ──────────────────────────────────────────────────────────────
function PullQuote({ quote, attribution }) {
  return (
    <section style={{ background: 'var(--paper-deep)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2 lg:col-start-2"><span className="font-display text-[64px] leading-none" style={{ color: 'var(--ink-faint)' }}>&ldquo;</span></div>
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <blockquote className="font-display italic text-[32px] lg:text-[40px] leading-[1.18] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>{quote}</blockquote>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-soft)' }}>{attribution}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PhotoMarquee ───────────────────────────────────────────────────────────
function PhotoMarquee() {
  const photos = [
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczN5ddtGLlsj7CbLlwW6Dn26PPrb1atJlFW15L_N-JqK_zVJkbCmyg4J42zPX4h1n-L7AzjCNavSm3WvzOIlO9TizwGNNLW3ErcZE2hdy2ARDigw83aSGHAuwY5PFYTXI8lBxFqdndN4lyIETMjtWkT5rw=w667-h890-s-no-gm', venue: 'kubecon na', year: '2025' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMQzWMTSv9cvWmr1Qi_PX5HwZT7FyUwyK9JoyWZWACemF7LtvFDZlPwzPLtfyDE--coIXT1QkeFBMhqECHrhVAEngT9Pr9CKo8ZXrskdxJvjxqt-kg0gicIlPetLn_3b8hYe8e8sPLq2nO3LHtglrLcaw=w1582-h890-s-no-gm', venue: 'kubecon eu', year: '2024' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNXSG2yqd48YzFmHbDWY5ZF847FGWpG0fyKPWme9RKBeKQIDruMUxyGAOV15RiYKn8x8loQ99l8m3sIAfgjLVS_JwFCaNFisye4LjFlo5Ha55_GtjWz8zUQ_PzF5K4vFA9u7Fvk-4mvcdTpMvJ0_GQGvw=w668-h890-s-no-gm', venue: 'kubecon china', year: '2024' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczP_8KdKzA5BYA8akgVpGwkb-Wo2skk54wqnpdmQDkX0bqsmNQs1RdUEuA0DGKXcAa24oV_rija58iDWw7WUpbj8TPubgoYAJO2kjAjfg5k5TPFkmB3fe35kRVhroA-1IsFG2KkDuz0lj_XSdjUb8tGMYg=w1186-h890-s-no-gm', venue: 'kcd sri lanka', year: '2024' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPYVx6bIBIj4_7D8tiJN7qF7Lwy0lxXkTyd4Uc4tGOmiKBxcPZmBxJs1FU_t7nMQAAZH3EZof50vjMSdNX38sK9Ne4dsWLDfNl1oytP-BlLdoibOJD1uDfIKmEeRaPTdhs4v5uMfnQmRbJyzKjXiBg16A=w1187-h890-s-no-gm', venue: 'containerdays', year: '2023' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMF-5fRZdGjqUJruYy4Cyn5UsP92eg2eqrsREyBa_2FNszE2VJCgUjHBpIs1Jz6RAosqnQv9oJ43Acx4_msBm7hkK0iTby2rqCQCXWmFK_u3XfgwGOJxuBAJ1A6EiaHvP__aqAnlfFg22JoYcY-cUKgKw=w668-h890-s-no-gm', venue: 'cloud native rejekts', year: '2023' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNM3d4luIzWsIetuHGh4w-FltRTwhKCNFaMOtfiBKhaHkX_2dCVrMlVkV42fndkqsE890iT_yV0y8Bnm_uVARhh2oLmxF3WgqEI1z8ofm81N-Ck-qvWKZwHoLxRsx8MIR8HARPWx-m9WtBj5H293QxTsQ=w1187-h890-s-no-gm', venue: 'digitalocean deploy', year: '2024' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMdGIa22LJghqhWJQWRPSl3oGfwIk-u4dywK6-wJJQwQMZgr9Cmq_rWcJc1U8b8KExxrnfP_YcEOJSdbsDf_1_k58XWQ8ZT-Aym_xoC7K7T_gQspGDzxXG6gVxxYqq29ZEIR3Tp4zQZg5o4gtfXu6UI3Q=w1187-h890-s-no-gm', venue: 'kubecon eu', year: '2023' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPr7nhCMpYq4e3N_Bm6_ID3iMZO_9ZmvtDOquYume0W3Gsv98QAcm7tH9sLOo3JEs4xZQ5nZLYuSyitq05vEAtXax4jmBf0PvDfZvlpKvUDD3iv_wfEe46yE8-MUK8mI1Rfczb_2zyboGb_h5KRFowJ8w=w669-h890-s-no-gm', venue: 'kubecon na', year: '2023' },
  ];
  const doubled = [...photos, ...photos];
  return (
    <section className="py-24 overflow-hidden" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 mb-10 flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>on stage · 2023–2026</span>
        <span className="font-mono text-[11px] hidden md:inline" style={{ color: 'var(--ink-faint)' }}>hover to pause</span>
      </div>
      <div className="relative">
        <div className="marquee-track flex gap-4 w-max">
          {doubled.map((p, i) => (
            <a key={i} href="#" className="marquee-tile relative block w-[360px] h-[230px] rounded-[4px] overflow-hidden no-underline shrink-0" style={{ border: '1px solid var(--rule)' }}>
              <img
                src={p.src}
                alt={`${p.venue} ${p.year}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const fallback = `https://picsum.photos/seed/${encodeURIComponent(p.venue + p.year)}/720/460`;
                  if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                }}
              />
              <div className="meta absolute inset-0 flex flex-col justify-end p-4 gap-1" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}>
                <span className="font-mono text-[13px]" style={{ color: 'var(--paper)' }}>{p.venue}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.7)' }}>{p.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Content ────────────────────────────────────────────────────────────────
function Content() {
  const items = [
    { format: 'essay', date: '2026 · feb', read: '14 min', title: 'A practical taxonomy of MCP attack surface', dek: 'The categories I keep returning to in talks, expanded with code examples and links to the open issues.' },
    { format: 'video', date: '2025 · dec', read: '46 min', title: 'A walkthrough of the K8sGPT + MCP architecture', dek: 'A recorded deep dive on the production architecture from the KubeCon EU co-talk.' },
    { format: 'essay', date: '2025 · oct', read: '11 min', title: 'Why CNCF AI conformance matters more than the marketing suggests', dek: 'A short polemic on what the conformance work is actually testing, and why most "AI-ready" platforms still fail it.' },
    { format: 'thread', date: '2025 · sep', read: '4 min', title: 'A short thread on rug-pull attacks in MCP', dek: 'The compressed version of the KubeCon NA talk; useful if you ship MCP integrations.' },
    { format: 'podcast', date: '2025 · aug', read: '52 min', title: 'Cloud Native Insiders · ep. 158', dek: 'On going from LFX mentee to CNCF maintainer, and why most companies underrate the pipeline.' },
    { format: 'talk recap', date: '2025 · jul', read: '9 min', title: 'Notes from the vLLM-on-DOKS reference build', dek: 'The version of the talk that includes the configuration details I had to cut for time.' },
  ];
  return (
    <section id="writing" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>writing &amp; audio</span></div>
        <div className="col-span-12 lg:col-span-7 flex items-baseline justify-between">
          <h2 className="font-display text-[40px] leading-[1.1] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Selected work, mixed media.</h2>
          <a href="#" className="text-[14px] link-inline hidden md:inline" style={{ color: 'var(--ink)' }}>All writing &rarr;</a>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-6">
        {items.map((it, i) => (
          <a key={i} href="#" className="group col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4 p-6 rounded-[4px] no-underline transition-colors duration-150" style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--ink-faint)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--rule)'}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{it.format}</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{it.date} · {it.read}</span>
            </div>
            <h3 className="font-display text-[24px] leading-[1.15] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>{it.title}</h3>
            <p className="text-[14px] leading-[1.55] m-0" style={{ color: 'var(--ink-soft)' }}>{it.dek}</p>
            <span className="text-[13px] mt-auto" style={{ color: 'var(--ink-soft)' }}>Read &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── OpenSource ─────────────────────────────────────────────────────────────
function OpenSource() {
  const flagship = { name: 'meshery', role: 'core maintainer', badge: 'CNCF', desc: 'A cloud native manager that enables the design and management of all Kubernetes-based infrastructure and applications (multi-cloud). Freeing you from the chains of YAML while managing Kubernetes multi-cluster deployments.', lang: 'Go', stars: '10.5k', forks: '3.3k' };
  const others = [
    { name: 'scale-with-simplicity', role: 'contributor', desc: 'Reference architectures developed by DigitalOcean to help users understand how to leverage DigitalOcean Services for specific use cases.', lang: 'Go', stars: '28', forks: '28' },
    { name: 'Meshkit', role: 'maintainer', desc: "A toolkit for Meshery's microservices and various individual architectural components to reuse and share common functionality.", lang: 'Helm/Go', stars: '210', forks: '195' },
    { name: 'DO-Labs', role: 'maintainer', desc: 'This repo contains collection of projects, hands-on demos, and best practices built by the DigitalOcean community.', lang: 'Rust', stars: '23', forks: '14' },
  ];
  return (
    <section id="open-source" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>open source</span></div>
        <div className="col-span-12 lg:col-span-7"><h2 className="font-display text-[40px] leading-[1.1] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>What I maintain, in order of stake.</h2></div>
      </header>
      <article className="grid grid-cols-12 gap-6 py-12" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="col-span-12 lg:col-span-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] rounded-[2px]" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>{flagship.badge} · sandbox</span>
        </div>
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h3 className="font-mono text-[32px] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>{flagship.name}</h3>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{flagship.role}</span>
          </div>
          <p className="text-[18px] leading-[1.5] max-w-[64ch] m-0" style={{ color: 'var(--ink)' }}>{flagship.desc}</p>
          <div className="flex gap-6 items-center mt-2 flex-wrap">
            <span className="font-mono text-[12px]" style={{ color: 'var(--ink-soft)' }}>{flagship.lang}</span>
            <span className="font-mono text-[12px]" style={{ color: 'var(--ink-soft)' }}>{flagship.stars} ★</span>
            <span className="font-mono text-[12px]" style={{ color: 'var(--ink-soft)' }}>{flagship.forks} forks</span>
            <a href="#" className="text-[14px] link-inline ml-auto" style={{ color: 'var(--ink)' }}>github.com/meshery/meshery &rarr;</a>
          </div>
        </div>
      </article>
      <div className="grid grid-cols-12 gap-6 mt-4">
        {others.map(p => (
          <article key={p.name} className="col-span-12 md:col-span-4 flex flex-col gap-3 p-6 rounded-[4px]" style={{ border: '1px solid var(--rule)' }}>
            <div className="flex items-baseline justify-between">
              <h4 className="font-mono text-[18px] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>{p.name}</h4>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{p.role}</span>
            </div>
            <p className="text-[14px] leading-[1.55] m-0" style={{ color: 'var(--ink-soft)' }}>{p.desc}</p>
            <div className="flex gap-4 mt-auto"><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.lang}</span><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.stars} ★</span><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.forks} forks</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── Social ─────────────────────────────────────────────────────────────────
function Social() {
  const posts = [
    { platform: 'linkedin', handle: 'yashsharma', date: '2025 · nov 18', hook: 'MCP shipped with security as an afterthought. Here are the three attacks I keep finding in production.', body: 'Rug pulls. Shadowing. Tool poisoning. None of these are theoretical \u2014 I demoed all three at KubeCon NA last week. The fixes aren\u2019t hard. The hard part is admitting your registry is the trust boundary.', metrics: { primary: '6,800 reactions', secondary: '1,100 reposts' } },
    { platform: 'x.com', handle: '@yashsharma', date: '2025 · sep 02', hook: 'Most "AI-ready" Kubernetes platforms aren\u2019t.', body: 'The CNCF AI conformance bar is doing the unglamorous work of writing down what "ready" means. Most managed offerings fail at storage. A surprising number fail at GPU scheduling. The conformance suite is where vendors have to stop performing.', metrics: { primary: '14,200 reposts', secondary: '2.4M impressions' } },
    { platform: 'linkedin', handle: 'yashsharma', date: '2025 · jul 09', hook: 'I keep getting asked how the LFX-to-maintainer pipeline actually works.', body: 'The unglamorous answer: a senior maintainer has to take six unpaid hours a week, for six months, to do real review on someone else\u2019s code. There is no shortcut. I came up through it. I now mentor through it. The pipeline runs on calendar time, not enthusiasm.', metrics: { primary: '4,100 reactions', secondary: '520 reposts' } },
    { platform: 'x.com', handle: '@yashsharma', date: '2025 · jun 21', hook: 'vLLM on commodity Kubernetes is a solved problem. Most teams are solving it three times.', body: 'You don\u2019t need a bespoke ML platform. You need correct storage, honest GPU scheduling, and a helm chart that doesn\u2019t lie about what it does. I\u2019ll write the reference repo this weekend.', metrics: { primary: '7,400 reposts', secondary: '1.1M impressions' } },
  ];
  const platformLabel = p => p === 'x.com' ? 'x · thread' : 'linkedin · post';
  return (
    <section id="social" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>social, when it travels</span></div>
        <div className="col-span-12 lg:col-span-7 flex items-baseline justify-between">
          <h2 className="font-display text-[40px] leading-[1.1] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>The posts that left the building.</h2>
          <a href="#" className="text-[14px] link-inline hidden md:inline" style={{ color: 'var(--ink)' }}>Follow on linkedin &rarr;</a>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-6">
        {posts.map((p, i) => (
          <a key={i} href="#" className="col-span-12 md:col-span-6 flex flex-col gap-5 p-8 rounded-[4px] no-underline transition-colors duration-150" style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--ink-faint)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--rule)'}>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{platformLabel(p.platform)}</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.handle} · {p.date}</span>
            </div>
            <p className="font-display italic text-[24px] leading-[1.18] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>&ldquo;{p.hook}&rdquo;</p>
            <p className="text-[15px] leading-[1.6] m-0" style={{ color: 'var(--ink-soft)' }}>{p.body}</p>
            <div className="flex items-center gap-6 mt-auto pt-4" style={{ borderTop: '1px solid var(--rule)' }}>
              <span className="font-mono text-[12px]" style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}>{p.metrics.primary}</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.metrics.secondary}</span>
              <span className="ml-auto text-[13px]" style={{ color: 'var(--ink-soft)' }}>Read &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Press ──────────────────────────────────────────────────────────────────
function Press() {
  const marks = [
    { name: 'The Landscape', s: 'font-display italic text-[22px]' },
    { name: 'CNCF Blog', s: 'font-mono text-[18px] font-medium' },
    { name: 'Meshery Maintainer Blog', s: 'font-display italic text-[20px]' },
    { name: 'Layer5', s: 'font-sans uppercase text-[14px] font-semibold tracking-[0.06em]' },
    { name: 'DigitalOcean Engineering', s: 'font-display text-[20px]' },
    { name: 'InfoQ', s: 'font-sans text-[18px] font-bold' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 pb-12">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink-faint)' }}>appeared in · covered by</span>
      <div className="py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        {marks.map(m => <span key={m.name} className={m.s} style={{ color: 'var(--ink)' }}>{m.name}</span>)}
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="mt-12" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          <span className="font-display text-[28px] leading-none" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Yash Sharma</span>
          <p className="text-[14px] m-0 max-w-[42ch]" style={{ color: 'var(--ink-soft)' }}>Senior Developer Advocate at DigitalOcean. CNCF maintainer, Meshery. Hyderabad, India.</p>
          <a href="mailto:hello@yashsharma.dev" className="font-mono text-[13px] link-inline mt-2" style={{ color: 'var(--ink)' }}>hello@yashsharma.dev</a>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-faint)' }}>elsewhere</span>
          {['GitHub','LinkedIn','X / Twitter','YouTube'].map(s => <a key={s} href="#" className="text-[14px] no-underline" style={{ color: 'var(--ink)' }}>{s}</a>)}
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-faint)' }}>colophon</span>
          <p className="text-[13px] m-0" style={{ color: 'var(--ink-soft)' }}>Set in Instrument Serif and Geist. Numerals in JetBrains Mono. Static HTML.</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>© 2026 Yash Sharma</span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>last updated · may 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ── Rationale banner — palette-specific copy injected via window.__RATIONALE__
function RationaleBanner() {
  const r = window.__RATIONALE__ || {};
  return (
    <aside className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-10">
      <div className="rounded-[4px] p-6 flex flex-col gap-3" style={{ border: '1px solid var(--rule)', background: 'var(--paper-deep)' }}>
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>palette {r.letter} · {r.name}</span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>paper {r.paper} · ink {r.ink} · accent {r.accent}</span>
        </div>
        <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'var(--ink)' }}><strong>Signals:</strong> {r.signals}</p>
        <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'var(--ink)' }}><strong>Lands hardest with:</strong> {r.audience}</p>
        <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'var(--ink-soft)' }}><strong>Risk:</strong> {r.risk}</p>
      </div>
    </aside>
  );
}

// ── Compose ────────────────────────────────────────────────────────────────
function App() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <LogoWall />
      <Credibility />
      <About />
      <SignatureTalks />
      <ArchiveTalks />
      <PullQuote
        quote="Yash is one of maybe ten people in cloud-native I trust to give an honest answer about a system, including the parts where they got it wrong."
        attribution="cncf tag observability co-chair"
      />
      <PhotoMarquee />
      <Content />
      <OpenSource />
      <PullQuote
        quote="The MCP security talk that finally made our director understand why our agent integration roadmap had to change."
        attribution="staff platform engineer · series-c ai infra"
      />
      <Social />
      <Press />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
