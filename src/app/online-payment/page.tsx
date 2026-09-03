import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Online Payment",
  description: "Pay your Solari & Stock Lawyers invoice securely online.",
  alternates: { canonical: "/online-payment" },
  robots: { index: false, follow: true },
};

// The live site renders this via WP Simple Pay, which hands off to a Stripe
// Checkout session — there's no card form to rebuild, just a button pointing
// at a Stripe Payment Link. Drop the firm's real Payment Link URL in below;
// this page intentionally does NOT load the full theme/plugin stack that
// currently ships ~2MB of unrelated CSS/JS just to render one button.
const STRIPE_PAYMENT_LINK = "#REPLACE_WITH_STRIPE_PAYMENT_LINK";

export default function OnlinePaymentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Online Payment", path: "/online-payment" },
        ])}
      />
      <PageHero eyebrow="Accounts" title="Online Payment" />
      <section className="container-page max-w-xl py-16 md:py-20">
        <p className="mb-6 text-ink-soft">
          Pay your invoice with ease using our secure online form and your
          credit card details. We do not store any personal information or
          credit card details — payment is processed securely by Stripe.
        </p>
        <div className="rounded-sm border border-line p-6">
          <p className="font-display text-lg">Solari &amp; Stock</p>
          <p className="mt-4 text-sm text-ink-faint">Enter the amount on the next step</p>
          <a
            href={STRIPE_PAYMENT_LINK}
            className="mt-6 inline-block rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
          >
            Pay invoice securely
          </a>
        </div>
      </section>
    </>
  );
}
