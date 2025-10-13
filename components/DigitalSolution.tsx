'use client'

const projects = [
  {
    id: 1,
    title: 'CRYPTAX',
    subtitle: 'Tax Software for Crypto Currencies',
    year: '(2023)',
    bgColor: 'bg-cyan-100',
    logoText: 'CRYPTAX',
    logoStyle: 'geometric-arrows'
  },
  {
    id: 2,
    title: 'RMentiX',
    subtitle: 'Risk Management for Projects', 
    year: '(2024)',
    bgColor: 'bg-purple-100',
    logoText: 'R',
    logoStyle: 'geometric-r'
  },
  {
    id: 3,
    title: 'M365',
    subtitle: 'Microsoft Power Platform Processes and Tools',
    year: '(2023)',
    bgColor: 'bg-gray-100',
    logoText: 'ERP 365',
    logoStyle: 'geometric-arrows-rotated'
  },
  {
    id: 4,
    title: 'Mastermali',
    subtitle: '',
    year: '(2024)',
    bgColor: 'bg-gray-100',
    logoText: '✓',
    logoStyle: 'checkmark'
  }
]

export default function DigitalSolution() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-black rounded-full" />
            
          </div>

          <div className="flex justify-between items-start gap-12 mb-12">
            <div className="flex-1">
              <h2 className="text-6xl font-bold mb-3 leading-tight">
                Your Digital<br />
                Solution.
              </h2>
              <p className="text-sm text-gray-500">©2025</p>
            </div>
            <div className="flex-1">
              <p className="text-base text-gray-500 leading-relaxed">
                We've helped businesses across industries achieve their digitalization goals. Here are some of our recent tools.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-2x2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.bgColor} rounded-3xl p-8 hover:shadow-lg transition-all cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.subtitle}</p>
                </div>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              
              <div className="h-40 flex items-center justify-center">
                {project.logoStyle === 'geometric-arrows' && (
                  <div className="text-4xl font-bold text-teal-700">
                    {'>>>'}
                  </div>
                )}
                {project.logoStyle === 'geometric-r' && (
                  <div className="text-6xl font-bold text-blue-700">
                    R
                  </div>
                )}
                {project.logoStyle === 'geometric-arrows-rotated' && (
                  <div className="text-4xl font-bold text-teal-700 transform rotate-45">
                    {'>>>'}
                  </div>
                )}
                {project.logoStyle === 'checkmark' && (
                  <div className="text-6xl font-bold text-teal-700">
                    ✓
                  </div>
                )}
              </div>
              
              <div className="text-2xl font-bold text-gray-800 mt-6">
                {project.logoText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}