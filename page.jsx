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
  { href: '#about', label: 'About' }];

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-150" style={{ background: 'var(--paper)', borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
        <a href="#top" className="no-underline" style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.01em' }}>Yash Sharma</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => <a key={l.href} href={l.href} className="text-[14px] no-underline transition-colors duration-150" style={{ color: 'var(--ink-soft)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-soft)'}>{l.label}</a>)}
          <a href="mailto:yashsharma2572@gmail.com" className="text-[14px] font-mono no-underline" style={{ color: 'var(--ink)' }}>yashsharma2572@gmail.com</a>
        </div>
      </div>
    </nav>);

}

// ── Hero + Thesis ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 lg:pt-32 pb-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>YASH SHARMA · HYDERABAD · WORKS GLOBALLY</span>
          <h1 className="font-display text-[52px] sm:text-[68px] lg:text-[84px] leading-[1.03]" style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            I work on the parts of Kubernetes most people would rather not think about &mdash; and the AI infrastructure being built on top of them.
          </h1>
          <p className="text-[19px] leading-[1.5] max-w-[44ch]" style={{ color: 'var(--ink-soft)' }}>
            Developer Advocate at DigitalOcean. CNCF maintainer, Meshery. Recurring KubeCon speaker across four continents.
          </p>

          {/* Thesis line — display italic, sits between sub and credibility */}
          <p className="font-display italic text-[22px] lg:text-[24px] leading-[1.3] max-w-[48ch] m-0 pt-2" style={{ color: 'var(--accent)', letterSpacing: '-0.005em' }}>
            I take infrastructure that&rsquo;s genuinely hard &mdash; cloud-native security, AI workloads on Kubernetes &mdash; and turn it into the talks, code, and writing engineers actually adopt.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a href="#talks" className="inline-flex items-center gap-2 text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>Read recent talks</a>
            <a href="#writing" className="inline-flex items-center gap-2 text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline" style={{ border: '1px solid var(--rule)', color: 'var(--ink)' }}>Recent writing</a>
            <a href="mailto:yashsharma2572@gmail.com" className="text-[14px] link-inline ml-2" style={{ color: 'var(--ink-soft)' }}>or email me</a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pl-12 flex items-end">
          <figure className="w-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[4px]" style={{ border: '1px solid var(--rule)', background: 'var(--paper-deep)' }}>
              <img src="https://picsum.photos/seed/yash-stage/640/800" alt="Yash mid-talk at KubeCon NA 2025" className="w-full h-full object-cover" style={{ transform: 'scale(1.12)', transformOrigin: 'center center' }} />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--ink-faint)' }}>KUBECON EU 2026 · AMSTERDAM</figcaption>
          </figure>
        </div>
      </div>
    </section>);

}

// ── Logo wall ──────────────────────────────────────────────────────────────
function LogoWall() {
  const marks = [
  { name: 'KubeCon + CloudNativeCon', s: 'font-display text-[24px]' },
  { name: 'CNCG', s: 'font-mono text-[20px] font-medium' },
  { name: 'ContainerDays', s: 'font-display italic text-[22px]' },
  { name: 'DigitalOcean Deploy', s: 'font-sans uppercase text-[14px] font-semibold tracking-[0.06em]' },
  { name: 'KCD SriLanka', s: 'font-mono text-[18px] font-medium' },
  { name: 'Cloud Native Rejekts', s: 'font-display text-[22px]' }];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pb-20">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink-faint)' }}>spoken at · contributes to</span>
      <div className="py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        {marks.map((m) => <span key={m.name} className={m.s} style={{ color: 'var(--ink)' }}>{m.name}</span>)}
      </div>
    </section>);

}

