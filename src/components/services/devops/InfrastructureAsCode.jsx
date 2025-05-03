import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaDatabase, FaShieldAlt, FaCogs, FaCloud, 
         FaArrowRight, FaCloudUploadAlt, FaCode, FaChartLine, FaHistory } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const InfrastructureAsCode = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Infrastructure as Code');

  useEffect(() => {
    // Check if this is a page refresh
    const lastPath = sessionStorage.getItem('currentPath');
    const currentPath = window.location.pathname;
    
    if (lastPath === currentPath) {
      setIsFirstLoad(false);
    }
    
    sessionStorage.setItem('currentPath', currentPath);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const openInquiryForm = (serviceType) => {
    setInquiryType(`IaC - ${serviceType}`);
    setShowInquiryForm(true);
  };

  // Enhanced Infrastructure Grid
  const InfrastructureGrid = () => {
    const infrastructureStages = [
      { id: 'provision', label: 'Provision', icon: FaServer, color: '#60A5FA' },
      { id: 'configure', label: 'Configure', icon: FaCogs, color: '#34D399' },
      { id: 'network', label: 'Network', icon: FaNetworkWired, color: '#F59E0B' },
      { id: 'secure', label: 'Secure', icon: FaShieldAlt, color: '#EC4899' },
      { id: 'store', label: 'Store', icon: FaDatabase, color: '#8B5CF6' },
      { id: 'deploy', label: 'Deploy', icon: FaCloudUploadAlt, color: '#3B82F6' }
    ];

    return (
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-4xl">
          {/* Infrastructure flow */}
          <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-4 md:gap-2">
            {infrastructureStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="flex flex-col items-center"
                initial={isFirstLoad ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="rounded-lg p-3 mb-3 shadow-md w-[60px] md:w-[70px] flex justify-center"
                  style={{ backgroundColor: `${stage.color}22`, border: `2px solid ${stage.color}` }}
                  whileHover={{ scale: 1.1, backgroundColor: `${stage.color}33` }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <stage.icon 
                      className="text-xl md:text-2xl" 
                      style={{ color: stage.color }} 
                    />
                  </motion.div>
                </motion.div>
                <motion.span 
                  className="text-xs md:text-sm text-white font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {stage.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Infrastructure as Code Services | CloudDigify"
        description="Automate your infrastructure with Infrastructure as Code (IaC) solutions from CloudDigify."
        canonicalUrl="https://clouddigify.com/services/devops/infrastructure-as-code"
        keywords={['infrastructure as code', 'IaC', 'DevOps', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
      >
        {/* Hero Section with fixed height */}
        <section className="relative h-screen max-h-[750px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                className="text-5xl font-bold mb-6"
                initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                CloudDigify Infrastructure as Code
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
                initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Automate your infrastructure deployment with code-driven architecture
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openInquiryForm('IaC Assessment')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
              >
                Discover IaC Solutions <FaArrowRight className="ml-2" />
              </motion.button>
              
              <InfrastructureGrid />
            </motion.div>
          </div>

          {/* Wave SVG at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path
                d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 text-center mb-16"
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCode,
                  title: "Version Control",
                  description: "Track infrastructure changes with Git"
                },
                {
                  icon: FaCloud,
                  title: "Multi-Cloud Support",
                  description: "Deploy to any cloud provider"
                },
                {
                  icon: FaCogs,
                  title: "Automation",
                  description: "Automated provisioning and updates"
                },
                {
                  icon: FaShieldAlt,
                  title: "Security",
                  description: "Built-in security best practices"
                },
                {
                  icon: FaCloudUploadAlt,
                  title: "Scalability",
                  description: "Scale infrastructure on demand"
                },
                {
                  icon: FaHistory,
                  title: "State Management",
                  description: "Track and manage infrastructure state"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                  onClick={() => openInquiryForm(feature.title)}
                >
                  <feature.icon className="text-4xl text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 text-center mb-16"
            >
              Business Benefits
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Deployment Speed",
                  value: "90%",
                  description: "Faster infrastructure deployments"
                },
                {
                  title: "Configuration Errors",
                  value: "80%",
                  description: "Reduction in configuration errors"
                },
                {
                  title: "Recovery Time",
                  value: "65%",
                  description: "Faster disaster recovery"
                },
                {
                  title: "Operational Costs",
                  value: "40%",
                  description: "Reduction in operational costs"
                },
                {
                  title: "Time-to-Market",
                  value: "70%",
                  description: "Faster time-to-market for new features"
                },
                {
                  title: "Resource Utilization",
                  value: "35%",
                  description: "Improved cloud resource utilization"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                  <p className="text-blue-50">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 text-center mb-12"
            >
              Success Story
            </motion.h2>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Global Retail Infrastructure Modernization</h3>
                <p className="text-gray-700 mb-6">
                  A multinational retail company needed to standardize their global infrastructure across hundreds of locations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">Manual infrastructure provisioning causing inconsistency and deployment bottlenecks</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">Implemented Infrastructure as Code with version-controlled templates and automated CI/CD</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600 text-sm">95% faster deployments with 100% consistency across global infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  <FaServer className="text-5xl text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Infrastructure Components Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Automate Your Infrastructure?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Partner with CloudDigify to transform your infrastructure provisioning with code-driven automation.
            </p>
            <motion.button 
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => openInquiryForm('IaC Strategy')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </section>
        
        {/* Service Inquiry Form Modal */}
        {showInquiryForm && (
          <ServiceInquiryForm
            isOpen={showInquiryForm}
            onClose={() => setShowInquiryForm(false)}
            serviceName={inquiryType}
          />
        )}
      </motion.div>
    </>
  );
};

export default InfrastructureAsCode;
