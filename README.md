# BVEC Website

Website for **Barak Valley Engineering College** (Nirala, Sribhumi, Assam), built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run build` | Production build (all pages are static) |
| `npm start`     | Serve the production build             |
| `npm run lint`  | Run ESLint                             |

## Pages

| Route                     | Page                                        |
| ------------------------- | ------------------------------------------- |
| `/`                       | Home                                        |
| `/about`                  | About, vision & mission, milestones         |
| `/departments`            | All B.Tech programmes                       |
| `/departments/[slug]`     | One page per department                     |
| `/admissions`             | Admission steps, eligibility, documents, FAQ |
| `/faculty`                | Faculty directory with filter & search      |
| `/notices`                | Notice board with filter & search           |
| `/contact`                | Contact details, message form and map       |

## Editing content

All content lives in plain JavaScript files in `src/data/` — no code changes needed:

- `site.js` — college name, address, phone, email, menu links, headline stats
- `departments.js` — departments (adding one here also creates its page)
- `notices.js` — notices and upcoming events (newest first)
- `faculty.js` — faculty directory

> The notices, faculty profiles and phone number are **placeholders** for the design. Replace them with official information before going live.

## Project structure

```
src/
  app/          # routes (one folder per page), layout, global styles
  components/   # Navbar, Footer, cards, filters, etc.
  data/         # editable site content
  lib/          # small helpers (date formatting)
public/images/  # logo and other images
design-reference/bvec.html  # the original static HTML mockup
```

Features: light/dark theme (remembers your choice), responsive layout, scroll animations (disabled for users who prefer reduced motion), SEO metadata, `sitemap.xml` and `robots.txt`.

---

UI/UX project by Nayanjyoti Das.
