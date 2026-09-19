import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, MessageCircle, Twitter, X } from "lucide-react";
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
          <a href="https://www.facebook.com/flavourpantrygq" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on Facebook" className="rounded-full bg-accent p-2.5 text-primary">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/flavourpantrygq" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on Instagram" className="rounded-full bg-accent p-2.5 text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://twitter.com/flavourpantrygq" target="_blank" rel="noreferrer" aria-label="Flavour Pantry GQ on Twitter" className="rounded-full bg-accent p-2.5 text-primary">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}