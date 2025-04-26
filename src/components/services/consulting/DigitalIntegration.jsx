import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlug, FaCode, FaExchangeAlt, FaCloud, FaCogs, FaShieldAlt, FaDatabase, FaNetworkWired } from 'react-icons/fa';
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

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Integration Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaPlug,
                title: "API Integration",
                description: "Connect applications through robust API solutions"
              },
              {
                icon: FaExchangeAlt,
                title: "Data Integration",
                description: "Seamless data flow between systems"
              },
              {
                icon: FaCloud,
                title: "Cloud Integration",
                description: "Connect cloud and on-premise systems"
              },
              {
                icon: FaDatabase,
                title: "Database Integration",
                description: "Unified data access across platforms"
              },
              {
                icon: FaNetworkWired,
                title: "Enterprise Integration",
                description: "Connect legacy and modern systems"
              },
              {
                icon: FaShieldAlt,
                title: "Secure Integration",
                description: "Protected data exchange protocols"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
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
            Let's build seamless connections for your business
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