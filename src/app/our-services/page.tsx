import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "An overview of Solari & Stock's legal services across family law, property & conveyancing, commercial law, wills & estates, and other legal areas.",
  alternates: { canonical: "/our-services" },
};

// Note for whoever picks this up: the live WordPress "Our Services" page is
// unedited Bridge-theme demo content for a medical clinic ("Diagnostic",
// "Testing", "Pharmacy") with lorem ipsum body text — never replaced after
// the theme was installed. Rebuilt here as a real index of the firm's
// actual practice areas instead of carrying that over.
const SERVICES = [
  {
    title: "Family Law",
    body: "Divorce, separation, property settlement, parenting arrangements and more — handled with a professional and compassionate approach.",
    href: "/family-law",
  },
  {
    title: "Property & Conveyancing",
    body: "Buying, selling, refinancing and subdividing — protected by lawyers who know the Sutherland Shire market.",
    href: "/property-conveyancing",
  },
  {
    title: "Commercial Law",
    body: "Shareholder agreements, trusts, partnerships, leases and commercial litigation for businesses of every size.",
    href: "/commercial-law",
  },
  {
    title: "Wills & Estates",
    body: "Will preparation, estate planning, probate, and representing executors and beneficiaries.",
    href: "/will-estates",
  },
  {
    title: "Other Legal Areas",
    body: "Court representation and dispute resolution across a wide range of other legal matters.",
    href: "/other-legal-areas",
  },
];

export default function OurServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Services", path: "/our-services" },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title="Our Services"
        intro="Comprehensive legal services for the Sutherland Shire, delivered by specialist teams."
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block rounded-sm border border-line p-6 transition-colors hover:border-accent-deep"
            >
              <h2 className="text-xl">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
              <span className="mt-4 inline-block text-sm text-accent-deep">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
