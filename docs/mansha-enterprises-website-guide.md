# Build a Mansha Enterprises Website — Compact AI Guide

**This shop:** Mansha Enterprises, Alamgirnagar, Ahmednagar — mobile phones, Air Conditioners (ACs), water purifiers (sales & services), and genuine accessories.

**Goal:** A fast, SEO-friendly website that (1) brings in **local walk-in customers** in Ahmednagar and (2) supports **online sales/enquiries**.

**Locked-in details (use these wherever the guide shows a placeholder):**

| Placeholder | Value |
|---|---|
| `[SHOP_NAME]` | Mansha Enterprises |
| `[CITY]` | Ahmednagar |
| Site domain | **mansha-enterprises.com** (+ `www.mansha-enterprises.com`) |
| `[AREA]` | Alamgirnagar |
| `[PHONE]` | +917262080880 |
| `[WHATSAPP_NUMBER]` | 917262080880 |
| `[ADDRESS]` | Alamgirnagar, Ahmednagar, Maharashtra 414001 |
| `[MAPS_LINK]` | https://maps.app.goo.gl/gA9KWfFy7YfJPKBE7 |
| `[EMAIL]` | mansha.enterprises.anagar@gmail.com |

**Stack (₹0 infra + domain only):**
- **AstroJS** (static, multi-page) — best SEO, pure HTML
- **Cloudflare Pages** — free hosting (up to 100k views/day)
- **Supabase** (free) — stores repair & product enquiries + second-hand phone listings
- **Domain** — `mansha-enterprises.com`, ~₹1,000/year (the only cost)

> This guide is built to be followed top-to-bottom with **Antigravity**. The details (`[PHONE]`, `[WHATSAPP_NUMBER]`, `[ADDRESS]`, etc.) are filled in.

---

## 0. Before You Start — Tool Strategy (read once, saves tokens)

You have three ways to work. Using the right one keeps token usage low and speed high.

| Use this | When | Why |
|---|---|---|
| **Manual (you, no AI)** | Installing software, clicking dashboard buttons (Cloudflare, Supabase, domain, Google), copy-pasting keys | Zero tokens. AI can't click these for you anyway. |
| **Antigravity** | Writing/editing the actual website code, SEO, forms, deploy config — everything in the project folder | It edits files directly in your repo. This is your main tool. |
| **Cowork / Chat** | Planning, comparing options, writing content (the 600-word service text, FAQs, listings copy), organising the project | Knowledge-work tasks that aren't code. Cheaper to "think" here than to burn coding-agent turns. |

**Rule of thumb:**
- *Clicking a button or installing?* → Manual.
- *Touching a file in the project?* → Antigravity.
- *Writing words or deciding strategy?* → Chat.

**Token-saving habits inside Antigravity:**
- Give one clear task per prompt, not ten mixed requests.
- Let it finish and test before piling on new instructions.

**Links:**
- Astro docs: https://docs.astro.build/en/getting-started/
- Astro → Cloudflare deploy: https://docs.astro.build/en/guides/deploy/cloudflare/
- Supabase: https://supabase.com/
- Cloudflare: https://dash.cloudflare.com/
- Google Search Console: https://search.google.com/search-console/about
- Google Business Profile (critical for local): https://business.google.com/
- Logo & favicon: https://logofa.st/
- Domain search: https://instantdomainsearch.com/

---

## 1. One-Time Setup (Manual — ~30 min, do once for all projects)

Install these four. Skip any you already have.

1. **Git** — version control → https://git-scm.com/downloads
2. **VS Code** — editor → https://code.visualstudio.com/
3. **Node.js** (LTS) — runs Astro → https://nodejs.org/  *(Astro 6 needs Node 20.19+ or 22.12+; the current LTS is fine. Node 18 won't work.)*
4. **Antigravity CLI**

**Verify (in a terminal):**
```bash
git --version
node --version
```

Then create the project folder (name it after the domain):
```bash
mkdir mansha-enterprises
```
Open that folder in VS Code → open the integrated terminal (`Ctrl+~`).

---

## 2. Create the Astro Project (Manual command)

In the VS Code terminal:
```bash
npm create astro@latest .
```
- Press Enter for defaults
- Template: **Basic / Minimal**
- TypeScript: **No** (simpler) or Yes if you prefer
- Initialize Git: **Yes**

Then add the Tailwind + sitemap integrations (still manual):
```bash
npx astro add tailwind
npx astro add sitemap
```
Say **Yes** to each prompt.

> **Why no Cloudflare adapter?** As of 2026 the Astro Cloudflare adapter targets **Workers**, not Pages, and is only needed for server-side rendering. We keep this site **fully static** (the contact form talks to Supabase directly from the browser), so it deploys to Cloudflare Pages as a plain `dist/` folder — simpler and free, with no adapter.

---

## 3. Configure Antigravity in Workspace (Manual, one command)

Now launch Antigravity:
```bash
antigravity
```

---

## 4. Build the Site (Antigravity — main prompt)

Paste this into Antigravity. It builds the whole structure in one go.

