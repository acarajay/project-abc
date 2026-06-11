import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { Pillars } from "../components/site/Pillars";
import { Stats } from "../components/site/Stats";
import { Programs } from "../components/site/Programs";
import { Stories } from "../components/site/Stories";
import { Gallery } from "../components/site/Gallery";
import { Help } from "../components/site/Help";
import { News } from "../components/site/News";
import { Contact } from "../components/site/Contact";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project ABC — Abli, Basa, Community" },
      { name: "description", content: "A Filipino community initiative empowering children and families through reading, learning, and action. Volunteer, donate, or partner with us." },
      { property: "og:title", content: "Project ABC — Abli, Basa, Community" },
      { property: "og:description", content: "Empowering communities through reading, learning, and action across the Philippines." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Stats />
        <Programs />
        <Stories />
        <Gallery />
        <Help />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
