import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis clients — Meuble Amri" },
      {
        name: "description",
        content:
          "Les témoignages de nos clients : qualité des packs, livraison, montage et service Meuble Amri.",
      },
      { property: "og:title", content: "Avis clients — Meuble Amri" },
      {
        property: "og:description",
        content: "4,8/5 en moyenne : découvrez ce que disent les clients de Meuble Amri.",
      },
    ],
  }),
  component: Reviews,
});

const REVIEWS = [
  {
    name: "Sonia Ben Salah",
    city: "Ariana",
    rating: 5,
    text: "Pack 2 Soltana livré et monté en une matinée. Le salon est encore plus beau qu'en showroom, les finitions sont impeccables.",
  },
  {
    name: "Mehdi Trabelsi",
    city: "La Marsa",
    rating: 5,
    text: "Accueil très professionnel, on nous a aidés à choisir les dimensions selon le plan de l'appartement. Rapport qualité-prix excellent.",
  },
  {
    name: "Ines Gharbi",
    city: "Soukra",
    rating: 4,
    text: "Chambre Fattouma magnifique, les tiroirs glissent parfaitement. Petit délai supplémentaire sur la coiffeuse mais bien communiqué.",
  },
  {
    name: "Karim Aloui",
    city: "Tunis",
    rating: 5,
    text: "Deuxième achat chez Meuble Amri. Le pack Monica est très confortable et le tissu résiste bien avec des enfants.",
  },
  {
    name: "Rania Chaabane",
    city: "Ben Arous",
    rating: 5,
    text: "Service après-vente réactif : un coussin remplacé sans discussion. C'est rare, je recommande vraiment.",
  },
  {
    name: "Yassine Mabrouk",
    city: "Nabeul",
    rating: 5,
    text: "Livraison jusqu'à Nabeul sans supplément caché. L'équipe a installé la salle à manger et tout emporté.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? "fill-gold text-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function Reviews() {
  const average =
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow text-mauve">Ils nous font confiance</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Avis des clients</h1>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="grid items-center gap-8 rounded-[2rem] bg-plum-gradient px-6 py-12 text-primary-foreground sm:grid-cols-[auto_minmax(0,1fr)] sm:px-12">
          <div className="text-center">
            <p className="font-display text-6xl font-semibold text-gold-soft">
              {average.toFixed(1).replace(".", ",")}
            </p>
            <div className="mt-3 flex justify-center">
              <Stars rating={Math.round(average)} />
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
              Note globale
            </p>
          </div>
          <p className="text-primary-foreground/80">
            Basée sur {REVIEWS.length} avis vérifiés de clients ayant reçu leur
            pack complet. Qualité des matériaux, ponctualité de la livraison et
            accompagnement en showroom sont les points les plus cités.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={(i % 3) * 90}>
            <figure className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum-gradient font-semibold text-primary-foreground">
                  {review.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-foreground">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {review.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
