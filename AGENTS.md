## Project Description

This is an Astro-based portfolio website for a digital agency. The site showcases:
- Agency services and capabilities
- Portfolio of completed client websites
- Project cards with optional links, descriptions, and detail views
- Contact information and form

## Project Structure

- `src/pages/` - Page routes and components
- `src/components/` - Reusable UI components (ProjectCard, ContactForm, etc.)
- `src/content/` - Project data and content collections
- `src/layouts/` - Page layouts
- `public/` - Static assets

## Development

**IMPORTANT: Use only `pnpm` commands for all operations.**

### Start dev server (background mode):
```bash
pnpm dev --background
```

### Stop dev server:
```bash
pnpm dev stop
```

### Check server status:
```bash
pnpm dev status
```

### View dev server logs:
```bash
pnpm dev logs
```

### Build for production:
```bash
pnpm build
```

### Preview production build:
```bash
pnpm preview
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Key Features

### Project Cards
- Display completed agency projects
- Optional external link to live site
- Description of the project
- Click to open detailed project view

### Contact Section
- Contact form with validation
- Agency contact information
- Social media links

## Notes

- Always use `pnpm` instead of `npm` or `yarn`
- Dev server runs in background mode by default
- Use `astro dev stop` to cleanly shut down the dev server