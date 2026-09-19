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

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
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
    </footer>
  );
}