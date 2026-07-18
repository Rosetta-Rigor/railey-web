# Railey's Travel & Tours — Project Context

> Created: July 19, 2026
> Next session: July 20, 2026

## 📋 Project Overview

**Railey's Travel & Tours** is a Palawan tour packages website for a travel agency based in Puerto Princesa, Palawan. The goal is to attract customers and showcase tour packages for the Palawan experience.

- **Company**: Railey's Travel & Tours (owned by Railey)
- **Tagline**: "Your Palawan Experience, Handled"
- **GitHub**: https://github.com/Rosetta-Rigor/railey-web
- **Deployed on**: Vercel (URL shared with client)

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Vite + React 18 |
| **Routing** | React Router v6 (lazy-loaded routes) |
| **3D Rendering** | @react-three/fiber + @react-three/drei + three.js |
| **Animations** | Framer Motion (scroll, hover, tilt, page transitions) |
| **Styling** | Pure CSS with design system (index.css) |
| **Package Manager** | npm |

## 📁 Project Structure

```
railey-web/
├── public/images/              ← All Palawan photos (background, places, additional image)
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx          ← 3D interactive island (Three.js torus knot + particles)
│   │   ├── Navbar.jsx          ← Glassmorphism navbar with mobile menu
│   │   ├── Footer.jsx          ← Multi-column footer with links
│   │   ├── PackageCard.jsx     ← 3D tilt card with glassmorphism & parallax
│   │   ├── TestimonialCard.jsx ← Review cards with star ratings
│   │   ├── GalleryGrid.jsx     ← Masonry gallery with lightbox modal
│   │   ├── ContactForm.jsx     ← Animated inquiry form with package selector
│   │   ├── SectionTitle.jsx    ← Reusable section header component
│   │   └── AnimatedSection.jsx ← Scroll-triggered fade-in wrapper
│   ├── pages/
│   │   ├── Home.jsx            ← 3D hero + featured packages + testimonials + CTA
│   │   ├── Packages.jsx        ← Filterable tour grid (All/Featured/Day Trip/Multi-Day)
│   │   ├── PackageDetail.jsx   ← Full itinerary, pricing, includes/excludes
│   │   ├── About.jsx           ← Company story, stats, core values
│   │   ├── Contact.jsx         ← Contact form + info panel + social links
│   │   └── Gallery.jsx         ← Visual gallery with masonry layout
│   ├── data/
│   │   └── tourPackages.js     ← 6 tour packages with full mock data
│   ├── App.jsx                 ← Lazy-loaded routing with loading screen
│   ├── main.jsx                ← Entry point with BrowserRouter
│   └── index.css               ← Complete design system (variables, glass, animations)
├── index.html
├── package.json
├── vite.config.js
├── CONTEXT.md                  ← This file
└── .gitignore
```

## 🎨 Design System

- **Fonts**: Playfair Display (headings) + Inter (body) — loaded via Google Fonts
- **Colors**: Deep ocean blue (#0a3d62), tropical teal (#1dd1a1), sunset gold (#f6b93b)
- **Gradients**: `--gradient-ocean`, `--gradient-sunset`, `--gradient-night`
- **Glassmorphism**: `.glass` class with backdrop-filter: blur(16px), semi-transparent backgrounds
- **Animations**: float, fadeInUp, shimmer, pulse-glow, gradient-shift keyframes
- **Responsive**: Breakpoints at 1024px, 768px, 480px

## 🚀 Running the Project

```bash
cd ~/Desktop/projects/RAILEY-WEB
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## 📦 Tour Packages (Mock Data)

| # | Package | Duration | Price | Featured |
|---|---|---|---|---|
| 1 | El Nido Paradise Expedition | 3D/2N | ₱8,500 | ✅ |
| 2 | Puerto Princesa Underground River | 1 Day | ₱2,500 | ✅ |
| 3 | Palawan City & Culture Tour | Half Day | ₱1,200 | ❌ |
| 4 | Palawan Ultimate Combo | 5D/4N | ₱15,000 | ✅ |
| 5 | Honda Bay Island Hopping | 1 Day | ₱1,800 | ❌ |
| 6 | Port Barton Escape | 2D/1N | ₱4,500 | ❌ |

## ✅ What Was Built (Session 1 — July 19)

- [x] Initialized Vite + React project with all dependencies
- [x] Copied all images (background, places, additional image) to public/images/
- [x] Created complete CSS design system with glassmorphism, gradients, animations
- [x] Built 3D interactive hero (Three.js torus knot + particle field + mouse parallax)
- [x] Built glassmorphism navbar with scroll effect and mobile hamburger menu
- [x] Built 3D tilt package cards with framer-motion spring physics
- [x] Built masonry gallery with lightbox modal
- [x] Built animated contact form with package selector
- [x] Built all 6 pages (Home, Packages, PackageDetail, About, Contact, Gallery)
- [x] Set up lazy-loaded routing with code-splitting
- [x] Created mock data for 6 tour packages
- [x] Initialized Git repository (3 commits on master)
- [x] Pushed to GitHub: https://github.com/Rosetta-Rigor/railey-web
- [x] Deployed to Vercel (URL shared with client)

## 🔴 Known Issues / Things to Change (For Next Session)

The user explicitly said **"there's a lot of things to change"** — this is the priority for tomorrow:

1. **Review & refine the entire site** — User wasn't fully satisfied with the current state
2. **Potential improvements to discuss**:
   - Content updates (text, images, packages)
   - Design tweaks (colors, layout, animations)
   - Mobile responsiveness improvements
   - Performance optimization
   - SEO improvements
   - Add a backend with Express.js + database (user mentioned this earlier)
3. **Build chunk size warning**: Home page chunk is 836 kB (Three.js heavy) — may need further optimization
4. **GitHub**: Repo is at `github.com/Rosetta-Rigor/railey-web`, remote is set up as `origin`

## 📝 Notes

- The user chose **no backend / no database for now** — will be added later
- User prefers **no SQL** — likely MongoDB or SQLite when DB is added
- The user is familiar with MySQL/PostgreSQL but prefers simpler alternatives
- User's company name: **Railey's Travel and Tours**
- Project path on disk: `C:\Users\Kindred\Desktop\projects\RAILEY-WEB`
- Shell: bash (Windows)
- Node: v24.14.1, npm: 11.11.0, Git: 2.47.1
