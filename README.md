# Learn Next.js

A hands-on playground for learning the Next.js **App Router**, built while following the [Codevolution Next.js course](https://www.youtube.com/@Codevolution). Each route in `src/app` is a small, self-contained example of one App Router concept.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- TypeScript
- Tailwind CSS 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## What's Inside

The project is organized as one route per concept:

| Route | Concept |
|---|---|
| `/` | Home page with basic `Link` navigation |
| `/about` | Static metadata (`export const metadata`) |
| `/blog`, `/blog/first`, `/blog/second` | Nested routing |
| `/counter` | Client Components (`"use client"`, `useState`) |
| `/dashboard` | Composing a page from multiple child components |
| `/docs/[...slug]` | Catch-all dynamic segments |
| `/products` | `Link` variants (default, `replace`, dynamic `href`) |
| `/products/[productId]` | Dynamic routes, async `params`, `generateMetadata` |
| `/products/[productId]/review` | Nested dynamic routes |
| `/products/[productId]/review/[reviewId]` | Multiple dynamic params, `notFound()`, custom `not-found.tsx` |
| `/articles/[articleId]` | Reading `params` and `searchParams` together via React's `use()` hook |
| `/profile` | Minimal page example |
| `(marketing)` route group — `/`, `/customer`, `/revenue` | Route groups that share a layout without affecting the URL |
| `(auth)` route group — `/login`, `/register`, `/forget-password` | Route group with an active-link nav using `usePathname` |
| `not-found.tsx` | Global 404 page |
| `src/app/_lib` | Private folder (excluded from routing) for shared helpers |

## Project Structure

```
src/app/
├── layout.tsx              # Root layout (header/footer, root metadata)
├── page.tsx                 # Home page
├── not-found.tsx             # Global 404
├── (marketing)/              # Route group: marketing pages
├── (auth)/                   # Route group: auth pages, shared nav layout
├── about/
├── blog/
├── counter/
├── dashboard/
├── docs/[...slug]/
├── products/[productId]/review/[reviewId]/
├── articles/[articleId]/
├── profile/
└── _lib/                     # Private helpers, not routable
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)
