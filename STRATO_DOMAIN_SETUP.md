# 🌐 Domain Setup: asightsolutions.com mit STRATO

**Domain:** asightsolutions.com
**Provider:** STRATO
**Ziel:** Vercel Deployment

---

## 📋 Schritt 1: Domain in Vercel hinzufügen

### 1.1 Vercel Dashboard öffnen
1. Gehen Sie zu: https://vercel.com/dashboard
2. Klicken Sie auf Ihr Projekt **"asightsolutions-website"**
3. Klicken Sie auf **"Settings"** (oben)
4. Klicken Sie auf **"Domains"** (linke Sidebar)

### 1.2 Domain hinzufügen
1. Klicken Sie auf **"Add"** oder **"Add Domain"**
2. Geben Sie ein: `asightsolutions.com`
3. Klicken Sie auf **"Add"**

### 1.3 Zusätzlich www-Subdomain hinzufügen
1. Klicken Sie erneut auf **"Add"**
2. Geben Sie ein: `www.asightsolutions.com`
3. Klicken Sie auf **"Add"**

### 1.4 DNS-Einträge notieren
Vercel zeigt Ihnen jetzt die benötigten DNS-Einträge an. Notieren Sie diese:

**Für asightsolutions.com (Root Domain):**
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   3600
```

**Für www.asightsolutions.com:**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

---

## 📋 Schritt 2: Bei STRATO DNS-Einträge konfigurieren

### 2.1 Bei STRATO einloggen
1. Gehen Sie zu: https://www.strato.de/apps/CustomerService
2. Loggen Sie sich mit Ihrer **Kundennummer** und **Passwort** ein
3. Sie landen im STRATO Kunden-Login

### 2.2 Domain-Verwaltung öffnen
1. Klicken Sie im Menü auf **"Domains"** oder **"Paket & Domains"**
2. Suchen Sie **"asightsolutions.com"** in der Liste
3. Klicken Sie auf **"Verwalten"** oder das **Zahnrad-Symbol** neben der Domain

### 2.3 DNS-Einstellungen aufrufen
1. Suchen Sie nach **"DNS-Einstellungen"** oder **"Nameserver und DNS"**
2. Klicken Sie auf **"DNS-Einstellungen bearbeiten"** oder **"Erweiterte DNS-Einstellungen"**
3. Falls gefragt, bestätigen Sie, dass Sie externe DNS-Einträge verwenden möchten

### 2.4 A-Record für Root Domain erstellen/ändern

**WICHTIG:** STRATO hat oft bereits einen Standard-A-Record. Diesen müssen Sie ändern!

1. Suchen Sie den bestehenden **A-Record** mit Name **"@"** oder leer
2. Falls vorhanden:
   - Klicken Sie auf **"Bearbeiten"** oder das **Stift-Symbol**
   - Ändern Sie die IP-Adresse zu: `76.76.21.21`
   - TTL: `3600` (oder Standard belassen)
   - Speichern Sie

3. Falls NICHT vorhanden:
   - Klicken Sie auf **"Neuen Eintrag hinzufügen"** oder **"A-Record hinzufügen"**
   - **Host/Name:** `@` (oder leer lassen)
   - **Ziel/IP:** `76.76.21.21`
   - **TTL:** `3600`
   - Speichern Sie

### 2.5 CNAME-Record für www erstellen/ändern

1. Suchen Sie den bestehenden **CNAME-Record** für **"www"**
2. Falls vorhanden:
   - Klicken Sie auf **"Bearbeiten"**
   - Ändern Sie das Ziel zu: `cname.vercel-dns.com`
   - TTL: `3600`
   - Speichern Sie

3. Falls NICHT vorhanden:
   - Klicken Sie auf **"Neuen Eintrag hinzufügen"** oder **"CNAME-Record hinzufügen"**
   - **Host/Name:** `www`
   - **Ziel/Target:** `cname.vercel-dns.com`
   - **TTL:** `3600`
   - Speichern Sie

**WICHTIG:** Bei STRATO muss das Ziel manchmal MIT Punkt am Ende eingegeben werden:
- Versuchen Sie: `cname.vercel-dns.com.` (mit Punkt am Ende)
- Falls Fehler: `cname.vercel-dns.com` (ohne Punkt)

### 2.6 Alte Einträge prüfen

**WICHTIG:** Löschen Sie KEINE anderen DNS-Einträge außer:
- Bestehende A-Records für `@` (Root)
- Bestehende CNAME-Records für `www`

Behalten Sie:
- MX-Records (für E-Mail)
- TXT-Records (für Verifizierung)
- Andere Subdomains

### 2.7 Änderungen speichern und bestätigen
1. Klicken Sie auf **"Speichern"** oder **"Änderungen übernehmen"**
2. STRATO zeigt möglicherweise eine Bestätigungsmeldung
3. Notieren Sie sich die Uhrzeit - DNS-Propagation dauert 1-24 Stunden

---

## 📋 Schritt 3: DNS-Propagation abwarten

### 3.1 Wartezeit
- **Minimum:** 1-2 Stunden
- **Maximum:** 24-48 Stunden (selten)
- **Durchschnitt bei STRATO:** 2-6 Stunden

### 3.2 DNS-Propagation prüfen

**Online-Tools:**
1. **WhatsMyDNS:** https://www.whatsmydns.net
   - Geben Sie ein: `asightsolutions.com`
   - Typ: `A`
   - Sollte zeigen: `76.76.21.21`

2. **DNS Checker:** https://dnschecker.org
   - Geben Sie ein: `www.asightsolutions.com`
   - Typ: `CNAME`
   - Sollte zeigen: `cname.vercel-dns.com`

**Terminal/Kommandozeile (falls Sie Zugriff haben):**
```bash
# A-Record prüfen
nslookup asightsolutions.com

