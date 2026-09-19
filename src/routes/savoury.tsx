import { createFileRoute } from "@tanstack/react-router";

import { MenuPage } from "@/components/menu-page";
import { savouryMenu } from "@/lib/menu-data";

export const Route = createFileRoute("/savoury")({
  head: () => ({
    meta: [
      { title: "Savoury Menu | Flavour Pantry GQ" },
      { name: "description", content: "Browse Flavour Pantry GQ's halaal samoosas, pies, mini savouries and heat-and-eat favourites in Malabar." },
      { property: "og:title", content: "Savoury Menu | Flavour Pantry GQ" },
      { property: "og:description", content: "Fresh halaal samoosas, pies, mini savouries and heat-and-eat favourites in Malabar, Gqeberha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SavouryPage,
});

function SavouryPage() {
  return <MenuPage eyebrow="Savoury Menu" title="Samoosas, pies and halaal savouries" intro="Freshly prepared with quality halaal ingredients, ready for family tables, functions and easy entertaining." sections={savouryMenu} />;
}