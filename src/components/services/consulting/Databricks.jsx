import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBolt, FaDatabase, FaCloud, FaRocket, FaChartLine, FaCogs, FaCode, FaServer } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Databricks = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Spark Cluster Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
        />
        <div className="absolute inset-0">
          {/* Spark Cluster Animation */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Central Node */}
            <motion.circle
              cx="50"
              cy="50"
              r="5"
              fill="rgba(255, 255, 255, 0.9)"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Spark Worker Nodes */}
            {[...Array(8)].map((_, index) => {
              const angle = (index * Math.PI * 2) / 8;
              const x = 50 + Math.cos(angle) * 20;
              const y = 50 + Math.sin(angle) * 20;
              
              return (
                <g key={index}>
                  {/* Worker Node */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="3"
                    fill="rgba(255, 255, 255, 0.6)"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Connection Line */}
                  <motion.line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Data Flow Particles */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="1"
                    fill="white"
                    initial={{ pathLength: 0 }}
                    animate={{
                      cx: [50, x, 50],
                      cy: [50, y, 50],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "linear"
                    }}
                  />
                </g>
              );
            })}

            {/* Spark Processing Effects */}
            {[...Array(12)].map((_, index) => {
              const radius = 30;
              const angle = (index * Math.PI * 2) / 12;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <motion.path
                  key={`spark-${index}`}
                  d={`M ${x},${y} l 2,-2 l 2,2 l -2,2 z`}
                  fill="rgba(255, 255, 255, 0.4)"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "linear"
                  }}
                />
              );
            })}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Databricks Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Unified Analytics Platform for Enterprise-Scale Data Processing
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Platform
          </motion.button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Databricks Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaBolt,
                title: "Apache Spark",
                description: "Optimize distributed computing with Apache Spark"
              },
              {
                icon: FaDatabase,
                title: "Delta Lake",
                description: "Implement reliable data lakes with ACID transactions"
              },
              {
                icon: FaCloud,
                title: "Cloud Integration",
                description: "Seamless integration with major cloud providers"
              },
              {
                icon: FaCode,
                title: "MLflow",
                description: "End-to-end machine learning lifecycle management"
              },
              {
                icon: FaServer,
                title: "Data Engineering",
                description: "Build robust data pipelines and ETL processes"
              },
              {
                icon: FaRocket,
                title: "Performance Tuning",
                description: "Optimize cluster performance and cost efficiency"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Data Platform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's unlock the full potential of your data with Databricks
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Schedule a Demo
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Databricks; 