// ── Credibility ────────────────────────────────────────────────────────────
function Credibility() {
  const entries = [
  { numeral: '6K+', label: 'talk attendees' },
  { numeral: '5M+', label: 'social impressions' },
  { numeral: '4', unit: 'continents', label: 'kubecon · na · eu · india · china' },
  { display: 'CNCF', label: 'maintainer · meshery' },
  { numeral: '15K+', label: 'social following' },
  { numeral: '30+', label: 'developers mentored · lfx → cncf' }];

  return (
    <section style={{ background: 'var(--paper-deep)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-8" style={{ color: 'var(--ink-faint)' }}>on record</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          {entries.map((e, i) =>
          <div key={i} className="flex flex-col gap-3">
              {e.numeral ?
            <span className="font-mono text-[52px] lg:text-[60px] leading-none" style={{ color: 'var(--accent)', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums lining-nums' }}>
                  {e.numeral}{e.unit && <span className="text-[20px] ml-1" style={{ color: 'var(--ink-faint)' }}>{e.unit}</span>}
                </span> :

            <span className="font-display italic text-[44px] lg:text-[52px] leading-none" style={{ color: 'var(--ink)' }}>{e.display}</span>
            }
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] leading-[1.5]" style={{ color: 'var(--ink-faint)' }}>{e.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>about</span></div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <p className="font-display text-[28px] leading-[1.2] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>I’m a Developer Advocate at DigitalOcean working on the IaaS, PasS and the AI infrastructure built on top of it.

          </p>
          <p className="text-[17px] leading-[1.6] m-0" style={{ color: 'var(--ink)' }}>
            Before DigitalOcean I worked at Layer5 on Meshery, where I went from LFX mentee to CNCF maintainer. I write and speak about the parts of cloud-native that don&rsquo;t fit neatly into a vendor narrative &mdash; security in MCP, observability at scale, AI workloads on commodity Kubernetes.
          </p>
          <p className="text-[17px] leading-[1.6] m-0" style={{ color: 'var(--ink)' }}>
            I&rsquo;m based in Hyderabad. I work globally. The best way to reach me is{' '}
            <a href="mailto:yashsharma2572@gmail.com" className="link-inline" style={{ color: 'var(--ink)' }}>email</a>.
          </p>
          <div className="mt-6 pt-6 grid grid-cols-3 gap-6" style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>role</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>Developer Advocate · DigitalOcean</span></div>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>focus</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>AI infrastructure · Kubernetes · Open Source</span></div>
            <div className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>writing</span><span className="text-[14px]" style={{ color: 'var(--ink)' }}>Building-in-public on LinkedIn · technical essays</span></div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Signature talks (3 real) ───────────────────────────────────────────────
const TALKS = [
{
  title: 'MCP security: rug pulls, shadowing, and tool poisoning',
  framing: 'A field guide to the attack surface that emerged the moment Model Context Protocol shipped \u2014 and the three classes of vulnerability every team integrating MCP servers is already exposed to.',
  takeaways: [
  'How rug-pull attacks weaponize MCP server updates after install',
  'Shadowing attacks that exploit tool-name collisions across servers',
  'Tool poisoning via untrusted descriptions in the registry',
  'A practical hardening checklist that doesn\u2019t kill the developer experience'],

  venue: 'kubecon na 2025', date: 'nov · atlanta',
  duration: '34 min', audience: '~ 1,200 in room',
  image: 'https://picsum.photos/seed/talk-mcp/960/540'
},
{
  title: 'MCP + RAG + K8sGPT: troubleshooting Kubernetes with agents that actually know your cluster',
  framing: 'Co-presented with David vonThenen. A working architecture for grounding LLM-driven Kubernetes troubleshooting in real cluster state \u2014 and the failure modes we hit on the way there.',
  takeaways: [
  'Why naive RAG over Kubernetes manifests degrades fast at scale',
  'The MCP server boundary that made K8sGPT actually useful in production',
  'Latency and cost tradeoffs we didn\u2019t anticipate',
  'What we\u2019d build differently if we started today'],

  venue: 'kubecon eu 2026', date: 'mar · amsterdam',
  duration: '38 min', audience: '~ 1,400 expected',
  image: 'https://picsum.photos/seed/talk-k8sgpt/960/540'
},
{
  title: 'Serving vLLM on managed Kubernetes without re-inventing the wheel',
  framing: 'A reference architecture for running vLLM on DOKS with managed NFS \u2014 what the CNCF AI conformance work is actually checking for, and why most "AI-ready" platforms aren\u2019t.',
  takeaways: [
  'The storage primitives vLLM actually needs, and the ones it doesn\u2019t',
  'GPU scheduling decisions that compound across the fleet',
  'Where the CNCF Kubernetes AI conformance bar lands',
  'A working reference repo you can fork on Monday morning'],

  venue: 'kubecon eu 2026', date: 'mar · amsterdam',
  duration: '32 min', audience: '~ 900 expected',
  image: 'https://picsum.photos/seed/talk-vllm/960/540'
}];


function SignatureTalk({ talk, reverse }) {
  return (
    <article className="grid grid-cols-12 gap-6 py-16" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className={`col-span-12 lg:col-span-7 ${reverse ? 'lg:order-2 lg:col-start-6' : ''} flex flex-col gap-5`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{talk.venue} · {talk.date}</span>
        <h3 className="font-display text-[36px] lg:text-[44px] leading-[1.08] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>{talk.title}</h3>
        <p className="text-[17px] leading-[1.5] max-w-[56ch] m-0" style={{ color: 'var(--ink-soft)' }}>{talk.framing}</p>
        <ul className="flex flex-col gap-2 mt-2 list-none p-0">
          {talk.takeaways.map((t, i) =>
          <li key={i} className="flex gap-3 text-[15px] leading-[1.5]" style={{ color: 'var(--ink)' }}>
              <span className="font-mono text-[11px] pt-[5px]" style={{ color: 'var(--ink-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{t}</span>
            </li>
          )}
        </ul>
        <div className="flex gap-6 mt-3"><a href="#" className="text-[14px] link-inline" style={{ color: 'var(--ink)' }}>Slides &rarr;</a><a href="#" className="text-[14px] link-inline" style={{ color: 'var(--ink)' }}>Watch recording &rarr;</a></div>
      </div>
      <div className={`col-span-12 lg:col-span-5 ${reverse ? 'lg:order-1' : ''} flex flex-col gap-3`}>
        <a href="#" className="block relative aspect-video overflow-hidden rounded-[4px] no-underline" style={{ border: '1px solid var(--rule)' }}>
          <img src={talk.image} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
          <div className="absolute inset-0 p-5 flex flex-col justify-end gap-1">
            <span className="font-display text-[20px] leading-[1.15]" style={{ color: 'var(--paper)' }}>{talk.title}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.7)' }}>{talk.venue} · {talk.date}</span>
          </div>
        </a>
        <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{talk.duration} · {talk.audience}</span>
      </div>
    </article>);

}

function SignatureTalks() {
  return (
    <section id="talks" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-3"><span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>signature talks</span></div>
        <div className="col-span-12 lg:col-span-7"><h2 className="font-display text-[40px] leading-[1.1] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Three talks I&rsquo;d give again, refined.</h2></div>
      </header>
      {TALKS.map((t, i) => <SignatureTalk key={t.title} talk={t} reverse={i % 2 === 1} />)}
    </section>);

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
    </section>);

}

// ── PhotoMarquee ───────────────────────────────────────────────────────────
function PhotoMarquee() {
  const photos = [
  { src: 'https://picsum.photos/seed/y1/520/340', venue: 'kubecon na', year: '2025' },
  { src: 'https://picsum.photos/seed/y2/520/340', venue: 'kubecon eu', year: '2024' },
  { src: 'https://picsum.photos/seed/y3/520/340', venue: 'kubecon china', year: '2024' },
  { src: 'https://picsum.photos/seed/y4/520/340', venue: 'kcd india', year: '2024' },
  { src: 'https://picsum.photos/seed/y5/520/340', venue: 'kubecon na', year: '2023' },
  { src: 'https://picsum.photos/seed/y6/520/340', venue: 'open source summit', year: '2023' },
  { src: 'https://picsum.photos/seed/y7/520/340', venue: 'kubecon eu', year: '2023' }];

  const doubled = [...photos, ...photos];
  return (
    <section className="py-24 overflow-hidden" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 mb-10 flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>on stage · 2023–2026</span>
        <span className="font-mono text-[11px] hidden md:inline" style={{ color: 'var(--ink-faint)' }}>hover to pause</span>
      </div>
      <div className="relative">
        <div className="marquee-track flex gap-4 w-max">
          {doubled.map((p, i) =>
          <a key={i} href="#" className="marquee-tile relative block w-[360px] h-[230px] rounded-[4px] overflow-hidden no-underline shrink-0" style={{ border: '1px solid var(--rule)' }}>
              <img src={p.src} alt="" className="w-full h-full object-cover" />
              <div className="meta absolute inset-0 flex flex-col justify-end p-4 gap-1" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}>
                <span className="font-mono text-[13px]" style={{ color: 'var(--paper)' }}>{p.venue}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.7)' }}>{p.year}</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

// ── Content ────────────────────────────────────────────────────────────────
function Content() {
  const items = [
  { format: 'essay', date: '2026 · feb', read: '14 min', title: 'A practical taxonomy of MCP attack surface', dek: 'The categories I keep returning to in talks, expanded with code examples and links to the open issues.' },
  { format: 'video', date: '2025 · dec', read: '46 min', title: 'A walkthrough of the K8sGPT + MCP architecture', dek: 'A recorded deep dive on the production architecture from the KubeCon EU co-talk.' },
  { format: 'essay', date: '2025 · oct', read: '11 min', title: 'Why CNCF AI conformance matters more than the marketing suggests', dek: 'A short polemic on what the conformance work is actually testing, and why most "AI-ready" platforms still fail it.' },
  { format: 'thread', date: '2025 · sep', read: '4 min', title: 'A short thread on rug-pull attacks in MCP', dek: 'The compressed version of the KubeCon NA talk; useful if you ship MCP integrations.' },
  { format: 'podcast', date: '2025 · aug', read: '52 min', title: 'Cloud Native Insiders · ep. 158', dek: 'On going from LFX mentee to CNCF maintainer, and why most companies underrate the pipeline.' },
  { format: 'talk recap', date: '2025 · jul', read: '9 min', title: 'Notes from the vLLM-on-DOKS reference build', dek: 'The version of the talk that includes the configuration details I had to cut for time.' }];

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
        {items.map((it, i) =>
        <a key={i} href="#" className="group col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4 p-6 rounded-[4px] no-underline transition-colors duration-150" style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--ink-faint)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--rule)'}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{it.format}</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{it.date} · {it.read}</span>
            </div>
            <h3 className="font-display text-[24px] leading-[1.15] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>{it.title}</h3>
            <p className="text-[14px] leading-[1.55] m-0" style={{ color: 'var(--ink-soft)' }}>{it.dek}</p>
            <span className="text-[13px] mt-auto" style={{ color: 'var(--ink-soft)' }}>Read &rarr;</span>
          </a>
        )}
      </div>
    </section>);

}

// ── OpenSource ─────────────────────────────────────────────────────────────
function OpenSource() {
  const flagship = { name: 'meshery', role: 'core maintainer', badge: 'CNCF', desc: 'A cloud native manager that enables the design and management of all Kubernetes-based infrastructure and applications (multi-cloud). Freeing you from the chains of YAML while managing Kubernetes multi-cluster deployments.', lang: 'Go', stars: '10.5k', forks: '3.3k' };
  const others = [
  { name: 'scale-with-simplicity', role: 'contributor', desc: 'Reference architectures developed by DigitalOcean to help users understand how to leverage DigitalOcean Services for specific use cases.', lang: 'Go', stars: '28', forks: '28' },
  { name: 'Meshkit', role: 'maintainer', desc: "A toolkit for Meshery's microservices and various individual architectural components to reuse and share common functionality.", lang: 'Helm/Go', stars: '210', forks: '195' },
  { name: 'DO-Labs', role: 'maintainer', desc: 'This repo contains collection of projects, hands-on demos, and best practices built by the DigitalOcean community.', lang: 'Rust', stars: '23', forks: '14' }];

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
        {others.map((p) =>
        <article key={p.name} className="col-span-12 md:col-span-4 flex flex-col gap-3 p-6 rounded-[4px]" style={{ border: '1px solid var(--rule)' }}>
            <div className="flex items-baseline justify-between">
              <h4 className="font-mono text-[18px] m-0" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>{p.name}</h4>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>{p.role}</span>
            </div>
            <p className="text-[14px] leading-[1.55] m-0" style={{ color: 'var(--ink-soft)' }}>{p.desc}</p>
            <div className="flex gap-4 mt-auto"><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.lang}</span><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.stars} ★</span><span className="font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>{p.forks} forks</span></div>
          </article>
        )}
      </div>
    </section>);

}

// ── Social ─────────────────────────────────────────────────────────────────
function Social() {
  const posts = [
  { platform: 'linkedin', handle: 'yashsharma', date: '2025 · nov 18', hook: 'MCP shipped with security as an afterthought. Here are the three attacks I keep finding in production.', body: 'Rug pulls. Shadowing. Tool poisoning. None of these are theoretical \u2014 I demoed all three at KubeCon NA last week. The fixes aren\u2019t hard. The hard part is admitting your registry is the trust boundary.', metrics: { primary: '6,800 reactions', secondary: '1,100 reposts' } },
  { platform: 'x.com', handle: '@yashsharma', date: '2025 · sep 02', hook: 'Most "AI-ready" Kubernetes platforms aren\u2019t.', body: 'The CNCF AI conformance bar is doing the unglamorous work of writing down what "ready" means. Most managed offerings fail at storage. A surprising number fail at GPU scheduling. The conformance suite is where vendors have to stop performing.', metrics: { primary: '14,200 reposts', secondary: '2.4M impressions' } },
  { platform: 'linkedin', handle: 'yashsharma', date: '2025 · jul 09', hook: 'I keep getting asked how the LFX-to-maintainer pipeline actually works.', body: 'The unglamorous answer: a senior maintainer has to take six unpaid hours a week, for six months, to do real review on someone else\u2019s code. There is no shortcut. I came up through it. I now mentor through it. The pipeline runs on calendar time, not enthusiasm.', metrics: { primary: '4,100 reactions', secondary: '520 reposts' } },
  { platform: 'x.com', handle: '@yashsharma', date: '2025 · jun 21', hook: 'vLLM on commodity Kubernetes is a solved problem. Most teams are solving it three times.', body: 'You don\u2019t need a bespoke ML platform. You need correct storage, honest GPU scheduling, and a helm chart that doesn\u2019t lie about what it does. I\u2019ll write the reference repo this weekend.', metrics: { primary: '7,400 reposts', secondary: '1.1M impressions' } }];

  const platformLabel = (p) => p === 'x.com' ? 'x · thread' : 'linkedin · post';
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
        {posts.map((p, i) =>
        <a key={i} href="#" className="col-span-12 md:col-span-6 flex flex-col gap-5 p-8 rounded-[4px] no-underline transition-colors duration-150" style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--ink-faint)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--rule)'}>
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
        )}
      </div>
    </section>);

}

