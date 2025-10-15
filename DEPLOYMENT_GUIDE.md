# 🚀 Deployment Guide: asightsolutions auf Vercel

**Deployment-Strategie:** GitHub → Vercel (Automatisches Deployment bei jedem Push)

---

## 📋 Schritt-für-Schritt Anleitung

### **Schritt 1: GitHub Repository erstellen**

#### 1.1 Bei GitHub einloggen
- Gehen Sie zu [github.com](https://github.com)
- Klicken Sie auf das "+" Icon → "New repository"

#### 1.2 Repository konfigurieren
```
Repository name: asightsolutions
Description: Next.js 15 marketing website for asightsolutions
Visibility: Private (empfohlen) oder Public
✅ NICHT initialisieren mit README/License/gitignore
```

#### 1.3 Repository URL notieren
```
https://github.com/IHR-USERNAME/asightsolutions.git
```

---

### **Schritt 2: Lokalen Code zu GitHub pushen**

```bash
# Im Projektverzeichnis ausführen
cd /home/developer/projects/asightsolutions

# 1. Aktuellen Git Status prüfen
git status

# 2. .env zur .gitignore hinzufügen (falls noch nicht vorhanden)
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore

# 3. Alle Änderungen stagen
git add .

# 4. Commit erstellen
git commit -m "Initial commit: Production-ready Next.js website with animations and branding"

# 5. GitHub als Remote hinzufügen (ersetzen Sie IHR-USERNAME)
git remote add github https://github.com/IHR-USERNAME/asightsolutions.git

# 6. Main Branch pushen
git branch -M main
git push -u github main
```

**Alternative:** Falls Sie bereits ein Azure DevOps Remote haben:
```bash
# Zweites Remote hinzufügen (beide parallel möglich)
git remote add github https://github.com/IHR-USERNAME/asightsolutions.git
git push github main
```

---

### **Schritt 3: Vercel Account einrichten**

#### 3.1 Bei Vercel registrieren/einloggen
- Gehen Sie zu [vercel.com](https://vercel.com)
- Klicken Sie auf "Sign Up" oder "Login"
- **Wichtig:** "Continue with GitHub" wählen (automatische Integration)

#### 3.2 GitHub Permissions erteilen
- Vercel fragt nach GitHub-Zugriff
- Erlauben Sie Zugriff auf Ihre Repositories
- Sie können einzelne Repos auswählen oder alle freigeben

---

### **Schritt 4: Projekt in Vercel deployen**

#### 4.1 Neues Projekt erstellen
1. Im Vercel Dashboard: "Add New..." → "Project"
2. GitHub Repository "asightsolutions" auswählen
3. Klicken Sie auf "Import"

#### 4.2 Build-Einstellungen konfigurieren

Vercel erkennt Next.js automatisch. Folgende Settings sollten voreingestellt sein:

```
Framework Preset:     Next.js
Root Directory:       ./
Build Command:        npm run build
Output Directory:     .next
Install Command:      npm install
Node Version:         20.x (automatisch)
```

**Keine Änderungen nötig** - einfach bestätigen!

#### 4.3 Environment Variables (optional)

Aktuell benötigt Ihr Projekt keine Environment Variables.

Falls später benötigt:
- Settings → Environment Variables
- Key/Value eingeben
- Für Production, Preview, Development auswählen

#### 4.4 Deploy starten
- Klicken Sie auf "Deploy"
- Vercel buildet und deployt automatisch
- Build-Logs werden live angezeigt
- Dauer: ca. 2-3 Minuten

---

### **Schritt 5: Deployment verifizieren**

#### 5.1 Vercel URL testen
Nach erfolgreichem Deployment erhalten Sie eine URL:
```
https://asightsolutions.vercel.app
oder
https://asightsolutions-xyz123.vercel.app
```

#### 5.2 Checklist
- [ ] Website lädt korrekt
- [ ] Alle Bilder werden angezeigt
- [ ] Counter-Animationen funktionieren (CaseStudy, Testimonials)
- [ ] Navigation funktioniert
- [ ] Mobile Ansicht testen (Developer Tools → Responsive Mode)

---

### **Schritt 6: Custom Domain konfigurieren**

#### 6.1 Domain in Vercel hinzufügen

1. Im Vercel Dashboard: Ihr Projekt öffnen
2. Settings → Domains
3. "Add Domain" klicken
4. Ihre Domain eingeben (z.B. `asightsolutions.com`)
5. Bestätigen

#### 6.2 Vercel zeigt DNS-Einträge

Vercel gibt Ihnen die DNS-Records, die Sie setzen müssen:

**Für Root Domain (asightsolutions.com):**
```
Type:  A
Name:  @
Value: 76.76.21.21
```

**Für WWW Subdomain (www.asightsolutions.com):**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
```

**Alternative (empfohlen):** Vercel Nameservers verwenden
```
Vercel zeigt eigene Nameserver an, z.B.:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

### **Schritt 7: DNS beim Domain-Provider konfigurieren**

#### 7.1 Beim Domain-Provider einloggen
Je nach Provider (z.B. Namecheap, GoDaddy, Strato, IONOS):

1. Domain-Verwaltung öffnen
2. DNS-Einstellungen/DNS-Zone öffnen

#### 7.2 DNS-Records setzen

**Option A: A-Record + CNAME (Standard)**

Bestehende Records für `@` und `www` löschen/ersetzen:

| Type  | Name/Host | Value/Target          | TTL  |
|-------|-----------|----------------------|------|
| A     | @         | 76.76.21.21          | 3600 |
| CNAME | www       | cname.vercel-dns.com | 3600 |

**Option B: Vercel Nameservers (empfohlen für volle Kontrolle)**

Ersetzen Sie die Nameservers Ihres Providers durch Vercels:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Vorteile:**
- Vercel übernimmt komplette DNS-Verwaltung
- Automatische SSL-Erneuerung
- Schnellere Propagation

#### 7.3 Änderungen speichern

**Wichtig:** DNS-Propagation kann 24-48 Stunden dauern (meist schneller: 1-4 Stunden)

---

### **Schritt 8: SSL/HTTPS verifizieren**

#### 8.1 Automatische SSL-Aktivierung
- Vercel aktiviert **automatisch** Let's Encrypt SSL
- Sobald DNS propagiert ist, wird das Zertifikat ausgestellt
- Keine manuelle Konfiguration nötig!

#### 8.2 Status prüfen
In Vercel Dashboard:
- Settings → Domains
- Status sollte "Valid Configuration" zeigen
- SSL-Badge sollte grün sein

#### 8.3 Website testen
```
https://asightsolutions.com     ← Sollte funktionieren
https://www.asightsolutions.com ← Sollte funktionieren
```

Beide URLs sollten mit HTTPS erreichbar sein!

---

## 🔄 Automatische Deployments

**Jeder Git Push triggert ein neues Deployment:**

```bash
# Änderungen machen
git add .
git commit -m "Update hero section"
git push github main

# Vercel deployed automatisch
# Sie erhalten eine E-Mail bei erfolgreichem Deployment
# Preview-URL wird in GitHub PR angezeigt (bei Pull Requests)
```

**Deployment-Typen:**
- **Production:** Push zu `main` Branch → asightsolutions.com
- **Preview:** Pull Requests → temporäre Preview-URL
- **Development:** Branch-Pushes → Preview-Deployments

---

## 🛠️ Wichtige Vercel-Features

### **1. Build Logs**
- Dashboard → Deployments → Build Details
- Zeigt alle Build-Fehler und Warnings

### **2. Analytics (Optional)**
- Settings → Analytics aktivieren
- Zeigt Besucherzahlen, Performance-Metriken

### **3. Environment Variables**
- Settings → Environment Variables
- Für API-Keys, Database URLs etc.

### **4. Redirects & Rewrites**
- Über `next.config.js` konfigurierbar
- Oder in Vercel Dashboard: Settings → Redirects

---

## ✅ Pre-Deployment Checklist

Vor dem finalen Deployment prüfen:

- [ ] `npm run build` läuft lokal ohne Fehler
- [ ] `npm run start` zeigt Produktions-Build korrekt
- [ ] Alle Bilder sind im `public/` Ordner
- [ ] `.env` ist in `.gitignore`
- [ ] Keine Secrets im Code hardcodiert
- [ ] Alle Links funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Browser-Kompatibilität getestet (Chrome, Safari, Firefox)

---

## 🆘 Troubleshooting

### **Problem: Build schlägt fehl**
```bash
# Lokal testen
npm run build

# Vercel Build Logs prüfen
Dashboard → Deployments → Failed Build → View Function Logs
```

### **Problem: Bilder werden nicht angezeigt**
- Pfade mit `/images/...` verwenden (nicht `./images/...`)
- Sicherstellen, dass Bilder in `public/images/` liegen
- Next.js Image-Komponente nutzt

### **Problem: Domain verbindet nicht**
- DNS-Propagation prüfen: [whatsmydns.net](https://www.whatsmydns.net)
- TTL-Werte prüfen (niedriger = schneller)
- Vercel Dashboard: Domain Status prüfen

### **Problem: SSL-Zertifikat wird nicht ausgestellt**
- DNS muss vollständig propagiert sein
- Warten Sie 1-2 Stunden nach DNS-Änderung
- Vercel versucht automatisch erneut

---

## 📞 Support & Ressourcen

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** Dashboard → Help → Contact Support
- **Community:** [vercel.com/community](https://vercel.com/community)

---

## 🎯 Nach dem Deployment

**Empfohlene nächste Schritte:**

1. **Analytics aktivieren:** Vercel Analytics für Performance-Monitoring
2. **Monitoring einrichten:** Uptime-Monitoring (z.B. UptimeRobot)
3. **Lighthouse-Test:** Performance, SEO, Accessibility prüfen
4. **Google Search Console:** Website für SEO anmelden
5. **Backup-Strategie:** GitHub = automatisches Backup Ihres Codes

---

**Deployment Date:** 2025-10-15
**Framework:** Next.js 15.5.4
**Platform:** Vercel
**Git:** GitHub

---

*Bei Fragen oder Problemen: Vercel Dashboard → Help & Support*
