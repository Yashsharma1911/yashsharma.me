// Credibility strip — six entries. First three unfakeable production claims; the rest signal trust.
// Numerals in mono + accent; non-numeric "CNCF Maintainer" entry is set in display italic so it
// reads as a prestige signal next to the numbers without looking broken.
function Credibility() {
  const entries = [
    { numeral: '20,000+', unit: '', label: 'kubernetes clusters · production' },
    { numeral: '460', unit: 'TB', label: 'daily telemetry processed' },
    { numeral: '4', unit: '', label: 'continents · kubecon talks' },
    { display: 'CNCF', label: 'maintainer · cloud-native project' },
    { numeral: '6', unit: 'yr', label: 'lfx mentee → cncf maintainer' },
    { numeral: '30+', unit: '', label: 'developers mentored' },
  ];

  return (
    <section className="bg-paper-deep">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint mb-8">
          on record
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          {entries.map((e, i) => (
            <div key={i} className="flex flex-col gap-3">
              {e.numeral ? (
                <span className="font-mono text-[56px] lg:text-[64px] leading-none text-accent tracking-tightest">
                  {e.numeral}
                  {e.unit && (
                    <span className="text-[28px] text-ink-faint ml-1 align-baseline">{e.unit}</span>
                  )}
                </span>
              ) : (
                <span className="font-display italic text-[44px] lg:text-[56px] leading-none text-ink">
                  {e.display}
                </span>
              )}
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint leading-[1.5]">
                {e.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Credibility = Credibility;
