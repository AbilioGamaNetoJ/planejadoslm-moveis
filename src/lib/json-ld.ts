import { store } from "@/src/data/store";
import { siteUrl } from "@/src/lib/site";

const ORGANIZATION_ID = `${siteUrl}/#organization`;
const BUSINESS_ID = `${siteUrl}/#localbusiness`;
const WEBSITE_ID = `${siteUrl}/#website`;
const WEBPAGE_ID = `${siteUrl}/#webpage`;
const FOUNDER_ID = `${siteUrl}/#luis-miguel`;
const CITY_ID = `${siteUrl}/#florianopolis`;

const abs = (path: string) => new URL(path, siteUrl).toString();

const dayOfWeek: Record<string, string> = {
  "Segunda-feira": "Monday",
  "Terça-feira": "Tuesday",
  "Quarta-feira": "Wednesday",
  "Quinta-feira": "Thursday",
  "Sexta-feira": "Friday",
  Sábado: "Saturday",
  Domingo: "Sunday",
};

function openingHours() {
  return store.hours.flatMap((row) => {
    if (row.time === "Fechado") return [];
    // Accept en dash, em dash or hyphen so a typo in the data cannot silently
    // emit `closes: undefined`.
    const [opens, closes] = row.time.split(/\s*[–—-]\s*/);
    if (!opens || !closes) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeek[row.day],
        opens,
        closes,
      },
    ];
  });
}

/** Florianópolis itself, plus every bairro and neighbouring city we serve. */
function areaServed() {
  const city = {
    "@type": "City",
    "@id": CITY_ID,
    name: "Florianópolis",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  };

  const places = store.areasServed.flatMap((area) =>
    area.bairros.map((bairro) =>
      area.region === "Grande Florianópolis"
        ? {
            "@type": "City",
            name: bairro,
            address: {
              "@type": "PostalAddress",
              addressLocality: bairro,
              addressRegion: "SC",
              addressCountry: "BR",
            },
          }
        : {
            "@type": "Place",
            name: `${bairro}, Florianópolis`,
            containedInPlace: { "@id": CITY_ID },
          },
    ),
  );

  return [city, ...places];
}

/** Broad services plus the finer project taxonomy, de-duplicated by name. */
function offerCatalog() {
  const names = [
    ...store.services.map((service) => service.title),
    ...store.projectCategories.map((category) => category.title),
  ];

  return {
    "@type": "OfferCatalog",
    name: "Móveis planejados sob medida em Florianópolis",
    itemListElement: [...new Set(names)].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        serviceType: name,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@id": CITY_ID },
      },
    })),
  };
}

/** Cover photo of each project category, captioned and placed in Florianópolis. */
function images() {
  const covers = store.projectCategories.flatMap((category) => {
    const cover = category.images[0];
    if (!cover) return [];
    return [
      {
        "@type": "ImageObject",
        url: abs(cover.src),
        contentUrl: abs(cover.src),
        caption: cover.alt,
        name: `${category.title} — Planejados LM, Florianópolis`,
        contentLocation: { "@id": CITY_ID },
      },
    ];
  });

  return covers;
}

function reviews() {
  // `datePublished` is intentionally omitted: store.reviews only carries a
  // relative label ("há 4 meses"), and inventing an exact date would be wrong.
  return store.reviews.map((review) => ({
    "@type": "Review",
    reviewBody: review.text,
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.stars,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": BUSINESS_ID },
  }));
}

const organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: store.name,
  alternateName: store.shortName,
  url: `${siteUrl}/`,
  legalName: store.name,
  taxID: store.cnpj,
  vatID: store.cnpj,
  foundingDate: String(store.foundingYear),
  logo: {
    "@type": "ImageObject",
    url: abs("/images/logo_floripa_transparente.webp"),
    caption: store.name,
  },
  founder: { "@id": FOUNDER_ID },
  sameAs: [store.links.instagram, store.links.facebook, store.links.maps],
};

const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: store.representative,
  jobTitle: "Marceneiro responsável",
  worksFor: { "@id": ORGANIZATION_ID },
};

const localBusiness = {
  "@type": ["LocalBusiness", "FurnitureStore"],
  "@id": BUSINESS_ID,
  name: store.name,
  alternateName: store.shortName,
  description: store.bio,
  url: `${siteUrl}/`,
  telephone: `+${store.phone.whatsappE164}`,
  email: store.email,
  image: images(),
  logo: abs("/images/logo_floripa_transparente.webp"),
  parentOrganization: { "@id": ORGANIZATION_ID },
  founder: { "@id": FOUNDER_ID },
  knowsLanguage: "pt-BR",
  currenciesAccepted: "BRL",
  paymentAccepted: store.paymentAccepted,
  taxID: store.cnpj,
  foundingDate: String(store.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: store.address.line,
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    postalCode: store.address.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.coords.lat,
    longitude: store.coords.lng,
  },
  hasMap: store.links.maps,
  areaServed: areaServed(),
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: store.coords.lat,
      longitude: store.coords.lng,
    },
    geoRadius: 40000,
  },
  hasOfferCatalog: offerCatalog(),
  openingHoursSpecification: openingHours(),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: store.rating.value,
    reviewCount: store.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews(),
  sameAs: [store.links.instagram, store.links.facebook, store.links.maps],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${siteUrl}/`,
  name: store.name,
  inLanguage: "pt-BR",
  publisher: { "@id": ORGANIZATION_ID },
};

const webPage = {
  "@type": "WebPage",
  "@id": WEBPAGE_ID,
  url: `${siteUrl}/`,
  name: `Móveis Planejados em Florianópolis | ${store.shortName}`,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": BUSINESS_ID },
  primaryImageOfPage: abs("/images/hero-ponte.webp"),
  inLanguage: "pt-BR",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  isPartOf: { "@id": WEBPAGE_ID },
  mainEntity: store.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organization, founder, localBusiness, website, webPage, faqPage],
};
