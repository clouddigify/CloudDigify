import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaEye, FaUserSecret, FaServer, FaExclamationTriangle, FaClipboardCheck, FaNetworkWired, FaDatabase, FaChartLine, FaLaptop, FaUserLock, FaUserTie, FaAward, FaCertificate, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const CyberDefence = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Cyber Defence');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Cyber Defence - ${serviceType}`);
    setShowInquiryForm(true);
  };

  // Simple Static Security Visual
  const SecurityVisual = () => {
    return (
      <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-xl mt-4">
        <div className="flex flex-col items-center">
          {/* Security Shield */}
          <div className="mb-4">
            <FaShieldAlt className="text-5xl text-blue-400" />
          </div>
          
          {/* Defense Layers */}
          <div className="w-full grid grid-cols-3 gap-3">
            {[
              { name: 'Network Security', icon: FaNetworkWired, color: '#3B82F6' },
              { name: 'Endpoint Security', icon: FaLaptop, color: '#10B981' },
              { name: 'Data Security', icon: FaDatabase, color: '#F59E0B' },
              { name: 'Identity Access', icon: FaUserLock, color: '#EC4899' },
              { name: 'Threat Detection', icon: FaExclamationTriangle, color: '#8B5CF6' },
              { name: 'Security Monitoring', icon: FaChartLine, color: '#2563EB' },
            ].map((layer, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 p-3 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: layer.color }}
              >
                <layer.icon className="text-xl mb-1" style={{ color: layer.color }} />
                <div className="text-white text-xs font-medium">{layer.name}</div>
              </div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-md text-white">
            <span className="font-semibold text-sm">Complete Defense in Depth Strategy</span>
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
          {/* Animated background with shield particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaShieldAlt className="text-white opacity-20" style={{ fontSize: `${Math.random() * 30 + 20}px` }} />
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
              animate={{ scale: 1, rotate: [0, -15, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaShieldAlt className="text-white text-6xl inline-block" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Enterprise Cyber Defence Solutions
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your trusted partner for comprehensive cybersecurity.
            </motion.p>
            
            <motion.button
              onClick={() => openInquiryForm('Cyber Defence Solutions')}
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
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Why Choose Our Cyber Defence Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUserTie,
                title: "Industry Expertise",
                description: "Our certified security professionals have 15+ years of experience protecting Fortune 500 companies from sophisticated cyber threats."
              },
              {
                icon: FaAward,
                title: "Proven Track Record",
                description: "We've successfully prevented over 1,000 potential breaches and reduced security incidents by 85% for our clients."
              },
              {
                icon: FaCertificate,
                title: "Tailored Solutions",
                description: "We customize our cybersecurity approach to your specific industry regulations, business needs, and existing infrastructure."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                icon: FaLock,
                title: "Advanced Threat Protection",
                description: "We implement cutting-edge security solutions to detect and neutralize sophisticated attacks before they impact your business."
              },
              {
                icon: FaEye,
                title: "24/7 Security Monitoring",
                description: "Our security operations center provides round-the-clock monitoring with real-time alerts and rapid incident response."
              },
              {
                icon: FaUserSecret,
                title: "Penetration Testing",
                description: "Our ethical hackers identify vulnerabilities in your systems using the same techniques as malicious actors, before they can be exploited."
              },
              {
                icon: FaServer,
                title: "Infrastructure Security",
                description: "We secure your entire IT ecosystem from endpoints to cloud, ensuring comprehensive protection at every layer."
              },
              {
                icon: FaExclamationTriangle,
                title: "Incident Response",
                description: "Our rapid response team contains, mitigates, and remediates security breaches to minimize damage and recovery time."
              },
              {
                icon: FaClipboardCheck,
                title: "Security Compliance",
                description: "We ensure your organization meets all industry regulations and standards including GDPR, HIPAA, PCI DSS, and more."
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
                title: "Risk Reduction",
                value: "85%",
                description: "Our clients experience significant reduction in security incidents and breaches"
              },
              {
                title: "Detection Speed",
                value: "98%",
                description: "Faster threat detection through our AI-powered continuous monitoring systems"
              },
              {
                title: "Recovery Time",
                value: "75%",
                description: "Faster recovery from security incidents with our proven response protocols"
              },
              {
                title: "Compliance",
                value: "100%",
                description: "Our clients achieve full compliance with relevant regulatory requirements"
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

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with us to protect your critical assets and gain peace of mind with our industry-leading cybersecurity solutions.
          </p>
          <button 
            className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            onClick={() => openInquiryForm('Security Consultation')}
          >
            Schedule a Security Consultation
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

export default CyberDefence; 