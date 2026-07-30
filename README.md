# BT-Styl

Marketing website for BT-Styl — a window retailer based in Szczecin, Poland.

## Stack

- **Next.js 16** (App Router) with **static export** — no server required
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **framer-motion** (scroll animations), **lucide-react** (icons)
- **Web3Forms** — contact form delivery (no backend)

The site builds to plain HTML/CSS/JS in `out/`, deployable to any shared
hosting over FTP. There is no database, no API routes, and no Node.js runtime
in production.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | yes, for the contact form | Web3Forms access key. Free at [web3forms.com](https://web3forms.com) — enter the recipient address and the key arrives by e-mail. Public by design: it only permits submitting the form, never reading past submissions. |

Without the key the form renders and validates but submissions fail with an
error message. Everything else works.

## Build & deploy

```bash
npm run build   # outputs to out/
```

Upload the **contents** of `out/` to the hosting document root (usually
`public_html/`). No build step runs on the server.

See `../SETUP.md` for step-by-step deployment instructions.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # root layout, metadata, JSON-LD
│   ├── page.tsx            # homepage — composes the sections below
│   ├── marka/page.tsx      # brand guidelines page
│   └── logo-preview/       # internal logo preview (exclude before launch)
├── components/
│   ├── Navbar.tsx  Hero.tsx  Oferta.tsx  Products.tsx
│   ├── Features.tsx  WhyUs.tsx  Realizacje.tsx  Partners.tsx
│   ├── Testimonials.tsx  Porady.tsx  Contact.tsx  Footer.tsx
│   ├── Logo.tsx  BackToTop.tsx
└── lib/data.ts             # site content: contact details, products, copy
```

Editable copy lives in `src/lib/data.ts` and inside the section components.

## Static export constraints

Because `output: 'export'` is set, these Next.js features are unavailable:
Server Actions, Route Handlers reading requests, middleware, `redirects`/
`rewrites`/`headers` config, ISR, and `next/image` optimization
(`images.unoptimized: true` is required). Images ship at their source
resolution — compress them before adding to `public/`.

`trailingSlash: true` makes each route emit `<route>/index.html`, so Apache
serves subpages without rewrite rules.
