import Link from "next/link";
import { FIRM_NAME, FOOTER_UTILITY_NAV, FULL_ADDRESS, NAP, PRIMARY_NAV, SOCIALS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-paper-tint pb-16 md:pb-0">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg">{FIRM_NAME}</p>
          <p className="mt-3 text-sm text-ink-soft">
            Miranda &amp; Sutherland Shire based specialist lawyers that you can rely on.
          </p>
          <p className="mt-4 text-xs text-ink-faint">
            Liability limited by a scheme approved under Professional Standards
            Legislation.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Address
          </p>
          <p className="mt-3 text-sm text-ink-soft">{FULL_ADDRESS}</p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-faint">
            Phone
          </p>
          <a href={`tel:${NAP.phoneTel}`} className="mt-1 block text-sm text-ink-soft hover:text-accent-deep">
            {NAP.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Our services
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {PRIMARY_NAV.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink-soft hover:text-accent-deep">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            More
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {FOOTER_UTILITY_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink-soft hover:text-accent-deep">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex gap-4 text-xs text-ink-faint">
            <a href={SOCIALS.facebook} className="hover:text-accent-deep">Facebook</a>
            <a href={SOCIALS.instagram} className="hover:text-accent-deep">Instagram</a>
            <a href={SOCIALS.linkedin} className="hover:text-accent-deep">LinkedIn</a>
            <a href={SOCIALS.youtube} className="hover:text-accent-deep">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <p className="container-page text-xs text-ink-faint">
          &copy; {year} {FIRM_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
