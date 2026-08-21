import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Hammer, HeartHandshake } from "lucide-react";
import atelier from "@/assets/atelier.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Meuble Amri" },
      {
        name: "description",
        content:
          "L'histoire, les valeurs et l'atelier de Meuble Amri, marque tunisienne de meubles et décoration d'intérieur.",
      },
      { property: "og:title", content: "À propos — Meuble Amri" },
      {
        property: "og:description",
        content: "Artisanat, design et qualité : découvrez la marque Meuble Amri.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: Gem,
    title: "Qualité",
    text: "Bois massif, mousses haute densité et tissus sélectionnés pour durer.",
  },
  {
    icon: Hammer,
    title: "Artisanat",
    text: "Nos ébénistes et tapissiers façonnent chaque pièce à la main.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement",
    text: "Un conseiller déco dédié, du plan d'aménagement à la livraison.",
  },
];

const STATS = [
  { value: "15+", label: "Années d'expérience" },
  { value: "4 200", label: "Clients satisfaits" },
  { value: "12 000", label: "Articles livrés" },
  { value: "98 %", label: "Recommandent la marque" },
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="eyebrow text-mauve">Notre maison</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          L'élégance tunisienne, meuble après meuble
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Née à Soukra Ariana, Meuble Amri est une maison familiale qui conçoit
          et assemble des ensembles complets pour la maison. Notre showroom
          réunit salons, chambres, salles à manger et objets de décoration dans
          une même vision : un intérieur cohérent, chaleureux et intemporel.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <img
            src={atelier}
            alt="Atelier de fabrication Meuble Amri"
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full rounded-[2rem] object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={120} className="space-y-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Notre atelier, notre signature
          </h2>
          <p className="text-muted-foreground">
            Chaque pack naît d'un travail d'atelier : sélection des essences,
            structure renforcée, couture des assises et finitions dorées posées
            à la main. C'est ce soin du détail qui distingue nos collections.
          </p>
          <div className="space-y-5">
            {VALUES.map((value) => (
              <div key={value.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <value.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-foreground">
                    {value.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {value.text}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <div className="grid gap-8 rounded-[2rem] bg-plum-gradient px-6 py-14 text-primary-foreground sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gold-soft sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 text-center">
        <Link
          to="/articles"
          className="inline-flex rounded-full bg-plum-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Découvrir nos collections
        </Link>
      </Reveal>
    </div>
  );
}
