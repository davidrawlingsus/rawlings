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

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
DATABASE_URL="your-database-url"
RESEND_API_KEY="your-resend-api-key"
```

- `DATABASE_URL`: PostgreSQL database connection string
- `RESEND_API_KEY`: API key from [Resend](https://resend.com) for sending contact form emails (get yours at https://resend.com/api-keys)

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

See `rules.md` for detailed development guidelines and principles.

## Typing Headline Configuration

The hero headline uses a custom typing animation component (`TypingHeadline.tsx`) with no external dependencies. To customize phrases, speeds, or hold durations, pass a `config` prop:

```tsx
<TypingHeadline config={{ phrases: ['your', 'custom', 'phrases'], typingSpeed: { short: 60, long: 75 } }} />
```

**Config options:** `phrases` (string[]), `typingSpeed.short/long` (ms/char), `deletingSpeed` (ms/char), `holdDuration.default/last` (ms), `settleDelay` (ms). Respects `prefers-reduced-motion` with a static fallback ("marketing").
