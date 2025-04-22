import React from 'react';
import { FaDatabase, FaServer, FaCloudDownloadAlt, FaShieldAlt, FaChartLine, FaClock, FaCogs, FaHeadset, FaCheckCircle } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const ManagedServices = () => {
  const pageInfo = {
    title: "Managed Cloud Services",
    description: "Focus on your business while we take care of your cloud infrastructure with our comprehensive 24/7 managed services.",
    icon: <FaHeadset />,
    heroBackground: "from-blue-700 to-indigo-800",
    
    overviewTitle: "Let Us Handle Your Cloud Operations",
    overviewDescription1: "Cloud infrastructure requires continuous attention, monitoring, and optimization to ensure performance, security, and cost-efficiency. Our managed cloud services provide the expertise and oversight needed to maximize your cloud investment.",
    overviewDescription2: "With CloudDigify's managed services, you gain access to a team of certified cloud professionals who monitor, maintain, and optimize your cloud environment 24/7, allowing your team to focus on core business activities and innovation.",
    
    benefits: [
      "24/7 expert monitoring and support for your cloud infrastructure",
      "Reduced operational costs through efficient resource management",
      "Enhanced security posture with proactive threat detection and remediation",
      "Improved performance and reliability of business-critical applications",
      "Faster resolution of issues with dedicated support teams"
    ],
    
    sidebarTitle: "Our Management Approach",
    approachPoints: [
      "Proactive monitoring & alerting",
      "Regular maintenance & updates",
      "Security & compliance management",
      "Cost optimization strategies",
      "24/7 technical support"
    ],
    secondaryCta: "Start with a Free Assessment",
    
    featuresTitle: "Our Managed Services",
    featuresDescription: "Comprehensive services to manage and optimize your cloud environment across all major cloud platforms.",
    features: [
      {
        title: "Infrastructure Management",
        description: "Comprehensive monitoring, maintenance, and optimization of your cloud infrastructure including compute, storage, and network resources."
      },
      {
        title: "Security & Compliance Management",
        description: "Continuous security monitoring, threat detection, vulnerability management, and compliance maintenance to protect your cloud environment."
      },
      {
        title: "Performance Optimization",
        description: "Ongoing performance monitoring and tuning to ensure your applications run at peak efficiency with automatic scaling to meet demand."
      },
      {
        title: "Cost Control & Optimization",
        description: "Regular analysis of cloud usage and implementation of cost-saving measures to optimize your cloud spending without sacrificing performance."
      }
    ],
    
    // Define custom sections
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Our Service Levels</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Flexible managed service options tailored to your specific business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Essential</h3>
                  <p className="text-gray-600 mb-4">Basic monitoring and support for cost-conscious organizations.</p>
                  <div className="text-sm text-blue-600 font-medium">Starting at</div>
                  <div className="text-3xl font-bold">Custom Quote</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">24/7 monitoring and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Basic incident response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Monthly reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
                >
                  Request Quote
                </a>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Advanced</h3>
                  <p className="text-gray-600 mb-4">Comprehensive management for business-critical environments.</p>
                  <div className="text-sm text-blue-600 font-medium">Starting at</div>
                  <div className="text-3xl font-bold">Custom Quote</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">All Essential features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">24/7 priority support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Security management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Weekly reporting</span>
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
                >
                  Request Quote
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-gray-600 mb-4">Complete management solution with dedicated resources.</p>
                  <div className="text-sm text-blue-600 font-medium">Starting at</div>
                  <div className="text-3xl font-bold">Custom Quote</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">All Advanced features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Dedicated support team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Proactive cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Strategic advisement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Compliance management</span>
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </>
        )
      }
    ],
    
    technologiesTitle: "Platforms & Technologies",
    technologiesDescription: "We provide managed services across all major cloud platforms and use industry-leading monitoring and management tools.",
    technologiesUsed: [
      "AWS Managed Services",
      "Azure Managed Services",
      "Google Cloud Platform",
      "Oracle Cloud",
      "VMware Cloud",
      "Datadog",
      "New Relic",
      "Splunk",
      "ServiceNow",
      "PagerDuty",
      "Terraform",
      "Ansible"
    ],
    
    caseStudy: {
      title: "Healthcare Provider Achieves Operational Excellence",
      client: "Leading Regional Healthcare Provider",
      industry: "Healthcare",
      challenge: "A growing healthcare provider was struggling to maintain their expanding cloud infrastructure with their limited IT team. They faced challenges with security compliance, performance issues during peak times, and rising operational costs. Their IT team was spending excessive time on reactive firefighting rather than strategic initiatives.",
      solution: "CloudDigify implemented a comprehensive managed services solution that included 24/7 infrastructure monitoring, automated alerting systems, security compliance management, performance optimization, and cost control measures. We deployed a dedicated support team and implemented proactive maintenance protocols to prevent issues before they affected operations.",
      results: [
        "99.99% application uptime, up from 97.5% previously",
        "42% reduction in cloud infrastructure costs through right-sizing and optimization",
        "Successful passing of HIPAA compliance audits with zero findings",
        "70% reduction in critical incidents through proactive monitoring and maintenance"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Cloud Operations?",
    ctaDescription: "Contact our team today to discuss how our managed services can help your organization reduce costs, improve performance, and enhance security.",
    finalCta: "Schedule a Consultation"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default ManagedServices; 