import React from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaLock, FaFileAlt, FaSearch, FaClipboardCheck, FaExchangeAlt, FaFingerprint, FaCogs, FaUserLock, FaGlobe } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const PrivacySmartHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Privacy Visual
  const PrivacyVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Central Privacy Shield */}
          <div className="mb-6">
            <FaUserShield className="text-6xl text-blue-400" />
          </div>
          
          {/* Privacy Framework Elements */}
          <div className="grid grid-cols-2 gap-4 w-full">
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
                className="bg-white bg-opacity-5 p-4 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: element.color }}
              >
                <element.icon className="text-2xl mb-2" style={{ color: element.color }} />
                <div className="text-white text-sm font-medium mb-1">{element.title}</div>
                <div className="text-gray-300 text-xs">{element.description}</div>
              </div>
            ))}
          </div>
          
          {/* Central Message */}
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full shadow-md text-white">
            <span className="font-semibold">Comprehensive Privacy Management</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-white">
            <div className="text-5xl mb-6 flex justify-center">
              <FaUserShield className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Privacy SmartHub
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Centralized privacy management to ensure compliance and build customer trust
            </p>
            
            <PrivacyVisual />
          </div>
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
                icon: FaFileAlt,
                title: "Privacy Policy Management",
                description: "Create, manage and update privacy policies and consent forms"
              },
              {
                icon: FaSearch,
                title: "Data Discovery & Mapping",
                description: "Locate and classify sensitive data across your enterprise"
              },
              {
                icon: FaUserLock,
                title: "Consent Management",
                description: "Manage user consent preferences and permissions"
              },
              {
                icon: FaExchangeAlt,
                title: "Data Subject Requests",
                description: "Streamline access, deletion, and portability requests"
              },
              {
                icon: FaClipboardCheck,
                title: "Compliance Reporting",
                description: "Generate reports for GDPR, CCPA, HIPAA and other regulations"
              },
              {
                icon: FaFingerprint,
                title: "Privacy Impact Assessment",
                description: "Identify and mitigate privacy risks in your processes"
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
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                value: "100%",
                description: "Full compliance with privacy regulations worldwide"
              },
              {
                title: "Risk Reduction",
                value: "90%",
                description: "Reduction in privacy-related incidents and breaches"
              },
              {
                title: "Customer Trust",
                value: "85%",
                description: "Increase in customer trust and satisfaction"
              },
              {
                title: "Operational Efficiency",
                value: "70%",
                description: "Improvement in privacy management efficiency"
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
    </div>
  );
};

export default PrivacySmartHub; 