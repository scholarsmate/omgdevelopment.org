# OmgDevelopment.org

[![Sync Marketing Content](https://github.com/scholarsmate/omgdevelopment.org/actions/workflows/sync-marketing.yml/badge.svg)](https://github.com/scholarsmate/omgdevelopment.org/actions/workflows/sync-marketing.yml)
[![Vercel Deploy](https://img.shields.io/github/deployments/scholarsmate/omgdevelopment.org/Production?label=vercel&logo=vercel&logoColor=white)](https://github.com/scholarsmate/omgdevelopment.org/deployments)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fomgdevelopment.org&label=omgdevelopment.org&logo=vercel&logoColor=white)](https://omgdevelopment.org)

Product site for OmegaMatch and OmegaOMG with dark mode support and navigation.

## Overview
OmgDevelopment.org is a modern web application built with Next.js and Tailwind CSS. It serves as the product site for OmegaMatch and OmegaOMG, providing information, navigation, and a responsive user experience with support for both light and dark themes.

## Features
- **Next.js App Router**: Modern routing and data fetching.
- **Tailwind CSS**: Rapid UI development with utility-first CSS and custom theming.
- **Dark Mode**: Toggle between light and dark themes with persistent user preference.
- **Responsive Design**: Mobile-friendly layout and navigation.
- **Build-time Markdown Rendering**: Product marketing content is fetched from upstream repos and rendered at build time using `react-markdown` + `remark-gfm` (no MDX runtime).
- **Vercel Deployment**: Optimized for seamless deployment and preview environments on Vercel.

## Project Structure
- `app/` — App Router pages and layouts
   - `head.tsx`, `layout.tsx`, `page.tsx`
   - `about/`, `contact/` — static pages
   - `marketing/` — build-time rendered marketing pages
      - `omega-omg/`, `omega-omg-vscode/`, `omega-match/`
- `components/` — UI components (e.g., `Header.tsx`, `ThemeToggle.tsx`)
- `content/` — synced markdown from upstream repos and `LAST_SYNC.md`
- `scripts/` — automation scripts (e.g., `fetch-marketing.mjs`)
- `styles/` — global styles including Tailwind (`globals.css`)
- `public/` — static assets
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
- GitHub Actions also runs a scheduled/manual sync and writes `content/LAST_SYNC.md`. The About page surfaces this timestamp.

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


## Environment Variables
Copy `.env.example` to `.env` and update as needed:
```
NEXT_PUBLIC_SITE_URL=https://omgdevelopment.org
```

## Deployment
This project is configured for Vercel. Preview deployments are triggered automatically on pull requests.

## License
MIT