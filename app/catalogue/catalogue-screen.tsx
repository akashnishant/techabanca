type ScreenFile = "catalogue" | "item" | "website" | "workspace" | "published";

export function CatalogueScreen({ file, alt, label, eager = false }: { file: ScreenFile; alt: string; label: string; eager?: boolean }) {
  const published = file === "published";
  return <figure className="catalogue-screen">
    <div className="catalogue-screen-bar"><span aria-hidden="true"><i /><i /><i /></span><span>{label}</span></div>
    <img src={`/images/catalogue/example-industries/${file}.jpg`} alt={alt} width={1440} height={960} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
    <figcaption>{published ? <>Published Example Industries website <a href="https://example-industries.techabanca.com/" target="_blank" rel="noreferrer" aria-label="View the published Example Industries website (opens in a new tab)">View live website ↗</a></> : <>Example Industries · Production Catalogue account</>}</figcaption>
  </figure>;
}
