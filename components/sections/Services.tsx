import { translations } from '@/translations'
import { servicesDetailed } from '@/translations/services-detailed'
import ServiceAccordionItem from '@/components/ui/ServiceAccordionItem'
import ServicesAnimationWrapper from '@/components/ui/ServicesAnimationWrapper'

interface ServicesProps {
  lang?: 'de' | 'en'
}

/**
 * Services Section - Server Component for SSR
 * All SEO-critical content is rendered on the server
 * Client-side interactivity is handled by ServiceAccordionItem
 */
export default function Services({ lang = 'de' }: ServicesProps) {
  const t = translations[lang]
  const services = t.services.items
  // DE uses servicesDetailed.items, EN uses services.items
  const detailedData = servicesDetailed[lang] as any
  const detailed = detailedData?.servicesDetailed?.items || detailedData?.services?.items || services

  return (
    <section className="py-20 bg-[#3AA6B9] relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" style={{ opacity: 0.1 }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* "What we do" Label - Top Left */}
        <ServicesAnimationWrapper delay={0}>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 mb-16">
            <span className="w-6 h-6 bg-white rounded-full inline-flex items-center justify-center text-[#3AA6B9] text-sm font-bold">
              +
            </span>
            {t.services.badge}
          </span>
        </ServicesAnimationWrapper>

        {/* "Services (4)" - Centered Heading */}
        <ServicesAnimationWrapper delay={0.1}>
          <h2
            className="text-center text-[48px] md:text-[56px] font-semibold text-white mb-16 leading-[1.2]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            {t.services.title}
          </h2>
        </ServicesAnimationWrapper>

        {/* Service List - Full Width */}
        <div className="max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <ServiceAccordionItem
              key={index}
              number={service.number}
              name={service.name}
              detailedContent={detailed[index]?.detailedContent || service.description}
              index={index}
            />
          ))}
        </div>

        {/* "Get started" Button - Centered */}
        <ServicesAnimationWrapper delay={0.5}>
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-white text-[#3AA6B9] rounded-full font-medium hover:bg-white/90 transition-colors">
              {lang === 'de' ? 'Jetzt starten' : 'Get started'}
            </button>
          </div>
        </ServicesAnimationWrapper>
      </div>
    </section>
  )
}
