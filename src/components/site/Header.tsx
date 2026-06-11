import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo-abc.png";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#stories", label: "Stories" },
  { href: "#help", label: "How to Help" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset}
            alt="Project ABC logo"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 object-contain"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold text-ink">
              Project ABC
            </div>
            <div className="truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Abli · Basa · Community
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#help"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            Donate
          </a>
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-border bg-card p-2 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-cream lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#help"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
