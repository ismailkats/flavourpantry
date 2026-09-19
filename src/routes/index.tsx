import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Cake,
  Croissant,
  Check,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Music2,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import fancyCakes from "@/assets/fancy_cakes.jpg";
import bundt from "@/assets/bundt.jpg";
import blueCupcakes from "@/assets/blue_cupcakes.jpg";
import lemonTarts from "@/assets/lemon_tarts.jpg";
import eclairs from "@/assets/eclairs.jpg";
import samoosas from "@/assets/samoosas.jpg";
import pies from "@/assets/pies.jpg";
import bentoCake from "@/assets/bento_cake.jpg";
import peppermintTart from "@/assets/peppermint_tart.jpg";
import chocCups from "@/assets/choc_cups.jpg";
import tallCake from "@/assets/tall_cake.jpg";
import savouries from "@/assets/savouries.jpg";
import whatsappQr from "@/assets/whatsapp_qr.png";

const WHATSAPP = "https://wa.me/27815108257";
const waLink = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
const orderLink = (menu: string) =>
  waLink(`Hi Flavour Pantry! I'd like to order from the ${menu} menu.`);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flavour Pantry GQ | Home-Baked Cakes & Savouries" },
      {
        name: "description",
        content:
          "Home-baked cakes, desserts and halaal savouries in Malabar, Gqeberha. Order on WhatsApp 081 510 8257.",
      },
      { name: "author", content: "Flavour Pantry GQ" },
      { property: "og:title", content: "Flavour Pantry GQ | Home-Baked Cakes & Savouries" },
      {
        property: "og:description",
        content:
          "Home-baked cakes, desserts and halaal savouries in Malabar, Gqeberha. Order on WhatsApp 081 510 8257.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Flavour Pantry GQ | Home-Baked Cakes & Savouries" },
      {
        name: "twitter:description",
        content:
          "Home-baked cakes, desserts and halaal savouries in Malabar, Gqeberha. Order on WhatsApp 081 510 8257.",
      },
    ],
  }),
  component: Index,
});

type MenuItem = { name: string; price: string };
type MenuSection = {
  title: string;
  image: string;
  alt: string;
  description?: string;
  note?: string;
  items: MenuItem[];
};

const sweetMenu: MenuSection[] = [
  {
    title: "Fancy Cakes Platter",
    image: fancyCakes,
    alt: "Assorted fancy cakes platter",
    description:
      "A beautiful mixed platter — pastry horns, caramel tarts, chocolate eclairs, lemon curd tarts, granadilla & pineapple tarts, lamingtons, milk tarts, vanilla cupcakes and snow balls.",
    items: [
      { name: "Platter of 100", price: "R560" },
      { name: "Platter of 50", price: "R280" },
    ],
  },
  {
    title: "Cadbury Ganache Cakes",
    image: bundt,
    alt: "Cadbury ganache bundt cake",
    items: [
      { name: "Large Cadbury ganache bundt cake", price: "R300" },
      { name: "Mini Cadbury ganache cakes", price: "R150 p/d" },
    ],
  },
  {
    title: "Cupcakes",
    image: blueCupcakes,
    alt: "Freshly piped cupcakes",
    items: [
      { name: "Carrot cupcakes with cream cheese", price: "R150 p/d" },
      { name: "Burfee cupcakes with cream", price: "R120 p/d" },
      { name: "Vanilla cupcakes", price: "In platters" },
    ],
  },
  {
    title: "Bento Cake",
    image: bentoCake,
    alt: "5 inch bento cake with buttercream rosettes",
    description:
      "5 inch bento cake — perfect for Eid gatherings, family visits and sweet moments of celebration.",
    items: [{ name: "5 inch bento cake", price: "R250" }],
  },
  {
    title: "Classic Desserts",
    image: peppermintTart,
    alt: "Peppermint crisp tart",
    items: [
      { name: "Peppermint crisp tart", price: "R25" },
      { name: "Trifle", price: "R25" },
      { name: "Malva pudding", price: "R25" },
    ],
  },
  {
    title: "Cheesecakes",
    image: chocCups,
    alt: "Dessert cups",
    items: [
      { name: "Blueberry cheesecake", price: "R30" },
      { name: "Strawberry cheesecake", price: "R30" },
      { name: "Pineapple cheesecake", price: "R30" },
    ],
  },
  {
    title: "Tarts, Eclairs & More",
    image: lemonTarts,
    alt: "Lemon curd tarts",
    items: [
      { name: "Caramel tarts", price: "Platter" },
      { name: "Lemon curd tarts", price: "Platter" },
      { name: "Granadilla & pineapple tarts", price: "Platter" },
      { name: "Milk tarts", price: "Platter" },
    ],
  },
  {
    title: "From the Bakery",
    image: eclairs,
    alt: "Chocolate eclairs",
    items: [
      { name: "Chocolate eclairs", price: "Platter" },
      { name: "Pastry horns", price: "Platter" },
      { name: "Lamingtons", price: "Platter" },
      { name: "Snow balls", price: "Platter" },
    ],
  },
];

