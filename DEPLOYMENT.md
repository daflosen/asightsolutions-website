# Deployment Guide - asightsolutions

Dieses Dokument beschreibt, wie du das asightsolutions Next.js Projekt auf verschiedenen Servern deployen kannst.

## Voraussetzungen

- Docker und Docker Compose installiert
- Git für Repository-Management
- (Optional) Domain und SSL-Zertifikate für HTTPS

## Deployment-Optionen

### Option 1: Einfaches Docker Deployment (nur Next.js)

Ideal für Entwicklung und Testing ohne HTTPS.

```bash
# 1. Repository klonen
git clone <your-repo-url>
cd asightsolutions

# 2. Docker Image bauen
docker build -t asightsolutions-web .

# 3. Container starten
docker run -d \
  --name asightsolutions \
  -p 3000:3000 \
  --restart unless-stopped \
  asightsolutions-web

# Website ist jetzt erreichbar unter: http://localhost:3000
```

### Option 2: Docker Compose (empfohlen für Produktion)

Beinhaltet Next.js + Nginx mit HTTPS-Support.

```bash
# 1. Repository klonen
git clone <your-repo-url>
cd asightsolutions

# 2. SSL-Zertifikate vorbereiten (siehe unten)
mkdir -p nginx/ssl

# 3. Alle Services starten
docker-compose up -d

# 4. Logs ansehen
docker-compose logs -f

# 5. Services stoppen
docker-compose down
```

## SSL/HTTPS Einrichtung

### Option A: Let's Encrypt (kostenlos, automatisch)

```bash
# 1. Certbot installieren
sudo apt update
sudo apt install certbot

# 2. Zertifikat erstellen
sudo certbot certonly --standalone -d asightsolutions.com -d www.asightsolutions.com

# 3. Zertifikate in nginx/ssl kopieren
sudo cp /etc/letsencrypt/live/asightsolutions.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/asightsolutions.com/privkey.pem nginx/ssl/

# 4. Berechtigungen setzen
sudo chmod 644 nginx/ssl/*.pem
```

### Option B: Self-Signed Certificates (nur für Testing)

```bash
# Self-signed Zertifikat erstellen
mkdir -p nginx/ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/ssl/privkey.pem \
  -out nginx/ssl/fullchain.pem \
  -subj "/C=DE/ST=State/L=City/O=Organization/CN=asightsolutions.com"
```

## Nginx Konfiguration anpassen

Bearbeite `nginx/nginx.conf` und ersetze:
- `asightsolutions.com` mit deiner Domain
- `www.asightsolutions.com` mit deiner www-Subdomain

## Produktion auf VPS/Cloud Server

### 1. Server-Vorbereitung

```bash
# Docker installieren (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Docker Compose installieren
sudo apt install docker-compose-plugin

# User zu Docker-Gruppe hinzufügen
sudo usermod -aG docker $USER
```

### 2. Firewall-Regeln

```bash
# UFW Firewall konfigurieren
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### 3. Deployment

```bash
# Als normaler User (nicht root)
cd /home/developer/projects
git clone <your-repo-url>
cd asightsolutions

# SSL-Zertifikate einrichten (siehe oben)

# Services starten
docker-compose up -d

# Status prüfen
docker-compose ps
docker-compose logs -f web
```

### 4. Automatische Updates einrichten

Erstelle ein Update-Script `update.sh`:

```bash
#!/bin/bash
cd /home/developer/projects/asightsolutions

# Neueste Änderungen holen
git pull origin main

# Images neu bauen
docker-compose build --no-cache

# Services neu starten
docker-compose down
docker-compose up -d

# Alte Images aufräumen
docker image prune -f

echo "Deployment abgeschlossen!"
```

Ausführbar machen:
```bash
chmod +x update.sh
```

## Monitoring & Wartung

### Logs ansehen

```bash
# Alle Logs
docker-compose logs -f

# Nur Next.js App
docker-compose logs -f web

# Nur Nginx
docker-compose logs -f nginx

