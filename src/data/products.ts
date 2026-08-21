import pack1 from "@/assets/pack1-bubble.jpg";
import pack2 from "@/assets/pack2-soltana.jpg";
import pack3 from "@/assets/pack3-monica.jpg";
import pack4 from "@/assets/pack4-fattouma.jpg";
import pack6 from "@/assets/pack6-syrine.jpg";
import pack7 from "@/assets/pack7-diamant.jpg";
import pack8 from "@/assets/pack8-mobilia.jpg";
import pack9 from "@/assets/pack9-bella.jpg";
import pack12 from "@/assets/pack12-aroussa.jpg";
import deco from "@/assets/pack-deco.jpg";

export type Category = "salon" | "chambre" | "salle-a-manger" | "decoration";

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "salon", label: "Salon" },
  { id: "chambre", label: "Chambre" },
  { id: "salle-a-manger", label: "Salle à manger" },
  { id: "decoration", label: "Décoration" },
];

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  includes: string[];
  badge?: "Populaire" | "Nouveau";
  featured?: boolean;
  addedAt: number;
};

export const PRODUCTS: Product[] = [
  {
    slug: "pack-1-bubble",
    name: "Pack 1 — Bubble",
    price: 7690,
    image: pack1,
    category: "chambre",
    description:
      "Chambre complète au design bubble matelassé, salon d'angle assorti et salle à manger en bois massif.",
    includes: [
      "Chambre Bubble matelassée + tables de nuit",
      "Salon d'angle beige et coussins",
      "Salle à manger bois massif 6 places",
    ],
    badge: "Populaire",
    featured: true,
    addedAt: 1,
  },
  {
    slug: "pack-2-soltana",
    name: "Pack 2 — Soltana",
    price: 7190,
    image: pack2,
    category: "salon",
    description:
      "Grand salon d'angle crème, chambre contemporaine et salle à manger ronde élégante.",
    includes: [
      "Grand salon d'angle crème",
      "Chambre contemporaine + dressing",
      "Salle à manger ronde 4/6 places",
    ],
    badge: "Populaire",
    featured: true,
    addedAt: 2,
  },
  {
    slug: "pack-3-monica",
    name: "Pack 3 — Monica",
    price: 7690,
    image: pack3,
    category: "salon",
    description:
      "Canapé modulable capitonné XXL, chambre épurée et salle à manger en noyer.",
    includes: [
      "Canapé modulable capitonné XXL",
      "Chambre épurée et lumineuse",
      "Salle à manger noyer",
    ],
    featured: true,
    addedAt: 3,
  },
  {
    slug: "pack-4-fattouma",
    name: "Pack 4 — Fattouma",
    price: 6090,
    image: pack4,
    category: "chambre",
    description:
      "Chambre laquée avec dressing intégré, coiffeuse lumineuse, salon et salle à manger design.",
    includes: [
      "Chambre laquée + dressing",
      "Coiffeuse lumineuse",
      "Salon et salle à manger design",
    ],
    badge: "Nouveau",
    featured: true,
    addedAt: 4,
  },
  {
    slug: "pack-6-syrine",
    name: "Pack 6 — Syrine",
    price: 6390,
    image: pack6,
    category: "salon",
    description:
      "Salon velours beige rehaussé d'or, meuble TV assorti, chambre et salle à manger marbrée.",
    includes: [
      "Salon velours beige et or",
      "Meuble TV assorti",
      "Chambre + salle à manger marbrée",
    ],
    featured: true,
    addedAt: 6,
  },
  {
    slug: "pack-7-diamant",
    name: "Pack 7 — Diamant",
    price: 6090,
    image: pack7,
    category: "salon",
    description:
      "Canapé d'angle gris chiné, chambre laquée finitions dorées et salle à manger classique.",
    includes: [
      "Canapé d'angle gris chiné",
      "Chambre laquée finitions dorées",
      "Salle à manger classique",
    ],
    addedAt: 7,
  },
  {
    slug: "pack-8-mobilia",
    name: "Pack 8 — Mobilia",
    price: 7690,
    image: pack8,
    category: "chambre",
    description:
      "Chambre lumineuse avec dressing miroir, salon bi-matière vert émeraude et table à manger marbre.",
    includes: [
      "Chambre lumineuse + dressing miroir",
      "Salon bi-matière vert émeraude",
      "Table à manger marbre",
    ],
    badge: "Nouveau",
    addedAt: 8,
  },
  {
    slug: "pack-9-bella",
    name: "Pack 9 — Bella",
    price: 7390,
    image: pack9,
    category: "chambre",
    description:
      "Chambre minimaliste blanche, salon d'angle contemporain et salle à manger 6 places.",
    includes: [
      "Chambre minimaliste blanche",
      "Salon d'angle contemporain",
      "Salle à manger 6 places",
    ],
    featured: true,
    addedAt: 9,
  },
  {
    slug: "pack-12-aroussa",
    name: "Pack 12 — Aroussa",
    price: 6390,
    image: pack12,
    category: "salle-a-manger",
    description:
      "Pack mariage complet : chambre tête de lit cannelée, salon d'angle et salle à manger classique.",
    includes: [
      "Chambre tête de lit cannelée",
      "Salon d'angle",
      "Salle à manger classique",
    ],
    badge: "Populaire",
    addedAt: 12,
  },
  {
    slug: "collection-deco",
    name: "Collection Déco Signature",
    price: 890,
    image: deco,
    category: "decoration",
    description:
      "Fauteuil d'appoint velours, lampadaire doré, miroir et vases : la touche finale de votre intérieur.",
    includes: [
      "Fauteuil d'appoint velours",
      "Lampadaire doré",
      "Miroir et vases signature",
    ],
    badge: "Nouveau",
    addedAt: 13,
  },
];

export const formatPrice = (price: number) =>
  `${price.toLocaleString("fr-FR")} DT`;

export const categoryLabel = (id: Category) =>
  CATEGORIES.find((category) => category.id === id)?.label ?? id;

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function relatedProducts(product: Product, limit = 3) {
  return PRODUCTS.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  )
    .concat(
      PRODUCTS.filter(
        (item) => item.slug !== product.slug && item.category !== product.category,
      ),
    )
    .slice(0, limit);
}
