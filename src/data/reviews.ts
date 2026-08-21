export type Review = {
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Sonia Ben Salah",
    city: "Ariana",
    rating: 5,
    initials: "SB",
    text: "Pack 2 Soltana livré et monté en une matinée. Le salon est encore plus beau qu'en showroom, les finitions sont impeccables.",
  },
  {
    name: "Mehdi Trabelsi",
    city: "La Marsa",
    rating: 5,
    initials: "MT",
    text: "Accueil très professionnel, on nous a aidés à choisir les dimensions selon le plan de l'appartement. Rapport qualité-prix excellent.",
  },
  {
    name: "Ines Gharbi",
    city: "Soukra",
    rating: 4,
    initials: "IG",
    text: "Chambre Fattouma magnifique, les tiroirs glissent parfaitement. Petit délai supplémentaire sur la coiffeuse mais bien communiqué.",
  },
  {
    name: "Karim Aloui",
    city: "Tunis",
    rating: 5,
    initials: "KA",
    text: "Deuxième achat chez Meuble Amri. Le pack Monica est très confortable et le tissu résiste bien avec des enfants.",
  },
  {
    name: "Rania Chaabane",
    city: "Ben Arous",
    rating: 5,
    initials: "RC",
    text: "Service après-vente réactif : un coussin remplacé sans discussion. C'est rare, je recommande vraiment.",
  },
  {
    name: "Yassine Mabrouk",
    city: "Nabeul",
    rating: 5,
    initials: "YM",
    text: "Livraison jusqu'à Nabeul sans supplément caché. L'équipe a installé la salle à manger et tout emporté.",
  },
];

export const REVIEW_AVERAGE =
  REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEWS.length;
