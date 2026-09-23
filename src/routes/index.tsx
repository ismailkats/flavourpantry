import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Check, ChefHat, Croissant, Mail, MapPin, MessageCircle, PartyPopper, Phone, ShieldCheck } from "lucide-react";

import blueCupcakes from "@/assets/blue_cupcakes.jpg";
import eclairs from "@/assets/eclairs.jpg";
import heroImg from "@/assets/hero.jpg";
import lemonTarts from "@/assets/lemon_tarts.jpg";
import logo from "@/assets/logo.png";
import pies from "@/assets/pies.jpg";
import samoosas from "@/assets/samoosas.jpg";
import whatsappQr from "@/assets/whatsapp_qr.png";
import cadburyClearAsset from "@/assets/cadbury-ganache-clear.jpg";
import fancyCakesAsset from "@/assets/fancy-cakes-platter.jpg";
import matricComboAsset from "@/assets/matric-combo.jpg";
import miniPizzasAsset from "@/assets/mini-pizzas-gallery.jpg";
import savouryAsset from "@/assets/savoury.png";
import savouryPlatterAsset from "@/assets/savoury-platter-gallery.jpg";
import savouryRoundPlatterAsset from "@/assets/savoury-round-platter-gallery.jpg";
import sweetAsset from "@/assets/sweet.jpg";
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
  { src: fancyCakesAsset, alt: "Assorted fancy cakes platter" },
  { src: cadburyClearAsset, alt: "Cadbury ganache bundt cake" },
  { src: blueCupcakes, alt: "Freshly piped cupcakes" },
  { src: lemonTarts, alt: "Lemon curd tarts" },
  { src: eclairs, alt: "Chocolate eclairs" },
  { src: samoosas, alt: "Golden crispy samoosas" },
  { src: pies, alt: "Golden homemade savoury pies" },
  { src: savouryPlatterAsset, alt: "Assorted savoury platter" },
  { src: miniPizzasAsset, alt: "Freshly prepared mini pizzas" },
  { src: savouryRoundPlatterAsset, alt: "Savoury platter with spring rolls and mini pizzas" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="A spread of cakes, tarts, eclairs, samoosas and pies" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-10 text-center md:pt-24">
        <img src={logo} alt="Flavour Pantry GQ logo" className="h-40 w-auto md:h-52" />
        <h1 className="font-display mt-6 text-3xl font-bold tracking-wide uppercase md:text-5xl">Flavour Pantry GQ</h1>
        <p className="font-script mt-3 text-4xl text-primary md:text-5xl">Where Sweet Meets Savoury</p>
        <p className="mt-5 max-w-2xl text-sm font-semibold tracking-wide text-foreground uppercase md:text-base">
          Cakes • Desserts • Halaal Savouries • Celebration Catering
        </p>
        <p className="mt-3 text-muted-foreground md:text-lg">Made fresh to order in Malabar, Gqeberha</p>
        <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold tracking-widest text-primary-foreground uppercase shadow-md md:text-base">
          <ShieldCheck className="h-5 w-5" />100% Fully Halaal
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#menus" className="btn-primary uppercase tracking-wide"><Cake className="h-4 w-4" />View Our Menus</a>
          <a href={waLink("Hi Flavour Pantry! I'd like to place an order.")} target="_blank" rel="noreferrer" className="btn-outline uppercase tracking-wide"><MessageCircle className="h-4 w-4" />Order on WhatsApp</a>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground">
          <Check className="h-3.5 w-3.5 text-primary" />Freshly baked using halaal premium quality ingredients
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

function WhyChooseUs() {
  const reasons = [
    { icon: ChefHat, title: "Made Fresh to Order", text: "Every order is baked and prepared fresh for your date — nothing sits on a shelf." },
    { icon: ShieldCheck, title: "100% Fully Halaal", text: "Prepared with premium quality halaal ingredients, start to finish." },
    { icon: PartyPopper, title: "Perfect for Celebrations", text: "Cakes, platters and combos for farewells, birthdays and family functions." },
    { icon: MapPin, title: "Proudly Based in Malabar, Gqeberha", text: "A home kitchen serving our local community, with easy collection in Malabar." },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">Why Choose Flavour Pantry?</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Made with care, every single order</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="menu-card h-full p-7 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-4 text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.text}</p>
            </div>
          ))}
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
          <p className="section-eyebrow">Our Menu</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Pick a side, or take both</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="menu-card">
            <img src={sweetAsset} alt="Pink mixer decorated with flowers and cupcakes" className="h-72 w-full object-cover object-center" />
            <div className="p-8">
              <div className="flex items-center gap-3"><span className="rounded-full bg-accent p-2 text-primary"><Cake className="h-5 w-5" /></span><h3 className="font-display text-2xl font-bold uppercase tracking-wide">Sweet Treats</h3></div>
              <p className="mt-3 text-muted-foreground">Cakes • Cupcakes • Bento Cakes • Cheesecakes • Desserts • Fancies</p>
              <Link to="/sweet" className="btn-primary mt-6">See Sweet Menu</Link>
            </div>
          </article>
          <article className="menu-card">
            <img src={savouryAsset} alt="Flavour Pantry GQ halaal savoury platter" className="h-72 w-full object-cover object-center" />
            <div className="p-8">
              <div className="flex items-center gap-3"><span className="rounded-full bg-accent p-2 text-primary"><Croissant className="h-5 w-5" /></span><h3 className="font-display text-2xl font-bold uppercase tracking-wide">Savoury Favourites</h3></div>
              <p className="mt-3 text-muted-foreground">Samoosas • Pies • Quiche • Pizza • Wraps • Subs • Platters</p>
              <Link to="/savoury" className="btn-primary mt-6">See Savoury Menu</Link>
            </div>
          </article>
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card px-6 py-5 text-center text-sm text-muted-foreground md:text-base">
          Please enquire in advance for availability. Custom cakes and larger catering orders require advance notice.
        </p>
      </div>
    </section>
  );
}


