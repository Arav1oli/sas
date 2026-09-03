import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SETTIFY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sutherland Shire Lawyers - Family, Property, Wills & More",
  description:
    "Your local Sutherland Shire law firm, specialising in family law, property law, commercial law, estate law and much more. Get in contact!",
  alternates: { canonical: "/" },
};

const PRACTICE_SUMMARY = [
  {
    title: "Family Law",
    body: "Solari & Stock Lawyers understand that the value at stake is immeasurable.",
    href: "/family-law",
    settify: SETTIFY.familyLaw,
  },
  {
    title: "Wills & Estates",
    body: "Let Solari & Stock Lawyers remove the stress from Wills & Estate matters.",
    href: "/will-estates",
    settify: SETTIFY.wills,
  },
  {
    title: "Commercial Law",
    body: "Responsive and strategic commercial solutions that protect you against key risks, and deliver agreed outcomes.",
    href: "/commercial-law",
  },
  {
    title: "Property & Conveyancing",
    body: "Buying, selling or refinancing — protected by law, guided by people who know the Shire.",
    href: "/property-conveyancing",
  },
  {
    title: "Other Legal Services",
    body: "Beyond our core practice areas, our team can guide you through a wider range of legal matters.",
    href: "/other-legal-areas",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      <section className="border-b border-line bg-paper-tint">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
              Miranda &amp; Sutherland Shire
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">
              Comprehensive legal services, where clients come first
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-soft">
              Solari &amp; Stock Lawyers is located at Miranda in Sydney&rsquo;s
              Sutherland Shire. Our dedicated teams specialise in Family Law,
              Wills and Estates, Commercial Law and Leasing, and Conveyancing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
              >
                Book your free 30 minute consultation
              </Link>
              <a
                href={SETTIFY.familyLaw}
                className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink hover:border-accent-deep"
              >
                Start online now
              </a>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-paper">
            <Image
              src="/images/brand/directors-composite.png"
              alt="Solari and Stock Lawyers directors"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl">Comprehensive legal services</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          The team at Solari and Stock strive to provide a personalised legal
          service that caters to each of our client&rsquo;s needs.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_SUMMARY.map((p) => (
            <div key={p.title} className="rounded-sm border border-line p-6">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link href={p.href} className="text-accent-deep hover:underline">
                  Learn more
                </Link>
                {p.settify && (
                  <a href={p.settify} className="text-accent-deep hover:underline">
                    Start online now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl">What our clients say</h2>
          <blockquote className="mt-6 max-w-2xl border-l-2 border-accent pl-6 text-lg italic text-ink-soft">
            &ldquo;I want to thank Solari &amp; Stock for helping me navigate one
            of the most difficult stages of my life. Your care, understanding
            and most of all, guidance in challenging times will never be
            forgotten.&rdquo;
            <footer className="mt-3 text-sm not-italic text-ink-faint">
              &ndash; Rodney
            </footer>
          </blockquote>
        </div>
      </section>

      <CTABand />
    </>
  );
}
