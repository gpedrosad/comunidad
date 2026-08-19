import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { HEADLINE, SITE_NAME, SUBHEADLINE } from "@/lib/landing";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${HEADLINE}`,
  description: SUBHEADLINE,
};

export const viewport: Viewport = {
  themeColor: "#f3efe7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plex.variable} h-full antialiased`}>
      <body className="min-h-full bg-page font-sans text-ink">{children}</body>
    </html>
  );
}
