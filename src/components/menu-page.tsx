import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import type { MenuSection } from "@/lib/menu-data";
import { orderLink, SiteFooter, SiteHeader } from "@/components/site-shell";

function MenuCard({ section }: { section: MenuSection }) {
  return (
    <article className="menu-card flex flex-col">
      <img src={section.image} alt={section.alt} className="h-56 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-xl font-bold">{section.title}</h2>
        {section.description && <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>}
        {section.note && <p className="mt-2 text-sm text-muted-foreground italic">{section.note}</p>}
        <div className="mt-4 flex-1">
          {section.items.map((item) => (
            <div key={item.name} className="price-row">
              <span className="text-sm">{item.name}</span>
              <span className="text-sm font-semibold whitespace-nowrap text-primary">{item.price}</span>
            </div>
          ))}
        </div>
        <a href={orderLink(section.title)} target="_blank" rel="noreferrer" className="btn-outline mt-5 w-full !py-2.5 text-sm">
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}

export function MenuPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: MenuSection[] }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-blush py-14 text-center md:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">{intro}</p>
            <Link to="/" className="btn-outline mt-7">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => <MenuCard key={section.title} section={section} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}