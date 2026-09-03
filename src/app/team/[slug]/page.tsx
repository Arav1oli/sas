import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTABand from "@/components/CTABand";
import { JsonLd, breadcrumbSchema, personSchema } from "@/lib/schema";
import { TEAM, type BioBlock } from "@/lib/team";

/** Groups consecutive "point" blocks into a single <ul>. */
function groupBio(blocks: BioBlock[]) {
  const groups: ({ type: "para"; text: string } | { type: "points"; items: string[] })[] = [];
  for (const b of blocks) {
    if (b.type === "point") {
      const last = groups[groups.length - 1];
      if (last && last.type === "points") last.items.push(b.text);
      else groups.push({ type: "points", items: [b.text] });
    } else {
      groups.push({ type: "para", text: b.text });
    }
  }
  return groups;
}

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.role}`,
    description: `${member.name}, ${member.role} at Solari & Stock Lawyers, Miranda.`,
    alternates: { canonical: `/team/${member.slug}` },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "The Team", path: "/the-team" },
            { name: member.name, path: `/team/${member.slug}` },
          ]),
          personSchema({
            name: member.name,
            jobTitle: member.role,
            image: member.image,
            url: `/team/${member.slug}`,
          }),
        ]}
      />
      <section className="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-[280px_1fr] md:py-20">
        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-tint">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mt-5 text-2xl">{member.name}</h1>
          <p className="text-sm text-ink-soft">{member.role}</p>
        </div>
        <div>
          {member.bio.length === 0 ? (
            <p className="text-ink-soft">Full biography coming soon.</p>
          ) : (
            <div className="max-w-2xl">
              {groupBio(member.bio).map((g, i) =>
                g.type === "points" ? (
                  <ul key={i} className="mb-4 ml-5 list-disc text-ink-soft">
                    {g.items.map((t, j) => (
                      <li key={j} className="mb-1">{t}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="mb-4 text-ink-soft leading-relaxed">
                    {g.text}
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </section>
      <CTABand />
    </>
  );
}
