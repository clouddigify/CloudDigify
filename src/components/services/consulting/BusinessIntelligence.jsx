import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChartLine, FaChartBar, FaChartPie, FaLayerGroup, FaSearchDollar, FaLightbulb, FaDatabase, FaDesktop, FaBrain, FaRocket, FaUsers, FaTrophy, FaFileAlt, FaClipboardCheck, FaTools, FaGraduationCap, FaBullseye } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const BusinessIntelligence = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Business Intelligence');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Business Intelligence - ${serviceType}`);
    setIsFormOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: FaChartBar,
      title: "Reporting Solutions",
      description: "CloudDigify creates comprehensive, interactive reports tailored to your business needs"
    },
    {
      icon: FaChartPie,
      title: "Dashboard Development",
      description: "CloudDigify custom dashboards that visualize your critical KPIs in real-time"
    },
    {
      icon: FaLayerGroup,
      title: "Data Modeling",
      description: "CloudDigify structures your data for optimal cloud-based analysis and reporting"
    },
    {
      icon: FaSearchDollar,
      title: "Financial Analytics",
      description: "CloudDigify specialized BI solutions for actionable financial insights"
    },
    {
      icon: FaLightbulb,
      title: "Predictive Analytics",
      description: "CloudDigify forecasting tools to anticipate future trends and opportunities"
    },
    {
      icon: FaDesktop,
      title: "Self-Service BI",
      description: "CloudDigify empowers users with intuitive tools to create their own insights"
    }
  ];

  const benefits = [
    {
      icon: FaBrain,
      title: "Data-Driven Decision Making",
      description: "CloudDigify helps transform your raw data into actionable insights that drive better business decisions at every level of your organization."
    },
    {
      icon: FaRocket,
      title: "Increased Operational Efficiency",
      description: "CloudDigify's BI solutions identify bottlenecks and optimization opportunities, helping you streamline operations and reduce costs."
    },
    {
      icon: FaUsers,
      title: "Enhanced Customer Understanding",
      description: "CloudDigify enables deeper customer insights through advanced analytics, helping you improve satisfaction and drive loyalty."
    },
    {
      icon: FaTrophy,
      title: "Competitive Advantage",
      description: "CloudDigify equips you with the intelligence to spot market trends early and respond more effectively than competitors."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Floating Dashboard Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"
        />
        <div className="absolute inset-0">
          {/* Animated Dashboard Elements */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Animated Charts */}
            {[...Array(3)].map((_, index) => (
              <motion.rect
                key={`chart-${index}`}
                x={20 + index * 25}
                y={30}
                width={20}
                height={40}
                rx={2}
                fill="rgba(255, 255, 255, 0.1)"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Animated Data Points */}
            {[...Array(12)].map((_, index) => (
              <motion.circle
                key={`point-${index}`}
                cx={10 + (index % 4) * 30}
                cy={70 + Math.floor(index / 4) * 10}
                r={1}
                fill="white"
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Connecting Lines */}
            {[...Array(8)].map((_, index) => (
              <motion.line
                key={`line-${index}`}
                x1={15 + (index % 3) * 30}
                y1={75 + Math.floor(index / 3) * 10}
                x2={35 + (index % 3) * 30}
                y2={75 + Math.floor(index / 3) * 10}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
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
            Business Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Transform your organization's data into powerful insights that drive growth, efficiency, and competitive advantage
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
            Explore BI Solutions
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Transforms Your Data with BI</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to implement business intelligence solutions that turn your data into actionable insights.   
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for BI</h2>
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
                <FaClipboardCheck className="inline-block mr-2 text-green-600" />
                CloudDigify's BI Implementation Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Requirements Analysis",
                    description: "CloudDigify works with your team to understand your business goals and reporting needs to design a tailored BI strategy."
                  },
                  {
                    step: "Data Assessment",
                    description: "CloudDigify evaluates your data sources, quality, and structure to identify the best approach for your BI implementation."
                  },
                  {
                    step: "Solution Design",
                    description: "CloudDigify creates a scalable BI architecture optimized for your specific needs and integrated with your existing systems."
                  },
                  {
                    step: "Implementation",
                    description: "CloudDigify's experts deploy and configure your BI platform following industry best practices for optimal performance."
                  },
                  {
                    step: "Training & Support",
                    description: "CloudDigify provides comprehensive training and ongoing support to ensure your team leverages the full potential of your BI solution."
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
                        {index === 1 && <FaChartLine className="text-sm" />}
                        {index === 2 && <FaTools className="text-sm" />}
                        {index === 3 && <FaBullseye className="text-sm" />}
                        {index === 4 && <FaGraduationCap className="text-sm" />}
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
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Unlock the Power of Your Data?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Partner with CloudDigify to create a business intelligence ecosystem that drives growth, innovation, and competitive advantage.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('BI Implementation')}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your BI Journey
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

export default BusinessIntelligence; 