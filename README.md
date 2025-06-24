# OmgDevelopment.org

Product site for OmegaMatch and OmegaOMG with dark mode support and navigation.

## Overview
OmgDevelopment.org is a modern web application built with Next.js and Tailwind CSS. It serves as the product site for OmegaMatch and OmegaOMG, providing information, navigation, and a responsive user experience with support for both light and dark themes.

## Features
- **Next.js 13 App Router**: Utilizes the latest Next.js features for fast, scalable, and maintainable development.
- **Tailwind CSS**: Rapid UI development with utility-first CSS and custom theming.
- **Dark Mode**: Toggle between light and dark themes with persistent user preference.
- **Responsive Design**: Mobile-friendly layout and navigation.
- **MDX Support**: Easily add rich content using MDX (Markdown + JSX).
- **Vercel Deployment**: Optimized for seamless deployment and preview environments on Vercel.

## Project Structure
- `/app` — Main application pages (Home, About, Contact, Match, OMG)
- `/components` — Reusable UI components (Header, ThemeToggle)
- `/styles` — Global and Tailwind CSS styles

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