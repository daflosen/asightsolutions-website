// Kompletter Code für app/page.tsx
// Kopiere diesen Code in deine lokale Next.js Installation

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #3AA6B9, #2C8A94)' }}
      >
        <div className="text-center text-white px-8">
          <h1 className="text-6xl md:text-8xl font-light mb-4">
            asight<sup className="text-2xl opacity-60">®</sup>
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Solutions</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Digital solutions and strategies that help
            your processes thrive and your business grow.
          </p>
        </div>
      </section>

      {/* Logo Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-sm mb-8">● Our clients (2016-25©)</p>
          <div className="flex gap-16 text-2xl text-gray-400 overflow-hidden">
            <div className="flex gap-16 animate-pulse">
              <span>AUTOMATION</span>
              <span>JCR AUTOMATION</span>
              <span>BRUSA</span>
              <span>FESTOOL</span>
              <span>Mercedes-Benz</span>
              <span>MTU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl md:text-7xl font-light mb-8">
            Your Digital<br />Solution.
          </h2>
          <p className="text-xl mb-12">©2025</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-cyan-50 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">CRYPTAX</h3>
              <p className="text-gray-600">(2023)</p>
              <p>Tax Software for Crypto Currencies</p>
              <div className="mt-8 text-6xl text-cyan-200">{'>>>'}</div>
            </div>
            <div className="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">RMentiX</h3>
              <p className="text-gray-600">(2024)</p>
              <p>Risk Management for Projects</p>
              <div className="mt-8 text-6xl text-gray-300">R</div>
            </div>
            <div className="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">M365</h3>
              <p className="text-gray-600">(2023)</p>
              <p>Microsoft Power Platform Processes and Tools</p>
              <div className="mt-8 text-6xl text-gray-300">ERP 365</div>
            </div>
            <div className="p-12 bg-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Mastermali</h3>
              <p className="text-gray-600">(2024)</p>
              <p>Digital Marketing Solutions</p>
              <div className="mt-8 text-6xl text-gray-300">✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #3AA6B9, #06B6D4)' }}
      >
        <div className="max-w-7xl mx-auto px-8 text-white">
          <div className="mb-8">
            <span className="text-sm opacity-70">● Services</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-light mb-12">Services.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl mb-2">Process Digitalization & Tools</h3>
            </div>
            <div>
              <h3 className="text-xl mb-2">Web Design & SEO</h3>
            </div>
            <div>
              <h3 className="text-xl mb-2">Full Stack & Low Code Development</h3>
              <p className="text-sm opacity-70">...and Trusted even :)</p>
            </div>
          </div>

          <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            All services
          </button>

          <div className="mt-20 space-y-4">
            {['001', '002', '003', '004'].map((num, i) => (
              <div key={num} className="p-6 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex gap-8">
                    <span className="opacity-60">{num}</span>
                    <span className="opacity-60">({`0${i + 1}`})</span>
                    <h3 className="text-xl">
                      {i === 0 && 'Process Digitalization & Tools'}
                      {i === 1 && 'Web Design & SEO'}
                      {i === 2 && 'Full Stack & Low Code Development'}
                      {i === 3 && 'Risk Management'}
                    </h3>
                  </div>
                  <span className="text-2xl">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8">
            <span className="text-sm">● Why choose us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
            Proven results for every project,<br />
            with a focus on precision and<br />
            functionality.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-[500px] relative overflow-hidden">
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="text-white text-6xl">+</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-8">
                No overhead, just tools precisely targeting your<br />
                very individual processual needs.
              </h3>
              <p className="text-gray-600 mb-12">
                Thoughtful, powerful<br />
                and user centered tools that make your work easier.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-sm text-gray-500">01</span>
                  <h3 className="text-6xl font-bold my-4">50+</h3>
                  <p>Successful projects<br />completed</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">02</span>
                  <h3 className="text-6xl font-bold my-4">98%</h3>
                  <p>Customer<br />satisfaction rate</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t">
                <p className="text-sm text-gray-600 mb-4">
                  We've delivered 50+ projects that<br />
                  help companies digitalize processes.
                </p>
                <div className="flex gap-8 text-gray-400">
                  <span>AUTOMATION</span>
                  <span>BRUSA</span>
                  <span>JCR AUTOMATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8">
            <span className="text-sm">● About us</span>
          </div>
          <h2 className="text-2xl mb-8">asightsolutions©</h2>
          <h3 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
            How we launch process<br />
            optimizations projects and tool<br />
            integrations.
          </h3>
          <p className="text-xl text-gray-600 mb-16">
            See how our team combines creativity, technology,<br />
            and strategy to build powerful digital solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'With a team that has proven experience in the industrial fields',
              'User centricity with a deep, experienced but pragmatic methodological approach to problems',
              'Full Stack and Low Code developers which understand your needs',
              'Make results measurable for your perceived success feeling'
            ].map((text, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-500">0{i + 1}</span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-2xl mb-6" />
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8">
            <span className="text-sm">● Testimonials</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-light mb-8">Experiences.</h2>
          <p className="text-3xl mb-16">©2025</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rating: 4.9,
                name: 'Janine Carter',
                role: 'Head of PMO',
                text: "A smooth process from start to finish. It' crazy what you can achieve these days!",
                stars: 5
              },
              {
                rating: 5.0,
                name: 'Anna Schönbühl',
                role: 'Marketing Director',
                text: 'Impressive methodological approach. The solution from asight is exactly what we envisioned—clean, modern, and unique.',
                stars: 5
              },
              {
                rating: 4.8,
                name: 'Viola Frederiksen',
                role: 'Startup Hub',
                text: 'Their strategic thinking and execution capabilities are outstanding. Highly recommended for any digital transformation.',
                stars: 4
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl font-bold">{testimonial.rating}</span>
                  <button className="text-2xl hover:bg-gray-100 p-2 rounded-full">+</button>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">
                  We've delivered 50+ projects that help
                  companies generate results.
                </p>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">{testimonial.text}</p>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.stars ? 'text-orange-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div>
              <h3 className="text-5xl font-bold">17+</h3>
              <p>Tools designed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">50+</h3>
              <p>Successful<br />projects launched</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">98%</h3>
              <p>Client<br />satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl mb-8">asightsolutions®</h2>
          <h3 className="text-5xl md:text-6xl font-light mb-16">
            The faces behind<br />
            the projects.
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Florian Barlach', role: 'CEO', tag: 'at asightsolutions®' },
              { name: 'Jürgen Rentschler', role: 'Full Stack Developer', tag: 'at asightsolutions®' },
              { name: 'Sophie Gehlert', role: 'Creative Director', tag: 'at asightsolutions®' },
              { name: 'Christoph Schmelzle', role: 'UX/UI Designer', tag: 'at asightsolutions®' }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl aspect-square mb-4 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs">
                    {member.role}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-medium">{member.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4">Be part of our mission</h3>
              <p className="text-gray-600 mb-8">
                If you're ready to create and<br />
                collaborate, we'd love to hear from you.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Apply now
              </button>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-600">
                We believe great work comes<br />
                from collaboration. That's why we work<br />
                closely with each other to ensure every<br />
                project meets your goals and exceeds<br />
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-7xl md:text-9xl font-light mb-8">FAQ.</h2>
          <p className="text-xl text-gray-600 mb-16">
            Got questions? We've got answers. Here's<br />
            everything you need to know about working with us.
          </p>

          <div className="space-y-4">
            {[
              'How long does it take to build my digital solution?',
              'Do you offer custom websites or use templates?',
              "What's included in your SEO services?",
              'How come you are willing to teach us how to do all this by ourselves?',
              'Can you redesign my existing processes taking into account the given infrastructure?',
              'How do I get started?'
            ].map((question, i) => (
              <div key={i} className="border-b pb-4">
                <button className="w-full flex justify-between items-center py-4 hover:text-cyan-600 transition-colors">
                  <span className="text-lg text-left">{question}</span>
                  <span className="text-2xl">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #3AA6B9, #06B6D4)' }}
      >
        <div className="max-w-7xl mx-auto px-8 text-white">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-8">Let's talk.</h2>
              <p className="text-xl mb-8">
                Tell us about your project—whether it's process<br />
                optimization, UX/UI or your digital presence on the web.
              </p>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur rounded-lg placeholder-white/60 text-white"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur rounded-lg placeholder-white/60 text-white"
                />
                <textarea 
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur rounded-lg placeholder-white/60 text-white"
                />
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                  Send message
                </button>
              </div>
            </div>
            
            <div className="flex items-end">
              <div>
                <h3 className="text-2xl mb-4">Get in touch</h3>
                <p className="mb-2">hello@asightsolutions.com</p>
                <p>+49 151 571 65 903</p>
                
                <div className="mt-8 bg-white text-cyan-600 rounded-2xl p-6 inline-block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full" />
                    <div>
                      <h4 className="font-medium">Personal</h4>
                      <p className="text-sm">Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="font-medium mb-4">Navigation</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-black">Home</a>
                <a href="#" className="block text-gray-600 hover:text-black">This is us</a>
                <a href="#" className="block text-gray-600 hover:text-black">Projects</a>
                <a href="#" className="block text-gray-600 hover:text-black">Blog</a>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-black">Twitter</a>
                <a href="#" className="block text-gray-600 hover:text-black">Instagram</a>
                <a href="#" className="block text-gray-600 hover:text-black">Dribbble</a>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">
                tel: +49 151 571 65 903<br />
                ● hello@asightsolutions.com
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t">
            <h3 className="text-6xl font-light mb-4">asight®</h3>
            <p className="text-sm">Solutions</p>
            <p className="text-xs text-gray-600 mt-8">
              © 2025 asightsolutions®. All rights reserved.<br />
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}