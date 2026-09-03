import type { Metadata } from "next";
import Image from "next/image";
import PracticeAreaTemplate, { type PracticeArea } from "@/components/PracticeAreaTemplate";
import CredentialsBar from "@/components/CredentialsBar";
import Reveal from "@/components/Reveal";
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
  heroImage: "/images/team/riccarda-stock.jpg",
  heroAlt: "Riccarda Stock, Director, Family Law | Law Society Accredited Specialist",
  bookHref: "/contact",
  lead: [
    "Solari & Stock are based in Miranda and have over 30 years of experience in the St George-Sutherland area. We know family law disputes are an exhausting process. Our clients benefit from our professional and compassionate approach.",
    "We offer sincere and quality family law advice, developing a suitable approach and resolution. We successfully work out arrangements, in or out of Court, always advocating your best interests. Our committed and experienced lawyers have a very high success rate in this area.",
    "Our Family Law team includes three Law Society Accredited Specialists in Family Law — Riccarda Stock, Nikita Ward and Nicole Quirk — the most highly accredited Family Law team of any firm in the St George & Sutherland Shire area. This is an advanced qualification held by fewer than 6% of practising family lawyers in NSW, and no other local firm holds more than two.",
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

      <section className="border-t border-line bg-paper py-14 md:py-16">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
              Meet the team
            </p>
            <h2 className="mt-2 text-2xl">Your Family Law team</h2>
            <div className="relative mt-6 aspect-[2048/1064] w-full max-w-4xl">
              <Image
                src="/images/practice/family-law-team.png"
                alt="The Solari & Stock Family Law team"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain object-left"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CredentialsBar />

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page max-w-2xl py-16 md:py-20">
          <h2 className="text-2xl">Trauma-aware family law</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            We understand that many family law matters involve domestic
            violence and coercive control. Our team combines Accredited
            Specialist credentials with a genuine, firm-wide commitment to
            DV awareness and mental health-informed practice, so you are
            heard and supported at every stage.
          </p>
          <p className="mt-4 text-sm text-ink-faint">
            All enquiries of this nature are treated in strict confidence.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
          >
            Book your free 30 minute consultation
          </a>
        </div>
      </section>

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
