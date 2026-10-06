"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { billingProduct } from "./product-catalog";

const links = [{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { href: "/services", label: "Services" }, { href: "/solutions", label: "Solutions" }, { href: "/company", label: "Company" }, { href: "/contact", label: "Contact" }];

function Brand() { return <a href="/" className="brand" aria-label="Techabanca home"><span className="brand-icon" aria-hidden="true"><span/><span/><span/></span><span>TECHABANCA<span className="brand-period">.</span></span></a>; }

export function PageFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname(); const currentPath = pathname.replace(/\/+$/, "") || "/"; const [menu, setMenu] = useState(false); const [progress, setProgress] = useState(0); const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) => href === "/products" ? currentPath === "/products" || currentPath.startsWith("/products/") || currentPath === "/billing" : href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);
  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - innerHeight; setProgress(max > 0 ? Math.min(100, scrollY / max * 100) : 0); setScrolled(scrollY > 24); };
    update(); addEventListener("scroll", update, { passive: true }); addEventListener("resize", update); return () => { removeEventListener("scroll", update); removeEventListener("resize", update); };
  }, [pathname]);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menu]);
  return <><div className="reading-progress" style={{ width: `${progress}%` }} /><header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="container header-content"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <a key={l.href} className={isActive(l.href) ? "active" : ""} aria-current={isActive(l.href) ? "page" : undefined} href={l.href}>{l.label}</a>)}</nav><a href="/contact" className="header-cta">LET&apos;S TALK <ArrowUpRight size={16}/></a><button className="menu-toggle" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div></header>
  <div className={`mobile-menu ${menu ? "open" : ""}`} aria-hidden={!menu}><nav aria-label="Mobile navigation">{links.map((l, i) => <a href={l.href} key={l.href} className={isActive(l.href) ? "active" : ""} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setMenu(false)} tabIndex={menu ? 0 : -1}><span>0{i+1}</span>{l.label}<ArrowUpRight/></a>)}</nav><p>TECHABANCA / ENGINEERING WHAT&apos;S NEXT</p></div>
  {children}<Footer /></>;
}

export function Reveal({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = ref.current; if (!el) return; if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; el.classList.add("reveal-init"); const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.unobserve(el); } }, { threshold: .08, rootMargin: "0px 0px -25px 0px" }); observer.observe(el); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

export function SectionHeader({ index, title, description }: { index: string, title: ReactNode, description: string }) { return <div className="section-header"><div className="section-kicker"><span>{index}</span><span className="section-rule" /></div><div className="section-heading-row"><h2 className="display-heading">{title}</h2><p>{description}</p></div></div>; }

export function CtaBand() { return <section className="cta-band"><div className="container cta-inner"><div className="section-kicker"><span>LET&apos;S BUILD SOMETHING MEANINGFUL</span><span className="section-rule" /></div><h2>Have an idea worth <em>building?</em></h2><a href="/contact" className="cta-circle" aria-label="Get in touch"><ArrowUpRight size={40}/></a><p>Bring us the challenge. We&apos;ll help shape what comes next.</p></div></section>; }

function Footer() { return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand/><p>Thoughtful technology for businesses moving forward.</p><span className="footer-location">BANDRA WEST, MUMBAI · INDIA</span></div><div className="footer-links"><div><strong>PRODUCTS</strong><a href="/products">All products</a><a href="/billing">Techabanca Billing</a><a href={billingProduct.appHref} target="_blank" rel="noreferrer">Open Billing ↗</a></div><div><strong>COMPANY</strong><a href="/services">Services</a><a href="/solutions">Solutions</a><a href="/company">Company</a><a href="/contact">Contact</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} TECHABANCA. ALL RIGHTS RESERVED.</span><span>DESIGNED WITH PURPOSE <span className="footer-cross">✳</span></span></div></div></footer>; }
