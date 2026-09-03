export const SITE_URL = "https://solariandstock.com.au";
export const FIRM_NAME = "Solari & Stock Lawyers";

export const NAP = {
  streetAddress: "Level 2, 12 Central Road",
  suburb: "Miranda",
  state: "NSW",
  postcode: "2228",
  country: "AU",
  phoneDisplay: "(02) 8525 2700",
  phoneTel: "+61285252700",
  // The live site's contact-page email decodes to a Cloudflare-obfuscated
  // placeholder ("office@example.com") — not a real address. Confirm the
  // firm's actual inbox before wiring a mailto: link or schema email field.
  email: null as string | null,
};

export const FULL_ADDRESS = `${NAP.streetAddress}, ${NAP.suburb} ${NAP.state} ${NAP.postcode}`;

export const SOCIALS = {
  facebook: "https://www.facebook.com/solariandstock",
  instagram: "https://www.instagram.com/solariandstock/",
  linkedin: "https://www.linkedin.com/company/solari-&-stock/",
  youtube: "https://www.youtube.com/@SolariandStock",
};

export const SETTIFY = {
  familyLaw: "https://solariandstock.settify.com.au/landing?referral=family-law-page",
  wills: "https://solariandstock.wills.settify.com.au/landing?referral=wills-page",
};

export type PrimaryNavItem = { label: string; href: string };

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { label: "Family Law", href: "/family-law" },
  { label: "Property & Conveyancing", href: "/property-conveyancing" },
  { label: "Commercial Law", href: "/commercial-law" },
  { label: "Wills & Estates", href: "/will-estates" },
  { label: "Other Legal Areas", href: "/other-legal-areas" },
  { label: "The Team", href: "/the-team" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_UTILITY_NAV: PrimaryNavItem[] = [
  { label: "Our Services", href: "/our-services" },
  { label: "Positions Vacant", href: "/positions-vacant" },
  { label: "Useful Links", href: "/useful-links" },
  { label: "Online Payment", href: "/online-payment" },
];
