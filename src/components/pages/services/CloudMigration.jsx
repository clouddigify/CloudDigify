import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaRocket, FaCloudUploadAlt, FaShieldAlt, FaChartLine, FaCheckCircle, FaServer, FaDatabase, FaNetworkWired } from 'react-icons/fa';

const CloudMigration = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud Migration Services",
    description: "Seamlessly move your applications, infrastructure, and data to the cloud with our comprehensive migration solutions.",
    icon: <FaCloudUploadAlt className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-blue-800",
    benefits: [
      "Reduce infrastructure costs and optimize resource allocation",
      "Improve scalability and performance of your applications",
      "Enhance security and disaster recovery capabilities",
      "Increase business agility and accelerate innovation",
      "Simplified maintenance and management of IT resources"
    ],
    features: [
      {
        title: "Migration Assessment & Strategy",
        description: "Comprehensive evaluation of your existing infrastructure, applications, and data to develop a tailored migration roadmap with clear priorities and timelines."
      },
      {
        title: "Lift & Shift Migration",
        description: "Efficiently move your existing applications to the cloud with minimal changes, allowing you to quickly benefit from cloud infrastructure while planning future optimizations."
      },
      {
        title: "Application Modernization",
        description: "Refactor and optimize your applications during migration to take full advantage of cloud-native features, microservices, and serverless architectures."
      },
      {
        title: "Database Migration",
        description: "Securely migrate your databases to cloud platforms with minimal downtime, including homogeneous and heterogeneous migrations with data validation."
      }
    ],
    technologiesUsed: [
      "AWS Migration Hub",
      "Azure Migrate",
      "Google Cloud Migration",
      "VMware HCX",
      "CloudEndure",
      "Database Migration Service",
      "Terraform",
      "Docker & Kubernetes"
    ],
    caseStudy: {
      title: "Successful Enterprise Migration",
      client: "Global Manufacturing Company",
      challenge: "A global manufacturing enterprise with operations in 15 countries needed to migrate their legacy on-premises infrastructure to the cloud. They faced challenges with disparate systems, critical 24/7 applications, and strict compliance requirements.",
      solution: "CloudDigify implemented a phased migration approach, starting with non-critical workloads while establishing a secure landing zone. We used a combination of rehosting, replatforming, and refactoring strategies based on application importance and modernization potential.",
      results: [
        "Migrated 200+ applications and 50TB of data with 99.9% uptime",
        "Reduced infrastructure costs by 35% in the first year",
        "Improved application performance by 40% on average",
        "Decreased time-to-market for new features by 60%"
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
              <h2 className="text-3xl font-bold mb-6">Accelerate Your Cloud Journey</h2>
              <p className="text-gray-700 mb-6">
                Moving to the cloud is more than just relocating infrastructure – it's about transforming how your business operates. Our Cloud Migration services help organizations seamlessly transition their applications, data, and infrastructure to the cloud while minimizing disruption and maximizing business value.
              </p>
              <p className="text-gray-700 mb-8">
                With our proven migration methodology and experienced team, we ensure a smooth transition that addresses your unique business requirements, security needs, and performance expectations. Whether you're planning a complete cloud transformation or a hybrid approach, our experts will guide you through every step of the journey.
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
                <FaCloudUploadAlt />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Migration Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Thorough discovery and assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Detailed migration planning and strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Secure and efficient execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Rigorous testing and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Smooth cutover with minimal disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Post-migration optimization</span>
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Migration Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We provide comprehensive cloud migration services tailored to your specific business needs and technical requirements.
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

      {/* Migration Process */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Our Migration Process</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We follow a proven methodology to ensure successful cloud migrations with minimal disruption to your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover & Assess</h3>
              <p className="text-gray-700">Evaluate your current environment, identify dependencies, and create a detailed inventory of applications and infrastructure.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Plan & Design</h3>
              <p className="text-gray-700">Develop a detailed migration strategy, target architecture, and timeline with clear milestones and success criteria.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build & Migrate</h3>
              <p className="text-gray-700">Set up the target environment, implement security controls, and execute the migration according to the plan.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Test & Validate</h3>
              <p className="text-gray-700">Perform thorough testing to ensure functionality, performance, security, and compliance in the new environment.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cut Over & Go-Live</h3>
              <p className="text-gray-700">Execute the transition to the cloud environment with minimal disruption and according to the agreed-upon schedule.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimize & Innovate</h3>
              <p className="text-gray-700">Continuously improve your cloud environment, optimize costs, and implement cloud-native innovations.</p>
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
              We leverage industry-leading migration tools and technologies to ensure efficient and secure cloud transitions.
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
              <div className="text-sm text-blue-600 font-medium">Industry: Manufacturing</div>
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Start Your Cloud Migration?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Contact our team today to discuss your cloud migration needs and discover how we can help you achieve a seamless transition.
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

export default CloudMigration; 