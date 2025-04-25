import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDocker, FaBox, FaServer, FaCloud, FaNetworkWired, FaCubes, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Containerization = () => {
  const [activeContainer, setActiveContainer] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container Stack Animation
  const ContainerAnimation = () => {
    const containers = [
      { id: 'app1', label: 'Web App', color: 'blue', x: 400 },
      { id: 'app2', label: 'API Service', color: 'green', x: 450 },
      { id: 'app3', label: 'Database', color: 'purple', x: 500 },
      { id: 'app4', label: 'Cache', color: 'orange', x: 550 }
    ];

    return (
      <motion.div
        className="relative w-full h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          {/* Docker Whale Silhouette */}
          <motion.path
            d="M100,200 C150,150 200,180 250,200 S350,220 400,200 S500,180 550,200 S650,220 700,200"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Container Stack */}
          {containers.map((container, index) => {
            const y = 250 - (index * 60);
            const isActive = activeContainer === container.id;

            return (
              <motion.g
                key={container.id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setActiveContainer(container.id)}
                onMouseLeave={() => setActiveContainer(null)}
              >
                {/* Container Box */}
                <motion.rect
                  x={container.x}
                  y={y}
                  width="200"
                  height="50"
                  rx="5"
                  fill={`var(--color-${container.color}-500)`}
                  fillOpacity={isActive ? "0.8" : "0.6"}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? y - 5 : y
                  }}
                />

                {/* Container Label */}
                <motion.text
                  x={container.x + 100}
                  y={y + 30}
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  {container.label}
                </motion.text>

                {/* Container Icons */}
                <motion.g
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    rotate: isActive ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaDocker
                    x={container.x + 20}
                    y={y + 15}
                    className="w-5 h-5 text-white"
                  />
                </motion.g>
              </motion.g>
            );
          })}

          {/* Connection Lines */}
          {containers.map((container, index) => {
            if (index === containers.length - 1) return null;
            const isActive = activeContainer === container.id;

            return (
              <motion.path
                key={`connection-${index}`}
                d={`M ${container.x + 100} ${250 - (index * 60)} L ${container.x + 100} ${250 - ((index + 1) * 60)}`}
                stroke="white"
                strokeWidth={isActive ? "3" : "1"}
                strokeOpacity={isActive ? "0.8" : "0.3"}
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            );
          })}
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
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
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
              <FaDocker />
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Containerization
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Modernize your applications with container technology and orchestration
            </motion.p>
            
            <ContainerAnimation />
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8"
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

export default Containerization; 