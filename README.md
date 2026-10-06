# Techabanca company website

A static Next.js company website at https://techabanca.com, with a product portfolio for Techabanca Billing and Techabanca Catalogue. Each application runs separately: https://billing.techabanca.com and https://catalogue.techabanca.com.

## Catalogue introduction

Catalogue appears on the homepage, Products page, Company page and shared footer. The dedicated `/catalogue/` page includes an interactive three-screen tour, business use cases, capabilities, a guided workflow, actual desktop/mobile screenshots, current pricing and availability, FAQs and application links.

The five optimized JPEGs in `public/images/catalogue/` come from the actual locally running Catalogue application with synthetic **Forma Studio** demo records. Captions identify this source. They do not depict a published customer website.

Catalogue is described as **early access**. Workspace creation requires no payment method; eligible owners/admins explicitly start the optional 14-day trial from Subscription. Signup does not start a trial, publish a website or activate paid access. Public website activation is being finalized, and paid prices and checkout are not available yet. No automatic Billing–Catalogue record synchronization is advertised.

## Local Windows workflow

Requires Node.js 22.13 or newer and the pinned package manager. In the editable source folder:

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm run dev:pages
```

For a production build:

```powershell
corepack pnpm run build:pages
node .\node_modules\typescript\bin\tsc --noEmit
```

The static export is written to `out/`. It needs no database or server-side application runtime. Use the explicit `dev:pages` and `build:pages` commands for this Cloudflare workflow.

## Version control and publishing

The existing GitHub repository is https://github.com/akashnishant/techabanca. Its `main` branch tracks the built static site for the current deployment workflow. The editable Next.js project is preserved on `source/company-website`. Source and static release commits are recorded together in the release evidence.

The production Cloudflare Pages project is **techabanca-company**, with the existing custom domain **techabanca.com**. Deploy only the verified export directory, using the canonical locally installed Wrangler and the exact production project and branch. Never deploy the source branch or dependency/build-cache folders as site assets. Do not copy application secrets or private data into this static project.

The separate task to repair automatic GitHub-to-Pages deployments remains deferred. This product introduction does not change build settings, DNS, secrets, Billing infrastructure or Catalogue infrastructure.

## Validation

Build and type-check the source. Browser acceptance covers homepage and portfolio discovery, the direct Catalogue route and metadata, every product-tour tab and its arrow/Home/End keyboard controls, actual image loads, section anchors, FAQs, account/application/pricing links, Products navigation state, mobile-menu behavior, and layouts from 320 to 1440 pixels.

Check all existing company routes, the Billing showcase and its screenshots, and anonymous responses from the separate Billing and Catalogue applications. Review desktop and mobile screenshots before publishing and repeat the relevant acceptance checks against production.

## Source layout

- `app/`: routes, metadata, interactions and site styles.
- `app/catalogue/`: Catalogue product page, screenshot component and interactive tour.
- `app/catalogue-product-feature.tsx`: homepage and portfolio introduction.
- `app/product-catalog.ts`: product identities and application/marketing destinations.
- `components/ui/`, `lib/`, `vendor/`: shared interface components, utilities and licensed styles.
- `public/`: favicon and optimized site/product images.
- `next.config.ts`: static export and trailing-slash routing.

Legal and Trust Center implementation remains parked until the separate registration and launch requirements are ready. This product introduction adds no legal documents, certifications, testimonials, registration claims or live payment offers.
