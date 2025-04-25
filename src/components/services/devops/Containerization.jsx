import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaBox, FaServer, FaCloud, FaNetworkWired, FaCubes, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Containerization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Container Animation
  const SimpleContainerAnimation = () => {
    const containers = [
      { id: 'web', label: 'Web App', color: '#60A5FA' },
      { id: 'api', label: 'API Service', color: '#34D399' },
      { id: 'db', label: 'Database', color: '#A78BFA' },
      { id: 'cache', label: 'Cache', color: '#F97316' }
    ];

    return (
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-lg">
          <div className="flex flex-col items-center">
            {/* Docker Logo */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaDocker className="text-4xl text-blue-300" />
            </motion.div>
            
            {/* Container Stack */}
            {containers.map((container, index) => (
              <motion.div
                key={container.id}
                className="w-full mb-4 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div 
                  className="flex items-center justify-between px-6 py-3 rounded-lg"
                  style={{ 
                    backgroundColor: `${container.color}22`, 
                    borderLeft: `4px solid ${container.color}`
                  }}
                >
                  <div className="flex items-center">
                    <FaBox className="mr-3" style={{ color: container.color }} />
                    <span className="text-white">{container.label}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-20 text-white">
                    Container
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              className="text-5xl mb-6 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaDocker className="text-white" />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Containerization
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Modernize your applications with container technology and orchestration
            </motion.p>
            
            <SimpleContainerAnimation />
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
                icon: FaBox,
                title: "Container Management",
                description: "Efficient container lifecycle management"
              },
              {
                icon: FaServer,
                title: "Orchestration",
                description: "Advanced container orchestration with Kubernetes"
              },
              {
                icon: FaCloud,
                title: "Cloud Native",
                description: "Built for modern cloud environments"
              },
              {
                icon: FaNetworkWired,
                title: "Service Mesh",
                description: "Advanced networking and service discovery"
              },
              {
                icon: FaCubes,
                title: "Microservices",
                description: "Support for microservices architecture"
              },
              {
                icon: FaRocket,
                title: "Auto Scaling",
                description: "Dynamic scaling based on demand"
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
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Resource Efficiency",
                value: "70%",
                description: "Better resource utilization"
              },
              {
                title: "Deployment Speed",
                value: "85%",
                description: "Faster application deployment"
              },
              {
                title: "Development Efficiency",
                value: "50%",
                description: "Improved developer productivity"
              },
              {
                title: "Infrastructure Savings",
                value: "40%",
                description: "Reduced infrastructure costs"
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

export default Containerization; 