import type { MetadataRoute } from "next";
import { store } from "@/src/data/store";
import { siteUrl } from "@/src/lib/site";

// Required by Next when `output: "export"` is set.
export const dynamic = "force-static";

// Bump this when the page content meaningfully changes. A `new Date()` here
// would claim "modified now" on every build, which search engines discount.
const lastModified = new Date("2026-08-21");

export default function sitemap(): MetadataRoute.Sitemap {
  // Every project photo, so Google Images can discover the ones that are only
  // reachable through the lightbox.
  const images = store.projectCategories.flatMap((category) =>
    category.images.map((image) => new URL(image.src, siteUrl).toString()),
  );

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [new URL("/images/og.jpg", siteUrl).toString(), ...images],
    },
  ];
}
