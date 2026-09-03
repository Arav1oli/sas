import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet Your Local Sutherland Shire Lawyers",
  description:
    "Meet Solari & Stock's expert team of local Sutherland Shire lawyers, ready to assist you on your legal journey.",
  alternates: { canonical: "/the-team" },
};

export default function TheTeamPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Team", path: "/the-team" },
        ])}
      />
      <PageHero
        eyebrow="Our People"
        title="Meet the Team"
        intro="Need advice you can rely on? Book your consultation with us here."
        ctaLabel="Book your free 30 minute consultation"
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <TeamCard key={m.slug} member={m} />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
