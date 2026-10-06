import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Techabanca — Engineering what's next", template: "%s | Techabanca" },
  description: "Techabanca builds thoughtful software products and digital systems. Explore Techabanca Billing, product engineering, cloud solutions, and intelligent automation.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
