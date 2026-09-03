import Image from "next/image";
import Link from "next/link";
import CTABand from "./CTABand";
import { NAP } from "@/lib/site";

export type PracticeArea = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  lead: string[];
  services: string[];
  fundingNote?: { heading: string; body: string[] };
  bookHref: string;
};

export default function PracticeAreaTemplate({ area }: { area: PracticeArea }) {
  return (
    <>
      <section className="border-b border-line bg-paper-tint">
        <div className="container-page grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:py-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
              {area.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-normal md:text-5xl">{area.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">{area.intro}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={area.bookHref}
                className="rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink"
              >
                Book your free 30 minute consultation
              </Link>
              <a
                href={`tel:${NAP.phoneTel}`}
                className="text-sm font-medium text-ink-soft hover:text-accent-deep"
              >
                or call {NAP.phoneDisplay}
              </a>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-ink-faint">
              3&times; Accredited Specialists &middot; STEP Accredited &middot; Since 1987 &middot; 4.6&#9733; Google Rating
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-paper md:aspect-[5/4]">
            <Image
              src={area.heroImage}
              alt={area.heroAlt}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        {area.lead.map((p, i) => (
          <p key={i} className="mb-4 max-w-2xl text-ink-soft leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 mb-4 text-2xl">How we can help</h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 max-w-2xl">
          {area.services.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {area.fundingNote && (
        <section className="border-t border-line bg-paper-tint">
          <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-[1fr_2fr] md:py-16">
            <h3 className="text-xl">{area.fundingNote.heading}</h3>
            <div>
              {area.fundingNote.body.map((p, i) => (
                <p key={i} className="mb-3 text-sm text-ink-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand bookHref={area.bookHref} />
    </>
  );
}
