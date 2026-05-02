// Footer — minimal. Social, contact, source repo. No newsletter. No cookie banner.
function Footer() {
  return (
    <footer className="border-t border-rule mt-12">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          <span className="font-display text-[28px] tracking-display text-ink leading-none">Sahil Rao</span>
          <p className="text-[14px] text-ink-soft m-0 max-w-[42ch]">
            Senior Developer Advocate. Cloud-native and AI infrastructure.
            Bengaluru, India.
          </p>
          <a href="mailto:hello@sahil.dev" className="font-mono text-[13px] link-inline mt-2">hello@sahil.dev</a>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint mb-2">elsewhere</span>
          <a href="#" className="text-[14px] no-underline text-ink hover:text-accent transition-colors">GitHub</a>
          <a href="#" className="text-[14px] no-underline text-ink hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-[14px] no-underline text-ink hover:text-accent transition-colors">X / Twitter</a>
          <a href="#" className="text-[14px] no-underline text-ink hover:text-accent transition-colors">YouTube</a>
        </div>

        <div className="col-span-6 md:col-span-4 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint mb-2">colophon</span>
          <p className="text-[13px] text-ink-soft m-0">
            Set in Instrument Serif and Geist. Numerals in JetBrains Mono.
            Hosted as static HTML.
          </p>
          <a href="#" className="font-mono text-[12px] link-inline mt-1">github.com/sahilrao/sahil.dev &rarr;</a>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[11px] text-ink-faint">&copy; 2024 Sahil Rao</span>
          <span className="font-mono text-[11px] text-ink-faint">last updated &middot; oct 2024</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
