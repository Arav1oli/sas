import type { Metadata } from "next";
import PracticeAreaTemplate, { type PracticeArea } from "@/components/PracticeAreaTemplate";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { NAP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sutherland Shire Property Conveyancing Lawyers",
  description:
    "Property is one of the most expensive, but valuable, investments a person makes in his or her lifetime. Ensure it's well protected by law.",
  alternates: { canonical: "/property-conveyancing" },
};

const area: PracticeArea = {
  eyebrow: "Property & Conveyancing",
  title: "Property & Conveyancing",
  intro: "Need advice you can rely on? Book your consultation with us here.",
  heroImage: "/images/practice/property-hero.jpg",
  heroAlt: "Solari & Stock property and conveyancing",
  bookHref: "/contact",
  lead: [
    "Property is one of the most expensive, but valuable, investments a person makes in his or her lifetime. We always have your best interests at heart, including your bottom line — not ours.",
    "We have developed strategic alliances with leading professionals in associated fields such as finance, real estate agents, financial advisers and risk insurance to enable us to coordinate every aspect of the transaction both now and in the future.",
    `Our clients see this as added value in their relationship with us as we are looking after them not just in that transaction, but into the future. Call Solari & Stock Lawyers on ${NAP.phoneDisplay} for efficient and cost-effective assistance and results.`,
    "Based in Miranda, Solari & Stock Lawyers have been practicing in Property Law and Conveyancing for over 20 years in the St George-Sutherland area. A trusted advisor tailors your circumstances according to your legal needs.",
  ],
  services: [
    "Buying property",
    "Selling property",
    "Refinancing property",
    "Property development",
    "Land and property subdivision",
    "Stamp duty",
    "Mortgages (refinances and discharges)",
  ],
  secondaryImage: "/images/practice/property-secondary.jpg",
  secondaryAlt: "Property conveyancing documents",
};

export default function PropertyConveyancingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Property & Conveyancing", path: "/property-conveyancing" },
          ]),
          serviceSchema({
            name: "Property & Conveyancing",
            description: metadata.description as string,
            url: "/property-conveyancing",
          }),
        ]}
      />
      <PracticeAreaTemplate area={area} />
    </>
  );
}
