'use client'

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
    name: 'Christoph Schmelzle',
    position: 'UX/UI Designer',
    company: 'at asightsolutions®',
    avatar: '👨‍🎨',
    photo: '/images/team/christoph.jpg'
  }
]

export default function Team() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-cyan-600 font-medium mb-8">asightsolutions®</div>
            
            <h2 className="headline-lg mb-8">
              The faces behind{' '}
              <span className="text-gray-500">the projects.</span>
            </h2>

            <div className="space-y-8">
              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <div className="text-2xl mb-4">+</div>
                <div>
                  <div className="font-medium text-cyan-600 mb-2">Be part of our mission</div>
                  <p className="text-gray-600 mb-4">
                    If you're ready to create and collaborate, we'd love to hear from you.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                    Apply now
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <div className="text-2xl mb-4">+</div>
                <div>
                  <p className="text-gray-600 mb-4">
                    We believe great work comes from collaboration. That's why we work 
                    closely with each other to ensure every project meets your goals and exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square bg-gray-300 rounded-2xl overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-6xl">
                    {member.avatar}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <div className="font-medium text-lg">{member.name}</div>
                      <div className="text-sm opacity-90">{member.position}</div>
                      <div className="text-xs opacity-70">{member.company}</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                      +
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}