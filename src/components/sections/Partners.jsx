import React from 'react';
import { FaAward, FaCheckCircle, FaHandshake } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';
import LazyImage from '../common/LazyImage';

const Partners = () => {
  // Partner logo data (local assets only; no third-party hotlinks)
  const partners = [
    {
      id: 1,
      name: 'AWS',
      logo: '/images/aws-logo.svg',
      alt: 'AWS Logo'
    },
    {
      id: 2,
      name: 'Microsoft Azure',
      logo: '/images/azure-logo.svg',
      alt: 'Microsoft Azure Logo'
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/images/gcp-logo.svg',
      alt: 'Google Cloud Logo'
    },
    {
      id: 4,
      name: 'Oracle Cloud',
      logo: '/images/oracle-logo.svg',
      alt: 'Oracle Cloud Logo'
    }
  ];

  // Security practice highlights (no certification claims)
  const certifications = [
    "Security-conscious delivery practices",
    "Role-based access controls",
    "Secure cloud architecture",
    "Operational security practices"
  ];

  const pageInfo = {
    title: "Our Partners",
    description: "We partner with industry leaders and follow security-conscious delivery practices to provide reliable cloud services.",
    icon: <FaHandshake />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Become a Partner",
    defaultOverviewTitle: "Strategic Partnerships",
    defaultBenefitsTitle: "Partnership Benefits",
    defaultSidebarTitle: "Security Practices",
    defaultSecondaryCta: "Contact Us",
    defaultFeaturesTitle: "Technology Partners",
    defaultFeaturesDescription: "Leading technology companies we work with",
    defaultCtaTitle: "Ready to Partner With Us?",
    defaultCtaDescription: "Join our network of industry-leading technology partners and grow your business.",
    defaultFinalCta: "Get Started",

    // Custom links
    ctaLink: "/partner-program",
    secondaryCtaLink: "/contact",
    finalCtaLink: "/partner-program",

    // Overview section
    overviewTitle: "Strategic Partnerships",
    overviewDescription1: "We collaborate with industry leaders to deliver cutting-edge cloud solutions and services.",
    overviewDescription2: "Our partnerships enable us to provide best-in-class technology solutions to our clients.",

    // Benefits section
    benefitsTitle: "Partnership Benefits",
    benefits: [
      "Access to Enterprise Solutions - Leverage our extensive technology stack",
      "Joint Marketing - Co-branded marketing opportunities and events",
      "Technical Support - Priority access to our technical expertise",
      "Training Programs - Comprehensive partner training and certification",
      "Revenue Sharing - Attractive partnership revenue models",
      "Innovation Access - Early access to new features and solutions"
    ],

    // Sidebar (Security practices)
    sidebarTitle: "Our Security Practices",
    approachPoints: certifications,

    // Features section (Technology Partners)
    featuresTitle: "Technology Partners",
    featuresDescription: "Our strategic technology partnerships enable us to deliver comprehensive cloud solutions",
    features: partners.map(partner => ({
      title: partner.name,
      description: `Strategic partnership with ${partner.name} for cloud solutions and services.`,
      icon: <FaAward />,
      features: [
        'Technology Partner',
        'Enterprise Solutions',
        'Technical Expertise',
        'Joint Innovation'
      ]
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-blue-50 rounded-full mr-4">
                <FaAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Strategic Partnerships</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="h-24 flex items-center justify-center relative group"
                >
                  <LazyImage 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-h-full max-w-full object-contain transition-opacity duration-300 z-10"
                    width={200}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-blue-50 rounded-full mr-4">
                <FaCheckCircle className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Security Practices</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg text-center flex items-center justify-center"
                >
                  <span className="text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],

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

export default Partners; 