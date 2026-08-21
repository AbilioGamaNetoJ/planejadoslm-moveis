import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/lib/site";

// Required by Next when `output: "export"` is set.
export const dynamic = "force-static";

// Answer engines are allowed by default; listing them makes the intent explicit
// and reviewable. Google-Extended in particular is what permits the site to be
// used for grounding in AI Overviews and Gemini.
const answerEngines = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: answerEngines, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
