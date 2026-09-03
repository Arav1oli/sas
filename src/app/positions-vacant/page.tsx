import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Positions Vacant",
  description: "Current career opportunities at Solari & Stock Lawyers in Miranda, NSW.",
  alternates: { canonical: "/positions-vacant" },
};

export default function PositionsVacantPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Positions Vacant", path: "/positions-vacant" },
        ])}
      />
      <PageHero eyebrow="Careers" title="Positions Vacant" />
      <section className="container-page max-w-2xl py-16 md:py-20">
        <p className="text-ink-soft">
          There are no positions available at the moment. Please check back
          later for future opportunities.
        </p>
      </section>
    </>
  );
}
