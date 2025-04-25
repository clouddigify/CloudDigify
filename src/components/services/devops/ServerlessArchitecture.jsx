import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaCode, FaBolt, FaChartLine, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ServerlessArchitecture = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Serverless Visual
  const ServerlessVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Cloud Element */}
          <div className="mb-6">
            <FaCloudUploadAlt className="text-6xl text-blue-400" />
          </div>
          
          {/* Functions */}
          <div className="grid grid-cols-3 gap-6 w-full">
            {[
              { name: 'Authentication', icon: FaShieldAlt, color: '#3B82F6' },
              { name: 'Data Processing', icon: FaCode, color: '#10B981' },
              { name: 'Analytics', icon: FaChartLine, color: '#F59E0B' },
            ].map((func, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-5 p-4 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: func.color }}
              >
                <func.icon className="text-2xl mb-2" style={{ color: func.color }} />
                <div className="text-white text-sm font-medium">{func.name}</div>
                
                {/* Arrow up to cloud */}
                <div className="mt-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L12 16" stroke={func.color} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 10L12 4L18 10" stroke={func.color} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Key Benefits */}
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-opacity-30 px-5 py-2 rounded-full shadow-md text-white">
            <span className="font-semibold">Fully managed • Scalable • Pay-per-use</span>
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
              <FaCloudUploadAlt className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Serverless Architecture
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Run code on-demand with zero infrastructure management
            </p>
            
            <ServerlessVisual />
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
                icon: FaCode,
                title: "Function as a Service",
                description: "Deploy individual functions that respond to events"
              },
              {
                icon: FaRocket,
                title: "Auto Scaling",
                description: "Automatic scale to match demand precisely"
              },
              {
                icon: FaBolt,
                title: "Event-Driven",
                description: "Execute code in response to triggers and events"
              },
              {
                icon: FaShieldAlt,
                title: "Built-in Security",
                description: "Improved security with isolated execution environments"
              },
              {
                icon: FaChartLine,
                title: "Pay-Per-Use",
                description: "Pay only for compute resources you actually use"
              },
              {
                icon: FaCloudUploadAlt,
                title: "Zero Operations",
                description: "No server management or capacity planning needed"
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
                title: "Cost Reduction",
                value: "60%",
                description: "Lower operational costs vs traditional servers"
              },
              {
                title: "Time to Market",
                value: "3x",
                description: "Faster application development cycles"
              },
              {
                title: "Scalability",
                value: "∞",
                description: "Infinite scaling with no configuration"
              },
              {
                title: "Maintenance",
                value: "95%",
                description: "Reduction in infrastructure management"
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

export default ServerlessArchitecture; 