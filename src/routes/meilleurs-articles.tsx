import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, type Category } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/meilleurs-articles")({
  head: () => ({
    meta: [
      { title: "Meilleurs articles — Meuble Amri" },
      {
        name: "description",
        content:
          "Les best-sellers et coups de cœur Meuble Amri : packs salon, chambre, salle à manger et décoration.",
      },
      { property: "og:title", content: "Meilleurs articles — Meuble Amri" },
      {
        property: "og:description",
        content: "Découvrez les packs meubles les plus demandés du showroom Meuble Amri.",
      },
    ],
  }),
  component: BestSellers,
});

function BestSellers() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const items = PRODUCTS.filter(
    (p) => (p.featured || p.badge) && (filter === "all" || p.category === filter),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow text-mauve">Sélection du showroom</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Meilleurs articles</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Nos best-sellers, choisis par nos clients et nos décorateurs.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {[{ id: "all" as const, label: "Tout" }, ...CATEGORIES].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              filter === cat.id
                ? "border-transparent bg-plum-gradient text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-secondary hover:text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product, i) => (
          <Reveal key={product.slug} delay={i * 70}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          Aucun article dans cette catégorie pour le moment.
        </p>
      ) : null}
    </div>
  );
}
