import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDatabase, FaWarehouse, FaServer, FaCloud, FaChartBar, FaSearch, FaLock, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const DataWarehousing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Data Warehousing');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Data Warehousing - ${serviceType}`);
    setIsFormOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Cube Grid Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
        />
        <div className="absolute inset-0">
          {/* 3D Cube Grid Animation */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Generate a 3x3 grid of cubes */}
            {[...Array(9)].map((_, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const baseX = 20 + col * 20;
              const baseY = 20 + row * 20;
              
              return (
                <g key={index}>
                  {/* Front face */}
                  <motion.path
                    d={`M ${baseX},${baseY} l 10,0 l 0,10 l -10,0 Z`}
                    fill="rgba(255, 255, 255, 0.1)"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Right face */}
                  <motion.path
                    d={`M ${baseX + 10},${baseY} l 5,-5 l 0,10 l -5,5 Z`}
                    fill="rgba(255, 255, 255, 0.15)"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.15, 0.4, 0.15],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Top face */}
                  <motion.path
                    d={`M ${baseX},${baseY} l 10,0 l 5,-5 l -10,0 Z`}
                    fill="rgba(255, 255, 255, 0.2)"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              );
            })}
            
            {/* Connecting Lines */}
            {[...Array(12)].map((_, index) => (
              <motion.line
                key={`line-${index}`}
                x1={25 + (index % 4) * 20}
                y1={25 + Math.floor(index / 4) * 20}
                x2={45 + (index % 4) * 20}
                y2={25 + Math.floor(index / 4) * 20}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Data Warehousing Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Modern data warehousing for enterprise-scale analytics
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Solutions
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
            Our Data Warehousing Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaWarehouse,
                title: "Warehouse Design",
                description: "CloudDigify customized data warehouse architecture tailored to your specific business requirements"
              },
              {
                icon: FaCloud,
                title: "Cloud Data Warehouse",
                description: "CloudDigify implements modern cloud-based data warehouse solutions with scalable performance"
              },
              {
                icon: FaServer,
                title: "On-Premise Solutions",
                description: "CloudDigify traditional data warehouse implementations enhanced with modern cloud approaches"
              },
              {
                icon: FaSearch,
                title: "Data Integration",
                description: "CloudDigify connects and unifies data from multiple sources seamlessly in your warehouse"
              },
              {
                icon: FaLock,
                title: "Security & Governance",
                description: "CloudDigify implements robust security protocols and comprehensive data governance frameworks"
              },
              {
                icon: FaChartBar,
                title: "Analytics Integration",
                description: "CloudDigify connects your warehouse to powerful analytics and interactive reporting tools"
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Data Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Partner with CloudDigify to build a data warehouse that becomes the foundation of your data-driven organization.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('Implementation')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
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

export default DataWarehousing; 