import { ArrowUpRight } from "lucide-react";
import { billingProduct } from "./product-catalog";

export function BillingProductFeature() {
  return (
    <div className="product-feature">
      <div className="product-feature-content">
        <div className="product-topline">
          <span className="chip">LIVE PRODUCT</span>
          <span>01 / TECHABANCA</span>
        </div>
        <div className="product-mark"><span className="mark-square" /> BILLING / 01</div>
        <h3>Techabanca<br /><em>Billing.</em></h3>
        <p>{billingProduct.description}</p>
        <div className="product-actions">
          <a className="button button-light" href={billingProduct.marketingHref}>Explore Billing features <ArrowUpRight size={18}/></a>
          <a className="button button-text" href={billingProduct.appHref} target="_blank" rel="noreferrer">Open Billing <ArrowUpRight size={18}/></a>
        </div>
      </div>
      <div className="product-visual product-screenshot-visual">
        <figure className="product-screenshot-frame">
          <div className="product-screenshot-bar">
            <span><i/><i/><i/></span>
            <strong>TECHABANCA BILLING / DASHBOARD</strong>
          </div>

          <div className="product-screenshot-crop product-screenshot-dashboard">
            <img
              src="/images/billing/dashboard.png"
              alt="Techabanca Billing dashboard showing sales, collections, receivables, expenses, purchase orders, and recent activity"
              loading="lazy"
            />
          </div>

          <figcaption>
            Business performance, billing, purchases, expenses and everyday
            activity in one workspace.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
