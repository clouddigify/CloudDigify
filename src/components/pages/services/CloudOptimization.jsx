import React from 'react';
import ServiceTemplate from '../../templates/ServiceTemplate';
import { FaChartLine, FaCoins, FaCogs, FaTachometerAlt, FaSearchDollar } from 'react-icons/fa';

const CloudOptimization = () => {
  const serviceInfo = {
    title: "Cloud Optimization",
    description: "Maximize your cloud investment with our optimization services that reduce costs, enhance performance, and improve efficiency.",
    icon: <FaChartLine />,
    heroBackground: "from-green-600 to-teal-700",
    overviewTitle: "Optimize Your Cloud Environment",
    overviewParagraphs: [
      "Cloud optimization is the process of properly selecting, allocating, and right-sizing cloud resources to improve efficiency and reduce unnecessary costs. Many organizations find they're overspending on cloud resources that are underutilized or improperly configured.",
      "Our cloud optimization services help you identify opportunities to reduce waste, improve performance, and enhance security across your cloud environment, ensuring you get the most value from your cloud investment."
    ],
    benefits: [
      "Reduced cloud spending through resource right-sizing and reserved instances",
      "Improved application performance and responsiveness",
      "Enhanced security posture with proper configuration management",
      "Greater visibility into cloud usage and spending patterns",
      "Streamlined operations with automation and best practices"
    ],
    sidebarTitle: "Our Optimization Approach",
    approach: [
      "Comprehensive cloud assessment",
      "Data-driven recommendations",
      "Automated right-sizing",
      "Continuous monitoring",
      "Regular optimization reviews"
    ],
    sidebarCta: "Schedule Optimization Assessment",
    featuresTitle: "Our Cloud Optimization Services",
    featuresSubtitle: "Comprehensive services to help you maximize the value of your cloud investment.",
    features: [
      {
        title: "Cost Optimization",
        description: "Identify and eliminate waste, implement reserved instances and savings plans, right-size resources, and optimize storage tiers to reduce your cloud bill."
      },
      {
        title: "Performance Optimization",
        description: "Enhance application performance through infrastructure tuning, caching strategies, database optimization, and content delivery improvements."
      },
      {
        title: "Security & Compliance Optimization",
        description: "Identify security vulnerabilities, implement best practices, ensure compliance with relevant regulations, and optimize security controls."
      },
      {
        title: "Operational Optimization",
        description: "Streamline cloud operations through automation, improved monitoring, standardized workflows, and enhanced governance processes."
      }
    ],
    middleSection: (
      <>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Optimization Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to identify, implement, and maintain cloud optimizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">
              <FaSearchDollar />
            </div>
            <h3 className="text-xl font-semibold mb-3">Assess</h3>
            <p className="text-gray-700">
              We conduct a comprehensive assessment of your current cloud environment, analyzing resource utilization, costs, performance metrics, and security configurations.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Resource utilization analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Cost trend identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Performance bottleneck detection</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold mb-3">Implement</h3>
            <p className="text-gray-700">
              Based on our assessment, we implement optimization recommendations to improve cost efficiency, performance, and operational excellence.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Resource right-sizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Reserved instance purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Architecture refinements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">
              <FaTachometerAlt />
            </div>
            <h3 className="text-xl font-semibold mb-3">Monitor</h3>
            <p className="text-gray-700">
              We establish continuous monitoring and regular optimization reviews to ensure ongoing benefits and adapt to changing requirements.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Automated monitoring tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Regular optimization reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Continuous improvement cycles</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
    technologiesTitle: "Optimization Tools & Technologies",
    technologiesSubtitle: "We use industry-leading tools and technologies to optimize your cloud environment.",
    technologiesUsed: [
      "AWS Cost Explorer",
      "Azure Cost Management",
      "GCP Cost Tools",
      "CloudHealth",
      "CloudCheckr",
      "Turbonomic",
      "Datadog",
      "New Relic",
      "Terraform",
      "Spot Instances",
      "Auto Scaling",
      "Savings Plans"
    ],
    caseStudy: {
      title: "E-Commerce Company Reduces Cloud Costs by 40%",
      client: "Growing Online Retailer",
      industry: "E-Commerce",
      challenge: "A fast-growing e-commerce company was experiencing rapidly escalating cloud costs as their business scaled. They had limited visibility into their cloud spending, numerous underutilized resources, and inefficient architectures that were causing both cost and performance issues. During peak shopping seasons, they were overprovisioning resources but still experiencing performance problems.",
      solution: "CloudDigify implemented a comprehensive cloud optimization program, beginning with a detailed assessment of their AWS environment. We identified numerous opportunities for savings including right-sizing EC2 instances, implementing auto-scaling, utilizing reserved instances for steady workloads, optimizing storage tiers, and refining their architecture to reduce data transfer costs. We also implemented a tagging strategy and cost allocation framework to provide better visibility into departmental spending.",
      results: [
        "40% reduction in monthly cloud spend while improving performance",
        "62% of compute resources now covered by reserved instances, saving 30% on those resources",
        "Implemented auto-scaling that reduced peak capacity needs by 25%",
        "3x improvement in application response times through architectural optimizations"
      ]
    },
    ctaTitle: "Ready to Optimize Your Cloud Environment?",
    ctaDescription: "Contact our team to schedule a free cloud optimization assessment and discover your potential savings.",
    ctaButtonText: "Get Your Free Assessment"
  };

  return <ServiceTemplate serviceInfo={serviceInfo} />;
};

export default CloudOptimization; 