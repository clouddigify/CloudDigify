import React from 'react';
import { FaIndustry, FaRobot, FaChartLine, FaNetworkWired, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const Manufacturing = () => {
  // Define the industry info object
  const pageInfo = {
    title: "Manufacturing",
    description: "Accelerate digital transformation in manufacturing with cloud solutions that enhance operational efficiency, enable smart factories, and drive innovation.",
    icon: <FaIndustry size={36} className="mb-4 text-blue-600" />,
    heroBackground: "from-blue-700 to-indigo-800",
    
    overviewTitle: "Manufacturing Industry Overview",
    overviewDescription1: "The manufacturing industry is undergoing a significant digital transformation with Industry 4.0, IoT, and smart factory initiatives. Manufacturers face pressure to increase operational efficiency, improve product quality, reduce time-to-market, and maintain competitiveness in a global marketplace.",
    overviewDescription2: "CloudDigify helps manufacturing organizations leverage cloud technologies to transform operations, optimize production processes, enable data-driven decision making, and create connected, intelligent manufacturing environments that drive innovation and growth.",
    
    challenges: [
      "Modernizing legacy production systems and infrastructure",
      "Implementing IoT and smart factory initiatives",
      "Managing and analyzing large volumes of production data",
      "Ensuring operational technology (OT) and IT security",
      "Optimizing supply chain and inventory management",
      "Reducing downtime and increasing equipment effectiveness"
    ],
    
    sidebarTitle: "Why Choose Us for Manufacturing",
    approachPoints: [
      "Deep expertise in manufacturing technology integration",
      "Experience with industrial IoT implementations",
      "Secure OT/IT convergence methodologies",
      "Data analytics and AI capabilities for manufacturing",
      "Industry 4.0 and smart factory transformation"
    ],
    secondaryCta: "Schedule Manufacturing Consultation",
    
    sidebarContent: {
      title: "Industry 4.0 Expertise",
      description: "Our team includes manufacturing technology specialists who understand the unique requirements of modern production environments, Industry 4.0 implementations, and the challenges of integrating cloud with operational technology."
    },
    
    solutionsTitle: "Our Manufacturing Solutions",
    solutions: [
      {
        title: "Smart Factory Enablement",
        icon: <FaRobot className="text-blue-600 text-3xl mb-3" />,
        description: "Transform traditional manufacturing facilities into connected, intelligent smart factories with IoT, edge computing, and real-time analytics capabilities.",
        features: [
          "IoT sensor integration and management", 
          "Real-time production monitoring", 
          "Predictive quality control systems"
        ]
      },
      {
        title: "Manufacturing Analytics Platform",
        icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
        description: "Harness the power of your production data with advanced analytics, AI, and machine learning to optimize operations and enable predictive capabilities.",
        features: [
          "Predictive maintenance solutions", 
          "Production optimization analytics", 
          "Quality control and defect prediction"
        ]
      },
      {
        title: "OT/IT Security Framework",
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Implement robust security frameworks designed specifically for manufacturing environments with converged operational and information technology.",
        features: [
          "Industrial security assessment", 
          "OT/IT security architecture", 
          "Zero-trust manufacturing networks"
        ]
      },
      {
        title: "Digital Supply Chain Integration",
        icon: <FaNetworkWired className="text-blue-600 text-3xl mb-3" />,
        description: "Create a connected, resilient supply chain with cloud-based integration, visibility, and collaboration tools for manufacturers.",
        features: [
          "Supplier network digitalization", 
          "Inventory optimization systems", 
          "End-to-end supply chain visibility"
        ]
      }
    ],
    
    caseStudy: {
      title: "Success Story: Manufacturing Digital Transformation",
      client: "Leading Industrial Equipment Manufacturer",
      challenge: "A major industrial equipment manufacturer was struggling with aging production systems, siloed data, frequent unplanned downtime, and inability to meet increasing customer demand for customization. They needed a comprehensive digital transformation to remain competitive and enable future growth.",
      solution: "CloudDigify implemented a cloud-based smart factory platform that integrated IoT sensors across production lines, deployed edge computing for real-time processing, created a manufacturing data lake for analytics, and implemented predictive maintenance systems. We also established a secure OT/IT framework and provided training for the workforce.",
      results: [
        "27% reduction in unplanned downtime through predictive maintenance",
        "35% improvement in overall equipment effectiveness (OEE)",
        "40% faster new product introduction through digital twins and simulation",
        "18% reduction in quality-related defects with real-time analytics",
        "Significant increase in customization capabilities while maintaining efficiency"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Manufacturing Operations?",
    ctaDescription: "Contact our team to discuss how our cloud solutions can help your manufacturing organization increase operational efficiency, enable smart factory initiatives, and drive innovation.",
    finalCta: "Start Your Manufacturing Transformation"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="industry" />;
};

export default Manufacturing; 