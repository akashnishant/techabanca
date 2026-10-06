import { ArrowDownRight, ArrowUpRight, CircuitBoard, Cloud, Code2, Layers3, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { PageFrame, Reveal, SectionHeader, CtaBand } from "./site-ui";
import { BillingProductFeature } from "./billing-product-feature";
import { CatalogueProductFeature } from "./catalogue-product-feature";

const capabilities = [
  { number: "01", icon: <Code2 />, title: "Digital products", text: "Thoughtful interfaces and dependable platforms, designed around the work people actually do.", href: "/services#product-engineering" },
  { number: "02", icon: <Sparkles />, title: "Intelligent automation", text: "Purposeful AI and workflow automation that removes friction from everyday operations.", href: "/services#ai-automation" },
  { number: "03", icon: <Cloud />, title: "Cloud engineering", text: "Modern architecture, connected systems, and infrastructure designed to grow with the business.", href: "/services#cloud-engineering" },
];

export default function Home() {
  return <PageFrame>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="signal" /> INDEPENDENT TECHNOLOGY COMPANY <span className="eyebrow-line" /> INDIA</div>
            <h1 id="hero-title">Engineering<br /><em>what&apos;s next.</em></h1>
            <p>We create software products and digital systems that make complex work feel simple. Built with intent. Designed to last.</p>
            <div className="hero-actions"><a href="/products" className="button button-primary">Explore our products <ArrowUpRight size={18} /></a><a href="/services" className="button button-text">What we do <ArrowUpRight size={18} /></a></div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01 / 04</span><span>TECHABANCA — SYSTEMS FOR PROGRESS</span></div>
        </div>
        <a className="scroll-cue" href="#approach" aria-label="Scroll to our approach"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18}/></a>
      </section>

      <section className="intro-section section-pad" id="approach"><div className="container intro-grid"><Reveal><div className="section-kicker"><span>01 / OUR PERSPECTIVE</span><span className="section-rule" /></div></Reveal><Reveal><div><h2 className="display-heading">Technology is only powerful when it <span>moves people forward.</span></h2><p className="lead-copy">From a better way to send an invoice to systems that connect an entire business, we focus on the details that turn ambitious ideas into useful experiences.</p><a className="inline-link" href="/company">Get to know Techabanca <ArrowUpRight size={18}/></a></div></Reveal></div></section>

      <section className="product-section section-pad" id="products"><div className="container"><Reveal><SectionHeader index="02 / OUR PRODUCTS" title={<>One company. <span>Useful products.</span></>} description="Practical tools for different parts of your business. Billing brings clarity to business records. Catalogue helps you present your products and services with care." /></Reveal><div className="company-product-stack"><Reveal><BillingProductFeature /></Reveal><Reveal><CatalogueProductFeature /></Reveal></div><a className="inline-link" href="/products">Explore all products <ArrowUpRight size={18}/></a></div></section>

      <section className="capabilities-section section-pad" id="capabilities"><div className="container"><Reveal><SectionHeader index="03 / WHAT WE DO" title={<>Expertise across the <span>digital stack.</span></>} description="We connect strategy, design, and engineering to deliver technology that solves the right problems." /></Reveal><div className="capabilities-list">{capabilities.map(item => <Reveal key={item.number}><a href={item.href} className="capability-row"><span className="cap-number">{item.number}</span><span className="cap-icon">{item.icon}</span><span className="cap-title">{item.title}</span><span className="cap-desc">{item.text}</span><span className="cap-arrow"><ArrowUpRight size={24}/></span></a></Reveal>)}</div></div></section>

      <section className="home-solutions section-pad"><div className="container"><Reveal><SectionHeader index="04 / SOLUTIONS" title={<>Designed for the way <span>you operate.</span></>} description="Business contexts differ. We look at the people, processes, and systems that make each one work."/></Reveal><div className="home-solution-grid"><Reveal><a href="/solutions#commerce"><span>01 / COMMERCE</span><h3>Retail & distribution</h3><p>Make the movement from product to customer to document more connected.</p><ArrowUpRight/></a></Reveal><Reveal><a href="/solutions#services"><span>02 / SERVICES</span><h3>Professional services</h3><p>Give teams more visibility and fewer manual handoffs.</p><ArrowUpRight/></a></Reveal><Reveal><a href="/solutions#operations"><span>03 / OPERATIONS</span><h3>Growing businesses</h3><p>Turn fragmented workflows into a foundation for the next stage.</p><ArrowUpRight/></a></Reveal></div><a className="inline-link" href="/solutions">Explore all solutions <ArrowUpRight size={18}/></a></div></section>

      <section className="principles-section section-pad"><div className="container principles-grid"><Reveal><div><div className="section-kicker"><span>05 / HOW WE THINK</span><span className="section-rule" /></div><h2 className="display-heading">Built for complexity.<br /><span>Made to feel effortless.</span></h2><p className="lead-copy">The best digital experiences hide the hard work behind them. We sweat the architecture, the interaction, and everything in between so the outcome feels natural.</p><a href="/company" className="inline-link">Our approach <ArrowUpRight size={18}/></a></div></Reveal><Reveal><div className="principles-stack"><div><ScanLine/><span>01</span><h3>Clarity first</h3><p>Understand the problem deeply before choosing the technology.</p></div><div><Layers3/><span>02</span><h3>Built to evolve</h3><p>Design systems that can adapt as needs and ambitions change.</p></div><div><ShieldCheck/><span>03</span><h3>Trust by design</h3><p>Make security, reliability, and usability foundational decisions.</p></div><div><CircuitBoard/><span>04</span><h3>Craft in the details</h3><p>Every interaction should serve a purpose and feel considered.</p></div></div></Reveal></div></section>
      <CtaBand />
    </main>
  </PageFrame>;
}
