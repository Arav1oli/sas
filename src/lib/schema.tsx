import { FIRM_NAME, NAP, SITE_URL, SOCIALS } from "./site";

export function attorneyOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#organization`,
    name: FIRM_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/brand/directors-composite.png`,
    telephone: NAP.phoneTel,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.suburb,
      addressRegion: NAP.state,
      postalCode: NAP.postcode,
      addressCountry: NAP.country,
    },
    areaServed: "Sutherland Shire, NSW",
    sameAs: Object.values(SOCIALS),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Sutherland Shire, NSW",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    image: `${SITE_URL}${opts.image}`,
    url: `${SITE_URL}${opts.url}`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Renders one or more JSON-LD graphs as a script tag. Server component safe. */
export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
