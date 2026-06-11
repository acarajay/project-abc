import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1500, suffix: "+", label: "Children Reached", color: "primary" },
  { value: 120, suffix: "+", label: "Community Volunteers", color: "sky" },
  { value: 50, suffix: "+", label: "Reading Sessions", color: "leaf" },
  { value: 10, suffix: "+", label: "Partner Schools", color: "plum" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-ink py-20 text-cream sm:py-24">
      <div aria-hidden className="absolute inset-0 paper-grid opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {stats.map((s) => (
            <div key={s.label} className="border-cream/10 lg:border-l lg:pl-8 first:lg:border-l-0 first:lg:pl-0">
              <div
                className="font-display text-5xl font-bold sm:text-6xl"
                style={{ color: `var(--${s.color})` }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cream/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
