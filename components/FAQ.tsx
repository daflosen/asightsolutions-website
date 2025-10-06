'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How long does it take to build my digital solution?',
    answer: 'The timeline depends on the complexity and scope of your project. Simple tools can be delivered in 2-4 weeks, while complex enterprise solutions typically take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    id: 2,
    question: 'Do you offer custom websites or use templates?',
    answer: 'We specialize in fully custom solutions built from scratch. Every project is tailored to your specific needs, branding, and business objectives. No templates, no compromises.'
  },
  {
    id: 3,
    question: 'What\'s included in your SEO services?',
    answer: 'Our SEO services include comprehensive site audits, keyword research and optimization, technical SEO improvements, content strategy, backlink analysis, and ongoing performance monitoring with detailed reporting.'
  },
  {
    id: 4,
    question: 'How come you are willing to teach us how to do all this by ourselves?',
    answer: 'We believe in empowering our clients. Our DIGIT-U program provides training, workshops, and knowledge transfer so your team can maintain and expand on the solutions we build together. This ensures long-term success and independence.'
  },
  {
    id: 5,
    question: 'Can you redesign my existing processes taking into account the given infrastructure?',
    answer: 'Absolutely. We excel at optimizing existing processes within current infrastructure constraints. We analyze your current setup, identify improvement opportunities, and implement solutions that work seamlessly with your existing systems.'
  },
  {
    id: 6,
    question: 'How do I get started?',
    answer: 'Simply reach out through our contact form or give us a call. We\'ll schedule a consultation to discuss your needs, challenges, and goals. From there, we\'ll provide a detailed proposal and project timeline.'
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="headline-xl mb-8">FAQ.</h2>
            <p className="text-gray-600">
              Got questions? We've got answers. Here's everything you need to know about working with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <span className="text-lg">
                      {openFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}