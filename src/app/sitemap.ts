import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://parcours.asbsolutions.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const routes = [
    "",
    "/cas-usage/bilan-competences",
    "/cas-usage/vae",
    "/cas-usage/retour-emploi",
    "/differenciation",
    "/tarifs",
    "/a-propos",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
