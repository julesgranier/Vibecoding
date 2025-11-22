# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Legacy AI** - A landing page for an AI-powered documentary creation service that transforms personal photos, videos, and memories into cinematic documentaries.

## Commands

### Development
```bash
npm run dev
```
Starts Vite development server with HMR (Hot Module Replacement).
- Default: `http://localhost:5173/` (auto-increments if port is busy)
- Changes to HTML, CSS, and JS are automatically reloaded
- **Note**: Color scheme from Design System is automatically applied to `styles.css`

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Installation
```bash
npm install
```
Installs Vite v7.2.4 (only dev dependency).

## Architecture

### Tech Stack
- **Build Tool**: Vite v7.2.4
- **Module Type**: CommonJS
- **Stack**: Vanilla HTML/CSS/JS (no framework)

### File Structure
- `index.html` - Single-page landing with semantic HTML sections
- `styles.css` - Complete styling with CSS custom properties
- `script.js` - Vanilla JS for interactivity and animations

### Design System

**IMPORTANT: The primary brand color is ORANGE (#ff6b35). This orange color MUST be used throughout the design.**

**Color Palette** (CSS Custom Properties in `:root`):
- `--primary-color: #ff6b35` - Orange (main brand color - USE THIS)
- `--primary-dark: #e85a2c` - Dark orange (hover states)
- `--secondary-color: #1f2937` - Dark gray (accents, gradients)
- `--bg-white: #ffffff` - White (main background)
- `--bg-light: #f9fafb` - Light gray (section backgrounds)
- `--text-dark: #1f2937` - Dark gray (body text)
- `--text-light: #6b7280` - Medium gray (secondary text)
- `--border-color: #e5e7eb` - Light gray (borders)

**Typography**:
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**Key Components**:
- Gradient text effect used for branding (primary → secondary)
- Sticky navigation with scroll effects
- Responsive grid layouts (auto-fit minmax pattern)
- Card-based feature presentations
- Hover animations and transitions

### JavaScript Architecture

**Core Features**:
1. **Smooth Scrolling** - Navigation links with smooth scroll behavior
2. **Scroll Effects** - Dynamic navbar shadow based on scroll position
3. **Intersection Observer** - Fade-in animations for cards/sections
4. **Counter Animations** - Animated stats in hero section
5. **Ripple Effects** - Button click feedback
6. **Mobile Menu** - Responsive hamburger menu (< 768px)

**Animation Pattern**:
- Elements start with `opacity: 0` and `translateY(30px)`
- IntersectionObserver triggers fade-in on viewport entry
- Uses CSS transitions for smooth animations

### Page Sections (in order)
1. Navigation - Sticky header with brand and links
2. Hero - Main value proposition with CTA and stats
3. Features - 6-card grid explaining product capabilities
4. How It Works - 4-step process walkthrough
5. Examples - Sample documentary cards with play buttons
6. Testimonials - 3-column social proof
7. Pricing - 3-tier pricing cards (Essential, Premium, Legacy)
8. Final CTA - Conversion-focused call-to-action
9. Footer - Multi-column links and copyright

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Grid layouts collapse to single column on mobile
- Navigation becomes hamburger menu on mobile
- Typography scales down for smaller screens

## Development Notes

- All interactivity is handled with vanilla JavaScript (no dependencies)
- Animations use CSS transitions triggered by IntersectionObserver
- Button clicks log to console (placeholders for real functionality)
- Play buttons show alert (demo only - would open video modal in production)
- Forms not yet implemented (email validation function exists for future use)
