# Mansha Enterprises — Gemini CLI Context

This file serves as the primary instruction set for Gemini CLI in this workspace. It inherits core conventions from `CLAUDE.md` and defines specialized workflows.

---

## Project Overview
**Mansha Enterprises** is a premium marketing + booking site for a mobile phone, AC, and water purifier sales and service shop in Alamgirnagar, Ahmednagar.

- **Framework**: Astro v6 (Static MPA)
- **Styling**: Tailwind CSS v4 (Pure CSS-based, semantic tokens)
- **Database**: Supabase (Build-time SSG + Client-side CRUD + Auth)
- **Icons**: Lucide-style SVG strings (Stroke, no fill)

### Key Commands
- `npm run dev`: Start dev server
- `cmd /c "npm run build"`: Production build (Bypasses PS execution policy)
- `npm run preview`: Preview build

---

## Latest Project State (June 20, 2026 — updated)

### 0. Mobile Layout Typography & Spacing Optimization
- **Page & Hero Headings**: Standardized main page headers, hero text, and subtitle spacing across public and admin pages (e.g., `PageHero.astro`, `SplineHero.astro`, `index.astro`, `about.astro`, `services.astro`, `accessories.astro`, `buy-products.astro`, and `admin/index.astro`). Text values transition smoothly from `text-3xl`/`text-4xl` to `text-2xl`/`text-3xl` on viewports under 768px.
- **Branding Guidelines Page Layout**: Scaled down outer wrapper margins, inner grids (e.g. golden-ratio diagram, spec grid), card paddings, and font tokens to fit neatly on mobile screens without horizontal clipping or excessive scrolling.
- **Sidebar Drawers**: Standardized the public sidebar in `Header.astro` and the admin sidebar in `AdminLayout.astro` on mobile screens with a native mobile app look: reduced width to `260px`, tightened container padding to `p-4`, scaled down link dimensions/fonts, shrunk icons to match, and formatted the main CTAs to `h-11` (meets Material/iOS human-interface touch guidelines). All web/desktop sizes remain completely untouched.

### 1. Admin Panel & Security
- **Full Admin Suite**: Implemented at `/admin` with Supabase Authentication.
- **Dashboard**: Features real-time stats for enquiries and inventory (products).
- **CRUD Operations**: Advanced data tables with server-side pagination, multi-column search, and category-aware input forms.
- **Database Migrations**: Created unified schema migration for `enquiries` and `products` tables with full Row-Level Security (RLS) policies at `supabase/migrations/20260620000000_create_products_table.sql`.

### 2. UI/UX & Navigation
- **Mobile Drawer Overhaul**: Migrated from a bottom bar to a professional left-to-right slide-out sidebar for both frontend and admin, featuring complete active navigation state highlighting for all pages (services, buy-products, accessories, about, faq).
- **Admin Sidebar Alignment**: Standardized the admin panel sidebar to match the layout and tracking of the frontend sidebar (using uppercase wide tracking, flex chevrons, active state highlights, and unified layout bounds). Configured sidebar position to be fully `fixed` on desktop (offsetting content container via padding-left) to prevent it from scrolling away with page contents.
- **Form Contrast & Image Overhaul**: Add/Edit Product forms (`products/add.astro`, `products/edit.astro`) overhauled using theme tokens, correcting text invisibility bugs in light mode, and dynamically showing inputs (e.g., storage/color for Mobiles, capacity/type for ACs/Water Purifiers).
- **Compacted Datatables**: The product inventory datatable (`products/index.astro`) has been compacted and generalized (displaying brands, names, conditions, categories, and compact options).
- **Details Modal Upgrade**: enquiry-modal fully modernized with backdrop blurs, accent grids, and theme synergy.
- **Profile Layout Refinements**: Overhauled `profile.astro` with admin details grid and secure inline notification banners.
- **Brand Consistency**: Unified the peak-M monogram brand mark across all headers and footers.

### 3. Component Standards
- **PageHero**: Interactive hero with mouse-following `Spotlight` effects, now theme-aware.
- **Service & Phone Cards**: Premium hover effects, shadow-lifts, and theme-aware badges.
- **Repair Form**: Refined validation and one-click WhatsApp follow-up integration.

### 4. Competitor Intelligence & Service Alignment
- **Competitor Audited**: Evaluated competitor website (`http://ahmednagarcity.in/raj%20enterprises.html` / Arihant Mobile Planet in Savedi, Ahmednagar) for service keyword coverage.
- **Service & Form Enhancements**: Integrated competitor's core focus areas directly into Mansha Enterprises' catalog. Expanded `mobiles` to prioritize Apple & Android premium sales, `mobile-repair` to highlight Apple iPhone specialized servicing, and `led-tv-smart-home` to emphasize Sony LED TV repairs and office/residence smart automation setups. Added corresponding placeholder examples to the general booking `RepairForm.astro`.
- **Franchise & Partner Details**: Incorporated brand alignment updates to highlight Mansha Enterprises' status as an authorized dealer and partner outlet for Oppo and Nothing mobiles across the About page, Home page features, and Services catalog.

### 5. Performance & Dependency Optimization
- **Static Island Conversion**: Replaced the React/Framer-Motion `SplineHero.tsx` component with an Astro native static HTML/CSS variant `SplineHero.astro`. This allows text, headlines, and call-to-actions to render instantly on first-paint with zero JavaScript latency.
- **Lazy-Loaded WebGL background**: Modified the WebGL canvas in the hero to initialize asynchronously using `client:idle`, preventing the massive Three.js library from blocking the page load.
- **Footer WebGL Removal**: Completely removed the Three.js library from `Footer.astro`. Replaced the wireframe octahedron script with a custom 2D canvas rendering rotation function using simple 3D Euler projections. This removes ~1MB of bundle script loading from *every page* on the site.
- **Lightweight Spotlight**: Rewrote the hover-tracking spotlight header overlay `Spotlight.astro` in vanilla JS using `translate3d` transforms and `requestAnimationFrame` at 60/120fps, replacing the React-based framer-motion version.
- **Dependency Pruning**: Cleaned up [package.json](file:///D:/mansha-enterprises/package.json), removing `framer-motion`, `clsx`, and `tailwind-merge`. Deleted obsolete React and utility files (`SplineHero.tsx`, `spotlight.tsx`, `phone-mockup.tsx`, `card.tsx`, and `utils.ts`) to prevent Vite startup dependency resolution errors. These packages and files are now fully pruned from the workspace.

---

## Coding Rules & Constraints
1. **Semantic Tokens Only**: Never use hardcoded Tailwind colors (`text-slate-900`). Use CSS var tokens (`text-foreground`).
2. **SVG Icons Only**: Never use emoji or icon libraries; use SVG strings with `<Fragment set:html={...} />`.
3. **Hover States**: Use `hover:bg-accent` and `hover:scale-[1.02]` for interactive elements.
4. **Theme Parity**: Every new feature must be tested and polished for both Light and Dark modes.
5. **Validation**: Always run `cmd /c "npm run build"` to verify changes before concluding a task.
6. **Cross-CLI Sync**: After any significant architectural change, you MUST update `CLAUDE.md` and `GEMINI.md`.

---

## Technical Validation Status
- **Routes**: 20 active pages (including 7 admin management routes).
- **Build Status**: Verified passing via production build check.
- **Auth Status**: Supabase Session checks active on all `/admin` routes.
