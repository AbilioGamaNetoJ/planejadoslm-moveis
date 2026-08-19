import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { localBusinessJsonLd } from "@/src/lib/json-ld";
import { siteUrl } from "@/src/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Planejados LM Floripa | Móveis planejados em Florianópolis",
  description:
    "Planejados LM Floripa — móveis planejados com cuidado total pelo seu patrimônio. Cozinhas, dormitórios e marcenaria sob medida em Florianópolis. Fale com Luis Miguel no WhatsApp (48) 99808-8780.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Planejados LM Floripa",
    title: "Planejados LM Floripa | Móveis planejados",
    description:
      "Marcenaria em Florianópolis. Cozinhas, dormitórios e móveis sob medida. Atendimento pelo WhatsApp com Luis Miguel.",
    images: [{ url: "/images/maps-22.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#441012",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
