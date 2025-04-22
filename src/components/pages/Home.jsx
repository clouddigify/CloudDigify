import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';
import PageTemplate from '../templates/PageTemplate';

const Home = () => {
  // Service cards data
  const services = [
    {
      icon: <FaCloud className="text-blue-600 text-2xl" />,
      title: 'Cloud Migration',
      description: 'Seamlessly move your applications, data, and infrastructure to the cloud with minimal disruption.',
      link: '/services/cloud-migration',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: <FaRocket className="text-indigo-600 text-2xl" />,
      title: 'DevOps & CI/CD',
      description: 'Automate your development lifecycle with our DevOps practices and continuous integration/deployment pipelines.',
      link: '/services/devops',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600'
    },
    {
      icon: <FaShieldAlt className="text-cyan-600 text-2xl" />,
      title: 'Security & Compliance',
      description: 'Protect your cloud environment with comprehensive security solutions and ensure compliance with regulations.',
      link: '/services/security-compliance',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600'
    }
  ];

  const pageInfo = {
    title: "Transform Your Business With Cloud Technology",
    description: "Accelerate innovation and achieve remarkable business outcomes with our comprehensive cloud services and solutions.",
    icon: <FaCloud />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Explore Services",
    defaultOverviewTitle: "Our Cloud Services",
    defaultBenefitsTitle: "Why Choose CloudDigify",
    defaultSidebarTitle: "Quick Links",
    defaultSecondaryCta: "Contact Us",
    defaultFeaturesTitle: "Featured Services",
    defaultFeaturesDescription: "Comprehensive cloud solutions designed to help your business innovate faster",
    defaultCtaTitle: "Ready to Transform Your Business?",
    defaultCtaDescription: "Take the first step towards your digital transformation journey with CloudDigify.",
    defaultFinalCta: "Get Started Today",

    // Custom links
    ctaLink: "/services",
    secondaryCtaLink: "/contact",
    finalCtaLink: "/contact",

    // Overview section
    overviewTitle: "Our Cloud Services",
    overviewDescription1: "Comprehensive cloud solutions designed to help your business innovate faster and operate more efficiently.",
    overviewDescription2: "From migration to optimization, we provide end-to-end cloud services tailored to your needs.",

    // Benefits section
    benefitsTitle: "Why Choose CloudDigify",
    benefits: [
      "Expert Cloud Solutions - Tailored strategies for your unique business needs",
      "Seamless Migration - Minimal disruption during cloud transition",
      "24/7 Support - Round-the-clock technical assistance",
      "Cost Optimization - Maximize ROI with efficient cloud resource management",
      "Security First - Enterprise-grade security measures",
      "Scalable Infrastructure - Grow your infrastructure as your business expands"
    ],

    // Sidebar
    sidebarTitle: "Quick Links",
    approachPoints: [
      "Cloud Migration Services",
      "DevOps Solutions",
      "Security & Compliance",
      "Managed Services",
      "Training Programs",
      "Case Studies"
    ],

    // Features section
    featuresTitle: "Featured Services",
    featuresDescription: "Our most popular cloud solutions and services",
    features: services.map(service => ({
      title: service.title,
      description: service.description,
      icon: service.icon,
      link: service.link,
      features: [
        'Rapid Implementation',
        'Expert Support',
        'Best Practices',
        'Continuous Optimization'
      ]
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className={`h-14 w-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className={`${service.textColor} font-medium hover:opacity-80 inline-flex items-center`}>
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )
      },
      {
        content: (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-2xl font-bold">AB</span>
              </div>
              <div>
                <svg className="h-8 w-8 text-yellow-400 mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                  "CloudDigify transformed our infrastructure by migrating our legacy systems to the cloud. The process was seamless, and we've seen a 40% reduction in our IT costs while improving performance and reliability."
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Barton</h4>
                  <p className="text-gray-600">CTO, FinTech Innovations</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        content: (
          <>
            <WhyChooseUs />
            <Testimonials />
            <Partners />
            <QuickContact />
          </>
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

export default Home;