import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaIndustry,
  FaProjectDiagram,
  FaCheckCircle,
  FaCubes,
  FaArrowRight,
  FaCog
} from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

// Main service categories - matching our nav structure
const serviceCategories = [
  {
    title: 'Cloud Services',
    icon: <FaCloud className="text-4xl text-blue-600 mb-4" />,
    description: 'Infrastructure modernization, cloud migration, optimization, and disaster recovery solutions.',
    path: '/services/cloud-infrastructure',
    featured: ['Cloud Migration', 'Cloud Optimization', 'Disaster Recovery']
  },
  {
    title: 'DevOps & Engineering',
    icon: <FaCode className="text-4xl text-blue-600 mb-4" />,
    description: 'CI/CD pipelines, infrastructure as code, containerization, and serverless architectures.',
    path: '/services/devops',
    featured: ['DevOps & CI/CD', 'Infrastructure as Code', 'Containerization']
  },
  {
    title: 'Security & Compliance',
    icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
    description: 'Secure your cloud environments with advanced protection and compliance frameworks.',
    path: '/services/security-compliance',
    featured: ['Security & Compliance', 'Cyber Defense', 'Privacy Services']
  },
  {
    title: 'Data & Analytics',
    icon: <FaDatabase className="text-4xl text-blue-600 mb-4" />,
    description: 'Data warehousing, business intelligence, and advanced analytics solutions.',
    path: '/services/data-analytics',
    featured: ['Business Intelligence', 'Data Warehousing', 'Big Data Solutions']
  },
  {
    title: 'Digital Experiences',
    icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />,
    description: 'Create engaging digital experiences with modern UI/UX and mobility solutions.',
    path: '/services/experience-design',
    featured: ['Experience Design', 'Enterprise Mobility', 'Digital Integration']
  },
  {
    title: 'AI & Automation',
    icon: <FaBrain className="text-4xl text-blue-600 mb-4" />,
    description: 'Intelligent automation, AI solutions, and cognitive services for business transformation.',
    path: '/services/artificial-intelligence',
    featured: ['Artificial Intelligence', 'Intelligent Automation', 'Cognitive Services']
  },
  {
    title: 'Enterprise Services',
    icon: <FaServer className="text-4xl text-blue-600 mb-4" />,
    description: 'Managed services, architecture design, and application development & maintenance.',
    path: '/services/managed-services',
    featured: ['Managed Cloud Services', 'Architecture Design', 'Application Development']
  },
  {
    title: 'Industry Solutions',
    icon: <FaIndustry className="text-4xl text-blue-600 mb-4" />,
    description: 'Industry 4.0, blockchain, and quality engineering for sector-specific needs.',
    path: '/services/industry-4-0',
    featured: ['Industry 4.0', 'Blockchain Solutions', 'Quality Engineering']
  },
  {
    title: 'Consulting Services',
    icon: <FaProjectDiagram className="text-4xl text-blue-600 mb-4" />,
    description: 'Strategic technology consulting and digital transformation advisory.',
    path: '/services/technology-consulting',
    featured: ['Digital Transformation', 'Enterprise Architecture', 'Business Process Consulting']
  },
  {
    title: 'Quality Assurance',
    icon: <FaCheckCircle className="text-4xl text-blue-600 mb-4" />,
    description: 'Comprehensive testing and quality engineering for software systems.',
    path: '/services/quality-assurance',
    featured: ['Test Automation', 'Performance Testing', 'Security Testing']
  },
  {
    title: 'Specialized Solutions',
    icon: <FaCubes className="text-4xl text-blue-600 mb-4" />,
    description: 'IoT, platform engineering, and smart city solutions for emerging technologies.',
    path: '/services/iot-solutions',
    featured: ['Platform Engineering', 'Smart City Solutions', 'Reimagined Enterprise']
  }
];

