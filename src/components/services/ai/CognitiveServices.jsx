import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBrain, FaLanguage, FaImage, FaVolumeUp, FaSearch, FaRobot, FaChartLine, FaMicrochip, FaArrowRight,
         FaLightbulb, FaDatabase, FaCode, FaServer, FaChartBar, FaClipboardCheck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const CognitiveServices = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Cognitive Services');
  
  // Scroll to top when page loads/refreshes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Cognitive Services - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' },
    config: { tension: 300, friction: 20 }
  });

  return (
    <>
      <SEO
        title="Cognitive Services | CloudDigify"
        description="Enhance your applications with CloudDigify's cognitive services for vision, speech, language, and decision AI."
        canonicalUrl="https://clouddigify.com/services/ai/cognitive-services"
        keywords={['cognitive services', 'vision ai', 'speech ai', 'CloudDigify']}
      />
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
              CloudDigify Cognitive Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Empower your applications with human-like intelligence for enhanced business value
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openInquiryForm('General Inquiry')}
              className="px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors flex items-center mx-auto"
            >
              Explore Cognitive Services <FaArrowRight className="ml-2" />
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
                CloudDigify Cognitive Capabilities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600"
              >
                Advanced AI services that mimic human cognitive functions to transform your business operations
              </motion.p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: FaLanguage,
                  title: "Language Understanding",
                  description: "Natural language processing for text analysis and understanding to improve customer interactions"
                },
                {
                  icon: FaImage,
                  title: "Computer Vision",
                  description: "Advanced image and video analysis capabilities for enhanced process automation and quality control"
                },
                {
                  icon: FaVolumeUp,
                  title: "Speech Services",
                  description: "Speech recognition and text-to-speech conversion for more intuitive user interfaces"
                },
                {
                  icon: FaSearch,
                  title: "Knowledge Mining",
                  description: "Extract valuable insights from unstructured data to drive better business decisions"
                },
                {
                  icon: FaRobot,
                  title: "Decision Services",
                  description: "Intelligent decision-making and personalized recommendations to improve customer engagement"
                },
                {
                  icon: FaBrain,
                  title: "Custom Cognitive",
                  description: "Tailored cognitive solutions designed for your unique business challenges and requirements"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative transform hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openInquiryForm(item.title)}
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
        
        {/* Implementation Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                CloudDigify Cognitive Services Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                Our proven methodology ensures seamless integration of cognitive capabilities into your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: FaLightbulb,
                  title: "Business Case Analysis",
                  description: "We identify high-value use cases and define clear objectives for cognitive services implementation."
                },
                {
                  icon: FaClipboardCheck,
                  title: "Requirements Gathering",
                  description: "Our team works with stakeholders to capture functional and technical requirements for your solution."
                },
                {
                  icon: FaDatabase,
                  title: "Data Readiness",
                  description: "We prepare and structure your data for optimal cognitive processing and insights extraction."
                },
                {
                  icon: FaCode,
                  title: "Solution Architecture",
                  description: "Our experts design a scalable architecture that integrates cognitive services with your systems."
                },
                {
                  icon: FaServer,
                  title: "Development & Testing",
                  description: "We develop and rigorously test your cognitive solution to ensure accuracy and performance."
                },
                {
                  icon: FaChartBar,
                  title: "Monitoring & Optimization",
                  description: "Continuous monitoring and refinement ensure your cognitive services deliver maximum business value."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  onClick={() => openInquiryForm('Cognitive Services Implementation')}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-full">
                      <item.icon className="text-3xl text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Inquiry Form Modal */}
        {showInquiryForm && (
          <ServiceInquiryForm
            isOpen={showInquiryForm}
            onClose={() => setShowInquiryForm(false)}
            serviceName={inquiryType}
          />
        )}
      </div>
    </>
  );
};

export default CognitiveServices; 