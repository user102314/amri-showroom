import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CreditCard, ShieldCheck, Truck } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { BrandLogo } from "@/components/site/BrandLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meuble Amri — Sublimez votre intérieur" },
      {
        name: "description",
        content:
          "Packs salon, chambre et salle à manger signés Meuble Amri. Showroom premium à Soukra Ariana, livraison et garantie incluses.",
      },
      { property: "og:title", content: "Meuble Amri — Sublimez votre intérieur" },
      {
        property: "og:description",
        content:
          "Découvrez les packs meubles et décoration Meuble Amri, un showroom premium en Tunisie.",
      },
    ],
  }),
  component: Home,
});

const REASSURANCE = [
  { icon: Truck, title: "Livraison & montage", text: "Partout en Tunisie" },
  { icon: BadgeCheck, title: "Qualité showroom", text: "Matériaux sélectionnés" },
  { icon: ShieldCheck, title: "Garantie 2 ans", text: "Sur toute la structure" },
  { icon: CreditCard, title: "Paiement sécurisé", text: "Facilités disponibles" },
];

function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-5.25rem)] overflow-hidden">
        <img
          src={heroImage}
          alt="Salon premium du showroom Meuble Amri"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-plum-gradient opacity-[0.68]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,transparent,rgba(0,0,0,0.55))]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5.25rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <BrandLogo
              size="hero"
              className="mb-7 ring-1 ring-primary-foreground/35"
            />
            <p className="eyebrow text-gold-soft">Showroom · Soukra Ariana</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
              Sublimez votre intérieur avec Meuble Amri
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Des packs complets — salon, chambre et salle à manger — pensés par
              nos designers pour créer des intérieurs élégants, chaleureux et
              durables.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-plum shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Découvrir la collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Visiter le showroom
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {REASSURANCE.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="eyebrow text-mauve">Coups de cœur</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Meilleurs articles
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Nos packs les plus demandés, disponibles en showroom et livrés
              montés chez vous.
            </p>
          </div>
          <Link
            to="/meilleurs-articles"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary sm:self-auto"
          >
            Voir la sélection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-plum-gradient px-6 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Un intérieur pensé pour vous
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Nos conseillers vous accompagnent gratuitement dans le choix de vos
              meubles, des dimensions aux finitions.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-plum transition-transform hover:-translate-y-0.5"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
