# OmgDevelopment.org

[![Sync Marketing Content](https://github.com/scholarsmate/omgdevelopment.org/actions/workflows/sync-marketing.yml/badge.svg)](https://github.com/scholarsmate/omgdevelopment.org/actions/workflows/sync-marketing.yml)
[![Vercel Deploy](https://img.shields.io/github/deployments/scholarsmate/omgdevelopment.org/Production?label=vercel&logo=vercel&logoColor=white)](https://github.com/scholarsmate/omgdevelopment.org/deployments)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fomgdevelopment.org&label=omgdevelopment.org&logo=vercel&logoColor=white)](https://omgdevelopment.org)

Product site for Omega suite of Free and Open Source solutions with light/dark mode and mobile-friendly navigation.

## Overview
OmgDevelopment.org is a modern web application built with Next.js and Tailwind CSS. It serves as the mobile-friendly product site for OmegaMatch, OmegaOMG, and the OmegaOMG VS Code extension, providing clear navigation and a responsive UX with light/dark themes.

## Features
- **Next.js App Router**: Modern routing and file-based layouts.
- **Tailwind CSS**: Rapid UI development with utility-first CSS and custom theming.
- **Dark Mode**: Toggle between light and dark themes with persistent user preference.
- **Responsive Design**: Mobile-friendly layout and navigation; header stacks on small screens and the nav supports horizontal scroll.
- **Build-time Markdown Rendering**: Product marketing content is fetched from upstream repos and rendered at build time using `react-markdown` + `remark-gfm`.
- **SEO & Social**: OG/Twitter meta with a 1200×630 PNG preview, plus `robots.txt` and `sitemap.xml`.
- **Optimized Icons**: PNG favicons and Apple touch icons are generated from a single SVG source.
- **Vercel Deployment**: Optimized for seamless deployment and preview environments on Vercel.

## Project Structure
- `app/` — App Router pages and layouts
   - `head.tsx`, `layout.tsx`, `page.tsx`, `not-found.tsx`
   - `marketing/` — build-time rendered marketing pages
      - `omega-omg/`, `omega-omg-vscode/`, `omega-match/`
   - Note: Legacy `about/` and `contact/` pages were removed.
- `components/` — UI components (e.g., `Header.tsx`, `ThemeToggle.tsx`)
- `content/` — synced markdown from upstream repos and `LAST_SYNC.md`
- `scripts/` — automation scripts (e.g., `fetch-marketing.mjs`, `rasterize-icon.mjs`)
- `styles/` — global styles including Tailwind (`globals.css`)
- `public/` — static assets (favicons, social image, robots/sitemap)
   - `images/dev-icon.svg`, `images/dev-icon-*.png`, `images/og.png`
- `Dockerfile`, `docker-compose.yml` — prod image and dev workflow
- `.github/workflows/` — automation (content sync, lint/build)

## Getting Started

### Using Docker (Recommended)

#### For Production
1. **Build the Docker image:**
   ```sh
   docker build -t omgdevelopment .
   ```
2. **Run the container:**
   ```sh
   docker run --rm -p 3000:3000 omgdevelopment
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

#### Pull marketing content (MARKETING.md)
- Host (PowerShell):
   ```powershell
   $env:OMG_OWNER = "scholarsmate"
   npm run fetch:marketing
   ```
- Inside dev container:
   ```sh
   docker-compose exec web sh -lc "OMG_OWNER=scholarsmate node scripts/fetch-marketing.mjs"
   ```

- View pages:
   - /marketing/omega-omg
   - /marketing/omega-omg-vscode
   - /marketing/omega-match

Notes:
- The marketing pages are statically pre-rendered. After syncing content, rebuild to see updates locally or deploy to update production.
- GitHub Actions also runs a scheduled/manual sync and writes `content/LAST_SYNC.md`.

#### For Fast Local Development
1. **Start the dev container with live reload:**
   ```sh
   docker-compose up
   ```
2. **Edit your source files on your host.**
   - Changes will be reflected in the browser in real time (hot reload).
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

> **Note:** The dev container mounts your code and runs `npm install` and `npm run dev` automatically. No need to install Node.js or npm on your host OS.

---


## Assets & Icons
Icons are generated from a single SVG source (`public/images/dev-icon.svg`) into multiple PNG sizes and a social preview image.

- To regenerate after updating the SVG:

   ```powershell
   npm run icons
   ```

- Outputs:
   - Favicons/Touch icons: `public/images/dev-icon-{16,32,64,128,180,192,256,512}.png`
   - Social preview: `public/images/og.png` (1200×630)


## Environment Variables
Copy `.env.example` to `.env` and update as needed:
```
NEXT_PUBLIC_SITE_URL=https://omgdevelopment.org
```

## Deployment
This project is configured for Vercel. Preview deployments are triggered automatically on pull requests.

## License
MIT