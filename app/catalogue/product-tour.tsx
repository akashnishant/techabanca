"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CatalogueScreen } from "./catalogue-screen";

const views = [
  { id: "catalogue", label: "Your catalogue", number: "01", title: "A place for your whole offer.", description: "Products, services, or both. Search your items, filter by category or status, and keep the next update within reach.", detail: "Example Industries · LED TV catalogue item", file: "catalogue" as const, alt: "Example Industries production Catalogue account showing the LED TV item, search and visibility filters" },
  { id: "details", label: "Item details", number: "02", title: "Give every item its context.", description: "Make descriptions, specifications, imagery and optional prices part of the same story. Add the fields that help people understand what makes your offer different.", detail: "Descriptions · Custom fields · Optional prices", file: "item" as const, alt: "Example Industries LED TV editor in the production Catalogue account, showing the item details, SKU and configured price" },
  { id: "website", label: "Website controls", number: "03", title: "Review the version you mean to share.", description: "Prepare your website content, keep saved edits separate from published revisions, and review a private preview before a controlled publication.", detail: "Example Industries · Published revision 1. Wider public activation is being finalized.", file: "website" as const, alt: "Example Industries production Website controls showing published revision 1 and the live example-industries.techabanca.com address" },
  { id: "published", label: "Published website", number: "04", title: "From your workspace to the web.", description: "Explore the reviewed Example Industries catalogue on its own live website. Business navigation, item details and contact pages give the offer a clear home.", detail: "Live Example Industries example · Wider public activation is being finalized.", file: "published" as const, alt: "Published Example Industries catalogue website with business navigation and the LED TV product, captured from its production domain" },
];

export function CatalogueTour() {
  const [selected, setSelected] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const view = views[selected]!;
  return <div className="catalogue-tour">
    <div role="tablist" aria-label="Explore Catalogue screens" className="catalogue-tour-tabs">
      {views.map((item, index) => <button key={item.id} type="button" role="tab" id={`catalogue-tab-${item.id}`} aria-selected={selected === index} aria-controls="catalogue-tour-panel" tabIndex={selected === index ? 0 : -1} ref={el => { refs.current[index] = el; }} onClick={() => setSelected(index)} onKeyDown={event => {
        let next = selected;
        if (event.key === "ArrowRight") next = (selected + 1) % views.length;
        else if (event.key === "ArrowLeft") next = (selected + views.length - 1) % views.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = views.length - 1;
        else return;
        event.preventDefault(); setSelected(next); refs.current[next]?.focus();
      }}><span>{item.number}</span>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></button>)}
    </div>
    <div role="tabpanel" id="catalogue-tour-panel" aria-labelledby={`catalogue-tab-${view.id}`} tabIndex={0} className="catalogue-tour-panel">
      <div className="catalogue-tour-copy"><span className="mini-label">{view.id === "published" ? "THE PUBLISHED RESULT" : "INSIDE THE WORKSPACE"} / {view.number}</span><h3>{view.title}</h3><p>{view.description}</p><span className="catalogue-tour-detail">{view.detail}</span></div>
      <CatalogueScreen key={view.id} file={view.file} alt={view.alt} label={`CATALOGUE / ${view.label.toUpperCase()}`} />
    </div>
  </div>;
}