> **PROMPT 1 — Build the site**
>
> ```
> I've initialized a new AstroJS project with Tailwind and sitemap.
>
> Build a professional, mobile-first website for Mansha Enterprises, a local electronics retail & service shop. Use multi-page (MPA) architecture — separate real pages, not a SPA — for best SEO. Keep the design clean, modern, and premium.
> Use the Electric Yellow (#FAFF69) and Ink Black (#0A0A0A) palette with Gold (#D9A441) accents. Use Space Grotesk for headings and IBM Plex Sans for body text.
>
> Use these details consistently everywhere:
> Shop Name: Mansha Enterprises
> Locality: Alamgirnagar, Ahmednagar
> Phone: +917262080880
> WhatsApp: 917262080880
> Address: Alamgirnagar, Ahmednagar, Maharashtra 414001
> Support Email: mansha.enterprises.anagar@gmail.com
> Live Domain: mansha-enterprises.com
> Map Link: https://maps.app.goo.gl/gA9KWfFy7YfJPKBE7
>
> Pages to create:
> 1. Home — hero with shop name + city, tagline "Premium mobiles, ACs, and water purifiers in Alamgirnagar, Ahmednagar. Sales & expert service.", primary buttons: "Call Now" (tel:+917262080880) and "WhatsApp Us" (wa.me link). Sections: products & services overview, why choose us (warranty, same-day service, genuine parts, fair pricing), a short 600+ word SEO text block about mobile phones, ACs, and purifiers in Ahmednagar, a 3-step "How it works" section, customer trust signals, and a strong CTA.
> 2. Services — one section each: Mobile Repair, AC Installation & Servicing, Water Purifier Installation & Filters, Screen Replacement, Battery Replacement, and Purifier Servicing. Each with a description and a "Book Service on WhatsApp" button.
> 3. Buy Second-Hand Phones — a responsive grid of phone listing cards (image placeholder, model, condition, price, "Enquire on WhatsApp"). Pull listings from a JS data array for now; we'll wire it to a database later.
> 4. Accessories — categories: phone covers, chargers, cables, AC stabilizers, water purifier spares, and filters. Each with an "Ask Availability" WhatsApp button.
> 5. Book a Service / Enquire — enquiry form: name, phone, device (Mobile/AC/Purifier/Other), problem description/requirements, preferred contact (Call/WhatsApp). On submit, send the data directly to Supabase from the browser. Show a success message.
> 6. About Us — local story, experience, commitment to quality, what makes Mansha Enterprises trustworthy.
> 7. Contact — Address details, embedded Google Map, phone, WhatsApp, hours, and the same enquiry form.
> 8. Privacy Policy, Terms & Conditions — standard pages.
>
> Global:
> - Sticky header with Mansha monogram logo + nav + prominent "WhatsApp" button.
> - Sticky mobile bottom bar with Call + WhatsApp (always visible on phones).
> - Footer with all pages, address, hours, and contact details.
> - A reusable WhatsApp button component that opens wa.me/917262080880 with a context-aware prefilled message.
> - 404 and 500 error pages.
> - Fully responsive and accessible. Comment the code clearly.
> ```

Review and test:
```bash
npm run dev
```
Open the local URL. Click through every page on a phone-size viewport.

---

## 5. SEO Pass (Antigravity) — tuned for LOCAL traffic

> Mansha Enterprises wants **nearby customers**, so SEO targets `[service/product] + Ahmednagar`, not generic global keywords.

> **PROMPT 2 — Local SEO**
>
> ```
> Do on-page local SEO for this electronics retail and service site.
>
> Primary local keywords (use "Ahmednagar" and "Alamgirnagar" naturally in titles, H1s, meta, and body):
> - mobile repair in Ahmednagar
> - second hand mobiles Ahmednagar
> - buy AC in Ahmednagar
> - AC repair and servicing Ahmednagar
> - water purifier service Ahmednagar
> - water purifier filters Ahmednagar
> - mobile shop in Alamgirnagar near me
>
> For every page:
> - Unique <title> (under 60 chars) with the keyword + Ahmednagar.
> - Unique meta description (under 155 chars) with a call to action and phone hint.
> - One clear H1 per page including the local keyword.
> - Open Graph + Twitter meta tags.
> - Descriptive alt text on all images/placeholders.
> - Clean URLs (/services, /buy-phones, /accessories, /book-repair).
>
> Add LocalBusiness JSON-LD structured data in the site head with:
> name "Mansha Enterprises", image, Address, Phone, opening hours, geo coordinates, priceRange "₹₹", and sameAs WhatsApp link.
> Also add Service schema for each service (Mobile Repair, AC Servicing, Purifier Filters).
>
> Generate robots.txt (with sitemap link) and confirm the sitemap integration outputs sitemap-index.xml. Make sure the homepage SEO block naturally includes local keywords without stuffing.
> ```

---

## 6. FAQ with Rich Results (Antigravity)

