import { servicesDetailed } from './services-detailed'

export const translations = {
  en: {
    ...servicesDetailed.en,
    hero: {
      services: [
        { title: 'Process Digitalization', desc: 'Transform manual processes into efficient digital workflows' },
        { title: 'Business Optimization', desc: 'Streamline operations and maximize efficiency' },
        { title: 'Web Design & SEO', desc: 'Beautiful websites that rank and convert' },
        { title: 'Full Stack Development', desc: 'From concept to deployment' }
      ],
      seoH1: 'Digitalisierung Unternehmensberatung Stuttgart - A Sight Solutions: KI, Automatisierung & Prozessoptimierung für den Mittelstand',
      tagline: 'Digital solutions and strategies that help\nyour processes thrive and your business grow.',
      founderRole: 'Founder',
      founderCompany: 'at asight®',
      contactButton: "Let's talk",
      swipeHint: '← Swipe to explore →',
      scrollHint: '↑ Scroll to explore ↓',
      swipeOrWait: '← Swipe or wait for auto-rotation →'
    },
    digitalSolution: {
      badge: '(27)',
      title: 'Your\nDigital\nSolution.',
      subtitle: 'We create digital solutions that make your business more efficient, more successful, and ready for the future.'
    },
    services: {
      badge: 'What we do',
      title: 'Services (4)',
      items: [
        {
          number: '001',
          name: 'Website Design & SEO',
          description: 'Modern, responsive websites optimized for search engines. We create stunning digital experiences that drive traffic and convert visitors into customers.'
        },
        {
          number: '002',
          name: 'Full Stack & Low-Code Development',
          description: 'End-to-end application development using cutting-edge technologies and low-code platforms. From concept to deployment, we build scalable solutions tailored to your needs.'
        },
        {
          number: '003',
          name: 'Our Personal Tech AI',
          description: 'Custom AI solutions that automate workflows, enhance decision-making, and provide intelligent insights. Leverage the power of AI to transform your business operations.'
        },
        {
          number: '004',
          name: 'View all',
          description: 'Explore our complete portfolio of digital services and solutions. From consulting to implementation, we offer comprehensive support for your digital transformation journey.'
        }
      ]
    },
    about: {
      badge: 'This is us',
      title: 'About Us',
      subtitle: 'Your partner for digital transformation',
      description: 'We are a digital consulting agency based in Stuttgart, specializing in digitalization for medium-sized businesses. With BAFA funding and over 200 completed projects, we help companies successfully navigate their digital transformation.',
      brandName: 'asightsolutions®',
      mainTitle: 'How we launch',
      mainTitleGray: 'process optimizations projects and tool integrations.',
      introText: 'See how our team combines creativity, technology, and strategy to build powerful digital solutions.',
      processSteps: [
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
      ],
      stats: [
        { value: '200+', label: 'Projects' },
        { value: '10+', label: 'Years Experience' },
        { value: '50+', label: 'Happy Clients' },
        { value: '24/7', label: 'Support' }
      ]
    },
    stats: {
      badge: 'Why choose us',
      mainTitle: 'Proven results for every project,',
      mainTitleGray: 'with a focus on precision and functionality.',
      description: 'No overhead, just tools precisely targeting your',
      descriptionBr: 'very individual processual needs.',
      descriptionGray: 'Thoughtful, powerful and user centered tools that make your work easier.',
      stat1Value: '50+',
      stat1Label: 'Successful projects completed',
      stat2Value: '98%',
      stat2Label: 'Customer satisfaction rate',
      items: [
        { value: '200+', label: 'Successful Projects' },
        { value: '50+', label: 'Happy Clients' },
        { value: '10+', label: 'Years of Excellence' },
        { value: '24/7', label: 'Support Available' }
      ]
    },
    testimonials: {
      badge: 'Client Success Stories',
      title: 'Experiences.',
      ratingText: 'We\'ve delivered 50+ projects that help companies generate results.',
      items: [
        {
          text: 'Working with A Sight Solutions transformed our business. Their expertise in process automation saved us countless hours.',
          author: 'Dr. Tessa Campbell',
          role: 'CEO, TechMed Solutions',
          rating: 5
        },
        {
          text: 'The team delivered an outstanding website with excellent SEO optimization. Our online visibility has increased significantly.',
          author: 'Sarah Weber',
          role: 'Marketing Director, Innovation GmbH',
          rating: 5
        },
        {
          text: 'Professional, reliable, and innovative. Their AI solutions have revolutionized our workflows.',
          author: 'Tanja Müller',
          role: 'Operations Manager, Logistics Pro',
          rating: 5
        }
      ],
      statsLabels: {
        toolsDesigned: 'Tools designed',
        successfulProjects: 'Successful\nprojects launched',
        clientSatisfaction: 'Client\nsatisfaction rate'
      }
    },
    team: {
      badge: 'Meet the Team',
      title: 'Our Experts',
      members: [
        {
          name: 'Florian Bartsch',
          role: 'Founder',
          description: 'Digital transformation expert with 10+ years of experience'
        }
      ]
    },
    faq: {
      title: 'FAQ.',
      subtitle: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is BAFA funding?',
          answer: 'BAFA (Federal Office for Economic Affairs and Export Control) provides funding for digitalization consulting. We help you apply for and receive this funding for your digital transformation projects.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project duration varies based on scope and complexity. A website typically takes 4-8 weeks, while comprehensive digital transformation projects can take 3-6 months. We provide detailed timelines during the initial consultation.'
        },
        {
          question: 'Do you offer ongoing support?',
          answer: 'Yes! We provide 24/7 support and maintenance packages for all our solutions. Our team ensures your systems run smoothly and stay up-to-date with the latest technologies.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We work with businesses across all industries, including medical practices, government agencies, manufacturing, logistics, and professional services. Our solutions are tailored to your specific industry needs.'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Let\'s discuss your digital transformation journey',
      button: 'Get in Touch',
      features: [
        'Free Consultation',
        'BAFA Funding Support',
        'Tailored Solutions'
      ]
    },
    preFooter: {
      title: 'Let\'s Work Together',
      subtitle: 'Ready to start your digital transformation?',
      email: 'hello@asightsolutions.com',
      phone: '+49 711 1234567'
    },
    footer: {
      copyright: '© 2024 asightsolutions®. All rights reserved.'
    },
    navigation: {
      links: {
        about: 'This is us',
        projects: 'Projects',
        blog: 'Blog',
        contact: 'Contact'
      },
      menu: 'Menu',
      fullMenu: 'Full Menu',
      projectCount: '27'
    },
    ourClients: {
      title: 'Our clients',
      period: '(2016-25©)'
    },
    caseStudy: {
      badge: 'asightsolutions®',
      tagline: 'Every project we take on is designed for long-term success.',
      mainHeadingGray: 'Our approach is straight forward: ',
      mainHeadingBlack: 'we focus on precisely targeting functionality ensuring that every digital solution serves a clear purpose without unnecessary complexity and overhead.',
      description: 'We don\'t overpromise or use flashy marketing language. We simply build well-designed, functional tools and strategies that help businesses succeed.',
      caseTitle: 'Case study (SEO)',
      caseSubtitle: 'ERP Customization, Frontend Optimization',
      brandName: 'asightsolutions®',
      websiteLink: 'RE Automation Website →',
      performanceTitle: 'From Site Audits,',
      performanceSubtitle1: 'Keyword Strategy',
      performanceSubtitle2: 'and Backlink Analytics…',
      performanceNote: '...we do it all.',
      boostLabel: 'Performance Boost:',
      boostTitle: 'Top Ten Keyword Positionings',
      boostKeywords: '+20,',
      boostBounce: 'Bounce rate -23%',
      conversionLabel: 'Conversion Rate Improvement:',
      conversionValue: '2.2% → 5.9%',
      testimonialText: '"Thanks to the strong methodological approach we were able to increase our e-commerce return by 230%"',
      testimonialAuthor: 'Jürgen Rentscher',
      pagehealthLabel: 'Pagehealth score',
      pagehealthDescription: 'We prioritize performance without sacrificing visual appeal or functionality.',
      visitsLabel: 'quarterly visits'
    },
    ctaSimple: {
      brandName: 'asightsolutions®',
      heading: 'Have a project ',
      headingGray: 'in mind?',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Message',
      submitButton: 'Send message',
      copyright: '© 2025 asightsolutions',
      mainHeading: 'Let\'s talk.',
      description: 'Tell us about your project—whether it\'s a process digitalization, SEO or your digital presence on the www.',
      quickResponseTitle: 'Quick response',
      quickResponseText: 'If you\'re ready to create and collaborate, we\'d love to hear from you.',
      clearStepsTitle: 'Clear next Steps',
      clearStepsText: 'After the consultation, we\'ll provide you with a detailed plan and timeline.',
      founderRole: 'Founder Acquisition',
      founderCompany: 'at asight®',
      founderName: 'Alex Eyb'
    },
    teamSection: {
      brandName: 'asightsolutions®',
      heading: 'The faces ',
      headingGray: 'behind',
      headingGray2: 'the projects.',
      missionTitle: 'Be part of our mission',
      missionText: 'If you\'re ready to create and collaborate, we\'d love to hear from you.',
      applyButton: 'Apply now',
      collaborationHeading: 'We believe great work comes from collaboration.',
      collaborationText: 'That\'s why we work closely with each other to ensure every project meets your goals and exceeds expectations.',
      members: [
        { name: 'Florian Bartsch', position: 'CEO', company: 'at asightsolutions®' },
        { name: 'Jürgen Rentschler', position: 'Full Stack Developer', company: 'at asightsolutions®' },
        { name: 'Sophie Gehlert', position: 'Creative Director', company: 'at asightsolutions®' },
        { name: 'Alex Eyb', position: 'UX/UI Designer', company: 'at asightsolutions®' }
      ]
    },
    preFooterSection: {
      phone: 'tel: +49 151 571 65 903',
      email: 'hello@asightsolutions.com',
      navigationTitle: 'Navigation',
      navHome: 'Home',
      navAbout: 'This is us',
      navProjects: 'Projects',
      navBlog: 'Blog',
      socialTitle: 'Social',
      socialTwitter: 'Twitter',
      socialInstagram: 'Instagram',
      socialDribbble: 'Dribbble',
      brandName: 'asight',
      brandSuffix: 'solutions'
    },
    contactWidget: {
      phone: 'Call',
      email: 'Email',
      whatsapp: 'WhatsApp',
      calendar: 'Schedule'
    }
  },
  de: {
    ...servicesDetailed.de,
    hero: {
      services: [
        { title: 'Prozessdigitalisierung', desc: 'Digitale Transformation für effiziente Geschäftsprozesse' },
        { title: 'Unternehmensberatung Digitalisierung', desc: 'Digitalisierung Mittelstand – professionell & BAFA-gefördert' },
        { title: 'Website & SEO Optimierung Stuttgart', desc: 'WordPress Websites erstellen lassen mit Top-Rankings' },
        { title: 'KI Beratung Mittelstand', desc: 'Automatisierung & künstliche Intelligenz für Ihr Business' }
      ],
      seoH1: 'Digitalisierung Unternehmensberatung Stuttgart - A Sight Solutions: KI, Automatisierung & Prozessoptimierung für den Mittelstand',
      tagline: 'Digitale Lösungen und Strategien, die Ihre\nProzesse optimieren und Ihr Business wachsen lassen.',
      founderRole: 'Gründer',
      founderCompany: 'bei asight®',
      contactButton: 'Kontakt aufnehmen',
      swipeHint: '← Wischen zum Entdecken →',
      scrollHint: '↑ Scrollen zum Entdecken ↓',
      swipeOrWait: '← Wischen oder auf Auto-Rotation warten →'
    },
    digitalSolution: {
      badge: '(27)',
      title: 'Ihre\nDigitale\nLösung.',
      subtitle: 'Wir entwickeln digitale Lösungen, die Ihr Unternehmen effizienter, erfolgreicher und zukunftssicher machen. Spezialisiert auf Digitalisierung für den Mittelstand.'
    },
    services: {
      badge: 'Was wir tun',
      title: 'Services (4)',
      items: [
        {
          number: '001',
          name: 'Website Design & SEO Optimierung',
          description: 'Moderne, responsive Websites mit SEO Optimierung Stuttgart. Wir erstellen WordPress Websites, die bei Google ranken und Besucher in Kunden verwandeln. Professionelle Digitalagentur Stuttgart mit nachweisbaren Erfolgen.'
        },
        {
          number: '002',
          name: 'Prozessautomatisierung & ERP Beratung',
          description: 'End-to-End Entwicklung mit modernsten Technologien. Von Prozessautomatisierung Software bis ERP Beratung – wir digitalisieren Ihre Geschäftsprozesse. Full Stack Development und Low-Code Entwicklung für maximale Effizienz.'
        },
        {
          number: '003',
          name: 'KI & Automatisierung Beratung',
          description: 'Maßgeschneiderte KI Beratung für den Mittelstand. Unsere KI-Lösungen automatisieren Workflows, optimieren Entscheidungen und liefern intelligente Insights. Business Automation für Ihre digitale Transformation.'
        },
        {
          number: '004',
          name: 'Alle Services',
          description: 'Entdecken Sie unser komplettes Portfolio: Digitalisierungsberatung, digitale Transformation Beratung, Prozessdigitalisierung und mehr. Von der Digitalisierung für Arztpraxen bis Digitalisierung Behörden – wir begleiten Ihre digitale Reise.'
        }
      ]
    },
    about: {
      badge: 'Das sind wir',
      title: 'Über Uns',
      subtitle: 'Ihr Partner für Digitalisierung Stuttgart',
      description: 'Wir sind eine spezialisierte Unternehmensberatung für Digitalisierung in Stuttgart. Mit BAFA-Förderung und über 200 erfolgreich abgeschlossenen Projekten begleiten wir Unternehmen bei der digitalen Transformation. Als BAFA Berater Stuttgart unterstützen wir besonders den Mittelstand.',
      brandName: 'asightsolutions®',
      mainTitle: 'Wie wir',
      mainTitleGray: 'Prozessoptimierungs-Projekte und Tool-Integrationen umsetzen.',
      introText: 'Sehen Sie, wie unser Team Kreativität, Technologie und Strategie kombiniert, um leistungsstarke digitale Lösungen zu entwickeln.',
      processSteps: [
        {
          number: '01',
          title: 'Mit einem Team mit nachgewiesener Erfahrung in industriellen Bereichen',
          description: 'Tiefes Branchenwissen kombiniert mit technischer Expertise'
        },
        {
          number: '02',
          title: 'Nutzerzentriert mit einem tiefen, erfahrenen aber pragmatischen methodischen Ansatz',
          description: 'Human-Centered Design trifft auf praktische Problemlösung'
        },
        {
          number: '03',
          title: 'Full Stack und Low-Code Entwickler, die Ihre Bedürfnisse verstehen',
          description: 'Technische Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind'
        },
        {
          number: '04',
          title: 'Ergebnisse messbar machen für Ihr Erfolgsgefühl',
          description: 'Transparente Metriken und klare Erfolgsindikatoren'
        }
      ],
      stats: [
        { value: '200+', label: 'Projekte' },
        { value: '10+', label: 'Jahre Erfahrung' },
        { value: '50+', label: 'Zufriedene Kunden' },
        { value: '24/7', label: 'Support' }
      ]
    },
    stats: {
      badge: 'Warum uns wählen',
      mainTitle: 'Nachweisbare Ergebnisse für jedes Projekt,',
      mainTitleGray: 'mit Fokus auf Präzision und Funktionalität.',
      description: 'Kein Overhead, nur Tools die präzise auf Ihre',
      descriptionBr: 'individuellen prozessualen Bedürfnisse abzielen.',
      descriptionGray: 'Durchdachte, leistungsstarke und nutzerzentrierte Tools, die Ihre Arbeit erleichtern.',
      stat1Value: '50+',
      stat1Label: 'Erfolgreich abgeschlossene Projekte',
      stat2Value: '98%',
      stat2Label: 'Kundenzufriedenheit',
      items: [
        { value: '200+', label: 'Erfolgreiche Projekte' },
        { value: '50+', label: 'Zufriedene Kunden' },
        { value: '10+', label: 'Jahre Exzellenz' },
        { value: '24/7', label: 'Support verfügbar' }
      ]
    },
    testimonials: {
      badge: 'Kundenstimmen',
      title: 'Erfahrungen.',
      ratingText: 'Wir haben über 50 Projekte erfolgreich umgesetzt, die Unternehmen messbare Ergebnisse liefern.',
      items: [
        {
          text: 'Die Zusammenarbeit mit A Sight Solutions hat unser Geschäft transformiert. Ihre Expertise in Prozessautomatisierung hat uns unzählige Stunden gespart.',
          author: 'Dr. Tessa Campbell',
          role: 'Geschäftsführer, TechMed Solutions',
          rating: 5
        },
        {
          text: 'Das Team hat eine herausragende Website mit exzellenter SEO Optimierung geliefert. Unsere Online-Sichtbarkeit hat sich deutlich erhöht.',
          author: 'Sarah Weber',
          role: 'Marketing Direktorin, Innovation GmbH',
          rating: 5
        },
        {
          text: 'Professionell, zuverlässig und innovativ. Ihre KI-Lösungen haben unsere Arbeitsabläufe revolutioniert.',
          author: 'Tanja Müller',
          role: 'Operations Manager, Logistics Pro',
          rating: 5
        }
      ],
      statsLabels: {
        toolsDesigned: 'Tools entwickelt',
        successfulProjects: 'Erfolgreiche\nProjekte gestartet',
        clientSatisfaction: 'Kunden-\nzufriedenheit'
      }
    },
    team: {
      badge: 'Unser Team',
      title: 'Unsere Experten',
      members: [
        {
          name: 'Florian Bartsch',
          role: 'Gründer',
          description: 'Experte für digitale Transformation mit über 10 Jahren Erfahrung'
        }
      ]
    },
    faq: {
      title: 'FAQ.',
      subtitle: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Was ist die BAFA-Förderung?',
          answer: 'Die BAFA-Förderung (Bundesamt für Wirtschaft und Ausfuhrkontrolle) unterstützt Unternehmen bei der Digitalisierungsberatung. Als BAFA Berater Stuttgart helfen wir Ihnen, diese Förderung zu beantragen und für Ihre Digitalisierungsprojekte zu nutzen.'
        },
        {
          question: 'Wie lange dauert ein typisches Projekt?',
          answer: 'Die Projektdauer variiert je nach Umfang. Eine WordPress Website erstellen lassen dauert typischerweise 4-8 Wochen, während umfassende Digitalisierungsprojekte 3-6 Monate in Anspruch nehmen können. Wir erstellen detaillierte Zeitpläne im Erstgespräch.'
        },
        {
          question: 'Bieten Sie fortlaufenden Support an?',
          answer: 'Ja! Wir bieten 24/7 Support und Wartungspakete für alle unsere Lösungen an. Unser Team stellt sicher, dass Ihre Systeme reibungslos laufen und stets auf dem neuesten Stand der Technologie bleiben.'
        },
        {
          question: 'Welche Branchen bedienen Sie?',
          answer: 'Wir arbeiten branchenübergreifend – von Digitalisierung Arztpraxis über Digitalisierung Behörden bis hin zu produzierenden Unternehmen und Dienstleistern. Unsere Lösungen sind speziell auf die Digitalisierung für den Mittelstand zugeschnitten.'
        },
        {
          question: 'Was kostet SEO Optimierung?',
          answer: 'Die SEO Optimierung Kosten variieren je nach Projekt-Umfang und Zielen. In einem kostenlosen Erstgespräch analysieren wir Ihre Anforderungen und erstellen ein transparentes Angebot für Ihre Website und SEO-Strategie.'
        }
      ]
    },
    cta: {
      title: 'Bereit für Ihre digitale Transformation?',
      subtitle: 'Lassen Sie uns über Ihre Digitalisierung sprechen',
      button: 'Kontakt aufnehmen',
      features: [
        'Kostenlose Erstberatung',
        'BAFA-Förderung Support',
        'Maßgeschneiderte Lösungen'
      ]
    },
    preFooter: {
      title: 'Lassen Sie uns zusammenarbeiten',
      subtitle: 'Bereit für Ihre digitale Transformation?',
      email: 'hallo@asightsolutions.com',
      phone: '+49 711 1234567'
    },
    footer: {
      copyright: '© 2024 asightsolutions®. Alle Rechte vorbehalten.'
    },
    navigation: {
      links: {
        about: 'Das sind wir',
        projects: 'Projekte',
        blog: 'Blog',
        contact: 'Kontakt'
      },
      menu: 'Menü',
      fullMenu: 'Vollständiges Menü',
      projectCount: '27'
    },
    ourClients: {
      title: 'Unsere Kunden',
      period: '(2016-25©)'
    },
    caseStudy: {
      badge: 'asightsolutions®',
      tagline: 'Jedes Projekt ist auf langfristigen Erfolg ausgelegt.',
      mainHeadingGray: 'Unser Ansatz ist klar: ',
      mainHeadingBlack: 'Wir konzentrieren uns auf präzise Funktionalität und stellen sicher, dass jede digitale Lösung einen klaren Zweck erfüllt – ohne unnötige Komplexität und Overhead.',
      description: 'Wir versprechen nicht zu viel und nutzen keine Marketing-Floskeln. Wir bauen einfach gut durchdachte, funktionale Tools und Strategien, die Unternehmen zum Erfolg verhelfen.',
      caseTitle: 'Fallstudie (SEO)',
      caseSubtitle: 'ERP Anpassung, Frontend Optimierung',
      brandName: 'asightsolutions®',
      websiteLink: 'RE Automation Website →',
      performanceTitle: 'Von Site Audits,',
      performanceSubtitle1: 'Keyword-Strategie',
      performanceSubtitle2: 'bis Backlink-Analyse…',
      performanceNote: '...wir machen alles.',
      boostLabel: 'Performance-Steigerung:',
      boostTitle: 'Top-10-Keyword-Platzierungen',
      boostKeywords: '+20,',
      boostBounce: 'Absprungrate -23%',
      conversionLabel: 'Conversion-Rate-Verbesserung:',
      conversionValue: '2,2% → 5,9%',
      testimonialText: '"Dank des starken methodischen Ansatzes konnten wir unseren E-Commerce-Umsatz um 230% steigern"',
      testimonialAuthor: 'Jürgen Rentschler',
      pagehealthLabel: 'Pagehealth Score',
      pagehealthDescription: 'Wir priorisieren Performance ohne visuelle Attraktivität oder Funktionalität zu opfern.',
      visitsLabel: 'vierteljährliche Besuche'
    },
    ctaSimple: {
      brandName: 'asightsolutions®',
      heading: 'Haben Sie ein Projekt ',
      headingGray: 'im Kopf?',
      namePlaceholder: 'Name',
      emailPlaceholder: 'E-Mail',
      phonePlaceholder: 'Telefon',
      messagePlaceholder: 'Nachricht',
      submitButton: 'Nachricht senden',
      copyright: '© 2025 asightsolutions',
      mainHeading: 'Lassen Sie uns sprechen.',
      description: 'Erzählen Sie uns von Ihrem Projekt – ob Prozessdigitalisierung, SEO oder Ihre digitale Präsenz im Web.',
      quickResponseTitle: 'Schnelle Antwort',
      quickResponseText: 'Wenn Sie bereit sind zu kreieren und zusammenzuarbeiten, würden wir uns freuen, von Ihnen zu hören.',
      clearStepsTitle: 'Klare nächste Schritte',
      clearStepsText: 'Nach der Beratung erhalten Sie einen detaillierten Plan und Zeitplan.',
      founderRole: 'Gründer Akquise',
      founderCompany: 'bei asight®',
      founderName: 'Alex Eyb'
    },
    teamSection: {
      brandName: 'asightsolutions®',
      heading: 'Die Gesichter ',
      headingGray: 'hinter',
      headingGray2: 'den Projekten.',
      missionTitle: 'Seien Sie Teil unserer Mission',
      missionText: 'Wenn Sie bereit sind zu kreieren und zusammenzuarbeiten, würden wir uns freuen, von Ihnen zu hören.',
      applyButton: 'Jetzt bewerben',
      collaborationHeading: 'Wir glauben, dass großartige Arbeit aus Zusammenarbeit entsteht.',
      collaborationText: 'Deshalb arbeiten wir eng miteinander, um sicherzustellen, dass jedes Projekt Ihre Ziele erfüllt und die Erwartungen übertrifft.',
      members: [
        { name: 'Florian Bartsch', position: 'Geschäftsführer', company: 'bei asightsolutions®' },
        { name: 'Jürgen Rentschler', position: 'Full Stack Entwickler', company: 'bei asightsolutions®' },
        { name: 'Sophie Gehlert', position: 'Creative Director', company: 'bei asightsolutions®' },
        { name: 'Alex Eyb', position: 'UX/UI Designer', company: 'bei asightsolutions®' }
      ]
    },
    preFooterSection: {
      phone: 'tel: +49 151 571 65 903',
      email: 'hallo@asightsolutions.com',
      navigationTitle: 'Navigation',
      navHome: 'Home',
      navAbout: 'Das sind wir',
      navProjects: 'Projekte',
      navBlog: 'Blog',
      socialTitle: 'Social',
      socialTwitter: 'Twitter',
      socialInstagram: 'Instagram',
      socialDribbble: 'Dribbble',
      brandName: 'asight',
      brandSuffix: 'solutions'
    },
    contactWidget: {
      phone: 'Anrufen',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      calendar: 'Termin buchen'
    }
  }
} as const

export type TranslationKeys = typeof translations.en
