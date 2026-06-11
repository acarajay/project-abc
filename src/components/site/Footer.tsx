import logoAsset from "@/assets/logo-abc.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="Project ABC" width={44} height={44} className="h-11 w-11 object-contain" />
              <div className="font-display text-xl font-bold text-cream">Project ABC</div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A Filipino community initiative for literacy, learning, and lasting partnerships. Abli, Basa, Community — para sa bawat bata.
            </p>
          </div>

          <FooterCol title="Explore" links={["About", "Programs", "Stories", "Gallery"]} />
          <FooterCol title="Get involved" links={["Volunteer", "Donate", "Partner", "Careers"]} />
          <FooterCol title="Connect" links={["Facebook", "Instagram", "Email", "Newsletter"]} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Project ABC — Abli, Basa, Community. All rights reserved.</p>
          <p className="font-hand text-base text-sun">Maraming salamat sa pagtulong.</p>
        </div>
      </div>
    </footer> 
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-sun">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
