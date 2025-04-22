import React from 'react';
import { FaShieldAlt, FaUsers, FaCertificate, FaClock, FaServer, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

// Company strengths data
const reasons = [
  {
    icon: <FaShieldAlt className="h-10 w-10" />,
    title: "Trusted Partner",
    description: "Your trusted partner in IT transformation & security with over 5 years of experience delivering reliable cloud solutions to enterprises worldwide."
  },
  {
    icon: <FaUsers className="h-10 w-10" />,
    title: "Expert Team",
    description: "Team of 50+ certified cloud professionals across AWS, Azure and OCI with specialized expertise in security, DevOps, and migration strategies."
  },
  {
    icon: <FaCertificate className="h-10 w-10" />,
    title: "Industry Certifications",
    description: "ISO 9001:2015 and ISO/IEC 27001:2022 certified processes and services that ensure the highest standards of quality and security."
  },
  {
    icon: <FaClock className="h-10 w-10" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support with rapid issue resolution, ensuring your operations run smoothly with minimal downtime."
  },
  {
    icon: <FaServer className="h-10 w-10" />,
    title: "Scalable Solutions",
    description: "Custom cloud solutions designed to scale with your business needs, providing flexibility without compromising performance."
  },
  {
    icon: <FaChartLine className="h-10 w-10" />,
    title: "Cost Optimization",
    description: "Strategic cloud resource management that reduces operational costs while maximizing performance and efficiency."
  }
];

const ReasonCard = ({ reason }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
    <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
      <div className="text-blue-600">{reason.icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
    <p className="text-gray-600">{reason.description}</p>
  </div>
);

const WhyChooseUs = () => {
  const pageInfo = {
    title: "Why Choose CloudDigify",
    description: "We deliver excellence in cloud services through our expertise, dedication, and customer-focused approach",
    icon: <FaCheckCircle />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Start Your Journey",
    defaultOverviewTitle: "Our Value Proposition",
    defaultBenefitsTitle: "Key Benefits",
    defaultSidebarTitle: "Our Achievements",
    defaultFeaturesTitle: "Core Strengths",
    defaultCtaDescription: "Ready to experience the CloudDigify difference?",
    defaultFeaturesDescription: "Discover what sets us apart in cloud services",

    // Overview section
    overviewTitle: "Our Value Proposition",
    overviewDescription1: "CloudDigify brings together expertise, innovation, and reliability to deliver exceptional cloud solutions.",
    overviewDescription2: "With our comprehensive approach to cloud services, we ensure your business stays ahead in the digital transformation journey.",

    // Benefits section
    benefitsTitle: "Key Benefits",
    benefits: [
      "5+ Years of Industry Experience",
      "50+ Certified Cloud Professionals",
      "24/7 Technical Support",
      "99.99% Uptime Guarantee",
      "ISO 9001:2015 Certified",
      "ISO/IEC 27001:2022 Certified"
    ],

    // Sidebar content
    sidebarTitle: "Our Achievements",
    approachPoints: [
      "500+ Successful Projects",
      "100+ Enterprise Clients",
      "40% Cost Reduction Average",
      "Zero Security Breaches",
      "Global Service Coverage",
      "Industry-Leading SLAs"
    ],

    // Features section
    featuresTitle: "Core Strengths",
    featuresDescription: "What makes CloudDigify your ideal cloud partner",
    features: reasons.slice(0, 3).map(reason => ({
      title: reason.title,
      description: reason.description,
      icon: reason.icon
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        )
      }
    ],

    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true,

    // Final CTA
    finalCtaTitle: "Ready to Transform Your Cloud Infrastructure?",
    finalCtaDescription: "Join hundreds of satisfied clients who trust CloudDigify for their cloud needs.",
    finalCtaText: "Contact Us Today"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default WhyChooseUs; 