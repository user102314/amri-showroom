import { createFileRoute } from "@tanstack/react-router";
import { REVIEW_AVERAGE, REVIEWS } from "@/data/reviews";
import { Reveal } from "@/components/site/Reveal";
import { Stars } from "@/components/site/Stars";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

function ReviewCard({
  name,
  city,
  rating,
  text,
  initials,
}: (typeof REVIEWS)[number]) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
      <Stars rating={rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum-gradient text-sm font-semibold text-primary-foreground"
          aria-hidden
        >
          {initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold text-foreground">{name}</span>
          <span className="block text-xs text-muted-foreground">{city}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Reviews() {
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
              {REVIEW_AVERAGE.toFixed(1).replace(".", ",")}
            </p>
            <div className="mt-3 flex justify-center">
              <Stars rating={Math.round(REVIEW_AVERAGE)} />
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

      <Reveal className="mt-14">
        <Carousel opts={{ align: "start", loop: true }} className="px-12">
          <CarouselContent>
            {REVIEWS.map((review) => (
              <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-border bg-card text-primary" />
          <CarouselNext className="border-border bg-card text-primary" />
        </Carousel>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={(i % 3) * 90}>
            <div className="h-full transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <ReviewCard {...review} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
