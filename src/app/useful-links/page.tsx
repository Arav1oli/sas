import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Useful Links",
  description: "Useful government, court and support links curated by Solari & Stock Lawyers.",
  alternates: { canonical: "/useful-links" },
};

const LINK_GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Government & registers",
    links: [
      { label: "Personal Property Securities Register", href: "https://www.ppsr.gov.au/Pages/ppsr.aspx" },
      { label: "Revenue NSW", href: "https://www.revenue.nsw.gov.au/" },
      { label: "Australian Taxation Office", href: "https://www.ato.gov.au/" },
      { label: "Australian Government Portal", href: "https://www.australia.gov.au/" },
      { label: "NSW Government Portal", href: "https://www.nsw.gov.au/" },
      { label: "ABN Lookup", href: "https://www.abr.business.gov.au/" },
      { label: "Department of Human Services (Centrelink / Medicare / Child Support)", href: "https://www.humanservices.gov.au/" },
    ],
  },
  {
    heading: "Family law support",
    links: [
      { label: "The Federal Circuit and Family Court of Australia (FCFCOA)", href: "https://www.fcfcoa.gov.au/" },
      { label: "Family Relationship Online", href: "https://www.familyrelationships.gov.au/" },
      { label: "JustFund — helping you pay your legal bills", href: "https://justfund.com.au/" },
    ],
  },
  {
    heading: "Firm resources & media",
    links: [
      { label: "Lawfully Explained", href: "https://lawfullyexplained.com.au/" },
      { label: "Solari & Stock Privacy Policy (PDF)", href: "https://solariandstock.com.au/wp-content/uploads/2021/06/Solari-and-Stock-Privacy-Policy-2021.pdf" },
      { label: "Cyber Fraud Information (PDF)", href: "https://solariandstock.com.au/wp-content/uploads/2024/02/Cyber-Fraud-Brochure_LSNSW-and-LCI.pdf" },
      { label: "Solari & Stock Camp Quality fundraiser", href: "https://fundraise.campquality.org.au/fundraisers/solariandstock" },
      { label: "Podcast — Keeping It In The Family with Kirsten Taylor-Martin", href: "https://soundcloud.com/keepingitinthefamily/ep-9-10-questions-with-solari-stock-lawyers" },
      { label: "Michael Solari and Lexis Nexis (PDF)", href: "https://www.lexisnexis.com.au/__data/assets/pdf_file/0020/534413/Lexis_-Customer-Stories-Solari-and-Stock_24092024D.pdf" },
    ],
  },
];

export default function UsefulLinksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Useful Links", path: "/useful-links" },
        ])}
      />
      <PageHero eyebrow="Resources" title="Useful Links" />
      <section className="container-page max-w-3xl py-16 md:py-20">
        {LINK_GROUPS.map((g) => (
          <div key={g.heading} className="mb-10">
            <h2 className="mb-3 text-xl">{g.heading}</h2>
            <ul className="flex flex-col gap-2">
              {g.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-deep hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
