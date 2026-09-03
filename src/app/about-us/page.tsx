import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CredentialsBar from "@/components/CredentialsBar";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Solari & Stock Lawyers — Sutherland Shire's boutique law firm, serving Miranda and the St George-Sutherland area since 1987.",
  alternates: { canonical: "/about-us" },
};

const DIRECTORS = [
  {
    name: "Michael Solari",
    role: "Director, Commercial Law",
    image: "/images/team/michael-solari.jpg",
    slug: "michael-solari",
  },
  {
    name: "Riccarda Stock",
    role: "Director, Family Law",
    image: "/images/team/riccarda-stock.jpg",
    slug: "riccarda-stock",
  },
  {
    name: "Rebecca Exley",
    role: "Director, Estates & Litigation",
    image: "/images/team/rebecca-exley.jpg",
    slug: "rebecca-exley",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <PageHero
        eyebrow="Our Firm"
        title="In Your Best Interests"
        intro="A boutique Sutherland Shire law firm, based in Miranda since 1987."
      />

      <CredentialsBar />

      <section className="container-page max-w-3xl py-16 md:py-20">
        <h2 className="text-2xl">Our history</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Solari &amp; Stock Lawyers has been practising in the St
          George-Sutherland area since 1987. What started as a local
          Miranda practice has grown into a boutique firm holding the
          strongest Family Law credential position of any firm in the
          Sutherland Shire — three Law Society Accredited Specialists in
          Family Law — and the Shire&rsquo;s only STEP-accredited solicitor
          for estate planning.
        </p>
        <p className="mt-4 text-ink-soft leading-relaxed">
          We&rsquo;ve stayed a boutique firm by choice. It means every
          client works directly with an experienced solicitor, not a
          rotating cast of juniors, and it means we can hold ourselves to a
          standard the bigger city firms don&rsquo;t have to answer to on a
          local level.
        </p>

        <h2 className="mt-10 text-2xl">Our ethos</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Family law, wills and estates, and commercial disputes are rarely
          just legal problems — they&rsquo;re some of the most stressful
          moments in a client&rsquo;s life or business. Our approach is to
          combine specialist, accredited expertise with a genuine,
          firm-wide commitment to trauma-aware, mental health-informed
          practice, so clients are heard as well as advised.
        </p>

        <h2 className="mt-10 text-2xl">Local ties</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Michael Solari has served as a committee member and office
          bearer of the St George &amp; Sutherland Law Society — active
          leadership in the local legal community, not just membership.
          It&rsquo;s one of the reasons referrers across the Shire — other
          solicitors, accountants and financial planners — send their
          clients to us.
        </p>
      </section>

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-2xl">Our Directors</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {DIRECTORS.map((d) => (
              <Link
                key={d.slug}
                href={`/team/${d.slug}`}
                className="group block overflow-hidden rounded-sm border border-line bg-paper transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-tint">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width: 640px) 30vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-ink">{d.name}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{d.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
