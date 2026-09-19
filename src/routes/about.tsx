import { createFileRoute } from "@tanstack/react-router";
import { Heart, MessageCircle } from "lucide-react";

import storyPastriesAsset from "@/assets/story-pastries.png.asset.json";
import storySavouryAsset from "@/assets/story-savoury.png.asset.json";
import { SiteFooter, SiteHeader, waLink } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Flavour Pantry GQ" },
      { name: "description", content: "Discover the story behind Flavour Pantry GQ, a family-run home bakery in Malabar, Gqeberha." },
      { property: "og:title", content: "Our Story | Flavour Pantry GQ" },
      { property: "og:description", content: "Meet the family behind Flavour Pantry GQ and our freshly made sweet and savoury food." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-blush py-14 text-center md:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <p className="section-eyebrow">Est. 2025</p>
            <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Our Story</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">Homemade sweet and savoury favourites, prepared with care in Malabar.</p>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-muted-foreground md:text-lg">Flavour Pantry GQ started in 2025 in a family kitchen in Malabar, Gqeberha, with a simple idea: proper halaal home baking that tastes like it was made for you, because it was.</p>
              <p className="mt-5 text-muted-foreground md:text-lg">Orders are baked fresh daily — fancy cakes for tea trays, bento cakes for birthdays, trays of samoosas and pies for Ramadhaan, and combo packages for matric farewells. Nothing sits on a shelf.</p>
              <p className="mt-5 text-muted-foreground md:text-lg">We use fresh, premium-quality halaal ingredients, keep our batches small, and treat every order like it is going to our own table.</p>
              <p className="mt-7 flex items-center gap-2 font-semibold text-primary"><Heart className="h-5 w-5" />Homemade with love</p>
            <a href={waLink("Hi Flavour Pantry! I'd like to place an order.")} target="_blank" rel="noreferrer" className="btn-primary mt-8"><MessageCircle className="h-4 w-4" />WhatsApp Us</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={storyPastriesAsset.url} alt="Sweet pastries and fancy cakes from Flavour Pantry GQ" className="w-full rounded-2xl border border-border shadow-lg" />
              <img src={storySavouryAsset.url} alt="Halaal savoury samoosas and pies from Flavour Pantry GQ" className="w-full rounded-2xl border border-border shadow-lg" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}