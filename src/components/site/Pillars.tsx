const pillars = [
  {
    icon: "📖",
    name: "Abli",
    tag: "Open",
    color: "primary",
    desc: "Promoting access to learning opportunities and educational support for every child, in every barangay.",
  },
  {
    icon: "📚",
    name: "Basa",
    tag: "Read",
    color: "sky",
    desc: "Improving literacy and cultivating a lifelong love for reading among Filipino children and their families.",
  },
  {
    icon: "🤝",
    name: "Community",
    tag: "Together",
    color: "leaf",
    desc: "Building sustainable partnerships with families, schools, volunteers, and local organizations that last.",
  },
];

export function Pillars() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-primary">What we stand for</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Three pillars. One <em className="text-primary not-italic">malasakit</em>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Project ABC weaves together access, literacy, and kinship — a Filipino
            way of lifting up the next generation, one neighborhood at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.3_0.05_40/0.25)]"
            >
              <div
                className="absolute -right-10 -top-10 h-40 w-40 cloud-shape opacity-60 transition-transform group-hover:scale-110"
                style={{ background: `var(--${p.color})`, opacity: 0.18 }}
              />
              <div className="relative">
                <div className="text-5xl">{p.icon}</div>
                <div className="mt-6 flex items-baseline gap-3">
                  <h3 className="font-display text-3xl font-bold text-ink">{p.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.desc}</p>
                <div
                  className="mt-7 h-1 w-12 rounded-full transition-all group-hover:w-20"
                  style={{ background: `var(--${p.color})` }}
                />
              </div>
              <span
                aria-hidden
                className="absolute right-6 top-6 font-hand text-6xl opacity-15"
                style={{ color: `var(--${p.color})` }}
              >
                {String.fromCharCode(65 + i)}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
