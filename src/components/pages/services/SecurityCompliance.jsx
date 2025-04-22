import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaShieldAlt, FaFileContract, FaSearch, FaUserShield, FaCheckCircle, FaCloudDownloadAlt, FaFingerprint, FaNetworkWired } from 'react-icons/fa';

const SecurityCompliance = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud Security & Compliance",
    description: "Protect your cloud infrastructure and ensure regulatory compliance with our comprehensive security solutions and expert guidance.",
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
    heroBackground: "from-blue-800 to-indigo-900",
    benefits: [
      "Reduced security risks through comprehensive protection",
      "Regulatory compliance with industry standards (GDPR, HIPAA, PCI DSS, etc.)",
      "Early detection and mitigation of security threats",
      "Protection of sensitive data and intellectual property",
      "Enhanced customer trust and business reputation"
    ],
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
      challenge: "A financial services organization with multiple public cloud environments faced significant security and compliance challenges. They struggled with inconsistent security controls, limited visibility across environments, and the need to comply with stringent regulatory requirements. Manual security processes were slowing down their deployment cycles and impacting innovation.",
      solution: "CloudDigify implemented a comprehensive security and compliance program. We deployed a unified security architecture across all cloud environments, implemented automated compliance controls, established continuous security monitoring, and integrated security into their CI/CD pipeline. This included creating a central identity management system, implementing encryption, and setting up threat detection and incident response capabilities.",
      results: [
        "Achieved compliance with SOC 2, PCI DSS, and financial industry regulations",
        "Reduced security incidents by 85% through proactive monitoring and prevention",
        "Decreased time spent on security reviews by 75% through automation",
        "Accelerated deployment cycles by 40% with security integrated into CI/CD pipelines"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${serviceInfo.heroBackground} text-white py-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceInfo.title}</h1>
            <p className="text-xl opacity-90 mb-8">
              {serviceInfo.description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Request Security Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div variants={itemVariants} className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Secure Your Cloud Journey</h2>
              <p className="text-gray-700 mb-6">
                As organizations move more workloads to the cloud, security and compliance become increasingly critical. At CloudDigify, we help you implement a robust security posture while ensuring compliance with relevant regulations and standards.
              </p>
              <p className="text-gray-700 mb-8">
                Our security experts bring deep expertise in AWS, Azure, Google Cloud, and multi-cloud security controls, compliance frameworks, and best practices to help you build and maintain secure cloud environments while enabling business innovation.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {serviceInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">
                      <FaCheckCircle className="mt-1" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:w-1/3 bg-blue-50 p-6 rounded-lg self-start">
              <div className="text-5xl text-blue-600 mb-6">
                <FaLock />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Security Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Security by design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Defense in depth strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Continuous monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Automated security controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Compliance as code</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Get Expert Security Advice
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Our Security & Compliance Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive security and compliance solutions tailored to your unique requirements and cloud environment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceInfo.features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Security Components Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Comprehensive Security Framework</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our cloud security framework addresses all critical aspects of security to protect your infrastructure, applications, and data.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaNetworkWired className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Network Security</h3>
                <p className="text-gray-600">Secure network architecture with firewalls, VPCs, network segmentation, and traffic monitoring to protect your cloud environments.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaFingerprint className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Identity & Access Management</h3>
                <p className="text-gray-600">Robust IAM policies, role-based access control, MFA, and privileged access management to ensure appropriate access.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaUserShield className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p className="text-gray-600">Encryption at rest and in transit, data classification, data loss prevention, and secure storage solutions for sensitive information.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Threat Protection</h3>
                <p className="text-gray-600">Advanced threat detection, vulnerability management, and incident response to identify and mitigate security threats.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaFileContract className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compliance Management</h3>
                <p className="text-gray-600">Automated compliance controls, continuous monitoring, and reporting for various regulatory frameworks and industry standards.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaCloudDownloadAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">DevSecOps Integration</h3>
                <p className="text-gray-600">Security integration into CI/CD pipelines, infrastructure as code security, and automated security testing.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Compliance Frameworks</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We help organizations achieve and maintain compliance with various regulatory standards and frameworks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">General Data Protection</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="py-2 border-b border-gray-100">GDPR</li>
                <li className="py-2 border-b border-gray-100">CCPA/CPRA</li>
                <li className="py-2 border-b border-gray-100">PIPEDA</li>
                <li className="py-2">Data Privacy Framework</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Industry-Specific</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="py-2 border-b border-gray-100">HIPAA (Healthcare)</li>
                <li className="py-2 border-b border-gray-100">PCI DSS (Payment)</li>
                <li className="py-2 border-b border-gray-100">FINRA/SEC (Financial)</li>
                <li className="py-2">NERC CIP (Energy)</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Security Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="py-2 border-b border-gray-100">SOC 1/2/3</li>
                <li className="py-2 border-b border-gray-100">ISO 27001/27017/27018</li>
                <li className="py-2 border-b border-gray-100">NIST CSF</li>
                <li className="py-2">FedRAMP</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Security Technologies</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading security technologies and platforms to protect your cloud environment.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {serviceInfo.technologiesUsed.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">{serviceInfo.caseStudy.title}</motion.h2>
          
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-2xl font-semibold mb-2">{serviceInfo.caseStudy.client}</h3>
              <div className="text-sm text-blue-600 font-medium">Industry: Financial Services</div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
              <p className="text-gray-700 mb-4">{serviceInfo.caseStudy.challenge}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-700 mb-4">{serviceInfo.caseStudy.solution}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <ul className="space-y-2">
                {serviceInfo.caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Secure Your Cloud Environment?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our security experts today to schedule a comprehensive security assessment and develop a roadmap to enhance your cloud security posture.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Schedule a Security Assessment
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore All Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default SecurityCompliance; 