import Link from "next/link";
import Image from "next/image";
import { NAP, PRIMARY_NAV } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Solari & Stock Lawyers home">
          <Image
            src="/images/brand/logo-solari.svg"
            alt="Solari & Stock Lawyers"
            width={168}
            height={40}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft hover:text-accent-deep transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${NAP.phoneTel}`}
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-accent-deep px-5 py-2.5 text-sm font-medium text-white hover:bg-ink transition-colors"
        >
          {NAP.phoneDisplay}
        </a>

        {/* Compact menu for narrower desktop / tablet widths */}
        <details className="xl:hidden relative">
          <summary className="list-none cursor-pointer rounded-sm border border-line px-3 py-2 text-sm text-ink-soft">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-sm border border-line bg-paper p-3 shadow-lg">
            <nav aria-label="Primary" className="flex flex-col">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm px-3 py-2 text-sm text-ink-soft hover:bg-paper-tint"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${NAP.phoneTel}`}
                className="mt-2 rounded-sm bg-accent-deep px-3 py-2 text-center text-sm font-medium text-white"
              >
                Call {NAP.phoneDisplay}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
