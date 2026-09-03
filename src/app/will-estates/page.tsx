import type { Metadata } from "next";
import PracticeAreaTemplate, { type PracticeArea } from "@/components/PracticeAreaTemplate";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sutherland Shire Lawyers - Wills and Estate Lawyers",
  description:
    "We can provide expert assistance in Wills, Deceased Estates and Deceased Estate Disputes, to ease the burden with our local lawyers.",
  alternates: { canonical: "/will-estates" },
};

const area: PracticeArea = {
  eyebrow: "Wills & Estates",
  title: "Deceased Estates",
  intro: "Need advice on Wills & Estates matters? Book your consultation here.",
  heroImage: "/images/practice/wills-1.jpg",
  heroAlt: "Solari & Stock wills and estates",
  bookHref: "/contact",
  lead: [
    "Based in Miranda, Solari & Stock have been practising in the St George-Sutherland area since 1987. With many years of experience in dealing with deceased estates we use our expertise to ensure the deceased's wishes are carried out and to ease the burden on the Executor.",
    "Our online induction process provides you with an opportunity to learn about the Probate process and enables you, in your own time, to provide us with substantial information prior to our initial appointment with you, saving time for you in your appointment with us.",
    "Estate disputes cover a wide range of issues regarding a deceased person's financial affairs and the distribution of their estate.",
    "Even though Do-It-Yourself wills are legal, they do not cover all legal contingencies. As a result, your Will may be contested or may not properly reflect your wishes in the circumstances which may arise. The costs of using a competent lawyer are small compared to the risks you run by not seeking quality professional advice.",
  ],
  services: [
    "Will preparation",
    "Estate planning",
    "Testamentary trust wills",
    "Contesting a will",
    "Powers of attorney",
    "Appointment of enduring guardians",
    "Superannuation entitlements",
    "Applications for probate",
    "Applications for letters of administration",
    "Representing executors and beneficiaries of estates",
    "Estate litigation",
  ],
  fundingNote: {
    heading: "A smarter, flexible way to fund your estate administration matter",
    body: [
      "Managing a deceased estate and probate process often means covering more than just legal fees. Executors can face costs like insurance, property maintenance, and other expenses — often out of their own pocket, with reimbursement to come later.",
      "Through our partnership with JustFund, eligible Executors and Beneficiaries can access flexible funding to cover these expenses as well as legal fees, with no repayments until probate is finalised. This only applies to Estate matters, not Wills.",
      "Contact us for more information, or visit JustFund.com.au.",
    ],
  },
};

export default function WillsEstatesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Wills & Estates", path: "/will-estates" },
          ]),
          serviceSchema({
            name: "Wills & Estates",
            description: metadata.description as string,
            url: "/will-estates",
          }),
        ]}
      />
      <PracticeAreaTemplate area={area} />
    </>
  );
}
