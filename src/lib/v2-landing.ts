import { SITE_NAME } from "@/lib/brand";
import { whatsappHref } from "@/lib/whatsapp";

export const V2_SITE_NAME = SITE_NAME;

export const V2_HEADLINE = "Convertí lo que sabés en ingresos mensuales";
export const V2_SUBHEADLINE =
  "Contenido, videos y comunidad en un solo lugar. Tus miembros te pagan todos los meses con Mercado Pago.";

export const V2_CTA_LABEL = "Quiero crear mi membresía";
export const V2_CTA_HREF = whatsappHref();
export const V2_PRICING_HREF = "/v2/precios";
export const V2_HERO_HREF = "/v2";
export const V2_START_HREF = "/api/oauth/connect";
export const V2_MICROCOPY = "Te respondemos por WhatsApp.";

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
  image: string;
  look: "campaign" | "school" | "gym" | "studio" | "atelier";
};

export const MEMBERSHIPS: MembershipExample[] = [
  {
    id: "marketing",
    name: "Marketing Club",
    tagline: "Aprendé marketing junto a otros creadores",
    category: "Marketing y negocios",
    price: "$20.000 / mes",
    image: "/v2/v2-marketing-club.jpg?v=2",
    look: "campaign",
  },
  {
    id: "ingles",
    name: "Inglés con Laura",
    tagline: "Clases y práctica todas las semanas",
    category: "Idiomas",
    price: "$15.000 / mes",
    image: "/v2/v2-ingles-laura.jpg?v=2",
    look: "school",
  },
  {
    id: "fit",
    name: "Fit Club",
    tagline: "Entrená con una rutina y un grupo que sostiene",
    category: "Fitness",
    price: "$12.000 / mes",
    image: "/v2/v2-fit-club.jpg?v=2",
    look: "gym",
  },
  {
    id: "ia",
    name: "IA para Negocios",
    tagline: "Usá herramientas nuevas sin perder el oficio",
    category: "Negocios",
    price: "$25.000 / mes",
    image: "/v2/v2-ia-negocios.jpg?v=2",
    look: "studio",
  },
  {
    id: "diseno",
    name: "Diseño Freelance",
    tagline: "Oficio, clientes y un espacio para mostrar trabajo",
    category: "Diseño",
    price: "$18.000 / mes",
    image: "/v2/v2-diseno-freelance.jpg?v=2",
    look: "atelier",
  },
];
