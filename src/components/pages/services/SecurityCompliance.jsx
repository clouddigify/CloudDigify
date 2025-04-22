import React from 'react';
import { FaLock, FaShieldAlt, FaFileContract, FaSearch, FaUserShield, FaCheckCircle, FaCloudDownloadAlt, FaFingerprint, FaNetworkWired } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const SecurityCompliance = () => {
  // Define the service info object
  const pageInfo = {
    title: "Cloud Security & Compliance",
    description: "Protect your cloud infrastructure and ensure regulatory compliance with our comprehensive security solutions and expert guidance.",
    icon: <FaShieldAlt />,
    heroBackground: "from-blue-800 to-indigo-900",
    
    overviewTitle: "Secure Your Cloud Journey",
    overviewDescription1: "As organizations move more workloads to the cloud, security and compliance become increasingly critical. At CloudDigify, we help you implement a robust security posture while ensuring compliance with relevant regulations and standards.",
    overviewDescription2: "Our security experts bring deep expertise in AWS, Azure, Google Cloud, and multi-cloud security controls, compliance frameworks, and best practices to help you build and maintain secure cloud environments while enabling business innovation.",
    
    benefits: [
      "Reduced security risks through comprehensive protection",
      "Regulatory compliance with industry standards (GDPR, HIPAA, PCI DSS, etc.)",
      "Early detection and mitigation of security threats",
      "Protection of sensitive data and intellectual property",
      "Enhanced customer trust and business reputation"
    ],
    
    sidebarTitle: "Our Security Approach",
    approachPoints: [
      "Security by design",
      "Defense in depth strategy",
      "Continuous monitoring",
      "Automated security controls",
      "Compliance as code"
    ],
    secondaryCta: "Get Expert Security Advice",
    
    featuresTitle: "Our Security & Compliance Services",
    featuresDescription: "Comprehensive security and compliance solutions tailored to your unique requirements and cloud environment.",
    features: [
      {
        title: "Security Assessment & Strategy",
        description: "Comprehensive evaluation of your cloud environment to identify vulnerabilities, security gaps, and create a tailored security roadmap aligned with your business needs."
      },
      {
        title: "Compliance Implementation",
        description: "Implementation of controls and frameworks to meet specific compliance requirements (GDPR, HIPAA, PCI DSS, SOC 2, etc.) and prepare for audits."
      },
      {
        title: "Cloud Security Architecture",
        description: "Design and implementation of robust security architecture including network security, identity management, data protection, and workload security."
      },
      {
        title: "Security Monitoring & Response",
        description: "Setup of continuous security monitoring, threat detection, and incident response systems to identify and address security issues before they impact your business."
      }
    ],
    
    // Define custom sections
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Our cloud security framework addresses all critical aspects of security to protect your infrastructure, applications, and data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaNetworkWired className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network Security</h3>
                  <p className="text-gray-600">Secure network architecture with firewalls, VPCs, network segmentation, and traffic monitoring to protect your cloud environments.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaFingerprint className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Identity & Access Management</h3>
                  <p className="text-gray-600">Robust IAM policies, role-based access control, MFA, and privileged access management to ensure appropriate access.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaUserShield className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                  <p className="text-gray-600">Encryption at rest and in transit, data classification, data loss prevention, and secure storage solutions for sensitive information.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Threat Protection</h3>
                  <p className="text-gray-600">Advanced threat detection, vulnerability management, and incident response to identify and mitigate security threats.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaFileContract className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance Management</h3>
                  <p className="text-gray-600">Automated compliance controls, continuous monitoring, and reporting for various regulatory frameworks and industry standards.</p>
                </div>
              </div>
              
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <FaCloudDownloadAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">DevSecOps Integration</h3>
                  <p className="text-gray-600">Security integration into CI/CD pipelines, infrastructure as code security, and automated security testing.</p>
                </div>
              </div>
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Compliance Frameworks</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                We help organizations achieve and maintain compliance with various regulatory standards and frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4">General Data Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="py-2 border-b border-gray-100">GDPR</li>
                  <li className="py-2 border-b border-gray-100">CCPA/CPRA</li>
                  <li className="py-2 border-b border-gray-100">PIPEDA</li>
                  <li className="py-2">Data Privacy Framework</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4">Industry-Specific</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="py-2 border-b border-gray-100">HIPAA (Healthcare)</li>
                  <li className="py-2 border-b border-gray-100">PCI DSS (Payment)</li>
                  <li className="py-2 border-b border-gray-100">FINRA/SEC (Financial)</li>
                  <li className="py-2">NERC CIP (Energy)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4">Security Standards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="py-2 border-b border-gray-100">SOC 1/2/3</li>
                  <li className="py-2 border-b border-gray-100">ISO 27001/27017/27018</li>
                  <li className="py-2 border-b border-gray-100">NIST CSF</li>
                  <li className="py-2">FedRAMP</li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    ],
    
    technologiesTitle: "Security Technologies",
    technologiesDescription: "We leverage industry-leading security technologies and platforms to protect your cloud environment.",
    technologiesUsed: [
      "AWS Security Hub",
      "Azure Security Center",
      "GCP Security Command Center",
      "CloudTrail",
      "CloudWatch",
      "Prisma Cloud",
      "CrowdStrike",
      "Splunk",
      "Sentinel",
      "HashiCorp Vault",
      "Qualys",
      "Tenable"
    ],
    
    caseStudy: {
      title: "Financial Services Firm Achieves Security Excellence",
      client: "Leading Investment Management Company",
      industry: "Financial Services",
      challenge: "A financial services organization with multiple public cloud environments faced significant security and compliance challenges. They struggled with inconsistent security controls, limited visibility across environments, and the need to comply with stringent regulatory requirements. Manual security processes were slowing down their deployment cycles and impacting innovation.",
      solution: "CloudDigify implemented a comprehensive security and compliance program. We deployed a unified security architecture across all cloud environments, implemented automated compliance controls, established continuous security monitoring, and integrated security into their CI/CD pipeline. This included creating a central identity management system, implementing encryption, and setting up threat detection and incident response capabilities.",
      results: [
        "Achieved compliance with SOC 2, PCI DSS, and financial industry regulations",
        "Reduced security incidents by 85% through proactive monitoring and prevention",
        "Decreased time spent on security reviews by 75% through automation",
        "Accelerated deployment cycles by 40% with security integrated into CI/CD pipelines"
      ]
    },
    
    ctaTitle: "Ready to Secure Your Cloud Environment?",
    ctaDescription: "Contact our security experts today to schedule a comprehensive security assessment and develop a roadmap to enhance your cloud security posture.",
    finalCta: "Schedule a Security Assessment"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default SecurityCompliance; 