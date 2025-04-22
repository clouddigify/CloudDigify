import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDatabase, FaServer, FaCloudDownloadAlt, FaShieldAlt, FaChartLine, FaClock, FaCogs, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const ManagedServices = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Managed Cloud Services",
    description: "Focus on your business while we take care of your cloud infrastructure with our comprehensive 24/7 managed services.",
    icon: <FaHeadset className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-700 to-indigo-800",
    benefits: [
      "24/7 expert monitoring and support for your cloud infrastructure",
      "Reduced operational costs through efficient resource management",
      "Enhanced security posture with proactive threat detection and remediation",
      "Improved performance and reliability of business-critical applications",
      "Faster resolution of issues with dedicated support teams"
    ],
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
      challenge: "A growing healthcare provider was struggling to maintain their expanding cloud infrastructure with their limited IT team. They faced challenges with security compliance, performance issues during peak times, and rising operational costs. Their IT team was spending excessive time on reactive firefighting rather than strategic initiatives.",
      solution: "CloudDigify implemented a comprehensive managed services solution that included 24/7 infrastructure monitoring, automated alerting systems, security compliance management, performance optimization, and cost control measures. We deployed a dedicated support team and implemented proactive maintenance protocols to prevent issues before they affected operations.",
      results: [
        "99.99% application uptime, up from 97.5% previously",
        "42% reduction in cloud infrastructure costs through right-sizing and optimization",
        "Successful passing of HIPAA compliance audits with zero findings",
        "70% reduction in critical incidents through proactive monitoring and maintenance"
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
              Request Managed Services
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
              <h2 className="text-3xl font-bold mb-6">Let Us Handle Your Cloud Operations</h2>
              <p className="text-gray-700 mb-6">
                Cloud infrastructure requires continuous attention, monitoring, and optimization to ensure performance, security, and cost-efficiency. Our managed cloud services provide the expertise and oversight needed to maximize your cloud investment.
              </p>
              <p className="text-gray-700 mb-8">
                With CloudDigify's managed services, you gain access to a team of certified cloud professionals who monitor, maintain, and optimize your cloud environment 24/7, allowing your team to focus on core business activities and innovation.
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
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Management Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Proactive monitoring & alerting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Regular maintenance & updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Security & compliance management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cost optimization strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">24/7 technical support</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Start with a Free Assessment
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Managed Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive services to manage and optimize your cloud environment across all major cloud platforms.
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

      {/* Service Levels Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Our Service Levels</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Flexible managed service options tailored to your specific business needs and budget.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
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
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Request Quote
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-lg border border-blue-200 flex flex-col h-full relative">
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
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Request Quote
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
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
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Platforms & Technologies</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We provide managed services across all major cloud platforms and use industry-leading monitoring and management tools.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {serviceInfo.technologiesUsed.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-8 bg-white">
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
              <div className="text-sm text-blue-600 font-medium">Industry: Healthcare</div>
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Transform Your Cloud Operations?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to discuss how our managed services can help your organization reduce costs, improve performance, and enhance security.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Schedule a Consultation
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

export default ManagedServices; 