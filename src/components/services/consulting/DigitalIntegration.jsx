import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlug, FaCode, FaExchangeAlt, FaCloud, FaCogs, FaShieldAlt, FaDatabase, FaNetworkWired, FaStream, FaBolt, FaCheckSquare, FaExpandArrowsAlt, FaFileAlt, FaDraftingCompass, FaToolbox, FaFlask, FaServer } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const DigitalIntegration = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Digital Integration');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Digital Integration - ${serviceType}`);
    setIsFormOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: FaPlug,
      title: "API Integration",
      description: "CloudDigify connects applications through robust and scalable API solutions"
    },
    {
      icon: FaExchangeAlt,
      title: "Data Integration",
      description: "CloudDigify enables seamless data flow between diverse business systems"
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "CloudDigify seamlessly connects cloud and on-premise systems for hybrid operations"
    },
    {
      icon: FaDatabase,
      title: "Database Integration",
      description: "CloudDigify provides unified data access across multiple platforms and databases"
    },
    {
      icon: FaNetworkWired,
      title: "Enterprise Integration",
      description: "CloudDigify connects legacy and modern systems for complete business solutions"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Integration",
      description: "CloudDigify implements protected data exchange protocols with enterprise security"
    }
  ];

  const benefits = [
    {
      icon: FaStream,
      title: "Streamlined Operations",
      description: "CloudDigify helps eliminate manual processes and data silos by connecting your systems to create seamless workflows and information exchange."
    },
    {
      icon: FaBolt,
      title: "Enhanced Agility",
      description: "CloudDigify's integration solutions enable your business to adapt quickly to changes and implement new systems without disrupting existing operations."
    },
    {
      icon: FaCheckSquare,
      title: "Improved Data Quality",
      description: "CloudDigify ensures consistent data across all your systems with validation rules and quality checks built into integration processes."
    },
    {
      icon: FaExpandArrowsAlt,
      title: "Scalable Architecture",
      description: "CloudDigify designs integration solutions that grow with your business, easily accommodating new systems and increased transaction volumes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Connected Systems Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600"
        />
        <div className="absolute inset-0">
          {/* Connected Systems Animation */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* System Nodes */}
            {[...Array(5)].map((_, index) => {
              const angle = (index * Math.PI * 2) / 5;
              const x = 50 + Math.cos(angle) * 25;
              const y = 50 + Math.sin(angle) * 25;
              
              return (
                <g key={index}>
                  {/* System Node */}
                  <motion.rect
                    x={x - 4}
                    y={y - 4}
                    width="8"
                    height="8"
                    rx="1"
                    fill="rgba(255, 255, 255, 0.9)"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Data Flow Lines */}
                  {[...Array(5)].map((_, targetIndex) => {
                    if (targetIndex === index) return null;
                    const targetAngle = (targetIndex * Math.PI * 2) / 5;
                    const targetX = 50 + Math.cos(targetAngle) * 25;
                    const targetY = 50 + Math.sin(targetAngle) * 25;

                    return (
                      <g key={`connection-${index}-${targetIndex}`}>
                        <motion.line
                          x1={x}
                          y1={y}
                          x2={targetX}
                          y2={targetY}
                          stroke="rgba(255, 255, 255, 0.2)"
                          strokeWidth="0.5"
                          strokeDasharray="4,4"
                          initial={{ pathLength: 0 }}
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: (index + targetIndex) * 0.2,
                            ease: "linear"
                          }}
                        />
                        
                        {/* Data Packets */}
                        <motion.circle
                          r="1"
                          fill="white"
                          initial={{ pathLength: 0 }}
                          animate={{
                            cx: [x, targetX],
                            cy: [y, targetY],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: (index + targetIndex) * 0.3,
                            ease: "linear"
                          }}
                        />
                      </g>
                    );
                  })}

                  {/* System Pulse Effect */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Digital Integration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Seamlessly connect your systems, data, and applications
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Integration Solutions
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Connects Your Digital Ecosystem</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to seamlessly connect your applications, data sources, and business processes. Our integration experts combine technical expertise with business understanding to implement solutions that eliminate silos, automate workflows, and provide a unified view of your data.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for Digital Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-6">
                <FaNetworkWired className="inline-block mr-2 text-green-600" />
                CloudDigify's Integration Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Discovery & Analysis",
                    description: "CloudDigify analyzes your systems, data flows, and business processes to identify integration requirements and opportunities."
                  },
                  {
                    step: "Solution Architecture",
                    description: "CloudDigify designs a flexible integration architecture tailored to your business needs, technical environment, and future growth."
                  },
                  {
                    step: "Implementation",
                    description: "CloudDigify builds and configures integration solutions using best practices for security, performance, and maintainability."
                  },
                  {
                    step: "Testing & Validation",
                    description: "CloudDigify performs comprehensive testing to ensure data accuracy, process integrity, and system stability."
                  },
                  {
                    step: "Deployment & Support",
                    description: "CloudDigify provides smooth deployment and ongoing support to ensure your integration solution continues to deliver value."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index === 0 && <FaFileAlt className="text-sm" />}
                        {index === 1 && <FaDraftingCompass className="text-sm" />}
                        {index === 2 && <FaToolbox className="text-sm" />}
                        {index === 3 && <FaFlask className="text-sm" />}
                        {index === 4 && <FaServer className="text-sm" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Connect Your Digital Ecosystem?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Partner with CloudDigify to create seamless integrations that drive efficiency, accuracy, and business growth.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Integration
          </motion.button>
        </div>
      </section>
      
      {/* Service Inquiry Form Modal */}
      {isFormOpen && (
        <ServiceInquiryForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          serviceName={inquiryType}
        />
      )}
    </div>
  );
};

export default DigitalIntegration; 