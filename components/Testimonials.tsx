'use client'

const testimonials = [
  {
    id: 1,
    name: 'Janine Carter',
    position: 'Head of PMO',
    avatar: '👩‍💼',
    quote: 'A smooth process from start to finish. It\'s crazy what you can achieve these days!',
    rating: 5
  },
  {
    id: 2,
    name: 'Anna Schönbühl',
    position: 'Marketing Director',
    avatar: '👩‍🦳',
    quote: 'Impressive methodological approach. The solution from asight is exactly what we envisioned — clean, modern, and unique.',
    rating: 5
  },
  {
    id: 3,
    name: 'Viola Frederiksen',
    position: 'Startup Hub',
    avatar: '👩‍💻',
    quote: 'Incredible team! They delivered exactly what we needed, on time and beyond expectations.',
    rating: 5
  }
]

const stats = [
  { number: '17+', label: 'Tools designed' },
  { number: '50+', label: 'Successful projects launched' },
  { number: '98%', label: 'Client satisfaction rate' }
]

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-black rounded-full" />
          <span className="text-sm font-medium uppercase tracking-wider">Testimonials</span>
        </div>

        <div className="mb-16">
          <h2 className="headline-xl mb-4">Experiences.</h2>
          <div className="text-6xl font-light">©2025</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-light mb-4">4.9</div>
              <p className="text-gray-600 mb-6">
                We've delivered 50+ projects that help companies generate results.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-cyan-600 font-medium">asightsolutions®</span>
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-black rounded-full text-white text-xs flex items-center justify-center">5+</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">Rated by clients worldwide</p>
              
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Leave a review
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 mb-4">{testimonial.quote}</p>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                
                <div className="text-gray-400 text-xl ml-4">+</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-light mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}