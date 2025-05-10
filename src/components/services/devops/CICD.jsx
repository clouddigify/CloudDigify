import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDocker, FaRocket, FaChartLine, FaCodeBranch, FaSync, 
         FaArrowRight, FaServer, FaCheck, FaCloudDownloadAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const CICD = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('CI/CD Pipeline');
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openInquiryForm = (serviceType) => {
    setInquiryType(`CI/CD - ${serviceType}`);
    setShowInquiryForm(true);
  };

  // Enhanced Pipeline Animation
  const PipelineAnimation = () => {
    const pipelineStages = [
      { id: 'code', label: 'Code', icon: FaCodeBranch, color: '#60A5FA' },
      { id: 'build', label: 'Build', icon: FaGithub, color: '#34D399' },
      { id: 'test', label: 'Test', icon: FaCheck, color: '#F59E0B' },
      { id: 'deploy', label: 'Deploy', icon: FaRocket, color: '#EC4899' },
      { id: 'monitor', label: 'Monitor', icon: FaChartLine, color: '#8B5CF6' },
      { id: 'feedback', label: 'Feedback', icon: FaSync, color: '#3B82F6' }
    ];

    return (
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-4xl">
          {/* Pipeline flow */}
          <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-4 md:gap-2">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
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
        title="CI/CD DevOps Services | CloudDigify"
        description="Accelerate software delivery with CI/CD pipelines and DevOps automation from CloudDigify."
        canonicalUrl="https://clouddigify.com/services/devops/cicd"
        keywords={['CI/CD', 'DevOps', 'automation', 'CloudDigify']}
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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                className="text-5xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                CloudDigify CI/CD Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Accelerate your development with automated pipelines and continuous delivery
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openInquiryForm('Pipeline Assessment')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
              >
                Get Your CI/CD Assessment <FaArrowRight className="ml-2" />
              </motion.button>
              
              <PipelineAnimation />
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
                  icon: FaGithub,
                  title: "Source Control Integration",
                  description: "Seamless integration with Git, GitHub, GitLab, and more"
                },
                {
                  icon: FaDocker,
                  title: "Container Support",
                  description: "Built-in support for Docker and Kubernetes"
                },
                {
                  icon: FaRocket,
                  title: "Automated Deployments",
                  description: "Zero-touch deployments to multiple environments"
                },
                {
                  icon: FaChartLine,
                  title: "Metrics & Analytics",
                  description: "Comprehensive insights into your pipeline performance"
                },
                {
                  icon: FaCodeBranch,
                  title: "Branch-Based Workflows",
                  description: "Support for feature branches and pull request validation"
                },
                {
                  icon: FaServer,
                  title: "Infrastructure as Code",
                  description: "Deploy infrastructure alongside your applications"
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
              Business Impact
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Deploy Frequency",
                  value: "10x",
                  description: "Increase in deployment frequency"
                },
                {
                  title: "Lead Time",
                  value: "75%",
                  description: "Reduction in time from commit to deploy"
                },
                {
                  title: "Change Failure Rate",
                  value: "60%",
                  description: "Reduction in failed deployments"
                },
                {
                  title: "Recovery Time",
                  value: "85%",
                  description: "Faster recovery from incidents"
                },
                {
                  title: "Development Costs",
                  value: "40%",
                  description: "Lower overall development costs"
                },
                {
                  title: "Time-to-Market",
                  value: "65%",
                  description: "Faster delivery of new features"
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
                <h3 className="text-2xl font-bold text-blue-600 mb-4">E-Commerce Platform Transformation</h3>
                <p className="text-gray-700 mb-6">
                  A leading online retailer needed to accelerate their release cycles while maintaining high quality and reliability standards.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">Manual deployments causing 2-week release cycles and frequent production issues</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">Implemented CI/CD pipeline with automated testing, container-based deployments, and monitoring</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600 text-sm">Deployment time reduced to 15 minutes with 99.9% success rate</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  <FaRocket className="text-5xl text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-gray-900">200+</div>
                    <div className="text-gray-600">Deployments per Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Delivery Pipeline?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Partner with CloudDigify to implement robust CI/CD practices that accelerate your software delivery.
            </p>
            <motion.button 
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => openInquiryForm('Pipeline Consultation')}
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

export default CICD;
