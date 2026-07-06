# Roki Works

Portfolio and blog site built with Astro, React, Tailwind CSS, and Markdown/MDX.

## Pages

- Home
- Works
- Blog
- About
- Contact
- Privacy Policy

## Content

- Works: `src/content/works/`
- Blog: `src/content/blog/`

Works and blog posts are managed with Astro Content Collections. Markdown and MDX files are supported.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev:bg` | Start Astro dev server in background mode |
| `npm run dev:status` | Check background dev server status |
| `npm run dev:logs` | Show background dev server logs |
| `npm run dev:stop` | Stop background dev server |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the built site locally |

## Deployment

This site builds as a static Astro site.

Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `>=22.12.0`

Vercel:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Notes

Replace the placeholder email and GitHub URL in `src/pages/contact/index.astro` before publishing.
