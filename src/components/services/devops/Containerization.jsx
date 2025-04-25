import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaServer, FaCloud, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Containerization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Container Display
  const ContainerVisual = () => {
    return (
      <div className="relative w-full flex justify-center mt-8">
        <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-lg">
          <div className="flex flex-col items-center">
            {/* Docker Logo */}
            <div className="mb-5">
              <FaDocker className="text-6xl text-blue-400" />
            </div>
            
            {/* Container Layers */}
            <div className="flex flex-col w-60 gap-2">
              {['Application', 'Dependencies', 'Runtime', 'OS Libs'].map((layer, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-opacity-80 
                            text-white text-center py-2 px-4 rounded-md shadow-md"
                  style={{ opacity: 1 - (index * 0.15) }}
                >
                  {layer}
                </div>
              ))}
              <div className="bg-gray-700 text-white text-center py-2 px-4 rounded-md mt-1 shadow-md">
                Container Runtime
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with reduced height */}
      <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-white">
            <div className="text-5xl mb-6 flex justify-center">
              <FaDocker className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Containerization
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Package, distribute, and run your applications consistently across any environment
            </p>
            
            <ContainerVisual />
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
                icon: FaDocker,
                title: "Docker Integration",
                description: "Build, ship, and run Docker containers with ease"
              },
              {
                icon: FaCloud,
                title: "Cloud Native",
                description: "Designed for modern cloud environments and architectures"
              },
              {
                icon: FaServer,
                title: "Resource Optimization",
                description: "Maximize hardware utilization and reduce overhead"
              },
              {
                icon: FaNetworkWired,
                title: "Service Networking",
                description: "Simplified container networking and service discovery"
              },
              {
                icon: FaShieldAlt,
                title: "Security Controls",
                description: "Enhanced security with container isolation and scanning"
              },
              {
                icon: FaDocker,
                title: "Container Orchestration",
                description: "Scale and manage containers with Kubernetes integration"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-blue-500 mb-4" />
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
                title: "Deployment Speed",
                value: "300%",
                description: "Faster application deployments"
              },
              {
                title: "Resource Efficiency",
                value: "80%",
                description: "Improved resource utilization"
              },
              {
                title: "Dev/Prod Parity",
                value: "100%",
                description: "Identical environments across lifecycle"
              },
              {
                title: "Maintenance Costs",
                value: "50%",
                description: "Reduction in operational overhead"
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
    </div>
  );
};

export default Containerization; 