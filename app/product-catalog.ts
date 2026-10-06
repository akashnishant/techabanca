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
] as const;

export const billingProduct = products[0];
