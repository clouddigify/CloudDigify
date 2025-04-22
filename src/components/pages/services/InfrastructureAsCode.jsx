import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCode, FaCloudUploadAlt, FaLock, FaClipboardCheck, FaServer, FaCogs, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';

const InfrastructureAsCode = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Infrastructure as Code",
    description: "Automate your infrastructure provisioning and management with code for consistency, repeatability, and scalability across cloud environments.",
    icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-700 to-indigo-800",
    benefits: [
      "Consistent infrastructure through code-defined templates",
      "Reduced human error through automation",
      "Faster infrastructure deployments and updates",
      "Version-controlled infrastructure configurations",
      "Improved collaboration between development and operations teams"
    ],
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
      challenge: "A rapidly growing e-commerce platform was struggling with manual infrastructure provisioning, leading to inconsistencies, configuration drift, and frequent outages during peak shopping periods. Their deployment process was slow and error-prone, requiring extensive coordination across teams and resulting in lost revenue during critical sales events.",
      solution: "CloudDigify implemented a comprehensive Infrastructure as Code solution using Terraform to manage their multi-cloud environment. We created reusable modules for common infrastructure patterns, implemented a Git workflow for infrastructure changes, integrated IaC into their CI/CD pipeline with automated testing, and implemented configuration drift detection with automated remediation.",
      results: [
        "Reduced infrastructure deployment time from days to minutes",
        "Eliminated 95% of configuration-related outages during peak periods",
        "Achieved 99.99% infrastructure consistency across environments",
        "Shortened time-to-market for new features by 60%"
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
              Request IaC Assessment
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
              <h2 className="text-3xl font-bold mb-6">Modernize Your Infrastructure Management</h2>
              <p className="text-gray-700 mb-6">
                Infrastructure as Code (IaC) is a modern approach to infrastructure management where infrastructure resources are defined using code templates. This eliminates manual processes, ensures consistency, and significantly reduces errors.
              </p>
              <p className="text-gray-700 mb-8">
                At CloudDigify, we help organizations implement infrastructure as code practices using industry-leading tools like Terraform, AWS CloudFormation, Azure Resource Manager, and other cloud-native technologies to automate the provisioning and management of your cloud resources.
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
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our IaC Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Declarative infrastructure definition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Version-controlled infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Automated provisioning & deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Infrastructure testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Configuration drift prevention</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule IaC Consultation
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Infrastructure as Code Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive IaC solutions to automate your infrastructure management across all major cloud platforms.
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

      {/* IaC Process Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">The IaC Lifecycle</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our proven approach to implementing and managing infrastructure as code follows a structured lifecycle.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
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
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
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
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
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
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md text-center">
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Additional IaC Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Beyond our core offerings, we provide specialized services to enhance your IaC implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3">IaC Assessment & Optimization</h3>
              <p className="text-gray-700">
                Evaluate your existing infrastructure code for best practices, performance, and security, with detailed recommendations for improvement.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-4">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold mb-3">IaC Training & Enablement</h3>
              <p className="text-gray-700">
                Train your team on IaC practices and tools through hands-on workshops and knowledge transfer sessions for long-term success.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-4">
                <FaLock />
              </div>
              <h3 className="text-xl font-semibold mb-3">IaC Security & Governance</h3>
              <p className="text-gray-700">
                Implement security scanning, policy enforcement, and governance frameworks to ensure secure and compliant infrastructure deployments.
              </p>
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
            <h2 className="text-3xl font-bold text-center mb-6">IaC Technologies & Tools</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading technologies to implement robust Infrastructure as Code solutions.
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
              <div className="text-sm text-blue-600 font-medium">Industry: E-commerce</div>
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Automate Your Infrastructure?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our IaC experts today to discuss how we can help transform your infrastructure management with automation and code.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Request IaC Assessment
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

export default InfrastructureAsCode; 