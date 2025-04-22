import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDatabase, 
  FaCogs, 
  FaCode, 
  FaShieldAlt, 
  FaUsers, 
  FaNetworkWired, 
  FaMobileAlt, 
  FaPlane,
  FaArrowRight,
  FaIndustry
} from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

// Expanded industries list matching our navigation
const industriesList = [
  { 
    title: 'Financial Services',
    icon: <FaDatabase size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for banking, insurance, and capital markets.',
    path: '/industries/financial-services',
    highlights: ['Digital banking transformation', 'Insurance automation', 'Fraud detection & prevention', 'Regulatory compliance'] 
  },
  { 
    title: 'Manufacturing',
    icon: <FaCogs size={36} className="mb-4 text-blue-600" />, 
    description: 'Smart manufacturing and Industry 4.0 solutions.',
    path: '/industries/manufacturing',
    highlights: ['Industrial IoT', 'Predictive maintenance', 'Supply chain optimization', 'Digital twins'] 
  },
  { 
    title: 'Technology',
    icon: <FaCode size={36} className="mb-4 text-blue-600" />, 
    description: 'Solutions for software, hardware and telecommunications companies.',
    path: '/industries/technology',
    highlights: ['Product engineering', 'Platform modernization', 'API ecosystems', 'SaaS transformation'] 
  },
  { 
    title: 'Healthcare',
    icon: <FaShieldAlt size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for healthcare providers and life sciences.',
    path: '/industries/healthcare',
    highlights: ['Telehealth platforms', 'Clinical analytics', 'Patient engagement', 'Regulatory compliance'] 
  },
  { 
    title: 'Retail & CPG',
    icon: <FaUsers size={36} className="mb-4 text-blue-600" />, 
    description: 'Omnichannel retail and consumer goods solutions.',
    path: '/industries/retail-cpg',
    highlights: ['E-commerce platforms', 'Supply chain optimization', 'Customer analytics', 'Personalization engines'] 
  },
  { 
    title: 'Energy & Utilities',
    icon: <FaNetworkWired size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital transformation for energy and utility companies.',
    path: '/industries/energy-utilities',
    highlights: ['Smart grid solutions', 'Energy analytics', 'Asset management', 'Sustainable energy'] 
  },
  { 
    title: 'Communications & Media',
    icon: <FaMobileAlt size={36} className="mb-4 text-blue-600" />, 
    description: 'Solutions for telecom service providers, media, and entertainment companies.',
    path: '/industries/communications',
    highlights: ['5G enablement', 'OSS/BSS transformation', 'Content delivery', 'Digital publishing'] 
  },
  { 
    title: 'Travel & Hospitality',
    icon: <FaPlane size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for travel, transport, and hospitality businesses.',
    path: '/industries/travel',
    highlights: ['Booking platforms', 'Customer experience', 'Loyalty programs', 'Operational efficiency'] 
  }
];

const Industries = () => {
  const pageInfo = {
    title: "Industry-Focused Cloud Solutions",
    description: "Cloud technologies tailored to the unique needs of your industry",
    icon: <FaIndustry />,
    heroBackground: "from-blue-700 to-indigo-800",

    // Default text configurations
    defaultCtaText: "Schedule a Consultation",
    defaultOverviewTitle: "Industry Expertise",
    defaultBenefitsTitle: "Our Industry Solutions",
    defaultSidebarTitle: "Industry Partnerships",
    defaultSecondaryCta: "Explore Industries",
    defaultFeaturesTitle: "Success Stories",
    defaultFeaturesDescription: "Real results across industries",
    defaultCtaTitle: "Ready to Transform Your Industry?",
    defaultCtaDescription: "Contact our experts to discuss how our industry-focused cloud solutions can help you overcome challenges and drive innovation in your sector.",
    defaultFinalCta: "Get Started",

    // Custom links
    ctaLink: "/contact",
    secondaryCtaLink: "/industries/financial-services",
    finalCtaLink: "/contact",

    // Overview section
    overviewTitle: "Industry Expertise",
    overviewDescription1: "CloudDigify combines deep industry expertise with cutting-edge technology to deliver solutions that address the specific challenges and opportunities in your sector.",
    overviewDescription2: "Our industry-focused solutions are designed to address specific needs while leveraging our cloud expertise across all sectors.",

    // Benefits section (Industry Solutions)
    benefitsTitle: "Our Industry Solutions",
    benefits: industriesList.map(industry => 
      `${industry.title}: ${industry.description}`
    ),

    // Sidebar (Industry Partnerships)
    sidebarTitle: "Our Industry Partnerships",
    approachPoints: [
      "Financial Services Technology Consortium",
      "Healthcare Information and Management Systems Society",
      "Manufacturing Enterprise Solutions Association",
      "Retail Industry Leaders Association",
      "Energy & Utilities Alliance"
    ],

    // Features section (Success Stories)
    featuresTitle: "Success Stories Across Industries",
    featuresDescription: "See how we've helped organizations transform their operations",
    features: [
      {
        title: "Digital Transformation for a Global Bank",
        description: "We helped a leading global bank modernize their core banking infrastructure, moving from legacy systems to a cloud-native platform.",
        icon: <FaDatabase />,
        link: "/case-studies/banking-transformation",
        features: [
          "40% reduction in operational costs",
          "60% faster feature deployment",
          "Enhanced security compliance",
          "Improved customer experience"
        ]
      },
      {
        title: "Industry 4.0 Implementation",
        description: "Our team helped a manufacturing company implement IoT sensors and real-time analytics across their factory floor.",
        icon: <FaCogs />,
        link: "/case-studies/manufacturing-iot",
        features: [
          "28% decrease in downtime",
          "15% improvement in equipment effectiveness",
          "Real-time monitoring capabilities",
          "Predictive maintenance implementation"
        ]
      }
    ],

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Domain Specialists</h3>
              <p className="text-gray-700">Our teams include industry veterans who understand your business challenges.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Regulatory Compliance</h3>
              <p className="text-gray-700">We ensure solutions meet industry-specific compliance requirements.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Pre-built Solutions</h3>
              <p className="text-gray-700">Industry-specific accelerators to speed up your digital transformation.</p>
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map(({ title, icon, description, path, highlights }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full">
                <div className="text-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
                <p className="text-gray-600 mb-4 text-center">{description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-800 mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1 mb-6">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={path} 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      }
    ],

    // CTA section
    ctaTitle: "Ready to Transform Your Industry?",
    ctaDescription: "Contact our experts to discuss how our industry-focused cloud solutions can help you overcome challenges and drive innovation in your sector.",
    finalCta: "Schedule a Consultation",

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

export default Industries; 