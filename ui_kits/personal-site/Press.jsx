// Press / featured-in — Adam's pattern, technical context. Single ink fill, no badges.
function Press() {
  const marks = [
    { name: 'The New Stack', style: 'font-display text-[22px] italic' },
    { name: 'InfoQ', style: 'font-sans text-[18px] font-bold tracking-[-0.01em]' },
    { name: 'Kubernetes Podcast', style: 'font-mono text-[16px]' },
    { name: 'Software Engineering Daily', style: 'font-display text-[18px] tracking-display' },
    { name: 'CNCF Blog', style: 'font-mono text-[18px] font-medium' },
    { name: 'Cloud Native Insiders', style: 'font-display italic text-[20px]' },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 pb-12">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint mb-6">
        appeared in &middot; covered by
      </span>
      <div className="border-y border-rule py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        {marks.map((m) => (
          <span key={m.name} className={`text-ink ${m.style}`}>{m.name}</span>
        ))}
      </div>
    </section>
  );
}

window.Press = Press;
