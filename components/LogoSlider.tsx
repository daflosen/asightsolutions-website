'use client'

export default function LogoSlider() {
  const logos = [
    'AUTOMATION',
    'JS AUTOMATION', 
    'BRUSA',
    'FESTOOL',
    'Mercedes-Benz',
    'MTU'
  ]
  
  return (
    <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-full" />
            <span className="text-sm font-medium uppercase tracking-wider">Our clients</span>
          </div>
          <span className="text-sm text-gray-500">(2016-25©)</span>
        </div>
        
        <div className="overflow-hidden">
          <div className="ticker flex gap-12 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 min-w-[150px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}