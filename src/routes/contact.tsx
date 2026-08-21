import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Meuble Amri" },
      {
        name: "description",
        content:
          "Contactez Meuble Amri : Soukra Ariana, Avenue l'UMA, en face de Jumpark. Tél. 24 501 437.",
      },
      { property: "og:title", content: "Contact — Meuble Amri" },
      {
        property: "og:description",
        content: "Écrivez-nous ou visitez le showroom Meuble Amri à Soukra Ariana.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-mauve">Parlons de votre projet</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Contactez-nous</h1>
        <p className="mt-4 text-muted-foreground">
          Une question sur un pack, un devis ou une livraison ? Notre équipe vous
          répond sous 24 heures.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-[2rem] border border-border bg-card p-7 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="nom" placeholder="Nom et prénom" className={field} />
              <input
                required
                type="email"
                name="email"
                placeholder="Adresse e-mail"
                className={field}
              />
            </div>
            <input name="telephone" placeholder="Téléphone" className={field} />
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Votre message"
              className={field}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-plum-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Envoyer le message
            </button>
            {sent ? (
              <p className="text-center text-sm text-primary">
                Merci ! Votre message a bien été pris en compte, nous vous
                recontactons rapidement.
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
            <h2 className="text-2xl font-semibold">Showroom Meuble Amri</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mauve" />
                Soukra Ariana, Avenue l'UMA, en face de Jumpark
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-mauve" />
                <a href="tel:+21624501437" className="hover:text-primary">24 501 437</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-mauve" />
                <a href="mailto:contact@meubleamri.tn" className="hover:text-primary">
                  contact@meubleamri.tn
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61550231374337"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Meuble Amri"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-plum-gradient hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Meuble Amri"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-plum-gradient hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <iframe
              title="Localisation du showroom Meuble Amri"
              src="https://www.google.com/maps?q=La%20Soukra%20Ariana%20Avenue%20de%20l'UMA%20Jumpark&output=embed"
              loading="lazy"
              className="h-[320px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
