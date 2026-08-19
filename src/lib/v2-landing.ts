export const V2_SITE_NAME = "Cuota";

export const V2_HEADLINE = "Convertí lo que sabés en ingresos mensuales";
export const V2_SUBHEADLINE =
  "Contenido, videos y comunidad en un solo lugar. Tus miembros te pagan todos los meses con Mercado Pago.";

export const V2_CTA_LABEL = "Creá tu membresía";
export const V2_CTA_HREF = "/v2/precios";
export const V2_HERO_HREF = "/v2";
export const V2_START_HREF = "/api/oauth/connect";
export const V2_MICROCOPY = "Primeros accesos disponibles en Argentina.";

export const MONTHLY_PRICE = "$19.000";
export const YEARLY_FULL = "$228.000";
export const YEARLY_PRICE = "$190.000";
export const YEARLY_EQUIVALENT = "$15.833";

export type MembershipExample = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  members: string;
  membersCount: number;
  priceAmount: number;
  image: string;
};

export const MEMBERSHIPS: MembershipExample[] = [
  {
    id: "marketing",
    name: "Marketing Club",
    tagline: "Aprendé marketing junto a otros creadores",
    category: "Marketing y negocios",
    price: "$20.000 / mes",
    members: "124 miembros",
    membersCount: 124,
    priceAmount: 20_000,
    image: "/v2/v2-marketing-club.jpg",
  },
  {
    id: "ingles",
    name: "Inglés con Laura",
    tagline: "Clases y práctica todas las semanas",
    category: "Idiomas",
    price: "$15.000 / mes",
    members: "38 miembros",
    membersCount: 38,
    priceAmount: 15_000,
    image: "/v2/v2-ingles-laura.jpg",
  },
  {
    id: "fit",
    name: "Fit Club",
    tagline: "Entrená con una rutina y un grupo que sostiene",
    category: "Fitness",
    price: "$12.000 / mes",
    members: "86 miembros",
    membersCount: 86,
    priceAmount: 12_000,
    image: "/v2/v2-fit-club.jpg",
  },
  {
    id: "ia",
    name: "IA para Negocios",
    tagline: "Usá herramientas nuevas sin perder el oficio",
    category: "Negocios",
    price: "$25.000 / mes",
    members: "51 miembros",
    membersCount: 51,
    priceAmount: 25_000,
    image: "/v2/v2-ia-negocios.jpg",
  },
  {
    id: "diseno",
    name: "Diseño Freelance",
    tagline: "Oficio, clientes y un espacio para mostrar trabajo",
    category: "Diseño",
    price: "$18.000 / mes",
    members: "22 miembros",
    membersCount: 22,
    priceAmount: 18_000,
    image: "/v2/v2-diseno-freelance.jpg",
  },
];
