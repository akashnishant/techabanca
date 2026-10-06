# Techabanca corporate website

A responsive corporate site for Techabanca, with dedicated pages for Billing, Services, Solutions, Company, and Contact. The site is a static Next.js export; the Billing application remains a separate product and is not included in this repository.

## Run locally

Requires Node.js 22.13 or newer. Install dependencies with `corepack pnpm install --frozen-lockfile`, then run `corepack pnpm run dev:pages`. Open the local address printed by Next.js.

## Build for Cloudflare Pages

Run `corepack pnpm run build:pages`. The complete static site is generated in `out/`, including the HTML for each route and the site images. The application does not require a database or server-side runtime.

To deploy from a Git repository in Cloudflare Pages, use:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `corepack pnpm run build:pages` |
| Build output directory | `out` |
| Production branch | Your production branch, such as `main` |

The site can be deployed to Cloudflare Pages without owning a domain; Cloudflare provides a `*.pages.dev` address. Add `techabanca.in` as a custom domain after it is purchased and configured in your Cloudflare account. The Billing application is separate and currently runs at `taxlume.pages.dev`; the company's Billing page does not link to an unreleased rebrand. No Billing app traffic is proxied through this static site.

## Before a public launch

- The contact page marks email enquiries as opening soon during this Pages preview. Set up an inbox or provide an existing working address before public launch; then restore the mail and copy links using `app/contact/copy-email.tsx`.
- Review the company identity and legal details once the business entity is registered. This draft does not assert a registered legal name, certifications, clients, or case studies.
- Add the Billing application link when the product rebrand is deployed and its new hostname is active.

## Source layout

- `app/`: page content, interactions, metadata, and design system styles
- `components/ui/`: accessible accordion and tabs primitives used in the site
- `public/images/`: optimized site artwork
- `next.config.ts`: static export and trailing-slash routing

The site is also maintained as a private ChatGPT Sites preview. Files under `.openai/`, `build/`, and `scripts/` in the working checkout belong to that preview setup and are not needed in a Cloudflare Pages source upload.
