#!/bin/bash

echo "🚀 Building asightsolutions (Manual Build Process)"
echo "================================================="

# Create dist directory
rm -rf dist
mkdir -p dist/assets

# Process CSS with Tailwind (if tailwindcss is available locally)
if command -v tailwindcss &> /dev/null; then
    echo "📦 Processing CSS with Tailwind..."
    tailwindcss -i ./src/styles/main.css -o ./dist/assets/styles.css --minify
else
    echo "⚠️  Tailwind CLI not found, using CDN version..."
    # Create a combined version with CDN
    cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="asightsolutions - Digital solutions and strategies that help your processes thrive and your business grow">
    <title>asightsolutions® - Digital Growth</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3AA6B9',
                        'primary-dark': '#2C8A94',
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .animate-scroll { animation: scroll 30s linear infinite; }
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .hero-gradient { background: linear-gradient(135deg, #3AA6B9, #2C8A94); }
        .services-gradient { background: linear-gradient(135deg, #3AA6B9, #06B6D4); }
    </style>
</head>
<body>
    <main>
        <!-- Hero Section -->
        <section class="hero-gradient min-h-screen flex items-center justify-center">
            <div class="text-center text-white px-8">
                <h1 class="text-6xl md:text-8xl font-light mb-4">
                    asight<sup class="text-2xl opacity-60">®</sup>
                </h1>
                <h2 class="text-4xl md:text-5xl font-light mb-8">Solutions</h2>
                <p class="text-xl opacity-90 max-w-2xl mx-auto">
                    Digital solutions and strategies that help
                    your processes thrive and your business grow.
                </p>
            </div>
        </section>

        <!-- Logo Slider -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-8">
                <p class="text-sm mb-8">● Our clients (2016-25©)</p>
                <div class="overflow-hidden">
                    <div class="flex gap-16 animate-scroll" style="width: 200%;">
                        <div class="flex gap-16 text-2xl text-gray-400">
                            <span>AUTOMATION</span>
                            <span>JCR AUTOMATION</span>
                            <span>BRUSA</span>
                            <span>FESTOOL</span>
                            <span>Mercedes-Benz</span>
                            <span>MTU</span>
                        </div>
                        <div class="flex gap-16 text-2xl text-gray-400">
                            <span>AUTOMATION</span>
                            <span>JCR AUTOMATION</span>
                            <span>BRUSA</span>
                            <span>FESTOOL</span>
                            <span>Mercedes-Benz</span>
                            <span>MTU</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Digital Solution -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-8">
                <h2 class="text-6xl md:text-7xl font-light mb-8">
                    Your Digital<br>Solution.
                </h2>
                <p class="text-xl mb-12">©2025</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="p-12 bg-cyan-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-bold mb-4">CRYPTAX</h3>
                        <p class="text-gray-600">(2023)</p>
                        <p>Tax Software for Crypto Currencies</p>
                        <div class="mt-8 text-6xl text-cyan-200">»»»</div>
                    </div>
                    <div class="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-bold mb-4">RMentiX</h3>
                        <p class="text-gray-600">(2024)</p>
                        <p>Risk Management for Projects</p>
                        <div class="mt-8 text-6xl text-gray-300">R</div>
                    </div>
                    <div class="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-bold mb-4">M365</h3>
                        <p class="text-gray-600">(2023)</p>
                        <p>Microsoft Power Platform Processes and Tools</p>
                        <div class="mt-8 text-6xl text-gray-300">ERP 365</div>
                    </div>
                    <div class="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-bold mb-4">Mastermali</h3>
                        <p class="text-gray-600">(2024)</p>
                        <p>Digital Marketing Solutions</p>
                        <div class="mt-8 text-6xl text-gray-300">✓</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section class="services-gradient py-20">
            <div class="max-w-7xl mx-auto px-8 text-white">
                <div class="mb-8">
                    <span class="text-sm opacity-70">● Services</span>
                </div>
                <h2 class="text-6xl md:text-8xl font-light mb-12">Services.</h2>
                
                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <h3 class="text-xl mb-2">Process Digitalization & Tools</h3>
                    </div>
                    <div>
                        <h3 class="text-xl mb-2">Web Design & SEO</h3>
                    </div>
                    <div>
                        <h3 class="text-xl mb-2">Full Stack & Low Code Development</h3>
                        <p class="text-sm opacity-70">...and Trusted even :)</p>
                    </div>
                </div>

                <a href="#contact" class="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block">
                    All services
                </a>
            </div>
        </section>

        <!-- Stats -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-8">
                <div class="mb-8">
                    <span class="text-sm">● Why choose us</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-light mb-12 leading-tight">
                    Proven results for every project,<br>
                    with a focus on precision and<br>
                    functionality.
                </h2>
                
                <div class="grid md:grid-cols-2 gap-16">
                    <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96 md:h-[500px]"></div>
                    <div>
                        <h3 class="text-2xl mb-8">
                            No overhead, just tools precisely targeting your<br>
                            very individual processual needs.
                        </h3>
                        <p class="text-gray-600 mb-12">
                            Thoughtful, powerful<br>
                            and user centered tools that make your work easier.
                        </p>
                        
                        <div class="grid grid-cols-2 gap-8">
                            <div>
                                <span class="text-sm text-gray-500">01</span>
                                <h3 class="text-6xl font-bold my-4">50+</h3>
                                <p>Successful projects<br>completed</p>
                            </div>
                            <div>
                                <span class="text-sm text-gray-500">02</span>
                                <h3 class="text-6xl font-bold my-4">98%</h3>
                                <p>Customer<br>satisfaction rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-8">
                <div class="mb-8">
                    <span class="text-sm">● About us</span>
                </div>
                <h2 class="text-2xl mb-8">asightsolutions©</h2>
                <h3 class="text-5xl md:text-6xl font-light mb-8 leading-tight">
                    How we launch process<br>
                    optimizations projects and tool<br>
                    integrations.
                </h3>
                <p class="text-xl text-gray-600">
                    See how our team combines creativity, technology,<br>
                    and strategy to build powerful digital solutions.
                </p>
            </div>
        </section>

        <!-- Team -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-8">
                <h2 class="text-2xl mb-8">asightsolutions®</h2>
                <h3 class="text-5xl md:text-6xl font-light mb-16">
                    The faces behind<br>
                    the projects.
                </h3>
                
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-2xl mb-4">Be part of our mission</h3>
                        <p class="text-gray-600 mb-8">
                            If you're ready to create and<br>
                            collaborate, we'd love to hear from you.
                        </p>
                        <a href="#contact" class="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Apply now
                        </a>
                    </div>
                    <div class="flex items-center">
                        <p class="text-lg text-gray-600">
                            We believe great work comes<br>
                            from collaboration. That's why we work<br>
                            closely with each other to ensure every<br>
                            project meets your goals and exceeds<br>
                            expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-8">
                <h2 class="text-7xl md:text-8xl font-light mb-8">FAQ.</h2>
                <p class="text-xl text-gray-600 mb-16">
                    Got questions? We've got answers. Here's<br>
                    everything you need to know about working with us.
                </p>
            </div>
        </section>

        <!-- CTA -->
        <section id="contact" class="services-gradient py-20">
            <div class="max-w-7xl mx-auto px-8 text-white">
                <h2 class="text-5xl md:text-6xl font-light mb-8">Let's talk.</h2>
                <p class="text-xl mb-8">
                    Tell us about your project—whether it's process<br>
                    optimization, UX/UI or your digital presence on the web.
                </p>
                <p class="mb-2">hello@asightsolutions.com</p>
                <p>+49 151 571 65 903</p>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-16 bg-gray-100">
            <div class="text-center">
                <h3 class="text-6xl font-light mb-4">asight®</h3>
                <p class="text-sm">Solutions</p>
                <p class="text-sm mt-8 text-gray-600">
                    © 2025 asightsolutions®. All rights reserved.
                </p>
            </div>
        </footer>
    </main>
</body>
</html>
EOF
fi

# Minify HTML
echo "🗜️  Minifying HTML..."
if [ -f "dist/index.html" ]; then
    # Basic minification: remove comments and excessive whitespace
    sed -i 's/<!--.*-->//g; s/^[[:space:]]*//; s/[[:space:]]*$//' dist/index.html
    # Remove newlines between tags (careful not to break JavaScript)
    perl -i -pe 's/>\s+</></g' dist/index.html
fi

# Create deployment configs
echo "📝 Creating deployment configs..."

# Netlify config
cat > dist/netlify.toml << 'EOF'
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
EOF

# Vercel config
cat > dist/vercel.json << 'EOF'
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
EOF

echo ""
echo "✅ Build completed successfully!"
echo "================================"
echo ""
echo "📁 Production files in: ./dist/"
echo ""
echo "🚀 Deployment options:"
echo "   1. Netlify: Drag & drop the 'dist' folder to netlify.com"
echo "   2. Vercel: Run 'vercel --prod' in the dist directory"  
echo "   3. GitHub Pages: Push dist folder to gh-pages branch"
echo "   4. Traditional hosting: Upload dist/index.html to any web server"
echo ""
echo "🧪 Test locally:"
echo "   cd dist && python3 -m http.server 8000"