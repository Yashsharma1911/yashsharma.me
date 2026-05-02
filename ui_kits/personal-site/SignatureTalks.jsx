// Signature talks — 3 talks. Each: title + framing + 3-4 bullets + photo + video thumbnail
// + venue/date in mono + slides/video links. Editorial layout: title-overlay on the video thumbnail,
// venue + date in mono.
function SignatureTalk({ talk, reverse }) {
  return (
    <article className="grid grid-cols-12 gap-6 py-16 border-t border-rule">
      <div className={`col-span-12 lg:col-span-7 ${reverse ? 'lg:order-2 lg:col-start-6' : ''} flex flex-col gap-5`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          {talk.venue} &middot; {talk.date}
        </span>
        <h3 className="font-display text-[40px] lg:text-[48px] leading-[1.08] tracking-display text-ink">
          {talk.title}
        </h3>
        <p className="text-[18px] leading-[1.5] text-ink-soft max-w-[52ch]">
          {talk.framing}
        </p>
        <ul className="flex flex-col gap-2 mt-2">
          {talk.takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-[1.5] text-ink">
              <span className="font-mono text-[11px] text-ink-faint pt-[5px]">{String(i + 1).padStart(2, '0')}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-3">
          <a href="#" className="text-[14px] link-inline">Slides &rarr;</a>
          <a href="#" className="text-[14px] link-inline">Watch recording &rarr;</a>
        </div>
      </div>

      <div className={`col-span-12 lg:col-span-5 ${reverse ? 'lg:order-1' : ''} flex flex-col gap-3`}>
        <a href="#" className="block relative aspect-video overflow-hidden rounded-[4px] border border-rule no-underline group">
          <img
            src={talk.image}
            alt={`${talk.title} at ${talk.venue}`}
            className="w-full h-full object-cover transition-[filter] duration-200"
            style={{ filter: 'saturate(0.85)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            <span className="self-end inline-flex items-center justify-center w-10 h-10 rounded-full bg-paper/90 backdrop-blur-0">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="#1A1714"><path d="M4 2.5v11l9-5.5z"/></svg>
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[20px] leading-[1.15] text-paper">{talk.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/70">
                {talk.venue} &middot; {talk.date}
              </span>
            </div>
          </div>
        </a>
        <span className="font-mono text-[11px] text-ink-faint">
          {talk.duration} &middot; {talk.audience}
        </span>
      </div>
    </article>
  );
}

function SignatureTalks() {
  const talks = [
    {
      title: 'Re-architecting observability for 20,000 clusters',
      framing:
        'How we cut our observability bill in half while doubling cardinality &mdash; and the three architectural decisions we wish we&rsquo;d made eighteen months earlier.',
      takeaways: [
        'Why pull-based collection breaks first at multi-tenant scale, and the hybrid we landed on',
        'The cardinality-vs-retention tradeoff nobody on your platform team is actually doing the math on',
        'A telemetry pipeline that survived a 14x growth in workloads with the same headcount',
        'What we got wrong about Prometheus federation, and the migration path out',
      ],
      venue: 'kubecon eu 2024',
      date: 'mar · paris',
      duration: '38 min',
      audience: '~ 1,400 in room',
      image: 'https://picsum.photos/seed/talk-eu/960/540',
    },
    {
      title: 'The control plane is the product',
      framing:
        'A case for treating your Kubernetes control plane as a product surface with users, SLOs, and a roadmap &mdash; not as infrastructure to be hidden.',
      takeaways: [
        'The three control-plane SLOs that actually correlate with developer productivity',
        'Why "platform team" is the wrong org structure once you cross 200 internal teams',
        'A concrete playbook for moving from ticket-driven to API-driven platform ops',
      ],
      venue: 'containerdays 2024',
      date: 'sep · hamburg',
      duration: '32 min',
      audience: '~ 800 in room',
      image: 'https://picsum.photos/seed/talk-hamburg/960/540',
    },
    {
      title: 'GPU scheduling is harder than you think (and easier than you fear)',
      framing:
        'A field report from running mixed AI and traditional workloads on the same Kubernetes substrate, and the open-source primitives that made it tractable.',
      takeaways: [
        'Why fractional GPU allocation isn&rsquo;t the bottleneck most teams think it is',
        'The MIG-vs-MPS decision tree, with cost data from production',
        'How the device-plugin API actually composes with topology-aware scheduling',
        'A reading list of papers and KEPs worth your saturday morning',
      ],
      venue: 'ray summit 2024',
      date: 'oct · san francisco',
      duration: '28 min',
      audience: '~ 600 in room',
      image: 'https://picsum.photos/seed/talk-ray/960/540',
    },
  ];

  return (
    <section id="talks" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            signature talks
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-display text-ink">
            Three talks I&rsquo;d give again, refined.
          </h2>
        </div>
      </header>
      {talks.map((t, i) => (
        <SignatureTalk key={t.title} talk={t} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}

window.SignatureTalks = SignatureTalks;
