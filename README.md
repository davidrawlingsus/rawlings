# David Rawlings - Personal Brand Website

A modern, single-page personal brand website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui (Radix components)
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Images:** `next/image` for all visuals
- **Content:** Static / hardcoded in components
- **Deployment:** Railway (static + SSR build)

## Development

```bash
npm install
npm run dev
```

## Project Structure

```
/app
  /(public)              # single-page site
    page.tsx            # main page
    components/         # each section as its own .tsx file
/content
  /assets/screens/      # screenshots referenced by sections
/lib
  utils.ts              # small helpers only
/styles
  globals.css           # Tailwind + tokens
```

## Sections

Each section lives in `/components/` with a clear purpose:
- Hero, LogoCloud, ValueProps, Proof, Process, About, FAQ, CTA Band, Contact, Footer

See `rules.md` for detailed development guidelines and principles.# Build trigger
