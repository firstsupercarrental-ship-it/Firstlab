# First Lab — Digital Marketing Agency Dubai

Website for [firstlab.ae](https://firstlab.ae), built with Next.js 15, Tailwind CSS v4 and Motion (Framer Motion),
using animation patterns from 21st.dev (spotlight, blur-text, marquee, number ticker, spotlight & 3D tilt cards,
magnetic buttons, meteors, scroll timeline).

## Pages

- `/` Home — video hero, platforms marquee, services, reel showcase, why us, process, CTA
- `/about/`
- `/services/` and `/services/<slug>/` (8 service pages)
- `/work/` — filterable portfolio
- `/contact/` — form that sends via WhatsApp or email, map

## Edit content

All contact details, navigation, services and process steps live in `src/lib/site.ts`.
Images and videos are in `public/media/`, logos in `public/brand/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy

```bash
npm run build    # writes a static site to ./out
```

Upload the contents of `out/` to any web host (e.g. Hostinger `public_html`), or connect the repo to Vercel/Netlify.
