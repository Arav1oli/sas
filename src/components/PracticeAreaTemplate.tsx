import Image from "next/image";
import PageHero from "./PageHero";
import CTABand from "./CTABand";

export type PracticeArea = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  lead: string[];
  services: string[];
  secondaryImage?: string;
  secondaryAlt?: string;
  fundingNote?: { heading: string; body: string[] };
  bookHref: string;
};

export default function PracticeAreaTemplate({ area }: { area: PracticeArea }) {
  return (
    <>
      <PageHero eyebrow={area.eyebrow} title={area.title} intro={area.intro} />

      <section className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20">
        <div>
          {area.lead.map((p, i) => (
            <p key={i} className="mb-4 text-ink-soft leading-relaxed">
              {p}
            </p>
          ))}

          <h2 className="mt-8 mb-4 text-2xl">How we can help</h2>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {area.services.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-tint md:aspect-auto md:h-full">
          <Image
            src={area.heroImage}
            alt={area.heroAlt}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
            priority
          />
        </div>
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
