import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBrain, FaLanguage, FaImage, FaVolumeUp, FaSearch, FaRobot, FaChartLine, FaMicrochip } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const CognitiveServices = () => {
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
      {/* Hero Section with Brain Wave Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-96 h-96 relative"
          >
            {/* Brain Wave Animation */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Brain Waves */}
              {[
                "M40,100 Q70,80 100,100 T160,100",
                "M40,120 Q70,140 100,120 T160,120",
                "M40,80 Q70,60 100,80 T160,80"
              ].map((path, i) => (
                <motion.path
                  key={i}
                  d={path}
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}
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
            Cognitive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Empower your applications with human-like intelligence
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Explore Cognitive Services
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

      {/* Cognitive Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Cognitive Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Advanced AI services that mimic human cognitive functions
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaLanguage,
                title: "Language Understanding",
                description: "Natural language processing for text analysis and understanding"
              },
              {
                icon: FaImage,
                title: "Computer Vision",
                description: "Advanced image and video analysis capabilities"
              },
              {
                icon: FaVolumeUp,
                title: "Speech Services",
                description: "Speech recognition and text-to-speech conversion"
              },
              {
                icon: FaSearch,
                title: "Knowledge Mining",
                description: "Extract insights from unstructured data"
              },
              {
                icon: FaRobot,
                title: "Decision Services",
                description: "Intelligent decision-making and recommendations"
              },
              {
                icon: FaBrain,
                title: "Custom Cognitive",
                description: "Tailored cognitive solutions for unique needs"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative transform hover:scale-105 transition-transform"
              >
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Cognitive Performance Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Language Accuracy", value: "98%", icon: FaLanguage },
              { title: "Vision Precision", value: "99%", icon: FaImage },
              { title: "Speech Recognition", value: "95%", icon: FaVolumeUp },
              { title: "Processing Speed", value: "50ms", icon: FaMicrochip }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="text-5xl mb-4 mx-auto text-teal-300" />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg text-teal-200">{metric.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CognitiveServices; 