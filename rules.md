# **rules.md — One-Pager Build Rules**

> **Purpose:** Keep Cursor consistent while we build the public one-page brand site.
> Back-end, auth, and database rules will be added later when the client area comes online.

---

## **1. Tech Stack (fixed for this phase)**

* **Framework:** Next.js 14 (App Router) + TypeScript (strict mode)
* **Styling:** Tailwind CSS + shadcn/ui (Radix components)
* **Animations:** Framer Motion (respect `prefers-reduced-motion`)
* **Images:** `next/image` for all visuals (including screenshots)
* **Content:** Static / hardcoded in components or MDX — no CMS yet
* **Database:** PostgreSQL (Railway) + Prisma ORM
* **Deployment:** Railway (static + SSR build)
* **Analytics:** Plausible (optional but preferred)

No other libraries or frameworks unless explicitly justified in comments.

---

## **2. File & Folder Structure**

```
/app
  /(public)              # single-page site
    page.mdx             # main page content (if using MDX)
    components/          # each section as its own .tsx file
  /api                   # API routes for forms and data
/content
  /assets/screens/       # screenshots referenced by sections
/lib
  utils.ts               # small helpers only
  prisma.ts              # Prisma client singleton
/prisma
  schema.prisma          # database schema
  migrations/            # database migrations
/styles
  globals.css            # Tailwind + tokens
```

---

## **3. Development Principles**

* Build **div-by-div** — each section isolated as a self-contained React component.
* Prioritise **clarity and reuse** over clever abstractions.
* Use **server components** by default; add `"use client"` only when needed.
* Keep total JS bundle < 180 KB gz (excluding Next runtime).
* Avoid external scripts and unnecessary dependencies.

---

## **4. UI Rules**

* **Layout:**

  * Max container width: `1280px`, gutters `px-6` (mobile) / `px-8` (desktop)
  * Vertical rhythm: section `py-16` mobile / `py-24` desktop

* **Typography:**

  * H1 → `text-4xl md:text-6xl`
  * H2 → `text-3xl`
  * Body → `text-base md:text-lg`
  * One H1 per page.

* **Color system:** start with Tailwind neutral + one accent.

* **Motion:** fade/slide-up 200–300 ms; obey `prefers-reduced-motion`.

* **Buttons / Inputs:** use shadcn/ui; consistent variants (`primary`, `secondary`, `ghost`).

* **Images:** lazy-load by default; descriptive `alt` text.

---

## **5. Accessibility / SEO**

* Logical heading order, one H1.
* Every interactive element has focus state & label.
* Contrast ≥ 4.5 : 1.
* Semantic landmarks (`header`, `main`, `footer`).
* Meta: title ≤ 60 chars, description ≤ 155 chars, OG image set.
* Use `next-seo` or metadata API.

---

## **6. Components Expected**

Each section lives in `/components/` with a clear purpose:

| ID | Name           | Purpose                       |
| -- | -------------- | ----------------------------- |
| 01 | **Hero**       | Headline, subhead, CTA        |
| 02 | **LogoCloud**  | Trust logos                   |
| 03 | **ValueProps** | 3–6 pillars of value          |
| 04 | **Proof**      | Testimonials / results        |
| 05 | **Process**    | “How it works” in steps       |
| 06 | **About**      | Founder photo + bio           |
| 07 | **FAQ**        | 5–8 common Q&A                |
| 08 | **CTA Band**   | Repeat main CTA               |
| 09 | **Contact**    | Simple form (stubbed for now) |
| 10 | **Footer**     | Legal + social links          |

Each component exports a default React function returning semantic HTML with Tailwind classes.
If animation is used, wrap only the necessary elements in Framer Motion.

---

## **7. Performance Checklist**

* Lighthouse score ≥ 90 for Perf, Best Practices, Accessibility.
* LCP < 2.5 s on 3G-throttled mobile.
* Images < 150 KB each (compressed).
* No layout shift (CLS < 0.05).
* Use `next/font` or system fonts; ≤ 2 weights.

---

## **8. Git & Collaboration**

* Branches: `feat/*`, `fix/*`, `chore/*`
* Commit messages: short imperative (“Add hero section animation”)
* Run `npm run lint && npm run build` before commits.

---

## **9. Scope Boundaries (for now)**

* ✅ Database enabled (PostgreSQL + Prisma) for content storage and future backend needs.
* ❌ No auth or uploads yet.
* ❌ No dynamic routing for now.
* ✅ One-pager remains primary focus; database supports content management and prepares for backend expansion.
* ✅ API routes can be added as needed for forms and data fetching.

---

## **10. Visual Consistency**

* Use screenshots from references only as guides.
* Recreate them using Tailwind utilities, not imported HTML.
* Comment each section with the reference site name for traceability.

---

Would you like me to add a short **README summary** (one paragraph for the repo root) that tells Cursor *why* these rules exist and how to interpret them? That helps it obey the intent automatically while coding.
