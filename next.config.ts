import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export -> out/. Served by Cloudflare Workers Static Assets,
  // so there is no Node runtime in production.
  output: "export",

  images: {
    // next/image stays optimized under `output: "export"` because we bypass the
    // default /_next/image endpoint. The `unoptimized` requirement only fires
    // when loader === "default".
    loader: "custom",
    loaderFile: "./image-loader.ts",
    qualities: [75, 80, 90],
    // Trimmed from the 8 default breakpoints: fewer srcset entries means fewer
    // billable Cloudflare transformations, and a 3840px hero helps nobody.
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
    imageSizes: [96, 128, 256, 384],
  },

  // NOTE: headers(), redirects() and rewrites() are inert under static export.
  // Cache headers live in public/_headers; domain redirects are Cloudflare
  // Redirect Rules (see the SEO plan). Do not add them here.
};

export default nextConfig;
