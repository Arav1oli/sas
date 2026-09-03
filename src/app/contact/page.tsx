import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { FULL_ADDRESS, NAP, SETTIFY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in contact with your local Sutherland Shire lawyers, specialising in family law, commercial law, wills and estate law and more.",
  alternates: { canonical: "/contact" },
};

// The live WordPress Contact page still shows unedited Bridge-theme demo
// content — fake "New York" and "London" offices with a placeholder phone
// number and lorem ipsum body text. Replaced here with the firm's one real
// office: address and phone confirmed from the page footer and JSON-LD; see
// src/lib/site.ts for the email caveat.
export default function ContactPage() {
  const mapQuery = encodeURIComponent(FULL_ADDRESS);
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="border-b border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
            Get in touch
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">Let&rsquo;s stay in touch</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Book your first free 30 minute in-office consultation, or send us
            a message below and we&rsquo;ll get back to you.
          </p>
        </div>
      </section>

      <section className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-[1fr_1.3fr] md:py-20">
        <div>
          <h2 className="text-2xl">Miranda office</h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-wide text-ink-faint">Address</p>
          <p className="mt-1 text-ink-soft">{FULL_ADDRESS}</p>

          <p className="mt-5 text-sm font-medium uppercase tracking-wide text-ink-faint">Phone</p>
          <a href={`tel:${NAP.phoneTel}`} className="mt-1 block text-ink-soft hover:text-accent-deep">
            {NAP.phoneDisplay}
          </a>

          <div className="mt-8 flex flex-col gap-2">
            <a href={SETTIFY.familyLaw} className="text-sm text-accent-deep hover:underline">
              Start your family law matter online (Settify)
            </a>
            <a href={SETTIFY.wills} className="text-sm text-accent-deep hover:underline">
              Start your wills & estates matter online (Settify)
            </a>
          </div>

          <div className="mt-8 aspect-video w-full overflow-hidden rounded-sm border border-line">
            <iframe
              title="Solari & Stock Lawyers, Miranda"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Send an enquiry</h2>
          <p className="mt-2 mb-6 text-sm text-ink-soft">
            Prefer to talk it through first? Call {NAP.phoneDisplay} directly.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
