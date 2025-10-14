# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 marketing website for asightsolutions, a digital solutions company. The project uses the App Router architecture with React 19, TypeScript, and Tailwind CSS 4.

## Essential Commands

### Development
```bash
npm run dev      # Start development server with Turbopack on http://localhost:3000
npm run build    # Create production build with Turbopack
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## Architecture

### Component Organization
The codebase follows a section-based component architecture:

- `app/` - Next.js App Router with main page and layout
- `components/sections/` - Main page sections (Hero, About, Services, Team, etc.)
- `components/ui/` - Reusable UI components
- `components/common/` - Shared components like Navigation

### Key Technical Decisions

1. **Styling**: Tailwind CSS with custom configuration including:
   - Custom teal color scheme (`teal-600`, `teal-700`, `teal-800`)
   - Custom animations (`scroll`, `fade-up`, `fade-in`)
   - Uses `clsx` and `tailwind-merge` for conditional styling

2. **Animations**: Framer Motion for all animations and transitions

3. **TypeScript**: Strict mode enabled with path alias `@/*` mapping to project root

4. **State Management**: Currently using React's built-in state (no Redux/Zustand)

5. **Typography - Inter Font Configuration**:
   - **CRITICAL**: Inter font MUST be loaded via both methods for correct rendering:
     1. Google Fonts import in `app/globals.css`: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`
     2. Next.js Font optimization in `app/layout.tsx`: Import Inter from 'next/font/google' and apply to body
   - **Font Weights Used**:
     - 400 (Regular) - Body text, paragraphs
     - 500 (Medium) - Paragraph text in FAQ answers
     - 600 (Semibold) - Headings, FAQ titles, questions
     - 700 (Bold) - Major headings
   - **FAQ Section Specific**:
     - "FAQ." heading: Inter Semibold (600), 144px
     - Questions: Inter Semibold (600)
     - Answers: Inter Regular (400)
     - Subtitle: Inter Regular (400)
   - **Why Both Methods**: The dual loading ensures Inter renders correctly across all browsers and prevents fallback to system fonts (which would cause visual differences like curved vs straight Q tails)

### Important Files to Know

- `tailwind.config.ts` - Custom theme configuration with animations and colors
- `app/layout.tsx` - Root layout with metadata and font configuration
- `app/page.tsx` - Main page orchestrating all section components
- `components/sections/Hero.tsx` - Complex animated hero with rotating service descriptions

## Development Notes

### When modifying components:
- All sections use Framer Motion for scroll animations
- Follow existing animation patterns (fade-up, fade-in)
- Maintain the teal color scheme throughout

### When adding new sections:
- Place in `components/sections/`
- Import and add to `app/page.tsx`
- Use consistent Framer Motion animations
- Follow TypeScript strict mode requirements

### Current Limitations:
- No test suite configured
- No API routes implemented
- No database connections
- Static content only (no CMS integration)