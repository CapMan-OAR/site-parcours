import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://parcours.asbsolutions.fr";
const isPublic = process.env.SITE_PUBLIC === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isPublic ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
