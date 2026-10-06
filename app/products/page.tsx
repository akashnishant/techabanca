import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { BillingProductFeature } from "../billing-product-feature";
import { billingProduct, catalogueProduct } from "../product-catalog";
import { CatalogueProductFeature } from "../catalogue-product-feature";
import { CtaBand, PageFrame, Reveal, SectionHeader } from "../site-ui";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Techabanca Billing for business operations and Techabanca Catalogue for organizing products, services and website content.",
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
              <a href={catalogueProduct.marketingHref} className="button button-text">Explore Techabanca Catalogue <ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>

        <section className="product-section section-pad">
          <div className="container">
            <Reveal><SectionHeader index="01 / OUR PRODUCT PORTFOLIO" title={<>One company. <span>Useful products.</span></>} description="Billing for your business records. Catalogue for a clearer presentation of your offer. Two focused applications with their own workspaces." /></Reveal>
            <div className="company-product-stack"><Reveal><BillingProductFeature /></Reveal><Reveal><CatalogueProductFeature /></Reveal></div>
          </div>
        </section>

        <section className="section-pad billing-next">
          <div className="container billing-next-grid">
            <Reveal><div><p className="section-kicker">WHAT&apos;S NEXT</p><h2 className="display-heading">Built as a product company.<br/><span>Designed to grow.</span></h2></div></Reveal>
            <Reveal><div><p className="lead-copy">Our portfolio brings together focused tools for real business needs. Use Billing for documents, purchases and expenses, and explore Catalogue for products, services and business presentation.</p><p className="muted-note">Catalogue workspace setup is available in early access. Public website activation is being finalized; paid subscriptions are not available yet.</p></div></Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
    </PageFrame>
  );
}
