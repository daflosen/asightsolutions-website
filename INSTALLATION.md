# Lokale Installation der asightsolutions Website

## Schritt 1: Neues Next.js Projekt erstellen

Öffne dein Terminal auf deinem lokalen Computer und führe aus:

```bash
npx create-next-app@latest asightsolutions --typescript --tailwind --app --no-src-dir
```

Bei den Fragen wähle:
- TypeScript: Yes
- ESLint: Yes 
- Tailwind CSS: Yes
- src/ directory: No
- App Router: Yes
- Import alias: Yes (default @/*)

## Schritt 2: In das Projekt wechseln

```bash
cd asightsolutions
```

## Schritt 3: Die erstellten Dateien kopieren

Ersetze die folgenden Dateien mit dem Code unten:

### app/page.tsx
Kopiere den kompletten Code aus: `/mnt/re-shared/E-Commerce/06_Darstellung_im_Web/05_AS-Solutions/app/page.tsx`

### app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #000;
  background: #fff;
}
```

### app/layout.tsx
```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'asightsolutions® - Digital Growth',
  description: 'Digital solutions and strategies that help your processes thrive and your business grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### tailwind.config.ts
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3AA6B9',
        'primary-dark': '#2C8A94',
      },
    },
  },
  plugins: [],
}

export default config
```

## Schritt 4: Development Server starten

```bash
npm run dev
```

Die Website läuft dann auf http://localhost:3000

## Optionale Verbesserungen

### Inter Font hinzufügen

In `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Im body tag:
<body className={inter.className}>{children}</body>
```

### Animationen hinzufügen

```bash
npm install framer-motion
```

Dann kannst du Animationen zu den Komponenten hinzufügen.

## Fertig!

Die Website sollte jetzt lokal laufen mit:
- Hero Section mit Gradient
- Logo Slider  
- Digital Solution Grid
- Services Section
- Stats Section
- Footer

Alle Sektionen sind responsive und nutzen das minimalistische Design der Template.