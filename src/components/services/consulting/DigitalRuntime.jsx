import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaClock, FaRocket, FaChartLine, FaCogs, FaCode, FaCloud, FaCheckCircle, FaTachometerAlt, FaShieldAlt, FaCoins, FaArrowsAlt, FaSearchPlus, FaDraftingCompass, FaWrench, FaVial, FaSync } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const DigitalRuntime = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Digital Runtime');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Digital Runtime - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "CloudDigify's intelligent runtime tuning dramatically improves application response times, ensuring your customers enjoy seamless digital experiences."
    },
    {
      icon: FaChartLine,
      title: "Scalability Management",
      description: "CloudDigify implements dynamic scaling capabilities that automatically adjust to demand fluctuations, ensuring cost-efficiency without sacrificing performance."
    },
    {
      icon: FaCogs,
      title: "Proactive Monitoring",
      description: "CloudDigify's comprehensive monitoring system identifies and resolves potential issues before they impact your business operations."
    },
    {
      icon: FaCode,
      title: "Runtime Security",
      description: "CloudDigify's multi-layered security approach protects your applications during execution, safeguarding sensitive data and maintaining compliance."
    },
    {
      icon: FaCloud,
      title: "Cloud Runtime Integration",
      description: "CloudDigify seamlessly connects your runtime environment with leading cloud platforms, unlocking advanced capabilities while maintaining flexibility."
    },
    {
      icon: FaClock,
      title: "Optimization Services",
      description: "CloudDigify provides continuous optimization services that ensure your runtime environment evolves to meet changing business requirements."
    }
  ];

  const benefits = [
    {
      icon: FaTachometerAlt,
      title: "Improved Performance",
      description: "CloudDigify helps you eliminate performance bottlenecks, reducing response times and enhancing user satisfaction with your digital applications."
    },
    {
      icon: FaShieldAlt,
      title: "Enhanced Reliability",
      description: "CloudDigify's runtime solutions dramatically increase system uptime and stability, minimizing disruptions to your business operations."
    },
    {
      icon: FaCoins,
      title: "Cost Optimization",
      description: "CloudDigify optimizes your runtime resource utilization, reducing infrastructure costs while maintaining optimal performance levels."
    },
    {
      icon: FaArrowsAlt,
      title: "Future-Ready Architecture",
      description: "CloudDigify ensures your runtime environment can easily adapt to emerging technologies and changing business requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wave Pattern */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
        />
        <div className="absolute inset-0">
          {/* Animated Wave Pattern */}
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            <motion.path
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            {/* Floating Circles Animation */}
            {[...Array(6)].map((_, index) => (
              <motion.circle
                key={index}
                cx={200 + index * 200}
                cy={160}
                r={10}
                fill="white"
                fillOpacity="0.3"
                initial={{ y: 0 }}
                animate={{ y: [-20, 20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.5
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
            CloudDigify Digital Runtime
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Accelerate business performance with our industry-leading runtime services that ensure optimal efficiency, reliability, and scalability
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
            Schedule Your Consultation
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Transforms Your Runtime Environment</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to implement and optimize runtime services that dramatically improve application performance, reliability, and scalability. Our experts combine deep technical knowledge with industry experience to deliver runtime solutions that eliminate bottlenecks, enhance user experiences, and reduce operational costs.
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for Digital Runtime</h2>
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
                <FaClock className="inline-block mr-2 text-blue-600" />
                CloudDigify's Runtime Implementation Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Assessment & Discovery",
                    description: "CloudDigify conducts a comprehensive assessment of your current runtime environment to identify optimization opportunities."
                  },
                  {
                    step: "Architecture Design",
                    description: "CloudDigify designs a customized runtime architecture optimized for your specific application requirements and business goals."
                  },
                  {
                    step: "Implementation",
                    description: "CloudDigify's experts implement performance enhancements, monitoring tools, and security measures to optimize your runtime environment."
                  },
                  {
                    step: "Performance Testing",
                    description: "CloudDigify performs rigorous testing to ensure your applications meet performance, scalability, and reliability targets."
                  },
                  {
                    step: "Continuous Optimization",
                    description: "CloudDigify provides ongoing monitoring, analysis, and optimization to ensure your runtime environment evolves with your business."
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
                        {index === 0 && <FaSearchPlus className="text-sm" />}
                        {index === 1 && <FaDraftingCompass className="text-sm" />}
                        {index === 2 && <FaWrench className="text-sm" />}
                        {index === 3 && <FaVial className="text-sm" />}
                        {index === 4 && <FaSync className="text-sm" />}
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Runtime Environment?</h2>
          <p className="text-xl mb-8">
            Partner with CloudDigify to achieve unprecedented levels of performance, reliability, and scalability for your critical applications.
          </p>
          <button 
            onClick={() => openInquiryForm('Digital Runtime Implementation')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Transformation
          </button>
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
    </div>
  );
}

export default DigitalRuntime; 