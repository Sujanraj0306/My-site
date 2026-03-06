# Project Plan: 3D Immersive Portfolio (Monochromatic "Tenbin Labs" Aesthetic)

## Overview
Building a $10,000-tier, 3D-immersive personal portfolio website for an AI/ML Engineer. The UI/UX will be fully animated with a focus on typography and minimalist elegance, inspired by "Tenbin Labs". The palette is strictly monochromatic (whites, blacks, greys) with subtle frosted-glass and fluid wireframe 3D backgrounds.

## Project Type
WEB

## Success Criteria
- 60FPS scrolling on high-end devices with monochromatic 3D wireframe fluid shapes.
- Graceful strict 60FPS CSS-only/downgraded 3D fallback on mobile for performance and SEO Core Web Vitals.
- Firebase Hosting setup configured with the Firebase CLI.
- Old repository files cleared and the new React build forcefully replacing them.
- All scraped images rendered with grayscale filters to match the aesthetic.

## Tech Stack
- **Framework:** React / Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, GSAP (ScrollTrigger)
- **3D Graphics:** react-three-fiber, @react-three/drei
- **Deployment:** Firebase Hosting
- **Asset Sourcing:** Direct extraction from Sujanraj0306/My-site GitHub.

## File Structure
- `src/` - React application code
- `src/components/3d/` - react-three-fiber primitives
- `src/components/ui/` - Glassmorphism UI elements
- `src/components/sections/` - Content sections (Hero, About, Skills, Projects, Experience, Achievements)
- `public/` - Images scraped from GitHub
- `firebase.json`, `.firebaserc` - Firebase config

## Task Breakdown
1. **Repository Cleanup:** (COMPLETED)
2. **Scaffold Project:** (COMPLETED)
3. **Firebase Setup:** (COMPLETED)
4. **Scrape Assets:** (COMPLETED)
5. **Component Design (UI - PIVOT):** Refactor glassmorphic overlays to clean frosted-glass. Build Hero, About, Skills, Projects, Experience, Achievements, and Contact sections in monochromatic theme. Add dynamic CTA to Experience. (Agent: `frontend-specialist`, Skill: `ui-ux-pro-max`, `frontend-design`)
6. **Component Design (3D - PIVOT):** Implement elegant, abstract fluid/wireframe geometries mapped to scroll. (Agent: `frontend-specialist`, Skill: `react-best-practices`)
7. **SEO Optimization:** Configure meta tags and semantic HTML. (Agent: `seo-specialist`)
8. **Phase X - Verification:** Run checklists and performance audits. 

## Phase X: Verification
- Lint: [ ]
- Security: [ ]
- Build: [ ]
- Performance/Lighthouse: [ ]
- Firebase Deploy Script Check: [ ]
