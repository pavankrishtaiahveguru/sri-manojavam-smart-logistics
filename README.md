# Sri Manojavam Smart Logistics Private Limited

![SMSL Logo](public/logo/smsl-logo.png)

**Sri Manojavam Smart Logistics Private Limited (SMSL)** is a Hyderabad-based logistics and transportation company. This repository contains the company's corporate website, built to present its services, India-wide network, company information, and quotation enquiry functionality to customers and business partners.

The website is designed to:

- Showcase SMSL's transportation and logistics services, including air freight, sea freight, refrigerated transport, and hazardous and non-hazardous goods handling.
- Present the company's strategic network of locations across India through an interactive map.
- Allow visitors to request a quotation by selecting a specific SMSL service and submitting their shipment and contact details.
- Provide verified business contact information, including phone numbers, email addresses, office address, and working hours.

---

## Project Preview

![SMSL Logo](public/logo/smsl-logo.png)

The company logo referenced above is stored at `public/logo/smsl-logo.png`. No website screenshot exists in the repository, and no deployed site URL has been confirmed yet, so no screenshot or production link is included here.

---

## Features

All features listed below are implemented in this codebase.

- **Responsive corporate website** — mobile-first layouts with Tailwind CSS breakpoints across all pages.
- **Fixed, full-width navigation bar** — desktop menu with active-page highlighting, plus an animated mobile menu (`components/layout/Navbar.jsx`).
- **Home page with a logistics-focused hero section** and supporting sections for company highlights, services preview, "Why choose us", the India network map, about preview, and calls to action (`src/components/home/`).
- **About page** — company overview with supporting images (`public/images/about/`).
- **Services listing page** — overview grid of the eight SMSL services.
- **Eight dedicated service detail pages** — one per service, each with included-feature lists, industries served, images, and a service-specific quote link that preselects that service on the quote form.
- **Network page with an interactive India map** — SVG map built with `d3-geo`, `topojson-client`, and the `world-atlas` dataset, showing six strategic locations with animated connections radiating from the Hyderabad head office.
- **Get a Quote page** — service selection grid, route details, cargo details, and customer information fields, with validation, a submitting state, and success/error feedback.
- **Contact page** — phone, email, and working-hours cards, a registered-office card with a Google Maps embed and "Get Directions" link, a WhatsApp shortcut, and an enquiry form.
- **Reusable service data model** — all service content is defined in a single data module (`src/data/services.js`) consumed by listing, detail, and quote pages.
- **Scroll and entrance animations** — implemented with Framer Motion (`motion` components and a reusable `MotionReveal` helper).
- **Custom 404 page** — friendly not-found screen at `src/app/not-found.jsx`.
- **SEO metadata** — template-based page titles and a site description configured in `src/app/layout.js`.
- **Fonts** — Geist and Geist Mono loaded and optimized through `next/font/google`.

---

## Services Offered

The website documents the following SMSL services. Each has a dedicated detail page under `/services/<slug>`, and each service can be preselected on the quote form via `/get-quote?service=<slug>`.

| # | Service | Focus |
|---|---------|-------|
| 1 | Transportation & Logistics | Coordinated transportation planning, route coordination, and cargo-specific handling between origins and destinations. |
| 2 | International Freight Forwarding | Freight coordination for domestic and international shipping, covering shipment planning, documentation discussion, and origin-to-destination coordination. |
| 3 | Air Freight | Air cargo coordination for time-sensitive shipments, including cargo dimensions, handling needs, documentation, and timing. |
| 4 | Sea Freight | Ocean freight coordination shaped around shipment volume, route, destination, and documentation requirements. |
| 5 | Refrigerated Transportation | Temperature-sensitive and cold-chain transportation planning, covering temperature ranges, routes, and loading/unloading considerations. |
| 6 | Hazardous Goods Transportation | Transportation coordination for hazardous cargo with attention to classification, packaging, documentation, and applicable safety and compliance requirements. |
| 7 | Non-Hazardous Goods Transportation | General cargo movement planning, pickup and delivery coordination, and route/handling requirement discussion. |
| 8 | Supply Chain Solutions | Logistics coordination across shipment planning, transportation activities, and connected supply chain requirements. |

Service descriptions follow the wording maintained in [`src/data/services.js`](src/data/services.js).

---

## Technology Stack

