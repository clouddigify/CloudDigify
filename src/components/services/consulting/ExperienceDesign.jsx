import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPalette, FaMobile, FaDesktop, FaUsers, FaMagic, FaPencilRuler, FaRegLightbulb, FaRegCompass } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const ExperienceDesign = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Experience Design');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Experience Design - ${serviceType}`);
    setIsFormOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Design Elements Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
        />
        <div className="absolute inset-0">
          {/* Interactive Design Elements Animation */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Design Grid */}
            {[...Array(16)].map((_, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              const x = 20 + col * 15;
              const y = 20 + row * 15;

              return (
                <motion.rect
                  key={`grid-${index}`}
                  x={x}
                  y={y}
                  width="12"
                  height="12"
                  rx="2"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Floating UI Elements */}
            {[...Array(6)].map((_, index) => {
              const radius = 25;
              const angle = (index * Math.PI * 2) / 6;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <g key={`ui-${index}`}>
                  {/* UI Element */}
                  <motion.path
                    d={`M ${x-3},${y} h6 v${index % 2 ? 4 : 2} h-6 z`}
                    fill="rgba(255, 255, 255, 0.6)"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Connecting Lines */}
                  <motion.line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              );
            })}

            {/* Interactive Cursor Effect */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="0.5"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Experience Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Creating delightful digital experiences that inspire and engage
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Design Services
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
            Our Design Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaRegLightbulb,
                title: "UX Strategy",
                description: "Strategic planning for optimal user experiences"
              },
              {
                icon: FaUsers,
                title: "User Research",
                description: "In-depth analysis of user needs and behaviors"
              },
              {
                icon: FaPencilRuler,
                title: "UI Design",
                description: "Beautiful and intuitive interface design"
              },
              {
                icon: FaMobile,
                title: "Responsive Design",
                description: "Seamless experiences across all devices"
              },
              {
                icon: FaMagic,
                title: "Interaction Design",
                description: "Engaging and meaningful user interactions"
              },
              {
                icon: FaRegCompass,
                title: "Design Systems",
                description: "Scalable and consistent design frameworks"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Digital Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's create something amazing together
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('Design Journey')}
            className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Start Your Design Journey
          </motion.button>
        </div>
      </section>
      
      {/* Service Inquiry Form Modal */}
      {isFormOpen && (
        <ServiceInquiryForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          serviceName={inquiryType}
        />
      )}
    </div>
  );
};

export default ExperienceDesign; 