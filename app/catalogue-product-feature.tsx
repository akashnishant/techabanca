import { ArrowUpRight } from "lucide-react";
import { catalogueProduct } from "./product-catalog";
import { CatalogueScreen } from "./catalogue/catalogue-screen";

export function CatalogueProductFeature() {
  return <article className="product-feature catalogue-product-feature" aria-labelledby="catalogue-feature-title">
    <div className="product-feature-content">
      <div className="product-topline"><span className="chip">EARLY ACCESS</span><span>02 / TECHABANCA</span></div>
      <div className="product-mark"><span className="mark-square" /> CATALOGUE / 02</div>
      <h3 id="catalogue-feature-title">Techabanca<br /><em>Catalogue.</em></h3>
      <p>{catalogueProduct.description}</p>
      <ul className="catalogue-feature-tags"><li>Products + services</li><li>Website content</li><li>Customer enquiries</li></ul>
      <div className="product-actions"><a className="button button-light" href={catalogueProduct.marketingHref}>Explore Catalogue <ArrowUpRight size={18} /></a><a className="button button-text" href={catalogueProduct.appHref} target="_blank" rel="noreferrer">Open Catalogue <ArrowUpRight size={18} /></a></div>
      <p className="catalogue-feature-note">Workspace setup is available. Public website activation is being finalized.</p>
    </div>
    <div className="product-visual catalogue-feature-visual"><CatalogueScreen file="catalogue" label="TECHABANCA CATALOGUE / YOUR OFFER" alt="Actual Catalogue workspace showing six demo products and services with categories, search and status filters" /></div>
  </article>;
}
