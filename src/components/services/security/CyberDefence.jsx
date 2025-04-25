import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaEye, FaUserSecret, FaServer, FaExclamationTriangle, FaClipboardCheck, FaNetworkWired, FaDatabase, FaChartLine, FaLaptop, FaUserLock } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const CyberDefence = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Security Visual
  const SecurityVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Security Shield */}
          <div className="mb-6">
            <FaShieldAlt className="text-6xl text-blue-400" />
          </div>
          
          {/* Defense Layers */}
          <div className="w-full grid grid-cols-3 gap-4">
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
                className="bg-white bg-opacity-5 p-4 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: layer.color }}
              >
                <layer.icon className="text-2xl mb-2" style={{ color: layer.color }} />
                <div className="text-white text-xs font-medium">{layer.name}</div>
              </div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full shadow-md text-white">
            <span className="font-semibold">Complete Defense in Depth Strategy</span>
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
              <FaShieldAlt className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Cyber Defence Resiliency
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Protect your organization with multi-layered security strategies and resilient defense systems
            </p>
            
            <SecurityVisual />
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
                icon: FaLock,
                title: "Advanced Threat Protection",
                description: "Proactive defense against sophisticated cyber threats and attacks"
              },
              {
                icon: FaEye,
                title: "24/7 Security Monitoring",
                description: "Continuous monitoring for rapid threat detection and response"
              },
              {
                icon: FaUserSecret,
                title: "Penetration Testing",
                description: "Identify vulnerabilities before they can be exploited"
              },
              {
                icon: FaServer,
                title: "Infrastructure Security",
                description: "Secure your entire IT infrastructure from edge to cloud"
              },
              {
                icon: FaExclamationTriangle,
                title: "Incident Response",
                description: "Rapid containment and remediation of security breaches"
              },
              {
                icon: FaClipboardCheck,
                title: "Security Compliance",
                description: "Meet regulatory requirements and industry standards"
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
                title: "Risk Reduction",
                value: "85%",
                description: "Reduction in security incidents and breaches"
              },
              {
                title: "Detection Speed",
                value: "98%",
                description: "Faster threat detection through continuous monitoring"
              },
              {
                title: "Recovery Time",
                value: "75%",
                description: "Faster recovery from security incidents"
              },
              {
                title: "Compliance",
                value: "100%",
                description: "Meet regulatory and industry compliance requirements"
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

export default CyberDefence; 