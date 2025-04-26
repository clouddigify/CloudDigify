import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaSyncAlt, FaClipboardCheck, FaRocket, FaClock, FaCode,
         FaComments, FaLayerGroup, FaHandshake, FaLightbulb, FaArrowRight, FaSearch,
         FaTools, FaTasks, FaBriefcase, FaRegChartBar, FaBolt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const AgileTransformation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Agile Transformation');
  
  // Scroll to top when page loads/refreshes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Agile Transformation - ${serviceType}`);
    setShowInquiryForm(true);
  };

  // Static Agile Structure with Animations
  const AgileStructure = () => {
    const agileSteps = [
      { id: 'plan', label: 'Plan', icon: FaTasks, color: '#8B5CF6' },
      { id: 'build', label: 'Build', icon: FaCode, color: '#EC4899' },
      { id: 'deliver', label: 'Deliver', icon: FaRocket, color: '#10B981' },
      { id: 'review', label: 'Review', icon: FaChartLine, color: '#F59E0B' },
      { id: 'iterate', label: 'Iterate', icon: FaSyncAlt, color: '#3B82F6' }
    ];
    
    return (
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-4xl">
          {/* Animated Agile steps without connectors */}
          <div className="flex justify-between items-center mt-8">
            {agileSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <motion.div 
                  className="rounded-lg p-4 mb-3 shadow-md w-[80px] flex justify-center"
                  style={{ backgroundColor: `${step.color}22`, border: `2px solid ${step.color}` }}
                  whileHover={{ scale: 1.1, backgroundColor: `${step.color}33` }}
                  animate={{ 
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <step.icon 
                      className="text-2xl" 
                      style={{ color: step.color }} 
                    />
                  </motion.div>
                </motion.div>
                <motion.span 
                  className="text-sm text-white font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {step.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              CloudDigify Agile Transformation
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transform your organization's approach to software delivery
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openInquiryForm('General Inquiry')}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center mx-auto"
            >
              Start Your Agile Journey <FaArrowRight className="ml-2" />
            </motion.button>
            
            <AgileStructure />
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
                icon: FaUsers,
                title: "Cross-Functional Teams",
                description: "Break down silos with collaborative teams"
              },
              {
                icon: FaSyncAlt,
                title: "Iterative Delivery",
                description: "Deliver in short cycles for faster feedback"
              },
              {
                icon: FaRocket,
                title: "Rapid Value Delivery",
                description: "Focus on delivering business value faster"
              },
              {
                icon: FaComments,
                title: "Customer Collaboration",
                description: "Continuous feedback from stakeholders"
              },
              {
                icon: FaLayerGroup,
                title: "Adaptive Planning",
                description: "Flexible response to changing priorities"
              },
              {
                icon: FaLightbulb,
                title: "Continuous Improvement",
                description: "Regularly inspect and adapt processes"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                onClick={() => openInquiryForm(feature.title)}
              >
                <feature.icon className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              CloudDigify Agile Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Our structured approach ensures a smooth transition to agile methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaSearch,
                title: "Assessment & Readiness",
                description: "We evaluate your current processes and organizational readiness for Agile adoption."
              },
              {
                icon: FaBriefcase,
                title: "Strategy Development",
                description: "We develop a customized implementation strategy aligned with your business objectives."
              },
              {
                icon: FaUsers,
                title: "Team Formation & Training",
                description: "We help form cross-functional teams and provide comprehensive training."
              },
              {
                icon: FaTools,
                title: "Tools & Infrastructure",
                description: "We implement the right tools and processes to support your agile transformation."
              },
              {
                icon: FaBolt,
                title: "Initial Sprint Execution",
                description: "We guide your teams through initial sprints with hands-on coaching and mentoring."
              },
              {
                icon: FaRegChartBar,
                title: "Continuous Improvement",
                description: "We establish metrics and feedback loops to continuously improve your agile practices."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => openInquiryForm('Agile Implementation')}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-full">
                    <item.icon className="text-3xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Time to Market",
                value: "50%",
                description: "Faster time to market for new features",
                icon: FaClock
              },
              {
                title: "Team Productivity",
                value: "35%",
                description: "Increase in team productivity",
                icon: FaChartLine
              },
              {
                title: "Customer Satisfaction",
                value: "42%",
                description: "Improvement in customer satisfaction",
                icon: FaHandshake
              },
              {
                title: "Product Quality",
                value: "37%",
                description: "Improvement in overall product quality",
                icon: FaClipboardCheck
              },
              {
                title: "Employee Engagement",
                value: "40%",
                description: "Increase in employee engagement and satisfaction",
                icon: FaUsers
              },
              {
                title: "ROI",
                value: "30%",
                description: "Higher return on investment compared to traditional methods",
                icon: FaRegChartBar
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-8 shadow-lg cursor-pointer"
                onClick={() => openInquiryForm('Agile Benefits')}
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2 text-center">{benefit.value}</div>
                <p className="text-purple-50 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Organization?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto"
          >
            Let's work together to implement agile methodologies that drive real results
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('Agile Consultation')}
            className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center mx-auto"
          >
            Get Started <FaArrowRight className="ml-2" />
          </motion.button>
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
    </motion.div>
  );
};

export default AgileTransformation; 