import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-plum-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Meuble Amri"
              loading="lazy"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <span className="font-display text-xl font-semibold">Meuble Amri</span>
          </div>
          <p className="text-sm text-primary-foreground/75">
            Showroom tunisien de meubles et de décoration d'intérieur. Des packs
            complets pensés pour sublimer chaque pièce de votre maison.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61550231374337"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Meuble Amri"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
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
              Soukra Ariana, Avenue l'UMA, en face de Jumpark
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-soft" />
              <a href="tel:+21624501437" className="hover:text-gold-soft">24 501 437</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-soft" />
              <a href="mailto:contact@meubleamri.tn" className="hover:text-gold-soft">
                contact@meubleamri.tn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Horaires</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Lundi — Samedi : 9h00 – 19h00</li>
            <li>Dimanche : 10h00 – 14h00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Meuble Amri — Tous droits réservés. Mentions
        légales · Politique de confidentialité
      </div>
    </footer>
  );
}
