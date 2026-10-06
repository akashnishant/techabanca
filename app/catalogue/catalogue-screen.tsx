type ScreenFile = "catalogue" | "item" | "website" | "workspace";
export function CatalogueScreen({ file, alt, label, eager = false }: { file: ScreenFile; alt: string; label: string; eager?: boolean }) {
  return <figure className="catalogue-screen">
    <div className="catalogue-screen-bar"><span aria-hidden="true"><i /><i /><i /></span><span>{label}</span></div>
    <img src={`/images/catalogue/${file}.jpg`} alt={alt} width={1440} height={960} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
    <figcaption>Actual Catalogue workspace · Illustrative Forma Studio demo data</figcaption>
  </figure>;
}
