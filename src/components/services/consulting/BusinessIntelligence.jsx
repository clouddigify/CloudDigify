import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaDatabase, FaSearchDollar, FaChartBar, FaCogs } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const BusinessIntelligence = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Floating Dashboard Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
        />
        <div className="absolute inset-0">
          {/* Animated Dashboard Elements */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Animated Charts */}
            {[...Array(3)].map((_, index) => (
              <motion.rect
                key={`chart-${index}`}
                x={20 + index * 25}
                y={30}
                width={20}
                height={40}
                rx={2}
                fill="rgba(255, 255, 255, 0.1)"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Animated Data Points */}
            {[...Array(12)].map((_, index) => (
              <motion.circle
                key={`point-${index}`}
                cx={10 + (index % 4) * 30}
                cy={70 + Math.floor(index / 4) * 10}
                r={1}
                fill="white"
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Connecting Lines */}
            {[...Array(8)].map((_, index) => (
              <motion.line
                key={`line-${index}`}
                x1={15 + (index % 3) * 30}
                y1={75 + Math.floor(index / 3) * 10}
                x2={35 + (index % 3) * 30}
                y2={75 + Math.floor(index / 3) * 10}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Business Intelligence Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Transform raw data into actionable business insights
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Solutions
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
            Our BI Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaChartBar,
                title: "Data Visualization",
                description: "Create interactive dashboards and reports"
              },
              {
                icon: FaDatabase,
                title: "Data Integration",
                description: "Connect and unify your data sources"
              },
              {
                icon: FaSearchDollar,
                title: "Financial Analytics",
                description: "Drive financial decision-making with data"
              },
              {
                icon: FaChartLine,
                title: "Performance Metrics",
                description: "Track and optimize KPIs"
              },
              {
                icon: FaLightbulb,
                title: "Predictive Insights",
                description: "Forecast trends and opportunities"
              },
              {
                icon: FaCogs,
                title: "BI Architecture",
                description: "Build scalable BI infrastructure"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Business Intelligence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's unlock the power of your data together
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Schedule a Demo
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligence; 