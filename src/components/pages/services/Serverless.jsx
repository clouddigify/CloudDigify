import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBolt, FaCheckCircle, FaServer, FaChartLine, FaClock, FaShieldAlt } from 'react-icons/fa';

const Serverless = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Serverless Computing Solutions",
    description: "Build and deploy scalable applications without managing servers, reducing operational complexity and costs.",
    icon: <FaBolt className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-purple-700",
    benefits: [
      "Automatic scaling to match demand without manual intervention",
      "Reduced operational costs by paying only for actual compute time",
      "Faster time-to-market with simplified deployment processes",
      "Improved developer productivity with focus on code, not infrastructure",
      "Enhanced reliability with built-in fault tolerance"
    ],
    features: [
      {
        title: "Function-as-a-Service (FaaS)",
        description: "Deploy individual functions that respond to events, scale automatically, and only incur costs when executed."
      },
      {
        title: "Event-Driven Architecture",
        description: "Build reactive systems that respond to triggers from various sources like databases, storage, user interactions, and scheduled events."
      },
      {
        title: "Serverless Databases",
        description: "Implement fully managed database solutions that scale automatically and integrate seamlessly with your serverless applications."
      },
      {
        title: "API Development",
        description: "Create scalable and secure APIs without managing the underlying infrastructure using serverless frameworks and services."
      }
    ],
    technologiesUsed: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "AWS API Gateway",
      "DynamoDB",
      "Serverless Framework",
      "Amazon EventBridge",
      "Azure Logic Apps"
    ],
    caseStudy: {
      title: "Real-Time Data Processing Solution",
      client: "Leading Financial Services Provider",
      challenge: "A financial services company needed to process millions of transactions daily with real-time analytics capabilities. Their traditional server-based architecture struggled with unpredictable load spikes and had high maintenance costs.",
      solution: "CloudDigify implemented a serverless architecture using AWS Lambda for data processing, Amazon EventBridge for event routing, and DynamoDB for storage. The solution included automatic scaling and integrated seamlessly with their existing systems.",
      results: [
        "Processing capacity scaled automatically to handle 10x normal load during peak periods",
        "Reduced infrastructure costs by 65% compared to previous server-based solution",
        "Improved processing time from minutes to seconds for critical transactions",
        "Eliminated system maintenance downtime with always-available serverless components"
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
              <h2 className="text-3xl font-bold mb-6">Focus on Code, Not Infrastructure</h2>
              <p className="text-gray-700 mb-6">
                Serverless computing represents a paradigm shift in how applications are built and deployed. By eliminating the need to manage servers, you can focus entirely on your code and business logic, allowing for faster innovation and reduced operational complexity.
              </p>
              <p className="text-gray-700 mb-8">
                At CloudDigify, we help organizations design, build, and deploy serverless applications that automatically scale to meet demand, reduce infrastructure costs, and accelerate time-to-market. Our serverless solutions cover everything from simple functions to complex event-driven architectures.
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
                <FaBolt />
              </div>
              <h3 className="text-xl font-semibold mb-4">Why Serverless?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">No server management required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Pay-per-execution pricing model</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Automatic scaling and high availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Built-in fault tolerance and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Simplified deployment and continuous integration</span>
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Serverless Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We provide a comprehensive range of serverless computing services to help you build scalable, resilient applications without the complexity of server management.
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
            <h2 className="text-3xl font-bold text-center mb-6">Benefits of Serverless Computing</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover why leading organizations are adopting serverless architectures for their critical applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaServer className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zero Server Management</h3>
                <p className="text-gray-600">Focus entirely on your application code while the cloud provider handles all server maintenance and updates.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaChartLine className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatic Scaling</h3>
                <p className="text-gray-600">Your applications automatically scale from a few requests per day to thousands per second without any configuration.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaClock className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pay-Per-Use</h3>
                <p className="text-gray-600">Only pay for the compute time you actually use, with no charges when your code isn't running.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mr-4">
                <FaShieldAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Built-in Security</h3>
                <p className="text-gray-600">Benefit from built-in security features and isolation that reduce vulnerability to traditional server-based attacks.</p>
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
              We leverage industry-leading serverless technologies to build powerful, scalable applications.
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Go Serverless?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how serverless computing can help your business reduce costs, increase agility, and accelerate innovation.
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

export default Serverless; 