import type { Metadata } from "next";
import PracticeAreaTemplate, { type PracticeArea } from "@/components/PracticeAreaTemplate";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sutherland Shire Commercial Lawyers, Where Clients Come First",
  description:
    "Covering matters such as commercial law advice, shareholder agreements, trusts, partnerships, commercial documentation and much more.",
  alternates: { canonical: "/commercial-law" },
};

const area: PracticeArea = {
  eyebrow: "Commercial Law",
  title: "Commercial Law",
  intro: "Need commercial law advice you can rely on? Book your consultation with us here.",
  heroImage: "/images/practice/commercial-hero.jpg",
  heroAlt: "Solari & Stock commercial law",
  bookHref: "/contact",
  lead: [
    "Our commercial law expertise includes matters such as commercial law advice, shareholder agreements, trusts, partnerships, commercial documentation, buying and selling shares and businesses, commercial conveyancing, leases, franchising, and commercial litigation.",
    "Based in Miranda, Solari & Stock Lawyers have been implementing risk management and modern day business practice in commercial law since 1987 in the St George-Sutherland area. We represent small to large businesses and individual clients in industries such as retail, transportation, franchising and manufacturing.",
    "Solari & Stock value each and every one of our clients, no matter if they are a sole trader operating from a home office or a listed corporation with multi-national offices.",
  ],
  services: [
    "Conveyancing",
    "Leases",
    "Franchise agreements",
    "Commercial documents",
    "Business structures — companies, trusts and partnerships",
    "Litigation and dispute resolution",
    "Risk management",
    "Commercial advice",
  ],
  secondaryImage: "/images/practice/commercial-secondary.jpg",
  secondaryAlt: "Solari & Stock commercial services",
};

export default function CommercialLawPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Commercial Law", path: "/commercial-law" },
          ]),
          serviceSchema({
            name: "Commercial Law",
            description: metadata.description as string,
            url: "/commercial-law",
          }),
        ]}
      />
      <PracticeAreaTemplate area={area} />
    </>
  );
}
