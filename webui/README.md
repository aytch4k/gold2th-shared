# Gold2th WebUI

A modern UI layout for the Gold2th decentralized ID application, built with Next.js, React, Tailwind CSS, and Shadcn/UI.

## Features

- Modern, responsive UI with dark and light mode
- Header navbar with logo and hamburger menu
- Sub-header with OpenWebUI input field
- Landing page showcasing the Gold2th logo

## Tech Stack

- **Next.js 14+** with React 18
- **Tailwind CSS 4.0** with JIT compiler
- **Shadcn/UI** for component primitives
- **Framer Motion** for animations
- **Jotai** for state management
- **TanStack Query** for server state

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
gold2th-shared/webui/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Landing page
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn/UI components
│   │   ├── header.tsx   # Header navbar
│   │   └── sub-header.tsx # Sub-header with OpenWebUI
│   └── lib/             # Utility functions
└── ...                  # Configuration files
```

## Theme

The theme is based on the Gold2th logo colors:
- Dark mode uses colors from the logo
- Light mode uses inverted colors of the logo

## Microfrontend Integration

This UI layout is designed to work with the existing microfrontend architecture as described in the Modern-Frontend-Architecture.md document. It provides a shell for the various microfrontends to be loaded into.