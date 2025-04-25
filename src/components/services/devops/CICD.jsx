import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGithub, FaDocker, FaCloudUploadAlt, FaCheckCircle, FaBug, FaChartLine, FaCogs } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const CICD = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simplified Pipeline Animation
  const SimplePipelineAnimation = () => {
    const stages = [
      { id: 'code', label: 'Code', icon: FaCode, color: '#60A5FA' },
      { id: 'build', label: 'Build', icon: FaCogs, color: '#34D399' },
      { id: 'test', label: 'Test', icon: FaBug, color: '#A78BFA' },
      { id: 'deploy', label: 'Deploy', icon: FaRocket, color: '#F97316' },
      { id: 'monitor', label: 'Monitor', icon: FaChartLine, color: '#EC4899' }
    ];

    return (
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-row items-center space-x-5">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white bg-opacity-10 p-4 rounded-full">
                  <stage.icon className="text-3xl" style={{ color: stage.color }} />
                </div>
                <span className="text-sm mt-2 text-white">{stage.label}</span>
              </motion.div>
              
              {index < stages.length - 1 && (
                <motion.div 
                  className="w-8 h-0.5 bg-white bg-opacity-20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                />
              )}
            </React.Fragment>
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
              <FaRocket className="text-white" />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DevOps & CI/CD
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Accelerate your software delivery with automated pipelines and DevOps best practices
            </motion.p>
            
            <SimplePipelineAnimation />
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
                icon: FaGithub,
                title: "Source Control Integration",
                description: "Seamless integration with Git and other version control systems"
              },
              {
                icon: FaDocker,
                title: "Container Support",
                description: "Built-in support for Docker and container orchestration"
              },
              {
                icon: FaRocket,
                title: "Automated Deployments",
                description: "Zero-touch deployment to any environment"
              },
              {
                icon: FaBug,
                title: "Automated Testing",
                description: "Comprehensive testing at every stage"
              },
              {
                icon: FaCheckCircle,
                title: "Quality Gates",
                description: "Enforce quality standards automatically"
              },
              {
                icon: FaChartLine,
                title: "Metrics & Analytics",
                description: "Real-time pipeline analytics and insights"
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
                title: "Faster Time to Market",
                value: "60%",
                description: "Reduction in deployment time"
              },
              {
                title: "Improved Quality",
                value: "80%",
                description: "Reduction in production defects"
              },
              {
                title: "Team Efficiency",
                value: "40%",
                description: "Increase in developer productivity"
              },
              {
                title: "Cost Reduction",
                value: "30%",
                description: "Reduction in operational costs"
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

export default CICD;
