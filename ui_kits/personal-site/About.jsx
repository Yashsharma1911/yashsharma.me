// About — 3 short paragraphs + currently strip. First-person, dry, no marketing voice.
function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            about
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <p className="font-display text-[28px] leading-[1.2] tracking-display text-ink">
            I&rsquo;ve spent six years operating Kubernetes at the kind of scale where
            the abstractions start to leak in interesting ways.
          </p>
          <p className="text-[17px] leading-[1.6] text-ink">
            Day to day I work on developer experience for a major cloud&rsquo;s Kubernetes
            and AI infrastructure platform &mdash; 20,000 clusters in production, 460TB
            of daily telemetry, the kind of multi-tenant control plane where every
            sharp edge eventually finds you. Before this I did SRE at a fintech and
            spent a year buried in etcd consensus bugs.
          </p>
          <p className="text-[17px] leading-[1.6] text-ink">
            I maintain a CNCF observability project, speak at KubeCon when there&rsquo;s
            something honest to say, and write a monthly essay about whatever is
            currently on fire in the platform. I came up through the LFX mentorship
            program, so I take mentoring seriously &mdash; thirty-plus mentees, several
            now maintainers themselves.
          </p>
          <p className="text-[17px] leading-[1.6] text-ink">
            I live in Bengaluru. The audience is global; the timezone is mine.
          </p>

          {/* Currently strip */}
          <div className="mt-6 pt-6 border-t border-rule grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">currently</span>
              <span className="text-[14px] text-ink">Senior Developer Advocate</span>
              <span className="text-[13px] text-ink-soft">Cloud-native &amp; AI infra</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">based</span>
              <span className="text-[14px] text-ink">Bengaluru, IN</span>
              <span className="text-[13px] text-ink-soft">UTC+5:30</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">focus</span>
              <span className="text-[14px] text-ink">Multi-tenant control planes</span>
              <span className="text-[13px] text-ink-soft">Observability at scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
