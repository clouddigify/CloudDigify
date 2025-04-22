import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCogs, FaRocket, FaCode, FaClipboardCheck, FaChartLine, FaCheckCircle, FaTools, FaServer, FaNetworkWired } from 'react-icons/fa';

const DevOps = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "DevOps & CI/CD Services",
    description: "Streamline your development process, improve collaboration, and accelerate delivery with our comprehensive DevOps solutions.",
    icon: <FaTools className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-700 to-indigo-800",
    benefits: [
      "Faster delivery and time-to-market for new features",
      "Improved software quality with automated testing and continuous integration",
      "Enhanced collaboration between development and operations teams",
      "Reduced operational costs through automation and optimization",
      "Increased reliability and stability of your applications"
    ],
    features: [
      {
        title: "CI/CD Pipeline Implementation",
        description: "Set up automated build, test, and deployment pipelines using industry-leading tools like Jenkins, GitLab CI, GitHub Actions, or Azure DevOps."
      },
      {
        title: "Infrastructure Automation",
        description: "Implement Infrastructure as Code (IaC) using tools like Terraform, AWS CloudFormation, or Azure Resource Manager templates."
      },
      {
        title: "Containerization & Orchestration",
        description: "Containerize your applications with Docker and orchestrate them using Kubernetes, Amazon ECS, or Azure Container Service."
      },
      {
        title: "Configuration Management",
        description: "Automate configuration management with tools like Ansible, Chef, or Puppet to ensure consistency and reduce errors."
      }
    ],
    technologiesUsed: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Prometheus"
    ],
    caseStudy: {
      title: "E-commerce Platform Transformation",
      client: "Leading E-commerce Retailer",
      challenge: "A leading e-commerce company was struggling with slow deployment cycles and frequent production issues. Their development and operations teams worked in silos, leading to communication gaps and inefficiencies.",
      solution: "CloudDigify implemented a comprehensive DevOps solution that included automated CI/CD pipelines, infrastructure as code, containerization, and robust monitoring. We also provided training and mentoring to help their teams adopt DevOps practices and culture.",
      results: [
        "Deployment frequency increased from once per month to multiple times per day",
        "90% reduction in production issues post-deployment",
        "Development cycle reduced by 60%, accelerating time-to-market",
        "Infrastructure provisioning time reduced from weeks to minutes"
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Development Process</h2>
              <p className="text-gray-700 mb-6">
                DevOps is more than just a set of practices—it's a cultural and technical transformation that bridges the gap between development and operations. At CloudDigify, we help organizations implement DevOps methodologies that enhance collaboration, streamline processes, and deliver value to customers faster.
              </p>
              <p className="text-gray-700 mb-8">
                Our DevOps services combine people, processes, and technology to help your organization build, test, and deploy applications with greater speed, quality, and efficiency. From continuous integration and delivery to infrastructure automation, we provide end-to-end solutions tailored to your specific needs.
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
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our DevOps Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Continuous Integration & Continuous Delivery (CI/CD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Configuration Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Monitoring & Observability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Containerization & Orchestration</span>
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
            <h2 className="text-3xl font-bold text-center mb-6">Our DevOps Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We offer a comprehensive range of DevOps services to help you streamline your development process and improve operational efficiency.
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
            <h2 className="text-3xl font-bold text-center mb-6">Technologies We Use</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading technologies to implement robust, scalable, and secure DevOps solutions.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {serviceInfo.technologiesUsed.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section with icons */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Benefits of Our DevOps Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              By implementing DevOps practices, you can realize significant benefits that enhance your business operations and outcomes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex p-6 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                <FaRocket className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Delivery</h3>
                <p className="text-gray-600">Accelerate your development lifecycle and deliver features faster to market, giving you a competitive edge.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                <FaCode className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Quality</h3>
                <p className="text-gray-600">Enhance software quality with automated testing and continuous integration, reducing bugs and issues.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                <FaClipboardCheck className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Collaboration</h3>
                <p className="text-gray-600">Break down silos between development and operations teams, fostering a culture of shared responsibility.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                <FaChartLine className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Reduce operational costs through automation and optimization of your development and deployment processes.</p>
              </div>
            </motion.div>
          </div>
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
          
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Transform Your Development Process?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how our DevOps solutions can help your business accelerate delivery and improve quality.
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

export default DevOps; 