> **PROMPT 3 — FAQ + JSON-LD**
>
> ```
> Add an SEO-friendly FAQ section to the Home and Services pages using FAQPage JSON-LD structured data (so Google can show rich results). Questions:
>
> - What products do you retail at Mansha Enterprises?
> - Do you provide AC servicing and repair in Ahmednagar?
> - Do you sell pre-owned smartphones? Do they come with a warranty?
> - How long does a mobile screen or battery replacement take?
> - How often should I replace water purifier filters?
> - Do you use genuine spare parts for ACs, purifiers, and mobiles?
> - What are your business hours and location?
> - Can I get an estimate on WhatsApp before visiting?
>
> Write clear, friendly, locally-relevant answers. Render them as a visible accordion AND include matching JSON-LD.
> ```

---

## 7. Backend: Enquiries + Phone Listings (Supabase)

This stores enquiries and fetches active pre-owned listings.

### 7a. Create Supabase project (Manual)
1. Go to https://supabase.com/ → sign up → **New Project**.
2. Pick a region close to Ahmednagar (e.g. Mumbai). Set a DB password.
3. When ready, go to **Project Settings → API** and copy the **Project URL** and **anon public key**.
4. In the **SQL Editor**, run this schema script:

```sql
-- Repair & sales enquiries
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  device text,
  problem text,
  preferred_contact text
);

-- Second-hand phone listings
create table phones (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  model text not null,
  condition text,
  price integer,
  description text,
  image_url text,
  sold boolean default false
);

-- Security: enable Row Level Security
alter table enquiries enable row level security;
alter table phones enable row level security;

-- Anyone (anon) may INSERT an enquiry, but NOT read others' enquiries
create policy "anon can submit enquiry"
  on enquiries for insert to anon with check (true);

-- Anyone may READ phone listings (public catalogue)
create policy "anyone can view phones"
  on phones for select to anon using (true);
```

### 7b. Wire it up (Antigravity)

> **PROMPT 4 — Connect Supabase**
>
> ```
> Install @supabase/supabase-js. Read the Supabase URL and anon key from environment variables PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY (create a .env file and a .env.example; add .env to .gitignore).
>
> 1. Enquiry/Contact form: on submit, insert a row into the `enquiries` table (name, phone, device, problem, preferred_contact). Validate inputs, show a success message, handle errors gracefully, and after success offer a "Continue on WhatsApp" button with prefilled text.
> 2. Pre-owned phones page: fetch rows from the `phones` table where sold = false, and render them as listing cards. Show a friendly empty-state if none.
> 3. Wrap all Supabase calls in try/catch. Never expose secrets beyond the public anon key.
> ```

### 7c. Keep Supabase awake (Manual, important)
Supabase free tier pauses projects after 7 days of inactivity. Prevent it by setting up a monitor:
- Create a free monitor at https://uptimerobot.com/ pointing at your live site URL, or
- Add a free GitHub Actions scheduled workflow that sends a request to the REST endpoint.

---

## 8. Branding (Manual)
- Use logo files in `docs/Mansha Enterprises Logo/brand-kit/`.
- The favicon.svg should be placed in `/public`.

---

## 9. Deploy to Cloudflare Pages

### 9a. Push to GitHub (Manual)
- Create a repo at https://github.com/new.
- Push your local files to GitHub.

### 9b. Connect Cloudflare (Manual)
1. Go to https://dash.cloudflare.com/ → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick your repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output dir: `dist`
3. Add environment variables:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
4. **Save and Deploy.**

Every future `git push` auto-deploys.

### 9c. Stop duplicate-content penalty (Antigravity)
Add a `_headers` file in `/public` to set `X-Robots-Tag: noindex` for the `*.pages.dev` domain only.

---

## 10. Custom Domain (Manual)

**Domain:** `mansha-enterprises.com`

**Steps:**
1. Buy `mansha-enterprises.com` from a domain registrar.
2. In Cloudflare, add your site and change nameservers at your registrar.
3. In Cloudflare Pages, add both `mansha-enterprises.com` and `www.mansha-enterprises.com` to Custom Domains.

---

## 11. Get Found Locally (Manual)

1. **Google Business Profile** (GBP) → https://business.google.com/
   - Add the shop, address, phone (`7262080880`), hours, photos, services (Mobiles, ACs, Purifiers). This displays you on Google Maps.
2. **Google Search Console** → Submit your sitemap `sitemap-index.xml`.
3. Put the exact same name, address, and phone number (NAP) across your site, GBP, and local directories.
4. Ask customers to leave Google reviews.

---

## Maintenance

- **Add a phone for sale:** Supabase Table Editor → `phones` → insert row.
- **Mark as sold:** Set `sold = true` in the table.
- **Read enquiries:** Supabase table `enquiries` or the admin dashboard `/admin` (using Supabase Auth).
- **Edit code:** Update files, then `git push`.

---

## Cost Summary
| Item | Cost |
|---|---|
| Astro + Cloudflare Pages hosting | ₹0 |
| Supabase (free tier) | ₹0 |
| Domain (`mansha-enterprises.com`) | ~₹1,000/year |
| Google Business Profile | ₹0 |
| **Total** | **~₹1,000/year** |