// ── Press ──────────────────────────────────────────────────────────────────
function Press() {
  const marks = [
  { name: 'The Landscape', s: 'font-display italic text-[22px]' },
  { name: 'CNCF Blog', s: 'font-mono text-[18px] font-medium' },
  { name: 'Meshery Maintainer Blog', s: 'font-display italic text-[20px]' },
  { name: 'KubeCon Keynote Stage', s: 'font-sans uppercase text-[14px] font-semibold tracking-[0.06em]' },
  { name: 'DigitalOcean Engineering', s: 'font-display text-[20px]' },
  { name: 'InfoQ', s: 'font-sans text-[18px] font-bold' }];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 pb-12">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink-faint)' }}>appeared in · covered by</span>
      <div className="py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        {marks.map((m) => <span key={m.name} className={m.s} style={{ color: 'var(--ink)' }}>{m.name}</span>)}
      </div>
    </section>);

}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="mt-12" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          <span className="font-display text-[28px] leading-none" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Yash Sharma</span>
          <p className="text-[14px] m-0 max-w-[42ch]" style={{ color: 'var(--ink-soft)' }}>Developer Advocate at DigitalOcean. CNCF maintainer, Meshery. Hyderabad, India.</p>
          <a href="mailto:yashsharma2572@gmail.com" className="font-mono text-[13px] link-inline mt-2" style={{ color: 'var(--ink)' }}>yashsharma2572@gmail.com</a>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-faint)' }}>elsewhere</span>
          {['GitHub', 'LinkedIn', 'X / Twitter', 'YouTube'].map((s) => <a key={s} href="#" className="text-[14px] no-underline" style={{ color: 'var(--ink)' }}>{s}</a>)}
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
    </footer>);

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
    </aside>);

}

// ── Compose ────────────────────────────────────────────────────────────────
function App() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Nav />
      <RationaleBanner />
      <Hero />
      <LogoWall />
      <Credibility />
      <About />
      <SignatureTalks />
      <PullQuote
        quote="Yash is one of maybe ten people in cloud-native I trust to give an honest answer about a system, including the parts where they got it wrong."
        attribution="cncf tag observability co-chair" />
      
      <PhotoMarquee />
      <Content />
      <OpenSource />
      <PullQuote
        quote="The MCP security talk that finally made our director understand why our agent integration roadmap had to change."
        attribution="staff platform engineer · series-c ai infra" />
      
      <Social />
      <Press />
      <Footer />
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);