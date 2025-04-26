import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBolt, FaDatabase, FaCloud, FaRocket, FaChartLine, FaCogs, FaCode, FaServer, FaCloudUploadAlt, FaShieldAlt, FaUsersCog } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const Databricks = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Databricks');
  
  const openInquiryForm = (service) => {
    setInquiryType(`Databricks - ${service}`);
    setShowInquiryForm(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: <FaCloudUploadAlt className="text-purple-500 text-3xl" />,
      title: "Databricks Implementation",
      description: "CloudDigify expertly deploys and configures Databricks environments tailored to your specific business needs, ensuring optimal architecture from day one."
    },
    {
      icon: <FaDatabase className="text-purple-500 text-3xl" />,
      title: "Data Lake & Delta Lake",
      description: "CloudDigify architects scalable data lake solutions with Databricks Delta Lake, providing transaction support, schema enforcement, and time travel capabilities."
    },
    {
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
      title: "Advanced Analytics",
      description: "CloudDigify leverages Databricks' machine learning capabilities to build predictive models that unlock actionable insights from your data."
    },
    {
      icon: <FaRocket className="text-purple-500 text-3xl" />,
      title: "MLOps & Model Deployment",
      description: "CloudDigify implements end-to-end MLOps practices on Databricks, streamlining the entire machine learning lifecycle from experimentation to production."
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: "Security & Governance",
      description: "CloudDigify establishes robust security controls and governance frameworks for your Databricks environment, ensuring data protection and compliance."
    },
    {
      icon: <FaUsersCog className="text-purple-500 text-3xl" />,
      title: "Training & Enablement",
      description: "CloudDigify provides comprehensive training programs that empower your team to leverage the full potential of Databricks for data engineering and analytics."
    }
  ];

  const benefits = [
    {
      title: "Unified Data Platform",
      description: "CloudDigify helps you consolidate data engineering, analytics, and machine learning on a single collaborative platform, eliminating silos and improving productivity."
    },
    {
      title: "Accelerated Innovation",
      description: "CloudDigify's Databricks implementations reduce time-to-insight by 5-10x, allowing your data teams to experiment faster and deliver more value to the business."
    },
    {
      title: "Enterprise-Grade Reliability",
      description: "CloudDigify ensures your Databricks environment is production-ready with robust monitoring, security, and performance optimization."
    },
    {
      title: "Cost Optimization",
      description: "CloudDigify implements best practices for Databricks usage optimization, reducing cloud costs while maximizing performance and capabilities."
    }
  ];

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
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Platform
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Transforms Your Data with Databricks</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to implement and optimize Databricks solutions that turn your data lakes into powerful engines for analytics and AI. Our experts combine deep Databricks platform knowledge with industry experience to deliver implementations that accelerate innovation, reduce costs, and generate measurable business outcomes.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for Databricks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-6">CloudDigify's Databricks Implementation Process</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Assessment & Strategy",
                    description: "CloudDigify evaluates your data landscape and business goals to design a tailored Databricks strategy that delivers maximum value."
                  },
                  {
                    step: "Architecture Design",
                    description: "CloudDigify creates a secure, scalable Databricks architecture optimized for your specific needs and integrated with your existing systems."
                  },
                  {
                    step: "Implementation",
                    description: "CloudDigify's certified experts deploy and configure Databricks following industry best practices and architectural patterns."
                  },
                  {
                    step: "Data Integration",
                    description: "CloudDigify builds robust data pipelines that seamlessly connect your data sources to the Databricks platform."
                  },
                  {
                    step: "Enablement & Optimization",
                    description: "CloudDigify provides training, documentation, and ongoing optimization to ensure your team gets maximum value from Databricks."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Results You Can Expect with CloudDigify</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: "70%",
                  description: "Reduction in data processing time with optimized Databricks implementation"
                },
                {
                  metric: "3-5x",
                  description: "Faster time-to-insight for your data scientists and analysts"
                },
                {
                  metric: "40%",
                  description: "Typical cost savings through CloudDigify's optimization strategies"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-purple-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-purple-700 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy with Databricks?</h2>
            <p className="text-xl mb-8">
              Partner with CloudDigify to implement a Databricks solution that delivers tangible business value and competitive advantage.
            </p>
            <button 
              onClick={() => openInquiryForm('Databricks Implementation')}
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Databricks Journey
            </button>
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
  );
};

export default Databricks; 