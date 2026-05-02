// Open source — flagship project anchors the section. CNCF status shown prominently.
function OpenSource() {
  const flagship = {
    name: 'observe-mesh',
    role: 'maintainer',
    badge: 'CNCF Sandbox',
    desc: 'A multi-tenant observability mesh for Kubernetes, focused on cardinality control and bounded-cost retention. Used in production at five organizations operating Kubernetes fleets above 1,000 clusters.',
    lang: 'Go',
    stars: '6.4k',
    forks: '412',
  };
  const others = [
    { name: 'kubectl-ostracize', role: 'maintainer', desc: 'A kubectl plugin for safely cordoning and draining nodes in a multi-tenant cluster, with PDB-aware retry semantics.', lang: 'Go', stars: '1.2k', forks: '88' },
    { name: 'kep-reader', role: 'contributor', desc: 'A small terminal app that surfaces the current state of every Kubernetes Enhancement Proposal you might care about. Built originally for personal use.', lang: 'Rust', stars: '720', forks: '34' },
    { name: 'cardinality-budget', role: 'author', desc: 'A reference implementation of the cardinality budget pattern described in the observability talks.', lang: 'Go', stars: '512', forks: '41' },
  ];

  return (
    <section id="open-source" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            open source
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-display text-ink">
            What I maintain, in order of stake.
          </h2>
        </div>
      </header>

      {/* Flagship */}
      <article className="grid grid-cols-12 gap-6 py-12 border-y border-rule">
        <div className="col-span-12 lg:col-span-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-accent text-accent text-[11px] font-mono uppercase tracking-[0.14em] rounded-[2px]">
            {flagship.badge}
          </span>
        </div>
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h3 className="font-mono text-[32px] tracking-[-0.02em] text-ink m-0">{flagship.name}</h3>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-faint">
              {flagship.role}
            </span>
          </div>
          <p className="text-[18px] leading-[1.5] text-ink max-w-[64ch] m-0">{flagship.desc}</p>
          <div className="flex gap-6 items-center mt-2">
            <span className="font-mono text-[12px] text-ink-soft">{flagship.lang}</span>
            <span className="font-mono text-[12px] text-ink-soft">{flagship.stars} ★</span>
            <span className="font-mono text-[12px] text-ink-soft">{flagship.forks} forks</span>
            <a href="#" className="text-[14px] link-inline ml-auto">github.com/sahilrao/observe-mesh &rarr;</a>
          </div>
        </div>
      </article>

      {/* Others */}
      <div className="grid grid-cols-12 gap-6 mt-4">
        {others.map((p) => (
          <article key={p.name} className="col-span-12 md:col-span-4 flex flex-col gap-3 p-6 border border-rule rounded-[4px] hover:border-ink-faint transition-colors duration-150">
            <div className="flex items-baseline justify-between">
              <h4 className="font-mono text-[18px] tracking-[-0.02em] text-ink m-0">{p.name}</h4>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{p.role}</span>
            </div>
            <p className="text-[14px] leading-[1.55] text-ink-soft m-0">{p.desc}</p>
            <div className="flex gap-4 mt-auto">
              <span className="font-mono text-[11px] text-ink-faint">{p.lang}</span>
              <span className="font-mono text-[11px] text-ink-faint">{p.stars} ★</span>
              <span className="font-mono text-[11px] text-ink-faint">{p.forks} forks</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.OpenSource = OpenSource;
