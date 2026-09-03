export type Faq = {
  question: string;
  intro: string;
  points: string[];
  tip: string;
};

export const FAQS: Faq[] = [
  {
    question: "If I leave company shares to my son, can my daughter make a claim against them?",
    intro:
      "Even if your Will leaves company shares solely to one child, another beneficiary may challenge the Will if they feel inadequately provided for. To protect shares from estate claims:",
    points: [
      "Use a Family Trust to keep shares outside your personal estate.",
      "Transfer shares during your lifetime, noting potential CGT and stamp duty implications.",
      "Review your company constitution for succession clauses.",
      "Use a buy-sell agreement to ensure smooth ownership transfer.",
      "Minimise estate assets by holding property in trusts or joint ownership.",
    ],
    tip: "Combining these strategies can safeguard company ownership while reducing family disputes.",
  },
  {
    question: "What are the main tax advantages of a testamentary trust?",
    intro: "Testamentary trusts offer strategic tax and estate planning benefits:",
    points: [
      "Income to minors is taxed at adult rates, avoiding punitive minor rates (Division 6AA).",
      "Trustees can distribute income to beneficiaries in lower tax brackets, reducing overall tax.",
      "Access to the 50% Capital Gains Tax discount on qualifying assets.",
      "Multi-generational flexibility, allowing trusts to last up to 80 years.",
    ],
    tip: "Testamentary trusts are powerful tools for long-term wealth protection and tax efficiency.",
  },
  {
    question: "Can a testamentary trust receive the family home, and should it?",
    intro: "Yes, but generally it's not recommended:",
    points: [
      "Trusts lose the principal residence exemption for CGT in many states.",
      "Land tax may apply to the home if held in the trust.",
      "Administrative complexity can outweigh benefits for simple estates.",
    ],
    tip: "For most families, retaining the family home outside a testamentary trust preserves value while simplifying estate management.",
  },
  {
    question: "What are the tax implications if my beneficiaries live overseas?",
    intro: "Distributing estate income or assets to foreign beneficiaries can trigger:",
    points: [
      "Higher tax rates and loss of tax-free thresholds.",
      "Limited use of franking credits.",
      "Possible loss of the 50% CGT discount on Australian assets.",
      "Additional land tax surcharges or non-resident tax obligations.",
    ],
    tip: "Trustees should plan distributions carefully to avoid costly penalties and maximise after-tax outcomes.",
  },
  {
    question: "If I don't have a Will, what happens to shares in my company when I die?",
    intro: "Without a Will, intestacy rules under the Succession Act 2006 (NSW) determine who inherits:",
    points: [
      "Spouse and children usually inherit first.",
      "Other relatives follow if no spouse or children exist.",
      "The administrator manages the estate, including company shares.",
      "Jointly held shares pass automatically to surviving owners, bypassing the Will.",
    ],
    tip: "Dying without a Will can create complex tax and ownership issues. Professional advice ensures your business and assets remain protected.",
  },
];
