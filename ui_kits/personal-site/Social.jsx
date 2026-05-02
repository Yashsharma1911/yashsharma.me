// Social — viral tweets / linkedin posts. Editorial pull-card grid.
// Mono platform + date label, display-italic for the hook line, body for the post,
// mono engagement metrics in the footer. Hairline-bordered, no avatars, no chrome.
function Social() {
  const posts = [
    {
      platform: 'x.com',
      handle: '@yash',
      date: '2024 · oct 14',
      hook: 'Cardinality is a people problem.',
      body: 'Every "Prometheus is too expensive" thread eventually lands on the same finding: nobody owns the cardinality budget. The infra team thinks it\u2019s product. Product thinks it\u2019s SRE. SRE thinks it\u2019s an org problem. They\u2019re all right.',
      metrics: { primary: '12,400 reposts', secondary: '2.1M impressions' },
      href: '#',
    },
    {
      platform: 'linkedin',
      handle: 'yash',
      date: '2024 · sep 02',
      hook: 'Your platform team is a product team in denial.',
      body: 'If you have a roadmap, internal users, SLOs, and a budget you defend every quarter \u2014 you\u2019re a product team. Pretending otherwise is why your best engineers keep leaving for companies that say it out loud.',
      metrics: { primary: '4,800 reactions', secondary: '780 reposts' },
      href: '#',
    },
    {
      platform: 'x.com',
      handle: '@yash',
      date: '2024 · jun 21',
      hook: 'Operators are overrated.',
      body: 'Hot take I will defend with traces: most operators in production are a control loop wrapped around a state machine you didn\u2019t need. The cluster ran fine before. The cluster will run fine after. The operator is a job posting.',
      metrics: { primary: '8,900 reposts', secondary: '1.4M impressions' },
      href: '#',
    },
    {
      platform: 'linkedin',
      handle: 'yash',
      date: '2024 · apr 09',
      hook: 'I keep getting asked how the LFX-to-maintainer pipeline actually works.',
      body: 'The unglamorous answer: a senior maintainer has to take six unpaid hours a week, for six months, to do real review on someone else\u2019s code. There is no shortcut. There is no AI for this. There is only the calendar.',
      metrics: { primary: '3,200 reactions', secondary: '410 reposts' },
      href: '#',
    },
  ];

  const platformLabel = (p) => p === 'x.com' ? 'x · thread' : 'linkedin · post';

  return (
    <section id="social" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            social, when it travels
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7 flex items-baseline justify-between">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-display text-ink">
            The posts that left the building.
          </h2>
          <a href="#" className="text-[14px] link-inline hidden md:inline">
            Follow on x.com &rarr;
          </a>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            className="group col-span-12 md:col-span-6 flex flex-col gap-5 p-8 border border-rule rounded-[4px] no-underline hover:border-ink-faint transition-colors duration-150 bg-paper"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                {platformLabel(p.platform)}
              </span>
              <span className="font-mono text-[11px] text-ink-faint">
                {p.handle} · {p.date}
              </span>
            </div>

            <p className="font-display italic text-[26px] leading-[1.18] tracking-display text-ink m-0 group-hover:text-accent transition-colors duration-150">
              &ldquo;{p.hook}&rdquo;
            </p>

            <p className="text-[15px] leading-[1.6] text-ink-soft m-0">
              {p.body}
            </p>

            <div className="flex items-center gap-6 mt-auto pt-4 border-t border-rule">
              <span className="font-mono text-[12px] text-accent tracking-tightest">
                {p.metrics.primary}
              </span>
              <span className="font-mono text-[11px] text-ink-faint">
                {p.metrics.secondary}
              </span>
              <span className="ml-auto text-[13px] text-ink-soft">Read &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

window.Social = Social;
