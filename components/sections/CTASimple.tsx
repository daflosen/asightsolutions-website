'use client'

import { motion } from 'framer-motion'

export default function CTASimple() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/videos/Hero_Video_final.mp4" type="video/mp4" />
        </video>

        {/* Teal/Grain Overlay - less transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AA6B9]/60 to-[#06B6D4]/60" />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-stretch">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <p className="text-xs font-bold mb-4 text-gray-900">asightsolutions®</p>

            <h3 className="text-2xl font-bold mb-6">
              <span className="text-gray-900">Have a project </span>
              <span className="text-gray-400">in mind?</span>
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Send message
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              © 2025 asightsolutions
            </p>
          </motion.div>

          {/* Right Side - Let's Talk Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white flex flex-col justify-between"
          >
            {/* Top Section */}
            <div>
              <h2 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white">
                Let's talk.
              </h2>

              <p className="text-xl lg:text-2xl leading-relaxed text-white opacity-90">
                Tell us about your project—whether it's a process<br />
                digitalization, SEO or your digital presence on the www.
              </p>
            </div>

            {/* Middle Section - Benefits Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {/* Speedometer/Tacho Icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">Quick response</h3>
                </div>
                <p className="text-sm text-white opacity-80">
                  If you're ready to create and collaborate, we'd love to hear from you.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  {/* Steps/Stairs Icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h4v-4h4v-4h4v-4h4V5h2" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">Clear next Steps</h3>
                </div>
                <p className="text-sm text-white opacity-80">
                  After the consultation, we'll provide you with a detailed plan and timeline.
                </p>
              </div>
            </div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 max-w-sm"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/images/Alex_Eyb_SW.png"
                  alt="Alex Eyb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-900">
                <p className="text-sm text-gray-600">Team Lead Acquisition</p>
                <p className="text-xs text-gray-500">at asight®</p>
                <p className="font-bold text-lg mt-1">Alex Eyb</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
