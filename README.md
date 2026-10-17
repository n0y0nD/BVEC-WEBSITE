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
| `/administration`         | Principal, Principal's message, office staff |
| `/placements`             | Training & Placement record, recruiters, MoUs |
| `/facilities`             | Hostels, library, health centre             |
| `/committees`             | Grievance redressal and other committees    |
| `/downloads`              | Academic docs, AICTE approvals, magazine, RTI |
| `/contact`                | Contact details, message form and map       |

## Editing content

All content lives in plain JavaScript files in `src/data/` — no code changes needed:

- `site.js` — college name, address, emails, menu links, headline stats
- `departments.js` — departments (adding one here also creates its page)
- `notices.js` — notices (newest first), each linking to its PDF
- `faculty.js` — faculty directory
- `college.js` — principal, staff, placement, hostel, committees, documents, RTI

> Content is taken from the official website, [bvec.ac.in](https://www.bvec.ac.in/). Documents and notice PDFs link to their copies there. To add a notice, add its PDF id, date, category and title to `notices.js`.

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
