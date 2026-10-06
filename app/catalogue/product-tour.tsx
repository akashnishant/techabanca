"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CatalogueScreen } from "./catalogue-screen";

const views = [
  { id: "catalogue", label: "Your catalogue", number: "01", title: "A place for your whole offer.", description: "Products, services, or both. Search your items, filter by category or status, and keep the next update within reach.", detail: "Categories · Search · Draft and visibility controls", file: "catalogue" as const, alt: "Actual Catalogue list with six Forma Studio demo products and services, category filters and item status controls" },
  { id: "details", label: "Item details", number: "02", title: "Give every item its context.", description: "Make descriptions, specifications, imagery and optional prices part of the same story. Add the fields that help people understand what makes your offer different.", detail: "Descriptions · Custom fields · Optional prices", file: "item" as const, alt: "Actual Arc Lounge Chair demo item editor showing specifications, SKU, descriptions and optional pricing fields" },
  { id: "website", label: "Website preparation", number: "03", title: "Review the version you mean to share.", description: "Prepare your website content, keep saved edits separate from published revisions, and review a private preview before a controlled publication.", detail: "Public website activation is being finalized for launch.", file: "website" as const, alt: "Actual Catalogue Website workspace with local demo preview and publication controls; this is not a live customer website" },
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
      <div className="catalogue-tour-copy"><span className="mini-label">INSIDE THE WORKSPACE / {view.number}</span><h3>{view.title}</h3><p>{view.description}</p><span className="catalogue-tour-detail">{view.detail}</span></div>
      <CatalogueScreen key={view.id} file={view.file} alt={view.alt} label={`CATALOGUE / ${view.label.toUpperCase()}`} />
    </div>
  </div>;
}