function SpecialPackages() {
  const combo1Items = [
    "3 Dozen Samoosas",
    "3 Dozen Pies",
    "2 Dozen Pizzas",
    "2 Dozen Quiche",
    "2 Dozen Spring Rolls",
    "2 Dozen Half-moons",
  ];

  const combo2Items = [
    "50 Samoosas",
    "50 Pies",
    "50 Pizzas",
    "50 Quiche",
    "50 Spring Rolls",
    "50 Half-moons",
  ];

  const includes = ["Main Matric Cake", "12 Matching Cupcakes", "100 Fancies"];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-eyebrow">Matric Celebration Combos</p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Celebration favourites for your matric farewell, graduation or special event.
          </h2>
        </div>

        <img
          src={matricComboAsset}
          alt="Matric farewell tall cake"
          className="mx-auto mt-10 h-80 w-full max-w-4xl rounded-2xl border border-border object-cover shadow-lg md:h-[28rem]"
          loading="lazy"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="menu-card flex flex-col overflow-hidden">
            <div className="bg-blush p-8 text-center">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
                Matric Combo 1
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Total: 168 Savoury Pieces
              </p>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <ul className="space-y-3 text-muted-foreground">
                {combo1Items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Price</p>
                <p className="font-display text-5xl font-bold text-primary md:text-6xl">R2850</p>
              </div>
            </div>
          </article>

          <article className="menu-card flex flex-col overflow-hidden">
            <div className="bg-blush p-8 text-center">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
                Matric Combo 2
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Total: 300 Savoury Pieces
              </p>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <ul className="space-y-3 text-muted-foreground">
                {combo2Items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Price</p>
                <p className="font-display text-5xl font-bold text-primary md:text-6xl">R3500</p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-md md:p-12">
          <h3 className="font-display text-center text-2xl font-bold uppercase tracking-wide md:text-3xl">
            Every Combo Includes
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-full bg-blush px-5 py-2.5 text-sm font-semibold text-foreground md:text-base"
              >
                <Check className="h-4 w-4 text-primary md:h-5 md:w-5" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink("I would like to enquire about your Matric Celebration Combos.")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm uppercase tracking-wide md:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now on WhatsApp
          </a>
          <p className="mt-5 text-sm text-muted-foreground">
            Pre-order required. Please enquire for availability and collection/delivery options.
          </p>
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