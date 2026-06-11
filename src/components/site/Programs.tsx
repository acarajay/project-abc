import camp from "@/assets/program-camp.jpg";
import mobile from "@/assets/program-mobile.jpg";
import teacher from "@/assets/program-teacher.jpg";
import outreach from "@/assets/program-outreach.jpg";
import scholarship from "@/assets/program-scholarship.jpg";

const programs = [
  { img: camp, title: "Reading Camps", desc: "Weekend immersions in storytelling, comprehension, and creativity for children ages 5–12." },
  { img: mobile, title: "Mobile Library", desc: "A book-filled tricycle that travels barangay to barangay, bringing stories to every doorstep." },
  { img: teacher, title: "Teacher Training", desc: "Workshops that equip public-school teachers with modern, joyful literacy techniques." },
  { img: outreach, title: "Community Outreach", desc: "Family events that celebrate reading together — parents and children, side by side." },
  { img: scholarship, title: "Scholarship Assistance", desc: "Books, supplies, and tuition support for students who need a little extra hand." },
];

export function Programs() {
  return (
    <section id="programs" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-hand text-2xl text-primary">Our Programs</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
              Programs designed with — not just for — the community.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each program is co-created with local schools, parents, and barangay leaders to make sure it fits the rhythm of life on the ground.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl font-bold text-cream">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/85">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sun">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
