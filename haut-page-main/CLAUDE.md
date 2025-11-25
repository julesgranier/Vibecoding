# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Package Management
This project uses multiple package managers (npm, pnpm, bun). The primary package manager is **pnpm** (as specified in package.json), but npm and bun lock files are also present. When installing dependencies, prefer pnpm:
- `pnpm install` - Install dependencies
- `pnpm add <package>` - Add new dependency

## Project Architecture

### Tech Stack
- **Vite** + **React 18** + **TypeScript** - Core framework
- **React Router DOM** - Client-side routing
- **shadcn/ui** - UI component library built on Radix UI primitives
- **Tailwind CSS** - Styling framework with CSS variables for theming
- **TanStack Query** - Server state management
- **Lovable** - Development platform integration

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (auto-generated)
│   └── [other].tsx     # Custom app components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utilities (cn function for className merging)
└── main.tsx            # App entry point
```

### Routing
The app uses React Router with these routes:
- `/` - Home page (Index component)
- `/events/:id` - Event detail page
- `*` - 404 Not Found page

**Important**: All custom routes must be added ABOVE the catch-all `*` route in App.tsx.

### Component Architecture
- **shadcn/ui components**: Located in `src/components/ui/`, these are auto-generated and should not be manually edited
- **Custom components**: Follow the existing pattern of importing from `@/components/[ComponentName]`
- **Page components**: Located in `src/pages/` and handle route-level logic
- **Layout**: Uses responsive design with Tailwind breakpoints (`max-md`, `max-lg`, etc.)

### Styling Conventions
- Uses Tailwind CSS with CSS custom properties for theming
- Components use the `cn()` utility from `@/lib/utils` for conditional className merging
- Dark mode support via `class` strategy
- Responsive design follows mobile-first approach with max-width breakpoints

### Import Aliases
- `@/` - Points to `src/` directory
- `@/components` - Component directory
- `@/lib` - Utilities directory
- `@/hooks` - Custom hooks directory

### Key Dependencies
- All Radix UI primitives are available for building accessible components
- Lucide React for icons
- React Hook Form + Zod for form handling and validation
- Date-fns for date manipulation
- Recharts for data visualization

### Development Notes
- Development server runs on port 8080 with IPv6 support
- Lovable tagger plugin is enabled in development mode for component identification
- TypeScript configuration uses strict mode with path mapping
- ESLint is configured for React best practices