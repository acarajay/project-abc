const ways = [
  {
    tag: "Volunteer",
    title: "Give your time",
    desc: "Facilitate reading sessions, run a workshop, or help organize community events. Even one Saturday a month makes a difference.",
    cta: "Sign up to volunteer",
    color: "primary",
    icon: (
      <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm6 10v-1a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v1" />
    ),
  },
  {
    tag: "Donate",
    title: "Fund a library",
    desc: "Sponsor books, learning kits, and scholarships. ₱500 puts a storybook in a child's hands; ₱5,000 fuels a whole reading camp.",
    cta: "Donate now",
    color: "sun",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    ),
  },
  {
    tag: "Partner",
    title: "Build together",
    desc: "Schools, LGUs, and organizations — let's collaborate on programs that fit your community's unique story and needs.",
    cta: "Become a partner",
    color: "leaf",
    icon: (
      <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>
    ),
  },
];

export function Help() {
  return (
    <section id="help" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-primary">How You Can Help</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Three ways to be part of the story.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ways.map((w) => (
            <article
              key={w.tag}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.3_0.05_40/0.25)]"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: `color-mix(in oklab, var(--${w.color}) 18%, transparent)` }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={`var(--${w.color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {w.icon}
                </svg>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{w.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{w.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{w.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                {w.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
