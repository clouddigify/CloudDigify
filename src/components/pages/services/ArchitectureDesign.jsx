import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaLayerGroup, FaChartLine, FaShieldAlt, FaTools, FaCloudDownloadAlt, FaFingerprint, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';

const ArchitectureDesign = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud Architecture Design",
    description: "Custom-designed cloud architectures that provide scalability, security, and cost-effectiveness for your business applications and workloads.",
    icon: <FaLayerGroup className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-700 to-indigo-900",
    benefits: [
      "Optimized infrastructure costs through efficient resource utilization",
      "Enhanced scalability and flexibility to adapt to business needs",
      "Improved application resilience and disaster recovery capabilities",
      "Stronger security posture with defense-in-depth approach",
      "Accelerated time-to-market for new initiatives"
    ],
    features: [
      {
        title: "Enterprise Architecture Assessment",
        description: "Comprehensive evaluation of your current infrastructure, applications, and business needs to create a tailored migration and modernization roadmap."
      },
      {
        title: "Solution Architecture Design",
        description: "Custom cloud architecture blueprints that align with your technical requirements, business objectives, and budget constraints."
      },
      {
        title: "Well-Architected Framework Implementation",
        description: "Cloud architectures built following industry best practices for operational excellence, security, reliability, performance, and cost optimization."
      },
      {
        title: "Multi-Cloud & Hybrid Solutions",
        description: "Strategic designs that leverage the strengths of different cloud providers and integrate with on-premises systems when needed."
      }
    ],
    technologiesUsed: [
      "AWS Well-Architected Framework",
      "Azure Architecture Center",
      "GCP Architecture Framework",
      "Terraform",
      "Kubernetes",
      "Microservices",
      "API Gateway",
      "Serverless",
      "Event-driven architecture",
      "Infrastructure as Code"
    ],
    caseStudy: {
      title: "Financial Services Firm Achieves Secure & Scalable Cloud Architecture",
      client: "Leading Investment Management Company",
      challenge: "A financial services firm was experiencing performance issues with their legacy infrastructure that couldn't scale to meet increasing customer demands. They needed a secure, compliant architecture that could handle peak trading periods while maintaining strict regulatory compliance.",
      solution: "CloudDigify designed a multi-region cloud architecture with active-active failover capabilities, implementing microservices for core business functions, a unified API gateway, comprehensive security controls, and automated compliance monitoring. The design included detailed documentation and implementation guidance.",
      results: [
        "99.999% availability even during 4x normal trading volumes",
        "Passed financial regulatory compliance audits with zero findings",
        "65% reduction in infrastructure costs through efficient resource allocation",
        "Deployment time for new services reduced from weeks to hours"
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
              Request Architecture Consultation
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
              <h2 className="text-3xl font-bold mb-6">Build a Foundation for Success</h2>
              <p className="text-gray-700 mb-6">
                A well-designed cloud architecture is the foundation of successful digital transformation. Our expert architects create resilient, secure, and efficient cloud solutions tailored to your specific business requirements and technical constraints.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're migrating legacy systems, building new cloud-native applications, or optimizing existing cloud deployments, our architecture designs provide the blueprint for long-term success.
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
                <FaLayerGroup />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Architecture Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Business-aligned designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Security by design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cost-optimized resource planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Future-proof flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Detailed implementation blueprints</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule Architecture Review
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
            <h2 className="text-3xl font-bold text-center mb-6">Our Architecture Design Services</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive architectural services tailored to your specific business requirements and technical constraints.
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

      {/* Architecture Pillars Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Architecture Design Pillars</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our cloud architecture designs are built on five fundamental pillars that ensure long-term success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaRegLightbulb className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
                <p className="text-gray-600">Architectures designed for efficient operations, monitoring, and continuous improvement with automation at every layer.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaShieldAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-600">Defense-in-depth approach with comprehensive security controls, encryption, identity management, and compliance frameworks.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaFingerprint className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">Resilient designs with fault tolerance, automated recovery, and disaster recovery capabilities to ensure business continuity.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaChartLine className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Efficiency</h3>
                <p className="text-gray-600">Optimized resource selection, scaling strategies, and data management to deliver consistent performance at scale.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaTools className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Resource planning, rightsizing, and automation to eliminate waste and maximize the business value of cloud investments.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mb-4">
                <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">Green cloud practices and architectures designed to minimize environmental impact while meeting business objectives.</p>
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
            <h2 className="text-3xl font-bold text-center mb-6">Architecture Frameworks & Technologies</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading frameworks and technologies to implement optimal architecture solutions.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
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

      {/* Architecture Assessment CTA */}
      <section className="py-16 px-6 bg-blue-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready for a Cloud Architecture Assessment?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
            Our expert architects can evaluate your current systems and provide recommendations for a more efficient, secure, and cost-effective cloud architecture.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Schedule an Architecture Assessment
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

export default ArchitectureDesign; 