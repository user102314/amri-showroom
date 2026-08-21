import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { BRAND } from "@/data/brand";

export function Footer() {
  return (
    <footer className="mt-24 bg-plum-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <BrandLogo size="lg" className="ring-1 ring-primary-foreground/20" loading="lazy" />
            <span className="font-display text-xl font-semibold">{BRAND.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/75">
            Showroom tunisien de meubles et de décoration d'intérieur. Des packs
            complets pensés pour sublimer chaque pièce de votre maison.
          </p>
          <div className="flex gap-3">
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Meuble Amri"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Meuble Amri"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold-soft">Accueil</Link></li>
            <li><Link to="/meilleurs-articles" className="hover:text-gold-soft">Meilleurs articles</Link></li>
            <li><Link to="/articles" className="hover:text-gold-soft">Tous les articles</Link></li>
            <li><Link to="/a-propos" className="hover:text-gold-soft">À propos</Link></li>
            <li><Link to="/avis" className="hover:text-gold-soft">Avis clients</Link></li>
            <li><Link to="/contact" className="hover:text-gold-soft">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              {BRAND.address}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-soft" />
              <a href={BRAND.phoneHref} className="hover:text-gold-soft">{BRAND.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-soft" />
              <a href={BRAND.emailHref} className="hover:text-gold-soft">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Horaires</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {BRAND.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.{" "}
        <Link to="/mentions-legales" className="hover:text-gold-soft">
          Mentions légales
        </Link>
        {" · "}
        <Link to="/mentions-legales" hash="confidentialite" className="hover:text-gold-soft">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}
