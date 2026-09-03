import Link from "next/link";
import { NAP } from "@/lib/site";

export default function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel,
  ctaHref = "/contact",
  showTrustLine = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showTrustLine?: boolean;
}) {
  return (
    <section className="border-b border-line bg-paper-tint">
      <div className="container-page py-10 md:py-14">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-normal md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{intro}</p>
        )}

        {ctaLabel && (
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={ctaHref}
              className="rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
            >
              {ctaLabel}
            </Link>
            <a
              href={`tel:${NAP.phoneTel}`}
              className="text-sm font-medium text-ink-soft hover:text-accent-deep"
            >
              or call {NAP.phoneDisplay}
            </a>
          </div>
        )}

        {showTrustLine && (
          <p className="mt-5 text-xs font-medium uppercase tracking-wide text-ink-faint">
            3&times; Accredited Specialists &middot; STEP Accredited &middot; Since 1987 &middot; 4.6&#9733; Google Rating
          </p>
        )}
      </div>
    </section>
  );
}
