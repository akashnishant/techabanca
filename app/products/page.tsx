import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { BillingProductFeature } from "../billing-product-feature";
import { billingProduct } from "../product-catalog";
import { CtaBand, PageFrame, Reveal, SectionHeader } from "../site-ui";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore software products built by Techabanca, starting with Techabanca Billing for billing and business operations.",
};

export default function ProductsPage() {
  return (
    <PageFrame>
      <main>
        <section className="interior-hero products-hero">
          <div className="container">
            <p className="eyebrow"><span className="signal"/> TECHABANCA / PRODUCTS</p>
            <h1>Software built<br /><em>to move work forward.</em></h1>
            <p className="interior-lead">Focused products for real business workflows. Each one is designed to work well on its own, with room to become more connected over time.</p>
            <div className="hero-actions">
              <a href={billingProduct.marketingHref} className="button button-primary">Explore Techabanca Billing <ArrowUpRight size={18}/></a>
              <a href={billingProduct.appHref} target="_blank" rel="noreferrer" className="button button-text">Open Billing <ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>

        <section className="product-section section-pad">
          <div className="container">
            <Reveal><SectionHeader index="01 / LIVE PRODUCTS" title={<>One company. <span>Useful products.</span></>} description="Techabanca Billing is our first live product, built around the day-to-day workflows that keep businesses moving." /></Reveal>
            <Reveal><BillingProductFeature /></Reveal>
          </div>
        </section>

        <section className="section-pad billing-next">
          <div className="container billing-next-grid">
            <Reveal><div><p className="section-kicker">WHAT&apos;S NEXT</p><h2 className="display-heading">Built as a product company.<br/><span>Designed to grow.</span></h2></div></Reveal>
            <Reveal><div><p className="lead-copy">Techabanca is not a single-product company. Billing is the first step in a broader product portfolio, with future products added only when they solve a clear, useful problem.</p><p className="muted-note">New products will join this page as they move from idea to a real, usable release.</p></div></Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
    </PageFrame>
  );
}
