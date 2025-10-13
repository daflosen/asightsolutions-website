'use client'

const processSteps = [
  {
    number: '01',
    title: 'With a team that has proven experience in the industrial fields',
    description: 'Deep industry knowledge combined with technical expertise'
  },
  {
    number: '02',
    title: 'User centricity with a deep, experienced but pragmatic methodological approach to problems',
    description: 'Human-centered design meets practical problem-solving'
  },
  {
    number: '03',
    title: 'Full Stack and Low Code developers which understand your needs',
    description: 'Technical solutions tailored to your specific requirements'
  },
  {
    number: '04',
    title: 'Make results measurable for your perceived success feeling',
    description: 'Transparent metrics and clear success indicators'
  }
]

export default function AboutUs() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 relative">
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-full" />
            <span className="text-sm font-medium uppercase tracking-wider text-gray-600">About us</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-gray-900 mb-4">asightsolutions®</div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              How we launch{' '}
              <span className="text-gray-400">
                process optimizations projects and tool integrations.
              </span>
            </h2>
            <p className="text-lg text-gray-500">
              See how our team combines creativity, technology, and strategy to build powerful digital solutions.
            </p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Number */}
              <div className="text-7xl font-bold text-gray-200 mb-6 group-hover:text-gray-300 transition-colors">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 leading-tight text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}