| Technology | Role |
|------------|------|
| [Next.js](https://nextjs.org) 16 | React framework with the App Router, React Compiler enabled, and Turbopack configured for CSS processing. |
| [React](https://react.dev) 19 | UI library powering all pages and client components. |
| JavaScript | Project language (no TypeScript). |
| [Tailwind CSS](https://tailwindcss.com) v4 | Utility-first styling, integrated via `@tailwindcss/turbopack`. |
| [Framer Motion](https://www.framer.com/motion/) | Entrance, scroll, and micro-interaction animations. |
| [Lucide React](https://lucide.dev) | Icon system used across navigation, service cards, and forms. |
| [d3-geo](https://d3js.org/d3-geo), [topojson-client](https://github.com/topojson/topojson-client), [world-atlas](https://github.com/topojson/world-atlas) | Geographic data and projection used to render the India network map. |
| [next/font](https://nextjs.org/docs) | Geist and Geist Mono font loading and optimization. |

---

## Project Structure

```
sri-manojavam-smart-logistics/
├── public/
│   ├── images/
│   │   ├── about/              # About page imagery
│   │   ├── hero/               # Home page hero images
│   │   ├── services/           # One image per SMSL service
│   │   └── india-map.svg       # Background map artwork for the network map
│   └── logo/
│       └── smsl-logo.png       # SMSL company logo
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout, metadata, navbar/footer, fonts
│   │   ├── page.js             # Home page
│   │   ├── globals.css         # Tailwind v4 entry and global styles
│   │   ├── not-found.jsx       # Custom 404 page
│   │   ├── icon.png            # Site favicon
│   │   ├── about/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── get-quote/page.jsx
│   │   ├── network/page.jsx
│   │   └── services/
│   │       ├── page.jsx              # Services listing
│   │       ├── transportation/page.jsx
│   │       ├── freight-forwarding/page.jsx
│   │       ├── air-freight/page.jsx
│   │       ├── sea-freight/page.jsx
│   │       ├── refrigerated-transportation/page.jsx
│   │       ├── hazardous-goods/page.jsx
│   │       └── non-hazardous-goods/page.jsx
│   ├── components/
│   │   ├── layout/             # Navbar.jsx, Footer.jsx
│   │   ├── home/               # Home page sections (Hero, ServicesPreview, ...)
│   │   ├── common/             # MotionReveal.jsx, DevelopedByStaffArc.jsx
│   │   ├── IndiaNetworkMap.jsx # SVG India map with strategic locations
│   │   └── ServiceDetailPage.jsx
│   └── data/
│       └── services.js         # Single source of truth for service content
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
└── package.json
```

---

## Installation and Local Development

Prerequisites: [Node.js](https://nodejs.org) (LTS recommended) and npm.

```bash
# Clone the repository
git clone 

# Enter the project directory
cd sri-manojavam-smart-logistics

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server runs on the default Next.js port (3000); no port override, custom base path, or other host configuration is defined in `next.config.mjs`.

---

## Available Scripts

The following scripts are defined in [`package.json`](package.json):

| Script | Command | Purpose |
|--------|---------|---------|
| Development | `npm run dev` | Starts the Next.js development server (Turbopack CSS pipeline). |
| Production build | `npm run build` | Creates an optimized production build. |
| Production server | `npm start` | Serves the production build (run `npm run build` first). |
| Linting | `npm run lint` | Runs ESLint using `eslint-config-next`. |

No test runner, storybook, or other scripts exist in this project.

---

## Pages and Navigation

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home (`src/app/page.js`) | Hero, company highlights, services preview, why-choose-us, India network map, about preview, and CTA sections. |
| `/about` | About (`src/app/about/page.jsx`) | Company background and capabilities. |
| `/services` | Services (`src/app/services/page.jsx`) | Grid listing all eight SMSL services with links to each detail page and per-service quote links. |
| `/services/<slug>` | Service detail (`src/app/services/*/page.jsx`) | Dedicated page per service, rendered through `ServiceDetailPage.jsx`, with a preselected quote link. |
| `/network` | Network (`src/app/network/page.jsx`) | Strategic India locations presented with the interactive SVG map. |
| `/contact` | Contact (`src/app/contact/page.jsx`) | Contact cards, enquiry form, Google Maps embed, and WhatsApp shortcut. |
| `/get-quote` | Get a Quote (`src/app/get-quote/page.jsx`) | Quotation request form with SMSL service selection. |
| any other URL | Custom 404 (`src/app/not-found.jsx`) | Friendly page for unknown routes. |

The fixed navbar (`components/layout/Navbar.jsx`) links to Home, About Us, Services, Network, and Contact, plus a "Get a Quote" button. The footer (`components/layout/Footer.jsx`) repeats these links, lists the services, and shows registered office details, phone numbers, emails, and working hours.

---

## Quote Enquiry Workflow

The Get a Quote page (`src/app/get-quote/page.jsx`) implements the quotation request flow:

1. **Service selection** — visitors choose one of the eight SMSL services from a clickable icon grid. The service can also be preselected via the URL query parameter `?service=<slug>` (for example, `/get-quote?service=air-freight` links used on service detail pages and the services listing).
2. **Request details** — pickup and delivery locations (required), weight in metric tons, cargo commodity, full name, company name, email, phone/WhatsApp (all four contact fields validated as required), and free-text requirements.
3. **Submission** — the form posts a JSON payload (including the selected `service` slug and `serviceTitle`) via `fetch` to:

   ```
   POST /api/quotes
   ```

   It includes loading-state handling on the submit button and displays a success or error banner depending on the API response.

### Important: the quote API route is not yet implemented

The front end calls `/api/quotes`, but **no API route handler exists in this repository yet** (there is no `src/app/api/` directory). As a result:

- Submitting the quote form currently will not succeed until a route handler is added, for example at `src/app/api/quotes/route.js`.
- This project uses **no backend services and no environment variables** in its current state. Any email delivery, database persistence, or notification system would need to be added alongside the new route handler, and its configuration requirements documented separately.

Until a handler exists, the most reliable way to reach SMSL is through the [contact page](src/app/contact/page.jsx), whose enquiry form composes a pre-filled email to the team via the visitor's own email application (the form itself does not send or store data on a server).

---

## Configuration and Environment Variables

- **No environment variables are required** to run this project in its current state. A search of the codebase confirms no `process.env` usage and no `.env` files (beyond the standard `.gitignore` entry).
- The only runtime configuration lives in [`next.config.mjs`](next.config.mjs), which enables the React Compiler and wires the Tailwind v4 Turbopack loader for CSS.
- If/when the `/api/quotes` route handler is implemented with email or storage integrations, any required credentials should be stored in `.env.local` (gitignored) and documented in a new `.env.example` with safe placeholder values — never real secrets.

---

## Branding and Assets

### Design palette

| Role | Hex |
|------|-----|
| Navy (primary dark) | `#071A35` |
| Blue (primary) | `#075FAE` |
| Orange (accent) | `#F47721` |
| White | `#FFFFFF` |
| Section background (light) | `#F8FAFC` |

### Public asset layout

| Path | Contents |
|------|----------|
| `public/logo/smsl-logo.png` | SMSL company logo (used in the navbar and footer). |
| `public/images/services/*.jpg` | One image per service, referenced by slug in `src/data/services.js` (e.g. `transportation.jpg`, `air-freight.jpg`). |
| `public/images/hero/*.jpg` | Home page hero imagery. |
| `public/images/about/*.jpg` | About page imagery. |
| `public/images/india-map.svg` | Map artwork layered into the SVG-based India network map. |
| `public/staffarc-logo.avif` | Logo for the "Developed by StaffArc" attribution in the footer. |
| `src/app/icon.png` | Site favicon. |

---

## Deployment

This project is a standard Next.js App Router application with no special build configuration, so it deploys cleanly to [Vercel](https://vercel.com):

1. Connect the repository on Vercel (or run `npx vercel` locally); the Next.js preset is detected automatically.
2. **No environment variables need to be configured** in the current state of the project.
3. Build command `npm run build` and install command `npm install` are used as-is; no overrides are required.
4. Deploy. A production URL will be added to this README once deployment has been completed and verified.

No deployment has been performed for this project yet; no production URL is claimed above.

---

## Troubleshooting

**`npm install` fails or hangs.** Delete `node_modules` and `package-lock.json`, then reinstall (`rm -rf node_modules package-lock.json && npm install`). Ensure you are on a Node.js version supported by Next.js 16.

**Images fail to load.** All image paths are referenced relative to `public/` (e.g. `/images/services/sea-freight.jpg`, `/logo/smsl-logo.png`). Verify the file exists under `public/images/...` with the exact name used in `src/data/services.js` or in the component referencing it.

**Quote form submission returns an error.** The front end posts to `/api/quotes`, but no API route handler exists in the repository yet (see the [quote enquiry workflow](#quote-enquiry-workflow)). Add `src/app/api/quotes/route.js` or use the contact page until the handler is implemented.

**Build or lint failures.** Run `npm run lint` to see detailed ESLint output and `npm run build` for build errors about missing modules or invalid imports.

**General next steps.** For more details on Next.js itself, see the official [Next.js documentation](https://nextjs.org/docs) and the [Next.js GitHub repository](https://github.com/vercel/next.js).

---

## Contributing

Contributions are welcome. To make a change:

1. Fork the repository and create a feature branch (`git checkout -b feature/your-change`).
2. Make your changes, keeping code style consistent with the existing Tailwind/Framer Motion conventions.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Submit a pull request describing what changed and why.

**License:** No license file exists in this repository and no license has been specified yet, so all rights currently remain reserved by Sri Manojavam Smart Logistics Private Limited.

---

## Contact

- **Registered office:** Flat No: 4-89/307, Tejha Heights, Above DCB Bank, Chandanagar, Serilingampally, Rangareddy District, Hyderabad, Telangana, India – 500050.
- **Phone:** [+91 94414 46600](tel:+919441446600) · [+91 94406 88737](tel:+919440688737)
- **Email:** [sales@srimanojavamsmartlogistics.in](mailto:sales@srimanojavamsmartlogistics.in)
- **Working hours:** Monday – Saturday, 9:00 AM – 8:00 PM

