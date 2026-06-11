import student from "@/assets/story-student.jpg";
import parent from "@/assets/story-parent.jpg";
import volunteer from "@/assets/story-volunteer.jpg";

const stories = [
  {
    img: student,
    kicker: "Student Story",
    name: "Mariel, 9",
    place: "Barangay Mabini",
    quote: "Dati nahihiya akong magbasa nang malakas. Ngayon, ako na ang nagkukuwento sa mga kapatid ko.",
    en: "I used to be too shy to read aloud. Now I'm the one telling stories to my siblings.",
  },
  {
    img: parent,
    kicker: "Parent Story",
    name: "Aling Rosa",
    place: "Mother of two",
    quote: "Bago, akala ko ako lang ang dapat magturo. Ngayon, kasama ko ang buong komunidad.",
    en: "Before, I thought I had to teach my children alone. Now I have a whole community with me.",
  },
  {
    img: volunteer,
    kicker: "Volunteer Story",
    name: "Kuya Jaymar",
    place: "Volunteer since 2022",
    quote: "Tuwing Sabado ang pinakapaborito kong araw. Yung mga ngiti ng bata, hindi mo mapapantayan.",
    en: "Saturdays are my favorite day of the week. The smiles of the kids — nothing compares.",
  },
];

export function Stories() {
  return (
    <section id="stories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-primary">Mga Kwento ng Pag-asa</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Stories from the heart of the community.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Behind every statistic is a face, a name, a family. These are the voices that keep us going.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {stories.map((s, idx) => (
            <article
              key={s.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.3_0.05_40/0.25)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.name}, ${s.kicker.toLowerCase()}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span
                  className="absolute left-5 top-5 rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: idx === 0 ? "var(--primary)" : idx === 1 ? "var(--sky)" : "var(--leaf)" }}
                >
                  {s.kicker}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <p className="font-display text-xl italic leading-snug text-ink">
                  "{s.quote}"
                </p>
                <p className="text-sm text-muted-foreground">{s.en}</p>
                <div className="mt-auto border-t border-border pt-4">
                  <div className="font-semibold text-ink">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.place}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
