import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS, type Category } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { CategoryFilters } from "@/components/site/CategoryFilters";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Catalogue complet — Meuble Amri" },
      {
        name: "description",
        content:
          "Tous les packs et articles Meuble Amri : filtres par catégorie et tri par prix ou nouveautés.",
      },
      { property: "og:title", content: "Catalogue complet — Meuble Amri" },
      {
        property: "og:description",
        content: "Parcourez l'ensemble du catalogue meubles et décoration Meuble Amri.",
      },
    ],
  }),
  component: Catalogue,
});

type Sort = "nouveautes" | "prix-asc" | "prix-desc";

function Catalogue() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [sort, setSort] = useState<Sort>("nouveautes");

  const items = useMemo(() => {
    const list = PRODUCTS.filter(
      (p) => filter === "all" || p.category === filter,
    );
    return [...list].sort((a, b) => {
      if (sort === "prix-asc") return a.price - b.price;
      if (sort === "prix-desc") return b.price - a.price;
      return b.addedAt - a.addedAt;
    });
  }, [filter, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow text-mauve">Catalogue</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Tous les articles
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {PRODUCTS.length} références disponibles en showroom. Nouveaux packs
          ajoutés chaque mois.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <CategoryFilters value={filter} onChange={setFilter} />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          aria-label="Trier les articles"
          className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="nouveautes">Nouveautés</option>
          <option value="prix-asc">Prix croissant</option>
          <option value="prix-desc">Prix décroissant</option>
        </select>
      </div>

      {items.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          Aucun article dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
