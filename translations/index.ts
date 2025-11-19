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
          name: 'Website Design & Google Ads',
          description: 'Modern websites with professional SEO and Google Ads consulting. Is SEO worth it? Definitely! Unlike other SEO agencies, we show you transparently what SEO costs and delivers. Digital agency Stuttgart with proven results.'
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
          title: 'Industry Experience & Expertise',
          description: 'Deep knowledge in healthcare, government, manufacturing and SME sectors combined with technical expertise'
        },
        {
          number: '02',
          title: 'Change Management',
          description: 'We guide your team through digital transformation – from strategy to sustainable adoption of new working methods'
        },
        {
          number: '03',
          title: 'Workflow Automation',
          description: 'We connect your digital tools seamlessly and create continuous business processes without media breaks'
        },
        {
          number: '04',
          title: 'Measurable Results',
          description: 'Transparent metrics and clear success indicators – you see exactly what your investment delivers'
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
    },
    industriesBranchen: {
      badge: 'Industry Solutions',
      title: 'Digitalization for Specific Industries',
      subtitle: 'Tailored solutions for your industry',
      items: [
        {
          title: 'Medical Practices & Healthcare',
          description: 'Healthcare digitalization with focus on electronic health records. We implement digital tools for practice management, appointment scheduling, and secure patient communication. GDPR-compliant and future-proof.',
          features: ['Electronic Health Records', 'Digital Appointment Management', 'Secure Patient Communication', 'GDPR-compliant Solutions']
        },
        {
          title: 'Government & Public Administration',
          description: 'Government digitalization with modern business process solutions. We optimize administrative processes, implement e-government solutions, and create efficient digital workflows for citizen services.',
          features: ['E-Government Solutions', 'Digital Citizen Services', 'Process Optimization', 'Secure Data Processing']
        },
        {
          title: 'SMEs & Manufacturing',
          description: 'Specialized digitalization for SMEs. From production planning to customer service – we digitalize your business processes end-to-end with proven digital tools.',
          features: ['ERP Integration', 'Production Optimization', 'Supply Chain Digitalization', 'Customer Portal Solutions']
        }
      ]
    }
  },
  de: {
    ...servicesDetailed.de,
    hero: {
      services: [
        { title: 'Prozessdigitalisierung', desc: 'Workflow Automatisierung für effiziente digitale Prozesse' },
        { title: 'Digitale Transformation Beratung', desc: 'Digitalisierung Mittelstand – professionell & BAFA-gefördert' },
        { title: 'Website WordPress erstellen lassen', desc: 'SEO-optimierte Websites mit Top-Rankings in Stuttgart' },
        { title: 'KI & Business Automation', desc: 'Automation in Business – künstliche Intelligenz für Dein Unternehmen' }
      ],
      seoH1: 'Digitalisierung Unternehmensberatung Stuttgart - A Sight Solutions: KI, Automatisierung & Prozessoptimierung für den Mittelstand',
      tagline: 'Digitale Lösungen und Strategien, die Deine Prozesse optimieren und Dein Business wachsen lassen.',
      founderRole: 'Gründer',
      founderCompany: 'bei asight®',
      contactButton: 'Kontakt aufnehmen',
      swipeHint: '← Wischen zum Entdecken →',
      scrollHint: '↑ Scrollen zum Entdecken ↓',
      swipeOrWait: '← Wischen oder auf Auto-Rotation warten →'
    },
    digitalSolution: {
      badge: '(27)',
      title: 'Deine\nDigitale\nLösung.',
      subtitle: 'Wir entwickeln digitale Lösungen und optimieren digitale Prozesse, die Dein Unternehmen effizienter, erfolgreicher und zukunftssicher machen. Spezialisiert auf Digitalisierung für den Mittelstand mit Prozessautomatisierung Software und Workflow Automatisierung.'
    },
    services: {
      badge: 'Was wir tun',
      title: 'Services (4)',
      items: [
        {
          number: '001',
          name: 'Prozessdigitalisierung für den Mittelstand – Effizienz steigern, Kosten senken',
          description: 'Transformiere Deine analogen Prozesse in effiziente digitale Workflows. Prozessautomatisierung Software und digitale Prozesse für maximale Effizienz im Mittelstand.'
        },
        {
          number: '002',
          name: 'Unternehmensberatung Digitalisierung Stuttgart – Dein Partner für digitale Transformation',
          description: 'Ganzheitliche Digitalisierungsstrategie und digitale Transformation Beratung mit professionellem Change Management. Als ERP Berater und Unternehmensberatung Digitalisierung Stuttgart begleiten wir Dich bei der digitalen Transformation.'
        },
        {
          number: '003',
          name: 'KI-Beratung Mittelstand – Künstliche Intelligenz praktisch einsetzen',
          description: 'Maßgeschneiderte KI Beratung für den Mittelstand. Unsere KI-Lösungen automatisieren Workflows, optimieren Entscheidungen und liefern intelligente Insights. Business Automation für Deine digitale Transformation.'
        },
        {
          number: '004',
          name: 'Website erstellen lassen Stuttgart – SEO & Google Ads',
          description: 'Moderne WordPress Websites erstellen lassen mit professioneller SEO und Google Ads Beratung. Lohnt sich SEO? Definitiv! Anders als andere SEO Agenturen zeigen wir Dir transparent die Kosten für SEO und was sie bringen. Digitalagentur Stuttgart mit nachweisbaren Erfolgen.'
        }
      ]
    },
    about: {
      badge: 'Das sind wir',
      title: 'Über Uns',
      subtitle: 'Dein Partner für digitale Transformation Beratung Stuttgart',
      description: 'Wir sind eine spezialisierte Unternehmensberatung für Digitalisierung in Stuttgart. Mit BAFA-Förderung und über 200 erfolgreich abgeschlossenen Projekten begleiten wir Unternehmen bei der digitalen Transformation. Als ERP Berater und BAFA Berater Stuttgart unterstützen wir den Mittelstand mit Prozessautomatisierung Software und professionellem Change Management.',
      brandName: 'asightsolutions®',
      mainTitle: 'Wie wir',
      mainTitleGray: 'Prozessoptimierungs-Projekte und Tool-Integrationen umsetzen.',
      introText: 'Sieh, wie unser Team Kreativität, Technologie und Strategie kombiniert, um leistungsstarke digitale Lösungen zu entwickeln.',
      processSteps: [
        {
          number: '01',
          title: 'Branchenerfahrung & Expertise',
          description: 'Tiefes Wissen in Gesundheitswesen, Behörden, Produktion und Mittelstand kombiniert mit technischer Expertise'
        },
        {
          number: '02',
          title: 'Change Management',
          description: 'Wir begleiten Dein Team durch die digitale Transformation – von der Strategie bis zur nachhaltigen Verankerung neuer Arbeitsweisen'
        },
        {
          number: '03',
          title: 'Workflow Automatisierung',
          description: 'Wir verbinden Deine digitalen Tools nahtlos und schaffen durchgängige Business Processes ohne Medienbrüche'
        },
        {
          number: '04',
          title: 'Messbare Ergebnisse',
          description: 'Transparente Metriken und klare Erfolgsindikatoren – Du siehst genau, was Deine Investition bringt'
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
      description: 'Kein Overhead, nur Tools die präzise auf Deine',
      descriptionBr: 'individuellen prozessualen Bedürfnisse abzielen.',
      descriptionGray: 'Durchdachte, leistungsstarke und nutzerzentrierte Tools, die Deine Arbeit erleichtern.',
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
          text: 'Die Zusammenarbeit mit A Sight Solutions hat unser Geschäft transformiert. Eure Expertise in Prozessautomatisierung hat uns unzählige Stunden gespart.',
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
          text: 'Professionell, zuverlässig und innovativ. Eure KI-Lösungen haben unsere Arbeitsabläufe revolutioniert.',
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
          answer: 'Die BAFA-Förderung (Bundesamt für Wirtschaft und Ausfuhrkontrolle) unterstützt Unternehmen bei der Digitalisierungsberatung. Als BAFA Berater Stuttgart helfen wir Dir, diese Förderung zu beantragen und für Deine Digitalisierungsprojekte zu nutzen.'
        },
        {
          question: 'Wie lange dauert ein typisches Projekt?',
          answer: 'Die Projektdauer variiert je nach Umfang. Eine WordPress Website erstellen lassen dauert typischerweise 4-8 Wochen, während umfassende Digitalisierungsprojekte 3-6 Monate in Anspruch nehmen können. Wir erstellen detaillierte Zeitpläne im Erstgespräch.'
        },
        {
          question: 'Bietest du fortlaufenden Support an?',
          answer: 'Ja! Wir bieten 24/7 Support und Wartungspakete für alle unsere Lösungen an. Unser Team stellt sicher, dass Deine Systeme reibungslos laufen und stets auf dem neuesten Stand der Technologie bleiben.'
        },
        {
          question: 'Welche Branchen bedienst du?',
          answer: 'Wir arbeiten branchenübergreifend mit Fokus auf Automation in Business: Digitalisierung Arztpraxis, Digitalisierung Behörden, produzierende Unternehmen und Dienstleister. Unsere Workflow Automatisierung und digitale Prozesse sind speziell auf die Digitalisierung für den Mittelstand zugeschnitten.'
        },
        {
          question: 'Was kostet SEO Optimierung?',
          answer: 'Lohnt sich SEO? Definitiv – die Kosten für SEO amortisieren sich durch nachhaltigen Traffic. Die SEO Optimierung Kosten variieren je nach Projekt-Umfang und Zielen. Unsere professionelle SEO Beratung zeigt Dir transparent, was möglich ist. In einem kostenlosen Erstgespräch analysieren wir Deine Anforderungen und erstellen ein transparentes Angebot für Deine WordPress Websites und SEO-Strategie.'
        }
      ]
    },
    cta: {
      title: 'Bereit für Deine digitale Transformation?',
      subtitle: 'Lass uns über Deine Digitalisierung sprechen',
      button: 'Kontakt aufnehmen',
      features: [
        'Kostenlose Erstberatung',
        'BAFA-Förderung Support',
        'Maßgeschneiderte Lösungen'
      ]
    },
    preFooter: {
      title: 'Lass uns zusammenarbeiten',
      subtitle: 'Bereit für Deine digitale Transformation?',
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
      heading: 'Hast Du ein Projekt ',
      headingGray: 'im Kopf?',
      namePlaceholder: 'Name',
      emailPlaceholder: 'E-Mail',
      phonePlaceholder: 'Telefon',
      messagePlaceholder: 'Nachricht',
      submitButton: 'Nachricht senden',
      copyright: '© 2025 asightsolutions',
      mainHeading: 'Lass uns sprechen.',
      description: 'Erzähl uns von Deinem Projekt – ob Prozessdigitalisierung, SEO oder Deine digitale Präsenz im Web.',
      quickResponseTitle: 'Schnelle Antwort',
      quickResponseText: 'Wenn Du bereit bist zu kreieren und zusammenzuarbeiten, würden wir uns freuen, von Dir zu hören.',
      clearStepsTitle: 'Klare nächste Schritte',
      clearStepsText: 'Nach der Beratung erhältst Du einen detaillierten Plan und Zeitplan.',
      founderRole: 'Gründer Akquise',
      founderCompany: 'bei asight®',
      founderName: 'Alex Eyb'
    },
    teamSection: {
      brandName: 'asightsolutions®',
      heading: 'Die Gesichter ',
      headingGray: 'hinter',
      headingGray2: 'den Projekten.',
      missionTitle: 'Sei Teil unserer Mission',
      missionText: 'Wenn Du bereit bist zu kreieren und zusammenzuarbeiten, würden wir uns freuen, von Dir zu hören.',
      applyButton: 'Jetzt bewerben',
      collaborationHeading: 'Wir glauben, dass großartige Arbeit aus Zusammenarbeit entsteht.',
      collaborationText: 'Deshalb arbeiten wir eng miteinander, um sicherzustellen, dass jedes Projekt Deine Ziele erfüllt und die Erwartungen übertrifft.',
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
    },
    industriesBranchen: {
      badge: 'Branchenlösungen',
      title: 'Digitalisierung für spezielle Branchen',
      subtitle: 'Maßgeschneiderte Lösungen für Deine Branche',
      items: [
        {
          title: 'Arztpraxen & Gesundheitswesen',
          description: 'Digitalisierung Arztpraxis mit Fokus auf die elektronische Patientenakte (ePA). Wir implementieren digitale Tools für Praxismanagement, Terminverwaltung und sichere Patientenkommunikation. DSGVO-konform und zukunftssicher.',
          features: ['Elektronische Patientenakte ePA', 'Digitale Terminverwaltung', 'Sichere Patientenkommunikation', 'DSGVO-konforme Lösungen']
        },
        {
          title: 'Behörden & Öffentliche Verwaltung',
          description: 'Digitalisierung Behörden mit modernen Business Process Lösungen. Wir optimieren Verwaltungsprozesse, implementieren E-Government-Lösungen und schaffen effiziente digitale Workflows für Bürgerservices.',
          features: ['E-Government Lösungen', 'Digitale Bürgerservices', 'Prozessoptimierung Verwaltung', 'Sichere Datenverarbeitung']
        },
        {
          title: 'Mittelstand & Produktion',
          description: 'Spezialisierte Digitalisierung für den Mittelstand. Von der Produktionsplanung bis zum Kundenservice – wir digitalisieren Deine Business Processes end-to-end mit bewährten digitalen Tools.',
          features: ['ERP-Integration', 'Produktionsoptimierung', 'Supply Chain Digitalisierung', 'Kundenportal-Lösungen']
        }
      ]
    }
  }
} as const

export type TranslationKeys = typeof translations.en
