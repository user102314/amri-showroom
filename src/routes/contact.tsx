import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/data/brand";

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
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      form.reset();
      setSending(false);
      toast.success("Message envoyé", {
        description:
          "Merci ! Nous vous recontactons rapidement pour votre projet.",
      });
    }, 400);
  };

  const field =
    "mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

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
              <label className="block text-sm font-medium text-foreground">
                Nom et prénom
                <input required name="nom" placeholder="Sonia Ben Salah" className={field} />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Adresse e-mail
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="vous@email.com"
                  className={field}
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              Téléphone
              <input
                required
                name="telephone"
                type="tel"
                placeholder="24 501 437"
                className={field}
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Message
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Parlez-nous de votre intérieur, des dimensions, du pack qui vous intéresse…"
                className={field}
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-plum-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {sending ? "Envoi…" : "Envoyer le message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
            <h2 className="text-2xl font-semibold">Showroom Meuble Amri</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mauve" />
                {BRAND.address}
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-mauve" />
                <a href={BRAND.phoneHref} className="hover:text-primary">{BRAND.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-mauve" />
                <a href={BRAND.emailHref} className="hover:text-primary">
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Meuble Amri"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-plum-gradient hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BRAND.instagram}
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
              src={BRAND.mapsEmbed}
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
