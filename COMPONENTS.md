# asightsolutions® Components

Alle Komponenten wurden entsprechend dem minimalistischen Design der Screenshots erstellt.

## Erstellte Komponenten

### 1. LogoSlider.tsx
- Horizontaler Logo-Ticker mit Kundenlogos
- Automatische Animation mit CSS-Ticker
- Minimalistisches Design mit grauen Boxen
- Responsive Layout

### 2. DigitalSolution.tsx  
- 2x2 Grid mit Projektkarten
- Zeigt CRYPTAX, RMentiX, M365, Mastermali
- Geometric Icons/Logos
- Hover-Effekte

### 3. Services.tsx
- Services Section mit expandierbaren Items
- Türkiser Gradient-Hintergrund
- Accordion-Funktionalität
- 4 Hauptservices

### 4. Stats.tsx
- Stats mit Bild links und Zahlen rechts
- "Why choose us" Section
- 50+ Projekte, 98% Zufriedenheit
- Clean Layout mit viel Whitespace

### 5. About.tsx
- About Section mit 4 Prozess-Schritten
- Schritt-Indikatoren mit Punkten
- Icons für jeden Schritt
- Responsive Grid

### 6. Testimonials.tsx
- Testimonial Karten mit Bewertungen
- 4.9 Sterne Bewertung
- Kundenfotos und Zitate
- Stats am Ende

### 7. CaseStudy.tsx
- Case Study mit SEO Metriken
- Komplexe türkise Karte
- Performance Boost Zahlen
- Charts und Grafiken

### 8. Team.tsx
- Team Grid mit 4 Personen
- Hover-Overlays mit Namen
- "Be part of our mission" CTA
- 2x2 Grid Layout

### 9. FAQ.tsx
- FAQ Accordion
- 6 häufige Fragen
- Expand/Collapse Funktionalität
- Clean Design

### 10. CTA.tsx
- CTA mit Kontaktformular
- Türkiser Gradient-Hintergrund
- Kontaktinformationen links
- Vollständiges Formular rechts

### 11. Footer.tsx
- Minimaler Footer
- Kontaktdaten, Navigation, Social Links
- Großes asight® Logo
- Türkiser Copyright-Bereich

## Design-Prinzipien

- **Schwarz-Weiß Design** mit Grautönen als Basis
- **Türkise Akzente** nur wo nötig (#3AA6B9, #06B6D4)
- **Sehr große Headlines** mit font-weight 200-300
- **Viel Whitespace** für cleanes Layout
- **Minimalistisch** - keine komplexen Animationen
- **Simple Hover-Effekte** für Interaktivität

## Verwendung

```tsx
import {
  LogoSlider,
  DigitalSolution,
  Services,
  Stats,
  About,
  Testimonials,
  CaseStudy,
  Team,
  FAQ,
  CTA,
  Footer
} from '../components'

export default function Page() {
  return (
    <main>
      <LogoSlider />
      <DigitalSolution />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <CaseStudy />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
```

## Demo

Alle Komponenten können unter `/demo` betrachtet werden.

## CSS Klassen

Die globalen CSS-Klassen in `globals.css` unterstützen:
- `.container` - Max-width mit Padding
- `.section` - Standard Section Padding
- `.headline-xl`, `.headline-lg`, `.headline-md` - Responsive Headlines
- `.grid-2x2` - 2x2 Grid Layout
- `.ticker` - Animation für Logo-Slider