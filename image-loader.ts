import type { ImageLoaderProps } from "next/image";

// Cloudflare Image Transformations: /cdn-cgi/image/<options>/<source-path>
// This module is bundled into the client too — keep it dependency-free.
//
// OPT-IN ON PURPOSE. That endpoint only exists on a Cloudflare zone with
// Transformations enabled (Dashboard -> Images -> Transformations). If it is
// not enabled, every /cdn-cgi/image/ URL 404s and the whole site loses its
// images. So the default is to serve the original files — heavier, but never
// broken — and transformations are switched on deliberately once the zone is
// confirmed working:
//
//   NEXT_PUBLIC_CF_IMAGE_TRANSFORMS=1 npm run build
//
// Verify after deploying, before flipping this on:
//   curl -sSI https://www.moveisplanejadoslm.com.br/cdn-cgi/image/\
//   width=640,quality=75,format=auto/images/hero-ponte.webp

const PASSTHROUGH = /\.(svg|gif|ico|avif)$/i;

const transformsEnabled = process.env.NEXT_PUBLIC_CF_IMAGE_TRANSFORMS === "1";

/** Build the same URL the Next.js loader would, for manual preloads. */
export function cloudflareImageUrl(
  src: string,
  width: number,
  quality = 75,
): string {
  if (!transformsEnabled) return src;
  if (PASSTHROUGH.test(src)) return src;
  if (/^https?:\/\//i.test(src)) return src;

  const options = [
    `width=${width}`,
    `quality=${quality}`,
    "format=auto",
    "fit=scale-down",
  ].join(",");

  return `/cdn-cgi/image/${options}/${src.replace(/^\/+/, "")}`;
}

export default function cloudflareLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  return cloudflareImageUrl(src, width, quality ?? 75);
}
