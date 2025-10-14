# Quick Start Guide - asightsolutions

Schnelleinstieg für das Deployment der asightsolutions Website.

## 1-Minute Setup (Development)

```bash
# 1. SSL-Zertifikat erstellen (self-signed)
./scripts/setup-ssl.sh
# → Option 1 wählen

# 2. Server starten
./scripts/deploy.sh deploy

# 3. Website öffnen
# → http://localhost:3000 (direkt)
# → https://localhost (via Nginx)
```

**Fertig!** Die Website läuft jetzt lokal.

---

## Production Deployment

### Voraussetzungen

- Server mit Docker und Docker Compose
- Domain (z.B. asightsolutions.com)
- DNS-Records konfiguriert (A-Record → Server-IP)

### Setup (5 Minuten)

```bash
# 1. Repository klonen
git clone <repository-url>
cd asightsolutions

# 2. Environment-Datei erstellen
cp .env.example .env
nano .env  # Domain anpassen

# 3. Nginx-Domain konfigurieren
nano nginx/nginx.conf
# server_name auf echte Domain setzen

# 4. Let's Encrypt SSL einrichten
./scripts/setup-ssl.sh
# → Option 3 wählen (Let's Encrypt via Docker)

# 5. Deployment starten
./scripts/deploy.sh deploy

# 6. Testen
curl https://asightsolutions.com
```

**Fertig!** Die Website ist live.

---

## Wichtige Befehle

```bash
# Services starten
./scripts/deploy.sh start

# Services stoppen
./scripts/deploy.sh stop

# Services neu starten
./scripts/deploy.sh restart

# Logs anzeigen
./scripts/deploy.sh logs

# Status prüfen
./scripts/deploy.sh status

# Alles neu bauen
./scripts/deploy.sh rebuild

# Cleanup (Alles löschen)
./scripts/deploy.sh clean
```

---

## Troubleshooting

### Container startet nicht

```bash
# Logs prüfen
./scripts/deploy.sh logs

# Neu bauen und starten
./scripts/deploy.sh rebuild
```

### Port bereits belegt

```bash
# Prozess finden und beenden
sudo lsof -i :80
sudo lsof -i :443
sudo lsof -i :3000
sudo kill <PID>

# Oder andere Ports in docker-compose.yml nutzen
```

### SSL-Fehler

```bash
# Zertifikate neu erstellen
./scripts/setup-ssl.sh

# Nginx neu starten
./scripts/deploy.sh restart
```

---

## Nächste Schritte

- **Vollständige Doku**: Siehe [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Monitoring**: Logs regelmäßig prüfen
- **Backups**: Automatische Backups einrichten
- **Updates**: Bei Code-Änderungen `./scripts/deploy.sh rebuild` ausführen

---

**Dokumentation**
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Vollständige Deployment-Anleitung
- [CLAUDE.md](./CLAUDE.md) - Projekt-Übersicht
- [README.md](./README.md) - Allgemeine Informationen
