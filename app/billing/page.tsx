import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, CalendarClock, ChartNoAxesCombined, FileText, Paperclip, ReceiptText, ShoppingCart, UsersRound, Workflow } from "lucide-react";
import { CtaBand, PageFrame, Reveal, SectionHeader } from "../site-ui";
import { BillingExplorer } from "./product-explorer";
import { billingProduct } from "../product-catalog";
import { BillingProductPreview } from "./product-preview";
import { BillingDeepDive } from "./billing-deep-dive";
import "./billing-deep-dive.css";

export const metadata: Metadata = { title: "Techabanca Billing", description: "Explore Techabanca Billing for sales documents, purchase orders, expense tracking, receipt attachments, recurring costs, and business reports." };
const modules = [
  {
    icon: <FileText />,
    title: "Sales documents",
    detail: "Prepare invoices, quotations, proforma invoices, and delivery challans in a connected document workflow.",
  },
  {
    icon: <BadgeCheck />,
    title: "GST-aware calculations",
    detail: "Review applicable tax calculations and itemized totals while preparing your sales documents.",
  },
  {
    icon: <UsersRound />,
    title: "Customer and product records",
    detail: "Keep customer details and reusable product information close at hand when preparing documents.",
  },
  {
    icon: <ShoppingCart />,
    title: "Purchase orders",
    detail: "Create and manage purchase orders alongside your other business records.",
  },
  {
    icon: <ReceiptText />,
    title: "Expense tracking",
    detail: "Record everyday expenses with dates, amounts, categories, payment methods, and supporting details.",
  },
  {
    icon: <Paperclip />,
    title: "Receipt attachments",
    detail: "Attach receipt files to individual expense records so supporting documents stay connected to their entries.",
  },
  {
    icon: <CalendarClock />,
    title: "Recurring expenses",
    detail: "Configure recurring-expense rules and review upcoming projected costs separately from recorded expenses.",
  },
  {
    icon: <ChartNoAxesCombined />,
    title: "Reports and dashboard",
    detail: "Explore expense summaries, category breakdowns, charts, and date-filtered business views.",
  },
  {
    icon: <Workflow />,
    title: "Document lifecycle",
    detail: "Move sales documents from draft to issuance with controlled numbering and downloadable PDF output.",
  },
];
export default function BillingPage() { return <PageFrame><main><section className="interior-hero billing-hero"><div className="container interior-grid"><div><p className="eyebrow"><span className="signal"/> PRODUCT 01 / TECHABANCA</p><h1>Your business records.<br /><em>A clearer way forward.</em></h1><p className="interior-lead">Create sales documents, manage purchase orders, record everyday expenses, and explore reports in one practical workspace. Techabanca Billing brings the records behind your daily business activity closer together.</p><div className="hero-actions"><a href={billingProduct.appHref} target="_blank" rel="noreferrer" className="button button-primary">Get started with Billing <ArrowUpRight size={18}/></a><a href="#explore" className="button button-text">See how Billing works <ArrowUpRight size={18}/></a></div></div><div className="billing-hero-graphic" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orbit-core">T<span>.</span></div><div className="orbit-label orbit-label-a">DRAFT → ISSUE</div><div className="orbit-label orbit-label-b">DOCUMENTS / 04</div><div className="orbit-label orbit-label-c">BUSINESS / CONNECTED</div></div></div></section>
<BillingProductPreview />
<section className="section-pad" id="explore"><div className="container"><Reveal><SectionHeader index="01 / INSIDE BILLING" title={<>One workspace. <span>A clearer way to work.</span></>} description="Move from customer information to finished document with less back and forth." /></Reveal><BillingExplorer/></div></section>
<section className="section-pad product-modules"><div className="container"><Reveal><SectionHeader index="02 / CAPABILITIES" title={<>The essentials, <span>connected.</span></>} description="Explore the tools that bring sales documents, purchases, expense records, and business reporting into one workspace." /></Reveal><div className="module-grid">{modules.map((m,i)=><Reveal key={m.title}><article className="module-card"><div className="module-top"><span>0{i+1} / {modules.length.toString().padStart(2, "0")}</span>{m.icon}</div><h3>{m.title}</h3><p>{m.detail}</p></article></Reveal>)}</div></div></section>
<BillingDeepDive />
<section className="section-pad billing-next"><div className="container billing-next-grid"><Reveal><div><p className="section-kicker">PART OF THE TECHABANCA ECOSYSTEM</p><h2 className="display-heading">Focused tools.<br/><span>More ways to move forward.</span></h2></div></Reveal><Reveal><div><p className="lead-copy">Billing supports your business records and daily operations. Techabanca Catalogue adds a separate workspace for organizing products and services, preparing website content and managing enquiries.</p><p className="muted-note">Techabanca Billing is live at <a href={billingProduct.appHref} target="_blank" rel="noreferrer">billing.techabanca.com</a>. Meet <a href="/catalogue">Techabanca Catalogue</a> or explore the wider <a href="/products">product portfolio</a>.</p></div></Reveal></div></section><CtaBand/></main></PageFrame>; }
