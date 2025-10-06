'use client'

export default function Stats() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-black rounded-full" />
          <span className="text-sm font-medium uppercase tracking-wider">Why choose us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="headline-lg mb-8">
              Proven results for every project,{' '}
              <span className="text-gray-500">
                with a focus on precision and functionality.
              </span>
            </h2>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                No overhead, just tools precisely targeting your very individual processual needs.{' '}
                <span className="text-gray-400">
                  Thoughtful, powerful and user centered tools that make your work easier.
                </span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden mb-8">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-white/80 ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div className="text-center">
            <div className="text-6xl font-light mb-4">50+</div>
            <div className="text-sm text-gray-500 mb-2">01</div>
            <div className="font-medium">Successful projects completed</div>
            <p className="text-sm text-gray-500 mt-4">
              We've delivered 50+ projects that help companies digitalize processes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-light mb-4">98%</div>
            <div className="text-sm text-gray-500 mb-2">02</div>
            <div className="font-medium">Customer satisfaction rate</div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12 opacity-30">
          <span className="text-sm font-medium">AUTOMATION</span>
          <span className="text-sm font-medium">BRUSA</span>
          <span className="text-sm font-medium">JS AUTOMATION</span>
        </div>
      </div>
    </section>
  )
}