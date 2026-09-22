import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png";

export const WHATSAPP = "https://wa.me/27815108257";
export const waLink = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const orderLink = (menu: string) =>
  waLink(`Hi Flavour Pantry! I'd like to order from the ${menu} menu.`);

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Sweet", to: "/sweet" as const },
  { label: "Savoury", to: "/savoury" as const },
  { label: "About Us", to: "/about" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" aria-label="Flavour Pantry GQ home">
          <img src={logo} alt="Flavour Pantry GQ logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {link.label}
            </Link>
          ))}
          <a href="/#contact" className="text-sm font-semibold text-foreground hover:text-primary">
            Contact Us
          </a>
          <a href={orderLink("online")} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5">
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
        </nav>
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
              activeProps={{ className: "bg-accent text-primary" }}
            >
              {link.label}
            </Link>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent">
            Contact Us
          </a>
          <a href={orderLink("online")} target="_blank" rel="noreferrer" className="btn-primary mt-2">
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Flavour Pantry! I'd like to place an order.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Flavour Pantry GQ on WhatsApp"
      className="fixed top-1/2 right-4 z-40 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 md:right-6"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center">
        <Link to="/" aria-label="Flavour Pantry GQ home">
          <img src={logo} alt="Flavour Pantry GQ logo" className="h-14 w-auto" />
        </Link>
        <p className="text-sm text-muted-foreground">Where sweet meets savoury · Malabar, Gqeberha</p>
        <p className="max-w-lg text-sm font-medium text-foreground">Like and follow us on our social media platforms for our latest menus and specials.</p>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/share/19USZ4t3z4/" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on Facebook" className="rounded-full bg-accent p-2.5 text-primary">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/jantjiesshumeeze?stkn=MTgwNWt0aDAweTZwaA==" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on Instagram" className="rounded-full bg-accent p-2.5 text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.tiktok.com/@flavorpantrygq?_r=1&_t=ZS-99s8mWjbldh" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on TikTok" className="rounded-full bg-accent p-2.5 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
      </div>
      <FloatingWhatsApp />
    </footer>
  );
}