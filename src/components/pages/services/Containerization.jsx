import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCubes, FaCheckCircle, FaDocker, FaCloudUploadAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

const Containerization = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Containerization Services",
    description: "Deploy applications consistently across environments with scalable, portable container solutions.",
    icon: <FaCubes className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-teal-600",
    benefits: [
      "Consistent application deployment across all environments",
      "Improved resource efficiency and infrastructure utilization",
      "Faster application startup times and deployment cycles",
      "Enhanced isolation and security between applications",
      "Simplified scaling and management of microservices"
    ],
    features: [
      {
        title: "Container Strategy & Assessment",
        description: "Evaluate your applications for containerization, create a roadmap, and develop a container strategy aligned with your business goals."
      },
      {
        title: "Application Containerization",
        description: "Convert your existing applications to containerized workloads with optimized configurations for performance and security."
      },
      {
        title: "Kubernetes Implementation",
        description: "Set up and configure production-ready Kubernetes clusters for automated deployment, scaling, and management of containerized applications."
      },
      {
        title: "Container Orchestration & Management",
        description: "Implement comprehensive solutions for monitoring, logging, security, and lifecycle management of container environments."
      }
    ],
    technologiesUsed: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Azure AKS",
      "Google GKE",
      "Docker Swarm",
      "Helm",
      "Istio"
    ],
    caseStudy: {
      title: "Containerization Transformation",
      client: "Global Retail Company",
      challenge: "A leading retail company with hundreds of applications was struggling with inconsistent deployments, slow release cycles, and inefficient infrastructure utilization. Their monolithic architecture limited scalability and made updates risky.",
      solution: "CloudDigify implemented a comprehensive containerization strategy, converting key applications to microservices running in Docker containers. We deployed Kubernetes for orchestration and implemented CI/CD pipelines for automated testing and deployment.",
      results: [
        "Deployment time reduced from days to minutes with automated CI/CD",
        "Infrastructure costs reduced by 45% through better resource utilization",
        "Application release cycles shortened from months to weeks",
        "Zero-downtime deployments achieved for critical customer-facing applications"
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
              <h2 className="text-3xl font-bold mb-6">Modernize Your Application Deployment</h2>
              <p className="text-gray-700 mb-6">
                Containerization is revolutionizing how applications are built, deployed, and managed. By packaging your applications and their dependencies into lightweight, portable containers, you can ensure consistent behavior across any environment – from development to production.
              </p>
              <p className="text-gray-700 mb-8">
                At CloudDigify, we help organizations implement container technologies like Docker and orchestration platforms like Kubernetes to improve deployment efficiency, enhance scalability, and accelerate innovation. Our containerization services provide a complete solution from assessment to implementation and ongoing management.
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
                <FaDocker />
              </div>
              <h3 className="text-xl font-semibold mb-4">Why Containerize?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Build once, run anywhere consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Lightweight and efficient resource usage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Rapid application startup and scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Simplified microservices implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Improved DevOps workflows and CI/CD</span>
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Containerization Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We provide end-to-end containerization services to help you modernize your application deployment and management.
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
            <h2 className="text-3xl font-bold text-center mb-6">Benefits of Containerization</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover how containerization can transform your application deployment and management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaDocker className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consistency Everywhere</h3>
                <p className="text-gray-600">Eliminate "it works on my machine" problems with containers that run the same way in every environment.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaCloudUploadAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Deployments</h3>
                <p className="text-gray-600">Accelerate your deployment cycles with lightweight containers that start in seconds instead of minutes.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaLock className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Improve application isolation and implement security controls at the container level for better protection.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaNetworkWired className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Microservices Ready</h3>
                <p className="text-gray-600">Enable microservices architectures with independent, loosely coupled services that can be deployed and scaled individually.</p>
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
              We leverage industry-leading container technologies and orchestration platforms to deliver robust solutions.
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
              <div className="text-sm text-blue-600 font-medium">Industry: Retail</div>
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Modernize with Containers?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how containerization can help your organization improve deployment efficiency and application management.
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

export default Containerization; 