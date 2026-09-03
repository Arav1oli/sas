// Per the Ideas in Practice brand recommendations (15 May 2026): these
// credentials are either unique or the strongest position among Sutherland
// Shire competitors (verified independently — see the competitor benchmark:
// no Shire firm holds more than 2 Accredited Specialists in Family Law, and
// none holds STEP accreditation at all), so they're surfaced as real visual
// badges here, not a line of text to read past.
//
// The Accredited Specialist and STEP marks are registered trademarks with
// strict "must not be altered" usage rules — until the firm supplies the
// official logo files (downloaded from their own Law Society/STEP member
// accounts), those two render as icon badges rather than the real crests.
// Swap `badgeImage` in once the files land; layout doesn't need to change.

type Badge = {
  key: string;
  icon: "specialist" | "trust" | "seal" | "star";
  eyebrow: string;
  label: string;
  badgeImage?: string;
};

const BADGES: Badge[] = [
  {
    key: "specialist",
    icon: "specialist",
    eyebrow: "3×",
    label: "Law Society Accredited Specialists, Family Law",
  },
  {
    key: "step",
    icon: "trust",
    eyebrow: "STEP",
    label: "Accredited — Rebecca Exley TEP",
  },
  {
    key: "since",
    icon: "seal",
    eyebrow: "1987",
    label: "Serving the Shire since",
  },
  {
    key: "google",
    icon: "star",
    eyebrow: "4.6",
    label: "Google rating, 22 reviews",
  },
];

function BadgeIcon({ type }: { type: Badge["icon"] }) {
  const common = "h-6 w-6 text-accent-deep";
  if (type === "specialist") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M12 2.5l7 3v5.2c0 4.6-3 8.9-7 10.3-4-1.4-7-5.7-7-10.3V5.5l7-3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8.7 12.1l2.2 2.2 4.4-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "trust") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3.5" y="6.5" width="17" height="12" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 8.5l8.5 5 8.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "seal") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <circle cx="12" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 21l1.6-5M15 21l-1.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.3 10.2l1.9 1.9 3.5-3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
      <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.5 1.1 6.3L12 17.3l-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 2.8z" />
    </svg>
  );
}

export default function CredentialsBar() {
  return (
    <div className="border-y border-line bg-paper-tint">
      <div className="container-page grid grid-cols-2 gap-6 py-6 sm:grid-cols-4 sm:gap-4">
        {BADGES.map((b) => (
          <div key={b.key} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper border border-line">
              <BadgeIcon type={b.icon} />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg text-ink">{b.eyebrow}</p>
              <p className="text-xs text-ink-soft">{b.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
