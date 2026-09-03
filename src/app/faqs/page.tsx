import type { Metadata } from "next";
import Image from "next/image";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { FAQS } from "@/lib/faqs";
import { NAP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estate Planning & Tax Advice — FAQs",
  description:
    "Solari & Stock Lawyers and New Leaf Advisory answer the tax and estate planning questions every business-owning family should be asking.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: [f.intro, ...f.points, f.tip].join(" "),
              },
            })),
          },
        ]}
      />

      <section className="border-b border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
            A joint collaboration with New Leaf Advisory
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            When estate planning and tax advice work together, families win
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            A strong estate plan isn&rsquo;t just about a Will. It&rsquo;s about
            ensuring your assets, business, and family are protected, without
            unexpected tax consequences.
          </p>
        </div>
      </section>

      <section className="container-page max-w-3xl py-16 md:py-20">
        <h2 className="text-3xl">The gap most families don&rsquo;t see</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          For many successful families, estate planning feels like a box to
          tick: draft a Will, appoint executors, and assume the rest will
          take care of itself. But wealth rarely fits neatly into a document.
          When you own companies, hold shares in trusts, or have assets
          spread across structures, the way those assets are transferred can
          create far-reaching tax and legal consequences that a standard
          Will doesn&rsquo;t cover.
        </p>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Without aligned legal and accounting advice, even well-intentioned
          plans can trigger unnecessary tax bills, disputes between
          beneficiaries, or the slow unravelling of carefully built wealth.
          That&rsquo;s why Solari &amp; Stock Lawyers and New Leaf Advisory
          Chartered Accountants take a coordinated approach, ensuring your
          estate plan is as commercially sound as it is legally robust.
        </p>
      </section>

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
            FAQs
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl">
            The questions every family should be asking (but rarely do)
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Six of the most common questions we&rsquo;re asked by business
            owners and successful families when legal and tax worlds
            collide.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            {FAQS.map((f) => (
              <details
                key={f.question}
                className="group rounded-sm border border-line bg-paper p-5 open:pb-6"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-ink marker:content-none">
                  {f.question}
                </summary>
                <p className="mt-4 text-sm text-ink-soft">{f.intro}</p>
                <ul className="mt-3 ml-5 list-disc text-sm text-ink-soft">
                  {f.points.map((p) => (
                    <li key={p} className="mb-1">{p}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium text-accent-deep">
                  Expert tip: {f.tip}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
          Case study
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl">
          Protecting a blended family&rsquo;s future
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-lg font-medium">Client profile</h3>
            <p className="mt-2 text-ink-soft leading-relaxed">
              Alex and Taylor, a couple in New South Wales, have a blended
              family with five children. They own a small business
              structured as a family trust, a family home with a mortgage,
              and a self-managed superannuation fund (SMSF). Their goals:
              protect their children, ensure financial security, minimise
              tax liabilities, and safeguard their assets.
            </p>

            <h3 className="mt-6 text-lg font-medium">Challenges they faced</h3>
            <ul className="mt-2 ml-5 list-disc text-ink-soft">
              <li className="mb-1">Ensuring fair provision for all children while protecting the surviving spouse.</li>
              <li className="mb-1">Managing family trusts and SMSFs to maximise tax efficiency without creating risks.</li>
              <li className="mb-1">Safeguarding the small business and ensuring smooth succession.</li>
              <li className="mb-1">Avoiding financial strain on the surviving family members.</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Our approach</h3>
            <ul className="mt-2 ml-5 list-disc text-ink-soft">
              <li className="mb-1"><strong>Comprehensive Wills &amp; Testamentary Trusts</strong> — protecting children, stepchildren, and future generations.</li>
              <li className="mb-1"><strong>Binding Death Benefit Nominations for the SMSF</strong> — ensuring super assets are distributed according to their wishes.</li>
              <li className="mb-1"><strong>Updated Family Trust Deed</strong> — clarifying trustee roles and compliance with tax laws.</li>
              <li className="mb-1"><strong>Succession Planning for the Business</strong> — minimising operational risks and ensuring continuity.</li>
              <li className="mb-1"><strong>Regular Review Strategy</strong> — adjusting plans for life events, changing family dynamics, and evolving legislation.</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Results &amp; benefits</h3>
            <p className="mt-2 text-ink-soft leading-relaxed">
              Alex and Taylor now have a complete plan that protects every
              member of their blended family. Their family trust, SMSF, and
              business structures were optimised to reduce unnecessary tax,
              preserve income, and protect long-term wealth — with a defined
              roadmap guiding how the business and family trust will
              transition across generations.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-tint">
            <Image
              src="/images/practice/estate-planning.jpg"
              alt="Estate planning specialists at Solari & Stock"
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <blockquote className="mt-10 max-w-2xl border-l-2 border-accent pl-6 text-lg italic text-ink-soft">
          &ldquo;By combining legal, tax, and financial expertise, we helped
          Alex and Taylor secure their family&rsquo;s future with confidence
          and clarity.&rdquo;
        </blockquote>
      </section>

      <section className="border-t border-line bg-paper-tint">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl">Plan smarter. Protect more.</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Solari &amp; Stock Lawyers and New Leaf Advisory work side-by-side
            to help you plan with clarity, confidence, and complete
            protection across legal, tax, and financial boundaries.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-xl">
            <div className="rounded-sm border border-line bg-paper p-5">
              <p className="font-medium text-ink">Patrick McStay</p>
              <p className="text-sm text-ink-soft">New Leaf Advisory</p>
              <a href="tel:0285590100" className="mt-2 block text-sm text-accent-deep hover:underline">
                (02) 8559 0100
              </a>
            </div>
            <div className="rounded-sm border border-line bg-paper p-5">
              <p className="font-medium text-ink">Rebecca Exley</p>
              <p className="text-sm text-ink-soft">Solari &amp; Stock Lawyers</p>
              <a href={`tel:${NAP.phoneTel}`} className="mt-2 block text-sm text-accent-deep hover:underline">
                {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Need advice on Wills & Estates matters?"
        sub="Book your consultation here, or ask about the Tax-Smart Estate Planning Guide."
      />
    </>
  );
}
