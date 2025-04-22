import React from 'react';
import { FaCode, FaCloudUploadAlt, FaClipboardCheck, FaServer, FaCogs, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const InfrastructureAsCode = () => {
  // Define the service info object
  const pageInfo = {
    title: "Infrastructure as Code",
    description: "Automate your infrastructure provisioning and management with code for consistency, repeatability, and scalability across cloud environments.",
    icon: <FaCode />,
    heroBackground: "from-blue-700 to-indigo-800",
    
    overviewTitle: "Modernize Your Infrastructure Management",
    overviewDescription1: "Infrastructure as Code (IaC) is a modern approach to infrastructure management where infrastructure resources are defined using code templates. This eliminates manual processes, ensures consistency, and significantly reduces errors.",
    overviewDescription2: "At CloudDigify, we help organizations implement infrastructure as code practices using industry-leading tools like Terraform, AWS CloudFormation, Azure Resource Manager, and other cloud-native technologies to automate the provisioning and management of your cloud resources.",
    
    benefits: [
      "Consistent infrastructure through code-defined templates",
      "Reduced human error through automation",
      "Faster infrastructure deployments and updates",
      "Version-controlled infrastructure configurations",
      "Improved collaboration between development and operations teams"
    ],
    
    sidebarTitle: "Our IaC Approach",
    approachPoints: [
      "Declarative infrastructure definition",
      "Version-controlled infrastructure",
      "Automated provisioning & deployment",
      "Infrastructure testing",
      "Configuration drift prevention"
    ],
    secondaryCta: "Schedule IaC Consultation",
    
    featuresTitle: "Our Infrastructure as Code Services",
    featuresDescription: "Comprehensive IaC solutions to automate your infrastructure management across all major cloud platforms.",
    features: [
      {
        title: "IaC Strategy & Implementation",
        description: "Develop a tailored Infrastructure as Code strategy and implementation plan aligned with your organization's cloud adoption goals and technical requirements."
      },
      {
        title: "Multi-Cloud IaC Solutions",
        description: "Implement Terraform, CloudFormation, ARM templates, or other IaC tools to automate infrastructure across AWS, Azure, Google Cloud, and multi-cloud environments."
      },
      {
        title: "CI/CD Pipeline Integration",
        description: "Integrate IaC into your CI/CD pipelines for continuous infrastructure testing, validation, and deployment with automated workflows."
      },
      {
        title: "Security & Compliance as Code",
        description: "Implement security scanning, policy as code, and compliance checks within your infrastructure code to ensure secure and compliant deployments."
      }
    ],
    
    // Define custom sections
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">The IaC Lifecycle</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Our proven approach to implementing and managing infrastructure as code follows a structured lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <div className="mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                    1
                  </div>
                </div>
                <div className="text-blue-600 text-3xl mb-4 mx-auto">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold mb-2">Code</h3>
                <p className="text-gray-600">
                  Define infrastructure using declarative code templates with modular, reusable components.
                </p>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <div className="mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                    2
                  </div>
                </div>
                <div className="text-blue-600 text-3xl mb-4 mx-auto">
                  <FaClipboardCheck />
                </div>
                <h3 className="text-xl font-semibold mb-2">Test</h3>
                <p className="text-gray-600">
                  Validate infrastructure code with automated tests to ensure functionality and compliance.
                </p>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <div className="mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                    3
                  </div>
                </div>
                <div className="text-blue-600 text-3xl mb-4 mx-auto">
                  <FaCloudUploadAlt />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deploy</h3>
                <p className="text-gray-600">
                  Provision infrastructure through automated deployment pipelines with approval gates.
                </p>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <div className="mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                    4
                  </div>
                </div>
                <div className="text-blue-600 text-3xl mb-4 mx-auto">
                  <FaSyncAlt />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manage</h3>
                <p className="text-gray-600">
                  Monitor, detect drift, and update infrastructure through continuous improvement cycles.
                </p>
              </div>
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Additional IaC Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Beyond our core offerings, we provide specialized services to enhance your IaC implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-2xl mb-4">
                  <FaServer />
                </div>
                <h3 className="text-xl font-semibold mb-3">IaC Assessment & Optimization</h3>
                <p className="text-gray-700">
                  Evaluate your existing infrastructure code for best practices, performance, and security, with detailed recommendations for improvement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-2xl mb-4">
                  <FaCogs />
                </div>
                <h3 className="text-xl font-semibold mb-3">IaC Training & Enablement</h3>
                <p className="text-gray-700">
                  Train your team on IaC practices and tools through hands-on workshops and knowledge transfer sessions for long-term success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-2xl mb-4">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold mb-3">IaC Security & Governance</h3>
                <p className="text-gray-700">
                  Implement security scanning, policy enforcement, and governance frameworks to ensure secure and compliant infrastructure deployments.
                </p>
              </div>
            </div>
          </>
        )
      }
    ],
    
    technologiesTitle: "IaC Technologies & Tools",
    technologiesDescription: "We leverage industry-leading technologies to implement robust Infrastructure as Code solutions.",
    technologiesUsed: [
      "Terraform",
      "AWS CloudFormation",
      "Azure Resource Manager",
      "Google Cloud Deployment Manager",
      "Ansible",
      "Pulumi",
      "GitOps",
      "Terragrunt",
      "Checkov",
      "tfsec",
      "Sentinel"
    ],
    
    caseStudy: {
      title: "E-commerce Platform Achieves Infrastructure Automation",
      client: "Leading Online Retailer",
      industry: "E-commerce",
      challenge: "A rapidly growing e-commerce platform was struggling with manual infrastructure provisioning, leading to inconsistencies, configuration drift, and frequent outages during peak shopping periods. Their deployment process was slow and error-prone, requiring extensive coordination across teams and resulting in lost revenue during critical sales events.",
      solution: "CloudDigify implemented a comprehensive Infrastructure as Code solution using Terraform to manage their multi-cloud environment. We created reusable modules for common infrastructure patterns, implemented a Git workflow for infrastructure changes, integrated IaC into their CI/CD pipeline with automated testing, and implemented configuration drift detection with automated remediation.",
      results: [
        "Reduced infrastructure deployment time from days to minutes",
        "Eliminated 95% of configuration-related outages during peak periods",
        "Achieved 99.99% infrastructure consistency across environments",
        "Shortened time-to-market for new features by 60%"
      ]
    },
    
    ctaTitle: "Ready to Automate Your Infrastructure?",
    ctaDescription: "Contact our IaC experts today to discuss how we can help transform your infrastructure management with automation and code.",
    finalCta: "Request IaC Assessment"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default InfrastructureAsCode; 