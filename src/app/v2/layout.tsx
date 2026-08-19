import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import { V2_HEADLINE, V2_SITE_NAME, V2_SUBHEADLINE } from "@/lib/v2-landing";
import "./v2.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
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
  return <div className={`${newsreader.variable} v2`}>{children}</div>;
}
