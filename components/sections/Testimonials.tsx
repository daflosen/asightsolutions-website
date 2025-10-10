'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      rating: 4.9,
      text: 'We\'ve delivered 50+ projects that help companies generate results.',
      author: 'Janine Carter',
      role: 'Head of PMO'
    },
    {
      rating: 5.0,
      text: 'A smooth process from start to finish. It\' crazy what you can achieve these days!',
      author: 'Anna Schönbühl',
      role: 'Marketing Director'
    },
    {
      rating: 5.0,
      text: 'Incredible team! They delivered exactly what we needed, on time and beyond expectations.',
      author: 'Viola Frederiksen',
      role: 'Startup Ninja'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <span className="text-sm">● Testimonials</span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-semibold mb-4 leading-[1.2]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#2d3436' }}>Experiences.</h2>
          <p className="text-xl mb-12">©2025</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              {index === 0 && (
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl font-bold">{testimonial.rating}</div>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              )}
              {index !== 0 && (
                <div className="mb-4">
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              )}
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-5xl font-bold mb-2">17+</h3>
            <p className="text-gray-600">Tools designed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">
              Successful<br />
              projects launched
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">98%</h3>
            <p className="text-gray-600">
              Client<br />
              satisfaction rate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
