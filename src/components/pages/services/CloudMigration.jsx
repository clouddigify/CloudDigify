import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaExchangeAlt, FaRocket, FaCloudUploadAlt, FaShieldAlt, FaCogs, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const CloudMigration = () => {
  // Customize these values for this service
  const serviceInfo = {
    title: "Cloud Migration Services",
    description: "Seamlessly transition your applications and infrastructure to the cloud with our proven migration framework, minimizing disruption while maximizing business value.",
    icon: <FaCloudUploadAlt className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-indigo-500",
    benefits: [
      "Accelerated time-to-cloud with proven migration methodologies",
      "Reduced risk with comprehensive assessment and planning",
      "Optimized costs through right-sized cloud resources",
      "Minimal business disruption with phased migration approach",
      "Improved performance, scalability, and security post-migration"
    ],
    features: [
      {
        title: "Migration Assessment & Planning",
        description: "Comprehensive discovery and analysis of your environment, determining cloud readiness, creating a detailed migration strategy, and building a phased roadmap."
      },
      {
        title: "Workload Optimization & Modernization",
        description: "Technical analysis and redesign of workloads to fully leverage cloud capabilities, including refactoring, rearchitecting, or replatforming applications."
      },
      {
        title: "Secure Migration Execution",
        description: "Carefully managed migration execution with proper testing, validation, and cutover planning to ensure security and minimize disruption to your business."
      },
      {
        title: "Post-Migration Optimization",
        description: "Ongoing monitoring, optimization, and tuning of migrated workloads to maximize performance and cost-efficiency in the cloud environment."
      }
    ],
    technologiesUsed: [
      "AWS Migration Hub",
      "Azure Migrate",
      "Google Cloud Migration Center",
      "CloudEndure Migration",
      "VMware HCX",
      "Terraform",
      "Ansible",
      "CloudFormation",
      "Azure Resource Manager",
      "Database Migration Services",
      "AWS Application Migration Service",
      "Azure App Service Migration Assistant"
    ],
    caseStudy: {
      title: "Enterprise-Scale Cloud Migration Success",
      client: "Global Financial Services Provider",
      challenge: "A large financial services provider with over 200 applications running on legacy infrastructure needed to migrate to the cloud to improve scalability, reduce costs, and accelerate innovation. They faced complex interdependencies, strict compliance requirements, and a need to maintain 24/7 operations throughout the migration.",
      solution: "CloudDigify deployed a multi-phased migration approach starting with a comprehensive assessment of all applications and infrastructure. We created application dependency maps, designed target architectures, and implemented a wave-based migration plan. The solution included automated migration tools, containerization of key applications, database modernization, and comprehensive security controls tailored for financial services.",
      results: [
        "Successfully migrated 200+ applications to AWS within 18 months",
        "Achieved 31% reduction in total infrastructure costs",
        "Zero critical service disruptions during migration",
        "Reduced application deployment time from weeks to hours"
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
              Start Your Migration Journey
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
                Moving to the cloud is a strategic decision that transforms how your business operates, innovates, and competes. CloudDigify's migration services provide a structured, secure approach to transitioning your applications and infrastructure to the cloud.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're migrating a single application or executing a full data center exodus, our proven methodology and experienced team ensure a smooth transition that delivers immediate value while setting the foundation for future innovation.
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
                <FaCloudUploadAlt />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Migration Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">1.</span>
                  <span className="text-gray-700">Discover & Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">2.</span>
                  <span className="text-gray-700">Planning & Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">3.</span>
                  <span className="text-gray-700">Migration & Validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">4.</span>
                  <span className="text-gray-700">Cutover & Go-Live</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">5.</span>
                  <span className="text-gray-700">Optimization & Operations</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Request Migration Assessment
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Migration Strategies Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Cloud Migration Strategies</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We tailor our approach to your specific needs, employing the right strategy for each workload in your portfolio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-2xl mb-4">
                <FaExchangeAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rehost (Lift & Shift)</h3>
              <p className="text-gray-700 mb-3">
                Quickly move applications to the cloud with minimal changes, ideal for legacy applications where immediate cloud benefits are needed.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Fastest migration path</li>
                <li>• Minimal application changes</li>
                <li>• First step in phased approach</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-2xl mb-4">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold mb-3">Replatform (Lift & Reshape)</h3>
              <p className="text-gray-700 mb-3">
                Make targeted optimizations to achieve cloud benefits without changing the core architecture of your applications.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Database migration to managed services</li>
                <li>• Containerization of applications</li>
                <li>• Integration with cloud services</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-2xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Refactor (Rearchitect)</h3>
              <p className="text-gray-700 mb-3">
                Modernize applications to fully leverage cloud-native capabilities for maximum performance, scalability, and cost efficiency.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Microservices architecture</li>
                <li>• Serverless computing</li>
                <li>• Cloud-native design patterns</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
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
              End-to-end migration services to guide you through every phase of your cloud journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceInfo.features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-6">Our Migration Process</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              A structured approach to ensure successful cloud migrations with minimal risk and business disruption.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <motion.div variants={itemVariants} className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive inventory of applications, infrastructure, and dependencies. Analyze workloads for cloud suitability, identify risks, and establish migration priorities.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div variants={itemVariants} className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0"></div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold mb-2">Planning & Design</h3>
                  <p className="text-gray-600">
                    Develop detailed migration strategy and roadmap. Design target architecture, security controls, and networking. Create migration waves and determine success criteria.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div variants={itemVariants} className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Build & Validate</h3>
                  <p className="text-gray-600">
                    Establish cloud landing zone with security, networking, and governance. Configure migration tools and processes. Validate with pilot migrations and refine approach.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div variants={itemVariants} className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0"></div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold mb-2">Migrate & Cutover</h3>
                  <p className="text-gray-600">
                    Execute migration in planned waves. Perform thorough testing of migrated workloads. Implement cutover plans with rollback options. Validate business functionality.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div variants={itemVariants} className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Optimize & Operate</h3>
                  <p className="text-gray-600">
                    Optimize cloud resources for performance and cost. Implement monitoring and management processes. Knowledge transfer and operational documentation. Continuous improvement.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
            </div>
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
            <h2 className="text-3xl font-bold text-center mb-6">Migration Technologies & Tools</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We leverage industry-leading migration tools and technologies to ensure efficient, secure transitions to the cloud.
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
      <section className="py-16 px-6 bg-blue-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Ready to Begin Your Cloud Migration?</motion.h2>
          <motion.p variants={itemVariants} className="mb-8 text-lg opacity-90">
            Start with a no-obligation migration assessment to discover your optimal path to the cloud.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Request Migration Assessment
            </Link>
            <Link
              to="/services"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
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