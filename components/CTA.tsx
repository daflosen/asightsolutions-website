'use client'

import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 to-teal-600">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="headline-lg mb-8">Let's talk.</h2>
            <p className="text-white/80 mb-8">
              Tell us about your project—whether it's a process<br />
              digitalization, a new digital solution, or tool integration<br />
              challenge—we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div className="font-medium">hello@asightsolutions.com</div>
                  <div className="text-white/70 text-sm">Email us directly</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="font-medium">+49 151 571 65 903</div>
                  <div className="text-white/70 text-sm">Call us anytime</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                👨‍💼
              </div>
              <div>
                <div className="font-medium">Florian Bartsch</div>
                <div className="text-white/70 text-sm">CEO & Founder</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Have a project in mind?</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="digitalization">Process Digitalization</option>
                  <option value="web-seo">Web Design & SEO</option>
                  <option value="development">Full Stack Development</option>
                  <option value="training">DIGIT-U Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}