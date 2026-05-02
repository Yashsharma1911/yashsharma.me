// Hero — type-driven. Name + positioning + CTAs left, supporting stage photo right.
// No portrait shadow, no carousel. Photo is column 7-11, supporting evidence not focal point.
function Hero() {
  return (
    <section id="top" className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            sahil rao &middot; based in bengaluru
          </span>
          <h1 className="font-display text-[56px] sm:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.02em] text-ink">
            I work on the parts of Kubernetes most people would rather not think about.
          </h1>
          <p className="text-[20px] leading-[1.5] text-ink-soft max-w-[42ch]">
            Senior Developer Advocate. Cloud-native and AI infrastructure. CNCF maintainer.
            Recurring KubeCon speaker across four continents.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#talks"
              className="inline-flex items-center gap-2 bg-ink text-paper text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline hover:bg-[#2A2520] transition-colors"
            >
              Read recent talks
            </a>
            <a
              href="#writing"
              className="inline-flex items-center gap-2 border border-rule text-ink text-[14px] font-medium px-[18px] py-[10px] rounded-[4px] no-underline hover:bg-ink hover:text-paper hover:border-ink transition-colors"
            >
              Recent writing
            </a>
            <a
              href="mailto:hello@sahil.dev"
              className="text-[14px] text-ink-soft link-inline ml-2"
            >
              or email me
            </a>
          </div>
        </div>

        {/* Supporting evidence photo — column 7-11, hairline-bordered, no shadow */}
        <div className="col-span-12 lg:col-span-5 lg:pl-12 flex items-end">
          <figure className="w-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[4px] border border-rule bg-paper-deep">
              <img
                src="https://picsum.photos/seed/kubecon-stage/640/800"
                alt="Sahil mid-talk at KubeCon EU 2024"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.85) contrast(0.98)' }}
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] text-ink-faint uppercase tracking-[0.12em]">
              kubecon eu &middot; paris &middot; mar 2024
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
