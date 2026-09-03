export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-tint">
      <div className="container-page py-16 md:py-20">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-normal md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>
        )}
      </div>
    </section>
  );
}
