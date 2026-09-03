import { NAP } from "@/lib/site";

export default function CTABand({
  heading = "Need advice you can rely on?",
  sub = "Book a consultation with one of our specialist teams.",
  bookHref = "/contact",
}: {
  heading?: string;
  sub?: string;
  bookHref?: string;
}) {
  return (
    <section className="border-y border-line bg-accent-deep text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-xl font-display">{heading}</p>
          <p className="mt-1 text-sm text-white/80">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={bookHref}
            className="rounded-sm bg-white px-5 py-2.5 text-sm font-medium text-accent-deep hover:bg-accent-tint-soft"
          >
            Book a consultation
          </a>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="rounded-sm border border-white/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Call {NAP.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
