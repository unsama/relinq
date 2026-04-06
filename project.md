# Relinq Website Boilerplate

## Overview
Relinq is a small business website boilerplate built with modern web technologies that focuses on delivering high performance, slick animations, and easy content management.

## Tech Stack
- **Framework**: [Astro.js](https://astro.build/) - Used for its island architecture and fast static site generation.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Integrated via Vite plugin to deliver utility-first styling.
- **UI Components**: [React](https://react.dev/) - Integrated via `@astrojs/react` for interactive components that require state or complex rendering.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Delivering smooth and robust animations (e.g., AnimatedSection, Timeline).

## Project Structure
```text
/
├── public/                 # Static assets like images and generic files
├── src/
│   ├── components/         # React and Astro components (e.g., Header, Footer, ServiceCard, AnimatedSection, Timeline)
│   ├── content/            # Markdown collections (e.g., About Us, Journey)
│   ├── pages/              # Application routes (Astro pages)
│   └── styles/             # Global CSS/Tailwind definitions
├── package.json            # Project dependencies and scripts
└── astro.config.mjs        # Astro configuration and plugin setups
```

## Features
1. **Component-Driven Architecture**: Clean integration of custom UI components like headers, footers, and service cards.
2. **Animation Support**: Pre-configured Framer Motion integrations for highly interactive layouts.
3. **Content Collections**: Markdown-driven content management optimized for "About Us", "Journey", and potentially blog sections.
4. **Marketing Ready**: Structured with marketing copy layouts and CTAs designed for conversion.

## Development Scripts
- `npm run dev` - Starts the local development server at `localhost:4321`.
- `npm run build` - Builds the production site to the `dist/` folder.
- `npm run preview` - Previews the locally built production site.
