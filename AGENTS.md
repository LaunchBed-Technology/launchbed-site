## Project Description

This is an Astro 7 portfolio website for **Launchbed Technology**, a digital agency. The site showcases:
- Agency services (landing pages and websites)
- Portfolio of completed client projects
- Project detail pages with gallery and descriptions
- Contact information (Gmail and WhatsApp)

## Tech Stack

- **Astro 7** — static site generation with content collections (new content layer API)
- **Tailwind CSS v4** — styling via `@tailwindcss/vite` plugin
- **Sharp** — image optimization
- **Content collections** — project data stored in Markdown files with `glob()` loader

## Project Structure

- `src/content.config.ts` — Content collection schema and loader definition
- `src/content/projects/*.md` — Individual project data (title, description, images, optional link)
- `src/pages/index.astro` — Landing page (hero, services, projects grid, contact)
- `src/pages/proyectos/[slug].astro` — Dynamic route for project detail pages
- `src/components/ProjectCard.astro` — Card component linking to `/proyectos/<id>`
- `src/layouts/Layout.astro` — Base HTML layout with global CSS import
- `src/styles/global.css` — Tailwind import and custom `--color-primary` theme
- `public/images/projects/<slug>/` — Project images (cover, gallery slides)
- `src/assets/` — Static images (logo, header background, project card thumbnails)

## Development

**IMPORTANT: Use only `pnpm` commands for all operations.**

### Start dev server:
```bash
pnpm dev
```

### Build for production:
```bash
pnpm build
```

### Preview production build:
```bash
pnpm preview
```

## Content Management

### Adding a new project

1. Create a `.md` file in `src/content/projects/`
2. Add frontmatter:
   - `title` (string)
   - `shortDesc` (string) — short summary for project cards
   - `description` (string) — full description for detail page
   - `cover` (string) — path to cover image, e.g. `/images/projects/my-project/cover.jpg`
   - `link` (string, optional) — URL to live site
   - `images` (string array, optional) — gallery image filenames
3. Add body text for the "Sobre el proyecto" section
4. Add images to `public/images/projects/<slug>/`

### Adding images

Place project images in `public/images/projects/<slug>/`:
- `cover.jpg` — thumbnail shown on project cards
- `slide1.jpg`, `slide2.jpg`, etc. — gallery images on detail page

## Key Features

### Landing Page (`/`)
- Fixed navigation bar with smooth scroll to sections
- Hero section with background image and CTAs
- Services section: Landing Pages and Websites
- Project grid with cards linking to `/proyectos/<id>`
- Contact section with Gmail and WhatsApp links
- Footer

### Project Detail (`/proyectos/<id>`)
- Back button to return to landing page
- Project title and full description
- Image gallery (placeholder spaces for slides)
- "Sobre el proyecto" section rendered from markdown body
- Optional external link to live site
- Shared navigation bar

### Styling
- Tailwind CSS v4 only (no custom CSS files)
- Custom `primary` and `primary-hover` colors via `@theme`
- Fully responsive layout
- Dark hero overlay for readability

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Pages and routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections (v7 new API)](https://docs.astro.build/en/guides/content-collections/)
- [Styling with Tailwind](https://docs.astro.build/en/guides/styling/)
- [Images in Astro](https://docs.astro.build/en/guides/images/)

## Notes

- Always use `pnpm` instead of `npm` or `yarn`
- Content collection config uses `src/content.config.ts` (not `src/content/config.ts`)
- Project entries are queried via `getCollection("projects")` — each entry has `id` (filename-based slug) and `data` (frontmatter fields)
- The dev server does not use `--background` flag; run `pnpm dev` directly
