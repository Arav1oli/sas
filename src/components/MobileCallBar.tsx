import { NAP } from "@/lib/site";

/**
 * Persistent mobile call/book bar — Exhibit D, optimisation #16 from the
 * rebuild brief: the click-to-call number already existed in the header,
 * it just wasn't persistent on scroll. This is.
 */
export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-paper shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <a
        href={`tel:${NAP.phoneTel}`}
        className="flex items-center justify-center gap-2 bg-accent-deep py-3.5 text-sm font-medium text-white"
      >
        Call {NAP.phoneDisplay}
      </a>
      <a
        href="/contact"
        className="flex items-center justify-center gap-2 border-l border-line py-3.5 text-sm font-medium text-ink"
      >
        Book a consultation
      </a>
    </div>
  );
}
