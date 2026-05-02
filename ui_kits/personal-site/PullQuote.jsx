// Pull-quote — display italic on paper-deep, mono attribution. Used between sections.
function PullQuote({ quote, attribution }) {
  return (
    <section className="bg-paper-deep">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2 lg:col-start-2">
            <span className="font-display text-[64px] leading-none text-ink-faint select-none">&ldquo;</span>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <blockquote className="font-display italic text-[36px] lg:text-[44px] leading-[1.18] tracking-display text-ink m-0">
              {quote}
            </blockquote>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft">
              {attribution}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PullQuote = PullQuote;