# CNAME-Record prüfen
nslookup www.asightsolutions.com
```

### 3.3 Vercel Status prüfen
1. Gehen Sie zurück zu Vercel Dashboard → Domains
2. Status sollte ändern von:
   - ⏳ **"Pending"** → ✅ **"Valid Configuration"**
3. SSL-Zertifikat wird automatisch ausgestellt

---

## 📋 Schritt 4: SSL/HTTPS verifizieren

### 4.1 Automatische SSL-Aktivierung
Vercel aktiviert **automatisch** ein kostenloses Let's Encrypt SSL-Zertifikat:
- Sobald DNS propagiert ist
- Dauert ca. 5-10 Minuten nach DNS-Verifizierung
- Keine manuelle Konfiguration nötig!

### 4.2 SSL-Status prüfen
1. **In Vercel Dashboard:**
   - Settings → Domains
   - Neben jeder Domain sollte ein **grünes Schloss-Symbol** erscheinen
   - Status: "Valid Configuration"

2. **Im Browser:**
   - Öffnen Sie: `https://asightsolutions.com`
   - Öffnen Sie: `https://www.asightsolutions.com`
   - Beide sollten funktionieren mit HTTPS
   - Klicken Sie auf das Schloss-Symbol in der Adresszeile
   - Zertifikat sollte von "Let's Encrypt" sein

---

## ✅ Checkliste: Deployment abgeschlossen

Prüfen Sie alle Punkte:

- [ ] Domain in Vercel hinzugefügt (asightsolutions.com + www)
- [ ] A-Record bei STRATO gesetzt (@ → 76.76.21.21)
- [ ] CNAME-Record bei STRATO gesetzt (www → cname.vercel-dns.com)
- [ ] DNS-Änderungen bei STRATO gespeichert
- [ ] DNS-Propagation abgewartet (1-24h)
- [ ] https://asightsolutions.com funktioniert (mit HTTPS)
- [ ] https://www.asightsolutions.com funktioniert (mit HTTPS)
- [ ] Vercel zeigt "Valid Configuration"
- [ ] SSL-Zertifikat ist aktiv (grünes Schloss)
- [ ] Alle Features funktionieren (Counter, Animationen, Bilder)

