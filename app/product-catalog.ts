export const products = [
  {
    id: "billing",
    number: "01",
    name: "Techabanca Billing",
    shortName: "Billing",
    category: "Business operations",
    status: "Live",
    marketingHref: "/billing",
    appHref: "https://billing.techabanca.com",
    description:
      "Create invoices and sales documents, manage purchases, record expenses and receipts, and explore business reports in one practical workspace.",
  },
  {
    id: "catalogue",
    number: "02",
    name: "Techabanca Catalogue",
    shortName: "Catalogue",
    category: "Business presentation",
    status: "Early access",
    marketingHref: "/catalogue",
    appHref: "https://catalogue.techabanca.com",
    description: "Give your business a better showcase. Organize products and services, maintain website content, and keep customer enquiries close in one considered workspace.",
  },
] as const;

export const billingProduct = products[0];

export const catalogueProduct = products[1];
