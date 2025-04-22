import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaServer, FaNetworkWired, FaShieldAlt, FaDatabase, FaCloudUploadAlt, FaChartLine, FaSyncAlt, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';

const CloudInfrastructure = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud & Infrastructure Services",
    description: "Robust, scalable cloud infrastructure solutions designed to power your digital transformation journey with enhanced security, flexibility, and cost optimization.",
    icon: <FaCloud className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-500 to-teal-400",
    benefits: [
      "Reduced operational costs and improved ROI",
      "Enhanced scalability and business agility",
      "Improved security and compliance posture",
      "Increased reliability and system availability",
      "Faster time-to-market for new initiatives"
    ],
    features: [
      {
        title: "Cloud Platform Services",
        description: "Expert guidance and implementation across AWS, Azure, and Google Cloud Platform to leverage the right cloud services for your specific business needs."
      },
      {
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Strategic design and implementation of hybrid and multi-cloud architectures that balance flexibility, performance, and cost efficiency."
      },
      {
        title: "Infrastructure Monitoring & Management",
        description: "Comprehensive monitoring, alerting, and management solutions to ensure optimal performance, security, and cost efficiency of your cloud infrastructure."
      },
      {
        title: "Cloud Security & Compliance",
        description: "Robust security controls, threat detection, and compliance frameworks to protect your cloud infrastructure and meet industry regulations."
      }
    ],
    technologiesUsed: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Docker",
      "VMware",
      "Datadog",
      "Prometheus",
      "New Relic",
      "CloudFlare"
    ],
    caseStudy: {
      title: "Global Media Company Achieves Infrastructure Transformation",
      client: "International Media & Entertainment Corporation",
      challenge: "A global media company struggled with aging on-premises infrastructure that was costly to maintain, difficult to scale, and unable to meet the demands of their growing digital content delivery services. They needed a modern infrastructure solution that could scale dynamically while reducing operational costs.",
      solution: "CloudDigify designed and implemented a hybrid cloud infrastructure leveraging AWS and Azure, with automated provisioning via Terraform, containerized applications, global CDN integration, and a unified monitoring solution. The solution included robust security controls, cost management tools, and comprehensive training.",
      results: [
        "42% reduction in overall infrastructure costs",
        "99.99% platform availability, up from 98%",
        "70% faster deployment of new services and features",
        "Seamless handling of 5x traffic spikes during major content releases"
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
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Transform Your Infrastructure
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
              <h2 className="text-3xl font-bold mb-6">Future-Proof Your Business Infrastructure</h2>
              <p className="text-gray-700 mb-6">
                In today's fast-paced digital world, your infrastructure is the foundation of your business success. Cloud infrastructure services from CloudDigify provide the agility, security, and scalability you need to stay competitive and innovative.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement a hybrid solution, our expert team delivers tailored infrastructure services aligned with your business objectives and technical requirements.
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
              <div className="text-5xl text-blue-500 mb-6">
                <FaCloud />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure Solutions</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cloud migration & modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Hybrid & multi-cloud architectures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">24/7 managed services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cost optimization strategies</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule Infrastructure Assessment
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Cloud Infrastructure Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive infrastructure solutions designed to meet your unique business requirements and technical challenges.
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

      {/* Core Services Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Core Infrastructure Capabilities</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our infrastructure services span across critical capabilities that power modern digital businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaServer className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compute Services</h3>
                <p className="text-gray-600">Optimized virtual machines, containers, and serverless computing solutions that provide the right balance of performance and cost.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaNetworkWired className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Network Architecture</h3>
                <p className="text-gray-600">Secure, high-performance network designs with VPCs, load balancing, CDN integration, and global connectivity solutions.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaDatabase className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Database & Storage</h3>
                <p className="text-gray-600">Scalable, high-performance database solutions and storage services optimized for your specific workload requirements.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaShieldAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
                <p className="text-gray-600">Comprehensive security controls, identity management, encryption, and compliance frameworks to protect your infrastructure.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaChartLine className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Monitoring & Analytics</h3>
                <p className="text-gray-600">Advanced monitoring, logging, and analytics solutions that provide deep visibility into performance, usage, and security.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaMoneyBillWave className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost Management</h3>
                <p className="text-gray-600">Strategic cost optimization through resource rightsizing, reserved instances, spot pricing, and continuous usage analysis.</p>
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
            <h2 className="text-3xl font-bold text-center mb-6">Technologies & Platforms</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading technologies and platforms to deliver optimal infrastructure solutions.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
              <div className="text-sm text-blue-600 font-medium">Industry: Media & Entertainment</div>
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

      {/* Infrastructure Assessment CTA */}
      <section className="py-16 px-6 bg-blue-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Modernize Your Infrastructure?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Get started with a comprehensive infrastructure assessment to identify optimization opportunities and create a roadmap for your cloud journey.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Request a Free Assessment
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-500 border border-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore All Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default CloudInfrastructure; 