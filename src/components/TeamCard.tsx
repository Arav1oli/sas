import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block overflow-hidden rounded-sm border border-line bg-paper transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-tint">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-ink">{member.name}</p>
        <p className="mt-0.5 text-sm text-ink-soft">{member.role}</p>
      </div>
    </Link>
  );
}
