import type { Metadata, Viewport } from "next";
import {
  Anton,
  Bebas_Neue,
  Cormorant_Garamond,
  Fraunces,
  Newsreader,
  Space_Grotesk,
} from "next/font/google";
import { V2_HEADLINE, V2_SITE_NAME, V2_SUBHEADLINE } from "@/lib/v2-landing";
import "./v2.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${V2_SITE_NAME} — ${V2_HEADLINE}`,
  description: V2_SUBHEADLINE,
};

export const viewport: Viewport = {
  themeColor: "#F8F8F5",
  width: "device-width",
  initialScale: 1,
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return (
    <div
      className={`${newsreader.variable} ${bebas.variable} ${anton.variable} ${fraunces.variable} ${grotesk.variable} ${cormorant.variable} v2`}
    >
      {children}
    </div>
  );
}
