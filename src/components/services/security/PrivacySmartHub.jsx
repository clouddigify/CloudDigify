import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaLock, FaFileAlt, FaSearch, FaClipboardCheck, FaExchangeAlt, FaFingerprint, FaCogs, FaUserLock, FaGlobe, FaHandshake, FaChartLine, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const PrivacySmartHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Privacy Management');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Privacy Management - ${serviceType}`);
    setShowInquiryForm(true);
  };

  // Simple Static Privacy Visual
  const PrivacyVisual = () => {
    return (
      <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-xl mt-4">
        <div className="flex flex-col items-center">
          {/* Central Privacy Shield */}
          <div className="mb-4">
            <FaUserShield className="text-5xl text-blue-400" />
          </div>
          
          {/* Privacy Framework Elements */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {[
              { 
                title: 'Data Inventory', 
                icon: FaSearch, 
                description: 'Discover & classify sensitive data',
                color: '#3B82F6' 
              },
              { 
                title: 'Data Subject Rights', 
                icon: FaUserLock, 
                description: 'Manage consent & requests',
                color: '#10B981' 
              },
              { 
                title: 'Data Protection', 
                icon: FaLock, 
                description: 'Encryption & access controls',
                color: '#F59E0B' 
              },
              { 
                title: 'Compliance', 
                icon: FaClipboardCheck, 
                description: 'GDPR, CCPA, HIPAA, etc.',
                color: '#8B5CF6' 
              }
            ].map((element, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 p-3 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: element.color }}
              >
                <element.icon className="text-xl mb-1" style={{ color: element.color }} />
                <div className="text-white text-xs font-medium mb-1">{element.title}</div>
                <div className="text-gray-300 text-xs">{element.description}</div>
              </div>
            ))}
          </div>
          
          {/* Central Message */}
          <div className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-md text-white">
            <span className="font-semibold text-sm">Comprehensive Privacy Management</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600">
          {/* Animated background particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white bg-opacity-20 rounded-full"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Privacy themed floating icons */}
          {[FaUserShield, FaLock, FaFileAlt, FaUserLock, FaClipboardCheck].map((Icon, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute text-white opacity-10"
              style={{
                fontSize: `${Math.random() * 30 + 25}px`,
                left: `${(i * 20) + Math.random() * 10}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                rotate: [0, Math.random() * 20 - 10],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="text-4xl mb-6 mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 15, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaUserShield className="text-white text-6xl inline-block" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Enterprise Privacy Management Solutions
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transform privacy compliance from a business challenge into a strategic advantage.
            </motion.p>
            
            <motion.button
              onClick={() => openInquiryForm('Privacy Solutions')}
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg flex items-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FaArrowRight className="ml-2" />
            </motion.button>
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Why Choose Our Privacy Management Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaBriefcase,
                title: "Privacy Expertise",
                description: "Our privacy specialists have implemented compliance programs for over 200 global enterprises across healthcare, finance, and technology sectors."
              },
              {
                icon: FaGlobe,
                title: "Global Compliance",
                description: "We've helped clients successfully navigate GDPR, CCPA, HIPAA, LGPD and other privacy regulations across 30+ countries worldwide."
              },
              {
                icon: FaHandshake,
                title: "Partner Approach",
                description: "We don't just implement solutions and leave. We become your long-term privacy partner, adapting as regulations and your business evolve."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Comprehensive Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaFileAlt,
                title: "Privacy Policy Management",
                description: "We develop and maintain tailored privacy policies and consent frameworks that build trust with your customers while meeting regulatory requirements."
              },
              {
                icon: FaSearch,
                title: "Data Discovery & Mapping",
                description: "Our automated tools locate and classify sensitive data across your enterprise, creating comprehensive data maps that simplify compliance."
              },
              {
                icon: FaUserLock,
                title: "Consent Management",
                description: "We implement user-friendly consent systems that enhance customer experience while documenting preferences for compliance purposes."
              },
              {
                icon: FaExchangeAlt,
                title: "Data Subject Requests",
                description: "Our streamlined process handles access, deletion, and portability requests efficiently, reducing your operational burden while ensuring compliance."
              },
              {
                icon: FaClipboardCheck,
                title: "Compliance Reporting",
                description: "We provide customized reports for GDPR, CCPA, HIPAA and other regulations, giving you evidence of compliance for regulators and stakeholders."
              },
              {
                icon: FaFingerprint,
                title: "Privacy Impact Assessment",
                description: "Our structured methodology identifies and mitigates privacy risks in your processes, products, and services before they become liabilities."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Business Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                value: "100%",
                description: "Our clients achieve full compliance with global privacy regulations, avoiding costly penalties and reputation damage"
              },
              {
                title: "Risk Reduction",
                value: "90%",
                description: "Significant reduction in privacy-related incidents through our proactive management approach"
              },
              {
                title: "Customer Trust",
                value: "85%",
                description: "Measured increase in customer trust and loyalty through transparent privacy practices"
              },
              {
                title: "Operational Efficiency",
                value: "70%",
                description: "Improved efficiency through our automated privacy management tools and streamlined processes"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <p className="text-indigo-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Client Success Story
          </motion.h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Global Financial Services Provider</h3>
              <p className="text-gray-700 mb-6">
                A leading financial institution with operations in 15 countries needed to unify their privacy compliance approach across multiple jurisdictions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">Fragmented privacy practices across regions causing compliance gaps and inefficiencies</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">Implemented our integrated PrivacySmartHub platform with regional customizations</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600 text-sm">95% reduction in compliance costs and zero privacy violations in 24 months</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8">
                <FaChartLine className="text-5xl text-indigo-500 mr-4" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">$2.3M</div>
                  <div className="text-gray-600">Annual Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Transform Your Privacy Compliance Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with us to turn privacy compliance into a competitive advantage for your business.
          </p>
          <button 
            className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            onClick={() => openInquiryForm('Privacy Assessment')}
          >
            Request a Privacy Assessment
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
};

export default PrivacySmartHub; 