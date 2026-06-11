import g1 from "@/assets/gallery-reading.jpg";
import g2 from "@/assets/gallery-community.jpg";
import g3 from "@/assets/gallery-books.jpg";
import g4 from "@/assets/gallery-volunteers.jpg";
import g5 from "@/assets/program-camp.jpg";
import g6 from "@/assets/program-mobile.jpg";

const photos = [
  { src: g1, alt: "Children reading on a woven mat", caption: "Reading circle, Quezon" },
  { src: g2, alt: "Community gathering with string lights", caption: "Barangay night, Cavite" },
  { src: g3, alt: "Stack of donated children's books", caption: "Book drive, May 2026" },
  { src: g4, alt: "Group of volunteers smiling together", caption: "Volunteer Saturday" },
  { src: g5, alt: "Outdoor reading camp under coconut trees", caption: "Summer reading camp" },
  { src: g6, alt: "Mobile library tricycle with children", caption: "Mobile library route" },
];

export function Gallery() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-hand text-2xl text-primary">Gallery</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
              Moments from the ground.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            See all photos →
          </a>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 to-transparent p-4 text-sm text-cream opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
