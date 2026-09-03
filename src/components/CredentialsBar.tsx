// Per the Ideas in Practice brand recommendations (15 May 2026): these four
// credentials are either unique or the strongest position among Sutherland
// Shire competitors, and should be surfaced at listing level, not buried in
// bio pages. The Google rating is a point-in-time figure from that report —
// swap in a live Google Business Profile widget when one is available so
// this doesn't go stale.
const CREDENTIALS = [
  "3× Law Society Accredited Specialists, Family Law",
  "STEP Accredited — Rebecca Exley TEP",
  "Serving the Shire Since 1987",
  "4.6★ Google Rating",
];

export default function CredentialsBar() {
  return (
    <div className="border-y border-line bg-paper-tint">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center">
        {CREDENTIALS.flatMap((c, i) => [
          i > 0 && (
            <span key={`div-${i}`} aria-hidden className="hidden h-3 w-px bg-line sm:inline-block" />
          ),
          <span key={c} className="text-xs font-medium uppercase tracking-wide text-ink-soft">
            {c}
          </span>,
        ])}
      </div>
    </div>
  );
}
