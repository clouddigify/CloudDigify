import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBrain, FaChartLine, FaCode, FaDatabase, FaRobot, FaCloud, FaSearch, FaMicrochip } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const ArtificialIntelligence = () => {
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
      {/* Hero Section with Neural Network Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-96 h-96 relative"
          >
            {/* Neural Network Animation */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Nodes */}
              {[
                { cx: 100, cy: 40, r: 8 },
                { cx: 60, cy: 100, r: 8 },
                { cx: 140, cy: 100, r: 8 },
                { cx: 100, cy: 160, r: 8 },
              ].map((node, i) => (
                <motion.circle
                  key={i}
                  {...node}
                  fill="rgba(255,255,255,0.6)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              ))}
              {/* Connections */}
              {[
                "M100,40 L60,100",
                "M100,40 L140,100",
                "M60,100 L100,160",
                "M140,100 L100,160",
              ].map((path, i) => (
                <motion.path
                  key={i}
                  d={path}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              ))}
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
            Artificial Intelligence Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Transforming businesses with cutting-edge AI technologies
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Explore AI Solutions
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

      {/* AI Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              AI Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Leverage our comprehensive suite of AI solutions to drive innovation and growth
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaBrain,
                title: "Deep Learning",
                description: "Advanced neural networks for complex pattern recognition"
              },
              {
                icon: FaSearch,
                title: "Natural Language Processing",
                description: "Understanding and processing human language naturally"
              },
              {
                icon: FaRobot,
                title: "Machine Learning",
                description: "Automated learning and prediction systems"
              },
              {
                icon: FaMicrochip,
                title: "Computer Vision",
                description: "Visual understanding and image processing"
              },
              {
                icon: FaCloud,
                title: "AI Cloud Solutions",
                description: "Scalable AI infrastructure and deployment"
              },
              {
                icon: FaDatabase,
                title: "Predictive Analytics",
                description: "Data-driven insights and forecasting"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative transform hover:scale-105 transition-transform"
              >
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            AI Impact Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Accuracy Rate", value: "99.9%", icon: FaChartLine },
              { title: "Processing Speed", value: "100x", icon: FaMicrochip },
              { title: "Cost Reduction", value: "70%", icon: FaDatabase },
              { title: "Business Growth", value: "200%", icon: FaChartLine }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="text-5xl mb-4 mx-auto text-purple-300" />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg text-purple-200">{metric.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligence; 