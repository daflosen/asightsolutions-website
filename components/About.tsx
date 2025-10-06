'use client'

const processSteps = [
  {
    number: '01',
    icon: '👥',
    title: 'With a team that has proven experience in the industrial fields',
    description: 'Deep industry knowledge combined with technical expertise'
  },
  {
    number: '02', 
    icon: '🎯',
    title: 'User centricity with a deep, experienced but pragmatic methodological approach to problems',
    description: 'Human-centered design meets practical problem-solving'
  },
  {
    number: '03',
    icon: '🔧',
    title: 'Full Stack and Low Code developers which understand your needs',
    description: 'Technical solutions tailored to your specific requirements'
  },
  {
    number: '04',
    icon: '📊',
    title: 'Make results measurable for your perceived success feeling',
    description: 'Transparent metrics and clear success indicators'
  }
]

export default function About() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-black rounded-full" />
          <span className="text-sm font-medium uppercase tracking-wider">About us</span>
        </div>

        <div className="mb-16">
          <div className="text-cyan-600 font-medium mb-4">asightsolutions®</div>
          <h2 className="headline-lg mb-8">
            How we launch{' '}
            <span className="text-gray-500">
              process optimizations projects and tool integrations.
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            See how our team combines creativity, technology, and strategy to build powerful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: index + 1 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{step.number}</span>
                </div>
              </div>
              
              <h3 className="font-medium mb-3 leading-tight">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}