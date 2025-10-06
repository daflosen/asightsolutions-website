'use client'

const navigationLinks = [
  { label: 'Home', href: '#' },
  { label: 'This is us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' }
]

const socialLinks = [
  { label: 'Twitter', href: '#', icon: '→' },
  { label: 'Instagram', href: '#', icon: '→' },
  { label: 'Dribbble', href: '#', icon: '→' }
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-2">tel. +49 151 571 65 903</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full" />
                <a 
                  href="mailto:hello@asightsolutions.com" 
                  className="text-black font-medium border-b border-black hover:border-gray-400 transition-colors"
                >
                  hello@asightsolutions.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-sm text-gray-600 uppercase tracking-wider">Navigation</span>
            </div>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-800 hover:text-black transition-colors block"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-sm text-gray-600 uppercase tracking-wider">Social</span>
            </div>
            <nav className="space-y-3">
              {socialLinks.map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-800 hover:text-black transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-gray-400 group-hover:text-black transition-colors">{link.icon}</span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="text-8xl font-light mb-4">asight®</div>
              <div className="text-2xl font-light">Solutions</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-500 py-4">
        <div className="container">
          <div className="flex justify-between items-center text-white text-sm">
            <div>© 2025 asightsolutions®. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
            </div>
            <div className="text-xs">Made in France</div>
          </div>
        </div>
      </div>
    </footer>
  )
}