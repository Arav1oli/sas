import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    "Based in Miranda, Solari & Stock Lawyers have been implementing risk management and modern day business practice in commercial law since 1987 in the St George-Sutherland area. We represent small to large businesses and individual clients in industries such as retail, transportation, franchising and manufacturing — from a sole trader operating out of a home office to a listed corporation with multi-national offices.",
    "Our approach is grounded in decades of litigation and transactional experience across the Supreme, District and Federal Circuit courts, giving clients practical, commercially-minded advice rather than advice built for the courtroom alone.",
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

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page grid grid-cols-1 gap-8 py-16 sm:grid-cols-[160px_1fr] md:py-20">
          <div className="relative aspect-square w-40 overflow-hidden rounded-sm bg-paper">
            <Image
              src="/images/team/michael-solari.jpg"
              alt="Michael Solari"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
              Led by a Director
            </p>
            <h2 className="mt-2 text-2xl">Michael Solari</h2>
            <p className="mt-1 text-sm text-ink-soft">Director, Commercial Law</p>
            <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">
              Admitted as a solicitor in 1980, Michael leads the firm&rsquo;s
              commercial practice with over four decades of experience
              across major litigation, business structuring and property
              transactions — including a long-standing role as a committee
              member and office bearer of the St George &amp; Sutherland Law
              Society.
            </p>
            <Link href="/team/michael-solari" className="mt-3 inline-block text-sm text-accent-deep hover:underline">
              Read Michael&rsquo;s full profile &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <a
          href="/contact"
          className="inline-block rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
        >
          Book a Commercial Law Consultation
        </a>
      </section>
    </>
  );
}