const Services = () => {
  const pageInfo = {
    title: "Comprehensive Cloud & Digital Services",
    description: "End-to-end solutions to transform, scale, and secure your enterprise technology landscape",
    icon: <FaCog />,
    heroBackground: "from-blue-700 to-indigo-800",

    // Default text configurations
    defaultCtaText: "Contact Us",
    defaultOverviewTitle: "Our Service Portfolio",
    defaultBenefitsTitle: "Service Categories",
    defaultSidebarTitle: "Our Approach",
    defaultSecondaryCta: "Explore Training",
    defaultFeaturesTitle: "Featured Services",
    defaultFeaturesDescription: "Our most popular enterprise solutions",
    defaultCtaTitle: "Ready to Start Your Digital Transformation?",
    defaultCtaDescription: "Partner with CloudDigify for comprehensive solutions that drive innovation and growth.",
    defaultFinalCta: "Get Started",

    // Custom links
    ctaLink: "/contact",
    secondaryCtaLink: "/training",
    finalCtaLink: "/contact",

    // Overview section
    overviewTitle: "Our Service Portfolio",
    overviewDescription1: "CloudDigify offers a comprehensive suite of digital and cloud services to help enterprises at every stage of their technology transformation journey.",
    overviewDescription2: "From cloud infrastructure to AI-driven solutions, we provide end-to-end services to modernize and optimize your technology landscape.",

    // Benefits section (Service Categories)
    benefitsTitle: "Service Categories",
    benefits: serviceCategories.map(service => 
      `${service.title}: ${service.description}`
    ),

    // Sidebar (Our Approach)
    sidebarTitle: "Our Approach",
    approachPoints: [
      "1. Assess - Evaluate your current environment",
      "2. Design - Create tailored strategy",
      "3. Implement - Execute with agility",
      "4. Optimize - Continuous improvement"
    ],

    // Features section (Featured Services)
    featuresTitle: "Featured Services",
    featuresDescription: "Our most popular and comprehensive enterprise solutions",
    features: [
      {
        title: "Cloud & Infrastructure",
        description: "Modernize your IT infrastructure with our cloud-first approach, from migration to optimization.",
        icon: <FaCloud />,
        link: "/services/cloud-infrastructure",
        features: [
          "Cloud Migration & Modernization",
          "Infrastructure Optimization",
          "Disaster Recovery",
          "Managed Cloud Services"
        ]
      },
      {
        title: "Digital Transformation",
        description: "Reimagine your business processes and customer experiences with innovative digital solutions.",
        icon: <FaProjectDiagram />,
        link: "/services/digital-transformation",
        features: [
          "Process Automation",
          "Digital Experience Design",
          "Enterprise Integration",
          "Business Analytics"
        ]
      },
      {
        title: "Technology Excellence",
        description: "Accelerate innovation with DevOps, quality engineering, and intelligent automation.",
        icon: <FaCode />,
        link: "/services/technology-excellence",
        features: [
          "DevOps Implementation",
          "Quality Engineering",
          "Intelligent Automation",
          "Performance Optimization"
        ]
      }
    ],

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Cloud & Infrastructure</h3>
              <p className="text-gray-700">Modernize your IT infrastructure with our cloud-first approach, from migration to optimization.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Digital Transformation</h3>
              <p className="text-gray-700">Reimagine your business processes and customer experiences with innovative digital solutions.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Technology Excellence</h3>
              <p className="text-gray-700">Accelerate innovation with DevOps, quality engineering, and intelligent automation.</p>
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map(({ title, icon, description, path, featured }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full">
                <div>{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                
                <div className="mt-2 mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Featured Services:</h4>
                  <ul className="space-y-1">
                    {featured.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={path} 
                  className="text-blue-600 font-medium inline-flex items-center mt-auto group"
                >
                  Explore {title}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        )
      }
    ],

    // CTA section
    ctaTitle: "Ready to Start Your Digital Transformation?",
    ctaDescription: "Partner with CloudDigify for comprehensive solutions that drive innovation and growth.",
    finalCta: "Contact Us",

    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showSecondaryCta: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default Services; 