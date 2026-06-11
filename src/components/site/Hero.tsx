import heroImg from "@/assets/hero-reading.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Decorative cloud shapes */}
      <div aria-hidden className="pointer-events-none absolute -top-10 -left-20 h-72 w-[28rem] cloud-shape opacity-60 float-soft" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-56 w-96 cloud-shape opacity-50 float-soft" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            A Filipino Community Initiative
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-6xl lg:text-[4.2rem]">
            Empowering communities through{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-primary italic">reading</span>
              <svg className="absolute -bottom-2 left-0 h-3 w-full text-sun" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q 50 2, 100 6 T 198 4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            , learning, and action.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <span className="font-hand text-2xl text-primary">Abli.</span>{" "}
            <span className="font-hand text-2xl text-sky">Basa.</span>{" "}
            <span className="font-hand text-2xl text-leaf">Community.</span>{" "}
            Building a future where every child can learn, every family can
            participate, and every community can thrive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#help"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.555_0.182_28/0.6)] transition-transform hover:scale-[1.03]"
            >
              Join the Movement
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#help" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-card px-7 py-3.5 text-base font-semibold text-ink hover:border-primary hover:text-primary">
              Volunteer
            </a>
            <a href="#help" className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 text-base font-semibold text-ink hover:brightness-95">
              Donate
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 text-left">
            {[
              { v: "1,500+", l: "Children reached" },
              { v: "120+", l: "Volunteers" },
              { v: "10+", l: "Partner schools" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_80px_-30px_oklch(0.3_0.05_40/0.35)]">
            <img
              src={heroImg}
              alt="Filipino children reading colorful storybooks together outdoors"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-6 pt-16">
              <p className="font-hand text-2xl text-cream">
                "Every page is a door. Every child a key."
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="h-9 w-9 rounded-full border-2 border-card bg-primary" />
                <span className="h-9 w-9 rounded-full border-2 border-card bg-sky" />
                <span className="h-9 w-9 rounded-full border-2 border-card bg-leaf" />
                <span className="h-9 w-9 rounded-full border-2 border-card bg-sun" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-ink">Join 120+ kababayan</div>
                <div className="text-muted-foreground">volunteering this season</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
