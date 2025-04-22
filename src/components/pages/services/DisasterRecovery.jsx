import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCheckCircle, FaCloudDownloadAlt, FaHistory, FaBell, FaClock } from 'react-icons/fa';

const DisasterRecovery = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Disaster Recovery Solutions",
    description: "Ensure business continuity with robust disaster recovery planning and automated cloud-based solutions.",
    icon: <FaShieldAlt className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-700 to-purple-600",
    benefits: [
      "Minimize downtime and data loss during critical incidents",
      "Reduce recovery time from days to minutes or hours",
      "Protect your business from financial and reputational damage",
      "Meet regulatory compliance requirements for data protection",
      "Scale your DR solution as your business grows"
    ],
    features: [
      {
        title: "Disaster Recovery Assessment & Planning",
        description: "Comprehensive analysis of your current infrastructure, identification of critical systems, and development of a tailored DR strategy."
      },
      {
        title: "Cloud-Based Disaster Recovery",
        description: "Implementation of resilient DR solutions in AWS, Azure, or Google Cloud with automated failover capabilities for minimal downtime."
      },
      {
        title: "Backup & Recovery Management",
        description: "Design and implementation of robust backup systems with rapid recovery capabilities, regular testing, and validation procedures."
      },
      {
        title: "Business Continuity Planning",
        description: "Development of comprehensive business continuity plans that address both technical and operational aspects of disaster recovery."
      }
    ],
    technologiesUsed: [
      "AWS Backup",
      "Azure Site Recovery",
      "Google Cloud Backup",
      "VMware Site Recovery",
      "Veeam",
      "Zerto",
      "Cohesity",
      "Commvault"
    ],
    caseStudy: {
      title: "Financial Institution Resilience",
      client: "Leading Regional Bank",
      challenge: "A regional bank with 50+ branches needed to modernize their disaster recovery capabilities to meet regulatory requirements and ensure minimal disruption to customer services during outages. Their legacy systems required lengthy recovery times and couldn't guarantee data protection.",
      solution: "CloudDigify implemented a comprehensive cloud-based disaster recovery solution using Azure Site Recovery with automated failover, continuous data protection, and regular testing protocols. We established RTO of <1 hour and RPO of <15 minutes for critical systems.",
      results: [
        "Reduced recovery time objective (RTO) from 24-48 hours to under 1 hour",
        "Decreased recovery point objective (RPO) from 24 hours to 15 minutes",
        "Successfully passed regulatory compliance audits with zero findings",
        "Demonstrated recovery capabilities during quarterly DR tests and one actual outage event"
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
              Schedule a Consultation
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
              <h2 className="text-3xl font-bold mb-6">Protect Your Business from the Unexpected</h2>
              <p className="text-gray-700 mb-6">
                Disasters come in many forms – from natural events and hardware failures to cyberattacks and human errors. When they strike, the difference between a minor inconvenience and a major crisis often depends on your disaster recovery plan.
              </p>
              <p className="text-gray-700 mb-8">
                At CloudDigify, we help organizations build comprehensive disaster recovery solutions that ensure business continuity, protect critical data, and minimize downtime. Our cloud-based DR strategies leverage the latest technologies to provide robust protection with rapid recovery capabilities.
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
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-4">Why You Need DR</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">40% of businesses never reopen after a disaster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Average cost of downtime: $5,600 per minute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">93% of companies without DR plan fail within one year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">96% of businesses with DR plan fully recover operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cloud DR reduces recovery time by up to 90%</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Get Started
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Disaster Recovery Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We provide comprehensive disaster recovery solutions tailored to your specific business needs and risk profile.
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

      {/* DR Metrics Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Key Disaster Recovery Metrics</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Understanding these metrics is crucial for developing an effective disaster recovery strategy.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaClock className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recovery Time Objective (RTO)</h3>
                <p className="text-gray-600">The maximum acceptable length of time it should take to restore normal operations following a disaster. We help you establish and meet aggressive RTOs.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaHistory className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recovery Point Objective (RPO)</h3>
                <p className="text-gray-600">The maximum acceptable amount of data loss measured in time. We implement solutions that minimize RPO to near-zero for critical systems.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recovery Reliability</h3>
                <p className="text-gray-600">The consistency and dependability of your recovery processes. Our solutions include regular testing to ensure recovery reliability exceeds 99%.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaBell className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recovery Readiness</h3>
                <p className="text-gray-600">The state of preparedness for executing recovery procedures. We ensure your team and systems are always ready to respond to disasters.</p>
              </div>
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
            <h2 className="text-3xl font-bold text-center mb-6">Technologies We Use</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading disaster recovery and backup technologies to ensure maximum protection.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Protect Your Business?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how our disaster recovery solutions can help safeguard your critical data and systems.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Contact Us
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

export default DisasterRecovery; 