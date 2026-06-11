import g1 from "@/assets/gallery-community.jpg";
import g2 from "@/assets/program-outreach.jpg";
import g3 from "@/assets/gallery-volunteers.jpg";

const posts = [
  {
    img: g1,
    tag: "Community",
    date: "May 18, 2026",
    title: "Community Reading Day brings 300 families together",
    excerpt: "Our biggest barangay-wide reading celebration yet, with story tents, puppet shows, and a book swap.",
  },
  {
    img: g2,
    tag: "Partnerships",
    date: "Apr 04, 2026",
    title: "Two new partner schools join Project ABC this quarter",
    excerpt: "Welcoming Mabini Elementary and San Isidro Central School to our growing network across the province.",
  },
  {
    img: g3,
    tag: "Volunteers",
    date: "Mar 22, 2026",
    title: "Volunteer Spotlight: meet our 2026 reading facilitators",
    excerpt: "Thirty new kababayan stepped up this season — students, teachers, and lolas — each with a story to share.",
  },
];

export function News() {
  return (
    <section id="news" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-hand text-2xl text-primary">Latest News</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
              From the field.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            All news →
          </a>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="font-semibold text-primary">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