---

## 🔧 Troubleshooting

### Problem: "Invalid Configuration" in Vercel

**Ursache:** DNS-Einträge sind noch nicht propagiert oder falsch gesetzt.

**Lösung:**
1. Prüfen Sie mit https://whatsmydns.net ob die DNS-Einträge korrekt sind
2. Warten Sie weitere 1-2 Stunden
3. In Vercel: Klicken Sie auf "Refresh" neben der Domain

### Problem: "DNS resolution error"

**Ursache:** A-Record oder CNAME falsch konfiguriert.

**Lösung bei STRATO:**
1. Prüfen Sie, ob bei CNAME ein Punkt am Ende steht: `cname.vercel-dns.com.`
2. Prüfen Sie, ob A-Record wirklich auf `76.76.21.21` zeigt
3. Manchmal muss bei STRATO der Host mit `@` statt leer gelassen werden

### Problem: Website zeigt alten Inhalt

**Ursache:** DNS-Cache im Browser oder bei STRATO.

**Lösung:**
1. Leeren Sie Ihren Browser-Cache (Strg+Shift+Delete)
2. Versuchen Sie Inkognito-Modus
3. Versuchen Sie einen anderen Browser oder Gerät
4. Warten Sie weitere Stunden für vollständige Propagation

### Problem: SSL-Zertifikat wird nicht ausgestellt

**Ursache:** DNS muss vollständig propagiert sein.

**Lösung:**
1. Warten Sie mindestens 2 Stunden nach DNS-Änderung
2. Prüfen Sie in Vercel Dashboard → Domains → Status
3. Vercel versucht automatisch alle paar Stunden erneut
4. Falls nach 24h noch nicht aktiv: Vercel Support kontaktieren

### Problem: "Too Many Redirects" Fehler

**Ursache:** STRATO hat manchmal zusätzliche Weiterleitungen aktiv.

**Lösung:**
1. Bei STRATO: Deaktivieren Sie "Domain-Weiterleitung" für asightsolutions.com
2. Bei STRATO: Stellen Sie sicher, dass keine .htaccess-Weiterleitungen aktiv sind
3. Warten Sie 1 Stunde und testen Sie erneut

---

## 📞 Support-Kontakte

### STRATO Support
- **Telefon:** 030 300 146 000 (Mo-Fr 8-20 Uhr, Sa 10-16 Uhr)
- **E-Mail:** support@strato.de
- **Online:** https://www.strato.de/faq/

### Vercel Support
- **Dashboard:** Vercel Dashboard → Help & Support
- **Community:** https://github.com/vercel/vercel/discussions
- **Docs:** https://vercel.com/docs

---

## 🎯 Nach erfolgreichem Deployment

### Empfohlene nächste Schritte:

1. **Analytics aktivieren:**
   - Vercel Dashboard → Analytics
   - Verfolgen Sie Besucherzahlen und Performance

2. **Google Search Console:**
   - https://search.google.com/search-console
   - Website für SEO anmelden

3. **Uptime Monitoring:**
   - https://uptimerobot.com (kostenlos)
   - Überwacht ob Website erreichbar ist

4. **Performance testen:**
   - https://pagespeed.web.dev
   - Lighthouse-Test durchführen

5. **SSL-Test:**
   - https://www.ssllabs.com/ssltest/
   - SSL-Konfiguration prüfen (sollte A+ sein)

---

**Setup-Datum:** 2025-10-15
**Domain:** asightsolutions.com
**Provider:** STRATO
**Hosting:** Vercel
**Framework:** Next.js 14.2.5

---

*Bei Fragen oder Problemen: Siehe Troubleshooting-Sektion oben*
