// Content index — selected writing/video/podcast/thread/talk-recap. Editorial grid, format tags.
function Content() {
  const items = [
    { format: 'essay', date: '2024 · oct', read: '18 min', title: 'Why Kubernetes won the boring war', dek: 'A long answer to a question I&rsquo;m asked at every conference: how did the most operationally complex platform in the industry become the safe choice?', href: '#' },
    { format: 'video', date: '2024 · sep', read: '42 min', title: 'An hour with the etcd maintainers', dek: 'A recorded conversation with two of the project’s core maintainers on consensus, calm releases, and the unfashionable work of keeping a database honest.', href: '#' },
    { format: 'essay', date: '2024 · jul', read: '12 min', title: 'The platform team is a product team in denial', dek: 'A short polemic, plus a concrete reorg model that has worked at two companies I&rsquo;ve advised.', href: '#' },
    { format: 'thread', date: '2024 · may', read: '4 min', title: 'A short thread on cardinality budgets', dek: 'The compressed version of a longer essay; useful if you&rsquo;re drafting a budget proposal this quarter.', href: '#' },
    { format: 'podcast', date: '2024 · apr', read: '58 min', title: 'Cloud Native Insiders · ep. 142', dek: 'On the LFX-mentee-to-maintainer pipeline, what makes it work, and why most companies underrate it.', href: '#' },
    { format: 'talk recap', date: '2024 · mar', read: '8 min', title: 'Notes from the observability re-architecture talk', dek: 'The version of the KubeCon EU talk that includes the things I had to cut for time.', href: '#' },
  ];

  const formatColor = 'text-ink-faint';

  return (
    <section id="writing" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            writing &amp; audio
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7 flex items-baseline justify-between">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-display text-ink">
            Selected work, mixed media.
          </h2>
          <a href="#" className="text-[14px] link-inline hidden md:inline">All writing &rarr;</a>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {items.map((it, i) => (
          <a
            key={i}
            href={it.href}
            className={`group col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4 p-6 border border-rule rounded-[4px] no-underline hover:border-ink-faint transition-colors duration-150 bg-paper`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-mono text-[10px] uppercase tracking-[0.14em] ${formatColor}`}>
                {it.format}
              </span>
              <span className="font-mono text-[11px] text-ink-faint">
                {it.date} &middot; {it.read}
              </span>
            </div>
            <h3 className="font-display text-[26px] leading-[1.15] tracking-display text-ink m-0 group-hover:text-accent transition-colors duration-150">
              {it.title}
            </h3>
            <p
              className="text-[14px] leading-[1.55] text-ink-soft m-0"
              dangerouslySetInnerHTML={{ __html: it.dek }}
            />
            <span className="text-[13px] text-ink-soft mt-auto">Read &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

window.Content = Content;
