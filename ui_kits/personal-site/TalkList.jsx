// Compact talks list — grouped by year, recent first. Mono dates + venues.
function TalkList() {
  const talks = [
    { year: 2024, items: [
      { date: 'oct', title: 'GPU scheduling is harder than you think (and easier than you fear)', venue: 'ray summit', loc: 'san francisco', slides: '#', video: '#' },
      { date: 'sep', title: 'The control plane is the product', venue: 'containerdays', loc: 'hamburg', slides: '#', video: '#' },
      { date: 'jun', title: 'Operating a 20k-cluster fleet without operating yourself into the ground', venue: 'kcd india', loc: 'bengaluru', slides: '#', video: '#' },
      { date: 'mar', title: 'Re-architecting observability for 20,000 clusters', venue: 'kubecon eu', loc: 'paris', slides: '#', video: '#' },
      { date: 'feb', title: 'A workshop on writing your first KEP', venue: 'kubecon eu colocated', loc: 'paris', slides: '#', video: null },
    ]},
    { year: 2023, items: [
      { date: 'nov', title: 'Why your platform team is a product team in denial', venue: 'kubecon na', loc: 'chicago', slides: '#', video: '#' },
      { date: 'sep', title: 'Tracing in multi-tenant Kubernetes: a field report', venue: 'open source summit', loc: 'shanghai', slides: '#', video: '#' },
      { date: 'jul', title: 'How we shipped a control-plane migration with zero downtime', venue: 'kcd bengaluru', loc: 'bengaluru', slides: '#', video: '#' },
      { date: 'apr', title: 'The observability re-architecture, six months in', venue: 'kubecon eu', loc: 'amsterdam', slides: '#', video: '#' },
      { date: 'feb', title: 'A maintainer’s reading list', venue: 'cloud native rejekts', loc: 'amsterdam', slides: '#', video: '#' },
    ]},
    { year: 2022, items: [
      { date: 'oct', title: 'etcd at multi-tenant scale: the bugs we found', venue: 'kubecon na', loc: 'detroit', slides: '#', video: '#' },
      { date: 'aug', title: 'From LFX mentee to maintainer', venue: 'open source summit', loc: 'austin', slides: '#', video: '#' },
      { date: 'may', title: 'Designing for the platform&rsquo;s tenth year', venue: 'kubecon eu', loc: 'valencia', slides: '#', video: '#' },
    ]},
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            full talks list
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-display text-ink">
            Every talk, recent first.
          </h2>
          <p className="text-[16px] text-ink-soft mt-4 max-w-[52ch]">
            If a recording exists, it&rsquo;s linked. Slide decks for the rest.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-start-4 lg:col-span-9">
          {talks.map((group) => (
            <div key={group.year} className="mb-12">
              <div className="flex items-baseline gap-6 pb-3 border-b border-rule">
                <span className="font-display text-[28px] tracking-display text-ink">{group.year}</span>
                <span className="font-mono text-[11px] text-ink-faint">{group.items.length} talks</span>
              </div>
              {group.items.map((t, i) => (
                <div
                  key={i}
                  className="talk-row grid grid-cols-12 gap-4 py-[14px] border-b border-rule items-baseline"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[12px] text-ink-soft">
                    {t.date}
                  </span>
                  <a
                    href="#"
                    className="col-span-10 sm:col-span-6 text-[16px] text-ink hover:text-accent no-underline transition-colors duration-150"
                  >
                    {t.title}
                  </a>
                  <span className="col-span-7 sm:col-span-3 font-mono text-[11px] text-ink-faint">
                    {t.venue} &middot; {t.loc}
                  </span>
                  <span className="col-span-5 sm:col-span-2 text-[13px] text-right flex justify-end gap-3">
                    {t.slides && <a href={t.slides} className="link-inline">slides</a>}
                    {t.video && <a href={t.video} className="link-inline">video</a>}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TalkList = TalkList;
