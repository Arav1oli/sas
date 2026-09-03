import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { TEAM } from "@/lib/team";

const STATIC_PATHS = [
  "",
  "/family-law",
  "/property-conveyancing",
  "/commercial-law",
  "/will-estates",
  "/other-legal-areas",
  "/our-services",
  "/about-us",
  "/the-team",
  "/faqs",
  "/contact",
  "/positions-vacant",
  "/useful-links",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const teamPages: MetadataRoute.Sitemap = TEAM.map((m) => ({
    url: `${SITE_URL}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...teamPages];
}
