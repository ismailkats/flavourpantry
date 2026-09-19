import { createFileRoute } from "@tanstack/react-router";

import { MenuPage } from "@/components/menu-page";
import { sweetMenu } from "@/lib/menu-data";

export const Route = createFileRoute("/sweet")({
  head: () => ({
    meta: [
      { title: "Sweet Menu | Flavour Pantry GQ" },
      { name: "description", content: "Browse Flavour Pantry GQ's cakes, cupcakes, cheesecakes, desserts and sweet platters, baked fresh in Malabar." },
      { property: "og:title", content: "Sweet Menu | Flavour Pantry GQ" },
      { property: "og:description", content: "Cakes, cupcakes, cheesecakes, desserts and sweet platters baked fresh in Malabar, Gqeberha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SweetPage,
});

function SweetPage() {
  return <MenuPage eyebrow="Sweet Menu" title="Cakes, desserts and sweet treats" intro="Made fresh to order for family gatherings, functions and every celebration worth making sweeter." sections={sweetMenu} />;
}