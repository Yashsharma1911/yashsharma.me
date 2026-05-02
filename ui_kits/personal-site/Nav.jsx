// Top nav — sticky, paper background, hairline that appears on scroll.
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#talks', label: 'Talks' },
    { href: '#writing', label: 'Writing' },
    { href: '#open-source', label: 'Open source' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper border-b transition-colors duration-150 ${
        scrolled ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-[22px] tracking-display text-ink no-underline">
          Sahil Rao
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-soft hover:text-accent no-underline transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@sahil.dev"
            className="text-[14px] font-mono text-ink hover:text-accent no-underline transition-colors duration-150"
          >
            hello@sahil.dev
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
