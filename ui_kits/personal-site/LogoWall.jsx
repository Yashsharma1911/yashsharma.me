// Conference logo wall — single horizontal monochrome strip.
// Wordmarks set in different families to suggest the original logo while staying ink-only.
function LogoWall() {
  const marks = [
    { name: 'KubeCon + CloudNativeCon', style: 'font-display text-[24px] tracking-display' },
    { name: 'CNCF', style: 'font-mono text-[20px] font-medium tracking-[-0.02em]' },
    { name: 'ContainerDays', style: 'font-display italic text-[22px]' },
    { name: 'Cloud Native Rejekts', style: 'font-sans uppercase text-[14px] font-semibold tracking-[0.06em]' },
    { name: 'Ray Summit', style: 'font-display text-[24px]' },
    { name: 'KCD India', style: 'font-mono text-[18px] font-medium' },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 lg:px-16 pb-24">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint mb-6">
        spoken at
      </span>
      <div className="border-y border-rule py-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        {marks.map((m) => (
          <span key={m.name} className={`text-ink ${m.style}`}>
            {m.name}
          </span>
        ))}
      </div>
    </section>
  );
}

window.LogoWall = LogoWall;
