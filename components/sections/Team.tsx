'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: 1,
    name: 'Florian Bartsch',
    position: 'CEO',
    company: 'at asightsolutions®',
    avatar: '👨‍💼',
    photo: '/images/team/florian.jpg'
  },
  {
    id: 2,
    name: 'Jürgen Rentschler',
    position: 'Full Stack Developer',
    company: 'at asightsolutions®',
    avatar: '👨‍💻',
    photo: '/images/team/jurgen.jpg'
  },
  {
    id: 3,
    name: 'Sophie Gehlert',
    position: 'Creative Director',
    company: 'at asightsolutions®',
    avatar: '👩‍🎨',
    photo: '/images/team/sophie.jpg'
  },
  {
    id: 4,
    name: 'Alex Eyb',
    position: 'UX/UI Designer',
    company: 'at asightsolutions®',
    avatar: '👨‍🎨',
    photo: '/images/AlexEyb-pica.png'
  }
]

export default function Team() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        {/* Big Container with everything inside */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-between p-8 lg:p-12 py-12 lg:py-16">
              {/* Top - Company name and title */}
              <div className="mb-16">
                <p className="text-xs font-bold mb-4">asightsolutions®</p>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-black">The faces </span>
                  <span className="text-gray-400">behind</span>
                  <br />
                  <span className="text-gray-400">the projects.</span>
                </h3>
              </div>

              {/* Center - + symbols */}
              <div className="flex justify-between items-center w-full pr-8 mb-16">
                <span className="text-black font-thin opacity-30 text-[21px]">+</span>
                <span className="text-black font-thin opacity-30 text-[21px]">+</span>
              </div>

              {/* Bottom - Call to action and additional text */}
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-shrink-0">
                  <h4 className="text-base font-bold text-black mb-2">Be part of our mission</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm max-w-[180px]">
                    If you're ready to create and collaborate, we'd love to hear from you.
                  </p>
                  <button className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:scale-105 transition-transform">
                    Apply now
                  </button>
                </div>
                <div className="max-w-md lg:ml-auto lg:pl-20 pl-0">
                  <p className="text-base lg:text-xl xl:text-2xl font-bold leading-relaxed indent-8 lg:indent-12">
                    <span className="text-black">We believe great work comes from collaboration.</span>{' '}
                    <span className="text-gray-600">That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Team Grid */}
            <div className="grid grid-cols-2 gap-2 p-2 self-stretch overflow-hidden max-w-md ml-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-[6/9] bg-white rounded-2xl overflow-hidden relative">
                  {/* Use optimized WebP images for better performance */}
                  {member.id === 1 ? (
                    <img
                      src="/images/optimized/Florian_Bartsch_20250925_FBA-pica.webp"
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                      loading="lazy"
                    />
                  ) : member.id === 2 ? (
                    <img
                      src="/images/optimized/Jürgen_Rentschler_3zu4_SW-pica.webp"
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                      loading="lazy"
                    />
                  ) : member.id === 3 ? (
                    <img
                      src="/images/optimized/Sophie_Gehlert_asightsolutions_1_WOBG.webp"
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                      loading="lazy"
                    />
                  ) : member.id === 4 ? (
                    <img
                      src="/images/optimized/Alex_Eyb_SW.webp"
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-6xl transition-all duration-500 group-hover:scale-110 group-hover:blur-md">
                      {member.avatar}
                    </div>
                  )}

                  {/* Light overlay - always visible */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                  {/* Text overlay - visible on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 pointer-events-none">
                    <div className="text-white">
                      <div className="font-semibold text-base">{member.name}</div>
                      <div className="text-xs opacity-90">{member.position}</div>
                      <div className="text-[10px] opacity-70 mt-0.5">{member.company}</div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white text-base font-bold">
                      +
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
