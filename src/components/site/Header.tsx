import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/meilleurs-articles", label: "Meilleurs articles" },
  { to: "/articles", label: "Tous les articles" },
  { to: "/a-propos", label: "À propos" },
  { to: "/avis", label: "Avis clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Logo Meuble Amri"
            className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-soft"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-tight text-foreground">
              Meuble Amri
            </span>
            <span className="block truncate text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              Meubles & Décoration
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-primary" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+21624501437"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-plum-gradient px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            24 501 437
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
