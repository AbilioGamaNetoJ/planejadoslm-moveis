import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { siteJsonLd } from "@/src/lib/json-ld";
import { store } from "@/src/data/store";
import { siteUrl } from "@/src/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Móveis Planejados em Florianópolis | Planejados LM",
  description:
    "Marcenaria no Rio Vermelho, Florianópolis. Cozinhas, guarda-roupas e móveis sob medida, do projeto à instalação. Orçamento no WhatsApp (48) 99808-8780.",
  applicationName: store.name,
  authors: [{ name: store.name, url: `${siteUrl}/` }],
  creator: store.name,
  publisher: store.name,
  alternates: {
    canonical: "/",
  },
  category: "Marcenaria e móveis planejados",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Large thumbnails matter disproportionately for a furniture business.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: store.name,
    title: "Móveis Planejados em Florianópolis | Planejados LM",
    description:
      "Marcenaria no Rio Vermelho, em Florianópolis. Cozinhas, guarda-roupas, home office e móveis sob medida, do projeto à instalação.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Home office planejado sob medida pela Planejados LM em Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis Planejados em Florianópolis | Planejados LM",
    description:
      "Marcenaria no Rio Vermelho, em Florianópolis. Cozinhas, guarda-roupas e móveis sob medida.",
    images: ["/images/og.jpg"],
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2b2724",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
