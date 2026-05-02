// Photo marquee — the site's signature interaction. Continuous slow scroll, paused on hover.
// Tiles desaturated at rest; hover clears the filter and reveals venue + year in mono.
function PhotoMarquee() {
  const photos = [
    { src: 'https://picsum.photos/seed/m1/520/340', venue: 'kubecon eu', year: '2024' },
    { src: 'https://picsum.photos/seed/m2/520/340', venue: 'containerdays', year: '2024' },
    { src: 'https://picsum.photos/seed/m3/520/340', venue: 'ray summit', year: '2024' },
    { src: 'https://picsum.photos/seed/m4/520/340', venue: 'kubecon na', year: '2023' },
    { src: 'https://picsum.photos/seed/m5/520/340', venue: 'open source summit', year: '2023' },
    { src: 'https://picsum.photos/seed/m6/520/340', venue: 'kcd bengaluru', year: '2023' },
    { src: 'https://picsum.photos/seed/m7/520/340', venue: 'kubecon eu', year: '2022' },
  ];
  const doubled = [...photos, ...photos];

  return (
    <section className="py-24 overflow-hidden border-y border-rule bg-paper">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 mb-10 flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          on stage &middot; 2022–2024
        </span>
        <span className="font-mono text-[11px] text-ink-faint hidden md:inline">
          hover to pause &middot; venue surfaces in mono
        </span>
      </div>
      <div className="relative">
        <div className="marquee-track flex gap-4 w-max will-change-transform">
          {doubled.map((p, i) => (
            <a
              key={i}
              href="#"
              className="marquee-tile relative block w-[360px] h-[230px] rounded-[4px] overflow-hidden border border-rule no-underline shrink-0"
            >
              <img src={p.src} alt={`${p.venue} ${p.year}`} className="w-full h-full object-cover" />
              <div className="meta absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex flex-col justify-end p-4 gap-1">
                <span className="font-mono text-[13px] text-paper">{p.venue}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/70">{p.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PhotoMarquee = PhotoMarquee;
