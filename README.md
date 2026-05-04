# Cow Paradise (React)

Marketing and content site for **Cow Paradise**, built as a single-page application with React and client-side routing. Pages include home, games, stories, the Moo Family, about us, market, news, and login.

## Tech stack

- **React 18** with **Vite 5**
- **React Router** for navigation
- **Tailwind CSS** for styling
- **PostCSS** / **Autoprefixer**

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (comes with Node)

## Getting started

Install dependencies:

```bash
npm install
```

### Development server

Start Vite with hot reload:

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

### Production build

Create an optimized build in `dist/`:

```bash
npm run build
```

### Preview production build

Serve the `dist` output locally:

```bash
npm run preview
```

## Optional scripts

- **`npm run figma:pull-assets`** — runs `scripts/pull-figma-assets.mjs` if you use it to sync design assets from Figma (requires any env/config that script expects).

## Project layout

| Path | Purpose |
|------|--------|
| `src/App.jsx` | Router and top-level routes |
| `src/pages/` | Route entry components per URL |
| `src/components/` | Page sections and UI (e.g. home, news, login) |
| `public/` | Static assets served as-is (`images/`, `svg/`, `videos/`) |
| `tailwind.config.js` | Theme colors and fonts |
| `vite.config.js` | Vite configuration |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/games` | Games |
| `/stories` | Stories |
| `/moo-family` | Moo Family |
| `/about-us` | About Us |
| `/market` | Market |
| `/news` | News |
| `/login` | Login |

## License

Private project (`"private": true` in `package.json`). All rights reserved unless otherwise stated by the project owners.
