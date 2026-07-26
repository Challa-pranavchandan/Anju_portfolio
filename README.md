# Anju Portfolio

## Project Overview

Anju Portfolio is a React-based personal website created with Vite and Tailwind CSS. The site is built to showcase design work with a clean, elegant layout, responsive presentation, and custom typography. It emphasizes polished visual details, accessible navigation, and project filtering for better user interaction.

## Features

- React + Vite single-page application architecture
- Tailwind CSS for utility-first styling and responsive layout
- Category-based project filtering in the Works section
- Reusable `Card` component for project previews
- Custom fonts imported via Google Fonts for a refined appearance
- Responsive hero, project, and footer sections across screen sizes
- Animated icon accents and hover interaction effects
- Customer review carousel with automated rotation
- Stats showcase section displaying portfolio metrics
- Custom scrollbar styling that matches the elegant design palette
- Fully responsive design optimized for mobile, tablet, and desktop

## Technology Stack

- React 19
- Vite 4
- Tailwind CSS 4
- @tailwindcss/vite plugin
- OXLint for linting

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ or yarn 1/3+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal to preview the site locally.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

- `public/`
  - Static assets and images served by Vite
- `src/`
  - `App.jsx` — app entry layout that renders pages and components
  - `main.jsx` — React DOM entry point
  - `index.css` — global Tailwind styles, font imports, and custom scrollbar styling
  - `components/` — reusable UI elements
    - `button/Button.jsx` — primary and secondary button variants
    - `card/Card.jsx` — project card layout for featured work items
    - `Dos/Dos.jsx` — feature/benefit card component
    - `customer/CustomerSection.jsx` — customer review carousel and stats showcase
    - `customer/CustomerReview.jsx` — individual customer review card
    - `footer/Footer.jsx` — responsive footer design and contact links
  - `pages/` — page-level components
    - `Hero.jsx` — hero section with introduction and call-to-action
    - `Works.jsx` — project showcase with category filtering
    - `Ido.jsx` — skills/services section

## Key Files

- `package.json` — project dependencies, scripts, and metadata
- `vite.config.js` — Vite configuration with React and Tailwind plugins
- `src/index.css` — font imports, theme colors, Tailwind base styles, and custom scrollbar design
- `src/pages/Works.jsx` — category filter logic and project card rendering
- `src/pages/Hero.jsx` — hero section layout with introduction and buttons
- `src/components/card/Card.jsx` — card layout for featured work items
- `src/components/customer/CustomerSection.jsx` — customer reviews carousel and stats metrics
- `src/components/footer/Footer.jsx` — responsive footer design and contact links

## Design Tokens

- Primary color: `#152e3a`
- Secondary color: `#fbf1df`
- Accent color: `#a64321`
- Support colors: `#247aa3`, `#f59e78`, `#fbf2e0`

## Typography

- Primary font: `Roboto`
- Secondary font utilities: `Poppins`
- Featured phrase font: `Libre Baskerville`
- Decorative highlight font: `Ephesis`

## Current Status

The portfolio is actively maintained and fully functional. Key sections include:
- **Hero Section**: Introduction with dynamic background effects and call-to-action buttons
- **Works Section**: Project showcase with category-based filtering
- **Customer Section**: Automated carousel with customer testimonials and portfolio metrics
- **Skills Section**: Feature cards highlighting services and expertise
- **Footer**: Contact information and social media links
- **Responsive Design**: Optimized for all screen sizes with mobile-first approach
- **Custom Styling**: Integrated custom scrollbar design that matches the elegant aesthetic

## Recent Improvements

- Implemented custom scrollbar styling with warm earth tones matching design palette
- Enhanced mobile responsiveness for stats cards with adaptive padding and font sizes
- Added customer review carousel with automatic rotation and hover pause
- Optimized layout for seamless experience across all breakpoints

## Future Improvements

- Expand project gallery with additional artwork samples
- Add smooth scroll navigation and page anchors
- Implement contact form with email integration
- Create project detail modals for in-depth information
- Add smooth page transitions and animations
- Implement dark mode variant
- Add blog section for art tutorials and insights

## Notes

The project uses Tailwind CSS with a custom color palette and font family utilities. The design emphasizes elegance and simplicity, featuring warm earth tones (#fbf2e0, #f7dfb7, #fbf1df) throughout. All components maintain consistent spacing, shadows, and hover effects for a polished user experience. The Works section supports category filtering, and the Customer Section provides social proof through testimonials and metrics.
