import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLightbulb, FaChartLine, FaUsers, FaRocket, FaBrain, FaPalette, FaCogs, FaHandshake, FaChartBar, FaCode, FaGlobe, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const Strategy = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' },
    config: { tension: 300, friction: 20 }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with 3D Elements */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-96 h-96 relative"
          >
            {/* 3D Hexagonal Grid Animation */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M100,40 L160,70 L160,130 L100,160 L40,130 L40,70 Z"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M100,60 L140,80 L140,120 L100,140 L60,120 L60,80 Z"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Digital Strategy & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Transform your business with future-ready digital strategies
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Explore Digital Strategy
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Digital Transformation Framework */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Digital Transformation Framework
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Our comprehensive approach to digital transformation combines strategic thinking with innovative technology solutions
            </motion.p>
          </div>

          {/* Hexagonal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaGlobe,
                title: "Digital Experience",
                description: "Create seamless customer experiences across all digital touchpoints"
              },
              {
                icon: FaDatabase,
                title: "Data Strategy",
                description: "Leverage data analytics and AI to drive informed decision-making"
              },
              {
                icon: FaMobile,
                title: "Digital Products",
                description: "Build innovative digital products and services"
              },
              {
                icon: FaCloud,
                title: "Cloud Strategy",
                description: "Design cloud-first architectures for scalability"
              },
              {
                icon: FaCogs,
                title: "Process Automation",
                description: "Streamline operations with intelligent automation"
              },
              {
                icon: FaUsers,
                title: "Digital Culture",
                description: "Foster a culture of innovation and digital adoption"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative transform hover:scale-105 transition-transform"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Digital Impact Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Digital Adoption", value: "95%", icon: FaChartLine },
              { title: "Process Efficiency", value: "3x", icon: FaCogs },
              { title: "Customer Satisfaction", value: "92%", icon: FaUsers },
              { title: "Innovation Rate", value: "4x", icon: FaLightbulb }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <metric.icon className="text-3xl text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl font-bold mb-2"
                >
                  {metric.value}
                </motion.div>
                <p className="text-indigo-200">{metric.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Schedule a strategy session with our digital transformation experts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Book Strategy Session
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Strategy; 