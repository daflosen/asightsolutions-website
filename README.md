# asightsolutions - Marketing Website

Eine moderne Marketing-Website gebaut mit Next.js 14, React 19, TypeScript und Tailwind CSS 4.

## Übersicht

Dieses Projekt ist eine vollständig responsive Marketing-Website mit:

- **Framework**: Next.js 14.2.5 mit App Router
- **UI**: React 19, Tailwind CSS 4, Framer Motion
- **TypeScript**: Strict mode enabled
- **Deployment**: Docker + Nginx mit SSL-Support
- **Animationen**: Framer Motion für alle Übergänge
- **Styling**: Custom Teal-Farbschema

## Quick Start

### Development (Lokal)

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build erstellen
npm run build

# Production Server lokal starten
npm start
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Production (Docker)

**Schnellstart (1 Minute):**

```bash
# SSL-Zertifikat erstellen
./scripts/setup-ssl.sh  # Option 1 für Development

# Server starten
./scripts/deploy.sh deploy
```

**Zugriff:**
- Direct: http://localhost:3000
- Via Nginx: https://localhost

**Weitere Informationen:**
- [QUICKSTART.md](./QUICKSTART.md) - 1-Minute Setup Guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Vollständige Deployment-Anleitung

## Projektstruktur

```
asightsolutions/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Hauptseite
│   └── globals.css        # Globale Styles
├── components/
│   ├── sections/          # Seiten-Sektionen (Hero, About, etc.)
│   ├── ui/                # Wiederverwendbare UI-Komponenten
│   └── common/            # Gemeinsame Komponenten (Navigation)
├── public/                # Statische Assets
├── scripts/               # Deployment-Scripts
│   ├── deploy.sh         # Haupt-Deployment-Script
│   └── setup-ssl.sh      # SSL-Setup
├── nginx/                 # Nginx-Konfiguration
│   └── nginx.conf        # Reverse Proxy Config
├── Dockerfile            # Multi-Stage Production Build
├── docker-compose.yml    # Service-Orchestrierung
└── next.config.ts        # Next.js Konfiguration
```

## Features

### Design & UX
- Vollständig responsive für alle Bildschirmgrößen
- Moderne Scroll-Animationen mit Framer Motion
- Custom Teal-Farbschema
- Inter Font mit optimierter Ladezeit
- Optimierte Bilder (AVIF, WebP)

### Performance
- Multi-Stage Docker Build für minimale Image-Größe
- Nginx Reverse Proxy mit Caching
- Next.js Standalone-Output
- Optimierte Fonts und Bilder
- Gzip-Kompression

### Security
- HTTPS/SSL Support (Let's Encrypt oder Self-Signed)
- Security Headers (HSTS, X-Frame-Options, etc.)
- Rate Limiting
- Non-Root Docker User

## Deployment-Scripts

### deploy.sh

Hauptscript für alle Deployment-Operationen:

```bash
./scripts/deploy.sh deploy    # Vollständiges Deployment
./scripts/deploy.sh start     # Services starten
./scripts/deploy.sh stop      # Services stoppen
./scripts/deploy.sh restart   # Services neu starten
./scripts/deploy.sh rebuild   # Neu bauen und deployen
./scripts/deploy.sh logs      # Logs anzeigen
./scripts/deploy.sh status    # Status prüfen
./scripts/deploy.sh clean     # Cleanup
```

### setup-ssl.sh

SSL-Zertifikate einrichten:

```bash
./scripts/setup-ssl.sh              # Interaktives Setup
./scripts/setup-ssl.sh yourdomain.com  # Mit spezifischer Domain
```

Optionen:
1. Self-Signed Certificate (Development)
2. Let's Encrypt (lokale Certbot-Installation)
3. Let's Encrypt via Docker (empfohlen für Production)
4. Certificate Info anzeigen

## Environment Variables

Erstelle eine `.env` Datei (siehe `.env.example`):

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
DOMAIN=asightsolutions.com
NEXT_PUBLIC_SITE_URL=https://asightsolutions.com
```

## Development

### Wichtige Befehle

```bash
npm run dev      # Development Server mit Turbopack
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint prüfen
```

### Code-Änderungen

- **Komponenten**: Neue Komponenten in `components/sections/` oder `components/ui/`
- **Styles**: Tailwind-Klassen verwenden, Custom-Config in `tailwind.config.ts`
- **Animationen**: Framer Motion für Scroll-Animationen

### TypeScript

- Strict Mode ist aktiviert
- Path Alias `@/*` für Root-Imports

## Production Deployment

### Voraussetzungen

- Server mit Docker und Docker Compose
- Domain mit DNS-Records (A-Record → Server-IP)
- Ports 80, 443, 3000 offen

### Setup

```bash
# 1. Repository klonen
git clone <repository-url>
cd asightsolutions

# 2. Environment konfigurieren
cp .env.example .env
nano .env  # Anpassen

# 3. Nginx-Domain konfigurieren
nano nginx/nginx.conf  # server_name anpassen

# 4. SSL einrichten
./scripts/setup-ssl.sh  # Option 3 (Let's Encrypt via Docker)

# 5. Deployen
./scripts/deploy.sh deploy

# 6. Verifizieren
curl https://yourdomain.com
```

Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für detaillierte Anleitung.

## Monitoring & Wartung

### Logs

```bash
# Alle Logs
./scripts/deploy.sh logs

# Nur Web-Service
docker-compose logs -f web

# Nur Nginx
docker-compose logs -f nginx
```

### Health Checks

```bash
# Next.js direkt
curl http://localhost:3000

# Via Nginx
curl https://localhost
```

### Updates

```bash
# Code aktualisieren
git pull origin main

# Neu deployen
./scripts/deploy.sh rebuild
```

## Troubleshooting

### Container startet nicht
```bash
./scripts/deploy.sh logs
./scripts/deploy.sh rebuild
```

### Port bereits belegt
```bash
sudo lsof -i :80
sudo lsof -i :443
sudo lsof -i :3000
sudo kill <PID>
```

### SSL-Fehler
```bash
./scripts/setup-ssl.sh
./scripts/deploy.sh restart
```

Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für weitere Troubleshooting-Tipps.

## Dokumentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Schnellstart-Guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Vollständige Deployment-Dokumentation
- **[CLAUDE.md](./CLAUDE.md)** - Claude Code Projekt-Instruktionen

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **TypeScript**: [TypeScript 5](https://www.typescriptlang.org/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Reverse Proxy**: [Nginx](https://nginx.org/)

## Browser-Support

- Chrome/Edge (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

Proprietary - Alle Rechte vorbehalten

## Support

Bei Fragen oder Problemen:
1. Logs prüfen: `./scripts/deploy.sh logs`
2. Dokumentation konsultieren
3. GitHub Issues erstellen
