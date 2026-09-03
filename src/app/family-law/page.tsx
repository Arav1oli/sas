import type { Metadata } from "next";
import PracticeAreaTemplate, { type PracticeArea } from "@/components/PracticeAreaTemplate";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { SETTIFY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sutherland Shire Family Lawyers - Divorce & More",
  description:
    "We know family law disputes are an exhausting process. Our clients benefit from our professional and compassionate approach - Sutherland Shire.",
  alternates: { canonical: "/family-law" },
};

const area: PracticeArea = {
  eyebrow: "Family Law",
  title: "Family Law",
  intro: "Book your free 30 minute family law consultation here.",
  heroImage: "/images/practice/family-law-hero.jpg",
  heroAlt: "Solari & Stock family law consultation",
  bookHref: "/contact",
  lead: [
    "Solari & Stock are based in Miranda and have over 30 years of experience in the St George-Sutherland area. We know family law disputes are an exhausting process. Our clients benefit from our professional and compassionate approach.",
    "We offer sincere and quality family law advice, developing a suitable approach and resolution. We successfully work out arrangements, in or out of Court, always advocating your best interests. Our committed and experienced lawyers have a very high success rate in this area.",
    "Riccarda Stock, backed by a team of four lawyers, is an Accredited Specialist in Family Law and heads the collaboratively trained, Family Law Team.",
  ],
  services: [
    "Divorce and separation",
    "Property and financial settlement",
    "Parenting orders and parenting plans",
    "Child support",
    "De-facto law",
    "Spouse maintenance",
    "Superannuation agreements",
    "Domestic violence (AVOs)",
    "Court representation — Federal Circuit and Family Court, Local, District and Supreme Courts",
    "Collaborative practice",
    "Round table settlement conferencing",
    "Binding Financial Agreements (e.g. pre-nuptial agreements)",
  ],
  fundingNote: {
    heading: "A smarter, flexible way to fund your family law matter",
    body: [
      "We understand that when you're navigating a separation or relationship property matter, the financial strain can sometimes stand in the way of getting the legal support you need. That's why we've partnered with JustFund — Australia's only dedicated provider of flexible funding solutions for family law legal fees.",
      "Through this partnership, eligible clients can access a flexible line of credit to cover legal fees and expenses related to separation or relationship property proceedings. You don't have to repay the loan until you reach a settlement.",
      "Contact us for more information, or visit JustFund.com.au.",
    ],
  },
};

export default function FamilyLawPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Family Law", path: "/family-law" },
          ]),
          serviceSchema({
            name: "Family Law",
            description: metadata.description as string,
            url: "/family-law",
          }),
        ]}
      />
      <PracticeAreaTemplate area={area} />
      <section className="container-page py-14">
        <a
          href={SETTIFY.familyLaw}
          className="inline-block rounded-sm border border-accent-deep px-6 py-3 text-sm font-medium text-accent-deep hover:bg-accent-tint-soft"
        >
          Start your family law matter online now
        </a>
      </section>
    </>
  );
}
