import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaDatabase, FaShieldAlt, FaCogs, FaCloud } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const InfrastructureAsCode = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Check if this is a page refresh
    const lastPath = sessionStorage.getItem('currentPath');
    const currentPath = window.location.pathname;
    
    if (lastPath === currentPath) {
      setIsFirstLoad(false);
    }
    
    sessionStorage.setItem('currentPath', currentPath);
  }, []);

  // Simple Infrastructure Grid
  const SimpleInfraGrid = () => {
    const components = [
      { id: 'compute', label: 'Compute', icon: FaServer, color: '#2563EB' },
      { id: 'network', label: 'Network', icon: FaNetworkWired, color: '#059669' },
      { id: 'storage', label: 'Storage', icon: FaDatabase, color: '#7C3AED' },
      { id: 'security', label: 'Security', icon: FaShieldAlt, color: '#D97706' },
      { id: 'services', label: 'Services', icon: FaCogs, color: '#DB2777' }
    ];

    return (
      <div className="relative w-full max-w-3xl mx-auto mt-8">
        <div className="grid grid-cols-5 gap-4 relative">
          {/* Cloud Icon */}
          <motion.div 
            className="col-span-5 flex justify-center mb-6"
            initial={isFirstLoad ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white bg-opacity-10 p-5 rounded-full">
              <FaCloud className="text-4xl text-indigo-400" />
            </div>
          </motion.div>
          
          {/* Infrastructure Components */}
          {components.map((component, index) => (
            <motion.div
              key={component.id}
              className="flex flex-col items-center"
              initial={isFirstLoad ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-white bg-opacity-10 p-4 rounded-full mb-2">
                <component.icon className="text-2xl" style={{ color: component.color }} />
              </div>
              <span className="text-sm text-white">{component.label}</span>
              
              {/* Connection line to cloud */}
              <motion.div 
                className="h-8 w-0.5 bg-indigo-400 bg-opacity-30 absolute top-14"
                initial={isFirstLoad ? { scaleY: 0 } : { scaleY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Hero Section with fixed height */}
      <section className="relative h-screen max-h-[750px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              className="text-5xl mb-6 flex justify-center"
              initial={isFirstLoad ? { scale: 0 } : { scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaCogs className="text-white" />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Infrastructure as Code
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={isFirstLoad ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Automate your infrastructure deployment with code-driven architecture
            </motion.p>
            
            <SimpleInfraGrid />
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
                icon: FaServer,
                title: "Version Control",
                description: "Track infrastructure changes with Git"
              },
              {
                icon: FaCloud,
                title: "Multi-Cloud Support",
                description: "Deploy to any cloud provider"
              },
              {
                icon: FaCogs,
                title: "Automation",
                description: "Automated provisioning and updates"
              },
              {
                icon: FaShieldAlt,
                title: "Security",
                description: "Built-in security best practices"
              },
              {
                icon: FaServer,
                title: "Scalability",
                description: "Scale infrastructure on demand"
              },
              {
                icon: FaDatabase,
                title: "State Management",
                description: "Track and manage infrastructure state"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-blue-600 mb-4" />
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
            Business Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Accelerated Time-to-Market",
                value: "90%",
                description: "Faster infrastructure deployment enabling rapid business expansion"
              },
              {
                title: "Operational Efficiency",
                value: "75%",
                description: "Reduction in manual configuration and management overhead"
              },
              {
                title: "Cost Optimization",
                value: "45%",
                description: "Infrastructure cost reduction through automation and optimization"
              },
              {
                title: "Resource Utilization",
                value: "65%",
                description: "Improved resource allocation and management efficiency"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <p className="text-blue-50">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InfrastructureAsCode;