const savouryMenu: MenuSection[] = [
  {
    title: "Samoosas",
    image: samoosas,
    alt: "Golden crispy samoosas",
    note: "Prices per dozen. Fresh halaal, highest quality ingredients.",
    items: [
      { name: "Chicken mince", price: "R50 p/d" },
      { name: "Mutton mince", price: "R55 p/d" },
      { name: "Chicken jalapeno", price: "R65 p/d" },
      { name: "Cheese & corn", price: "R55 p/d" },
      { name: "Potato", price: "R45 p/d" },
    ],
  },
  {
    title: "Pies",
    image: pies,
    alt: "Golden homemade savoury pies",
    items: [
      { name: "Creamy chicken", price: "R75" },
      { name: "Pepper steak", price: "R85" },
      { name: "Sausage roll", price: "R65" },
    ],
  },
  {
    title: "Mini Savouries",
    image: savouries,
    alt: "Platter of mini savouries",
    items: [
      { name: "Chicken half moons", price: "R50" },
      { name: "Polony puri", price: "R50" },
      { name: "Chicken spring rolls", price: "R65" },
      { name: "5 in 1 chicken cutlets", price: "R70" },
      { name: "Aamili savoury dip 250ml", price: "R45" },
    ],
  },
  {
    title: "Heat & Eat",
    image: savouries,
    alt: "Heat and eat savoury selection",
    items: [
      { name: "Mini chicken pizza", price: "R60" },
      { name: "Mini steak pizza", price: "R70" },
      { name: "Chicken buns", price: "R80" },
      { name: "Steak buns", price: "R85" },
      { name: "Chicken croissants", price: "R85" },
      { name: "Chicken tikka subs", price: "R85" },
      { name: "Mini aloo paratha", price: "R45" },
      { name: "Chicken tramezzini", price: "R85" },
      { name: "Chicken bagels", price: "R85" },
      { name: "Chicken pittas", price: "R85" },
      { name: "Chicken & mushroom quiche", price: "R70" },
    ],
  },
];

