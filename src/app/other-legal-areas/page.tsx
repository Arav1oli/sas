import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Other Legal Areas",
  description:
    "Beyond family law, property, wills and commercial law, Solari & Stock's solicitors cover a wide range of other legal matters across the Sutherland Shire.",
  alternates: { canonical: "/other-legal-areas" },
};

export default function OtherLegalAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Other Legal Areas", path: "/other-legal-areas" },
          ]),
          serviceSchema({
            name: "Other Legal Areas",
            description: metadata.description as string,
            url: "/other-legal-areas",
          }),
        ]}
      />
      <PageHero
        eyebrow="Other Legal Areas"
        title="Other Legal Areas"
        intro="Need advice you can rely on? Book your consultation with us here."
      />
      <section className="container-page max-w-3xl py-16 md:py-20">
        <p className="mb-4 text-ink-soft leading-relaxed">
          Our solicitors have appeared in most Local Courts in Sydney, many in
          NSW Country, the District Court, Land &amp; Environment Court, the
          Industrial Commission and other jurisdictions across a wide range of
          matters.
        </p>
        <p className="mb-4 text-ink-soft leading-relaxed">
          Some of our matters have become the leading cases in their
          particular areas. We have undertaken matters from simple debt
          recovery to local government disputes.
        </p>
        <p className="mb-4 text-ink-soft leading-relaxed">
          Our solicitors can be contacted to discuss any dispute which may
          require Court action or alternative dispute resolution. We strive
          to achieve the best possible outcome for every client.
        </p>
        <p className="text-ink-soft leading-relaxed">
          For any other enquiries, or if you are uncertain as to the person
          you should contact for your legal matter, please contact us via the
          booking link below.
        </p>
      </section>
      <CTABand />
    </>
  );
}
