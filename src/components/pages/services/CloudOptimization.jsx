import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCheckCircle, FaMoneyBillWave, FaTachometerAlt, FaShieldAlt, FaSearch } from 'react-icons/fa';

const CloudOptimization = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud Optimization Services",
    description: "Maximize the efficiency, performance, and cost-effectiveness of your cloud infrastructure and applications.",
    icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-green-600",
    benefits: [
      "Reduce cloud spending by 20-40% through right-sizing and resource optimization",
      "Improve application performance and end-user experience",
      "Enhance security posture and compliance adherence",
      "Implement best practices for cloud architecture",
      "Gain visibility and control over cloud resources"
    ],
    features: [
      {
        title: "Cost Optimization",
        description: "Analyze your cloud spending patterns, identify waste, and implement strategies to reduce costs without sacrificing performance or functionality."
      },
      {
        title: "Performance Optimization",
        description: "Fine-tune your cloud resources and applications to achieve maximum speed, responsiveness, and throughput for better user experiences."
      },
      {
        title: "Security & Compliance Optimization",
        description: "Strengthen your cloud security posture, address vulnerabilities, and ensure compliance with industry regulations and best practices."
      },
      {
        title: "Architecture Optimization",
        description: "Assess and refine your cloud architecture to align with best practices, improve scalability, reliability, and operational efficiency."
      }
    ],
    technologiesUsed: [
      "AWS Cost Explorer",
      "Azure Cost Management",
      "Google Cloud Cost Management",
      "CloudWatch",
      "Azure Monitor",
      "Terraform",
      "CloudFormation",
      "CloudHealth"
    ],
    caseStudy: {
      title: "Cloud Optimization Success Story",
      client: "Major Healthcare Provider",
      challenge: "A growing healthcare organization was experiencing rapidly increasing cloud costs as they migrated more services to the cloud. They lacked visibility into their spending patterns and were concerned about potential security vulnerabilities in their rapidly expanding cloud footprint.",
      solution: "CloudDigify conducted a comprehensive assessment of their cloud environment, identifying unused resources, improperly sized instances, and security vulnerabilities. We implemented automated right-sizing, scheduled scaling, reserved instances, and enhanced security controls.",
      results: [
        "Reduced monthly cloud costs by 35% while improving performance",
        "Eliminated 20+ security vulnerabilities identified during assessment",
        "Implemented automated governance policies to prevent cost sprawl",
        "Established comprehensive monitoring and alerting for ongoing optimization"
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
              <h2 className="text-3xl font-bold mb-6">Maximize Your Cloud Investment</h2>
              <p className="text-gray-700 mb-6">
                Cloud optimization is the process of correctly selecting and assigning the right resources to a workload or application. When properly optimized, cloud environments provide the ideal balance of performance, security, and cost-efficiency.
              </p>
              <p className="text-gray-700 mb-8">
                At CloudDigify, we help organizations identify inefficiencies in their cloud environments and implement strategies to reduce costs, improve performance, enhance security, and align with best practices. Our comprehensive approach ensures you get the most value from your cloud investment.
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
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Optimization Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Comprehensive assessment of current state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Detailed analysis of usage patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Identification of optimization opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Implementation of best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Continuous monitoring and improvement</span>
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Optimization Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We provide comprehensive cloud optimization services to help you achieve maximum efficiency, performance, and security.
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

      {/* Benefits Section with icons */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">The Value of Cloud Optimization</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover how optimizing your cloud environment can deliver significant business benefits.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaMoneyBillWave className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Eliminate wasted resources, right-size instances, and implement appropriate pricing models to reduce your cloud spend without sacrificing performance.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaTachometerAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Enhancement</h3>
                <p className="text-gray-600">Optimize resources, configurations, and architecture to ensure your applications run at peak performance for better user experiences.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaShieldAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Identify and address security vulnerabilities in your cloud environment to better protect your data and applications.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaSearch className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Visibility</h3>
                <p className="text-gray-600">Gain comprehensive insights into your cloud environment for better decision-making and proactive management.</p>
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
              We leverage industry-leading tools and technologies to optimize your cloud environment.
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Optimize Your Cloud Environment?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how our cloud optimization services can help you reduce costs, improve performance, and enhance security.
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

export default CloudOptimization; 