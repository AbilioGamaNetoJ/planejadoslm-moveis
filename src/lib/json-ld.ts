import { store } from "@/src/data/store";
import { siteUrl } from "@/src/lib/site";

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
  return store.hours
    .filter((row) => row.time !== "Fechado")
    .map((row) => {
      const [opens, closes] = row.time.split("–").map((part) => part.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeek[row.day],
        opens,
        closes,
      };
    });
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FurnitureStore"],
  name: store.name,
  image: `${siteUrl}/images/maps-22.jpg`,
  description: store.bio,
  url: `${siteUrl}/`,
  telephone: `+${store.phone.whatsappE164}`,
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
  openingHoursSpecification: openingHours(),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: store.rating.value,
    reviewCount: store.rating.count,
  },
  sameAs: [store.links.instagram, store.links.facebook, store.links.maps],
};