const marqueeImages = [
  { src: fancyCakes, alt: "Assorted fancy cakes platter" },
  { src: bundt, alt: "Cadbury ganache bundt cake" },
  { src: blueCupcakes, alt: "Freshly piped cupcakes" },
  { src: lemonTarts, alt: "Lemon curd tarts" },
  { src: eclairs, alt: "Chocolate eclairs" },
  { src: samoosas, alt: "Golden crispy samoosas" },
  { src: pies, alt: "Golden homemade savoury pies" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#sweet-menu" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Story", href: "#what-we-do" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Flavour Pantry GQ logo" className="h-12 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a href={orderLink("online")} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5">
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
        </nav>
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={orderLink("online")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-2"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="A spread of Flavour Pantry-inspired cakes, tarts, eclairs, samoosas and pies"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-10 text-center md:pt-24">
        <img src={logo} alt="Flavour Pantry GQ logo" className="h-40 w-auto md:h-52" />
        <p className="font-script mt-6 text-4xl text-primary md:text-5xl">
          Where sweet meets savoury
        </p>
        <h1 className="font-display mt-4 text-3xl leading-tight font-bold md:text-5xl">
          Home-baked with love in <span className="text-primary">Malabar, Gqeberha</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
          Cakes, desserts and halaal savouries made fresh to order for your family, functions and
          celebrations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#what-we-do" className="btn-primary">
            <Cake className="h-4 w-4" />
            View Our Menu
          </a>
          <a
            href={waLink("Hi Flavour Pantry! I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground">
          <Check className="h-3.5 w-3.5 text-primary" />
          Baked fresh daily with premium, highest quality-halaal ingredients
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 pb-14">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max gap-4">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-44 w-56 rounded-2xl border border-border object-cover shadow-md md:h-52 md:w-64"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-blush py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Two sides to our pantry — pick a side, or take both.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="menu-card">
            <img
              src={fancyCakes}
              alt="Fancy cakes, tarts and eclairs"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent p-2 text-primary">
                  <Cake className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold">Sweet</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Fancy cake trays, Cadbury ganache bundt cakes, carrot and burfee cupcakes, bento
                cakes, cheesecakes, malva pudding, trifle and peppermint crisp tart.
              </p>
              <a href="#sweet-menu" className="btn-primary mt-6">
                See Sweet Menu
              </a>
            </div>
          </div>
          <div className="menu-card">
            <img
              src={samoosas}
              alt="Samoosas, pies and savoury pastries"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent p-2 text-primary">
                  <Croissant className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold">Savoury</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Samoosas by the dozen, creamy chicken and pepper steak pies, sausage rolls, mini
                pizzas, buns, subs, tramezzini, quiche and our aamili savoury dip.
              </p>
              <a href="#savoury-menu" className="btn-primary mt-6">
                See Savoury Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ section }: { section: MenuSection }) {
  return (
    <div className="menu-card flex flex-col">
      <img src={section.image} alt={section.alt} className="h-56 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold">{section.title}</h3>
        {section.description && (
          <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>
        )}
        {section.note && <p className="mt-2 text-sm text-muted-foreground italic">{section.note}</p>}
        <div className="mt-4 flex-1">
          {section.items.map((item) => (
            <div key={item.name} className="price-row">
              <span className="text-sm">{item.name}</span>
              <span className="text-sm font-semibold whitespace-nowrap text-primary">
                {item.price}
              </span>
            </div>
          ))}
        </div>
        <a
          href={orderLink(section.title)}
          target="_blank"
          rel="noreferrer"
          className="btn-outline mt-5 w-full !py-2.5 text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

function MenuSectionBlock({
  id,
  eyebrow,
  heading,
  sections,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  sections: MenuSection[];
}) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">{heading}</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <MenuCard key={s.title} section={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MatricCombo() {
  return (
    <section className="bg-blush py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img
          src={tallCake}
          alt="Matric farewell tall cake"
          className="h-80 w-full rounded-2xl border border-border object-cover shadow-lg md:h-[28rem]"
          loading="lazy"
        />
        <div>
          <p className="section-eyebrow">Matric Farewell</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Combo Package — <span className="text-primary">R2850</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            1 tall cake · 12 cupcakes · 100 fancy cakes · 10 dozen savouries. Everything you need
            for the big night, baked fresh and beautifully finished.
          </p>
          <a
            href={waLink(
              "Hi Flavour Pantry! I'm interested in the Matric Farewell Combo Package (R2850)."
            )}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            <MessageCircle className="h-4 w-4" />
            Book the Combo
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const steps = [
    "Message us on WhatsApp with what you'd like and your date.",
    "We confirm your order and arrange payment on WhatsApp.",
    "Collect your fresh bake in Malabar.",
  ];
  return (
    <section id="contact" className="bg-blush py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">Order &amp; Contact</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Ordering is easy — just WhatsApp us
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="menu-card p-8 text-center">
              <span className="font-display mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="mt-4 text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-md md:grid-cols-2 md:p-12">
          <div>
            <h3 className="font-display text-2xl font-bold">Get in touch</h3>
            <div className="mt-6 space-y-4">
              <a
                href={waLink("Hi Flavour Pantry!")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-semibold text-primary"
              >
                <Phone className="h-5 w-5" /> 081 510 8257
              </a>
              <a
                href="mailto:flavourpantrygq@gmail.com"
                className="flex items-center gap-3 font-semibold text-primary"
              >
                <Mail className="h-5 w-5" /> flavourpantrygq@gmail.com
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" /> Malabar, Port Elizabeth
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://www.facebook.com/flavourpantrygq"
                target="_blank"
                rel="noreferrer"
                aria-label="Flavour Pantry GQ on Facebook"
                className="rounded-full bg-accent p-3 text-primary transition-transform hover:scale-105"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/flavourpantrygq"
                target="_blank"
                rel="noreferrer"
                aria-label="Flavour Pantry GQ on Instagram"
                className="rounded-full bg-accent p-3 text-primary transition-transform hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@flavourpantrygq"
                target="_blank"
                rel="noreferrer"
                aria-label="Flavour Pantry GQ on TikTok"
                className="rounded-full bg-accent p-3 text-primary transition-transform hover:scale-105"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={whatsappQr}
              alt="WhatsApp QR code — scan to chat with Flavour Pantry GQ"
              className="h-48 w-48 rounded-2xl border border-border"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Scan to chat with us on WhatsApp.
              <br />
              Orders and payments are arranged on WhatsApp for now.
            </p>
            <a
              href={waLink("Hi Flavour Pantry! I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center">
        <img src={logo} alt="Flavour Pantry GQ logo" className="h-14 w-auto" />
        <p className="text-sm text-muted-foreground">
          Where sweet meets savoury · Malabar, Gqeberha
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhatWeDo />
      <MenuSectionBlock
        id="sweet-menu"
        eyebrow="Sweet Menu"
        heading="Cakes, desserts and sweet treats"
        sections={sweetMenu}
      />
      <MatricCombo />
      <MenuSectionBlock
        id="savoury-menu"
        eyebrow="Savoury Menu"
        heading="Samoosas, pies and halaal savouries"
        sections={savouryMenu}
      />
      <Contact />
      <Footer />
    </div>
  );
}
