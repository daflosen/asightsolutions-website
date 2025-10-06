#!/bin/bash

# Simple Build Script für Production
# Keine Dependencies nötig!

echo "🚀 Building asightsolutions for production..."

# 1. Create dist directory
rm -rf dist
mkdir -p dist/assets

# 2. Copy and minify HTML
echo "📦 Optimizing HTML..."
# Remove comments and unnecessary whitespace
sed 's/<!--.*-->//g' index.html | tr -d '\n' | sed 's/  */ /g' > dist/index.html

# 3. Create a simple server script for testing
cat > dist/server.py << 'EOF'
#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"🌐 Server running at http://localhost:{PORT}")
    httpd.serve_forever()
EOF

chmod +x dist/server.py

echo "✅ Build complete!"
echo ""
echo "📁 Files ready for deployment in ./dist/"
echo ""
echo "Deployment options:"
echo "1. Upload dist/index.html to any web host"
echo "2. Deploy to Netlify: drag & drop the dist folder"
echo "3. Deploy to GitHub Pages"
echo "4. Test locally: cd dist && python3 server.py"