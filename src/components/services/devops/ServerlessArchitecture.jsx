import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCloud, FaCode, FaServer, FaBolt, FaDatabase, FaShieldAlt, FaChartLine, FaCogs } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ServerlessArchitecture = () => {
  const [activeFunction, setActiveFunction] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Serverless Functions Animation
  const ServerlessAnimation = () => {
    const functions = [
      { id: 'api', label: 'API Gateway', icon: FaCloud, x: 500, y: 100 },
      { id: 'auth', label: 'Authentication', icon: FaShieldAlt, x: 300, y: 200 },
      { id: 'compute', label: 'Lambda Function', icon: FaBolt, x: 500, y: 200 },
      { id: 'database', label: 'Database', icon: FaDatabase, x: 700, y: 200 },
      { id: 'monitoring', label: 'Monitoring', icon: FaChartLine, x: 500, y: 300 }
    ];

    return (
      <motion.div
        className="relative w-full h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 500">
          {/* Function Flow Lines */}
          {functions.map((func, index) => {
            if (index === 0) return null;
            const isActive = activeFunction === func.id;
            const centerX = 500;
            const centerY = 200;

            return (
              <motion.path
                key={`flow-${func.id}`}
                d={`M ${centerX} ${centerY} L ${func.x} ${func.y}`}
                stroke={isActive ? "#60A5FA" : "rgba(255,255,255,0.2)"}
                strokeWidth={isActive ? "3" : "1"}
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            );
          })}

          {/* Function Nodes */}
          {functions.map((func, index) => (
            <motion.g
              key={func.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setActiveFunction(func.id)}
              onMouseLeave={() => setActiveFunction(null)}
            >
              <motion.circle
                cx={func.x}
                cy={func.y}
                r="40"
                fill="rgba(96, 165, 250, 0.1)"
                stroke="#60A5FA"
                strokeWidth="2"
                animate={{
                  scale: activeFunction === func.id ? 1.2 : 1,
                  fillOpacity: activeFunction === func.id ? 0.2 : 0.1
                }}
              />
              <motion.g
                animate={{
                  scale: activeFunction === func.id ? 1.2 : 1,
                  y: activeFunction === func.id ? -5 : 0
                }}
              >
                {React.createElement(func.icon, {
                  x: func.x - 15,
                  y: func.y - 15,
                  width: 30,
                  height: 30,
                  className: "text-blue-400"
                })}
              </motion.g>
              <motion.text
                x={func.x}
                y={func.y + 60}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                opacity={activeFunction === func.id ? 1 : 0.7}
              >
                {func.label}
              </motion.text>
            </motion.g>
          ))}

          {/* Central Lambda Function Pulse */}
          <motion.circle
            cx="500"
            cy="200"
            r="45"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              className="text-6xl mb-6 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaBolt />
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Serverless Architecture
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Build scalable applications without managing servers
            </motion.p>
            
            <ServerlessAnimation />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaBolt,
                title: "Auto Scaling",
                description: "Automatic scaling based on demand"
              },
              {
                icon: FaCloud,
                title: "Event-Driven",
                description: "React to events in real-time"
              },
              {
                icon: FaDatabase,
                title: "Managed Services",
                description: "Fully managed backend services"
              },
              {
                icon: FaShieldAlt,
                title: "Built-in Security",
                description: "Secure by default architecture"
              },
              {
                icon: FaChartLine,
                title: "Pay-per-Use",
                description: "Only pay for what you use"
              },
              {
                icon: FaCogs,
                title: "Zero Maintenance",
                description: "No server management required"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-8 hover:bg-gray-600 transition-colors"
              >
                <feature.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cost Optimization",
                value: "60%",
                description: "Reduction in operational costs"
              },
              {
                title: "Development Speed",
                value: "75%",
                description: "Faster time to market"
              },
              {
                title: "Scalability",
                value: "100%",
                description: "Automatic scaling capability"
              },
              {
                title: "Maintenance",
                value: "90%",
                description: "Reduced maintenance overhead"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <p className="text-gray-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServerlessArchitecture; 