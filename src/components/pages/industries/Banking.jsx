import React from 'react';
import { FaUniversity, FaServer, FaMobileAlt, FaShieldAlt, FaCreditCard } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const Banking = () => {
  // Define the industry info object
  const pageInfo = {
    title: "Banking",
    description: "Accelerate digital transformation and enhance customer experiences with secure, scalable cloud solutions for the banking sector.",
    icon: <FaUniversity size={36} className="mb-4 text-blue-600" />,
    heroBackground: "from-blue-800 to-indigo-900",
    
    overviewTitle: "Banking Industry Overview",
    overviewDescription1: "The banking industry is undergoing a profound digital transformation driven by changing customer expectations, regulatory pressures, and technological advancements. As traditional banking models evolve, financial institutions must embrace cloud solutions to remain competitive, agile, and customer-focused.",
    overviewDescription2: "CloudDigify helps banking organizations navigate this complex digital landscape with secure and innovative cloud solutions specifically designed for the unique challenges of the financial services sector. From core banking modernization to digital customer experiences, we provide the expertise and technology to drive your banking transformation.",
    
    challenges: [
      "Meeting rising customer expectations for digital banking experiences",
      "Managing increasing security threats and regulatory compliance",
      "Modernizing legacy core banking systems and infrastructure",
      "Competing with fintech disruptors and digital-first banks",
      "Optimizing operational costs while improving service delivery"
    ],
    
    sidebarTitle: "Why Choose Us for Banking",
    approachPoints: [
      "Deep understanding of banking operations and regulations",
      "Specialized security frameworks for financial services",
      "Experience with core banking systems integration",
      "Proven expertise in banking digital transformation"
    ],
    secondaryCta: "Schedule a Banking Consultation",
    
    sidebarContent: {
      title: "Banking Compliance Expertise",
      description: "Our team includes former banking technology leaders who understand the unique regulatory requirements of the industry, including PCI-DSS, GDPR, AML, KYC, and regional banking regulations."
    },
    
    solutionsTitle: "Our Banking Solutions",
    solutions: [
      {
        title: "Core Banking Modernization",
        icon: <FaServer className="text-blue-600 text-3xl mb-3" />,
        description: "Transform your legacy core banking systems into modern, cloud-based platforms that enhance agility, reduce costs, and support innovation.",
        features: ["API-first architecture", "Microservices-based systems", "Real-time processing capabilities"]
      },
      {
        title: "Digital Banking Platforms",
        icon: <FaMobileAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Create seamless omnichannel banking experiences across mobile, web, and branch with modern digital platforms powered by cloud technology.",
        features: ["Personalized customer experiences", "Integrated banking journeys", "Advanced analytics and insights"]
      },
      {
        title: "Banking Security & Compliance",
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Implement robust security measures and compliance frameworks specifically designed for banking regulations and industry standards.",
        features: ["Comprehensive threat detection", "Regulatory compliance automation", "Zero-trust security architecture"]
      },
      {
        title: "Payment Systems Modernization",
        icon: <FaCreditCard className="text-blue-600 text-3xl mb-3" />,
        description: "Deploy modern payment infrastructure to support real-time payments, open banking, and emerging payment technologies.",
        features: ["Real-time payment processing", "Open banking APIs", "Fraud detection and prevention"]
      }
    ],
    
    caseStudy: {
      title: "Success Story: Digital Banking Transformation",
      client: "Regional Commercial Bank",
      challenge: "A mid-sized commercial bank was struggling with outdated core banking systems that couldn't support their digital growth objectives. Their customers were demanding more digital services, while the bank faced increasing competition from digital-only banks and fintech companies. Additionally, they needed to ensure ongoing compliance with evolving regulations.",
      solution: "CloudDigify implemented a phased core banking modernization approach, starting with a cloud-based digital layer that integrated with their existing systems. We developed APIs to enable safe, controlled access to core banking functions, deployed a new digital banking platform, and implemented a robust security and compliance framework tailored to financial services regulations.",
      results: [
        "68% increase in digital customer engagement within 6 months",
        "45% reduction in time-to-market for new banking products",
        "30% decrease in operational costs through cloud optimization",
        "Achieved full compliance with banking regulations while enhancing security posture"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Banking Business?",
    ctaDescription: "Contact our team to discuss how our cloud solutions can help your banking institution deliver exceptional digital experiences while maintaining security and compliance.",
    finalCta: "Start Your Banking Transformation"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="industry" />;
};

export default Banking; 