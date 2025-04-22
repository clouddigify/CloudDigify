import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { FaCloud, FaServer, FaNetworkWired, FaShieldAlt, FaDatabase, FaChartLine, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';

const CloudInfrastructure = () => {
  const pageInfo = {
    title: "Cloud & Infrastructure Services",
    description: "Robust, scalable cloud infrastructure solutions designed to power your digital transformation journey with enhanced security, flexibility, and cost optimization.",
    icon: <FaCloud />,
    heroBackground: "from-blue-500 to-teal-400",
    overviewTitle: "Future-Proof Your Business Infrastructure",
    overviewDescription1: "In today's fast-paced digital world, your infrastructure is the foundation of your business success. Cloud infrastructure services from CloudDigify provide the agility, security, and scalability you need to stay competitive and innovative.",
    overviewDescription2: "Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement a hybrid solution, our expert team delivers tailored infrastructure services aligned with your business objectives and technical requirements.",
    benefits: [
      "Reduced operational costs and improved ROI",
      "Enhanced scalability and business agility",
      "Improved security and compliance posture",
      "Increased reliability and system availability",
      "Faster time-to-market for new initiatives"
    ],
    sidebarTitle: "Infrastructure Solutions",
    approachPoints: [
      "Cloud migration & modernization",
      "Hybrid & multi-cloud architectures",
      "Infrastructure as Code (IaC)",
      "24/7 managed services",
      "Cost optimization strategies"
    ],
    secondaryCta: "Schedule Infrastructure Assessment",
    featuresTitle: "Our Cloud Infrastructure Services",
    featuresDescription: "Comprehensive infrastructure solutions designed to meet your unique business requirements and technical challenges.",
    features: [
      {
        title: "Cloud Platform Services",
        description: "Expert guidance and implementation across AWS, Azure, and Google Cloud Platform to leverage the right cloud services for your specific business needs."
      },
      {
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Strategic design and implementation of hybrid and multi-cloud architectures that balance flexibility, performance, and cost efficiency."
      },
      {
        title: "Infrastructure Monitoring & Management",
        description: "Comprehensive monitoring, alerting, and management solutions to ensure optimal performance, security, and cost efficiency of your cloud infrastructure."
      },
      {
        title: "Cloud Security & Compliance",
        description: "Robust security controls, threat detection, and compliance frameworks to protect your cloud infrastructure and meet industry regulations."
      }
    ],
    additionalSections: [
      {
        content: (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">Core Infrastructure Capabilities</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our infrastructure services span across critical capabilities that power modern digital businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaServer className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compute Services</h3>
                  <p className="text-gray-600">Optimized virtual machines, containers, and serverless computing solutions that provide the right balance of performance and cost.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaNetworkWired className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network Architecture</h3>
                  <p className="text-gray-600">Secure, high-performance network designs with VPCs, load balancing, CDN integration, and global connectivity solutions.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaDatabase className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Database & Storage</h3>
                  <p className="text-gray-600">Scalable, high-performance database solutions and storage services optimized for your specific workload requirements.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaShieldAlt className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-gray-600">Comprehensive security controls, identity management, encryption, and compliance frameworks to protect your infrastructure.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaChartLine className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitoring & Analytics</h3>
                  <p className="text-gray-600">Advanced monitoring, logging, and analytics solutions that provide deep visibility into performance, usage, and security.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaMoneyBillWave className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Management</h3>
                  <p className="text-gray-600">Strategic cost optimization through resource rightsizing, reserved instances, spot pricing, and continuous usage analysis.</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    ],
    technologiesTitle: "Technologies & Platforms",
    technologiesDescription: "We leverage industry-leading technologies and platforms to deliver optimal infrastructure solutions.",
    technologiesUsed: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Docker",
      "VMware",
      "Datadog",
      "Prometheus",
      "New Relic",
      "CloudFlare"
    ],
    caseStudy: {
      title: "Global Media Company Achieves Infrastructure Transformation",
      client: "International Media & Entertainment Corporation",
      industry: "Media & Entertainment",
      challenge: "A global media company struggled with aging on-premises infrastructure that was costly to maintain, difficult to scale, and unable to meet the demands of their growing digital content delivery services. They needed a modern infrastructure solution that could scale dynamically while reducing operational costs.",
      solution: "CloudDigify designed and implemented a hybrid cloud infrastructure leveraging AWS and Azure, with automated provisioning via Terraform, containerized applications, global CDN integration, and a unified monitoring solution. The solution included robust security controls, cost management tools, and comprehensive training.",
      results: [
        "42% reduction in overall infrastructure costs",
        "99.99% platform availability, up from 98%",
        "70% faster deployment of new services and features",
        "Seamless handling of 5x traffic spikes during major content releases"
      ]
    },
    ctaTitle: "Ready to Modernize Your Infrastructure?",
    ctaDescription: "Get started with a comprehensive infrastructure assessment to identify optimization opportunities and create a roadmap for your cloud journey.",
    finalCta: "Request a Free Assessment"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default CloudInfrastructure; 