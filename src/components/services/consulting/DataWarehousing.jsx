import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDatabase, FaWarehouse, FaServer, FaCloud, FaChartBar, FaSearch, FaLock, FaChartLine, FaCubes, FaClipboardCheck, FaExpandArrowsAlt, FaHistory, FaClipboard, FaPencilRuler, FaSyncAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
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

  const services = [
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
  ];

  const benefits = [
    {
      icon: FaCubes,
      title: "Centralized Data Management",
      description: "CloudDigify helps you consolidate disparate data sources into a single, unified warehouse that serves as your organization's single source of truth."
    },
    {
      icon: FaClipboardCheck,
      title: "Enhanced Decision Support",
      description: "CloudDigify's data warehousing solutions provide reliable, consistent data that supports more accurate and timely business decisions."
    },
    {
      icon: FaExpandArrowsAlt,
      title: "Scalable Architecture",
      description: "CloudDigify designs your data warehouse to grow with your business, handling increasing data volumes without performance degradation."
    },
    {
      icon: FaHistory,
      title: "Historical Analysis",
      description: "CloudDigify enables deep historical analysis through proper data warehouse design, helping you identify long-term trends and patterns."
    }
  ];

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

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Transforms Your Data Warehousing</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to design, implement, and optimize data warehouse solutions that form the foundation of your analytics strategy. Our experts combine deep technical knowledge with business acumen to deliver warehousing implementations that consolidate your data, improve accessibility, and enable powerful insights.
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

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for Data Warehousing</h2>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-6">
                <FaDatabase className="inline-block mr-2 text-blue-600" />
                CloudDigify's Data Warehouse Implementation Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Assessment & Discovery",
                    description: "CloudDigify evaluates your current data landscape, business goals, and reporting needs to define the optimal warehousing strategy."
                  },
                  {
                    step: "Architecture Design",
                    description: "CloudDigify designs a flexible, scalable data warehouse architecture tailored to your specific requirements and future growth."
                  },
                  {
                    step: "ETL Development",
                    description: "CloudDigify builds robust data pipelines to extract, transform, and load your data into the warehouse with proper validation and quality checks."
                  },
                  {
                    step: "Implementation",
                    description: "CloudDigify's experts implement your data warehouse following best practices for performance, security, and governance."
                  },
                  {
                    step: "Optimization & Support",
                    description: "CloudDigify provides ongoing optimization, monitoring, and support to ensure your data warehouse continues to meet your evolving needs."
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
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index === 0 && <FaClipboard className="text-sm" />}
                        {index === 1 && <FaPencilRuler className="text-sm" />}
                        {index === 2 && <FaSyncAlt className="text-sm" />}
                        {index === 3 && <FaTools className="text-sm" />}
                        {index === 4 && <FaCheckCircle className="text-sm" />}
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