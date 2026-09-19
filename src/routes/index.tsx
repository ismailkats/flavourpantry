import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Check, Croissant, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import blueCupcakes from "@/assets/blue_cupcakes.jpg";
import bundt from "@/assets/bundt.jpg";
import eclairs from "@/assets/eclairs.jpg";
import fancyCakes from "@/assets/fancy_cakes.jpg";
import heroImg from "@/assets/hero.jpg";
import lemonTarts from "@/assets/lemon_tarts.jpg";
import logo from "@/assets/logo.png";
import pies from "@/assets/pies.jpg";
import samoosas from "@/assets/samoosas.jpg";
import tallCake from "@/assets/tall_cake.jpg";
import whatsappQr from "@/assets/whatsapp_qr.png";
import bentoSpecialAsset from "@/assets/eid-bento-cake.jpg.asset.json";
import matricComboAsset from "@/assets/matric-combo.jpg.asset.json";
import savouryAsset from "@/assets/savoury.png.asset.json";
import sweetAsset from "@/assets/sweet.jpg.asset.json";
import { SiteFooter, SiteHeader, waLink } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flavour Pantry GQ | Home-Baked Cakes & Savouries" },
      { name: "description", content: "Home-baked cakes, desserts and halaal savouries in Malabar, Gqeberha. Order on WhatsApp 081 510 8257." },
      { name: "author", content: "Flavour Pantry GQ" },
      { property: "og:title", content: "Flavour Pantry GQ | Home-Baked Cakes & Savouries" },
      { property: "og:description", content: "Home-baked cakes, desserts and halaal savouries in Malabar, Gqeberha. Order on WhatsApp 081 510 8257." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marqueeImages = [
  { src: fancyCakes, alt: "Assorted fancy cakes platter" },
  { src: bundt, alt: "Cadbury ganache bundt cake" },
  { src: blueCupcakes, alt: "Freshly piped cupcakes" },
  { src: lemonTarts, alt: "Lemon curd tarts" },
  { src: eclairs, alt: "Chocolate eclairs" },
  { src: samoosas, alt: "Golden crispy samoosas" },
  { src: pies, alt: "Golden homemade savoury pies" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="A spread of cakes, tarts, eclairs, samoosas and pies" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-10 text-center md:pt-24">
        <img src={logo} alt="Flavour Pantry GQ logo" className="h-40 w-auto md:h-52" />
        <p className="font-script mt-6 text-4xl text-primary md:text-5xl">Where sweet meets savoury</p>
        <h1 className="font-display mt-4 text-3xl leading-tight font-bold md:text-5xl">
          Home-baked with love in <span className="text-primary">Malabar, Gqeberha</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">Cakes, desserts and halaal savouries made fresh to order for your family, functions and celebrations.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#menus" className="btn-primary"><Cake className="h-4 w-4" />View Our Menus</a>
          <a href={waLink("Hi Flavour Pantry! I'd like to place an order.")} target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" />WhatsApp Us</a>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground">
          <Check className="h-3.5 w-3.5 text-primary" />Baked fresh daily with premium, highest quality-halaal ingredients
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 pb-14">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max gap-4">
            {[...marqueeImages, ...marqueeImages].map((image, index) => (
              <img key={`${image.alt}-${index}`} src={image.src} alt={image.alt} className="h-44 w-56 rounded-2xl border border-border object-cover shadow-md md:h-52 md:w-64" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuChoices() {
  return (
    <section id="menus" className="bg-blush py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">Our Menus</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Pick a side, or take both</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="menu-card">
            <img src={sweetAsset.url} alt="Pink mixer decorated with flowers and cupcakes" className="h-72 w-full object-cover object-center" />
            <div className="p-8">
              <div className="flex items-center gap-3"><span className="rounded-full bg-accent p-2 text-primary"><Cake className="h-5 w-5" /></span><h3 className="font-display text-2xl font-bold">Sweet</h3></div>
              <p className="mt-3 text-muted-foreground">Fancy cakes, ganache cakes, cupcakes, bento cakes, cheesecakes and classic desserts.</p>
              <Link to="/sweet" className="btn-primary mt-6">See Sweet Menu</Link>
            </div>
          </article>
          <article className="menu-card">
            <img src={savouryAsset.url} alt="Flavour Pantry GQ halaal savoury platter" className="h-72 w-full object-cover object-center" />
            <div className="p-8">
              <div className="flex items-center gap-3"><span className="rounded-full bg-accent p-2 text-primary"><Croissant className="h-5 w-5" /></span><h3 className="font-display text-2xl font-bold">Savoury</h3></div>
              <p className="mt-3 text-muted-foreground">Samoosas, pies, mini pizzas, buns, subs, tramezzini, quiche and more.</p>
              <Link to="/savoury" className="btn-primary mt-6">See Savoury Menu</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SpecialPackages() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center"><p className="section-eyebrow">Special Packages</p><h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Celebrate without the fuss</h2></div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={matricComboAsset.url} alt="Matric farewell tall cake" className="h-80 w-full rounded-2xl border border-border object-cover shadow-lg md:h-[28rem]" loading="lazy" />
          <div>
            <p className="section-eyebrow">Matric Farewell</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Combo Package — <span className="text-primary">R2850</span></h2>
            <p className="mt-4 text-muted-foreground md:text-lg">1 tall cake · 12 cupcakes · 100 fancy cakes · 10 dozen savouries. Everything you need for the big night, baked fresh and beautifully finished.</p>
            <a href={waLink("Hi Flavour Pantry! I'm interested in the Matric Farewell Combo Package (R2850).")} target="_blank" rel="noreferrer" className="btn-primary mt-8"><MessageCircle className="h-4 w-4" />Book the Combo</a>
          </div>
        </div>
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <img src={bentoSpecialAsset.url} alt="Eid bento cake decorated as a lamb" className="h-80 w-full rounded-2xl border border-border object-cover shadow-lg md:h-[28rem]" loading="lazy" />
          </div>
          <div className="md:order-1">
            <p className="section-eyebrow">Eid Special</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Eid Bento Cake — <span className="text-primary">R250</span></h2>
            <p className="mt-4 text-muted-foreground md:text-lg">A hand-decorated 5-inch bento cake with your choice of flavour and colours, perfect for Eid gatherings and family visits.</p>
            <a href={waLink("Hi Flavour Pantry! I'm interested in the Eid Bento Cake Special (R250).")} target="_blank" rel="noreferrer" className="btn-primary mt-8"><MessageCircle className="h-4 w-4" />Order the Eid Bento</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const steps = [
    "Message us on WhatsApp with what you'd like and your date.",
    "We confirm your order and arrange payment on WhatsApp.",
    "Collect your freshly prepared goodies in Malabar.",
  ];

  return (
    <section id="contact" className="bg-blush py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center"><p className="section-eyebrow">Order & Contact</p><h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Ordering is easy — just WhatsApp us</h2></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="menu-card p-8 text-center"><span className="font-display mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">{index + 1}</span><p className="mt-4 text-muted-foreground">{step}</p></div>
          ))}
        </div>
        <div className="mt-14 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-md md:grid-cols-2 md:p-12">
          <div>
            <h3 className="font-display text-2xl font-bold">Get in touch</h3>
            <div className="mt-6 space-y-4">
              <a href={waLink("Hi Flavour Pantry!")} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold text-primary"><Phone className="h-5 w-5" />081 510 8257</a>
              <a href="mailto:flavourpantrygq@gmail.com" className="flex items-center gap-3 font-semibold text-primary"><Mail className="h-5 w-5" />flavourpantrygq@gmail.com</a>
              <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" />Malabar, Port Elizabeth</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={whatsappQr} alt="WhatsApp QR code — scan to chat with Flavour Pantry GQ" className="h-48 w-48 rounded-2xl border border-border" loading="lazy" />
            <p className="mt-4 text-sm text-muted-foreground">Scan to chat with us on WhatsApp.<br />Orders and payments are arranged on WhatsApp for now.</p>
            <a href={waLink("Hi Flavour Pantry! I'd like to place an order.")} target="_blank" rel="noreferrer" className="btn-primary mt-5"><MessageCircle className="h-4 w-4" />Chat with us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main><Hero /><MenuChoices /><SpecialPackages /><Contact /></main>
      <SiteFooter />
    </div>
  );
}