# Letzte 100 Zeilen
docker-compose logs --tail=100
```

### Container-Status prüfen

```bash
# Status aller Container
docker-compose ps

# Ressourcenverbrauch
docker stats

# Health-Check
curl http://localhost:3000
```

### Backup & Restore

```bash
# Backup des gesamten Projekts
tar -czf asightsolutions-backup-$(date +%Y%m%d).tar.gz \
  /home/developer/projects/asightsolutions

# Restore
tar -xzf asightsolutions-backup-YYYYMMDD.tar.gz -C /
```

## Performance-Optimierung

### 1. Build-Optimierung

Das Dockerfile verwendet Multi-Stage-Builds für:
- Kleinere Image-Größe
- Schnellere Build-Zeiten
- Bessere Sicherheit (keine Dev-Dependencies in Production)

### 2. Nginx-Caching

Die Nginx-Konfiguration beinhaltet:
- Gzip-Kompression
- Static-File-Caching (1 Jahr für _next/static)
- Image-Caching (30 Tage)
- Rate-Limiting (10 Anfragen/Sekunde)

### 3. Next.js Optimierungen

In `next.config.ts` aktiviert:
- Standalone-Output (kleinere Docker-Images)
- AVIF/WebP Bild-Optimierung
- Response-Kompression

## Troubleshooting

### Container startet nicht

```bash
# Logs prüfen
docker-compose logs web

# Container neu bauen
docker-compose build --no-cache web
docker-compose up -d
```

### Port bereits belegt

```bash
# Port-Belegung prüfen
sudo lsof -i :3000
sudo lsof -i :80

# In docker-compose.yml andere Ports verwenden:
# "8080:80" statt "80:80"
```

### Nginx kann nicht auf Next.js zugreifen

```bash
# Netzwerk-Verbindung prüfen
docker network inspect asightsolutions_app-network

# Container neu starten
docker-compose restart
```

### SSL-Zertifikat-Fehler

```bash
# Zertifikate prüfen
openssl x509 -in nginx/ssl/fullchain.pem -text -noout

# Berechtigungen prüfen
ls -la nginx/ssl/
```

## Umgebungsvariablen

Erstelle eine `.env` Datei für Produktions-Einstellungen:

```env
# .env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Optional: Custom Port
PORT=3000

# Optional: Custom Domain
DOMAIN=asightsolutions.com
```

Referenziere in `docker-compose.yml`:

```yaml
services:
  web:
    env_file:
      - .env
```

## Checkliste für Production-Deployment

- [ ] SSL-Zertifikate eingerichtet
- [ ] Domain DNS-Records konfiguriert (A/AAAA zu Server-IP)
- [ ] Firewall-Regeln gesetzt
- [ ] Docker und Docker Compose installiert
- [ ] `.env` Datei mit Produktions-Einstellungen erstellt
- [ ] Nginx-Domain in `nginx.conf` angepasst
- [ ] Services mit `docker-compose up -d` gestartet
- [ ] Health-Check erfolgreich: `curl https://asightsolutions.com`
- [ ] Logs auf Fehler geprüft
- [ ] Backup-Strategie implementiert

## Nützliche Befehle

```bash
# Services neu starten
docker-compose restart

# Nur Next.js neu bauen und starten
docker-compose up -d --build web

# Alle Container stoppen und entfernen
docker-compose down

# Alle Container, Volumes und Images entfernen
docker-compose down -v --rmi all

# In laufenden Container einsteigen
docker exec -it asightsolutions-web sh

# Nginx-Konfiguration testen
docker exec asightsolutions-nginx nginx -t

# Nginx neu laden
docker exec asightsolutions-nginx nginx -s reload
```

## Support & Kontakt

Bei Fragen oder Problemen:
1. Logs prüfen: `docker-compose logs -f`
2. GitHub Issues erstellen
3. Dokumentation konsultieren: https://nextjs.org/docs

---

**Stand:** $(date +%Y-%m-%d)
**Version:** 1.0.0
