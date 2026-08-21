import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";
import {
  categoryLabel,
  formatPrice,
  getProduct,
  relatedProducts,
} from "@/data/products";
import { BRAND } from "@/data/brand";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: relatedProducts(product) };
  },
  head: ({ params }) => {
    const product = getProduct(params.slug);
    const title = `${product?.name ?? "Article"} — Meuble Amri`;
    const description = product?.description ?? "Pack meubles Meuble Amri.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product, related } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/articles"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au catalogue
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-plum shadow-lift">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="space-y-6">
          <div>
            <p className="eyebrow text-mauve">{categoryLabel(product.category)}</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
            {product.badge ? (
              <span className="mt-4 inline-flex rounded-full bg-plum-gradient px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                {product.badge}
              </span>
            ) : null}
          </div>

          <p className="font-display text-4xl font-semibold text-gradient-plum">
            {formatPrice(product.price)}
          </p>
          <p className="text-lg text-muted-foreground">{product.description}</p>

          <ul className="space-y-3 rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
            {product.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mauve" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-plum shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Demander un devis
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phone}
            </a>
          </div>
        </Reveal>
      </div>

      {related.length > 0 ? (
        <section className="mt-24">
          <Reveal>
            <p className="eyebrow text-mauve">À découvrir aussi</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Articles similaires</h2>
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
