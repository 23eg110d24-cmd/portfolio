# Harisha Gunti Portfolio

Modern responsive portfolio website for Harisha Gunti, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- App Router based Next.js 15 project
- Dark/light theme toggle with localStorage persistence
- Default dark mode
- Sticky navigation with active section highlighting
- Scroll progress indicator
- Framer Motion page and section animations
- Responsive hero, about, skills, projects, certifications, education, contact, and footer sections
- Project filtering system
- SEO metadata and Open Graph tags
- Vercel-ready production setup

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Development runs with Turbopack to avoid stale Webpack dev-cache runtime issues.

## Production Build

```bash
npm run build
npm run start
```

## Full Check

```bash
npm run check
```

## Customization

- Update portfolio content in `lib/data.ts`
- The resume download file lives at `public/Harisha-Gunti-Resume.pdf`
- Update GitHub links in `lib/data.ts` when the final repository URLs are available
- Replace or add project images in `public`

## Deploying to Vercel

Push the project to GitHub, import it in Vercel, and deploy with the default Next.js settings.
