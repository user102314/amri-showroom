import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        to="/articles/$slug"
        params={{ slug: product.slug }}
        className="absolute inset-0 z-10"
        aria-label={`Voir ${product.name}`}
      />
      <div className="relative aspect-[4/5] overflow-hidden bg-plum">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-plum-gradient px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="font-display text-2xl font-semibold text-gradient-plum">
            {formatPrice(product.price)}
          </span>
          <span className="relative z-20 inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-primary transition-colors group-hover:bg-secondary">
            Voir plus
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
